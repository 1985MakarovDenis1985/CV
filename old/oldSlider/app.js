!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){document.getElementById("container_AboutUs")},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,a);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){var r,a,s={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=r.apply(this,arguments)),a}),l=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),o=null,c=0,d=[],u=n(4);function f(e,t){for(var n=0;n<e.length;n++){var r=e[n],a=s[r.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(y(r.parts[i],t))}else{var l=[];for(i=0;i<r.parts.length;i++)l.push(y(r.parts[i],t));s[r.id]={id:r.id,refs:1,parts:l}}}}function p(e,t){for(var n=[],r={},a=0;a<e.length;a++){var s=e[a],i=t.base?s[0]+t.base:s[0],l={css:s[1],media:s[2],sourceMap:s[3]};r[i]?r[i].parts.push(l):n.push(r[i]={id:i,parts:[l]})}return n}function v(e,t){var n=l(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=l(e.insertAt.before,n);n.insertBefore(t,a)}}function b(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function m(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return h(t,e.attrs),v(e,t),t}function h(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,a,s;if(t.transform&&e.css){if(!(s="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=s}if(t.singleton){var i=c++;n=o||(o=m(t)),r=w.bind(null,n,i,!1),a=w.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(t,e.attrs),v(e,t),t}(t),r=function(e,t,n){var r=n.css,a=n.sourceMap,s=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||s)&&(r=u(r));a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var i=new Blob([r],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(i),l&&URL.revokeObjectURL(l)}.bind(null,n,t),a=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),a=function(){b(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return f(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var i=n[a];(l=s[i.id]).refs--,r.push(l)}e&&f(p(e,t),t);for(a=0;a<r.length;a++){var l;if(0===(l=r[a]).refs){for(var o=0;o<l.parts.length;o++)l.parts[o]();delete s[l.id]}}}};var g,L=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function w(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=L(t,a);else{var s=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var a,s=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?e:(a=0===s.indexOf("//")?s:0===s.indexOf("/")?n+s:r+s.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},function(e,t,n){"use strict";n.r(t);n(0);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=[{title:"bla-bla",descr:"bla-bla-bla-bla",data:"1"},{title:"bla-bla",descr:"bla-bla-bla-bla",data:"2"},{title:"bla-bla",descr:"bla-bla-bla-bla",data:"3"},{title:"bla-bla",descr:"bla-bla-bla-bla",data:"4"},{title:"bla-bla",descr:"bla-bla-bla-bla",data:"5"},{title:"bla-bla",descr:"bla-bla-bla-bla",data:"6"}],s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,s;return t=e,(n=[{key:"getSlide",value:function(){return a}}])&&r(t.prototype,n),s&&r(t,s),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"removeCl",value:function(e){for(var t=0;t<e.length;t++)e[t].classList.remove("slide_l"),e[t].classList.remove("slide_r"),e[t].classList.remove("centre_slide"),e[t].classList.remove("slide_ll"),e[t].classList.remove("slide_rr")}}])&&i(t.prototype,n),r&&i(t,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"createClasses",value:function(e,t){e[t-1].classList.add("slide_l"),e[t-2].classList.add("slide_ll"),e[t].classList.add("centre_slide"),e[t+1].classList.add("slide_r"),e[t+2].classList.add("slide_rr")}},{key:"createLeftPosition",value:function(e,t){e[t-1].classList.add("slide_l"),e[t+1].classList.add("slide_r"),e[t].classList.add("centre_slide"),e[t+2].classList.add("slide_rr"),e[e.length-1].classList.add("slide_ll")}},{key:"createLeftLeftPosition",value:function(e,t){e[e.length-1].classList.add("slide_l"),e[t+1].classList.add("slide_r"),e[t].classList.add("centre_slide"),e[t+2].classList.add("slide_rr"),e[e.length-2].classList.add("slide_ll")}},{key:"createLastLeftPosition",value:function(e,t){e[t-1].classList.add("slide_l"),e[0].classList.add("slide_r"),e[t].classList.add("centre_slide"),e[1].classList.add("slide_rr"),e[t-2].classList.add("slide_ll")}},{key:"createPreLastLeftPosition",value:function(e,t){e[t-1].classList.add("slide_l"),e[t+1].classList.add("slide_r"),e[t].classList.add("centre_slide"),e[0].classList.add("slide_rr"),e[t-2].classList.add("slide_ll")}}])&&o(t.prototype,n),r&&o(t,r),e}(),d=new s;d=d.getSlide();for(var u=new class{createNewElement(e,t=null,n=null,r){let a=document.createElement(e);return a.className=t||"",a.innerHTML=n||"",r&&r.map(e=>a.setAttribute(e.name,e.value)),a}},f=new l,p=new c,v=Math.ceil(d.length/2),b=document.getElementById("main_container_our_works"),m=0;m<d.length;m++){var h=u.createNewElement("div","sliderItem","",[{name:"id",value:m}]);b.appendChild(h)}var y=document.getElementsByClassName("sliderItem");y=Array.from(y);for(var g=0;g<d.length;g++){var L=u.createNewElement("div","bgSlide","");y[g].appendChild(L),y[g].classList.add("sl"+g)}p.createClasses(y,v,d);for(var w=document.getElementsByClassName("bgSlide"),_=0;_<w.length;_++)w[_].classList.add("bgSl"+_);var C=document.getElementsByClassName("arrows");function E(e){e.map(function(e){e.addEventListener("click",function(e){v>=2&&v<y.length-2&&(f.removeCl(y),p.createClasses(y,v)),1==v&&(f.removeCl(y),p.createLeftPosition(y,v)),0==v&&(f.removeCl(y),p.createLeftLeftPosition(y,v)),y.length>5&&v==y.length-1&&(f.removeCl(y),p.createLastLeftPosition(y,v)),y.length>5&&v==y.length-2&&(f.removeCl(y),p.createPreLastLeftPosition(y,v))})})}(C=Array.from(C)).map(function(e){e.addEventListener("click",function(t){"arrowL"==e.id&&(v-=1,S(),-1==v&&(v=y.length-1,S())),"arrowR"==e.id&&(v+=1,S(),console.log("current "+v),v>y.length-1&&(v=0,S()))}),E(C)});for(var j=document.getElementById("pagination_block"),O=0;O<d.length;O++){var k=u.createNewElement("div","pag","",[{name:"data-set",value:O}]);j.appendChild(k)}var x=Array.from(document.getElementsByClassName("pag"));function S(){for(var e=0;e<x.length;e++)v==x[e].dataset.set?x[e].classList.add("active_pag"):x[e].classList.remove("active_pag")}x.map(function(e){e.addEventListener("click",function(t){v=Number(e.dataset.set),E(x),S()})}),S();n(1)}]);