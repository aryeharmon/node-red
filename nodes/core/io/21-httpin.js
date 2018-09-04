/**
 * Copyright JS Foundation and other contributors, http://js.foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

var Recaptcha = require('express-recaptcha').Recaptcha;
var recaptcha = new Recaptcha(process.env.RECAPTCHA_SITE_KEY, process.env.RECAPTCHA_SECRET_KEY)

module.exports = function(RED) {
    "use strict";
    var bodyParser = require("body-parser");
    var multer = require("multer");
    var cheerio = require("cheerio");
    var cookieParser = require("cookie-parser");
    var getBody = require('raw-body');
    var cors = require('cors');
    var jsonParser = bodyParser.json();
    var urlencParser = bodyParser.urlencoded({extended:true});
    var onHeaders = require('on-headers');
    var typer = require('media-typer');
    var isUtf8 = require('is-utf8');
    var hashSum = require("hash-sum");
    var authenticator = require("authenticator");
    var bcrypt = require('bcrypt');

    function rawBodyParser(req, res, next) {
        if (req.skipRawBodyParser) { next(); } // don't parse this if told to skip
        if (req._body) { return next(); }
        req.body = "";
        req._body = true;

        var isText = true;
        var checkUTF = false;

        if (req.headers['content-type']) {
            var parsedType = typer.parse(req.headers['content-type'])
            if (parsedType.type === "text") {
                isText = true;
            } else if (parsedType.subtype === "xml" || parsedType.suffix === "xml") {
                isText = true;
            } else if (parsedType.type !== "application") {
                isText = false;
            } else if (parsedType.subtype !== "octet-stream") {
                checkUTF = true;
            } else {
                // applicatino/octet-stream
                isText = false;
            }
        }

        getBody(req, {
            length: req.headers['content-length'],
            encoding: isText ? "utf8" : null
        }, function (err, buf) {
            if (err) { return next(err); }
            if (!isText && checkUTF && isUtf8(buf)) {
                buf = buf.toString()
            }
            req.body = buf;
            next();
        });
    }

    var corsSetup = false;

    function createRequestWrapper(node,req) {
        // This misses a bunch of properties (eg headers). Before we use this function
        // need to ensure it captures everything documented by Express and HTTP modules.
        var wrapper = {
            _req: req
        };
        var toWrap = [
            "param",
            "get",
            "is",
            "acceptsCharset",
            "acceptsLanguage",
            "app",
            "baseUrl",
            "body",
            "cookies",
            "fresh",
            "hostname",
            "ip",
            "ips",
            "originalUrl",
            "params",
            "path",
            "protocol",
            "query",
            "route",
            "secure",
            "signedCookies",
            "stale",
            "subdomains",
            "xhr",
            "socket" // TODO: tidy this up
        ];
        toWrap.forEach(function(f) {
            if (typeof req[f] === "function") {
                wrapper[f] = function() {
                    node.warn(RED._("httpin.errors.deprecated-call",{method:"msg.req."+f}));
                    var result = req[f].apply(req,arguments);
                    if (result === req) {
                        return wrapper;
                    } else {
                        return result;
                    }
                }
            } else {
                wrapper[f] = req[f];
            }
        });


        return wrapper;
    }
    function createResponseWrapper(node,res) {
        var wrapper = {
            _res: res
        };
        var toWrap = [
            "append",
            "attachment",
            "cookie",
            "clearCookie",
            "download",
            "end",
            "format",
            "get",
            "json",
            "jsonp",
            "links",
            "location",
            "redirect",
            "render",
            "send",
            "sendfile",
            "sendFile",
            "sendStatus",
            "set",
            "status",
            "type",
            "vary"
        ];
        toWrap.forEach(function(f) {
            wrapper[f] = function() {
                node.warn(RED._("httpin.errors.deprecated-call",{method:"msg.res."+f}));
                var result = res[f].apply(res,arguments);
                if (result === res) {
                    return wrapper;
                } else {
                    return result;
                }
            }
        });
        return wrapper;
    }

    var corsHandler = function(req,res,next) { next(); }

    if (RED.settings.httpNodeCors) {
        corsHandler = cors(RED.settings.httpNodeCors);
        RED.httpNode.options("*",corsHandler);
    }

    function HTTPIn(n) {
        RED.nodes.createNode(this,n);

        n.output_settings = [];
        n.input_settings = [];

        if (RED.settings.httpNodeRoot !== false) {
            var that = this;
            if (!n.url) {
                this.warn(RED._("httpin.errors.missing-path"));
                return;
            }
            this.url = n.url;
            if (this.url[0] !== '/') {
                this.url = '/'+this.url;
            }
            this.method = n.method;
            this.upload = n.upload;
            this.must_log_in = n.must_log_in;
            this.must_be_active_account = n.must_be_active_account;
            this.verify_captcha = n.verify_captcha;
            this.swaggerDoc = n.swaggerDoc;
            this.layout = n.layout;
            this.output_settings = n.output_settings;
            this.input_settings = n.input_settings;
            this.security_enabled = n.security_enabled;
            this.security_type = n.security_type;

            var node = this;

            this.errorHandler = function(err,req,res,next) {
                node.warn(err);
                res.sendStatus(500);
            };

            this.callback = function(req,res, next) {

                if (that.verify_captcha && req.recaptcha.error) {
			req.flash('error', 'Invalid captcha.');
			res.redirect('back');
			node.status({text: 'invalid captcha.'})
			return;
		}
        if (that.must_log_in && (!req.user || req.user.type !== 'Account')) {
            req.flash('error', 'you must login in order to access this area');
            res.redirect('login');
            node.status({text: 'user not logged in.'})
            return;
        }
        if (that.must_be_active_account && (!req.user || req.user.type !== 'Account' || !req.user.active)) {
            req.flash('error', 'you must activate your account to access this area.');
            res.redirect('login');
            node.status({text: 'user not active.'})
            return;
        }

		if (that.security_enabled && that.security_type) {
			if (req.user || true) {
				RED.settings.functionGlobalContext.app.models.Account.findOne({
					where: {
						$or: [
							{
								id: req.user ? req.user.id : null,
							},
							{
								email: req.body.email,
							}
						],
					},
					include: ['AuthenticatorSecurityKey', 'SmsSecurityKey', 'EmailSecurityKey'],
				}).then(function(account) {
					if (!account) {
                                                req.flash('error', 'you must login in order to access this area');
			                        res.redirect('back');
						node.status({'text': 'no account found'});
						return;
					}

					if (account.google_authenticator.indexOf(that.security_type) > -1 && account.AuthenticatorSecurityKey) {
						req.body.validation = req.body.validation || {};
						if (!req.body.validation.google_authenticator || !authenticator.verifyToken(account.AuthenticatorSecurityKey.secret, req.body.validation.google_authenticator)) {
                        	                        req.flash('error', 'invalid google authentication');
                	                                res.redirect('back');
        	                                        node.status({'text': 'invalid google authentication'});
	                                                return;
						}
					}
					if (account.email_authenticator.indexOf(that.security_type) > -1 && account.EmailSecurityKey) {
						req.body.validation = req.body.validation || {}; console.log(req.body.validation, 444, account.EmailSecurityKey.secret);
						if (!authenticator.verifyToken(account.EmailSecurityKey.secret, req.body.validation.email_authenticator)) {
                        	                        req.flash('error', 'invalid email authentication');
                	                                res.redirect('back');
        	                                        node.status({'text': 'invalid email authentication'});
	                                                return;
						}
					}
					if (account.sms_authenticator.indexOf(that.security_type) > -1 && account.SmsSecurityKey) {
						req.body.validation = req.body.validation || {};
						if (!authenticator.verifyToken(account.SmsSecurityKey.secret, req.body.validation.sms_authenticator)) {
                        	                        req.flash('error', 'invalid sms authentication');
                	                                res.redirect('back');
        	                                        node.status({'text': 'invalid sms authentication'});
	                                                return;
						}
					}
                                        if (account.password_authenticator.indexOf(that.security_type) > -1) {
						if (!bcrypt.compareSync(req.body.password, account.password)) {
                                                        req.flash('error', 'invalid password');
                                                        res.redirect('back');
                                                        node.status({'text': 'invalid password authentication'});
                                                        return;
						}
                                        }

					// res.json(account);

                var msgid = RED.util.generateId();
                res._msgid = msgid;
                if (node.method.match(/^(post|delete|put|options|patch)$/)) {
                    node.send({_msgid:msgid,req:req,next:next,res:createResponseWrapper(node,res),payload:req.body, _payload: req.body});
                } else if (node.method == "get") {
                    node.send({_msgid:msgid,req:req,next:next,res:createResponseWrapper(node,res),payload:req.query, _payload: req.body});
                } else {
                    node.send({_msgid:msgid,req:req,next:next,res:createResponseWrapper(node,res)});
                }


					// node.status({'text': 'found account: ' + account.id})
				})

				// check email validation
				// check sms validation
			}


			return;
		}



                var msgid = RED.util.generateId();
                res._msgid = msgid;
                if (node.method.match(/^(post|delete|put|options|patch)$/)) {
                    node.send({_msgid:msgid,req:req,next:next,res:createResponseWrapper(node,res),payload:req.body, _payload: req.body});
                } else if (node.method == "get") {
                    node.send({_msgid:msgid,req:req,next:next,res:createResponseWrapper(node,res),payload:req.query, _payload: req.body});
                } else {
                    node.send({_msgid:msgid,req:req,next:next,res:createResponseWrapper(node,res)});
                }
            };

            var httpMiddleware = function(req,res,next) { next(); }

            if (RED.settings.httpNodeMiddleware) {
                if (typeof RED.settings.httpNodeMiddleware === "function") {
                    httpMiddleware = RED.settings.httpNodeMiddleware;
                }
            }

            var metricsHandler = function(req,res,next) { next(); }
            if (this.metric()) {
                metricsHandler = function(req, res, next) {
                    var startAt = process.hrtime();
                    onHeaders(res, function() {
                        if (res._msgid) {
                            var diff = process.hrtime(startAt);
                            var ms = diff[0] * 1e3 + diff[1] * 1e-6;
                            var metricResponseTime = ms.toFixed(3);
                            var metricContentLength = res._headers["content-length"];
                            //assuming that _id has been set for res._metrics in HttpOut node!
                            node.metric("response.time.millis", {_msgid:res._msgid} , metricResponseTime);
                            node.metric("response.content-length.bytes", {_msgid:res._msgid} , metricContentLength);
                        }
                    });
                    next();
                };
            }

            var multipartParser = function(req,res,next) { next(); }
            if (this.upload) {
                var mp = multer({ storage: multer.memoryStorage() }).any();
                multipartParser = function(req,res,next) {
                    mp(req,res,function(err) {
                        req._body = true;
                        next(err);
                    })
                };
            }

            if (this.method == "get") {
                RED.httpNode.get(this.url,cookieParser(),httpMiddleware,corsHandler,metricsHandler,this.callback,this.errorHandler);
            } else if (this.method == "post") {
                RED.httpNode.post(this.url,cookieParser(),httpMiddleware,corsHandler,metricsHandler,jsonParser,urlencParser,multipartParser,rawBodyParser,recaptcha.middleware.verify,this.callback,this.errorHandler);
            } else if (this.method == "put") {
                RED.httpNode.put(this.url,cookieParser(),httpMiddleware,corsHandler,metricsHandler,jsonParser,urlencParser,rawBodyParser,this.callback,this.errorHandler);
            } else if (this.method == "patch") {
                RED.httpNode.patch(this.url,cookieParser(),httpMiddleware,corsHandler,metricsHandler,jsonParser,urlencParser,rawBodyParser,this.callback,this.errorHandler);
            } else if (this.method == "delete") {
                RED.httpNode.delete(this.url,cookieParser(),httpMiddleware,corsHandler,metricsHandler,jsonParser,urlencParser,rawBodyParser,this.callback,this.errorHandler);
            }

            this.on("close",function() {
                var node = this;

                RED.httpNode.stack.forEach(function(route,i,routes) {
                    if (route.route && route.route.path === node.url && route.route.methods[node.method]) {
                        routes.splice(i,1);
                    }
                });
            });
        } else {
            this.warn(RED._("httpin.errors.not-created"));
        }

        if (n.layout) {
          RED.settings.functionGlobalContext.app.models.CmsBlockLayout.findOne({where: {id: n.layout}}).then(function(layout) {
		if (!layout) { return; }
            var $ = cheerio.load(layout.html || '<div></div>');

            //$("form").each(function() {
              //$(this).find(':input').each(function(input) {
              $(':input').each(function(input) {
                var name = $(this).attr('name');
                if (name) {
                  n.output_settings.push(name.replace('[]', ''));
                  console.log(name);
                }
              })
            //});

          });
        }

    }
    RED.nodes.registerType("http in",HTTPIn);

    function HTTPOut(n) {
        RED.nodes.createNode(this,n);
        var node = this;
        this.headers = n.headers||{};
        this.statusCode = n.statusCode;
        this.on("input",function(msg) {
            if (msg.res) {
                var headers = RED.util.cloneMessage(node.headers);
                if (msg.headers) {
                    if (msg.headers.hasOwnProperty('x-node-red-request-node')) {
                        var headerHash = msg.headers['x-node-red-request-node'];
                        delete msg.headers['x-node-red-request-node'];
                        var hash = hashSum(msg.headers);
                        if (hash === headerHash) {
                            delete msg.headers;
                        }
                    }
                    if (msg.headers) {
                        for (var h in msg.headers) {
                            if (msg.headers.hasOwnProperty(h) && !headers.hasOwnProperty(h)) {
                                headers[h] = msg.headers[h];
                            }
                        }
                    }
                }
                if (Object.keys(headers).length > 0) {
                    msg.res._res.set(headers);
                }
                if (msg.cookies) {
                    for (var name in msg.cookies) {
                        if (msg.cookies.hasOwnProperty(name)) {
                            if (msg.cookies[name] === null || msg.cookies[name].value === null) {
                                if (msg.cookies[name]!==null) {
                                    msg.res._res.clearCookie(name,msg.cookies[name]);
                                } else {
                                    msg.res._res.clearCookie(name);
                                }
                            } else if (typeof msg.cookies[name] === 'object') {
                                msg.res._res.cookie(name,msg.cookies[name].value,msg.cookies[name]);
                            } else {
                                msg.res._res.cookie(name,msg.cookies[name]);
                            }
                        }
                    }
                }
                var statusCode = node.statusCode || msg.statusCode || 200;
                if (typeof msg.payload == "object" && !Buffer.isBuffer(msg.payload)) {
                    msg.res._res.status(statusCode).jsonp(msg.payload);
                } else {
                    if (msg.res._res.get('content-length') == null) {
                        var len;
                        if (msg.payload == null) {
                            len = 0;
                        } else if (Buffer.isBuffer(msg.payload)) {
                            len = msg.payload.length;
                        } else if (typeof msg.payload == "number") {
                            len = Buffer.byteLength(""+msg.payload);
                        } else {
                            len = Buffer.byteLength(msg.payload);
                        }
                        msg.res._res.set('content-length', len);
                    }

                    if (typeof msg.payload === "number") {
                        msg.payload = ""+msg.payload;
                    }
                    msg.res._res.status(statusCode).send(msg.payload);
                }
            } else {
                node.warn(RED._("httpin.errors.no-response"));
            }
        });
    }
    RED.nodes.registerType("http response",HTTPOut);

    RED.httpAdmin.get('/get-layouts', function(req, res, next) {
      if (RED.settings.functionGlobalContext.site_id) {
        var where = {site_id: RED.settings.functionGlobalContext.site_id};
      } else {
        var where = {};
      }

      RED.settings.functionGlobalContext.app.models.CmsBlockLayout.findAll({where: where, raw: true}).then(function(layouts) {
        res.json(layouts.map(function(layout) {
          return {
            id: layout.id,
            name: layout.name,
          };
        }))
      });
    });
}
