webpackJsonp([0,6,10],{"75IS":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),r.d(e,"PAGE_SIZE",function(){return n});var n=3},"7hDC":function(t,e,r){function n(t){return function(){var e=this,r=arguments;return new o(function(n,s){function a(t,e){try{var r=c[t](e),a=r.value}catch(t){return void s(t)}r.done?n(a):o.resolve(a).then(i,u)}function i(t){a("next",t)}function u(t){a("throw",t)}var c=t.apply(e,r);i()})}}var o=r("1iCT");t.exports=n},BH0U:function(t,e,r){"use strict";function n(t){if(t.status>=200&&t.status<300)return t;var e=new Error(t.statusText);throw e.response=t,e}function o(t,e){return s.apply(this,arguments)}function s(){return s=c()(i.a.mark(function t(e,r){var o,s,a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h()(e,r);case 2:return o=t.sent,n(o),t.next=6,o.json();case 6:return s=t.sent,a={data:s,headers:{}},o.headers.get("x-total-count")&&(a.headers["x-total-count"]=o.headers.get("x-total-count")),t.abrupt("return",a);case 10:case"end":return t.stop()}},t,this)})),s.apply(this,arguments)}e.a=o;var a=r("En79"),i=r.n(a),u=r("7hDC"),c=r.n(u),f=r("WLft"),h=r.n(f)},Cenh:function(t,e,r){t.exports=r("qkKv")},SUvZ:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("En79"),o=r.n(n),s=r("Biqn"),a=r.n(s),i=r("n2UO");e.default={namespace:"users",state:{list:[],total:null,page:null},reducers:{save:function(t,e){var r=e.payload,n=r.data,o=r.total,s=r.page;return a()({},t,{list:n,total:o,page:s})}},effects:{fetch:o.a.mark(function t(e,r){var n,s,a,u,c,f,h;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.payload.page,s=void 0===n?1:n,a=r.call,u=r.put,t.next=4,a(i.fetch,{page:s});case 4:return c=t.sent,f=c.data,h=c.headers,t.next=9,u({type:"save",payload:{data:f,total:parseInt(h["x-total-count"],10),page:parseInt(s,10)}});case 9:case"end":return t.stop()}},t,this)}),remove:o.a.mark(function t(e,r){var n,s,a,u,c;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.payload,s=r.call,a=r.put,u=r.select,t.next=4,s(i.remove,n);case 4:return t.next=6,u(function(t){return t.users.page});case 6:return c=t.sent,t.next=9,a({type:"fetch",payload:{page:c}});case 9:case"end":return t.stop()}},t,this)}),patch:o.a.mark(function t(e,r){var n,s,a,u,c,f,h;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.payload,s=n.id,a=n.values,u=r.call,c=r.put,f=r.select,t.next=4,u(i.patch,s,a);case 4:return t.next=6,f(function(t){return t.users.page});case 6:return h=t.sent,t.next=9,c({type:"fetch",payload:{page:h}});case 9:case"end":return t.stop()}},t,this)}),create:o.a.mark(function t(e,r){var n,s,a,u,c;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.payload,s=r.call,a=r.put,u=r.select,t.next=4,s(i.create,n);case 4:return t.next=6,u(function(t){return t.users.page});case 6:return c=t.sent,t.next=9,a({type:"fetch",payload:{page:c}});case 9:case"end":return t.stop()}},t,this)})},subscriptions:{setup:function(t){var e=t.dispatch,r=t.history;return console.log("setup...."),r.listen(function(t){var r=t.pathname,n=t.query;"/users"===r&&e({type:"fetch",payload:n})})}}}},WLft:function(t,e,r){t.exports=r("j9g7")},j9g7:function(t,e,r){r("rplX"),t.exports=self.fetch.bind(self)},n2UO:function(t,e,r){"use strict";function n(t){var e=t.page,r=void 0===e?1:e;return Object(f.a)("/api/users?_page=".concat(r,"&_limit=").concat(c.PAGE_SIZE))}function o(t){return Object(f.a)("/api/users/".concat(t),{method:"DELETE"})}function s(t,e){return Object(f.a)("/api/users/".concat(t),{method:"PATCH",body:u()(e)})}function a(t){return Object(f.a)("/api/users",{method:"POST",body:u()(t)})}Object.defineProperty(e,"__esModule",{value:!0}),e.fetch=n,e.remove=o,e.patch=s,e.create=a;var i=r("Cenh"),u=r.n(i),c=r("75IS"),f=r("BH0U")},qkKv:function(t,e,r){var n=r("FeBl"),o=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},rplX:function(t,e){!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function r(t){return"string"!=typeof t&&(t=String(t)),t}function n(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return v.iterable&&(e[Symbol.iterator]=function(){return e}),e}function o(t){this.map={},t instanceof o?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function s(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function a(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function i(t){var e=new FileReader,r=a(e);return e.readAsArrayBuffer(t),r}function u(t){var e=new FileReader,r=a(e);return e.readAsText(t),r}function c(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}function f(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function h(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(v.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(v.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(v.arrayBuffer&&v.blob&&w(t))this._bodyArrayBuffer=f(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!v.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!x(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},v.blob&&(this.blob=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?s(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(i)}),this.text=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(c(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},v.formData&&(this.formData=function(){return this.text().then(l)}),this.json=function(){return this.text().then(JSON.parse)},this}function p(t){var e=t.toUpperCase();return _.indexOf(e)>-1?e:t}function d(t,e){e=e||{};var r=e.body;if(t instanceof d){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new o(t.headers)),this.method=t.method,this.mode=t.mode,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new o(e.headers)),this.method=p(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function l(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function y(t){var e=new o;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e}function b(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new o(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var v={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(v.arrayBuffer)var m=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],w=function(t){return t&&DataView.prototype.isPrototypeOf(t)},x=ArrayBuffer.isView||function(t){return t&&m.indexOf(Object.prototype.toString.call(t))>-1};o.prototype.append=function(t,n){t=e(t),n=r(n);var o=this.map[t];this.map[t]=o?o+","+n:n},o.prototype.delete=function(t){delete this.map[e(t)]},o.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},o.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},o.prototype.set=function(t,n){this.map[e(t)]=r(n)},o.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},o.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),n(t)},o.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),n(t)},o.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),n(t)},v.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];d.prototype.clone=function(){return new d(this,{body:this._bodyInit})},h.call(d.prototype),h.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},b.error=function(){var t=new b(null,{status:0,statusText:""});return t.type="error",t};var g=[301,302,303,307,308];b.redirect=function(t,e){if(-1===g.indexOf(e))throw new RangeError("Invalid status code");return new b(null,{status:e,headers:{location:t}})},t.Headers=o,t.Request=d,t.Response=b,t.fetch=function(t,e){return new Promise(function(r,n){var o=new d(t,e),s=new XMLHttpRequest;s.onload=function(){var t={status:s.status,statusText:s.statusText,headers:y(s.getAllResponseHeaders()||"")};t.url="responseURL"in s?s.responseURL:t.headers.get("X-Request-URL");var e="response"in s?s.response:s.responseText;r(new b(e,t))},s.onerror=function(){n(new TypeError("Network request failed"))},s.ontimeout=function(){n(new TypeError("Network request failed"))},s.open(o.method,o.url,!0),"include"===o.credentials?s.withCredentials=!0:"omit"===o.credentials&&(s.withCredentials=!1),"responseType"in s&&v.blob&&(s.responseType="blob"),o.headers.forEach(function(t,e){s.setRequestHeader(e,t)}),s.send(void 0===o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)}});