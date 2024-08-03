// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=void 0!==Object.getOwnPropertySymbols,e=Object,t=e.getOwnPropertySymbols;var n=r?function(r){return t(e(r))}:function(){return[]},i=Object.prototype.hasOwnProperty;function a(r,e){return null!=r&&i.call(r,e)}var o="function"==typeof Object.defineProperty?Object.defineProperty:null;var c=Object.defineProperty;function s(r){return"number"==typeof r}function l(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function u(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+l(i):l(i)+r,n&&(r="-"+r)),r}var p=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function g(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!s(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=u(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=u(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===f.call(r.specifier)?f.call(t):p.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var d=Math.abs,h=String.prototype.toLowerCase,b=String.prototype.toUpperCase,v=String.prototype.replace,y=/e\+(\d)$/,w=/e-(\d)$/,m=/^(\d+)$/,_=/^(\d+)e/,S=/\.0$/,j=/\.0*e/,E=/(\..*[^0])0*e/;function O(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!s(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":d(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=v.call(t,E,"$1e"),t=v.call(t,j,"e"),t=v.call(t,S,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=v.call(t,y,"e+0$1"),t=v.call(t,w,"e-0$1"),r.alternate&&(t=v.call(t,m,"$1."),t=v.call(t,_,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===b.call(r.specifier)?b.call(t):h.call(t)}function k(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var x=String.fromCharCode,I=Array.isArray;function T(r){return r!=r}function P(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function V(r){var e,t,n,i,a,o,c,s,l,p,f,d,h;if(!I(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(n=r[s],"string"==typeof n)o+=n;else{if(e=void 0!==n.precision,!(n=P(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,T(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=g(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):x(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=O(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=u(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,f=n.width,d=n.padRight,h=void 0,(h=f-p.length)<0?p:p=d?p+k(h):k(h)+p)),o+=n.arg||"",c+=1}return o}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,i;for(t=[],i=0,n=F.exec(r);n;)(e=r.slice(i,F.lastIndex-n[0].length)).length&&t.push(e),t.push($(n)),i=F.lastIndex,n=F.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function N(r){var e,t;if("string"!=typeof r)throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[A(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return V.apply(null,e)}var C=Object.prototype,R=C.toString,G=C.__defineGetter__,Z=C.__defineSetter__,W=C.__lookupGetter__,L=C.__lookupSetter__;var M=function(){try{return o({},"x",{}),!0}catch(r){return!1}}()?c:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(W.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&G&&G.call(r,e,t.get),o&&Z&&Z.call(r,e,t.set),r};function U(r,e,t){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(r){return"string"==typeof r}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return Y&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString;var B="function"==typeof Symbol?Symbol:void 0,D="function"==typeof B?B.toStringTag:"";var H=z()?function(r){var e,t,n;if(null==r)return q.call(r);t=r[D],e=a(r,D);try{r[D]=void 0}catch(e){return q.call(r)}return n=q.call(r),e?r[D]=t:delete r[D],n}:function(r){return q.call(r)},J=String.prototype.valueOf;var K=z();function Q(r){return"object"==typeof r&&(r instanceof String||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object String]"===H(r)))}function rr(r){return X(r)||Q(r)}function er(r){return"number"==typeof r}U(rr,"isPrimitive",X),U(rr,"isObject",Q);var tr=Number,nr=tr.prototype.toString;var ir=z();function ar(r){return"object"==typeof r&&(r instanceof tr||(ir?function(r){try{return nr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function or(r){return er(r)||ar(r)}function cr(r){return r!=r}function sr(r){return er(r)&&cr(r)}function lr(r){return ar(r)&&cr(r.valueOf())}function ur(r){return sr(r)||lr(r)}U(or,"isPrimitive",er),U(or,"isObject",ar),U(ur,"isPrimitive",sr),U(ur,"isObject",lr);var pr=Number.POSITIVE_INFINITY,fr=tr.NEGATIVE_INFINITY,gr=Math.floor;function dr(r){return r<pr&&r>fr&&gr(e=r)===e;var e}function hr(r){return er(r)&&dr(r)}function br(r){return ar(r)&&dr(r.valueOf())}function vr(r){return hr(r)||br(r)}U(vr,"isPrimitive",hr),U(vr,"isObject",br);var yr=Object.prototype.propertyIsEnumerable;var wr=!yr.call("beep","0");function mr(r,e){return!1!==a(r,e)&&!1===function(r,e){var t;return null!=r&&(!(t=yr.call(r,e))&&wr&&rr(r)?!sr(e=+e)&&hr(e)&&e>=0&&e<r.length:t)}(r,e)}function _r(r){var t,i,a;if(null==r)return[];for(t=n(e(r)),a=0,i=0;i<t.length;i++)mr(r,t[i])&&(t[a]=t[i],a+=1);return t.length=a,t}export{_r as default};
//# sourceMappingURL=mod.js.map
