// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t=void 0!==Object.getOwnPropertySymbols,e=Object.getOwnPropertySymbols,r=t?function(t){return e(Object(t))}:function(){return[]},n=Object.prototype.hasOwnProperty,o=function(t,e){return null!=t&&n.call(t,e)},i="function"==typeof Object.defineProperty?Object.defineProperty:null,u=function(){try{return i({},"x",{}),!0}catch(t){return!1}},c=Object.defineProperty,l=Object.prototype,f=l.toString,a=l.__defineGetter__,b=l.__defineSetter__,p=l.__lookupGetter__,y=l.__lookupSetter__,s=c,m=function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===f.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===f.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(p.call(t,e)||y.call(t,e)?(n=t.__proto__,t.__proto__=l,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&a&&a.call(t,e,r.get),u&&b&&b.call(t,e,r.set),t},v=u()?s:m,_=function(t,e,r){v(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},j=function(t){return"string"==typeof t},d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),g=function(){return d&&"symbol"==typeof Symbol.toStringTag},O=Object.prototype.toString,S=O,P=function(t){return S.call(t)},h="function"==typeof Symbol?Symbol.toStringTag:"",w=o,I=h,T=O,E=P,N=function(t){var e,r,n;if(null==t)return T.call(t);r=t[I],e=w(t,I);try{t[I]=void 0}catch(e){return T.call(t)}return n=T.call(t),e?t[I]=r:delete t[I],n},V=g()?N:E,x=String.prototype.valueOf,A=V,F=function(t){try{return x.call(t),!0}catch(t){return!1}},G=g(),k=function(t){return"object"==typeof t&&(t instanceof String||(G?F(t):"[object String]"===A(t)))},Y=j,C=k,M=_,q=function(t){return Y(t)||C(t)},z=k;M(q,"isPrimitive",j),M(q,"isObject",z);var B=q,D=function(t){return"number"==typeof t},H=Number,J=H.prototype.toString,K=V,L=H,Q=function(t){try{return J.call(t),!0}catch(t){return!1}},R=g(),U=function(t){return"object"==typeof t&&(t instanceof L||(R?Q(t):"[object Number]"===K(t)))},W=D,X=U,Z=_,$=function(t){return W(t)||X(t)},tt=U;Z($,"isPrimitive",D),Z($,"isObject",tt);var et=$,rt=function(t){return t!=t},nt=et.isPrimitive,ot=rt,it=function(t){return nt(t)&&ot(t)},ut=et.isObject,ct=rt,lt=function(t){return ut(t)&&ct(t.valueOf())},ft=it,at=lt,bt=_,pt=function(t){return ft(t)||at(t)},yt=lt;bt(pt,"isPrimitive",it),bt(pt,"isObject",yt);var st=pt,mt=Number.POSITIVE_INFINITY,vt=H.NEGATIVE_INFINITY,_t=Math.floor,jt=mt,dt=vt,gt=function(t){return _t(t)===t},Ot=function(t){return t<jt&&t>dt&&gt(t)},St=et.isPrimitive,Pt=Ot,ht=function(t){return St(t)&&Pt(t)},wt=et.isObject,It=Ot,Tt=function(t){return wt(t)&&It(t.valueOf())},Et=ht,Nt=Tt,Vt=_,xt=function(t){return Et(t)||Nt(t)},At=Tt;Vt(xt,"isPrimitive",ht),Vt(xt,"isObject",At);var Ft,Gt=xt,kt=Object.prototype.propertyIsEnumerable;Ft=!kt.call("beep","0");var Yt=B,Ct=st.isPrimitive,Mt=Gt.isPrimitive,qt=kt,zt=Ft,Bt=function(t,e){var r;return null!=t&&(!(r=qt.call(t,e))&&zt&&Yt(t)?!Ct(e=+e)&&Mt(e)&&e>=0&&e<t.length:r)},Dt=o,Ht=Bt,Jt=function(t,e){return!1!==Dt(t,e)&&!1===Ht(t,e)};return function(t){var e,n,o;if(null==t)return[];for(e=r(Object(t)),o=0,n=0;n<e.length;n++)Jt(t,e[n])&&(e[o]=e[n],o+=1);return e.length=o,e}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).nonEnumerablePropertySymbols=e();
//# sourceMappingURL=browser.js.map
