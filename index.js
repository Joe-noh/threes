!function(){"use strict";var e,t,n,o={8883:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.routes=void 0,t.routes=["BasicGeometries","Suzanne","Clock","Bone","Can","Cloth","ToonShader"].map((function(e){return{path:"./"+(t=e,t.split("").map((function(e,t){return e.toUpperCase()===e?(0!==t?"-":"")+e.toLowerCase():e})).join("")),label:e};var t}))}},r={};e=function e(t){var n=r[t];if(void 0!==n)return n.exports;var a=r[t]={exports:{}};return o[t](a,a.exports,e),a.exports}(8883),t=document.createElement("ul"),n=document.querySelector("canvas"),e.routes.forEach((function(e){var n=document.createElement("li"),o=document.createElement("a");o.href="./"+e.path+".html",o.textContent=e.label,t.appendChild(n).appendChild(o)})),document.body.replaceChild(t,n)}();