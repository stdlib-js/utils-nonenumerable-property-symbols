// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=void 0!==Object.getOwnPropertySymbols,r=Object,t=r.getOwnPropertySymbols,n=e?function(e){return t(r(e))}:function(){return[]},i=Object.prototype.hasOwnProperty;function a(e,r){return null!=e&&i.call(e,r)}var o="function"==typeof Object.defineProperty?Object.defineProperty:null,c=Object.defineProperty;function s(e){return"number"==typeof e}function u(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function l(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+u(i):u(i)+e,n&&(e="-"+e)),e}var p=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function g(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!s(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=l(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=l(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===f.call(e.specifier)?f.call(t):p.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function d(e){return"string"==typeof e}var b=Math.abs,h=String.prototype.toLowerCase,y=String.prototype.toUpperCase,v=String.prototype.replace,m=/e\+(\d)$/,w=/e-(\d)$/,_=/^(\d+)$/,S=/^(\d+)e/,j=/\.0$/,E=/\.0*e/,O=/(\..*[^0])0*e/;function x(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!s(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":b(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=v.call(t,O,"$1e"),t=v.call(t,E,"e"),t=v.call(t,j,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=v.call(t,m,"e+0$1"),t=v.call(t,w,"e-0$1"),e.alternate&&(t=v.call(t,_,"$1."),t=v.call(t,S,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===y.call(e.specifier)?y.call(t):h.call(t)}function k(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function I(e,r,t){var n=r-e.length;return n<0?e:e=t?e+k(n):k(n)+e}var T=String.fromCharCode,P=isNaN,V=Array.isArray;function F(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function N(e){var r,t,n,i,a,o,c,s,u;if(!V(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(d(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=F(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,P(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,P(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=g(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!P(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=P(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=x(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=l(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=I(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function C(e){var r,t,n,i;for(t=[],i=0,n=$.exec(e);n;)(r=e.slice(i,$.lastIndex-n[0].length)).length&&t.push(r),t.push(A(n)),i=$.lastIndex,n=$.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function R(e){return"string"==typeof e}function G(e){var r,t,n;if(!R(e))throw new TypeError(G("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=C(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return N.apply(null,t)}var Z=Object.prototype,W=Z.toString,L=Z.__defineGetter__,M=Z.__defineSetter__,U=Z.__lookupGetter__,X=Z.__lookupSetter__,Y=function(){try{return o({},"x",{}),!0}catch(e){return!1}}()?c:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===W.call(e))throw new TypeError(G("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===W.call(t))throw new TypeError(G("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(U.call(e,r)||X.call(e,r)?(n=e.__proto__,e.__proto__=Z,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&L&&L.call(e,r,t.get),o&&M&&M.call(e,r,t.set),e};function z(e,r,t){Y(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function q(e){return"string"==typeof e}var B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function D(){return B&&"symbol"==typeof Symbol.toStringTag}var H=Object.prototype.toString,J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"",Q=D()?function(e){var r,t,n;if(null==e)return H.call(e);t=e[K],r=a(e,K);try{e[K]=void 0}catch(r){return H.call(e)}return n=H.call(e),r?e[K]=t:delete e[K],n}:function(e){return H.call(e)},ee=String.prototype.valueOf,re=D();function te(e){return"object"==typeof e&&(e instanceof String||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object String]"===Q(e)))}function ne(e){return q(e)||te(e)}function ie(e){return"number"==typeof e}z(ne,"isPrimitive",q),z(ne,"isObject",te);var ae=Number,oe=ae.prototype.toString,ce=D();function se(e){return"object"==typeof e&&(e instanceof ae||(ce?function(e){try{return oe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Q(e)))}function ue(e){return ie(e)||se(e)}function le(e){return e!=e}function pe(e){return ie(e)&&le(e)}function fe(e){return se(e)&&le(e.valueOf())}function ge(e){return pe(e)||fe(e)}z(ue,"isPrimitive",ie),z(ue,"isObject",se),z(ge,"isPrimitive",pe),z(ge,"isObject",fe);var de=Number.POSITIVE_INFINITY,be=ae.NEGATIVE_INFINITY,he=Math.floor;function ye(e){return e<de&&e>be&&he(r=e)===r;var r}function ve(e){return ie(e)&&ye(e)}function me(e){return se(e)&&ye(e.valueOf())}function we(e){return ve(e)||me(e)}z(we,"isPrimitive",ve),z(we,"isObject",me);var _e=Object.prototype.propertyIsEnumerable,Se=!_e.call("beep","0");function je(e,r){return!1!==a(e,r)&&!1===function(e,r){var t;return null!=e&&(!(t=_e.call(e,r))&&Se&&ne(e)?!pe(r=+r)&&ve(r)&&r>=0&&r<e.length:t)}(e,r)}return function(e){var t,i,a;if(null==e)return[];for(t=n(r(e)),a=0,i=0;i<t.length;i++)je(e,t[i])&&(t[a]=t[i],a+=1);return t.length=a,t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).nonEnumerablePropertySymbols=r();
//# sourceMappingURL=browser.js.map
