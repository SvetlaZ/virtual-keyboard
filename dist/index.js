!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);const r=document.createElement("div");r.classList.add("wrapper"),document.querySelector("body").prepend(r);const c=document.createElement("input");c.classList.add("screen"),document.querySelector(".wrapper").append(c),document.querySelector("input").focus();const o=document.createElement("div");o.classList.add("wrapper-for-keyboard"),document.querySelector(".wrapper").append(o);const s=document.querySelector(".wrapper-for-keyboard"),a=["`","1","2","3","4","5","6","7","8","9","0","-","=","backspace","tab","q","w","e","r","t","y","u","i","o","p","[","]","\\","capslock","a","s","d","f","g","h","j","k","l",";","'","enter","l_shift","z","x","c","v","b","n","m",",",".","/","r_shift","l_ctrl","fn","win","l_alt","space","r_alt","r_ctrl"];function i(){document.querySelector("input").value=document.querySelector("input").value.slice(0,-1)}function d(){const e=document.getElementsByClassName("key");for(const t of e)1===t.textContent.length&&(this.classList.contains("key_down")?t.textContent=t.textContent.toLowerCase():t.textContent=t.textContent.toUpperCase());this.classList.toggle("key_down")}function l(){this.classList.add("key_down")}function u(){this.classList.remove("key_down")}function p(){document.querySelector(".screen").value+=this.textContent}!function(){for(let e=0;e<a.length;e+=1){const t=document.createElement("div");if(t.innerHTML=`${a[e]}`,a[e].length>1&&"space"!==a[e]?t.classList.add("key","key_service"):"space"===a[e]?t.classList.add("key","key_space"):t.classList.add("key"),s.append(t),"\\"===a[e]||"enter"===a[e]||"right shift"===a[e]||"backspace"===a[e]){const e=document.createElement("div");e.classList.add("break"),s.append(e)}switch("capslock"!==a[e]&&(t.addEventListener("mousedown",l),t.addEventListener("mouseup",u)),a[e]){case"space":t.innerHTML=" ",document.querySelector("input").focus();break;case"tab":t.innerHTML="    ";break;case"backspace":t.addEventListener("click",i);break;case"capslock":t.addEventListener("click",d);break;case"l_shift":case"r_shift":break;case"l_alt":case"r_alt":case"win":break;default:t.addEventListener("click",p)}}}(),document.querySelector(".screen").addEventListener("keydown",e=>{for(let t=0;t<s.childElementCount;t+=1)if(s.children[t].textContent===e.key){s.children[t].classList.add("key_down");break}}),document.querySelector(".screen").addEventListener("keyup",e=>{for(let t=0;t<s.childElementCount;t+=1)if(s.children[t].textContent===e.key){s.children[t].classList.remove("key_down");break}})},function(e,t){}]);