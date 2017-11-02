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
 module.exports = function() {
var that = this;

var fs = require('fs');
var path = require('path');
var redNodes;

function determineLangFromHeaders(acceptedLanguages){
    var lang = i18n.defaultLang;
    acceptedLanguages = acceptedLanguages || [];
    if (acceptedLanguages.length >= 1) {
        lang = acceptedLanguages[0];
    }
    return lang;
}
return {
    init: function(runtime) {
        that.i18n = runtime.i18n;
        redNodes = runtime.nodes;
    },
    get: function(req,res) {
        var namespace = req.params[0];
        var lngs = req.query.lng;
        namespace = namespace.replace(/\.json$/,"");
        var lang = req.query.lng; //determineLangFromHeaders(req.acceptsLanguages() || []);
        var prevLang = that.i18n.i.lng();
        // Trigger a load from disk of the language if it is not the default
        that.i18n.i.setLng(lang, function(){
            var catalog = that.i18n.catalog(namespace,lang);
            res.json(catalog||{});
        });
        that.i18n.i.setLng(prevLang);

    },
    getAllNodes: function(req,res) {
        var lngs = req.query.lng;
        var nodeList = redNodes.getNodeList();
        var result = {};
        nodeList.forEach(function(n) {
            if (n.module !== "node-red") {
                result[n.id] = that.i18n.catalog(n.id,lngs)||{};
            }
        });
        res.json(result);
    },
    determineLangFromHeaders: determineLangFromHeaders
}
};