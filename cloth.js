!function(){var e,r={6567:function(e,r,o){"use strict";var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=o(9384),n=t(o(5414)),s=document.querySelector("canvas");n.default().then((function(e){var r=new i.Engine(s,!0),o=new i.Scene(r);o.clearColor=i.Color4.FromHexString("#12345678"),o.enablePhysics(null,new i.AmmoJSPlugin(!0,e));var t=new i.ArcRotateCamera("camera",0,Math.PI/3,20,i.Vector3.Zero(),o);t.lowerRadiusLimit=10,t.upperRadiusLimit=20,t.attachControl(s,!0),new i.HemisphericLight("light",i.Vector3.Down(),o);var n=new i.DirectionalLight("dir02",new i.Vector3(-1,-5,-1),o);n.diffuse=i.Color3.White(),n.intensity=1,n.position=new i.Vector3(1,10,0);var a=i.MeshBuilder.CreateGround("cloth",{width:5,height:5,subdivisions:30},o),u=new i.StandardMaterial("clothMaterial",o);u.diffuseColor=i.Color3.FromHexString("#3CB371"),a.material=u,a.receiveShadows=!0,a.position.y=7,a.physicsImpostor=new i.PhysicsImpostor(a,i.PhysicsImpostor.ClothImpostor,{mass:1,margin:.15,damping:.02,friction:.5,restitution:1},o),a.physicsImpostor.velocityIterations=10,a.physicsImpostor.positionIterations=10,a.physicsImpostor.stiffness=1;var c=i.MeshBuilder.CreateSphere("sphere",{diameter:2},o),l=new i.StandardMaterial("sphereMaterial",o);l.diffuseColor=i.Color3.FromHexString("#EEEEEE"),c.material=l,c.receiveShadows=!0,c.position.z=1,c.position.y=2,c.physicsImpostor=new i.PhysicsImpostor(c,i.PhysicsImpostor.SphereImpostor,{mass:0,friction:.5,restitution:0},o);var h=new i.ShadowGenerator(2048,n);h.addShadowCaster(a),h.addShadowCaster(c);var d=i.MeshBuilder.CreateGround("ground",{width:20,height:20},o),p=new i.StandardMaterial("groundMaterial",o);p.diffuseColor=i.Color3.FromHexString("#DEB887"),p.roughness=1,p.specularColor=i.Color3.Black(),d.material=p,d.receiveShadows=!0,d.physicsImpostor=new i.PhysicsImpostor(d,i.PhysicsImpostor.BoxImpostor,{mass:0,friction:.5,restitution:0},o),r.runRenderLoop((function(){o.render()})),window.addEventListener("resize",(function(){r.resize()}))}))},1756:function(){},3030:function(){}},o={};function t(e){var i=o[e];if(void 0!==i)return i.exports;var n=o[e]={exports:{}};return r[e].call(n.exports,n,n.exports,t),n.exports}t.m=r,e=[],t.O=function(r,o,i,n){if(!o){var s=1/0;for(c=0;c<e.length;c++){o=e[c][0],i=e[c][1],n=e[c][2];for(var a=!0,u=0;u<o.length;u++)(!1&n||s>=n)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(a=!1,n<s&&(s=n));a&&(e.splice(c--,1),r=i())}return r}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[o,i,n]},t.d=function(e,r){for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={784:0};t.O.j=function(r){return 0===e[r]};var r=function(r,o){var i,n,s=o[0],a=o[1],u=o[2],c=0;for(i in a)t.o(a,i)&&(t.m[i]=a[i]);if(u)var l=u(t);for(r&&r(o);c<s.length;c++)n=s[c],t.o(e,n)&&e[n]&&e[n][0](),e[s[c]]=0;return t.O(l)},o=self.webpackChunkthrees=self.webpackChunkthrees||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))}();var i=t.O(void 0,[384,414],(function(){return t(6567)}));i=t.O(i)}();