!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).jsonata=e()}}(function(){return function e(t,r,n){function o(a,s){if(!r[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var f=r[a]={exports:{}};t[a][0].call(f.exports,function(e){var r=t[a][1][e];return o(r||e)},f,f.exports,e,t,r,n)}return r[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}({1:[function(e,t,r){(function(r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=n(e("babel-runtime/core-js/symbol")),i=n(e("babel-runtime/core-js/object/is")),a=n(e("babel-runtime/core-js/json/stringify")),s=n(e("babel-runtime/core-js/symbol/iterator")),u=n(e("babel-runtime/core-js/is-iterable")),c=n(e("babel-runtime/core-js/object/keys")),f=n(e("babel-runtime/regenerator")),l=n(e("babel-runtime/core-js/promise")),p=n(e("babel-runtime/core-js/number/is-integer")),d=n(e("babel-runtime/core-js/object/create")),h="function"==typeof o.default&&"symbol"==typeof s.default?function(e){return typeof e}:function(e){return e&&"function"==typeof o.default&&e.constructor===o.default&&e!==o.default.prototype?"symbol":typeof e},b=function(){function e(e){for(var t=1,r=[],n={},o=n;t<e.length;){var i=e.charAt(t);if(":"===i)break;var a=function(){r.push(n),o=n,n={}},s=function(e,t,r,n){for(var o=1,a=t;a<e.length;)if(a++,(i=e.charAt(a))===n){if(0==--o)break}else i===r&&o++;return a};switch(i){case"s":case"n":case"b":case"l":case"o":n.regex="["+i+"m]",n.type=i,a();break;case"a":n.regex="[asnblfom]",n.type=i,n.array=!0,a();break;case"f":n.regex="f",n.type=i,a();break;case"j":n.regex="[asnblom]",n.type=i,a();break;case"x":n.regex="[asnblfom]",n.type=i,a();break;case"-":o.context=!0,o.contextRegex=new RegExp(o.regex),o.regex+="?";break;case"?":case"+":o.regex+=i;break;case"(":var u=s(e,t,"(",")"),c=e.substring(t+1,u);if(-1!==c.indexOf("<"))throw{code:"S0402",stack:(new Error).stack,value:c,offset:t};n.regex="["+c+"m]",n.type="("+c+")",t=u,a();break;case"<":if("a"!==o.type&&"f"!==o.type)throw{code:"S0401",stack:(new Error).stack,value:o.type,offset:t};var f=s(e,t,"<",">");o.subtype=e.substring(t+1,f),t=f}t++}var l="^"+r.map(function(e){return"("+e.regex+")"}).join("")+"$",p=new RegExp(l),d=function(e){var t;if(B(e))t="f";else switch(void 0===e?"undefined":h(e)){case"string":t="s";break;case"number":t="n";break;case"boolean":t="b";break;case"object":t=null===e?"l":Array.isArray(e)?"a":"o";break;case"undefined":default:t="m"}return t},b=function(e,t){for(var n="^",o=0,i=0;i<r.length;i++){n+=r[i].regex;var a=t.match(n);if(null===a)throw{code:"T0410",stack:(new Error).stack,value:e[o],index:o+1};o=a[0].length}throw{code:"T0410",stack:(new Error).stack,value:e[o],index:o+1}};return{definition:e,validate:function(e,t){var n="";e.forEach(function(e){n+=d(e)});var o=p.exec(n);if(o){var i=[],a=0;return r.forEach(function(r,n){var s=e[a],u=o[n+1];if(""===u)if(r.context&&r.contextRegex){var c=d(t);if(!r.contextRegex.test(c))throw{code:"T0411",stack:(new Error).stack,value:t,index:a+1};i.push(t)}else i.push(s),a++;else u.split("").forEach(function(t){if("a"===r.type){if("m"===t)s=void 0;else{s=e[a];var n=!0;if(void 0!==r.subtype)if("a"!==t&&u!==r.subtype)n=!1;else if("a"===t&&s.length>0){var o=d(s[0]);n=o===r.subtype.charAt(0)&&0===s.filter(function(e){return d(e)!==o}).length}if(!n)throw{code:"T0412",stack:(new Error).stack,value:s,index:a+1,type:r.subtype};"a"!==t&&(s=[s])}i.push(s),a++}else i.push(s),a++})}),i}b(e,n)}}}function t(e){var t=!1;if("number"==typeof e&&(t=!isNaN(e))&&!isFinite(e))throw{code:"D1001",value:e,stack:(new Error).stack};return t}function n(e){var t=!1;return Array.isArray(e)&&(t=0===e.filter(function(e){return"string"!=typeof e}).length),t}function o(e){var r=!1;return Array.isArray(e)&&(r=0===e.filter(function(e){return!t(e)}).length),r}function b(e,t,r){var n,o,i;return f.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:(o=r.lookup("__evaluate_entry"))&&o(e,t,r),a.t0=e.type,a.next="path"===a.t0?5:"binary"===a.t0?8:"unary"===a.t0?11:"name"===a.t0?14:"literal"===a.t0?16:"wildcard"===a.t0?18:"descendant"===a.t0?20:"condition"===a.t0?22:"block"===a.t0?25:"bind"===a.t0?28:"regex"===a.t0?31:"function"===a.t0?33:"variable"===a.t0?36:"lambda"===a.t0?38:"partial"===a.t0?40:"apply"===a.t0?43:"sort"===a.t0?46:"transform"===a.t0?49:51;break;case 5:return a.delegateYield(y(e,t,r),"t1",6);case 6:return n=a.t1,a.abrupt("break",51);case 8:return a.delegateYield(k(e,t,r),"t2",9);case 9:return n=a.t2,a.abrupt("break",51);case 11:return a.delegateYield(w(e,t,r),"t3",12);case 12:return n=a.t3,a.abrupt("break",51);case 14:return n=j(e,t,r),a.abrupt("break",51);case 16:return n=O(e),a.abrupt("break",51);case 18:return n=E(e,t),a.abrupt("break",51);case 20:return n=A(e,t),a.abrupt("break",51);case 22:return a.delegateYield(R(e,t,r),"t4",23);case 23:return n=a.t4,a.abrupt("break",51);case 25:return a.delegateYield(C(e,t,r),"t5",26);case 26:return n=a.t5,a.abrupt("break",51);case 28:return a.delegateYield(L(e,t,r),"t6",29);case 29:return n=a.t6,a.abrupt("break",51);case 31:return n=G(e),a.abrupt("break",51);case 33:return a.delegateYield(Q(e,t,r),"t7",34);case 34:return n=a.t7,a.abrupt("break",51);case 36:return n=$(e,t,r),a.abrupt("break",51);case 38:return n=V(e,t,r),a.abrupt("break",51);case 40:return a.delegateYield(X(e,t,r),"t8",41);case 41:return n=a.t8,a.abrupt("break",51);case 43:return a.delegateYield(J(e,t,r),"t9",44);case 44:return n=a.t9,a.abrupt("break",51);case 46:return a.delegateYield(z(e,t,r),"t10",47);case 47:return n=a.t10,a.abrupt("break",51);case 49:return n=U(e,t,r),a.abrupt("break",51);case 51:if(!r.lookup("__jsonata_async")||void 0!==n&&null!==n&&"function"==typeof n.then||(n=l.default.resolve(n)),!r.lookup("__jsonata_async")||"function"!=typeof n.then||!e.nextFunction||"function"!=typeof n[e.nextFunction]){a.next=55;break}a.next=58;break;case 55:return a.next=57,n;case 57:n=a.sent;case 58:if(!e.hasOwnProperty("predicate")){a.next=61;break}return a.delegateYield(_(e.predicate,n,r),"t11",60);case 60:n=a.t11;case 61:if(!e.hasOwnProperty("group")){a.next=64;break}return a.delegateYield(F(e.group,n,r),"t12",63);case 63:n=a.t12;case 64:return(i=r.lookup("__evaluate_exit"))&&i(e,t,r,n),n&&n.sequence&&(n=n.value()),a.abrupt("return",n);case 68:case"end":return a.stop()}},ke[0],this)}function v(){var e=g([]);return 1===arguments.length&&e.push(arguments[0]),e}function g(e){return Object.defineProperty(e,"sequence",{enumerable:!1,configurable:!1,get:function(){return!0}}),Object.defineProperty(e,"keepSingleton",{enumerable:!1,configurable:!1,writable:!0,value:!1}),Object.defineProperty(e,"value",{enumerable:!1,configurable:!1,get:function(){return function(){switch(this.length){case 0:return;case 1:return this.keepSingleton?this:this[0];default:return this}}}}),e}function y(e,t,r){var n,o,i,a;return f.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:n="variable"===e.steps[0].type?v(t):Array.isArray(t)?t:v(t),i=0;case 2:if(!(i<e.steps.length)){s.next=17;break}if(a=e.steps[i],0!==i||!a.consarray){s.next=9;break}return s.delegateYield(b(a,n,r),"t0",6);case 6:o=s.t0,s.next=11;break;case 9:return s.delegateYield(m(a,n,r,i===e.steps.length-1),"t1",10);case 10:o=s.t1;case 11:if(void 0!==o&&0!==o.length){s.next=13;break}return s.abrupt("break",17);case 13:n=o;case 14:i++,s.next=2;break;case 17:return e.keepSingletonArray&&(o.keepSingleton=!0),s.abrupt("return",o);case 19:case"end":return s.stop()}},ke[1],this)}function m(e,t,r,n){var o,i,a,s;return f.default.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:o=v(),i=0;case 2:if(!(i<t.length)){u.next=9;break}return u.delegateYield(b(e,t[i],r),"t0",4);case 4:void 0!==(a=u.t0)&&o.push(a);case 6:i++,u.next=2;break;case 9:return s=v(),n&&1===o.length&&Array.isArray(o[0])&&!o[0].sequence?s=o[0]:o.forEach(function(e){!Array.isArray(e)||e.cons||e.keepSingleton?s.push(e):Array.prototype.push.apply(s,e)}),u.abrupt("return",s);case 12:case"end":return u.stop()}},ke[2],this)}function _(e,r,n){var o,i,a,s,u;return f.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:o=r,i=v(),a=0;case 3:if(!(a<e.length)){c.next=20;break}if(s=e[a],Array.isArray(o)||(o=v(o)),i=v(),"literal"!==s.type||!t(s.value)){c.next=14;break}u=s.value,(0,p.default)(u)||(u=Math.floor(u)),u<0&&(u=o.length+u),i=o[u],c.next=16;break;case 14:return c.delegateYield(x(s,o,n),"t0",15);case 15:i=c.t0;case 16:o=i;case 17:a++,c.next=3;break;case 20:return c.abrupt("return",i);case 21:case"end":return c.stop()}},ke[3],this)}function x(e,r,n){var i,a,s,u;return f.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:i=v(),a=0;case 2:if(!(a<r.length)){c.next=11;break}return s=r[a],c.delegateYield(b(e,s,n),"t0",5);case 5:t(u=c.t0)&&(u=[u]),o(u)?u.forEach(function(e){(0,p.default)(e)||(e=Math.floor(e)),e<0&&(e=r.length+e),e===a&&i.push(s)}):fe(u)&&i.push(s);case 8:a++,c.next=2;break;case 11:return c.abrupt("return",i);case 12:case"end":return c.stop()}},ke[4],this)}function k(e,t,r){var n,o,i,a;return f.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.delegateYield(b(e.lhs,t,r),"t0",1);case 1:return o=s.t0,s.delegateYield(b(e.rhs,t,r),"t1",3);case 3:i=s.t1,a=e.value,s.prev=5,s.t2=a,s.next="+"===s.t2?9:"-"===s.t2?9:"*"===s.t2?9:"/"===s.t2?9:"%"===s.t2?9:"="===s.t2?11:"!="===s.t2?11:"<"===s.t2?11:"<="===s.t2?11:">"===s.t2?11:">="===s.t2?11:"&"===s.t2?13:"and"===s.t2?15:"or"===s.t2?15:".."===s.t2?17:"in"===s.t2?19:21;break;case 9:return n=P(o,i,a),s.abrupt("break",21);case 11:return n=D(o,i,a),s.abrupt("break",21);case 13:return n=N(o,i),s.abrupt("break",21);case 15:return n=Y(o,i,a),s.abrupt("break",21);case 17:return n=I(o,i),s.abrupt("break",21);case 19:return n=M(o,i),s.abrupt("break",21);case 21:s.next=28;break;case 23:throw s.prev=23,s.t3=s.catch(5),s.t3.position=e.position,s.t3.token=a,s.t3;case 28:return s.abrupt("return",n);case 29:case"end":return s.stop()}},ke[5],this,[[5,23]])}function w(e,r,n){var o,i,a,s;return f.default.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:u.t0=e.value,u.next="-"===u.t0?3:"["===u.t0?15:"{"===u.t0?27:30;break;case 3:return u.delegateYield(b(e.expression,r,n),"t1",4);case 4:if(void 0!==(o=u.t1)){u.next=9;break}o=void 0,u.next=14;break;case 9:if(!t(o)){u.next=13;break}o=-o,u.next=14;break;case 13:throw{code:"D1002",stack:(new Error).stack,position:e.position,token:e.value,value:o};case 14:return u.abrupt("break",30);case 15:o=[],i=0;case 17:if(!(i<e.expressions.length)){u.next=25;break}return a=e.expressions[i],u.delegateYield(b(a,r,n),"t2",20);case 20:void 0!==(s=u.t2)&&("["===a.value?o.push(s):o=be(o,s));case 22:i++,u.next=17;break;case 25:return e.consarray&&Object.defineProperty(o,"cons",{enumerable:!1,configurable:!1,value:!0}),u.abrupt("break",30);case 27:return u.delegateYield(F(e,r,n),"t3",28);case 28:return o=u.t3,u.abrupt("break",30);case 30:return u.abrupt("return",o);case 31:case"end":return u.stop()}},ke[6],this)}function j(e,t,r){var n;if(Array.isArray(t)){n=v();for(var o=0;o<t.length;o++){var i=j(e,t[o],r);void 0!==i&&n.push(i)}}else null!==t&&"object"===(void 0===t?"undefined":h(t))&&(n=t[e.value]);return n}function O(e){return e.value}function E(e,t){var r=v();return null!==t&&"object"===(void 0===t?"undefined":h(t))&&(0,c.default)(t).forEach(function(e){var n=t[e];Array.isArray(n)?(n=S(n),r=be(r,n)):r.push(n)}),r}function S(e,t){return void 0===t&&(t=[]),Array.isArray(e)?e.forEach(function(e){S(e,t)}):t.push(e),t}function A(e,t){var r,n=v();return void 0!==t&&(T(t,n),r=1===n.length?n[0]:n),r}function T(e,t){Array.isArray(e)||t.push(e),Array.isArray(e)?e.forEach(function(e){T(e,t)}):null!==e&&"object"===(void 0===e?"undefined":h(e))&&(0,c.default)(e).forEach(function(r){T(e[r],t)})}function P(e,r,n){var o;if(void 0===e||void 0===r)return o;if(!t(e))throw{code:"T2001",stack:(new Error).stack,value:e};if(!t(r))throw{code:"T2002",stack:(new Error).stack,value:r};switch(n){case"+":o=e+r;break;case"-":o=e-r;break;case"*":o=e*r;break;case"/":o=e/r;break;case"%":o=e%r}return o}function D(e,t,r){var n,o=void 0===e?"undefined":h(e),i=void 0===t?"undefined":h(t);if("undefined"===o||"undefined"===i)return!1;var a=function(){if("string"!==o&&"number"!==o||"string"!==i&&"number"!==i)throw{code:"T2010",stack:(new Error).stack,value:"string"!==o&&"number"!==o?e:t};if(o!==i)throw{code:"T2009",stack:(new Error).stack,value:e,value2:t}};switch(r){case"=":n=e===t;break;case"!=":n=e!==t;break;case"<":a(),n=e<t;break;case"<=":a(),n=e<=t;break;case">":a(),n=e>t;break;case">=":a(),n=e>=t}return n}function M(e,t){var r=!1;if(void 0===e||void 0===t)return!1;Array.isArray(t)||(t=[t]);for(var n=0;n<t.length;n++)if(t[n]===e){r=!0;break}return r}function Y(e,t,r){var n;switch(r){case"and":n=fe(e)&&fe(t);break;case"or":n=fe(e)||fe(t)}return n}function N(e,t){var r="",n="";return void 0!==e&&(r=se(e)),void 0!==t&&(n=se(t)),r.concat(n)}function F(e,t,r){var n,o,i,a,s,u,c,l,p;return f.default.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:n={},o={},Array.isArray(t)||(t=v(t)),i=0;case 4:if(!(i<t.length)){d.next=21;break}a=t[i],s=0;case 7:if(!(s<e.lhs.length)){d.next=18;break}return u=e.lhs[s],d.delegateYield(b(u[0],a,r),"t0",10);case 10:if("string"==typeof(c=d.t0)){d.next=13;break}throw{code:"T1003",stack:(new Error).stack,position:e.position,value:c};case 13:l={data:a,expr:u[1]},o.hasOwnProperty(c)?o[c].data=be(o[c].data,a):o[c]=l;case 15:s++,d.next=7;break;case 18:i++,d.next=4;break;case 21:d.t1=f.default.keys(o);case 22:if((d.t2=d.t1()).done){d.next=30;break}return c=d.t2.value,l=o[c],d.delegateYield(b(l.expr,l.data,r),"t3",26);case 26:void 0!==(p=d.t3)&&(n[c]=p),d.next=22;break;case 30:return d.abrupt("return",n);case 31:case"end":return d.stop()}},ke[7],this)}function I(e,t){var r;if(void 0===e||void 0===t)return r;if(e>t)return r;if(!(0,p.default)(e))throw{code:"T2003",stack:(new Error).stack,value:e};if(!(0,p.default)(t))throw{code:"T2004",stack:(new Error).stack,value:t};r=new Array(t-e+1);for(var n=e,o=0;n<=t;n++,o++)r[o]=n;return g(r)}function L(e,t,r){var n;return f.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.delegateYield(b(e.rhs,t,r),"t0",1);case 1:if(n=o.t0,"variable"===e.lhs.type){o.next=4;break}throw{code:"D2005",stack:(new Error).stack,position:e.position,token:e.value,value:"path"===e.lhs.type?e.lhs.steps[0].value:e.lhs.value};case 4:return r.bind(e.lhs.value,n),o.abrupt("return",n);case 6:case"end":return o.stop()}},ke[8],this)}function R(e,t,r){var n,o;return f.default.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.delegateYield(b(e.condition,t,r),"t0",1);case 1:if(o=i.t0,!fe(o)){i.next=7;break}return i.delegateYield(b(e.then,t,r),"t1",4);case 4:n=i.t1,i.next=10;break;case 7:if(void 0===e.else){i.next=10;break}return i.delegateYield(b(e.else,t,r),"t2",9);case 9:n=i.t2;case 10:return i.abrupt("return",n);case 11:case"end":return i.stop()}},ke[9],this)}function C(e,t,r){var n,o,i;return f.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:o=me(r),i=0;case 2:if(!(i<e.expressions.length)){a.next=8;break}return a.delegateYield(b(e.expressions[i],t,o),"t0",4);case 4:n=a.t0;case 5:i++,a.next=2;break;case 8:return a.abrupt("return",n);case 9:case"end":return a.stop()}},ke[10],this)}function G(e){e.value.lastIndex=0;return function t(r){var n,o=e.value,i=o.exec(r);if(null!==i){if(n={match:i[0],start:i.index,end:i.index+i[0].length,groups:[]},i.length>1)for(var a=1;a<i.length;a++)n.groups.push(i[a]);n.next=function(){if(!(o.lastIndex>=r.length)){var n=t(r);if(n&&""===n.match&&o.lastIndex===e.value.lastIndex)throw{code:"D1004",stack:(new Error).stack,position:e.position,value:e.value.source};return n}}}return n}}function $(e,t,r){return""===e.value?t:r.lookup(e.value)}function z(e,t,r){var n,o,i;return f.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.delegateYield(b(e.lhs,t,r),"t0",1);case 1:return o=a.t0,i=function(t,n){for(var o=0,i=0;0===o&&i<e.rhs.length;i++){var a=e.rhs[i],s=q(a.expression,t,r),u=q(a.expression,n,r),c=void 0===s?"undefined":h(s),f=void 0===u?"undefined":h(u);if("undefined"!==c)if("undefined"!==f){if("string"!==c&&"number"!==c||"string"!==f&&"number"!==f)throw{code:"T2008",stack:(new Error).stack,position:e.position,value:"string"!==c&&"number"!==c?s:u};if(c!==f)throw{code:"T2007",stack:(new Error).stack,position:e.position,value:s,value2:u};s!==u&&(o=s<u?-1:1,!0===a.descending&&(o=-o))}else o=-1;else o="undefined"===f?0:1}return 1===o},n=ye(o,i),a.abrupt("return",n);case 5:case"end":return a.stop()}},ke[11],this)}function U(e,t,r){return ae(f.default.mark(function t(o){var i,a,s,u,c,l,p,d,v,g,y;return f.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==o){t.next=2;break}return t.abrupt("return",void 0);case 2:if(i=r.lookup("clone"),B(i)){t.next=5;break}throw{code:"T2013",stack:(new Error).stack,position:e.position};case 5:return t.delegateYield(H(i,[o],r),"t0",6);case 6:return a=t.t0,t.delegateYield(b(e.pattern,a,r),"t1",8);case 8:if(void 0===(s=t.t1)){t.next=33;break}Array.isArray(s)||(s=[s]),u=0;case 12:if(!(u<s.length)){t.next=33;break}return c=s[u],t.delegateYield(b(e.update,c,r),"t2",15);case 15:if(l=t.t2,"undefined"===(p=void 0===l?"undefined":h(l))){t.next=21;break}if("object"===p&&null!==l){t.next=20;break}throw{code:"T2011",stack:(new Error).stack,position:e.update.position,value:l};case 20:for(d in l)c[d]=l[d];case 21:if(void 0===e.delete){t.next=30;break}return t.delegateYield(b(e.delete,c,r),"t3",23);case 23:if(void 0===(v=t.t3)){t.next=30;break}if(g=v,Array.isArray(v)||(v=[v]),n(v)){t.next=29;break}throw{code:"T2012",stack:(new Error).stack,position:e.delete.position,value:g};case 29:for(y=0;y<v.length;y++)delete c[v[y]];case 30:u++,t.next=12;break;case 33:return t.abrupt("return",a);case 34:case"end":return t.stop()}},t,this)}),"<(oa):o>")}function q(e,t,r){for(var n=b(e,t,r),o=n.next();!o.done;)o=n.next(o.value);return o.value}function J(e,t,r){var n,o,i;return f.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if("function"!==e.rhs.type){a.next=7;break}return e.rhs.arguments.unshift(e.lhs),a.delegateYield(Q(e.rhs,t,r),"t0",3);case 3:n=a.t0,e.rhs.arguments.shift(),a.next=20;break;case 7:return a.delegateYield(b(e.lhs,t,r),"t1",8);case 8:return o=a.t1,a.delegateYield(b(e.rhs,t,r),"t2",10);case 10:if(i=a.t2,B(i)){a.next=13;break}throw{code:"T2006",stack:(new Error).stack,position:e.position,value:i};case 13:if(!B(o)){a.next=18;break}return a.delegateYield(H(Ae,[o,i],r),"t3",15);case 15:n=a.t3,a.next=20;break;case 18:return a.delegateYield(H(i,[o],r),"t4",19);case 19:n=a.t4;case 20:return a.abrupt("return",n);case 21:case"end":return a.stop()}},ke[12],this)}function B(e){return e&&(!0===e._jsonata_function||!0===e._jsonata_lambda)||"function"==typeof e}function W(e){return e&&!0===e._jsonata_lambda}function K(e){return"object"===(void 0===e?"undefined":h(e))&&null!==e&&(0,u.default)(e)&&"function"==typeof e[s.default]&&"next"in e&&"function"==typeof e.next}function Q(e,t,r){var n,o,i,a;return f.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.delegateYield(b(e.procedure,t,r),"t0",1);case 1:if(void 0!==(o=s.t0)||"path"!==e.procedure.type||!r.lookup(e.procedure.steps[0].value)){s.next=4;break}throw{code:"T1005",stack:(new Error).stack,position:e.position,token:e.procedure.steps[0].value};case 4:i=[],a=0;case 6:if(!(a<e.arguments.length)){s.next=14;break}return s.t1=i,s.delegateYield(b(e.arguments[a],t,r),"t2",9);case 9:s.t3=s.t2,s.t1.push.call(s.t1,s.t3);case 11:a++,s.next=6;break;case 14:return s.prev=14,s.delegateYield(H(o,i,t),"t4",16);case 16:n=s.t4,s.next=24;break;case 19:throw s.prev=19,s.t5=s.catch(14),s.t5.position=e.position,s.t5.token="path"===e.procedure.type?e.procedure.steps[0].value:e.procedure.value,s.t5;case 24:return s.abrupt("return",n);case 25:case"end":return s.stop()}},ke[13],this,[[14,19]])}function H(e,t,r){var n,o,i,a;return f.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.delegateYield(Z(e,t,r),"t0",1);case 1:n=s.t0;case 2:if(!W(n)||!0!==n.thunk){s.next=19;break}return s.delegateYield(b(n.body.procedure,n.input,n.environment),"t1",4);case 4:o=s.t1,i=[],a=0;case 7:if(!(a<n.body.arguments.length)){s.next=15;break}return s.t2=i,s.delegateYield(b(n.body.arguments[a],n.input,n.environment),"t3",10);case 10:s.t4=s.t3,s.t2.push.call(s.t2,s.t4);case 12:a++,s.next=7;break;case 15:return s.delegateYield(Z(o,i,r),"t5",16);case 16:n=s.t5,s.next=2;break;case 19:return s.abrupt("return",n);case 20:case"end":return s.stop()}},ke[14],this)}function Z(e,t,r){var n,o;return f.default.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(o=t,e&&(o=ee(e.signature,t,r)),!W(e)){i.next=7;break}return i.delegateYield(te(e,o),"t0",4);case 4:n=i.t0,i.next=22;break;case 7:if(!e||!0!==e._jsonata_function){i.next=14;break}if(n=e.implementation.apply(r,o),!K(n)){i.next=12;break}return i.delegateYield(n,"t1",11);case 11:n=i.t1;case 12:i.next=22;break;case 14:if("function"!=typeof e){i.next=21;break}if(n=e.apply(r,o),!K(n)){i.next=19;break}return i.delegateYield(n,"t2",18);case 18:n=i.t2;case 19:i.next=22;break;case 21:throw{code:"T1006",stack:(new Error).stack};case 22:return i.abrupt("return",n);case 23:case"end":return i.stop()}},ke[15],this)}function V(e,t,r){var n={_jsonata_lambda:!0,input:t,environment:r,arguments:e.arguments,signature:e.signature,body:e.body};return!0===e.thunk&&(n.thunk=!0),n}function X(e,t,r){var n,o,i,a,s;return f.default.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:o=[],i=0;case 2:if(!(i<e.arguments.length)){u.next=15;break}if("operator"!==(a=e.arguments[i]).type||"?"!==a.value){u.next=8;break}o.push(a),u.next=12;break;case 8:return u.t0=o,u.delegateYield(b(a,t,r),"t1",10);case 10:u.t2=u.t1,u.t0.push.call(u.t0,u.t2);case 12:i++,u.next=2;break;case 15:return u.delegateYield(b(e.procedure,t,r),"t3",16);case 16:if(void 0!==(s=u.t3)||"path"!==e.procedure.type||!r.lookup(e.procedure.steps[0].value)){u.next=19;break}throw{code:"T1007",stack:(new Error).stack,position:e.position,token:e.procedure.steps[0].value};case 19:if(!W(s)){u.next=23;break}n=re(s,o),u.next=32;break;case 23:if(!s||!0!==s._jsonata_function){u.next=27;break}n=ne(s.implementation,o),u.next=32;break;case 27:if("function"!=typeof s){u.next=31;break}n=ne(s,o),u.next=32;break;case 31:throw{code:"T1008",stack:(new Error).stack,position:e.position,token:"path"===e.procedure.type?e.procedure.steps[0].value:e.procedure.value};case 32:return u.abrupt("return",n);case 33:case"end":return u.stop()}},ke[16],this)}function ee(e,t,r){return void 0===e?t:e.validate(t,r)}function te(e,t){var r,n;return f.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(n=me(e.environment),e.arguments.forEach(function(e,r){n.bind(e.value,t[r])}),"function"!=typeof e.body){o.next=7;break}return o.delegateYield(oe(e.body,n),"t0",4);case 4:r=o.t0,o.next=9;break;case 7:return o.delegateYield(b(e.body,e.input,n),"t1",8);case 8:r=o.t1;case 9:return o.abrupt("return",r);case 10:case"end":return o.stop()}},ke[17],this)}function re(e,t){var r=me(e.environment),n=[];return e.arguments.forEach(function(e,o){var i=t[o];i&&"operator"===i.type&&"?"===i.value?n.push(e):r.bind(e.value,i)}),{_jsonata_lambda:!0,input:e.input,environment:r,arguments:n,body:e.body}}function ne(e,t){var r=ie(e),n="function("+(r=r.map(function(e){return"$"+e.trim()})).join(", ")+"){ _ }",o=Ee(n);return o.body=e,re(o,t)}function oe(e,t){var r,n,o;return f.default.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(r=ie(e),n=r.map(function(e){return t.lookup(e.trim())}),o=e.apply(null,n),!K(o)){i.next=6;break}return i.delegateYield(o,"t0",5);case 5:o=i.t0;case 6:return i.abrupt("return",o);case 7:case"end":return i.stop()}},ke[18],this)}function ie(e){var t=e.toString();return/\(([^)]*)\)/.exec(t)[1].split(",")}function ae(t,r){var n={_jsonata_function:!0,implementation:t};return void 0!==r&&(n.signature=e(r)),n}function se(e){if(void 0!==e){var r;if("string"==typeof e)r=e;else if(B(e))r="";else{if("number"==typeof e&&!isFinite(e))throw{code:"D3001",value:e,stack:(new Error).stack};r=(0,a.default)(e,function(e,r){return void 0!==r&&null!==r&&r.toPrecision&&t(r)?Number(r.toPrecision(13)):r&&B(r)?"":r})}return r}}function ue(e,t,r,n){var o,i,a,s,u,c,l;return f.default.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(void 0!==e){f.next=2;break}return f.abrupt("return",void 0);case 2:if(""!==t){f.next=4;break}throw{code:"D3010",stack:(new Error).stack,value:t,index:2};case 4:if(!(n<0)){f.next=6;break}throw{code:"D3011",stack:(new Error).stack,value:n,index:4};case 6:if(o="string"==typeof r?function(e){for(var t="",n=0,o=r.indexOf("$",n);-1!==o&&n<r.length;){t+=r.substring(n,o),n=o+1;var i=r.charAt(n);if("$"===i)t+="$",n++;else if("0"===i)t+=e.match,n++;else{var a;if(a=0===e.groups.length?1:Math.floor(Math.log(e.groups.length)*Math.LOG10E)+1,o=parseInt(r.substring(n,n+a),10),a>1&&o>e.groups.length&&(o=parseInt(r.substring(n,n+a-1),10)),isNaN(o))t+="$";else{if(e.groups.length>0){var s=e.groups[o-1];void 0!==s&&(t+=s)}n+=o.toString().length}}o=r.indexOf("$",n)}return t+=r.substring(n)}:r,i="",a=0,!(void 0===n||n>0)){f.next=39;break}if(s=0,"string"!=typeof t){f.next=17;break}for(u=e.indexOf(t,a);-1!==u&&(void 0===n||s<n);)i+=e.substring(a,u),i+=r,a=u+t.length,s++,u=e.indexOf(t,a);i+=e.substring(a),f.next=37;break;case 17:if(void 0===(c=t(e))){f.next=36;break}case 19:if(void 0===c||!(void 0===n||s<n)){f.next=33;break}return i+=e.substring(a,c.start),f.delegateYield(H(o,[c],null),"t0",22);case 22:if("string"!=typeof(l=f.t0)){f.next=27;break}i+=l,f.next=28;break;case 27:throw{code:"D3012",stack:(new Error).stack,value:l};case 28:a=c.start+c.match.length,s++,c=c.next(),f.next=19;break;case 33:i+=e.substring(a),f.next=37;break;case 36:i=e;case 37:f.next=40;break;case 39:i=e;case 40:return f.abrupt("return",i);case 41:case"end":return f.stop()}},ke[19],this)}function ce(e,t){var r;if(void 0!==e){if(t){var n=e.toString().split("e");e=+(n[0]+"e"+(n[1]?+n[1]+t:t))}var o=(r=Math.round(e))-e;return.5===Math.abs(o)&&1===Math.abs(r%2)&&(r-=1),t&&(r=+((n=r.toString().split("e"))[0]+"e"+(n[1]?+n[1]-t:-t))),(0,i.default)(r,-0)&&(r=0),r}}function fe(e){if(void 0!==e){var r=!1;return Array.isArray(e)?1===e.length?r=fe(e[0]):e.length>1&&(r=e.filter(function(e){return fe(e)}).length>0):"string"==typeof e?e.length>0&&(r=!0):t(e)?0!==e&&(r=!0):null!==e&&"object"===(void 0===e?"undefined":h(e))?(0,c.default)(e).length>0&&(W(e)||e._jsonata_function||(r=!0)):"boolean"==typeof e&&!0===e&&(r=!0),r}}function le(e,t){var r,n,o,i,a;return f.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(void 0!==e){s.next=2;break}return s.abrupt("return",void 0);case 2:r=v(),n=0;case 4:if(!(n<e.length)){s.next=15;break}return o=[e[n]],(i="function"==typeof t?t.length:!0===t._jsonata_function?t.implementation.length:t.arguments.length)>=2&&o.push(n),i>=3&&o.push(e),s.delegateYield(H(t,o,null),"t0",10);case 10:void 0!==(a=s.t0)&&r.push(a);case 12:n++,s.next=4;break;case 15:return s.abrupt("return",r);case 16:case"end":return s.stop()}},ke[20],this)}function pe(e,t){var r,n,o,i;return f.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(void 0!==e){a.next=2;break}return a.abrupt("return",void 0);case 2:for(r=v(),n=function(e,r,n){for(var o=H(t,[e,r,n],null),i=o.next();!i.done;)i=o.next(i.value);return i.value},o=0;o<e.length;o++)i=e[o],fe(n(i,o,e))&&r.push(i);return a.abrupt("return",r);case 6:case"end":return a.stop()}},ke[21],this)}function de(e,t,r){var n,o;return f.default.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(void 0!==e){i.next=2;break}return i.abrupt("return",void 0);case 2:if(2===t.length||!0===t._jsonata_function&&2===t.implementation.length||2===t.arguments.length){i.next=4;break}throw{stack:(new Error).stack,code:"D3050",index:1};case 4:void 0===r&&e.length>0?(n=e[0],o=1):(n=r,o=0);case 5:if(!(o<e.length)){i.next=11;break}return i.delegateYield(H(t,[n,e[o]],null),"t0",7);case 7:n=i.t0,o++,i.next=5;break;case 11:return i.abrupt("return",n);case 12:case"end":return i.stop()}},ke[22],this)}function he(e){var t=v();if(Array.isArray(e)){var r={};e.forEach(function(e){var t=he(e);Array.isArray(t)&&t.forEach(function(e){r[e]=!0})}),t=he(r)}else null===e||"object"!==(void 0===e?"undefined":h(e))||W(e)?t=void 0:0===(t=(0,c.default)(e)).length&&(t=void 0);return t}function be(e,t){return void 0===e?t:void 0===t?e:(Array.isArray(e)||(e=v(e)),Array.isArray(t)||(t=[t]),Array.prototype.push.apply(e,t),e)}function ve(e){var t=v();if(Array.isArray(e))e.forEach(function(e){t=be(t,ve(e))});else if(null===e||"object"!==(void 0===e?"undefined":h(e))||W(e))t=e;else for(var r in e){var n={};n[r]=e[r],t.push(n)}return t}function ge(e,t){var r,n,o;return f.default.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:r=v(),i.t0=f.default.keys(e);case 2:if((i.t1=i.t0()).done){i.next=11;break}return n=i.t1.value,o=[e[n],n],i.t2=r,i.delegateYield(H(t,o,null),"t3",7);case 7:i.t4=i.t3,i.t2.push.call(i.t2,i.t4),i.next=2;break;case 11:return i.abrupt("return",r);case 12:case"end":return i.stop()}},ke[23],this)}function ye(e,t){if(void 0!==e){if(e.length<=1)return e;var r;if(void 0===t){if(!o(e)&&!n(e))throw{stack:(new Error).stack,code:"D3070",index:1};r=function(e,t){return e>t}}else r="function"==typeof t?t:function(e,r){for(var n=H(t,[e,r],null),o=n.next();!o.done;)o=n.next(o.value);return o.value};var i=function(e,t){var n=[];return function e(t,n,o){0===n.length?Array.prototype.push.apply(t,o):0===o.length?Array.prototype.push.apply(t,n):r(n[0],o[0])?(t.push(o[0]),e(t,n,o.slice(1))):(t.push(n[0]),e(t,n.slice(1),o))}(n,e,t),n};return function e(t){if(t.length<=1)return t;var r=Math.floor(t.length/2),n=t.slice(0,r),o=t.slice(r);return n=e(n),o=e(o),i(n,o)}(e)}}function me(e){var t={};return{bind:function(e,r){t[e]=r},lookup:function(r){var n;return t.hasOwnProperty(r)?n=t[r]:e&&(n=e.lookup(r)),n}}}function _e(e){var t="Unknown error";void 0!==e.message&&(t=e.message);var r=Pe[e.code];return void 0!==r&&(t=(t=r.replace(/\{\{\{([^}]+)}}}/g,function(){return e[arguments[1]]})).replace(/\{\{([^}]+)}}/g,function(){return(0,a.default)(e[arguments[1]])})),t}function xe(e,t){var r,n;try{r=Ee(e,t&&t.recover),n=r.errors,delete r.errors}catch(e){throw e.message=_e(e),e}var o=me(Se),i=new Date;return o.bind("now",ae(function(){return i.toJSON()},"<:s>")),o.bind("millis",ae(function(){return i.getTime()},"<:n>")),{evaluate:function(e,t,a){if(void 0!==n){var s={code:"S0500",position:0};throw s.message=_e(s),s}if(void 0!==t){var u;u=me(o);for(var c in t)u.bind(c,t[c])}else u=o;u.bind("$",e),i=new Date;var f,l;if("function"==typeof a){u.bind("__jsonata_async",!0);var p=function e(t){(f=l.next(t)).done?a(null,f.value):f.value.then(e).catch(function(e){e.message=_e(e),a(e,null)})};l=b(r,e,u),(f=l.next()).value.then(p)}else try{for(l=b(r,e,u),f=l.next();!f.done;)f=l.next(f.value);return f.value}catch(s){throw s.message=_e(s),s}},assign:function(e,t){o.bind(e,t)},registerFunction:function(e,t,r){var n=ae(t,r);o.bind(e,n)},ast:function(){return r},errors:function(){return n}}}var ke=[b,y,m,_,x,k,w,F,L,R,C,z,J,Q,H,Z,X,te,oe,ue,le,pe,de,ge].map(f.default.mark),we={".":75,"[":80,"]":0,"{":70,"}":0,"(":80,")":0,",":0,"@":75,"#":70,";":80,":":80,"?":20,"+":50,"-":50,"*":60,"/":60,"%":60,"|":20,"=":40,"<":40,">":40,"^":40,"**":60,"..":20,":=":10,"!=":40,"<=":40,">=":40,"~>":40,and:30,or:25,in:40,"&":50,"!":0,"~":0},je={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},Oe=function(e){var t=0,r=e.length,n=function(e,r){return{type:e,value:r,position:t}},o=function(){for(var n,o,i=t,a=0;t<r;){var s=e.charAt(t);if("/"===s&&"\\"!==e.charAt(t-1)&&0===a){if(""===(n=e.substring(i,t)))throw{code:"S0301",stack:(new Error).stack,position:t};for(t++,s=e.charAt(t),i=t;"i"===s||"m"===s;)t++,s=e.charAt(t);return o=e.substring(i,t)+"g",new RegExp(n,o)}"("!==s&&"["!==s&&"{"!==s||"\\"===e.charAt(t-1)||a++,")"!==s&&"]"!==s&&"}"!==s||"\\"===e.charAt(t-1)||a--,t++}throw{code:"S0302",stack:(new Error).stack,position:t}};return function(i){if(t>=r)return null;for(var a=e.charAt(t);t<r&&" \t\n\r\v".indexOf(a)>-1;)t++,a=e.charAt(t);if(!0!==i&&"/"===a)return t++,n("regex",o());if("."===a&&"."===e.charAt(t+1))return t+=2,n("operator","..");if(":"===a&&"="===e.charAt(t+1))return t+=2,n("operator",":=");if("!"===a&&"="===e.charAt(t+1))return t+=2,n("operator","!=");if(">"===a&&"="===e.charAt(t+1))return t+=2,n("operator",">=");if("<"===a&&"="===e.charAt(t+1))return t+=2,n("operator","<=");if("*"===a&&"*"===e.charAt(t+1))return t+=2,n("operator","**");if("~"===a&&">"===e.charAt(t+1))return t+=2,n("operator","~>");if(we.hasOwnProperty(a))return t++,n("operator",a);if('"'===a||"'"===a){var s=a;t++;for(var u="";t<r;){if("\\"===(a=e.charAt(t)))if(t++,a=e.charAt(t),je.hasOwnProperty(a))u+=je[a];else{if("u"!==a)throw{code:"S0103",stack:(new Error).stack,position:t,token:a};var c=e.substr(t+1,4);if(!/^[0-9a-fA-F]+$/.test(c))throw{code:"S0104",stack:(new Error).stack,position:t};var f=parseInt(c,16);u+=String.fromCharCode(f),t+=4}else{if(a===s)return t++,n("string",u);u+=a}t++}throw{code:"S0101",stack:(new Error).stack,position:t}}var l=/^-?(0|([1-9][0-9]*))(\.[0-9]+)?([Ee][-+]?[0-9]+)?/.exec(e.substring(t));if(null!==l){var p=parseFloat(l[0]);if(!isNaN(p)&&isFinite(p))return t+=l[0].length,n("number",p);throw{code:"S0102",stack:(new Error).stack,position:t,token:l[0]}}var d;if("`"===a){t++;var h=e.indexOf("`",t);if(-1!==h)return d=e.substring(t,h),t=h+1,n("name",d);throw t=r,{code:"S0105",stack:(new Error).stack,position:t}}for(var b,v=t;;)if(b=e.charAt(v),v===r||" \t\n\r\v".indexOf(b)>-1||we.hasOwnProperty(b)){if("$"===e.charAt(t))return d=e.substring(t+1,v),t=v,n("variable",d);switch(d=e.substring(t,v),t=v,d){case"or":case"in":case"and":return n("operator",d);case"true":return n("value",!0);case"false":return n("value",!1);case"null":return n("value",null);default:return t===r&&""===d?null:n("name",d)}}else v++}},Ee=function(r,n){var o,i,a={},s=[],u=function(){var e=[];"(end)"!==o.id&&e.push({type:o.type,value:o.value,position:o.position});for(var t=i();null!==t;)e.push(t),t=i();return e},c={nud:function(){var e={code:"S0211",token:this.value,position:this.position};if(n)return e.remaining=u(),e.type="error",s.push(e),e;throw e.stack=(new Error).stack,e}},f=function(e,t){var r=a[e];return t=t||0,r?t>=r.lbp&&(r.lbp=t):((r=(0,d.default)(c)).id=r.value=e,r.lbp=t,a[e]=r),r},l=function(e){if(n){e.remaining=u(),s.push(e);var t=a["(error)"];return o=(0,d.default)(t),o.error=e,o.type="(error)",o}throw e.stack=(new Error).stack,e},p=function(e,t){if(e&&o.id!==e){var n,s={code:n="(end)"===o.id?"S0203":"S0202",position:o.position,token:o.value,value:e};return l(s)}var u=i(t);if(null===u)return o=a["(end)"],o.position=r.length,o;var c,f=u.value,p=u.type;switch(p){case"name":case"variable":c=a["(name)"];break;case"operator":if(!(c=a[f]))return l({code:"S0204",stack:(new Error).stack,position:u.position,token:f});break;case"string":case"number":case"value":p="literal",c=a["(literal)"];break;case"regex":p="regex",c=a["(regex)"];break;default:return l({code:"S0205",stack:(new Error).stack,position:u.position,token:f})}return o=(0,d.default)(c),o.value=f,o.type=p,o.position=u.position,o},h=function(e){var t,r=o;for(p(null,!0),t=r.nud();e<o.lbp;)r=o,p(),t=r.led(t);return t},b=function(e){f(e,0).nud=function(){return this}},v=function(e,t,r){var n=t||we[e],o=f(e,n);return o.led=r||function(e){return this.lhs=e,this.rhs=h(n),this.type="binary",this},o},g=function(e,t,r){var n=t||we[e],o=f(e,n);return o.led=r||function(e){return this.lhs=e,this.rhs=h(n-1),this.type="binary",this},o},y=function(e,t){var r=f(e);return r.nud=t||function(){return this.expression=h(70),this.type="unary",this},r};b("(end)"),b("(name)"),b("(literal)"),b("(regex)"),f(":"),f(";"),f(","),f(")"),f("]"),f("}"),f(".."),v("."),v("+"),v("-"),v("*"),v("/"),v("%"),v("="),v("<"),v(">"),v("!="),v("<="),v(">="),v("&"),v("and"),v("or"),v("in"),b("and"),b("or"),b("in"),g(":="),y("-"),v("~>"),g("(error)",10,function(e){return this.lhs=e,this.error=o.error,this.remaining=u(),this.type="error",this}),y("*",function(){return this.type="wildcard",this}),y("**",function(){return this.type="descendant",this}),v("(",we["("],function(t){if(this.procedure=t,this.type="function",this.arguments=[],")"!==o.id)for(;"operator"===o.type&&"?"===o.id?(this.type="partial",this.arguments.push(o),p("?")):this.arguments.push(h(0)),","===o.id;)p(",");if(p(")",!0),"name"===t.type&&("function"===t.value||"λ"===t.value)){if(this.arguments.forEach(function(e,t){if("variable"!==e.type)return l({code:"S0208",stack:(new Error).stack,position:e.position,token:e.value,value:t+1})}),this.type="lambda","<"===o.id){for(var r=o.position,n=1,i="<";n>0&&"{"!==o.id&&"(end)"!==o.id;){var a=p();">"===a.id?n--:"<"===a.id&&n++,i+=a.value}p(">");try{this.signature=e(i)}catch(e){return e.position=r+e.offset,l(e)}}p("{"),this.body=h(0),p("}")}return this}),y("(",function(){for(var e=[];")"!==o.id&&(e.push(h(0)),";"===o.id);)p(";");return p(")",!0),this.type="block",this.expressions=e,this}),y("[",function(){var e=[];if("]"!==o.id)for(;;){var t=h(0);if(".."===o.id){var r={type:"binary",value:"..",position:o.position,lhs:t};p(".."),r.rhs=h(0),t=r}if(e.push(t),","!==o.id)break;p(",")}return p("]",!0),this.expressions=e,this.type="unary",this}),v("[",we["["],function(e){if("]"===o.id){for(var t=e;t&&"binary"===t.type&&"["===t.value;)t=t.lhs;return t.keepArray=!0,p("]"),e}return this.lhs=e,this.rhs=h(we["]"]),this.type="binary",p("]",!0),this}),v("^",we["^"],function(e){p("(");for(var t=[];;){var r={descending:!1};if("<"===o.id?p("<"):">"===o.id&&(r.descending=!0,p(">")),r.expression=h(0),t.push(r),","!==o.id)break;p(",")}return p(")"),this.lhs=e,this.rhs=t,this.type="binary",this});var m=function(e){var t=[];if("}"!==o.id)for(;;){var r=h(0);p(":");var n=h(0);if(t.push([r,n]),","!==o.id)break;p(",")}return p("}",!0),void 0===e?(this.lhs=t,this.type="unary"):(this.lhs=e,this.rhs=t,this.type="binary"),this};y("{",m),v("{",we["{"],m),v("?",we["?"],function(e){return this.type="condition",this.condition=e,this.then=h(0),":"===o.id&&(p(":"),this.else=h(0)),this}),y("|",function(){return this.type="transform",this.pattern=h(0),p("|"),this.update=h(0),","===o.id&&(p(","),this.delete=h(0)),p("|"),this});var _=function e(t){var r;if("function"===t.type){var n={type:"lambda",thunk:!0,arguments:[],position:t.position};n.body=t,r=n}else if("condition"===t.type)t.then=e(t.then),void 0!==t.else&&(t.else=e(t.else)),r=t;else if("block"===t.type){var o=t.expressions.length;o>0&&(t.expressions[o-1]=e(t.expressions[o-1])),r=t}else r=t;return r};i=Oe(r),p();var x=h(0);if("(end)"!==o.id){var k={code:"S0201",position:o.position,token:o.value};l(k)}return x=function e(r){var o;switch(r.type){case"binary":switch(r.value){case".":var i=e(r.lhs);o={type:"path",steps:[]},"path"===i.type?Array.prototype.push.apply(o.steps,i.steps):o.steps=[i];var a=e(r.rhs);"function"===a.type&&"path"===a.procedure.type&&1===a.procedure.steps.length&&"name"===a.procedure.steps[0].type&&"function"===o.steps[o.steps.length-1].type&&(o.steps[o.steps.length-1].nextFunction=a.procedure.steps[0].value),"path"!==a.type&&(a={type:"path",steps:[a]}),Array.prototype.push.apply(o.steps,a.steps),o.steps.filter(function(e){return"literal"===e.type}).forEach(function(e){e.type="name"}),o.steps.filter(function(e){return!0===e.keepArray}).length>0&&(o.keepSingletonArray=!0);var u=o.steps[0];"unary"===u.type&&"["===u.value&&(u.consarray=!0);var c=o.steps[o.steps.length-1];"unary"===c.type&&"["===c.value&&(c.consarray=!0);break;case"[":var f=o=e(r.lhs);if("path"===o.type&&(f=o.steps[o.steps.length-1]),void 0!==f.group)throw{code:"S0209",stack:(new Error).stack,position:r.position};void 0===f.predicate&&(f.predicate=[]),f.predicate.push(e(r.rhs));break;case"{":if(void 0!==(o=e(r.lhs)).group)throw{code:"S0210",stack:(new Error).stack,position:r.position};o.group={lhs:r.rhs.map(function(t){return[e(t[0]),e(t[1])]}),position:r.position};break;case"^":(o={type:"sort",value:r.value,position:r.position}).lhs=e(r.lhs),o.rhs=r.rhs.map(function(t){return{descending:t.descending,expression:e(t.expression)}});break;case":=":(o={type:"bind",value:r.value,position:r.position}).lhs=e(r.lhs),o.rhs=e(r.rhs);break;case"~>":(o={type:"apply",value:r.value,position:r.position}).lhs=e(r.lhs),o.rhs=e(r.rhs);break;default:(o={type:r.type,value:r.value,position:r.position}).lhs=e(r.lhs),o.rhs=e(r.rhs)}break;case"unary":o={type:r.type,value:r.value,position:r.position},"["===r.value?o.expressions=r.expressions.map(function(t){return e(t)}):"{"===r.value?o.lhs=r.lhs.map(function(t){return[e(t[0]),e(t[1])]}):(o.expression=e(r.expression),"-"===r.value&&"literal"===o.expression.type&&t(o.expression.value)&&((o=o.expression).value=-o.value));break;case"function":case"partial":(o={type:r.type,name:r.name,value:r.value,position:r.position}).arguments=r.arguments.map(function(t){return e(t)}),o.procedure=e(r.procedure);break;case"lambda":o={type:r.type,arguments:r.arguments,signature:r.signature,position:r.position};var l=e(r.body);o.body=_(l);break;case"condition":(o={type:r.type,position:r.position}).condition=e(r.condition),o.then=e(r.then),void 0!==r.else&&(o.else=e(r.else));break;case"transform":(o={type:r.type,position:r.position}).pattern=e(r.pattern),o.update=e(r.update),void 0!==r.delete&&(o.delete=e(r.delete));break;case"block":(o={type:r.type,position:r.position}).expressions=r.expressions.map(function(t){return e(t)});break;case"name":o={type:"path",steps:[r]},r.keepArray&&(o.keepSingletonArray=!0);break;case"literal":case"wildcard":case"descendant":case"variable":case"regex":o=r;break;case"operator":if("and"===r.value||"or"===r.value||"in"===r.value)r.type="name",o=e(r);else{if("?"!==r.value)throw{code:"S0201",stack:(new Error).stack,position:r.position,token:r.value};o=r}break;case"error":o=r,r.lhs&&(o=e(r.lhs));break;default:var p="S0206";"(end)"===r.id&&(p="S0207");var d={code:p,position:r.position,token:r.value};if(n)return s.push(d),{type:"error",error:d};throw d.stack=(new Error).stack,d}return o}(x),s.length>0&&(x.errors=s),x},Se=me(null);Number.isInteger=p.default||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e};var Ae=q(Ee("function($f, $g) { function($x){ $g($f($x)) } }"),null,Se),Te=new RegExp("^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$");Se.bind("sum",ae(function(e){if(void 0!==e){var t=0;return e.forEach(function(e){t+=e}),t}},"<a<n>:n>")),Se.bind("count",ae(function(e){return void 0===e?0:e.length},"<a:n>")),Se.bind("max",ae(function(e){if(void 0!==e&&0!==e.length)return Math.max.apply(Math,e)},"<a<n>:n>")),Se.bind("min",ae(function(e){if(void 0!==e&&0!==e.length)return Math.min.apply(Math,e)},"<a<n>:n>")),Se.bind("average",ae(function(e){if(void 0!==e&&0!==e.length){var t=0;return e.forEach(function(e){t+=e}),t/e.length}},"<a<n>:n>")),Se.bind("string",ae(se,"<x-:s>")),Se.bind("substring",ae(function(e,t,r){if(void 0!==e)return e.substr(t,r)},"<s-nn?:s>")),Se.bind("substringBefore",ae(function(e,t){if(void 0!==e){var r=e.indexOf(t);return r>-1?e.substr(0,r):e}},"<s-s:s>")),Se.bind("substringAfter",ae(function(e,t){if(void 0!==e){var r=e.indexOf(t);return r>-1?e.substr(r+t.length):e}},"<s-s:s>")),Se.bind("lowercase",ae(function(e){if(void 0!==e)return e.toLowerCase()},"<s-:s>")),Se.bind("uppercase",ae(function(e){if(void 0!==e)return e.toUpperCase()},"<s-:s>")),Se.bind("length",ae(function(e){if(void 0!==e)return e.length},"<s-:n>")),Se.bind("trim",ae(function(e){if(void 0!==e){var t=e.replace(/[ \t\n\r]+/gm," ");return" "===t.charAt(0)&&(t=t.substring(1))," "===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t}},"<s-:s>")),Se.bind("pad",ae(function(e,t,r){if(void 0!==e){void 0!==r&&0!==r.length||(r=" ");var n,o=Math.abs(t)-e.length;if(o>0){var i=new Array(o+1).join(r);r.length>1&&(i=i.substring(0,o)),n=t>0?e+i:i+e}else n=e;return n}},"<s-ns?:s>")),Se.bind("match",ae(function(e,t,r){if(void 0!==e){if(r<0)throw{stack:(new Error).stack,value:r,code:"D3040",index:3};var n=v();if(void 0===r||r>0){var o=0,i=t(e);if(void 0!==i)for(;void 0!==i&&(void 0===r||o<r);)n.push({match:i.match,index:i.start,groups:i.groups}),i=i.next(),o++}return n}},"<s-f<s:o>n?:a<o>>")),Se.bind("contains",ae(function(e,t){if(void 0!==e)return"string"==typeof t?-1!==e.indexOf(t):void 0!==t(e)},"<s-(sf):b>")),Se.bind("replace",ae(ue,"<s-(sf)(sf)n?:s>")),Se.bind("split",ae(function(e,t,r){if(void 0!==e){if(r<0)throw{code:"D3020",stack:(new Error).stack,value:r,index:3};var n=[];if(void 0===r||r>0)if("string"==typeof t)n=e.split(t,r);else{var o=0,i=t(e);if(void 0!==i){for(var a=0;void 0!==i&&(void 0===r||o<r);)n.push(e.substring(a,i.start)),a=i.end,i=i.next(),o++;(void 0===r||o<r)&&n.push(e.substring(a))}else n.push(e)}return n}},"<s-(sf)n?:a<s>>")),Se.bind("join",ae(function(e,t){if(void 0!==e)return void 0===t&&(t=""),e.join(t)},"<a<s>s?:s>")),Se.bind("formatNumber",ae(function(e,t,r){var n={"decimal-separator":".","grouping-separator":",","exponent-separator":"e",infinity:"Infinity","minus-sign":"-",NaN:"NaN",percent:"%","per-mille":"‰","zero-digit":"0",digit:"#","pattern-separator":";"};void 0!==r&&(0,c.default)(r).forEach(function(e){n[e]=r[e]});for(var o=[],i=n["zero-digit"].charCodeAt(0),s=i;s<i+10;s++)o.push(String.fromCharCode(s));var u=o.concat([n["decimal-separator"],n["exponent-separator"],n["grouping-separator"],n.digit,n["pattern-separator"]]),f=t.split(n["pattern-separator"]);if(f.length>2)throw{code:"D3080",stack:(new Error).stack};var l=f.map(function(e){var t,r,o,i,a=function(){for(var t,r=0;r<e.length;r++)if(t=e.charAt(r),-1!==u.indexOf(t)&&t!==n["exponent-separator"])return e.substring(0,r)}(),s=function(){for(var t,r=e.length-1;r>=0;r--)if(t=e.charAt(r),-1!==u.indexOf(t)&&t!==n["exponent-separator"])return e.substring(r+1)}(),c=e.substring(a.length,e.length-s.length),f=e.indexOf(n["exponent-separator"],a.length);-1===f||f>e.length-s.length?(t=c,r=void 0):(t=c.substring(0,f),r=c.substring(f+1));var l=t.indexOf(n["decimal-separator"]);return-1===l?(o=t,i=s):(o=t.substring(0,l),i=t.substring(l+1)),{prefix:a,suffix:s,activePart:c,mantissaPart:t,exponentPart:r,integerPart:o,fractionalPart:i,subpicture:e}});l.forEach(function(e){var t,r,i=e.subpicture,a=i.indexOf(n["decimal-separator"]);a!==i.lastIndexOf(n["decimal-separator"])&&(t="D3081"),i.indexOf(n.percent)!==i.lastIndexOf(n.percent)&&(t="D3082"),i.indexOf(n["per-mille"])!==i.lastIndexOf(n["per-mille"])&&(t="D3083"),-1!==i.indexOf(n.percent)&&-1!==i.indexOf(n["per-mille"])&&(t="D3084");var s=!1;for(r=0;r<e.mantissaPart.length;r++){var c=e.mantissaPart.charAt(r);if(-1!==o.indexOf(c)||c===n.digit){s=!0;break}}s||(t="D3085"),-1!==e.activePart.split("").map(function(e){return-1===u.indexOf(e)?"p":"a"}).join("").indexOf("p")&&(t="D3086"),-1!==a?i.charAt(a-1)!==n["grouping-separator"]&&i.charAt(a+1)!==n["grouping-separator"]||(t="D3087"):e.integerPart.charAt(e.integerPart.length-1)===n["grouping-separator"]&&(t="D3088"),-1!==i.indexOf(n["grouping-separator"]+n["grouping-separator"])&&(t="D3089");var f=e.integerPart.indexOf(n.digit);-1!==f&&e.integerPart.substring(0,f).split("").filter(function(e){return o.indexOf(e)>-1}).length>0&&(t="D3090"),-1!==(f=e.fractionalPart.lastIndexOf(n.digit))&&e.fractionalPart.substring(f).split("").filter(function(e){return o.indexOf(e)>-1}).length>0&&(t="D3091");var l="string"==typeof e.exponentPart;if(l&&e.exponentPart.length>0&&(-1!==i.indexOf(n.percent)||-1!==i.indexOf(n["per-mille"]))&&(t="D3092"),l&&(0===e.exponentPart.length||e.exponentPart.split("").filter(function(e){return-1===o.indexOf(e)}).length>0)&&(t="D3093"),t)throw{code:t,stack:(new Error).stack}});var p=l.map(function(e){var t=function(t,r){for(var i=[],a=t.indexOf(n["grouping-separator"]);-1!==a;){var s=(r?t.substring(0,a):t.substring(a)).split("").filter(function(e){return-1!==o.indexOf(e)||e===n.digit}).length;i.push(s),a=e.integerPart.indexOf(n["grouping-separator"],a+1)}return i},r=t(e.integerPart),i=function(e){if(0===e.length)return 0;for(var t=e.reduce(function e(t,r){return 0===r?t:e(r,t%r)}),r=1;r<=e.length;r++)if(-1===e.indexOf(r*t))return 0;return t}(r),a=t(e.fractionalPart,!0),s=e.integerPart.split("").filter(function(e){return-1!==o.indexOf(e)}).length,u=s,c=e.fractionalPart.split(""),f=c.filter(function(e){return-1!==o.indexOf(e)}).length,l=c.filter(function(e){return-1!==o.indexOf(e)||e===n.digit}).length,p="string"==typeof e.exponentPart;0===s&&0===l&&(p?(f=1,l=1):s=1),p&&0===s&&-1!==e.integerPart.indexOf(n.digit)&&(s=1),0===s&&0===f&&(f=1);var d=0;return p&&(d=e.exponentPart.split("").filter(function(e){return-1!==o.indexOf(e)}).length),{integerPartGroupingPositions:r,regularGrouping:i,minimumIntegerPartSize:s,scalingFactor:u,prefix:e.prefix,fractionalPartGroupingPositions:a,minimumFactionalPartSize:f,maximumFactionalPartSize:l,minimumExponentSize:d,suffix:e.suffix,picture:e.subpicture}});1===p.length&&(p.push(JSON.parse((0,a.default)(p[0]))),p[1].prefix=n["minus-sign"]+p[1].prefix);var d,h;h=-1!==(d=e>=0?p[0]:p[1]).picture.indexOf(n.percent)?100*e:-1!==d.picture.indexOf(n["per-mille"])?1e3*e:e;var b,v;if(0===d.minimumExponentSize)b=h;else{var g=Math.pow(10,d.scalingFactor),y=Math.pow(10,d.scalingFactor-1);for(b=h,v=0;b<y;)b*=10,v-=1;for(;b>g;)b/=10,v+=1}var m=function(e,t){var r=Math.abs(e).toFixed(t);return"0"!==n["zero-digit"]&&(r=r.split("").map(function(e){return e>="0"&&e<="9"?o[e.charCodeAt(0)-48]:e}).join("")),r},_=m(ce(b,d.maximumFactionalPartSize),d.maximumFactionalPartSize),x=_.indexOf(".");for(-1===x?_+=n["decimal-separator"]:_=_.replace(".",n["decimal-separator"]);_.charAt(0)===n["zero-digit"];)_=_.substring(1);for(;_.charAt(_.length-1)===n["zero-digit"];)_=_.substring(0,_.length-1);x=_.indexOf(n["decimal-separator"]);var k=d.minimumIntegerPartSize-x,w=d.minimumFactionalPartSize-(_.length-x-1);if(_=(k>0?new Array(k+1).join("0"):"")+_,_+=w>0?new Array(w+1).join("0"):"",x=_.indexOf(n["decimal-separator"]),d.regularGrouping>0)for(var j=Math.floor((x-1)/d.regularGrouping),O=1;O<=j;O++)_=[_.slice(0,x-O*d.regularGrouping),n["grouping-separator"],_.slice(x-O*d.regularGrouping)].join("");else d.integerPartGroupingPositions.forEach(function(e){_=[_.slice(0,x-e),n["grouping-separator"],_.slice(x-e)].join(""),x++});if(x=_.indexOf(n["decimal-separator"]),d.fractionalPartGroupingPositions.forEach(function(e){_=[_.slice(0,e+x+1),n["grouping-separator"],_.slice(e+x+1)].join("")}),x=_.indexOf(n["decimal-separator"]),-1!==d.picture.indexOf(n["decimal-separator"])&&x!==_.length-1||(_=_.substring(0,_.length-1)),void 0!==v){var E=m(v,0);(k=d.minimumExponentSize-E.length)>0&&(E=new Array(k+1).join("0")+E),_=_+n["exponent-separator"]+(v<0?n["minus-sign"]:"")+E}return _=d.prefix+_+d.suffix},"<n-so?:s>")),Se.bind("formatBase",ae(function(e,t){if(void 0!==e){if(e=ce(e),(t=void 0===t?10:ce(t))<2||t>36)throw{code:"D3100",stack:(new Error).stack,value:t};return e.toString(t)}},"<n-n?:s>")),Se.bind("number",ae(function(e){var t;if(void 0!==e){if("number"==typeof e)t=e;else{if("string"!=typeof e||!/^-?(0|([1-9][0-9]*))(\.[0-9]+)?([Ee][-+]?[0-9]+)?$/.test(e)||isNaN(parseFloat(e))||!isFinite(e))throw{code:"D3030",value:e,stack:(new Error).stack,index:1};t=parseFloat(e)}return t}},"<(ns)-:n>")),Se.bind("floor",ae(function(e){if(void 0!==e)return Math.floor(e)},"<n-:n>")),Se.bind("ceil",ae(function(e){if(void 0!==e)return Math.ceil(e)},"<n-:n>")),Se.bind("round",ae(ce,"<n-n?:n>")),Se.bind("abs",ae(function(e){if(void 0!==e)return Math.abs(e)},"<n-:n>")),Se.bind("sqrt",ae(function(e){if(void 0!==e){if(e<0)throw{stack:(new Error).stack,code:"D3060",index:1,value:e};return Math.sqrt(e)}},"<n-:n>")),Se.bind("power",ae(function(e,t){var r;if(void 0!==e){if(r=Math.pow(e,t),!isFinite(r))throw{stack:(new Error).stack,code:"D3061",index:1,value:e,exp:t};return r}},"<n-n:n>")),Se.bind("random",ae(function(){return Math.random()},"<:n>")),Se.bind("boolean",ae(fe,"<x-:b>")),Se.bind("not",ae(function(e){return!fe(e)},"<x-:b>")),Se.bind("map",ae(le,"<af>")),Se.bind("zip",ae(function(){for(var e=[],t=Array.prototype.slice.call(arguments),r=Math.min.apply(Math,t.map(function(e){return Array.isArray(e)?e.length:0})),n=0;n<r;n++){var o=t.map(function(e){return e[n]});e.push(o)}return e},"<a+>")),Se.bind("filter",ae(pe,"<af>")),Se.bind("reduce",ae(de,"<afj?:j>")),Se.bind("sift",ae(function(e,t){var r={};for(var n in e){var o=e[n];fe(function(e,r,n){for(var o=H(t,[e,r,n],null),i=o.next();!i.done;)i=o.next(i.value);return i.value}(o,n,e))&&(r[n]=o)}return 0===(0,c.default)(r).length&&(r=void 0),r},"<o-f?:o>")),Se.bind("keys",ae(he,"<x-:a<s>>")),Se.bind("lookup",ae(function(e,t){return j({value:t},e)},"<x-s:x>")),Se.bind("append",ae(be,"<xx:a>")),Se.bind("exists",ae(function(e){return void 0!==e},"<x:b>")),Se.bind("spread",ae(ve,"<x-:a<o>>")),Se.bind("merge",ae(function(e){if(void 0!==e){var t={};return e.forEach(function(e){for(var r in e)t[r]=e[r]}),t}},"<a<o>:o>")),Se.bind("reverse",ae(function(e){if(void 0!==e){if(e.length<=1)return e;for(var t=e.length,r=new Array(t),n=0;n<t;n++)r[t-n-1]=e[n];return r}},"<a:a>")),Se.bind("each",ae(ge,"<o-f:a>")),Se.bind("sort",ae(ye,"<af?:a>")),Se.bind("shuffle",ae(function(e){if(void 0!==e){if(e.length<=1)return e;for(var t=new Array(e.length),r=0;r<e.length;r++){var n=Math.floor(Math.random()*(r+1));r!==n&&(t[r]=t[n]),t[n]=e[r]}return t}},"<a:a>")),Se.bind("base64encode",ae(function(e){if(void 0!==e)return("undefined"!=typeof window?window.btoa:function(e){return new r.Buffer(e,"binary").toString("base64")})(e)},"<s-:s>")),Se.bind("base64decode",ae(function(e){if(void 0!==e)return("undefined"!=typeof window?window.atob:function(e){return new r.Buffer(e,"base64").toString("binary")})(e)},"<s-:s>")),Se.bind("toMillis",ae(function(e){if(void 0!==e){if(!Te.test(e))throw{stack:(new Error).stack,code:"D3110",value:e};return Date.parse(e)}},"<s-:n>")),Se.bind("fromMillis",ae(function(e){if(void 0!==e)return new Date(e).toISOString()},"<n-:s>")),Se.bind("clone",ae(function(e){if(void 0!==e)return JSON.parse(se(e))},"<(oa)-:o>"));var Pe={S0101:"String literal must be terminated by a matching quote",S0102:"Number out of range: {{token}}",S0103:"Unsupported escape sequence: \\{{token}}",S0104:"The escape sequence \\u must be followed by 4 hex digits",S0105:"Quoted property name must be terminated with a backquote (`)",S0201:"Syntax error: {{token}}",S0202:"Expected {{value}}, got {{token}}",S0203:"Expected {{value}} before end of expression",S0204:"Unknown operator: {{token}}",S0205:"Unexpected token: {{token}}",S0206:"Unknown expression type: {{token}}",S0207:"Unexpected end of expression",S0208:"Parameter {{value}} of function definition must be a variable name (start with $)",S0209:"A predicate cannot follow a grouping expression in a step",S0210:"Each step can only have one grouping expression",S0211:"The symbol {{token}} cannot be used as a unary operator",S0301:"Empty regular expressions are not allowed",S0302:"No terminating / in regular expression",S0402:"Choice groups containing parameterized types are not supported",S0401:"Type parameters can only be applied to functions and arrays",S0500:"Attempted to evaluate an expression containing syntax error(s)",T0410:"Argument {{index}} of function {{token}} does not match function signature",T0411:"Context value is not a compatible type with argument {{index}} of function {{token}}",T0412:"Argument {{index}} of function {{token}} must be an array of {{type}}",D1001:"Number out of range: {{value}}",D1002:"Cannot negate a non-numeric value: {{value}}",T1003:"Key in object structure must evaluate to a string; got: {{value}}",D1004:"Regular expression matches zero length string",T1005:"Attempted to invoke a non-function. Did you mean ${{{token}}}?",T1006:"Attempted to invoke a non-function",T1007:"Attempted to partially apply a non-function. Did you mean ${{{token}}}?",T1008:"Attempted to partially apply a non-function",T2001:"The left side of the {{token}} operator must evaluate to a number",T2002:"The right side of the {{token}} operator must evaluate to a number",T2003:"The left side of the range operator (..) must evaluate to an integer",T2004:"The right side of the range operator (..) must evaluate to an integer",D2005:"The left side of := must be a variable name (start with $)",T2006:"The right side of the function application operator ~> must be a function",T2007:"Type mismatch when comparing values {{value}} and {{value2}} in order-by clause",T2008:"The expressions within an order-by clause must evaluate to numeric or string values",T2009:"The values {{value}} and {{value2}} either side of operator {{token}} must be of the same data type",T2010:"The expressions either side of operator {{token}} must evaluate to numeric or string values",T2011:"The insert/update clause of the transform expression must evaluate to an object: {{value}}",T2012:"The delete clause of the transform expression must evaluate to a string or array of strings: {{value}}",T2013:"The transform expression clones the input object using the $clone() function.  This has been overridden in the current scope by a non-function.",D3001:"Attempting to invoke string function on Infinity or NaN",D3010:"Second argument of replace function cannot be an empty string",D3011:"Fourth argument of replace function must evaluate to a positive number",D3012:"Attempted to replace a matched string with a non-string value",D3020:"Third argument of split function must evaluate to a positive number",D3030:"Unable to cast value to a number: {{value}}",D3040:"Third argument of match function must evaluate to a positive number",D3050:"First argument of reduce function must be a function with two arguments",D3060:"The sqrt function cannot be applied to a negative number: {{value}}",D3061:"The power function has resulted in a value that cannot be represented as a JSON number: base={{value}}, exponent={{exp}}",D3070:"The single argument form of the sort function can only be applied to an array of strings or an array of numbers.  Use the second argument to specify a comparison function",D3080:"The picture string must only contain a maximum of two sub-pictures",D3081:"The sub-picture must not contain more than one instance of the 'decimal-separator' character",D3082:"The sub-picture must not contain more than one instance of the 'percent' character",D3083:"The sub-picture must not contain more than one instance of the 'per-mille' character",D3084:"The sub-picture must not contain both a 'percent' and a 'per-mille' character",D3085:"The mantissa part of a sub-picture must contain at least one character that is either an 'optional digit character' or a member of the 'decimal digit family'",D3086:"The sub-picture must not contain a passive character that is preceded by an active character and that is followed by another active character",D3087:"The sub-picture must not contain a 'grouping-separator' character that appears adjacent to a 'decimal-separator' character",D3088:"The sub-picture must not contain a 'grouping-separator' at the end of the integer part",D3089:"The sub-picture must not contain two adjacent instances of the 'grouping-separator' character",D3090:"The integer part of the sub-picture must not contain a member of the 'decimal digit family' that is followed by an instance of the 'optional digit character'",D3091:"The fractional part of the sub-picture must not contain an instance of the 'optional digit character' that is followed by a member of the 'decimal digit family'",D3092:"A sub-picture that contains a 'percent' or 'per-mille' character must not contain a character treated as an 'exponent-separator'",D3093:"The exponent part of the sub-picture must comprise only of one or more characters that are members of the 'decimal digit family'",D3100:"The radix of the formatBase function must be between 2 and 36.  It was given {{value}}",D3110:"The argument of the toMillis function must be an ISO 8601 formatted timestamp. Given {{value}}"};return xe.parser=Ee,xe}();void 0!==t&&(t.exports=b)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"babel-runtime/core-js/is-iterable":2,"babel-runtime/core-js/json/stringify":3,"babel-runtime/core-js/number/is-integer":4,"babel-runtime/core-js/object/create":5,"babel-runtime/core-js/object/is":6,"babel-runtime/core-js/object/keys":7,"babel-runtime/core-js/promise":8,"babel-runtime/core-js/symbol":9,"babel-runtime/core-js/symbol/iterator":10,"babel-runtime/regenerator":11}],2:[function(e,t,r){t.exports={default:e("core-js/library/fn/is-iterable"),__esModule:!0}},{"core-js/library/fn/is-iterable":12}],3:[function(e,t,r){t.exports={default:e("core-js/library/fn/json/stringify"),__esModule:!0}},{"core-js/library/fn/json/stringify":13}],4:[function(e,t,r){t.exports={default:e("core-js/library/fn/number/is-integer"),__esModule:!0}},{"core-js/library/fn/number/is-integer":14}],5:[function(e,t,r){t.exports={default:e("core-js/library/fn/object/create"),__esModule:!0}},{"core-js/library/fn/object/create":15}],6:[function(e,t,r){t.exports={default:e("core-js/library/fn/object/is"),__esModule:!0}},{"core-js/library/fn/object/is":16}],7:[function(e,t,r){t.exports={default:e("core-js/library/fn/object/keys"),__esModule:!0}},{"core-js/library/fn/object/keys":17}],8:[function(e,t,r){t.exports={default:e("core-js/library/fn/promise"),__esModule:!0}},{"core-js/library/fn/promise":18}],9:[function(e,t,r){t.exports={default:e("core-js/library/fn/symbol"),__esModule:!0}},{"core-js/library/fn/symbol":19}],10:[function(e,t,r){t.exports={default:e("core-js/library/fn/symbol/iterator"),__esModule:!0}},{"core-js/library/fn/symbol/iterator":20}],11:[function(e,t,r){t.exports=e("regenerator-runtime")},{"regenerator-runtime":106}],12:[function(e,t,r){e("../modules/web.dom.iterable"),e("../modules/es6.string.iterator"),t.exports=e("../modules/core.is-iterable")},{"../modules/core.is-iterable":93,"../modules/es6.string.iterator":101,"../modules/web.dom.iterable":105}],13:[function(e,t,r){var n=e("../../modules/_core"),o=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(e){return o.stringify.apply(o,arguments)}},{"../../modules/_core":28}],14:[function(e,t,r){e("../../modules/es6.number.is-integer"),t.exports=e("../../modules/_core").Number.isInteger},{"../../modules/_core":28,"../../modules/es6.number.is-integer":95}],15:[function(e,t,r){e("../../modules/es6.object.create");var n=e("../../modules/_core").Object;t.exports=function(e,t){return n.create(e,t)}},{"../../modules/_core":28,"../../modules/es6.object.create":96}],16:[function(e,t,r){e("../../modules/es6.object.is"),t.exports=e("../../modules/_core").Object.is},{"../../modules/_core":28,"../../modules/es6.object.is":97}],17:[function(e,t,r){e("../../modules/es6.object.keys"),t.exports=e("../../modules/_core").Object.keys},{"../../modules/_core":28,"../../modules/es6.object.keys":98}],18:[function(e,t,r){e("../modules/es6.object.to-string"),e("../modules/es6.string.iterator"),e("../modules/web.dom.iterable"),e("../modules/es6.promise"),t.exports=e("../modules/_core").Promise},{"../modules/_core":28,"../modules/es6.object.to-string":99,"../modules/es6.promise":100,"../modules/es6.string.iterator":101,"../modules/web.dom.iterable":105}],19:[function(e,t,r){e("../../modules/es6.symbol"),e("../../modules/es6.object.to-string"),e("../../modules/es7.symbol.async-iterator"),e("../../modules/es7.symbol.observable"),t.exports=e("../../modules/_core").Symbol},{"../../modules/_core":28,"../../modules/es6.object.to-string":99,"../../modules/es6.symbol":102,"../../modules/es7.symbol.async-iterator":103,"../../modules/es7.symbol.observable":104}],20:[function(e,t,r){e("../../modules/es6.string.iterator"),e("../../modules/web.dom.iterable"),t.exports=e("../../modules/_wks-ext").f("iterator")},{"../../modules/_wks-ext":90,"../../modules/es6.string.iterator":101,"../../modules/web.dom.iterable":105}],21:[function(e,t,r){t.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},{}],22:[function(e,t,r){t.exports=function(){}},{}],23:[function(e,t,r){t.exports=function(e,t,r,n){if(!(e instanceof t)||void 0!==n&&n in e)throw TypeError(r+": incorrect invocation!");return e}},{}],24:[function(e,t,r){var n=e("./_is-object");t.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},{"./_is-object":48}],25:[function(e,t,r){var n=e("./_to-iobject"),o=e("./_to-length"),i=e("./_to-index");t.exports=function(e){return function(t,r,a){var s,u=n(t),c=o(u.length),f=i(a,c);if(e&&r!=r){for(;c>f;)if((s=u[f++])!=s)return!0}else for(;c>f;f++)if((e||f in u)&&u[f]===r)return e||f||0;return!e&&-1}}},{"./_to-index":82,"./_to-iobject":84,"./_to-length":85}],26:[function(e,t,r){var n=e("./_cof"),o=e("./_wks")("toStringTag"),i="Arguments"==n(function(){return arguments}()),a=function(e,t){try{return e[t]}catch(e){}};t.exports=function(e){var t,r,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=a(t=Object(e),o))?r:i?n(t):"Object"==(s=n(t))&&"function"==typeof t.callee?"Arguments":s}},{"./_cof":27,"./_wks":91}],27:[function(e,t,r){var n={}.toString;t.exports=function(e){return n.call(e).slice(8,-1)}},{}],28:[function(e,t,r){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},{}],29:[function(e,t,r){var n=e("./_a-function");t.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},{"./_a-function":21}],30:[function(e,t,r){t.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},{}],31:[function(e,t,r){t.exports=!e("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./_fails":36}],32:[function(e,t,r){var n=e("./_is-object"),o=e("./_global").document,i=n(o)&&n(o.createElement);t.exports=function(e){return i?o.createElement(e):{}}},{"./_global":38,"./_is-object":48}],33:[function(e,t,r){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},{}],34:[function(e,t,r){var n=e("./_object-keys"),o=e("./_object-gops"),i=e("./_object-pie");t.exports=function(e){var t=n(e),r=o.f;if(r)for(var a,s=r(e),u=i.f,c=0;s.length>c;)u.call(e,a=s[c++])&&t.push(a);return t}},{"./_object-gops":65,"./_object-keys":68,"./_object-pie":69}],35:[function(e,t,r){var n=e("./_global"),o=e("./_core"),i=e("./_ctx"),a=e("./_hide"),s=function(e,t,r){var u,c,f,l=e&s.F,p=e&s.G,d=e&s.S,h=e&s.P,b=e&s.B,v=e&s.W,g=p?o:o[t]||(o[t]={}),y=g.prototype,m=p?n:d?n[t]:(n[t]||{}).prototype;p&&(r=t);for(u in r)(c=!l&&m&&void 0!==m[u])&&u in g||(f=c?m[u]:r[u],g[u]=p&&"function"!=typeof m[u]?r[u]:b&&c?i(f,n):v&&m[u]==f?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(f):h&&"function"==typeof f?i(Function.call,f):f,h&&((g.virtual||(g.virtual={}))[u]=f,e&s.R&&y&&!y[u]&&a(y,u,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},{"./_core":28,"./_ctx":29,"./_global":38,"./_hide":40}],36:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(e){return!0}}},{}],37:[function(e,t,r){var n=e("./_ctx"),o=e("./_iter-call"),i=e("./_is-array-iter"),a=e("./_an-object"),s=e("./_to-length"),u=e("./core.get-iterator-method"),c={},f={};(r=t.exports=function(e,t,r,l,p){var d,h,b,v,g=p?function(){return e}:u(e),y=n(r,l,t?2:1),m=0;if("function"!=typeof g)throw TypeError(e+" is not iterable!");if(i(g)){for(d=s(e.length);d>m;m++)if((v=t?y(a(h=e[m])[0],h[1]):y(e[m]))===c||v===f)return v}else for(b=g.call(e);!(h=b.next()).done;)if((v=o(b,y,h.value,t))===c||v===f)return v}).BREAK=c,r.RETURN=f},{"./_an-object":24,"./_ctx":29,"./_is-array-iter":45,"./_iter-call":49,"./_to-length":85,"./core.get-iterator-method":92}],38:[function(e,t,r){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},{}],39:[function(e,t,r){var n={}.hasOwnProperty;t.exports=function(e,t){return n.call(e,t)}},{}],40:[function(e,t,r){var n=e("./_object-dp"),o=e("./_property-desc");t.exports=e("./_descriptors")?function(e,t,r){return n.f(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},{"./_descriptors":31,"./_object-dp":60,"./_property-desc":71}],41:[function(e,t,r){t.exports=e("./_global").document&&document.documentElement},{"./_global":38}],42:[function(e,t,r){t.exports=!e("./_descriptors")&&!e("./_fails")(function(){return 7!=Object.defineProperty(e("./_dom-create")("div"),"a",{get:function(){return 7}}).a})},{"./_descriptors":31,"./_dom-create":32,"./_fails":36}],43:[function(e,t,r){t.exports=function(e,t,r){var n=void 0===r;switch(t.length){case 0:return n?e():e.call(r);case 1:return n?e(t[0]):e.call(r,t[0]);case 2:return n?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},{}],44:[function(e,t,r){var n=e("./_cof");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},{"./_cof":27}],45:[function(e,t,r){var n=e("./_iterators"),o=e("./_wks")("iterator"),i=Array.prototype;t.exports=function(e){return void 0!==e&&(n.Array===e||i[o]===e)}},{"./_iterators":54,"./_wks":91}],46:[function(e,t,r){var n=e("./_cof");t.exports=Array.isArray||function(e){return"Array"==n(e)}},{"./_cof":27}],47:[function(e,t,r){var n=e("./_is-object"),o=Math.floor;t.exports=function(e){return!n(e)&&isFinite(e)&&o(e)===e}},{"./_is-object":48}],48:[function(e,t,r){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],49:[function(e,t,r){var n=e("./_an-object");t.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(t){var i=e.return;throw void 0!==i&&n(i.call(e)),t}}},{"./_an-object":24}],50:[function(e,t,r){"use strict";var n=e("./_object-create"),o=e("./_property-desc"),i=e("./_set-to-string-tag"),a={};e("./_hide")(a,e("./_wks")("iterator"),function(){return this}),t.exports=function(e,t,r){e.prototype=n(a,{next:o(1,r)}),i(e,t+" Iterator")}},{"./_hide":40,"./_object-create":59,"./_property-desc":71,"./_set-to-string-tag":76,"./_wks":91}],51:[function(e,t,r){"use strict";var n=e("./_library"),o=e("./_export"),i=e("./_redefine"),a=e("./_hide"),s=e("./_has"),u=e("./_iterators"),c=e("./_iter-create"),f=e("./_set-to-string-tag"),l=e("./_object-gpo"),p=e("./_wks")("iterator"),d=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(e,t,r,b,v,g,y){c(r,t,b);var m,_,x,k=function(e){if(!d&&e in E)return E[e];switch(e){case"keys":case"values":return function(){return new r(this,e)}}return function(){return new r(this,e)}},w=t+" Iterator",j="values"==v,O=!1,E=e.prototype,S=E[p]||E["@@iterator"]||v&&E[v],A=S||k(v),T=v?j?k("entries"):A:void 0,P="Array"==t?E.entries||S:S;if(P&&(x=l(P.call(new e)))!==Object.prototype&&(f(x,w,!0),n||s(x,p)||a(x,p,h)),j&&S&&"values"!==S.name&&(O=!0,A=function(){return S.call(this)}),n&&!y||!d&&!O&&E[p]||a(E,p,A),u[t]=A,u[w]=h,v)if(m={values:j?A:k("values"),keys:g?A:k("keys"),entries:T},y)for(_ in m)_ in E||i(E,_,m[_]);else o(o.P+o.F*(d||O),t,m);return m}},{"./_export":35,"./_has":39,"./_hide":40,"./_iter-create":50,"./_iterators":54,"./_library":56,"./_object-gpo":66,"./_redefine":73,"./_set-to-string-tag":76,"./_wks":91}],52:[function(e,t,r){var n=e("./_wks")("iterator"),o=!1;try{var i=[7][n]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(e){}t.exports=function(e,t){if(!t&&!o)return!1;var r=!1;try{var i=[7],a=i[n]();a.next=function(){return{done:r=!0}},i[n]=function(){return a},e(i)}catch(e){}return r}},{"./_wks":91}],53:[function(e,t,r){t.exports=function(e,t){return{value:t,done:!!e}}},{}],54:[function(e,t,r){t.exports={}},{}],55:[function(e,t,r){var n=e("./_object-keys"),o=e("./_to-iobject");t.exports=function(e,t){for(var r,i=o(e),a=n(i),s=a.length,u=0;s>u;)if(i[r=a[u++]]===t)return r}},{"./_object-keys":68,"./_to-iobject":84}],56:[function(e,t,r){t.exports=!0},{}],57:[function(e,t,r){var n=e("./_uid")("meta"),o=e("./_is-object"),i=e("./_has"),a=e("./_object-dp").f,s=0,u=Object.isExtensible||function(){return!0},c=!e("./_fails")(function(){return u(Object.preventExtensions({}))}),f=function(e){a(e,n,{value:{i:"O"+ ++s,w:{}}})},l=t.exports={KEY:n,NEED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,n)){if(!u(e))return"F";if(!t)return"E";f(e)}return e[n].i},getWeak:function(e,t){if(!i(e,n)){if(!u(e))return!0;if(!t)return!1;f(e)}return e[n].w},onFreeze:function(e){return c&&l.NEED&&u(e)&&!i(e,n)&&f(e),e}}},{"./_fails":36,"./_has":39,"./_is-object":48,"./_object-dp":60,"./_uid":88}],58:[function(e,t,r){var n=e("./_global"),o=e("./_task").set,i=n.MutationObserver||n.WebKitMutationObserver,a=n.process,s=n.Promise,u="process"==e("./_cof")(a);t.exports=function(){var e,t,r,c=function(){var n,o;for(u&&(n=a.domain)&&n.exit();e;){o=e.fn,e=e.next;try{o()}catch(n){throw e?r():t=void 0,n}}t=void 0,n&&n.enter()};if(u)r=function(){a.nextTick(c)};else if(i){var f=!0,l=document.createTextNode("");new i(c).observe(l,{characterData:!0}),r=function(){l.data=f=!f}}else if(s&&s.resolve){var p=s.resolve();r=function(){p.then(c)}}else r=function(){o.call(n,c)};return function(n){var o={fn:n,next:void 0};t&&(t.next=o),e||(e=o,r()),t=o}}},{"./_cof":27,"./_global":38,"./_task":81}],59:[function(e,t,r){var n=e("./_an-object"),o=e("./_object-dps"),i=e("./_enum-bug-keys"),a=e("./_shared-key")("IE_PROTO"),s=function(){},u=function(){var t,r=e("./_dom-create")("iframe"),n=i.length;for(r.style.display="none",e("./_html").appendChild(r),r.src="javascript:",(t=r.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;n--;)delete u.prototype[i[n]];return u()};t.exports=Object.create||function(e,t){var r;return null!==e?(s.prototype=n(e),r=new s,s.prototype=null,r[a]=e):r=u(),void 0===t?r:o(r,t)}},{"./_an-object":24,"./_dom-create":32,"./_enum-bug-keys":33,"./_html":41,"./_object-dps":61,"./_shared-key":77}],60:[function(e,t,r){var n=e("./_an-object"),o=e("./_ie8-dom-define"),i=e("./_to-primitive"),a=Object.defineProperty;r.f=e("./_descriptors")?Object.defineProperty:function(e,t,r){if(n(e),t=i(t,!0),n(r),o)try{return a(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},{"./_an-object":24,"./_descriptors":31,"./_ie8-dom-define":42,"./_to-primitive":87}],61:[function(e,t,r){var n=e("./_object-dp"),o=e("./_an-object"),i=e("./_object-keys");t.exports=e("./_descriptors")?Object.defineProperties:function(e,t){o(e);for(var r,a=i(t),s=a.length,u=0;s>u;)n.f(e,r=a[u++],t[r]);return e}},{"./_an-object":24,"./_descriptors":31,"./_object-dp":60,"./_object-keys":68}],62:[function(e,t,r){var n=e("./_object-pie"),o=e("./_property-desc"),i=e("./_to-iobject"),a=e("./_to-primitive"),s=e("./_has"),u=e("./_ie8-dom-define"),c=Object.getOwnPropertyDescriptor;r.f=e("./_descriptors")?c:function(e,t){if(e=i(e),t=a(t,!0),u)try{return c(e,t)}catch(e){}if(s(e,t))return o(!n.f.call(e,t),e[t])}},{"./_descriptors":31,"./_has":39,"./_ie8-dom-define":42,"./_object-pie":69,"./_property-desc":71,"./_to-iobject":84,"./_to-primitive":87}],63:[function(e,t,r){var n=e("./_to-iobject"),o=e("./_object-gopn").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return o(e)}catch(e){return a.slice()}};t.exports.f=function(e){return a&&"[object Window]"==i.call(e)?s(e):o(n(e))}},{"./_object-gopn":64,"./_to-iobject":84}],64:[function(e,t,r){var n=e("./_object-keys-internal"),o=e("./_enum-bug-keys").concat("length","prototype");r.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},{"./_enum-bug-keys":33,"./_object-keys-internal":67}],65:[function(e,t,r){r.f=Object.getOwnPropertySymbols},{}],66:[function(e,t,r){var n=e("./_has"),o=e("./_to-object"),i=e("./_shared-key")("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(e){return e=o(e),n(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},{"./_has":39,"./_shared-key":77,"./_to-object":86}],67:[function(e,t,r){var n=e("./_has"),o=e("./_to-iobject"),i=e("./_array-includes")(!1),a=e("./_shared-key")("IE_PROTO");t.exports=function(e,t){var r,s=o(e),u=0,c=[];for(r in s)r!=a&&n(s,r)&&c.push(r);for(;t.length>u;)n(s,r=t[u++])&&(~i(c,r)||c.push(r));return c}},{"./_array-includes":25,"./_has":39,"./_shared-key":77,"./_to-iobject":84}],68:[function(e,t,r){var n=e("./_object-keys-internal"),o=e("./_enum-bug-keys");t.exports=Object.keys||function(e){return n(e,o)}},{"./_enum-bug-keys":33,"./_object-keys-internal":67}],69:[function(e,t,r){r.f={}.propertyIsEnumerable},{}],70:[function(e,t,r){var n=e("./_export"),o=e("./_core"),i=e("./_fails");t.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],a={};a[e]=t(r),n(n.S+n.F*i(function(){r(1)}),"Object",a)}},{"./_core":28,"./_export":35,"./_fails":36}],71:[function(e,t,r){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],72:[function(e,t,r){var n=e("./_hide");t.exports=function(e,t,r){for(var o in t)r&&e[o]?e[o]=t[o]:n(e,o,t[o]);return e}},{"./_hide":40}],73:[function(e,t,r){t.exports=e("./_hide")},{"./_hide":40}],74:[function(e,t,r){t.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},{}],75:[function(e,t,r){"use strict";var n=e("./_global"),o=e("./_core"),i=e("./_object-dp"),a=e("./_descriptors"),s=e("./_wks")("species");t.exports=function(e){var t="function"==typeof o[e]?o[e]:n[e];a&&t&&!t[s]&&i.f(t,s,{configurable:!0,get:function(){return this}})}},{"./_core":28,"./_descriptors":31,"./_global":38,"./_object-dp":60,"./_wks":91}],76:[function(e,t,r){var n=e("./_object-dp").f,o=e("./_has"),i=e("./_wks")("toStringTag");t.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,i)&&n(e,i,{configurable:!0,value:t})}},{"./_has":39,"./_object-dp":60,"./_wks":91}],77:[function(e,t,r){var n=e("./_shared")("keys"),o=e("./_uid");t.exports=function(e){return n[e]||(n[e]=o(e))}},{"./_shared":78,"./_uid":88}],78:[function(e,t,r){var n=e("./_global"),o=n["__core-js_shared__"]||(n["__core-js_shared__"]={});t.exports=function(e){return o[e]||(o[e]={})}},{"./_global":38}],79:[function(e,t,r){var n=e("./_an-object"),o=e("./_a-function"),i=e("./_wks")("species");t.exports=function(e,t){var r,a=n(e).constructor;return void 0===a||void 0==(r=n(a)[i])?t:o(r)}},{"./_a-function":21,"./_an-object":24,"./_wks":91}],80:[function(e,t,r){var n=e("./_to-integer"),o=e("./_defined");t.exports=function(e){return function(t,r){var i,a,s=String(o(t)),u=n(r),c=s.length;return u<0||u>=c?e?"":void 0:(i=s.charCodeAt(u))<55296||i>56319||u+1===c||(a=s.charCodeAt(u+1))<56320||a>57343?e?s.charAt(u):i:e?s.slice(u,u+2):a-56320+(i-55296<<10)+65536}}},{"./_defined":30,"./_to-integer":83}],81:[function(e,t,r){var n,o,i,a=e("./_ctx"),s=e("./_invoke"),u=e("./_html"),c=e("./_dom-create"),f=e("./_global"),l=f.process,p=f.setImmediate,d=f.clearImmediate,h=f.MessageChannel,b=0,v={},g=function(){var e=+this;if(v.hasOwnProperty(e)){var t=v[e];delete v[e],t()}},y=function(e){g.call(e.data)};p&&d||(p=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return v[++b]=function(){s("function"==typeof e?e:Function(e),t)},n(b),b},d=function(e){delete v[e]},"process"==e("./_cof")(l)?n=function(e){l.nextTick(a(g,e,1))}:h?(i=(o=new h).port2,o.port1.onmessage=y,n=a(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(n=function(e){f.postMessage(e+"","*")},f.addEventListener("message",y,!1)):n="onreadystatechange"in c("script")?function(e){u.appendChild(c("script")).onreadystatechange=function(){u.removeChild(this),g.call(e)}}:function(e){setTimeout(a(g,e,1),0)}),t.exports={set:p,clear:d}},{"./_cof":27,"./_ctx":29,"./_dom-create":32,"./_global":38,"./_html":41,"./_invoke":43}],82:[function(e,t,r){var n=e("./_to-integer"),o=Math.max,i=Math.min;t.exports=function(e,t){return(e=n(e))<0?o(e+t,0):i(e,t)}},{"./_to-integer":83}],83:[function(e,t,r){var n=Math.ceil,o=Math.floor;t.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)}},{}],84:[function(e,t,r){var n=e("./_iobject"),o=e("./_defined");t.exports=function(e){return n(o(e))}},{"./_defined":30,"./_iobject":44}],85:[function(e,t,r){var n=e("./_to-integer"),o=Math.min;t.exports=function(e){return e>0?o(n(e),9007199254740991):0}},{"./_to-integer":83}],86:[function(e,t,r){var n=e("./_defined");t.exports=function(e){return Object(n(e))}},{"./_defined":30}],87:[function(e,t,r){var n=e("./_is-object");t.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},{"./_is-object":48}],88:[function(e,t,r){var n=0,o=Math.random();t.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},{}],89:[function(e,t,r){var n=e("./_global"),o=e("./_core"),i=e("./_library"),a=e("./_wks-ext"),s=e("./_object-dp").f;t.exports=function(e){var t=o.Symbol||(o.Symbol=i?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:a.f(e)})}},{"./_core":28,"./_global":38,"./_library":56,"./_object-dp":60,"./_wks-ext":90}],90:[function(e,t,r){r.f=e("./_wks")},{"./_wks":91}],91:[function(e,t,r){var n=e("./_shared")("wks"),o=e("./_uid"),i=e("./_global").Symbol,a="function"==typeof i;(t.exports=function(e){return n[e]||(n[e]=a&&i[e]||(a?i:o)("Symbol."+e))}).store=n},{"./_global":38,"./_shared":78,"./_uid":88}],92:[function(e,t,r){var n=e("./_classof"),o=e("./_wks")("iterator"),i=e("./_iterators");t.exports=e("./_core").getIteratorMethod=function(e){if(void 0!=e)return e[o]||e["@@iterator"]||i[n(e)]}},{"./_classof":26,"./_core":28,"./_iterators":54,"./_wks":91}],93:[function(e,t,r){var n=e("./_classof"),o=e("./_wks")("iterator"),i=e("./_iterators");t.exports=e("./_core").isIterable=function(e){var t=Object(e);return void 0!==t[o]||"@@iterator"in t||i.hasOwnProperty(n(t))}},{"./_classof":26,"./_core":28,"./_iterators":54,"./_wks":91}],94:[function(e,t,r){"use strict";var n=e("./_add-to-unscopables"),o=e("./_iter-step"),i=e("./_iterators"),a=e("./_to-iobject");t.exports=e("./_iter-define")(Array,"Array",function(e,t){this._t=a(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,o(1)):"keys"==t?o(0,r):"values"==t?o(0,e[r]):o(0,[r,e[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},{"./_add-to-unscopables":22,"./_iter-define":51,"./_iter-step":53,"./_iterators":54,"./_to-iobject":84}],95:[function(e,t,r){var n=e("./_export");n(n.S,"Number",{isInteger:e("./_is-integer")})},{"./_export":35,"./_is-integer":47}],96:[function(e,t,r){var n=e("./_export");n(n.S,"Object",{create:e("./_object-create")})},{"./_export":35,"./_object-create":59}],97:[function(e,t,r){var n=e("./_export");n(n.S,"Object",{is:e("./_same-value")})},{"./_export":35,"./_same-value":74}],98:[function(e,t,r){var n=e("./_to-object"),o=e("./_object-keys");e("./_object-sap")("keys",function(){return function(e){return o(n(e))}})},{"./_object-keys":68,"./_object-sap":70,"./_to-object":86}],99:[function(e,t,r){},{}],100:[function(e,t,r){"use strict";var n,o,i,a=e("./_library"),s=e("./_global"),u=e("./_ctx"),c=e("./_classof"),f=e("./_export"),l=e("./_is-object"),p=e("./_a-function"),d=e("./_an-instance"),h=e("./_for-of"),b=e("./_species-constructor"),v=e("./_task").set,g=e("./_microtask")(),y=s.TypeError,m=s.process,_=s.Promise,x="process"==c(m=s.process),k=function(){},w=!!function(){try{var t=_.resolve(1),r=(t.constructor={})[e("./_wks")("species")]=function(e){e(k,k)};return(x||"function"==typeof PromiseRejectionEvent)&&t.then(k)instanceof r}catch(e){}}(),j=function(e,t){return e===t||e===_&&t===i},O=function(e){var t;return!(!l(e)||"function"!=typeof(t=e.then))&&t},E=function(e){return j(_,e)?new S(e):new o(e)},S=o=function(e){var t,r;this.promise=new e(function(e,n){if(void 0!==t||void 0!==r)throw y("Bad Promise constructor");t=e,r=n}),this.resolve=p(t),this.reject=p(r)},A=function(e){try{e()}catch(e){return{error:e}}},T=function(e,t){if(!e._n){e._n=!0;var r=e._c;g(function(){for(var n=e._v,o=1==e._s,i=0;r.length>i;)!function(t){var r,i,a=o?t.ok:t.fail,s=t.resolve,u=t.reject,c=t.domain;try{a?(o||(2==e._h&&M(e),e._h=1),!0===a?r=n:(c&&c.enter(),r=a(n),c&&c.exit()),r===t.promise?u(y("Promise-chain cycle")):(i=O(r))?i.call(r,s,u):s(r)):u(n)}catch(e){u(e)}}(r[i++]);e._c=[],e._n=!1,t&&!e._h&&P(e)})}},P=function(e){v.call(s,function(){var t,r,n,o=e._v;if(D(e)&&(t=A(function(){x?m.emit("unhandledRejection",o,e):(r=s.onunhandledrejection)?r({promise:e,reason:o}):(n=s.console)&&n.error&&n.error("Unhandled promise rejection",o)}),e._h=x||D(e)?2:1),e._a=void 0,t)throw t.error})},D=function(e){if(1==e._h)return!1;for(var t,r=e._a||e._c,n=0;r.length>n;)if((t=r[n++]).fail||!D(t.promise))return!1;return!0},M=function(e){v.call(s,function(){var t;x?m.emit("rejectionHandled",e):(t=s.onrejectionhandled)&&t({promise:e,reason:e._v})})},Y=function(e){var t=this;t._d||(t._d=!0,(t=t._w||t)._v=e,t._s=2,t._a||(t._a=t._c.slice()),T(t,!0))},N=function(e){var t,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===e)throw y("Promise can't be resolved itself");(t=O(e))?g(function(){var n={_w:r,_d:!1};try{t.call(e,u(N,n,1),u(Y,n,1))}catch(e){Y.call(n,e)}}):(r._v=e,r._s=1,T(r,!1))}catch(e){Y.call({_w:r,_d:!1},e)}}};w||(_=function(e){d(this,_,"Promise","_h"),p(e),n.call(this);try{e(u(N,this,1),u(Y,this,1))}catch(e){Y.call(this,e)}},(n=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e("./_redefine-all")(_.prototype,{then:function(e,t){var r=E(b(this,_));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=x?m.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&T(this,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),S=function(){var e=new n;this.promise=e,this.resolve=u(N,e,1),this.reject=u(Y,e,1)}),f(f.G+f.W+f.F*!w,{Promise:_}),e("./_set-to-string-tag")(_,"Promise"),e("./_set-species")("Promise"),i=e("./_core").Promise,f(f.S+f.F*!w,"Promise",{reject:function(e){var t=E(this);return(0,t.reject)(e),t.promise}}),f(f.S+f.F*(a||!w),"Promise",{resolve:function(e){if(e instanceof _&&j(e.constructor,this))return e;var t=E(this);return(0,t.resolve)(e),t.promise}}),f(f.S+f.F*!(w&&e("./_iter-detect")(function(e){_.all(e).catch(k)})),"Promise",{all:function(e){var t=this,r=E(t),n=r.resolve,o=r.reject,i=A(function(){var r=[],i=0,a=1;h(e,!1,function(e){var s=i++,u=!1;r.push(void 0),a++,t.resolve(e).then(function(e){u||(u=!0,r[s]=e,--a||n(r))},o)}),--a||n(r)});return i&&o(i.error),r.promise},race:function(e){var t=this,r=E(t),n=r.reject,o=A(function(){h(e,!1,function(e){t.resolve(e).then(r.resolve,n)})});return o&&n(o.error),r.promise}})},{"./_a-function":21,"./_an-instance":23,"./_classof":26,"./_core":28,"./_ctx":29,"./_export":35,"./_for-of":37,"./_global":38,"./_is-object":48,"./_iter-detect":52,"./_library":56,"./_microtask":58,"./_redefine-all":72,"./_set-species":75,"./_set-to-string-tag":76,"./_species-constructor":79,"./_task":81,"./_wks":91}],101:[function(e,t,r){"use strict";var n=e("./_string-at")(!0);e("./_iter-define")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},{"./_iter-define":51,"./_string-at":80}],102:[function(e,t,r){"use strict";var n=e("./_global"),o=e("./_has"),i=e("./_descriptors"),a=e("./_export"),s=e("./_redefine"),u=e("./_meta").KEY,c=e("./_fails"),f=e("./_shared"),l=e("./_set-to-string-tag"),p=e("./_uid"),d=e("./_wks"),h=e("./_wks-ext"),b=e("./_wks-define"),v=e("./_keyof"),g=e("./_enum-keys"),y=e("./_is-array"),m=e("./_an-object"),_=e("./_to-iobject"),x=e("./_to-primitive"),k=e("./_property-desc"),w=e("./_object-create"),j=e("./_object-gopn-ext"),O=e("./_object-gopd"),E=e("./_object-dp"),S=e("./_object-keys"),A=O.f,T=E.f,P=j.f,D=n.Symbol,M=n.JSON,Y=M&&M.stringify,N=d("_hidden"),F=d("toPrimitive"),I={}.propertyIsEnumerable,L=f("symbol-registry"),R=f("symbols"),C=f("op-symbols"),G=Object.prototype,$="function"==typeof D,z=n.QObject,U=!z||!z.prototype||!z.prototype.findChild,q=i&&c(function(){return 7!=w(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(e,t,r){var n=A(G,t);n&&delete G[t],T(e,t,r),n&&e!==G&&T(G,t,n)}:T,J=function(e){var t=R[e]=w(D.prototype);return t._k=e,t},B=$&&"symbol"==typeof D.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof D},W=function(e,t,r){return e===G&&W(C,t,r),m(e),t=x(t,!0),m(r),o(R,t)?(r.enumerable?(o(e,N)&&e[N][t]&&(e[N][t]=!1),r=w(r,{enumerable:k(0,!1)})):(o(e,N)||T(e,N,k(1,{})),e[N][t]=!0),q(e,t,r)):T(e,t,r)},K=function(e,t){m(e);for(var r,n=g(t=_(t)),o=0,i=n.length;i>o;)W(e,r=n[o++],t[r]);return e},Q=function(e){var t=I.call(this,e=x(e,!0));return!(this===G&&o(R,e)&&!o(C,e))&&(!(t||!o(this,e)||!o(R,e)||o(this,N)&&this[N][e])||t)},H=function(e,t){if(e=_(e),t=x(t,!0),e!==G||!o(R,t)||o(C,t)){var r=A(e,t);return!r||!o(R,t)||o(e,N)&&e[N][t]||(r.enumerable=!0),r}},Z=function(e){for(var t,r=P(_(e)),n=[],i=0;r.length>i;)o(R,t=r[i++])||t==N||t==u||n.push(t);return n},V=function(e){for(var t,r=e===G,n=P(r?C:_(e)),i=[],a=0;n.length>a;)!o(R,t=n[a++])||r&&!o(G,t)||i.push(R[t]);return i};$||(s((D=function(){if(this instanceof D)throw TypeError("Symbol is not a constructor!");var e=p(arguments.length>0?arguments[0]:void 0),t=function(r){this===G&&t.call(C,r),o(this,N)&&o(this[N],e)&&(this[N][e]=!1),q(this,e,k(1,r))};return i&&U&&q(G,e,{configurable:!0,set:t}),J(e)}).prototype,"toString",function(){return this._k}),O.f=H,E.f=W,e("./_object-gopn").f=j.f=Z,e("./_object-pie").f=Q,e("./_object-gops").f=V,i&&!e("./_library")&&s(G,"propertyIsEnumerable",Q,!0),h.f=function(e){return J(d(e))}),a(a.G+a.W+a.F*!$,{Symbol:D});for(var X="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;X.length>ee;)d(X[ee++]);for(var X=S(d.store),ee=0;X.length>ee;)b(X[ee++]);a(a.S+a.F*!$,"Symbol",{for:function(e){return o(L,e+="")?L[e]:L[e]=D(e)},keyFor:function(e){if(B(e))return v(L,e);throw TypeError(e+" is not a symbol!")},useSetter:function(){U=!0},useSimple:function(){U=!1}}),a(a.S+a.F*!$,"Object",{create:function(e,t){return void 0===t?w(e):K(w(e),t)},defineProperty:W,defineProperties:K,getOwnPropertyDescriptor:H,getOwnPropertyNames:Z,getOwnPropertySymbols:V}),M&&a(a.S+a.F*(!$||c(function(){var e=D();return"[null]"!=Y([e])||"{}"!=Y({a:e})||"{}"!=Y(Object(e))})),"JSON",{stringify:function(e){if(void 0!==e&&!B(e)){for(var t,r,n=[e],o=1;arguments.length>o;)n.push(arguments[o++]);return"function"==typeof(t=n[1])&&(r=t),!r&&y(t)||(t=function(e,t){if(r&&(t=r.call(this,e,t)),!B(t))return t}),n[1]=t,Y.apply(M,n)}}}),D.prototype[F]||e("./_hide")(D.prototype,F,D.prototype.valueOf),l(D,"Symbol"),l(Math,"Math",!0),l(n.JSON,"JSON",!0)},{"./_an-object":24,"./_descriptors":31,"./_enum-keys":34,"./_export":35,"./_fails":36,"./_global":38,"./_has":39,"./_hide":40,"./_is-array":46,"./_keyof":55,"./_library":56,"./_meta":57,"./_object-create":59,"./_object-dp":60,"./_object-gopd":62,"./_object-gopn":64,"./_object-gopn-ext":63,"./_object-gops":65,"./_object-keys":68,"./_object-pie":69,"./_property-desc":71,"./_redefine":73,"./_set-to-string-tag":76,"./_shared":78,"./_to-iobject":84,"./_to-primitive":87,"./_uid":88,"./_wks":91,"./_wks-define":89,"./_wks-ext":90}],103:[function(e,t,r){e("./_wks-define")("asyncIterator")},{"./_wks-define":89}],104:[function(e,t,r){e("./_wks-define")("observable")},{"./_wks-define":89}],105:[function(e,t,r){e("./es6.array.iterator");for(var n=e("./_global"),o=e("./_hide"),i=e("./_iterators"),a=e("./_wks")("toStringTag"),s=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],u=0;u<5;u++){var c=s[u],f=n[c],l=f&&f.prototype;l&&!l[a]&&o(l,a,c),i[c]=i.Array}},{"./_global":38,"./_hide":40,"./_iterators":54,"./_wks":91,"./es6.array.iterator":94}],106:[function(e,t,r){(function(r){var n="object"==typeof r?r:"object"==typeof window?window:"object"==typeof self?self:this,o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=e("./runtime"),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(e){n.regeneratorRuntime=void 0}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./runtime":107}],107:[function(e,t,r){(function(e){!function(e){"use strict";function r(e,t,r,n){var i=t&&t.prototype instanceof o?t:o,a=Object.create(i.prototype),s=new d(n||[]);return a._invoke=c(e,r,s),a}function n(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function o(){}function i(){}function a(){}function s(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function u(t){function r(e,o,i,a){var s=n(t[e],t,o);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"==typeof c&&y.call(c,"__await")?Promise.resolve(c.__await).then(function(e){r("next",e,i,a)},function(e){r("throw",e,i,a)}):Promise.resolve(c).then(function(e){u.value=e,i(u)},a)}a(s.arg)}"object"==typeof e.process&&e.process.domain&&(r=e.process.domain.bind(r));var o;this._invoke=function(e,t){function n(){return new Promise(function(n,o){r(e,t,n,o)})}return o=o?o.then(n,n):n()}}function c(e,t,r){var o=O;return function(i,a){if(o===S)throw new Error("Generator is already running");if(o===A){if("throw"===i)throw a;return b()}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var u=f(s,r);if(u){if(u===T)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===O)throw o=A,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=S;var c=n(e,t,r);if("normal"===c.type){if(o=r.done?A:E,c.arg===T)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=A,r.method="throw",r.arg=c.arg)}}}function f(e,t){var r=e.iterator[t.method];if(r===v){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=v,f(e,t),"throw"===t.method))return T;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return T}var o=n(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,T;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=v),t.delegate=null,T):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,T)}function l(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function p(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function d(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(l,this),this.reset(!0)}function h(e){if(e){var t=e[_];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(y.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=v,t.done=!0,t};return n.next=n}}return{next:b}}function b(){return{value:v,done:!0}}var v,g=Object.prototype,y=g.hasOwnProperty,m="function"==typeof Symbol?Symbol:{},_=m.iterator||"@@iterator",x=m.asyncIterator||"@@asyncIterator",k=m.toStringTag||"@@toStringTag",w="object"==typeof t,j=e.regeneratorRuntime;if(j)w&&(t.exports=j);else{(j=e.regeneratorRuntime=w?t.exports:{}).wrap=r;var O="suspendedStart",E="suspendedYield",S="executing",A="completed",T={},P={};P[_]=function(){return this};var D=Object.getPrototypeOf,M=D&&D(D(h([])));M&&M!==g&&y.call(M,_)&&(P=M);var Y=a.prototype=o.prototype=Object.create(P);i.prototype=Y.constructor=a,a.constructor=i,a[k]=i.displayName="GeneratorFunction",j.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===i||"GeneratorFunction"===(t.displayName||t.name))},j.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,a):(e.__proto__=a,k in e||(e[k]="GeneratorFunction")),e.prototype=Object.create(Y),e},j.awrap=function(e){return{__await:e}},s(u.prototype),u.prototype[x]=function(){return this},j.AsyncIterator=u,j.async=function(e,t,n,o){var i=new u(r(e,t,n,o));return j.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},s(Y),Y[k]="Generator",Y[_]=function(){return this},Y.toString=function(){return"[object Generator]"},j.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},j.values=h,d.prototype={constructor:d,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=v,this.done=!1,this.delegate=null,this.method="next",this.arg=v,this.tryEntries.forEach(p),!e)for(var t in this)"t"===t.charAt(0)&&y.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=v)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){function t(t,n){return i.type="throw",i.arg=e,r.next=t,n&&(r.method="next",r.arg=v),!!n}if(this.done)throw e;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=y.call(o,"catchLoc"),s=y.call(o,"finallyLoc");if(a&&s){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&y.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,T):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),T},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),p(r),T}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;p(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:h(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=v),T}}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)});;// jsonata-es5.min.js is prepended to this file as part of the Grunt build

;(function(window) {
    if (typeof window.window != "undefined" && window.document)
    return;
    if (window.require && window.define)
    return;

    if (!window.console) {
        window.console = function() {
            var msgs = Array.prototype.slice.call(arguments, 0);
            postMessage({type: "log", data: msgs});
        };
        window.console.error =
        window.console.warn =
        window.console.log =
        window.console.trace = window.console;
    }
    window.window = window;
    window.ace = window;
    window.onerror = function(message, file, line, col, err) {
        postMessage({type: "error", data: {
            message: message,
            data: err.data,
            file: file,
            line: line,
            col: col,
            stack: err.stack
        }});
    };

    window.normalizeModule = function(parentId, moduleName) {
        // normalize plugin requires
        if (moduleName.indexOf("!") !== -1) {
            var chunks = moduleName.split("!");
            return window.normalizeModule(parentId, chunks[0]) + "!" + window.normalizeModule(parentId, chunks[1]);
        }
        // normalize relative requires
        if (moduleName.charAt(0) == ".") {
            var base = parentId.split("/").slice(0, -1).join("/");
            moduleName = (base ? base + "/" : "") + moduleName;

            while (moduleName.indexOf(".") !== -1 && previous != moduleName) {
                var previous = moduleName;
                moduleName = moduleName.replace(/^\.\//, "").replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "");
            }
        }

        return moduleName;
    };

    window.require = function require(parentId, id) {
        if (!id) {
            id = parentId;
            parentId = null;
        }
        if (!id.charAt)
        throw new Error("worker.js require() accepts only (parentId, id) as arguments");

        id = window.normalizeModule(parentId, id);

        var module = window.require.modules[id];
        if (module) {
            if (!module.initialized) {
                module.initialized = true;
                module.exports = module.factory().exports;
            }
            return module.exports;
        }

        if (!window.require.tlns)
        return console.log("unable to load " + id);

        var path = resolveModuleId(id, window.require.tlns);
        if (path.slice(-3) != ".js") path += ".js";

        window.require.id = id;
        window.require.modules[id] = {}; // prevent infinite loop on broken modules
        importScripts(path);
        return window.require(parentId, id);
    };
    function resolveModuleId(id, paths) {
        var testPath = id, tail = "";
        while (testPath) {
            var alias = paths[testPath];
            if (typeof alias == "string") {
                return alias + tail;
            } else if (alias) {
                return  alias.location.replace(/\/*$/, "/") + (tail || alias.main || alias.name);
            } else if (alias === false) {
                return "";
            }
            var i = testPath.lastIndexOf("/");
            if (i === -1) break;
            tail = testPath.substr(i) + tail;
            testPath = testPath.slice(0, i);
        }
        return id;
    }
    window.require.modules = {};
    window.require.tlns = {};

    window.define = function(id, deps, factory) {
        if (arguments.length == 2) {
            factory = deps;
            if (typeof id != "string") {
                deps = id;
                id = window.require.id;
            }
        } else if (arguments.length == 1) {
            factory = id;
            deps = [];
            id = window.require.id;
        }

        if (typeof factory != "function") {
            window.require.modules[id] = {
                exports: factory,
                initialized: true
            };
            return;
        }

        if (!deps.length)
        // If there is no dependencies, we inject "require", "exports" and
        // "module" as dependencies, to provide CommonJS compatibility.
        deps = ["require", "exports", "module"];

        var req = function(childId) {
            return window.require(id, childId);
        };

        window.require.modules[id] = {
            exports: {},
            factory: function() {
                var module = this;
                var returnExports = factory.apply(this, deps.map(function(dep) {
                    switch (dep) {
                        // Because "require", "exports" and "module" aren't actual
                        // dependencies, we must handle them seperately.
                        case "require": return req;
                        case "exports": return module.exports;
                        case "module":  return module;
                        // But for all other dependencies, we can just go ahead and
                        // require them.
                        default:        return req(dep);
                    }
                }));
                if (returnExports)
                module.exports = returnExports;
                return module;
            }
        };
    };
    window.define.amd = {};
    require.tlns = {};
    window.initBaseUrls  = function initBaseUrls(topLevelNamespaces) {
        for (var i in topLevelNamespaces)
        require.tlns[i] = topLevelNamespaces[i];
    };

    window.initSender = function initSender() {

        var EventEmitter = window.require("ace/lib/event_emitter").EventEmitter;
        var oop = window.require("ace/lib/oop");

        var Sender = function() {};

        (function() {

            oop.implement(this, EventEmitter);

            this.callback = function(data, callbackId) {
                postMessage({
                    type: "call",
                    id: callbackId,
                    data: data
                });
            };

            this.emit = function(name, data) {
                postMessage({
                    type: "event",
                    name: name,
                    data: data
                });
            };

        }).call(Sender.prototype);

        return new Sender();
    };

    var main = window.main = null;
    var sender = window.sender = null;

    window.onmessage = function(e) {
        var msg = e.data;
        if (msg.event && sender) {
            sender._signal(msg.event, msg.data);
        }
        else if (msg.command) {
            if (main[msg.command])
            main[msg.command].apply(main, msg.args);
            else if (window[msg.command])
            window[msg.command].apply(window, msg.args);
            else
            throw new Error("Unknown command:" + msg.command);
        }
        else if (msg.init) {
            window.initBaseUrls(msg.tlns);
            require("ace/lib/es5-shim");
            sender = window.sender = window.initSender();
            var clazz = require(msg.module)[msg.classname];
            main = window.main = new clazz(sender);
        }
    };
})(this);

define("ace/lib/oop",["require","exports","module"], function(require, exports, module) {
    "use strict";

    exports.inherits = function(ctor, superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    };

    exports.mixin = function(obj, mixin) {
        for (var key in mixin) {
            obj[key] = mixin[key];
        }
        return obj;
    };

    exports.implement = function(proto, mixin) {
        exports.mixin(proto, mixin);
    };

});

define("ace/range",["require","exports","module"], function(require, exports, module) {
    "use strict";
    var comparePoints = function(p1, p2) {
        return p1.row - p2.row || p1.column - p2.column;
    };
    var Range = function(startRow, startColumn, endRow, endColumn) {
        this.start = {
            row: startRow,
            column: startColumn
        };

        this.end = {
            row: endRow,
            column: endColumn
        };
    };

    (function() {
        this.isEqual = function(range) {
            return this.start.row === range.start.row &&
            this.end.row === range.end.row &&
            this.start.column === range.start.column &&
            this.end.column === range.end.column;
        };
        this.toString = function() {
            return ("Range: [" + this.start.row + "/" + this.start.column +
            "] -> [" + this.end.row + "/" + this.end.column + "]");
        };

        this.contains = function(row, column) {
            return this.compare(row, column) == 0;
        };
        this.compareRange = function(range) {
            var cmp,
            end = range.end,
            start = range.start;

            cmp = this.compare(end.row, end.column);
            if (cmp == 1) {
                cmp = this.compare(start.row, start.column);
                if (cmp == 1) {
                    return 2;
                } else if (cmp == 0) {
                    return 1;
                } else {
                    return 0;
                }
            } else if (cmp == -1) {
                return -2;
            } else {
                cmp = this.compare(start.row, start.column);
                if (cmp == -1) {
                    return -1;
                } else if (cmp == 1) {
                    return 42;
                } else {
                    return 0;
                }
            }
        };
        this.comparePoint = function(p) {
            return this.compare(p.row, p.column);
        };
        this.containsRange = function(range) {
            return this.comparePoint(range.start) == 0 && this.comparePoint(range.end) == 0;
        };
        this.intersects = function(range) {
            var cmp = this.compareRange(range);
            return (cmp == -1 || cmp == 0 || cmp == 1);
        };
        this.isEnd = function(row, column) {
            return this.end.row == row && this.end.column == column;
        };
        this.isStart = function(row, column) {
            return this.start.row == row && this.start.column == column;
        };
        this.setStart = function(row, column) {
            if (typeof row == "object") {
                this.start.column = row.column;
                this.start.row = row.row;
            } else {
                this.start.row = row;
                this.start.column = column;
            }
        };
        this.setEnd = function(row, column) {
            if (typeof row == "object") {
                this.end.column = row.column;
                this.end.row = row.row;
            } else {
                this.end.row = row;
                this.end.column = column;
            }
        };
        this.inside = function(row, column) {
            if (this.compare(row, column) == 0) {
                if (this.isEnd(row, column) || this.isStart(row, column)) {
                    return false;
                } else {
                    return true;
                }
            }
            return false;
        };
        this.insideStart = function(row, column) {
            if (this.compare(row, column) == 0) {
                if (this.isEnd(row, column)) {
                    return false;
                } else {
                    return true;
                }
            }
            return false;
        };
        this.insideEnd = function(row, column) {
            if (this.compare(row, column) == 0) {
                if (this.isStart(row, column)) {
                    return false;
                } else {
                    return true;
                }
            }
            return false;
        };
        this.compare = function(row, column) {
            if (!this.isMultiLine()) {
                if (row === this.start.row) {
                    return column < this.start.column ? -1 : (column > this.end.column ? 1 : 0);
                }
            }

            if (row < this.start.row)
            return -1;

            if (row > this.end.row)
            return 1;

            if (this.start.row === row)
            return column >= this.start.column ? 0 : -1;

            if (this.end.row === row)
            return column <= this.end.column ? 0 : 1;

            return 0;
        };
        this.compareStart = function(row, column) {
            if (this.start.row == row && this.start.column == column) {
                return -1;
            } else {
                return this.compare(row, column);
            }
        };
        this.compareEnd = function(row, column) {
            if (this.end.row == row && this.end.column == column) {
                return 1;
            } else {
                return this.compare(row, column);
            }
        };
        this.compareInside = function(row, column) {
            if (this.end.row == row && this.end.column == column) {
                return 1;
            } else if (this.start.row == row && this.start.column == column) {
                return -1;
            } else {
                return this.compare(row, column);
            }
        };
        this.clipRows = function(firstRow, lastRow) {
            if (this.end.row > lastRow)
            var end = {row: lastRow + 1, column: 0};
            else if (this.end.row < firstRow)
            var end = {row: firstRow, column: 0};

            if (this.start.row > lastRow)
            var start = {row: lastRow + 1, column: 0};
            else if (this.start.row < firstRow)
            var start = {row: firstRow, column: 0};

            return Range.fromPoints(start || this.start, end || this.end);
        };
        this.extend = function(row, column) {
            var cmp = this.compare(row, column);

            if (cmp == 0)
            return this;
            else if (cmp == -1)
            var start = {row: row, column: column};
            else
            var end = {row: row, column: column};

            return Range.fromPoints(start || this.start, end || this.end);
        };

        this.isEmpty = function() {
            return (this.start.row === this.end.row && this.start.column === this.end.column);
        };
        this.isMultiLine = function() {
            return (this.start.row !== this.end.row);
        };
        this.clone = function() {
            return Range.fromPoints(this.start, this.end);
        };
        this.collapseRows = function() {
            if (this.end.column == 0)
            return new Range(this.start.row, 0, Math.max(this.start.row, this.end.row-1), 0)
            else
            return new Range(this.start.row, 0, this.end.row, 0)
        };
        this.toScreenRange = function(session) {
            var screenPosStart = session.documentToScreenPosition(this.start);
            var screenPosEnd = session.documentToScreenPosition(this.end);

            return new Range(
                screenPosStart.row, screenPosStart.column,
                screenPosEnd.row, screenPosEnd.column
            );
        };
        this.moveBy = function(row, column) {
            this.start.row += row;
            this.start.column += column;
            this.end.row += row;
            this.end.column += column;
        };

    }).call(Range.prototype);
    Range.fromPoints = function(start, end) {
        return new Range(start.row, start.column, end.row, end.column);
    };
    Range.comparePoints = comparePoints;

    Range.comparePoints = function(p1, p2) {
        return p1.row - p2.row || p1.column - p2.column;
    };


    exports.Range = Range;
});

define("ace/apply_delta",["require","exports","module"], function(require, exports, module) {
    "use strict";

    function throwDeltaError(delta, errorText){
        console.log("Invalid Delta:", delta);
        throw "Invalid Delta: " + errorText;
    }

    function positionInDocument(docLines, position) {
        return position.row    >= 0 && position.row    <  docLines.length &&
        position.column >= 0 && position.column <= docLines[position.row].length;
    }

    function validateDelta(docLines, delta) {
        if (delta.action != "insert" && delta.action != "remove")
        throwDeltaError(delta, "delta.action must be 'insert' or 'remove'");
        if (!(delta.lines instanceof Array))
        throwDeltaError(delta, "delta.lines must be an Array");
        if (!delta.start || !delta.end)
        throwDeltaError(delta, "delta.start/end must be an present");
        var start = delta.start;
        if (!positionInDocument(docLines, delta.start))
        throwDeltaError(delta, "delta.start must be contained in document");
        var end = delta.end;
        if (delta.action == "remove" && !positionInDocument(docLines, end))
        throwDeltaError(delta, "delta.end must contained in document for 'remove' actions");
        var numRangeRows = end.row - start.row;
        var numRangeLastLineChars = (end.column - (numRangeRows == 0 ? start.column : 0));
        if (numRangeRows != delta.lines.length - 1 || delta.lines[numRangeRows].length != numRangeLastLineChars)
        throwDeltaError(delta, "delta.range must match delta lines");
    }

    exports.applyDelta = function(docLines, delta, doNotValidate) {

        var row = delta.start.row;
        var startColumn = delta.start.column;
        var line = docLines[row] || "";
        switch (delta.action) {
            case "insert":
            var lines = delta.lines;
            if (lines.length === 1) {
                docLines[row] = line.substring(0, startColumn) + delta.lines[0] + line.substring(startColumn);
            } else {
                var args = [row, 1].concat(delta.lines);
                docLines.splice.apply(docLines, args);
                docLines[row] = line.substring(0, startColumn) + docLines[row];
                docLines[row + delta.lines.length - 1] += line.substring(startColumn);
            }
            break;
            case "remove":
            var endColumn = delta.end.column;
            var endRow = delta.end.row;
            if (row === endRow) {
                docLines[row] = line.substring(0, startColumn) + line.substring(endColumn);
            } else {
                docLines.splice(
                    row, endRow - row + 1,
                    line.substring(0, startColumn) + docLines[endRow].substring(endColumn)
                );
            }
            break;
        }
    }
});

define("ace/lib/event_emitter",["require","exports","module"], function(require, exports, module) {
    "use strict";

    var EventEmitter = {};
    var stopPropagation = function() { this.propagationStopped = true; };
    var preventDefault = function() { this.defaultPrevented = true; };

    EventEmitter._emit =
    EventEmitter._dispatchEvent = function(eventName, e) {
        this._eventRegistry || (this._eventRegistry = {});
        this._defaultHandlers || (this._defaultHandlers = {});

        var listeners = this._eventRegistry[eventName] || [];
        var defaultHandler = this._defaultHandlers[eventName];
        if (!listeners.length && !defaultHandler)
        return;

        if (typeof e != "object" || !e)
        e = {};

        if (!e.type)
        e.type = eventName;
        if (!e.stopPropagation)
        e.stopPropagation = stopPropagation;
        if (!e.preventDefault)
        e.preventDefault = preventDefault;

        listeners = listeners.slice();
        for (var i=0; i<listeners.length; i++) {
            listeners[i](e, this);
            if (e.propagationStopped)
            break;
        }

        if (defaultHandler && !e.defaultPrevented)
        return defaultHandler(e, this);
    };


    EventEmitter._signal = function(eventName, e) {
        var listeners = (this._eventRegistry || {})[eventName];
        if (!listeners)
        return;
        listeners = listeners.slice();
        for (var i=0; i<listeners.length; i++)
        listeners[i](e, this);
    };

    EventEmitter.once = function(eventName, callback) {
        var _self = this;
        callback && this.addEventListener(eventName, function newCallback() {
            _self.removeEventListener(eventName, newCallback);
            callback.apply(null, arguments);
        });
    };


    EventEmitter.setDefaultHandler = function(eventName, callback) {
        var handlers = this._defaultHandlers
        if (!handlers)
        handlers = this._defaultHandlers = {_disabled_: {}};

        if (handlers[eventName]) {
            var old = handlers[eventName];
            var disabled = handlers._disabled_[eventName];
            if (!disabled)
            handlers._disabled_[eventName] = disabled = [];
            disabled.push(old);
            var i = disabled.indexOf(callback);
            if (i != -1)
            disabled.splice(i, 1);
        }
        handlers[eventName] = callback;
    };
    EventEmitter.removeDefaultHandler = function(eventName, callback) {
        var handlers = this._defaultHandlers
        if (!handlers)
        return;
        var disabled = handlers._disabled_[eventName];

        if (handlers[eventName] == callback) {
            var old = handlers[eventName];
            if (disabled)
            this.setDefaultHandler(eventName, disabled.pop());
        } else if (disabled) {
            var i = disabled.indexOf(callback);
            if (i != -1)
            disabled.splice(i, 1);
        }
    };

    EventEmitter.on =
    EventEmitter.addEventListener = function(eventName, callback, capturing) {
        this._eventRegistry = this._eventRegistry || {};

        var listeners = this._eventRegistry[eventName];
        if (!listeners)
        listeners = this._eventRegistry[eventName] = [];

        if (listeners.indexOf(callback) == -1)
        listeners[capturing ? "unshift" : "push"](callback);
        return callback;
    };

    EventEmitter.off =
    EventEmitter.removeListener =
    EventEmitter.removeEventListener = function(eventName, callback) {
        this._eventRegistry = this._eventRegistry || {};

        var listeners = this._eventRegistry[eventName];
        if (!listeners)
        return;

        var index = listeners.indexOf(callback);
        if (index !== -1)
        listeners.splice(index, 1);
    };

    EventEmitter.removeAllListeners = function(eventName) {
        if (this._eventRegistry) this._eventRegistry[eventName] = [];
    };

    exports.EventEmitter = EventEmitter;

});

define("ace/anchor",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"], function(require, exports, module) {
    "use strict";

    var oop = require("./lib/oop");
    var EventEmitter = require("./lib/event_emitter").EventEmitter;

    var Anchor = exports.Anchor = function(doc, row, column) {
        this.$onChange = this.onChange.bind(this);
        this.attach(doc);

        if (typeof column == "undefined")
        this.setPosition(row.row, row.column);
        else
        this.setPosition(row, column);
    };

    (function() {

        oop.implement(this, EventEmitter);
        this.getPosition = function() {
            return this.$clipPositionToDocument(this.row, this.column);
        };
        this.getDocument = function() {
            return this.document;
        };
        this.$insertRight = false;
        this.onChange = function(delta) {
            if (delta.start.row == delta.end.row && delta.start.row != this.row)
            return;

            if (delta.start.row > this.row)
            return;

            var point = $getTransformedPoint(delta, {row: this.row, column: this.column}, this.$insertRight);
            this.setPosition(point.row, point.column, true);
        };

        function $pointsInOrder(point1, point2, equalPointsInOrder) {
            var bColIsAfter = equalPointsInOrder ? point1.column <= point2.column : point1.column < point2.column;
            return (point1.row < point2.row) || (point1.row == point2.row && bColIsAfter);
        }

        function $getTransformedPoint(delta, point, moveIfEqual) {
            var deltaIsInsert = delta.action == "insert";
            var deltaRowShift = (deltaIsInsert ? 1 : -1) * (delta.end.row    - delta.start.row);
            var deltaColShift = (deltaIsInsert ? 1 : -1) * (delta.end.column - delta.start.column);
            var deltaStart = delta.start;
            var deltaEnd = deltaIsInsert ? deltaStart : delta.end; // Collapse insert range.
            if ($pointsInOrder(point, deltaStart, moveIfEqual)) {
                return {
                    row: point.row,
                    column: point.column
                };
            }
            if ($pointsInOrder(deltaEnd, point, !moveIfEqual)) {
                return {
                    row: point.row + deltaRowShift,
                    column: point.column + (point.row == deltaEnd.row ? deltaColShift : 0)
                };
            }

            return {
                row: deltaStart.row,
                column: deltaStart.column
            };
        }
        this.setPosition = function(row, column, noClip) {
            var pos;
            if (noClip) {
                pos = {
                    row: row,
                    column: column
                };
            } else {
                pos = this.$clipPositionToDocument(row, column);
            }

            if (this.row == pos.row && this.column == pos.column)
            return;

            var old = {
                row: this.row,
                column: this.column
            };

            this.row = pos.row;
            this.column = pos.column;
            this._signal("change", {
                old: old,
                value: pos
            });
        };
        this.detach = function() {
            this.document.removeEventListener("change", this.$onChange);
        };
        this.attach = function(doc) {
            this.document = doc || this.document;
            this.document.on("change", this.$onChange);
        };
        this.$clipPositionToDocument = function(row, column) {
            var pos = {};

            if (row >= this.document.getLength()) {
                pos.row = Math.max(0, this.document.getLength() - 1);
                pos.column = this.document.getLine(pos.row).length;
            }
            else if (row < 0) {
                pos.row = 0;
                pos.column = 0;
            }
            else {
                pos.row = row;
                pos.column = Math.min(this.document.getLine(pos.row).length, Math.max(0, column));
            }

            if (column < 0)
            pos.column = 0;

            return pos;
        };

    }).call(Anchor.prototype);

});

define("ace/document",["require","exports","module","ace/lib/oop","ace/apply_delta","ace/lib/event_emitter","ace/range","ace/anchor"], function(require, exports, module) {
    "use strict";
    var oop = require("./lib/oop");
    var applyDelta = require("./apply_delta").applyDelta;
    var EventEmitter = require("./lib/event_emitter").EventEmitter;
    var Range = require("./range").Range;
    var Anchor = require("./anchor").Anchor;

    var Document = function(textOrLines) {
        this.$lines = [""];
        if (textOrLines.length === 0) {
            this.$lines = [""];
        } else if (Array.isArray(textOrLines)) {
            this.insertMergedLines({row: 0, column: 0}, textOrLines);
        } else {
            this.insert({row: 0, column:0}, textOrLines);
        }
    };

    (function() {

        oop.implement(this, EventEmitter);
        this.setValue = function(text) {
            var len = this.getLength() - 1;
            this.remove(new Range(0, 0, len, this.getLine(len).length));
            this.insert({row: 0, column: 0}, text);
        };
        this.getValue = function() {
            return this.getAllLines().join(this.getNewLineCharacter());
        };
        this.createAnchor = function(row, column) {
            return new Anchor(this, row, column);
        };
        if ("aaa".split(/a/).length === 0) {
            this.$split = function(text) {
                return text.replace(/\r\n|\r/g, "\n").split("\n");
            };
        } else {
            this.$split = function(text) {
                return text.split(/\r\n|\r|\n/);
            };
        }


        this.$detectNewLine = function(text) {
            var match = text.match(/^.*?(\r\n|\r|\n)/m);
            this.$autoNewLine = match ? match[1] : "\n";
            this._signal("changeNewLineMode");
        };
        this.getNewLineCharacter = function() {
            switch (this.$newLineMode) {
                case "windows":
                return "\r\n";
                case "unix":
                return "\n";
                default:
                return this.$autoNewLine || "\n";
            }
        };

        this.$autoNewLine = "";
        this.$newLineMode = "auto";
        this.setNewLineMode = function(newLineMode) {
            if (this.$newLineMode === newLineMode)
            return;

            this.$newLineMode = newLineMode;
            this._signal("changeNewLineMode");
        };
        this.getNewLineMode = function() {
            return this.$newLineMode;
        };
        this.isNewLine = function(text) {
            return (text == "\r\n" || text == "\r" || text == "\n");
        };
        this.getLine = function(row) {
            return this.$lines[row] || "";
        };
        this.getLines = function(firstRow, lastRow) {
            return this.$lines.slice(firstRow, lastRow + 1);
        };
        this.getAllLines = function() {
            return this.getLines(0, this.getLength());
        };
        this.getLength = function() {
            return this.$lines.length;
        };
        this.getTextRange = function(range) {
            return this.getLinesForRange(range).join(this.getNewLineCharacter());
        };
        this.getLinesForRange = function(range) {
            var lines;
            if (range.start.row === range.end.row) {
                lines = [this.getLine(range.start.row).substring(range.start.column, range.end.column)];
            } else {
                lines = this.getLines(range.start.row, range.end.row);
                lines[0] = (lines[0] || "").substring(range.start.column);
                var l = lines.length - 1;
                if (range.end.row - range.start.row == l)
                lines[l] = lines[l].substring(0, range.end.column);
            }
            return lines;
        };
        this.insertLines = function(row, lines) {
            console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead.");
            return this.insertFullLines(row, lines);
        };
        this.removeLines = function(firstRow, lastRow) {
            console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead.");
            return this.removeFullLines(firstRow, lastRow);
        };
        this.insertNewLine = function(position) {
            console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead.");
            return this.insertMergedLines(position, ["", ""]);
        };
        this.insert = function(position, text) {
            if (this.getLength() <= 1)
            this.$detectNewLine(text);

            return this.insertMergedLines(position, this.$split(text));
        };
        this.insertInLine = function(position, text) {
            var start = this.clippedPos(position.row, position.column);
            var end = this.pos(position.row, position.column + text.length);

            this.applyDelta({
                start: start,
                end: end,
                action: "insert",
                lines: [text]
            }, true);

            return this.clonePos(end);
        };

        this.clippedPos = function(row, column) {
            var length = this.getLength();
            if (row === undefined) {
                row = length;
            } else if (row < 0) {
                row = 0;
            } else if (row >= length) {
                row = length - 1;
                column = undefined;
            }
            var line = this.getLine(row);
            if (column == undefined)
            column = line.length;
            column = Math.min(Math.max(column, 0), line.length);
            return {row: row, column: column};
        };

        this.clonePos = function(pos) {
            return {row: pos.row, column: pos.column};
        };

        this.pos = function(row, column) {
            return {row: row, column: column};
        };

        this.$clipPosition = function(position) {
            var length = this.getLength();
            if (position.row >= length) {
                position.row = Math.max(0, length - 1);
                position.column = this.getLine(length - 1).length;
            } else {
                position.row = Math.max(0, position.row);
                position.column = Math.min(Math.max(position.column, 0), this.getLine(position.row).length);
            }
            return position;
        };
        this.insertFullLines = function(row, lines) {
            row = Math.min(Math.max(row, 0), this.getLength());
            var column = 0;
            if (row < this.getLength()) {
                lines = lines.concat([""]);
                column = 0;
            } else {
                lines = [""].concat(lines);
                row--;
                column = this.$lines[row].length;
            }
            this.insertMergedLines({row: row, column: column}, lines);
        };
        this.insertMergedLines = function(position, lines) {
            var start = this.clippedPos(position.row, position.column);
            var end = {
                row: start.row + lines.length - 1,
                column: (lines.length == 1 ? start.column : 0) + lines[lines.length - 1].length
            };

            this.applyDelta({
                start: start,
                end: end,
                action: "insert",
                lines: lines
            });

            return this.clonePos(end);
        };
        this.remove = function(range) {
            var start = this.clippedPos(range.start.row, range.start.column);
            var end = this.clippedPos(range.end.row, range.end.column);
            this.applyDelta({
                start: start,
                end: end,
                action: "remove",
                lines: this.getLinesForRange({start: start, end: end})
            });
            return this.clonePos(start);
        };
        this.removeInLine = function(row, startColumn, endColumn) {
            var start = this.clippedPos(row, startColumn);
            var end = this.clippedPos(row, endColumn);

            this.applyDelta({
                start: start,
                end: end,
                action: "remove",
                lines: this.getLinesForRange({start: start, end: end})
            }, true);

            return this.clonePos(start);
        };
        this.removeFullLines = function(firstRow, lastRow) {
            firstRow = Math.min(Math.max(0, firstRow), this.getLength() - 1);
            lastRow  = Math.min(Math.max(0, lastRow ), this.getLength() - 1);
            var deleteFirstNewLine = lastRow == this.getLength() - 1 && firstRow > 0;
            var deleteLastNewLine  = lastRow  < this.getLength() - 1;
            var startRow = ( deleteFirstNewLine ? firstRow - 1                  : firstRow                    );
            var startCol = ( deleteFirstNewLine ? this.getLine(startRow).length : 0                           );
            var endRow   = ( deleteLastNewLine  ? lastRow + 1                   : lastRow                     );
            var endCol   = ( deleteLastNewLine  ? 0                             : this.getLine(endRow).length );
            var range = new Range(startRow, startCol, endRow, endCol);
            var deletedLines = this.$lines.slice(firstRow, lastRow + 1);

            this.applyDelta({
                start: range.start,
                end: range.end,
                action: "remove",
                lines: this.getLinesForRange(range)
            });
            return deletedLines;
        };
        this.removeNewLine = function(row) {
            if (row < this.getLength() - 1 && row >= 0) {
                this.applyDelta({
                    start: this.pos(row, this.getLine(row).length),
                    end: this.pos(row + 1, 0),
                    action: "remove",
                    lines: ["", ""]
                });
            }
        };
        this.replace = function(range, text) {
            if (!(range instanceof Range))
            range = Range.fromPoints(range.start, range.end);
            if (text.length === 0 && range.isEmpty())
            return range.start;
            if (text == this.getTextRange(range))
            return range.end;

            this.remove(range);
            var end;
            if (text) {
                end = this.insert(range.start, text);
            }
            else {
                end = range.start;
            }

            return end;
        };
        this.applyDeltas = function(deltas) {
            for (var i=0; i<deltas.length; i++) {
                this.applyDelta(deltas[i]);
            }
        };
        this.revertDeltas = function(deltas) {
            for (var i=deltas.length-1; i>=0; i--) {
                this.revertDelta(deltas[i]);
            }
        };
        this.applyDelta = function(delta, doNotValidate) {
            var isInsert = delta.action == "insert";
            if (isInsert ? delta.lines.length <= 1 && !delta.lines[0]
                : !Range.comparePoints(delta.start, delta.end)) {
                    return;
                }

                if (isInsert && delta.lines.length > 20000)
                this.$splitAndapplyLargeDelta(delta, 20000);
                applyDelta(this.$lines, delta, doNotValidate);
                this._signal("change", delta);
            };

            this.$splitAndapplyLargeDelta = function(delta, MAX) {
                var lines = delta.lines;
                var l = lines.length;
                var row = delta.start.row;
                var column = delta.start.column;
                var from = 0, to = 0;
                do {
                    from = to;
                    to += MAX - 1;
                    var chunk = lines.slice(from, to);
                    if (to > l) {
                        delta.lines = chunk;
                        delta.start.row = row + from;
                        delta.start.column = column;
                        break;
                    }
                    chunk.push("");
                    this.applyDelta({
                        start: this.pos(row + from, column),
                        end: this.pos(row + to, column = 0),
                        action: delta.action,
                        lines: chunk
                    }, true);
                } while(true);
            };
            this.revertDelta = function(delta) {
                this.applyDelta({
                    start: this.clonePos(delta.start),
                    end: this.clonePos(delta.end),
                    action: (delta.action == "insert" ? "remove" : "insert"),
                    lines: delta.lines.slice()
                });
            };
            this.indexToPosition = function(index, startRow) {
                var lines = this.$lines || this.getAllLines();
                var newlineLength = this.getNewLineCharacter().length;
                for (var i = startRow || 0, l = lines.length; i < l; i++) {
                    index -= lines[i].length + newlineLength;
                    if (index < 0)
                    return {row: i, column: index + lines[i].length + newlineLength};
                }
                return {row: l-1, column: lines[l-1].length};
            };
            this.positionToIndex = function(pos, startRow) {
                var lines = this.$lines || this.getAllLines();
                var newlineLength = this.getNewLineCharacter().length;
                var index = 0;
                var row = Math.min(pos.row, lines.length);
                for (var i = startRow || 0; i < row; ++i)
                index += lines[i].length + newlineLength;

                return index + pos.column;
            };

        }).call(Document.prototype);

        exports.Document = Document;
    });

    define("ace/lib/lang",["require","exports","module"], function(require, exports, module) {
        "use strict";

        exports.last = function(a) {
            return a[a.length - 1];
        };

        exports.stringReverse = function(string) {
            return string.split("").reverse().join("");
        };

        exports.stringRepeat = function (string, count) {
            var result = '';
            while (count > 0) {
                if (count & 1)
                result += string;

                if (count >>= 1)
                string += string;
            }
            return result;
        };

        var trimBeginRegexp = /^\s\s*/;
        var trimEndRegexp = /\s\s*$/;

        exports.stringTrimLeft = function (string) {
            return string.replace(trimBeginRegexp, '');
        };

        exports.stringTrimRight = function (string) {
            return string.replace(trimEndRegexp, '');
        };

        exports.copyObject = function(obj) {
            var copy = {};
            for (var key in obj) {
                copy[key] = obj[key];
            }
            return copy;
        };

        exports.copyArray = function(array){
            var copy = [];
            for (var i=0, l=array.length; i<l; i++) {
                if (array[i] && typeof array[i] == "object")
                copy[i] = this.copyObject(array[i]);
                else
                copy[i] = array[i];
            }
            return copy;
        };

        exports.deepCopy = function deepCopy(obj) {
            if (typeof obj !== "object" || !obj)
            return obj;
            var copy;
            if (Array.isArray(obj)) {
                copy = [];
                for (var key = 0; key < obj.length; key++) {
                    copy[key] = deepCopy(obj[key]);
                }
                return copy;
            }
            if (Object.prototype.toString.call(obj) !== "[object Object]")
            return obj;

            copy = {};
            for (var key in obj)
            copy[key] = deepCopy(obj[key]);
            return copy;
        };

        exports.arrayToMap = function(arr) {
            var map = {};
            for (var i=0; i<arr.length; i++) {
                map[arr[i]] = 1;
            }
            return map;

        };

        exports.createMap = function(props) {
            var map = Object.create(null);
            for (var i in props) {
                map[i] = props[i];
            }
            return map;
        };
        exports.arrayRemove = function(array, value) {
            for (var i = 0; i <= array.length; i++) {
                if (value === array[i]) {
                    array.splice(i, 1);
                }
            }
        };

        exports.escapeRegExp = function(str) {
            return str.replace(/([.*+?^${}()|[\]\/\\])/g, '\\$1');
        };

        exports.escapeHTML = function(str) {
            return str.replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;");
        };

        exports.getMatchOffsets = function(string, regExp) {
            var matches = [];

            string.replace(regExp, function(str) {
                matches.push({
                    offset: arguments[arguments.length-2],
                    length: str.length
                });
            });

            return matches;
        };
        exports.deferredCall = function(fcn) {
            var timer = null;
            var callback = function() {
                timer = null;
                fcn();
            };

            var deferred = function(timeout) {
                deferred.cancel();
                timer = setTimeout(callback, timeout || 0);
                return deferred;
            };

            deferred.schedule = deferred;

            deferred.call = function() {
                this.cancel();
                fcn();
                return deferred;
            };

            deferred.cancel = function() {
                clearTimeout(timer);
                timer = null;
                return deferred;
            };

            deferred.isPending = function() {
                return timer;
            };

            return deferred;
        };


        exports.delayedCall = function(fcn, defaultTimeout) {
            var timer = null;
            var callback = function() {
                timer = null;
                fcn();
            };

            var _self = function(timeout) {
                if (timer == null)
                timer = setTimeout(callback, timeout || defaultTimeout);
            };

            _self.delay = function(timeout) {
                timer && clearTimeout(timer);
                timer = setTimeout(callback, timeout || defaultTimeout);
            };
            _self.schedule = _self;

            _self.call = function() {
                this.cancel();
                fcn();
            };

            _self.cancel = function() {
                timer && clearTimeout(timer);
                timer = null;
            };

            _self.isPending = function() {
                return timer;
            };

            return _self;
        };
    });

    define("ace/worker/mirror",["require","exports","module","ace/range","ace/document","ace/lib/lang"], function(require, exports, module) {
        "use strict";

        var Range = require("../range").Range;
        var Document = require("../document").Document;
        var lang = require("../lib/lang");

        var Mirror = exports.Mirror = function(sender) {
            this.sender = sender;
            var doc = this.doc = new Document("");

            var deferredUpdate = this.deferredUpdate = lang.delayedCall(this.onUpdate.bind(this));

            var _self = this;
            sender.on("change", function(e) {
                var data = e.data;
                if (data[0].start) {
                    doc.applyDeltas(data);
                } else {
                    for (var i = 0; i < data.length; i += 2) {
                        if (Array.isArray(data[i+1])) {
                            var d = {action: "insert", start: data[i], lines: data[i+1]};
                        } else {
                            var d = {action: "remove", start: data[i], end: data[i+1]};
                        }
                        doc.applyDelta(d, true);
                    }
                }
                if (_self.$timeout)
                return deferredUpdate.schedule(_self.$timeout);
                _self.onUpdate();
            });
        };

        (function() {

            this.$timeout = 500;

            this.setTimeout = function(timeout) {
                this.$timeout = timeout;
            };

            this.setValue = function(value) {
                this.doc.setValue(value);
                this.deferredUpdate.schedule(this.$timeout);
            };

            this.getValue = function(callbackId) {
                this.sender.callback(this.doc.getValue(), callbackId);
            };

            this.onUpdate = function() {
            };

            this.isPending = function() {
                return this.deferredUpdate.isPending();
            };

        }).call(Mirror.prototype);

    });

    define("ace/lib/es5-shim",["require","exports","module"], function(require, exports, module) {

        function Empty() {}

        if (!Function.prototype.bind) {
            Function.prototype.bind = function bind(that) { // .length is 1
                var target = this;
                if (typeof target != "function") {
                    throw new TypeError("Function.prototype.bind called on incompatible " + target);
                }
                var args = slice.call(arguments, 1); // for normal call
                var bound = function () {

                    if (this instanceof bound) {

                        var result = target.apply(
                            this,
                            args.concat(slice.call(arguments))
                        );
                        if (Object(result) === result) {
                            return result;
                        }
                        return this;

                    } else {
                        return target.apply(
                            that,
                            args.concat(slice.call(arguments))
                        );

                    }

                };
                if(target.prototype) {
                    Empty.prototype = target.prototype;
                    bound.prototype = new Empty();
                    Empty.prototype = null;
                }
                return bound;
            };
        }
        var call = Function.prototype.call;
        var prototypeOfArray = Array.prototype;
        var prototypeOfObject = Object.prototype;
        var slice = prototypeOfArray.slice;
        var _toString = call.bind(prototypeOfObject.toString);
        var owns = call.bind(prototypeOfObject.hasOwnProperty);
        var defineGetter;
        var defineSetter;
        var lookupGetter;
        var lookupSetter;
        var supportsAccessors;
        if ((supportsAccessors = owns(prototypeOfObject, "__defineGetter__"))) {
            defineGetter = call.bind(prototypeOfObject.__defineGetter__);
            defineSetter = call.bind(prototypeOfObject.__defineSetter__);
            lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);
            lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);
        }
        if ([1,2].splice(0).length != 2) {
            if(function() { // test IE < 9 to splice bug - see issue #138
                function makeArray(l) {
                    var a = new Array(l+2);
                    a[0] = a[1] = 0;
                    return a;
                }
                var array = [], lengthBefore;

                array.splice.apply(array, makeArray(20));
                array.splice.apply(array, makeArray(26));

                lengthBefore = array.length; //46
                array.splice(5, 0, "XXX"); // add one element

                lengthBefore + 1 == array.length

                if (lengthBefore + 1 == array.length) {
                    return true;// has right splice implementation without bugs
                }
            }()) {//IE 6/7
                var array_splice = Array.prototype.splice;
                Array.prototype.splice = function(start, deleteCount) {
                    if (!arguments.length) {
                        return [];
                    } else {
                        return array_splice.apply(this, [
                            start === void 0 ? 0 : start,
                            deleteCount === void 0 ? (this.length - start) : deleteCount
                        ].concat(slice.call(arguments, 2)))
                    }
                };
            } else {//IE8
                Array.prototype.splice = function(pos, removeCount){
                    var length = this.length;
                    if (pos > 0) {
                        if (pos > length)
                        pos = length;
                    } else if (pos == void 0) {
                        pos = 0;
                    } else if (pos < 0) {
                        pos = Math.max(length + pos, 0);
                    }

                    if (!(pos+removeCount < length))
                    removeCount = length - pos;

                    var removed = this.slice(pos, pos+removeCount);
                    var insert = slice.call(arguments, 2);
                    var add = insert.length;
                    if (pos === length) {
                        if (add) {
                            this.push.apply(this, insert);
                        }
                    } else {
                        var remove = Math.min(removeCount, length - pos);
                        var tailOldPos = pos + remove;
                        var tailNewPos = tailOldPos + add - remove;
                        var tailCount = length - tailOldPos;
                        var lengthAfterRemove = length - remove;

                        if (tailNewPos < tailOldPos) { // case A
                            for (var i = 0; i < tailCount; ++i) {
                                this[tailNewPos+i] = this[tailOldPos+i];
                            }
                        } else if (tailNewPos > tailOldPos) { // case B
                            for (i = tailCount; i--; ) {
                                this[tailNewPos+i] = this[tailOldPos+i];
                            }
                        } // else, add == remove (nothing to do)

                        if (add && pos === lengthAfterRemove) {
                            this.length = lengthAfterRemove; // truncate array
                            this.push.apply(this, insert);
                        } else {
                            this.length = lengthAfterRemove + add; // reserves space
                            for (i = 0; i < add; ++i) {
                                this[pos+i] = insert[i];
                            }
                        }
                    }
                    return removed;
                };
            }
        }
        if (!Array.isArray) {
            Array.isArray = function isArray(obj) {
                return _toString(obj) == "[object Array]";
            };
        }
        var boxedString = Object("a"),
        splitString = boxedString[0] != "a" || !(0 in boxedString);

        if (!Array.prototype.forEach) {
            Array.prototype.forEach = function forEach(fun /*, thisp*/) {
                var object = toObject(this),
                self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
                thisp = arguments[1],
                i = -1,
                length = self.length >>> 0;
                if (_toString(fun) != "[object Function]") {
                    throw new TypeError(); // TODO message
                }

                while (++i < length) {
                    if (i in self) {
                        fun.call(thisp, self[i], i, object);
                    }
                }
            };
        }
        if (!Array.prototype.map) {
            Array.prototype.map = function map(fun /*, thisp*/) {
                var object = toObject(this),
                self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
                length = self.length >>> 0,
                result = Array(length),
                thisp = arguments[1];
                if (_toString(fun) != "[object Function]") {
                    throw new TypeError(fun + " is not a function");
                }

                for (var i = 0; i < length; i++) {
                    if (i in self)
                    result[i] = fun.call(thisp, self[i], i, object);
                }
                return result;
            };
        }
        if (!Array.prototype.filter) {
            Array.prototype.filter = function filter(fun /*, thisp */) {
                var object = toObject(this),
                self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
                length = self.length >>> 0,
                result = [],
                value,
                thisp = arguments[1];
                if (_toString(fun) != "[object Function]") {
                    throw new TypeError(fun + " is not a function");
                }

                for (var i = 0; i < length; i++) {
                    if (i in self) {
                        value = self[i];
                        if (fun.call(thisp, value, i, object)) {
                            result.push(value);
                        }
                    }
                }
                return result;
            };
        }
        if (!Array.prototype.every) {
            Array.prototype.every = function every(fun /*, thisp */) {
                var object = toObject(this),
                self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
                length = self.length >>> 0,
                thisp = arguments[1];
                if (_toString(fun) != "[object Function]") {
                    throw new TypeError(fun + " is not a function");
                }

                for (var i = 0; i < length; i++) {
                    if (i in self && !fun.call(thisp, self[i], i, object)) {
                        return false;
                    }
                }
                return true;
            };
        }
        if (!Array.prototype.some) {
            Array.prototype.some = function some(fun /*, thisp */) {
                var object = toObject(this),
                self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
                length = self.length >>> 0,
                thisp = arguments[1];
                if (_toString(fun) != "[object Function]") {
                    throw new TypeError(fun + " is not a function");
                }

                for (var i = 0; i < length; i++) {
                    if (i in self && fun.call(thisp, self[i], i, object)) {
                        return true;
                    }
                }
                return false;
            };
        }
        if (!Array.prototype.reduce) {
            Array.prototype.reduce = function reduce(fun /*, initial*/) {
                var object = toObject(this),
                self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
                length = self.length >>> 0;
                if (_toString(fun) != "[object Function]") {
                    throw new TypeError(fun + " is not a function");
                }
                if (!length && arguments.length == 1) {
                    throw new TypeError("reduce of empty array with no initial value");
                }

                var i = 0;
                var result;
                if (arguments.length >= 2) {
                    result = arguments[1];
                } else {
                    do {
                        if (i in self) {
                            result = self[i++];
                            break;
                        }
                        if (++i >= length) {
                            throw new TypeError("reduce of empty array with no initial value");
                        }
                    } while (true);
                }

                for (; i < length; i++) {
                    if (i in self) {
                        result = fun.call(void 0, result, self[i], i, object);
                    }
                }

                return result;
            };
        }
        if (!Array.prototype.reduceRight) {
            Array.prototype.reduceRight = function reduceRight(fun /*, initial*/) {
                var object = toObject(this),
                self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
                length = self.length >>> 0;
                if (_toString(fun) != "[object Function]") {
                    throw new TypeError(fun + " is not a function");
                }
                if (!length && arguments.length == 1) {
                    throw new TypeError("reduceRight of empty array with no initial value");
                }

                var result, i = length - 1;
                if (arguments.length >= 2) {
                    result = arguments[1];
                } else {
                    do {
                        if (i in self) {
                            result = self[i--];
                            break;
                        }
                        if (--i < 0) {
                            throw new TypeError("reduceRight of empty array with no initial value");
                        }
                    } while (true);
                }

                do {
                    if (i in this) {
                        result = fun.call(void 0, result, self[i], i, object);
                    }
                } while (i--);

                return result;
            };
        }
        if (!Array.prototype.indexOf || ([0, 1].indexOf(1, 2) != -1)) {
            Array.prototype.indexOf = function indexOf(sought /*, fromIndex */ ) {
                var self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                toObject(this),
                length = self.length >>> 0;

                if (!length) {
                    return -1;
                }

                var i = 0;
                if (arguments.length > 1) {
                    i = toInteger(arguments[1]);
                }
                i = i >= 0 ? i : Math.max(0, length + i);
                for (; i < length; i++) {
                    if (i in self && self[i] === sought) {
                        return i;
                    }
                }
                return -1;
            };
        }
        if (!Array.prototype.lastIndexOf || ([0, 1].lastIndexOf(0, -3) != -1)) {
            Array.prototype.lastIndexOf = function lastIndexOf(sought /*, fromIndex */) {
                var self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                toObject(this),
                length = self.length >>> 0;

                if (!length) {
                    return -1;
                }
                var i = length - 1;
                if (arguments.length > 1) {
                    i = Math.min(i, toInteger(arguments[1]));
                }
                i = i >= 0 ? i : length - Math.abs(i);
                for (; i >= 0; i--) {
                    if (i in self && sought === self[i]) {
                        return i;
                    }
                }
                return -1;
            };
        }
        if (!Object.getPrototypeOf) {
            Object.getPrototypeOf = function getPrototypeOf(object) {
                return object.__proto__ || (
                    object.constructor ?
                    object.constructor.prototype :
                    prototypeOfObject
                );
            };
        }
        if (!Object.getOwnPropertyDescriptor) {
            var ERR_NON_OBJECT = "Object.getOwnPropertyDescriptor called on a " +
            "non-object: ";
            Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
                if ((typeof object != "object" && typeof object != "function") || object === null)
                throw new TypeError(ERR_NON_OBJECT + object);
                if (!owns(object, property))
                return;

                var descriptor, getter, setter;
                descriptor =  { enumerable: true, configurable: true };
                if (supportsAccessors) {
                    var prototype = object.__proto__;
                    object.__proto__ = prototypeOfObject;

                    var getter = lookupGetter(object, property);
                    var setter = lookupSetter(object, property);
                    object.__proto__ = prototype;

                    if (getter || setter) {
                        if (getter) descriptor.get = getter;
                        if (setter) descriptor.set = setter;
                        return descriptor;
                    }
                }
                descriptor.value = object[property];
                return descriptor;
            };
        }
        if (!Object.getOwnPropertyNames) {
            Object.getOwnPropertyNames = function getOwnPropertyNames(object) {
                return Object.keys(object);
            };
        }
        if (!Object.create) {
            var createEmpty;
            if (Object.prototype.__proto__ === null) {
                createEmpty = function () {
                    return { "__proto__": null };
                };
            } else {
                createEmpty = function () {
                    var empty = {};
                    for (var i in empty)
                    empty[i] = null;
                    empty.constructor =
                    empty.hasOwnProperty =
                    empty.propertyIsEnumerable =
                    empty.isPrototypeOf =
                    empty.toLocaleString =
                    empty.toString =
                    empty.valueOf =
                    empty.__proto__ = null;
                    return empty;
                }
            }

            Object.create = function create(prototype, properties) {
                var object;
                if (prototype === null) {
                    object = createEmpty();
                } else {
                    if (typeof prototype != "object")
                    throw new TypeError("typeof prototype["+(typeof prototype)+"] != 'object'");
                    var Type = function () {};
                    Type.prototype = prototype;
                    object = new Type();
                    object.__proto__ = prototype;
                }
                if (properties !== void 0)
                Object.defineProperties(object, properties);
                return object;
            };
        }

        function doesDefinePropertyWork(object) {
            try {
                Object.defineProperty(object, "sentinel", {});
                return "sentinel" in object;
            } catch (exception) {
            }
        }
        if (Object.defineProperty) {
            var definePropertyWorksOnObject = doesDefinePropertyWork({});
            var definePropertyWorksOnDom = typeof document == "undefined" ||
            doesDefinePropertyWork(document.createElement("div"));
            if (!definePropertyWorksOnObject || !definePropertyWorksOnDom) {
                var definePropertyFallback = Object.defineProperty;
            }
        }

        if (!Object.defineProperty || definePropertyFallback) {
            var ERR_NON_OBJECT_DESCRIPTOR = "Property description must be an object: ";
            var ERR_NON_OBJECT_TARGET = "Object.defineProperty called on non-object: "
            var ERR_ACCESSORS_NOT_SUPPORTED = "getters & setters can not be defined " +
            "on this javascript engine";

            Object.defineProperty = function defineProperty(object, property, descriptor) {
                if ((typeof object != "object" && typeof object != "function") || object === null)
                throw new TypeError(ERR_NON_OBJECT_TARGET + object);
                if ((typeof descriptor != "object" && typeof descriptor != "function") || descriptor === null)
                throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR + descriptor);
                if (definePropertyFallback) {
                    try {
                        return definePropertyFallback.call(Object, object, property, descriptor);
                    } catch (exception) {
                    }
                }
                if (owns(descriptor, "value")) {

                    if (supportsAccessors && (lookupGetter(object, property) ||
                    lookupSetter(object, property)))
                    {
                        var prototype = object.__proto__;
                        object.__proto__ = prototypeOfObject;
                        delete object[property];
                        object[property] = descriptor.value;
                        object.__proto__ = prototype;
                    } else {
                        object[property] = descriptor.value;
                    }
                } else {
                    if (!supportsAccessors)
                    throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
                    if (owns(descriptor, "get"))
                    defineGetter(object, property, descriptor.get);
                    if (owns(descriptor, "set"))
                    defineSetter(object, property, descriptor.set);
                }

                return object;
            };
        }
        if (!Object.defineProperties) {
            Object.defineProperties = function defineProperties(object, properties) {
                for (var property in properties) {
                    if (owns(properties, property))
                    Object.defineProperty(object, property, properties[property]);
                }
                return object;
            };
        }
        if (!Object.seal) {
            Object.seal = function seal(object) {
                return object;
            };
        }
        if (!Object.freeze) {
            Object.freeze = function freeze(object) {
                return object;
            };
        }
        try {
            Object.freeze(function () {});
        } catch (exception) {
            Object.freeze = (function freeze(freezeObject) {
                return function freeze(object) {
                    if (typeof object == "function") {
                        return object;
                    } else {
                        return freezeObject(object);
                    }
                };
            })(Object.freeze);
        }
        if (!Object.preventExtensions) {
            Object.preventExtensions = function preventExtensions(object) {
                return object;
            };
        }
        if (!Object.isSealed) {
            Object.isSealed = function isSealed(object) {
                return false;
            };
        }
        if (!Object.isFrozen) {
            Object.isFrozen = function isFrozen(object) {
                return false;
            };
        }
        if (!Object.isExtensible) {
            Object.isExtensible = function isExtensible(object) {
                if (Object(object) === object) {
                    throw new TypeError(); // TODO message
                }
                var name = '';
                while (owns(object, name)) {
                    name += '?';
                }
                object[name] = true;
                var returnValue = owns(object, name);
                delete object[name];
                return returnValue;
            };
        }
        if (!Object.keys) {
            var hasDontEnumBug = true,
            dontEnums = [
                "toString",
                "toLocaleString",
                "valueOf",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "constructor"
            ],
            dontEnumsLength = dontEnums.length;

            for (var key in {"toString": null}) {
                hasDontEnumBug = false;
            }

            Object.keys = function keys(object) {

                if (
                    (typeof object != "object" && typeof object != "function") ||
                    object === null
                ) {
                    throw new TypeError("Object.keys called on a non-object");
                }

                var keys = [];
                for (var name in object) {
                    if (owns(object, name)) {
                        keys.push(name);
                    }
                }

                if (hasDontEnumBug) {
                    for (var i = 0, ii = dontEnumsLength; i < ii; i++) {
                        var dontEnum = dontEnums[i];
                        if (owns(object, dontEnum)) {
                            keys.push(dontEnum);
                        }
                    }
                }
                return keys;
            };

        }
        if (!Date.now) {
            Date.now = function now() {
                return new Date().getTime();
            };
        }
        var ws = "\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003" +
        "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028" +
        "\u2029\uFEFF";
        if (!String.prototype.trim || ws.trim()) {
            ws = "[" + ws + "]";
            var trimBeginRegexp = new RegExp("^" + ws + ws + "*"),
            trimEndRegexp = new RegExp(ws + ws + "*$");
            String.prototype.trim = function trim() {
                return String(this).replace(trimBeginRegexp, "").replace(trimEndRegexp, "");
            };
        }

        function toInteger(n) {
            n = +n;
            if (n !== n) { // isNaN
                n = 0;
            } else if (n !== 0 && n !== (1/0) && n !== -(1/0)) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
            return n;
        }

        function isPrimitive(input) {
            var type = typeof input;
            return (
                input === null ||
                type === "undefined" ||
                type === "boolean" ||
                type === "number" ||
                type === "string"
            );
        }

        function toPrimitive(input) {
            var val, valueOf, toString;
            if (isPrimitive(input)) {
                return input;
            }
            valueOf = input.valueOf;
            if (typeof valueOf === "function") {
                val = valueOf.call(input);
                if (isPrimitive(val)) {
                    return val;
                }
            }
            toString = input.toString;
            if (typeof toString === "function") {
                val = toString.call(input);
                if (isPrimitive(val)) {
                    return val;
                }
            }
            throw new TypeError();
        }
        var toObject = function (o) {
            if (o == null) { // this matches both null and undefined
                throw new TypeError("can't convert "+o+" to object");
            }
            return Object(o);
        };

    });
    define("ace/mode/jsonata_worker",["require","exports","ace/lib/oop","ace/worker/mirror"], function(require, exports) {
        var oop = require("../lib/oop");
        var Mirror = require("../worker/mirror").Mirror;

        var JSONataWorker = exports.JSONataWorker = function(sender) {
            Mirror.call(this, sender);
            this.setTimeout(200);
        };

        oop.inherits(JSONataWorker, Mirror);

        (function() {

            this.onUpdate = function() {
                var value = this.doc.getValue();
                var errors = [];
                try {
                    if (value) {
                        jsonata(value);
                    }
                } catch (e) {
                    var pos = this.doc.indexToPosition(e.position-1);
                    var msg = e.message;
                    msg = msg.replace(/ at column \d+/,"");
                    errors.push({
                        row: pos.row,
                        column: pos.column,
                        text: msg,
                        type: "error"
                    });
                }
                this.sender.emit("annotate", errors);
            };

        }).call(JSONataWorker.prototype);

    });
