!function(r){var n={};function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=r,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=51)}([function(e,t,r){"use strict";t.__esModule=!0,t.extend=l,t.indexOf=function(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return a.test(e)?e.replace(o,i):e},t.isEmpty=function(e){return!e&&0!==e||!(!c(e)||0!==e.length)},t.createFrame=function(e){var t=l({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},o=/[&<>"'`=]/g,a=/[&<>"'`=]/;function i(e){return n[e]}function l(e){for(var t=1;t<arguments.length;t++)for(var r in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],r)&&(e[r]=arguments[t][r]);return e}var u=Object.prototype.toString;t.toString=u;var s=function(e){return"function"==typeof e};s(/x/)&&(t.isFunction=s=function(e){return"function"==typeof e&&"[object Function]"===u.call(e)}),t.isFunction=s;var c=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===u.call(e)};t.isArray=c},function(e,t,r){"use strict";t.__esModule=!0;var s=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function c(e,t){var r=t&&t.loc,n=void 0,o=void 0,a=void 0,i=void 0;r&&(n=r.start.line,o=r.end.line,a=r.start.column,i=r.end.column,e+=" - "+n+":"+a);for(var l=Error.prototype.constructor.call(this,e),u=0;u<s.length;u++)this[s[u]]=l[s[u]];Error.captureStackTrace&&Error.captureStackTrace(this,c);try{r&&(this.lineNumber=n,this.endLineNumber=o,Object.defineProperty?(Object.defineProperty(this,"column",{value:a,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:i,enumerable:!0})):(this.column=a,this.endColumn=i))}catch(e){}}c.prototype=new Error,t.default=c,e.exports=t.default},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";var n={refs:{products:"http://localhost:3000/api/products/"},token:localStorage.getItem("token"),addNewProduct:function(e){return fetch(this.refs.products,{method:"POST",headers:{Authorization:"Bearer ".concat(this.token)},body:e}).then(function(e){return e.json()})},getProducts:function(){return fetch(this.refs.products,{method:"GET",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYzJhNjMyOWQ0ZDU2ODM5MDJlM2E2ZCIsImlhdCI6MTU3MzA0ODQzOCwiZXhwIjoxNTczNjUzMjM4fQ.oIVNWXUo7GwiDt2o1xXf4r1wqffjEUyBerjZF6b_F-k"}}).then(function(e){return e.json()}).then(function(e){return e.products})},getProduct:function(e){return fetch(this.refs.products+e,{method:"GET",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYzJhNjMyOWQ0ZDU2ODM5MDJlM2E2ZCIsImlhdCI6MTU3MzA0ODQzOCwiZXhwIjoxNTczNjUzMjM4fQ.oIVNWXUo7GwiDt2o1xXf4r1wqffjEUyBerjZF6b_F-k"}}).then(function(e){return e.json()}).then(function(e){return e.product})},getPopular:function(){return this.getProducts().then(function(e){return e.filter(function(e){return e.popular})})},getGenderProducts:function(t){return this.getProducts().then(function(e){return e.filter(function(e){return e.gender===t})})},delProduct:function(e){return fetch(this.refs.products+e,{method:"DELETE",headers:{Authorization:"Bearer ".concat(this.token)}}).then(function(e){return e.json()}).then(function(e){return e.products})},changeProduct:function(e,t){return fetch(this.refs.products+e,{method:"PUT",headers:{Authorization:"Bearer ".concat(this.token),"content-type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){console.log("ответ",e.products)})}};t.a=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=f;var o=r(0),a=n(r(1)),i=r(5),l=r(21),u=n(r(6)),s=r(7);t.VERSION="4.7.2";t.COMPILER_REVISION=8;t.LAST_COMPATIBLE_COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};var c="[object Object]";function f(e,t,r){this.helpers=e||{},this.partials=t||{},this.decorators=r||{},i.registerDefaultHelpers(this),l.registerDefaultDecorators(this)}f.prototype={constructor:f,logger:u.default,log:u.default.log,registerHelper:function(e,t){if(o.toString.call(e)===c){if(t)throw new a.default("Arg not supported with multiple helpers");o.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if(o.toString.call(e)===c)o.extend(this.partials,e);else{if(void 0===t)throw new a.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if(o.toString.call(e)===c){if(t)throw new a.default("Arg not supported with multiple decorators");o.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){s.resetLoggedProperties()}};var d=u.default.log;t.log=d,t.createFrame=o.createFrame,t.logger=u.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){o.default(e),a.default(e),i.default(e),l.default(e),u.default(e),s.default(e),c.default(e)},t.moveHelperToHooks=function(e,t,r){e.helpers[t]&&(e.hooks[t]=e.helpers[t],r||delete e.helpers[t])};var o=n(r(14)),a=n(r(15)),i=n(r(16)),l=n(r(17)),u=n(r(18)),s=n(r(19)),c=n(r(20))},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0),a={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=n.indexOf(a.methodMap,e.toLowerCase());e=0<=t?t:parseInt(e,10)}return e},log:function(e){if(e=a.lookupLevel(e),"undefined"!=typeof console&&a.lookupLevel(a.level)<=e){var t=a.methodMap[e];console[t]||(t="log");for(var r=arguments.length,n=Array(1<r?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];console[t].apply(console,n)}}};t.default=a,e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.createProtoAccessControl=function(e){var t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var r=Object.create(null);return r.__proto__=!1,{properties:{whitelist:n.createNewLookupObject(r,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:n.createNewLookupObject(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},t.resultIsAllowed=function(e,t,r){return i("function"==typeof e?t.methods:t.properties,r)},t.resetLoggedProperties=function(){Object.keys(a).forEach(function(e){delete a[e]})};var n=r(23),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(6)),a=Object.create(null);function i(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==a[e]&&(a[e]=!0,o.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}},,function(e,t,r){},,,function(e,t,r){e.exports=r(13).default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}t.__esModule=!0;var a=o(r(4)),i=n(r(24)),l=n(r(1)),u=o(r(0)),s=o(r(25)),c=n(r(27));function f(){var t=new a.HandlebarsEnvironment;return u.extend(t,a),t.SafeString=i.default,t.Exception=l.default,t.Utils=u,t.escapeExpression=u.escapeExpression,t.VM=s,t.template=function(e){return s.template(e,t)},t}var d=f();d.create=f,c.default(d),d.default=d,t.default=d,e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var i=r(0);t.default=function(a){a.registerHelper("blockHelperMissing",function(e,t){var r=t.inverse,n=t.fn;if(!0===e)return n(this);if(!1===e||null==e)return r(this);if(i.isArray(e))return 0<e.length?(t.ids&&(t.ids=[t.name]),a.helpers.each(e,t)):r(this);if(t.data&&t.ids){var o=i.createFrame(t.data);o.contextPath=i.appendContextPath(t.data.contextPath,t.name),t={data:o}}return n(e,t)})},e.exports=t.default},function(r,n,o){"use strict";(function(h){n.__esModule=!0;var e,m=o(0),t=o(1),v=(e=t)&&e.__esModule?e:{default:e};n.default=function(e){e.registerHelper("each",function(n,e){if(!e)throw new v.default("Must pass iterator to #each");var t,o=e.fn,r=e.inverse,a=0,i="",l=void 0,u=void 0;function s(e,t,r){l&&(l.key=e,l.index=t,l.first=0===t,l.last=!!r,u&&(l.contextPath=u+e)),i+=o(n[e],{data:l,blockParams:m.blockParams([n[e],e],[u+e,null])})}if(e.data&&e.ids&&(u=m.appendContextPath(e.data.contextPath,e.ids[0])+"."),m.isFunction(n)&&(n=n.call(this)),e.data&&(l=m.createFrame(e.data)),n&&"object"==typeof n)if(m.isArray(n))for(var c=n.length;a<c;a++)a in n&&s(a,a,a===n.length-1);else if(h.Symbol&&n[h.Symbol.iterator]){for(var f=[],d=n[h.Symbol.iterator](),p=d.next();!p.done;p=d.next())f.push(p.value);for(c=(n=f).length;a<c;a++)s(a,a,a===n.length-1)}else t=void 0,Object.keys(n).forEach(function(e){void 0!==t&&s(t,a-1),t=e,a++}),void 0!==t&&s(t,a-1,!0);return 0===a&&(i=r(this)),i})},r.exports=n.default}).call(this,o(2))},function(e,t,r){"use strict";t.__esModule=!0;var n,o=r(1),a=(n=o)&&n.__esModule?n:{default:n};t.default=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new a.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n,o=r(0),a=r(1),i=(n=a)&&n.__esModule?n:{default:n};t.default=function(r){r.registerHelper("if",function(e,t){if(2!=arguments.length)throw new i.default("#if requires exactly one argument");return o.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||o.isEmpty(e)?t.inverse(this):t.fn(this)}),r.registerHelper("unless",function(e,t){if(2!=arguments.length)throw new i.default("#unless requires exactly one argument");return r.helpers.if.call(this,e,{fn:t.inverse,inverse:t.fn,hash:t.hash})})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(o){o.registerHelper("log",function(){for(var e=[void 0],t=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)e.push(arguments[r]);var n=1;null!=t.hash.level?n=t.hash.level:t.data&&null!=t.data.level&&(n=t.data.level),e[0]=n,o.log.apply(o,e)})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",function(e,t,r){return e?r.lookupProperty(e,t):e})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n,o=r(0),a=r(1),i=(n=a)&&n.__esModule?n:{default:n};t.default=function(e){e.registerHelper("with",function(e,t){if(2!=arguments.length)throw new i.default("#with requires exactly one argument");o.isFunction(e)&&(e=e.call(this));var r=t.fn;if(o.isEmpty(e))return t.inverse(this);var n=t.data;return t.data&&t.ids&&((n=o.createFrame(t.data)).contextPath=o.appendContextPath(t.data.contextPath,t.ids[0])),r(e,{data:n,blockParams:o.blockParams([e],[n&&n.contextPath])})})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){a.default(e)};var n,o=r(22),a=(n=o)&&n.__esModule?n:{default:n}},function(e,t,r){"use strict";t.__esModule=!0;var l=r(0);t.default=function(e){e.registerDecorator("inline",function(o,a,i,e){var t=o;return a.partials||(a.partials={},t=function(e,t){var r=i.partials;i.partials=l.extend({},r,a.partials);var n=o(e,t);return i.partials=r,n}),a.partials[e.args[0]]=e.fn,t})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.createNewLookupObject=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.extend.apply(void 0,[Object.create(null)].concat(t))};var n=r(0)},function(e,t,r){"use strict";function n(e){this.string=e}t.__esModule=!0,n.prototype.toString=n.prototype.toHTML=function(){return""+this.string},t.default=n,e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,r=d.COMPILER_REVISION;if(t>=d.LAST_COMPATIBLE_COMPILER_REVISION&&t<=d.COMPILER_REVISION)return;{if(t<d.LAST_COMPATIBLE_COMPILER_REVISION){var n=d.REVISION_CHANGES[r],o=d.REVISION_CHANGES[t];throw new f.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+o+").")}throw new f.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}},t.template=function(u,s){if(!s)throw new f.default("No environment passed to template");if(!u||!u.main)throw new f.default("Unknown template object: "+typeof u);u.main.decorator=u.main_d,s.VM.checkRevision(u.compiler);var n=u.compiler&&7===u.compiler[0];var i={strict:function(e,t,r){if(!(e&&t in e))throw new f.default('"'+t+'" not defined in '+e,{loc:r});return e[t]},lookupProperty:function(e,t){var r=e[t];return null==r?r:Object.prototype.hasOwnProperty.call(e,t)?r:h.resultIsAllowed(r,i.protoAccessControl,t)?r:void 0},lookup:function(e,t){for(var r=e.length,n=0;n<r;n++){if(null!=(e[n]&&i.lookupProperty(e[n],t)))return e[n][t]}},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:c.escapeExpression,invokePartial:function(e,t,r){r.hash&&(t=c.extend({},t,r.hash),r.ids&&(r.ids[0]=!0)),e=s.VM.resolvePartial.call(this,e,t,r);var n=c.extend({},r,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),o=s.VM.invokePartial.call(this,e,t,n);if(null==o&&s.compile&&(r.partials[r.name]=s.compile(e,u.compilerOptions,s),o=r.partials[r.name](t,n)),null==o)throw new f.default("The partial "+r.name+" could not be compiled when running in runtime-only mode");if(r.indent){for(var a=o.split("\n"),i=0,l=a.length;i<l&&(a[i]||i+1!==l);i++)a[i]=r.indent+a[i];o=a.join("\n")}return o},fn:function(e){var t=u[e];return t.decorator=u[e+"_d"],t},programs:[],program:function(e,t,r,n,o){var a=this.programs[e],i=this.fn(e);return t||o||n||r?a=m(this,e,i,t,r,n,o):a||(a=this.programs[e]=m(this,e,i)),a},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var r=e||t;return e&&t&&e!==t&&(r=c.extend({},t,e)),r},nullContext:Object.seal({}),noop:s.VM.noop,compilerInfo:u.compiler};function l(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=t.data;l._setup(t),!t.partial&&u.useData&&(r=function(e,t){t&&"root"in t||((t=t?d.createFrame(t):{}).root=e);return t}(e,r));var n=void 0,o=u.useBlockParams?[]:void 0;function a(e){return""+u.main(i,e,i.helpers,i.partials,r,o,n)}return u.useDepths&&(n=t.depths?e!=t.depths[0]?[e].concat(t.depths):t.depths:[e]),(a=v(u.main,a,i,t.depths||[],r,o))(e,t)}return l.isTop=!0,l._setup=function(e){if(e.partial)i.protoAccessControl=e.protoAccessControl,i.helpers=e.helpers,i.partials=e.partials,i.decorators=e.decorators,i.hooks=e.hooks;else{var t=c.extend({},s.helpers,e.helpers);!function(r,n){Object.keys(r).forEach(function(e){var t=r[e];r[e]=function(e,t){var r=t.lookupProperty;return p.wrapHelper(e,function(e){return c.extend({lookupProperty:r},e)})}(t,n)})}(t,i),i.helpers=t,u.usePartial&&(i.partials=i.mergeIfNeeded(e.partials,s.partials)),(u.usePartial||u.useDecorators)&&(i.decorators=c.extend({},s.decorators,e.decorators)),i.hooks={},i.protoAccessControl=h.createProtoAccessControl(e);var r=e.allowCallsToHelperMissing||n;a.moveHelperToHooks(i,"helperMissing",r),a.moveHelperToHooks(i,"blockHelperMissing",r)}},l._child=function(e,t,r,n){if(u.useBlockParams&&!r)throw new f.default("must pass block params");if(u.useDepths&&!n)throw new f.default("must pass parent depths");return m(i,e,u[e],t,0,r,n)},l},t.wrapProgram=m,t.resolvePartial=function(e,t,r){e?e.call||r.name||(r.name=e,e=r.partials[e]):e="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name];return e},t.invokePartial=function(e,t,r){var o=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var a=void 0;r.fn&&r.fn!==i&&function(){r.data=d.createFrame(r.data);var n=r.fn;a=r.data["partial-block"]=function(e,t){var r=arguments.length<=1||void 0===t?{}:t;return r.data=d.createFrame(r.data),r.data["partial-block"]=o,n(e,r)},n.partials&&(r.partials=c.extend({},r.partials,n.partials))}();void 0===e&&a&&(e=a);{if(void 0===e)throw new f.default("The partial "+r.name+" could not be found");if(e instanceof Function)return e(t,r)}},t.noop=i;var n,c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(0)),o=r(1),f=(n=o)&&n.__esModule?n:{default:n},d=r(4),a=r(5),p=r(26),h=r(7);function m(n,e,o,a,t,i,l){function r(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=l;return!l||e==l[0]||e===n.nullContext&&null===l[0]||(r=[e].concat(l)),o(n,e,n.helpers,n.partials,t.data||a,i&&[t.blockParams].concat(i),r)}return(r=v(o,r,n,l,a,i)).program=e,r.depth=l?l.length:0,r.blockParams=t||0,r}function i(){return""}function v(e,t,r,n,o,a){if(e.decorator){var i={};t=e.decorator(t,i,r,n&&n[0],o,a,n),c.extend(t,i)}return t}},function(e,t,r){"use strict";t.__esModule=!0,t.wrapHelper=function(e,t){return"function"==typeof e?function(){return arguments[arguments.length-1]=t(arguments[arguments.length-1]),e.apply(this,arguments)}:e}},function(e,t,r){"use strict";(function(n){t.__esModule=!0,t.default=function(e){var t=void 0!==n?n:window,r=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=r),e}},e.exports=t.default}).call(this,r(2))},,,,,function(e,t){var r=document.querySelector(".form"),n=document.querySelector(".form__input");r.addEventListener("submit",function(e){e.preventDefault(),localStorage.setItem("email",n.value),n.value=" "})},,function(e,t){},,function(e,t,r){var n=r(12);e.exports=(n.default||n).template({1:function(e,t,r,n,o){var a,i=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,u="function",s=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return' <li class="features-list-item">\n    <div class="features-list-inner">\n                <button class="calash" data-id='+s(typeof(a=null!=(a=c(r,"id")||(null!=t?c(t,"id"):t))?a:l)==u?a.call(i,{name:"id",hash:{},data:o,loc:{start:{line:4,column:47},end:{line:4,column:53}}}):a)+">\n                    Add to cart\n                </button>\n    </div>\n    <img src='http://localhost:3000"+s(typeof(a=null!=(a=c(r,"image")||(null!=t?c(t,"image"):t))?a:l)==u?a.call(i,{name:"image",hash:{},data:o,loc:{start:{line:8,column:35},end:{line:8,column:44}}}):a)+'\' width="255" height="322" alt="blue-tshirt">\n      <div class="goods-box">\n      <h3 class="product-name">'+s(typeof(a=null!=(a=c(r,"name")||(null!=t?c(t,"name"):t))?a:l)==u?a.call(i,{name:"name",hash:{},data:o,loc:{start:{line:10,column:31},end:{line:10,column:39}}}):a)+'</h3>\n      <span class="goods-description">'+s(typeof(a=null!=(a=c(r,"gender")||(null!=t?c(t,"gender"):t))?a:l)==u?a.call(i,{name:"gender",hash:{},data:o,loc:{start:{line:11,column:38},end:{line:11,column:48}}}):a)+'</span>\n      </div>\n    <p class="price">$'+s(typeof(a=null!=(a=c(r,"price")||(null!=t?c(t,"price"):t))?a:l)==u?a.call(i,{name:"price",hash:{},data:o,loc:{start:{line:13,column:22},end:{line:13,column:31}}}):a)+"</p>\n</li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,r,n,o){var a;return null!=(a=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(r,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:1},end:{line:15,column:10}}}))?a:""},useData:!0})},,,,,,,,,,,,,,,function(e,t,r){"use strict";r.r(t);r(9);var n=r(34),o=r.n(n),a=r(36),i=r.n(a),l=(r(3),r(32),document.querySelector(".features-list")),u=i()(picArr);console.log("markDishes",i()()),l.insertAdjacentHTML("afterbegin",u);var s=document.querySelector(".calash");document.querySelector(".features-list").addEventListener("click",function(e){return o()(e,picArr)}),console.dir(s)}]);
//# sourceMappingURL=newCollection.ff67d55299695476f9ff.js.map