!function(){"use strict";var e,r={1554:function(e,r,n){n.r(r),r.default=n.p+"assets/models/b79991ed9f44e82bf1aa71c20db56b8a.gltf"},6047:function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.LoadingScreen=void 0;var n=function(){function e(){this.loadingUIBackgroundColor="#fff",this.loadingUIText=""}return e.prototype.displayLoadingUI=function(){return null},e.prototype.hideLoadingUI=function(){return null},e}();r.LoadingScreen=n},4239:function(e,r,n){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var o=n(9384);n(267);var i=t(n(1554)),a=n(6047),u=document.querySelector("canvas"),c=new o.Engine(u,!0);c.loadingScreen=new a.LoadingScreen,o.SceneLoader.Load(i.default,void 0,c,(function(e){e.clearColor=o.Color4.FromHexString("#12345678");var r=e.getMeshByName("Box");if(null==r?void 0:r.skeleton){var n=0,t=(r.skeleton.bones||[])[r.skeleton.getBoneIndexByName("Bone2")].getTransformNode();e.registerBeforeRender((function(){o.Quaternion.FromEulerAnglesToRef(Math.sin(n)/2,Math.cos(n),0,t.rotationQuaternion),n+=.1}))}var i=new o.ArcRotateCamera("camera",0,Math.PI/3,20,o.Vector3.Zero(),e);i.lowerRadiusLimit=20,i.upperRadiusLimit=20,i.attachControl(u,!0),new o.HemisphericLight("hemiLight",o.Vector3.Up(),e).diffuse=o.Color3.White();var a=new o.DirectionalLight("dirLight",new o.Vector3(-1,-5,-1),e);a.diffuse=o.Color3.White(),a.position=new o.Vector3(1,10,0),c.runRenderLoop((function(){e.render()}))})),window.addEventListener("resize",(function(){c.resize()}))}},n={};function t(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return r[e].call(i.exports,i,i.exports,t),i.exports}t.m=r,e=[],t.O=function(r,n,o,i){if(!n){var a=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[c])}))?n.splice(c--,1):(u=!1,i<a&&(a=i));u&&(e.splice(l--,1),r=o())}return r}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,o,i]},t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e}(),function(){var e={216:0};t.O.j=function(r){return 0===e[r]};var r=function(r,n){var o,i,a=n[0],u=n[1],c=n[2],l=0;for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var f=c(t);for(r&&r(n);l<a.length;l++)i=a[l],t.o(e,i)&&e[i]&&e[i][0](),e[a[l]]=0;return t.O(f)},n=self.webpackChunkthrees=self.webpackChunkthrees||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var o=t.O(void 0,[384,267],(function(){return t(4239)}));o=t.O(o)}();