"use strict";exports.id=6613,exports.ids=[6613],exports.modules={96613:e=>{function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&_setPrototypeOf(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=_getPrototypeOf(e);if(t){var i=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,r)}}function _toConsumableArray(e){return function(e){if(Array.isArray(e))return _arrayLikeToArray(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function isArray(e){return Array.isArray?Array.isArray(e):"[object Array]"===getTag(e)}var t=1/0;function isString(e){return"string"==typeof e}function isNumber(e){return"number"==typeof e}function isObject(e){return"object"===_typeof(e)}function isDefined(e){return null!=e}function isBlank(e){return!e.trim().length}function getTag(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}var r=Object.prototype.hasOwnProperty,n=function(){function KeyStore(e){var t=this;_classCallCheck(this,KeyStore),this._keys=[],this._keyMap={};var r=0;e.forEach(function(e){var n=createKey(e);r+=n.weight,t._keys.push(n),t._keyMap[n.id]=n,r+=n.weight}),this._keys.forEach(function(e){e.weight/=r})}return _createClass(KeyStore,[{key:"get",value:function(e){return this._keyMap[e]}},{key:"keys",value:function(){return this._keys}},{key:"toJSON",value:function(){return JSON.stringify(this._keys)}}]),KeyStore}();function createKey(e){var t=null,n=null,i=null,a=1,c=null;if(isString(e)||isArray(e))i=e,t=createKeyPath(e),n=createKeyId(e);else{if(!r.call(e,"name"))throw Error("Missing ".concat("name"," property in key"));var o=e.name;if(i=o,r.call(e,"weight")&&(a=e.weight)<=0)throw Error("Property 'weight' in key '".concat(o,"' must be a positive integer"));t=createKeyPath(o),n=createKeyId(o),c=e.getFn}return{path:t,id:n,weight:a,src:i,getFn:c}}function createKeyPath(e){return isArray(e)?e:e.split(".")}function createKeyId(e){return isArray(e)?e.join("."):e}var i=_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({},{isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:function(e,t){return e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1}}),{includeMatches:!1,findAllMatches:!1,minMatchCharLength:1}),{location:0,threshold:.6,distance:100}),{useExtendedSearch:!1,getFn:function(e,r){var n=[],i=!1;return function deepGet(e,r,a){if(isDefined(e)){if(r[a]){var c,o,s=e[r[a]];if(isDefined(s)){if(a===r.length-1&&(isString(s)||isNumber(s)||!0===(o=s)||!1===o||isObject(c=o)&&null!==c&&"[object Boolean]"==getTag(o)))n.push(null==s?"":function(e){if("string"==typeof e)return e;var r=e+"";return"0"==r&&1/e==-t?"-0":r}(s));else if(isArray(s)){i=!0;for(var h=0,u=s.length;h<u;h+=1)deepGet(s[h],r,a+1)}else r.length&&deepGet(s,r,a+1)}}else n.push(e)}}(e,isString(r)?r.split("."):r,0),i?n:n[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1}),a=/[^ ]+/g,c=function(){function FuseIndex(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.getFn,r=void 0===t?i.getFn:t,n=e.fieldNormWeight,c=void 0===n?i.fieldNormWeight:n;_classCallCheck(this,FuseIndex),this.norm=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,r=new Map,n=Math.pow(10,t);return{get:function(t){var i=t.match(a).length;if(r.has(i))return r.get(i);var c=parseFloat(Math.round(1/Math.pow(i,.5*e)*n)/n);return r.set(i,c),c},clear:function(){r.clear()}}}(c,3),this.getFn=r,this.isCreated=!1,this.setIndexRecords()}return _createClass(FuseIndex,[{key:"setSources",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.docs=e}},{key:"setIndexRecords",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.records=e}},{key:"setKeys",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.keys=t,this._keysMap={},t.forEach(function(t,r){e._keysMap[t.id]=r})}},{key:"create",value:function(){var e=this;!this.isCreated&&this.docs.length&&(this.isCreated=!0,isString(this.docs[0])?this.docs.forEach(function(t,r){e._addString(t,r)}):this.docs.forEach(function(t,r){e._addObject(t,r)}),this.norm.clear())}},{key:"add",value:function(e){var t=this.size();isString(e)?this._addString(e,t):this._addObject(e,t)}},{key:"removeAt",value:function(e){this.records.splice(e,1);for(var t=e,r=this.size();t<r;t+=1)this.records[t].i-=1}},{key:"getValueForItemAtKeyId",value:function(e,t){return e[this._keysMap[t]]}},{key:"size",value:function(){return this.records.length}},{key:"_addString",value:function(e,t){if(!(!isDefined(e)||isBlank(e))){var r={v:e,i:t,n:this.norm.get(e)};this.records.push(r)}}},{key:"_addObject",value:function(e,t){var r=this,n={i:t,$:{}};this.keys.forEach(function(t,i){var a=t.getFn?t.getFn(e):r.getFn(e,t.path);if(isDefined(a)){if(isArray(a))!function(){for(var e=[],t=[{nestedArrIndex:-1,value:a}];t.length;){var c=t.pop(),o=c.nestedArrIndex,s=c.value;if(isDefined(s)){if(isString(s)&&!isBlank(s)){var h={v:s,i:o,n:r.norm.get(s)};e.push(h)}else isArray(s)&&s.forEach(function(e,r){t.push({nestedArrIndex:r,value:e})})}}n.$[i]=e}();else if(isString(a)&&!isBlank(a)){var c={v:a,n:r.norm.get(a)};n.$[i]=c}}}),this.records.push(n)}},{key:"toJSON",value:function(){return{keys:this.keys,records:this.records}}}]),FuseIndex}();function createIndex(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.getFn,a=void 0===n?i.getFn:n,o=r.fieldNormWeight,s=void 0===o?i.fieldNormWeight:o,h=new c({getFn:a,fieldNormWeight:s});return h.setKeys(e.map(createKey)),h.setSources(t),h.create(),h}function computeScore$1(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.errors,n=t.currentLocation,a=t.expectedLocation,c=t.distance,o=void 0===c?i.distance:c,s=t.ignoreLocation,h=void 0===s?i.ignoreLocation:s,u=(void 0===r?0:r)/e.length;if(h)return u;var l=Math.abs((void 0===a?0:a)-(void 0===n?0:n));return o?u+l/o:l?1:u}var o=function(){function BitapSearch(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.location,a=void 0===n?i.location:n,c=r.threshold,o=void 0===c?i.threshold:c,s=r.distance,h=void 0===s?i.distance:s,u=r.includeMatches,l=void 0===u?i.includeMatches:u,f=r.findAllMatches,d=void 0===f?i.findAllMatches:f,v=r.minMatchCharLength,y=void 0===v?i.minMatchCharLength:v,p=r.isCaseSensitive,g=void 0===p?i.isCaseSensitive:p,x=r.ignoreLocation,M=void 0===x?i.ignoreLocation:x;if(_classCallCheck(this,BitapSearch),this.options={location:a,threshold:o,distance:h,includeMatches:l,findAllMatches:d,minMatchCharLength:y,isCaseSensitive:g,ignoreLocation:M},this.pattern=g?e:e.toLowerCase(),this.chunks=[],this.pattern.length){var addChunk=function(e,r){t.chunks.push({pattern:e,alphabet:function(e){for(var t={},r=0,n=e.length;r<n;r+=1){var i=e.charAt(r);t[i]=(t[i]||0)|1<<n-r-1}return t}(e),startIndex:r})},m=this.pattern.length;if(m>32){for(var k=0,_=m%32,S=m-_;k<S;)addChunk(this.pattern.substr(k,32),k),k+=32;if(_){var b=m-32;addChunk(this.pattern.substr(b),b)}}else addChunk(this.pattern,0)}}return _createClass(BitapSearch,[{key:"searchIn",value:function(e){var t=this.options,r=t.isCaseSensitive,n=t.includeMatches;if(r||(e=e.toLowerCase()),this.pattern===e){var a={isMatch:!0,score:0};return n&&(a.indices=[[0,e.length-1]]),a}var c=this.options,o=c.location,s=c.distance,h=c.threshold,u=c.findAllMatches,l=c.minMatchCharLength,f=c.ignoreLocation,d=[],v=0,y=!1;this.chunks.forEach(function(t){var r=function(e,t,r){var n,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=a.location,o=void 0===c?i.location:c,s=a.distance,h=void 0===s?i.distance:s,u=a.threshold,l=void 0===u?i.threshold:u,f=a.findAllMatches,d=void 0===f?i.findAllMatches:f,v=a.minMatchCharLength,y=void 0===v?i.minMatchCharLength:v,p=a.includeMatches,g=void 0===p?i.includeMatches:p,x=a.ignoreLocation,M=void 0===x?i.ignoreLocation:x;if(t.length>32)throw Error("Pattern length exceeds max of ".concat(32,"."));for(var m=t.length,k=e.length,_=Math.max(0,Math.min(o,k)),S=l,b=_,C=y>1||g,E=C?Array(k):[];(n=e.indexOf(t,b))>-1;)if(S=Math.min(computeScore$1(t,{currentLocation:n,expectedLocation:_,distance:h,ignoreLocation:M}),S),b=n+m,C)for(var I=0;I<m;)E[n+I]=1,I+=1;b=-1;for(var A=[],O=1,L=m+k,P=1<<m-1,j=0;j<m;j+=1){for(var w=0,F=L;w<F;)computeScore$1(t,{errors:j,currentLocation:_+F,expectedLocation:_,distance:h,ignoreLocation:M})<=S?w=F:L=F,F=Math.floor((L-w)/2+w);L=F;var $=Math.max(1,_-F+1),N=d?k:Math.min(_+F,k)+m,R=Array(N+2);R[N+1]=(1<<j)-1;for(var D=N;D>=$;D-=1){var K=D-1,T=r[e.charAt(K)];if(C&&(E[K]=+!!T),R[D]=(R[D+1]<<1|1)&T,j&&(R[D]|=(A[D+1]|A[D])<<1|1|A[D+1]),R[D]&P&&(O=computeScore$1(t,{errors:j,currentLocation:K,expectedLocation:_,distance:h,ignoreLocation:M}))<=S){if(S=O,(b=K)<=_)break;$=Math.max(1,2*_-b)}}if(computeScore$1(t,{errors:j+1,currentLocation:_,expectedLocation:_,distance:h,ignoreLocation:M})>S)break;A=R}var z={isMatch:b>=0,score:Math.max(.001,O)};if(C){var B=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.minMatchCharLength,r=[],n=-1,a=-1,c=0,o=e.length;c<o;c+=1){var s=e[c];s&&-1===n?n=c:s||-1===n||((a=c-1)-n+1>=t&&r.push([n,a]),n=-1)}return e[c-1]&&c-n>=t&&r.push([n,c-1]),r}(E,y);B.length?g&&(z.indices=B):z.isMatch=!1}return z}(e,t.pattern,t.alphabet,{location:o+t.startIndex,distance:s,threshold:h,findAllMatches:u,minMatchCharLength:l,includeMatches:n,ignoreLocation:f}),a=r.isMatch,c=r.score,p=r.indices;a&&(y=!0),v+=c,a&&p&&(d=[].concat(_toConsumableArray(d),_toConsumableArray(p)))});var p={isMatch:y,score:y?v/this.chunks.length:1};return y&&n&&(p.indices=d),p}}]),BitapSearch}(),s=function(){function BaseMatch(e){_classCallCheck(this,BaseMatch),this.pattern=e}return _createClass(BaseMatch,[{key:"search",value:function(){}}],[{key:"isMultiMatch",value:function(e){return getMatch(e,this.multiRegex)}},{key:"isSingleMatch",value:function(e){return getMatch(e,this.singleRegex)}}]),BaseMatch}();function getMatch(e,t){var r=e.match(t);return r?r[1]:null}var h=function(e){_inherits(ExactMatch,e);var t=_createSuper(ExactMatch);function ExactMatch(e){return _classCallCheck(this,ExactMatch),t.call(this,e)}return _createClass(ExactMatch,[{key:"search",value:function(e){var t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}],[{key:"type",get:function(){return"exact"}},{key:"multiRegex",get:function(){return/^="(.*)"$/}},{key:"singleRegex",get:function(){return/^=(.*)$/}}]),ExactMatch}(s),u=function(e){_inherits(InverseExactMatch,e);var t=_createSuper(InverseExactMatch);function InverseExactMatch(e){return _classCallCheck(this,InverseExactMatch),t.call(this,e)}return _createClass(InverseExactMatch,[{key:"search",value:function(e){var t=-1===e.indexOf(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}],[{key:"type",get:function(){return"inverse-exact"}},{key:"multiRegex",get:function(){return/^!"(.*)"$/}},{key:"singleRegex",get:function(){return/^!(.*)$/}}]),InverseExactMatch}(s),l=function(e){_inherits(PrefixExactMatch,e);var t=_createSuper(PrefixExactMatch);function PrefixExactMatch(e){return _classCallCheck(this,PrefixExactMatch),t.call(this,e)}return _createClass(PrefixExactMatch,[{key:"search",value:function(e){var t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}],[{key:"type",get:function(){return"prefix-exact"}},{key:"multiRegex",get:function(){return/^\^"(.*)"$/}},{key:"singleRegex",get:function(){return/^\^(.*)$/}}]),PrefixExactMatch}(s),f=function(e){_inherits(InversePrefixExactMatch,e);var t=_createSuper(InversePrefixExactMatch);function InversePrefixExactMatch(e){return _classCallCheck(this,InversePrefixExactMatch),t.call(this,e)}return _createClass(InversePrefixExactMatch,[{key:"search",value:function(e){var t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}],[{key:"type",get:function(){return"inverse-prefix-exact"}},{key:"multiRegex",get:function(){return/^!\^"(.*)"$/}},{key:"singleRegex",get:function(){return/^!\^(.*)$/}}]),InversePrefixExactMatch}(s),d=function(e){_inherits(SuffixExactMatch,e);var t=_createSuper(SuffixExactMatch);function SuffixExactMatch(e){return _classCallCheck(this,SuffixExactMatch),t.call(this,e)}return _createClass(SuffixExactMatch,[{key:"search",value:function(e){var t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}],[{key:"type",get:function(){return"suffix-exact"}},{key:"multiRegex",get:function(){return/^"(.*)"\$$/}},{key:"singleRegex",get:function(){return/^(.*)\$$/}}]),SuffixExactMatch}(s),v=function(e){_inherits(InverseSuffixExactMatch,e);var t=_createSuper(InverseSuffixExactMatch);function InverseSuffixExactMatch(e){return _classCallCheck(this,InverseSuffixExactMatch),t.call(this,e)}return _createClass(InverseSuffixExactMatch,[{key:"search",value:function(e){var t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}],[{key:"type",get:function(){return"inverse-suffix-exact"}},{key:"multiRegex",get:function(){return/^!"(.*)"\$$/}},{key:"singleRegex",get:function(){return/^!(.*)\$$/}}]),InverseSuffixExactMatch}(s),y=function(e){_inherits(FuzzyMatch,e);var t=_createSuper(FuzzyMatch);function FuzzyMatch(e){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.location,c=void 0===a?i.location:a,s=n.threshold,h=void 0===s?i.threshold:s,u=n.distance,l=void 0===u?i.distance:u,f=n.includeMatches,d=void 0===f?i.includeMatches:f,v=n.findAllMatches,y=void 0===v?i.findAllMatches:v,p=n.minMatchCharLength,g=void 0===p?i.minMatchCharLength:p,x=n.isCaseSensitive,M=void 0===x?i.isCaseSensitive:x,m=n.ignoreLocation,k=void 0===m?i.ignoreLocation:m;return _classCallCheck(this,FuzzyMatch),(r=t.call(this,e))._bitapSearch=new o(e,{location:c,threshold:h,distance:l,includeMatches:d,findAllMatches:y,minMatchCharLength:g,isCaseSensitive:M,ignoreLocation:k}),r}return _createClass(FuzzyMatch,[{key:"search",value:function(e){return this._bitapSearch.searchIn(e)}}],[{key:"type",get:function(){return"fuzzy"}},{key:"multiRegex",get:function(){return/^"(.*)"$/}},{key:"singleRegex",get:function(){return/^(.*)$/}}]),FuzzyMatch}(s),p=function(e){_inherits(IncludeMatch,e);var t=_createSuper(IncludeMatch);function IncludeMatch(e){return _classCallCheck(this,IncludeMatch),t.call(this,e)}return _createClass(IncludeMatch,[{key:"search",value:function(e){for(var t,r=0,n=[],i=this.pattern.length;(t=e.indexOf(this.pattern,r))>-1;)r=t+i,n.push([t,r-1]);var a=!!n.length;return{isMatch:a,score:a?0:1,indices:n}}}],[{key:"type",get:function(){return"include"}},{key:"multiRegex",get:function(){return/^'"(.*)"$/}},{key:"singleRegex",get:function(){return/^'(.*)$/}}]),IncludeMatch}(s),g=[h,p,l,f,v,d,u,y],x=g.length,M=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,m=new Set([y.type,p.type]),k=function(){function ExtendedSearch(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.isCaseSensitive,n=void 0===r?i.isCaseSensitive:r,a=t.includeMatches,c=void 0===a?i.includeMatches:a,o=t.minMatchCharLength,s=void 0===o?i.minMatchCharLength:o,h=t.ignoreLocation,u=void 0===h?i.ignoreLocation:h,l=t.findAllMatches,f=void 0===l?i.findAllMatches:l,d=t.location,v=void 0===d?i.location:d,y=t.threshold,p=void 0===y?i.threshold:y,m=t.distance,k=void 0===m?i.distance:m;_classCallCheck(this,ExtendedSearch),this.query=null,this.options={isCaseSensitive:n,includeMatches:c,minMatchCharLength:s,findAllMatches:f,ignoreLocation:u,location:v,threshold:p,distance:k},this.pattern=n?e:e.toLowerCase(),this.query=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.split("|").map(function(e){for(var r=e.trim().split(M).filter(function(e){return e&&!!e.trim()}),n=[],i=0,a=r.length;i<a;i+=1){for(var c=r[i],o=!1,s=-1;!o&&++s<x;){var h=g[s],u=h.isMultiMatch(c);u&&(n.push(new h(u,t)),o=!0)}if(!o)for(s=-1;++s<x;){var l=g[s],f=l.isSingleMatch(c);if(f){n.push(new l(f,t));break}}}return n})}(this.pattern,this.options)}return _createClass(ExtendedSearch,[{key:"searchIn",value:function(e){var t=this.query;if(!t)return{isMatch:!1,score:1};var r=this.options,n=r.includeMatches;e=r.isCaseSensitive?e:e.toLowerCase();for(var i=0,a=[],c=0,o=0,s=t.length;o<s;o+=1){var h=t[o];a.length=0,i=0;for(var u=0,l=h.length;u<l;u+=1){var f=h[u],d=f.search(e),v=d.isMatch,y=d.indices,p=d.score;if(v){if(i+=1,c+=p,n){var g=f.constructor.type;m.has(g)?a=[].concat(_toConsumableArray(a),_toConsumableArray(y)):a.push(y)}}else{c=0,i=0,a.length=0;break}}if(i){var x={isMatch:!0,score:c/i};return n&&(x.indices=a),x}}return{isMatch:!1,score:1}}}],[{key:"condition",value:function(e,t){return t.useExtendedSearch}}]),ExtendedSearch}(),_=[];function createSearcher(e,t){for(var r=0,n=_.length;r<n;r+=1){var i=_[r];if(i.condition(e,t))return new i(e,t)}return new o(e,t)}var S={AND:"$and",OR:"$or"},b={PATH:"$path",PATTERN:"$val"},isExpression=function(e){return!!(e[S.AND]||e[S.OR])},convertToExplicit=function(e){return _defineProperty({},S.AND,Object.keys(e).map(function(t){return _defineProperty({},t,e[t])}))};function parse(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.auto,i=void 0===n||n;return isExpression(e)||(e=convertToExplicit(e)),function next(e){var r=Object.keys(e),n=!!e[b.PATH];if(!n&&r.length>1&&!isExpression(e))return next(convertToExplicit(e));if(!isArray(e)&&isObject(e)&&!isExpression(e)){var a=n?e[b.PATH]:r[0],c=n?e[b.PATTERN]:e[a];if(!isString(c))throw Error("Invalid value for key ".concat(a));var o={keyId:createKeyId(a),pattern:c};return i&&(o.searcher=createSearcher(c,t)),o}var s={children:[],operator:r[0]};return r.forEach(function(t){var r=e[t];isArray(r)&&r.forEach(function(e){s.children.push(next(e))})}),s}(e)}function transformMatches(e,t){var r=e.matches;t.matches=[],isDefined(r)&&r.forEach(function(e){if(isDefined(e.indices)&&e.indices.length){var r={indices:e.indices,value:e.value};e.key&&(r.key=e.key.src),e.idx>-1&&(r.refIndex=e.idx),t.matches.push(r)}})}function transformScore(e,t){t.score=e.score}var C=function(){function Fuse(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;_classCallCheck(this,Fuse),this.options=_objectSpread2(_objectSpread2({},i),t),this.options.useExtendedSearch,this._keyStore=new n(this.options.keys),this.setCollection(e,r)}return _createClass(Fuse,[{key:"setCollection",value:function(e,t){if(this._docs=e,t&&!(t instanceof c))throw Error("Incorrect 'index' type");this._myIndex=t||createIndex(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}},{key:"add",value:function(e){isDefined(e)&&(this._docs.push(e),this._myIndex.add(e))}},{key:"remove",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return!1},t=[],r=0,n=this._docs.length;r<n;r+=1){var i=this._docs[r];e(i,r)&&(this.removeAt(r),r-=1,n-=1,t.push(i))}return t}},{key:"removeAt",value:function(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}},{key:"getIndex",value:function(){return this._myIndex}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.limit,n=void 0===r?-1:r,a=this.options,c=a.includeMatches,o=a.includeScore,s=a.shouldSort,h=a.sortFn,u=a.ignoreFieldNorm,l=isString(e)?isString(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return function(e,t){var r=t.ignoreFieldNorm,n=void 0===r?i.ignoreFieldNorm:r;e.forEach(function(e){var t=1;e.matches.forEach(function(e){var r=e.key,i=e.norm,a=e.score,c=r?r.weight:null;t*=Math.pow(0===a&&c?Number.EPSILON:a,(c||1)*(n?1:i))}),e.score=t})}(l,{ignoreFieldNorm:u}),s&&l.sort(h),isNumber(n)&&n>-1&&(l=l.slice(0,n)),function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.includeMatches,a=void 0===n?i.includeMatches:n,c=r.includeScore,o=void 0===c?i.includeScore:c,s=[];return a&&s.push(transformMatches),o&&s.push(transformScore),e.map(function(e){var r=e.idx,n={item:t[r],refIndex:r};return s.length&&s.forEach(function(t){t(e,n)}),n})}(l,this._docs,{includeMatches:c,includeScore:o})}},{key:"_searchStringList",value:function(e){var t=createSearcher(e,this.options),r=this._myIndex.records,n=[];return r.forEach(function(e){var r=e.v,i=e.i,a=e.n;if(isDefined(r)){var c=t.searchIn(r),o=c.isMatch,s=c.score,h=c.indices;o&&n.push({item:r,idx:i,matches:[{score:s,value:r,norm:a,indices:h}]})}}),n}},{key:"_searchLogical",value:function(e){var t=this,r=parse(e,this.options),evaluate=function evaluate(e,r,n){if(!e.children){var i=e.keyId,a=e.searcher,c=t._findMatches({key:t._keyStore.get(i),value:t._myIndex.getValueForItemAtKeyId(r,i),searcher:a});return c&&c.length?[{idx:n,item:r,matches:c}]:[]}for(var o=[],s=0,h=e.children.length;s<h;s+=1){var u=evaluate(e.children[s],r,n);if(u.length)o.push.apply(o,_toConsumableArray(u));else if(e.operator===S.AND)return[]}return o},n=this._myIndex.records,i={},a=[];return n.forEach(function(e){var t=e.$,n=e.i;if(isDefined(t)){var c=evaluate(r,t,n);c.length&&(i[n]||(i[n]={idx:n,item:t,matches:[]},a.push(i[n])),c.forEach(function(e){var t,r=e.matches;(t=i[n].matches).push.apply(t,_toConsumableArray(r))}))}}),a}},{key:"_searchObjectList",value:function(e){var t=this,r=createSearcher(e,this.options),n=this._myIndex,i=n.keys,a=n.records,c=[];return a.forEach(function(e){var n=e.$,a=e.i;if(isDefined(n)){var o=[];i.forEach(function(e,i){o.push.apply(o,_toConsumableArray(t._findMatches({key:e,value:n[i],searcher:r})))}),o.length&&c.push({idx:a,item:n,matches:o})}}),c}},{key:"_findMatches",value:function(e){var t=e.key,r=e.value,n=e.searcher;if(!isDefined(r))return[];var i=[];if(isArray(r))r.forEach(function(e){var r=e.v,a=e.i,c=e.n;if(isDefined(r)){var o=n.searchIn(r),s=o.isMatch,h=o.score,u=o.indices;s&&i.push({score:h,key:t,value:r,idx:a,norm:c,indices:u})}});else{var a=r.v,c=r.n,o=n.searchIn(a),s=o.isMatch,h=o.score,u=o.indices;s&&i.push({score:h,key:t,value:a,norm:c,indices:u})}return i}}]),Fuse}();C.version="6.6.2",C.createIndex=createIndex,C.parseIndex=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getFn,n=void 0===r?i.getFn:r,a=t.fieldNormWeight,o=void 0===a?i.fieldNormWeight:a,s=e.keys,h=e.records,u=new c({getFn:n,fieldNormWeight:o});return u.setKeys(s),u.setIndexRecords(h),u},C.config=i,C.parseQuery=parse,function(){_.push.apply(_,arguments)}(k),e.exports=C}};