import{P as e,S as t,C as n,H as o,D as a,B as s,M as d,a as i,b as c,c as r,d as w,W as p,O as l,N as m}from"./vendor.25ad615b.js";const h=new m("/threes");h.on("/",(function(){const e=document.querySelector("#app"),t=document.createElement("ul");t.style.padding="2rem",["basic-geometries"].forEach((e=>{t.appendChild(function(e){const t=document.createElement("a");t.href=`/threes/${e}`,t.text=e.split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ");const n=document.createElement("li");return n.appendChild(t),n}(e))})),e.appendChild(t)})),h.on("/basic-geometries",(function(){const{innerWidth:m,innerHeight:h}=window,u=new e(45,m/h,1,2e3);u.position.set(400,200,400);const S=new t;S.background=new n(6669045);const f=new o(16777215,4473924);f.position.set(0,200,0),S.add(f);const b=new a(16777215);b.position.set(-100,200,100),b.castShadow=!0,b.shadow.camera.top=300,b.shadow.camera.bottom=-300,b.shadow.camera.left=-300,b.shadow.camera.right=300,S.add(b);const g=new s(50,50,50),C=new d({color:747043}),E=new i(g,C);E.castShadow=!0,E.position.y=25,S.add(E);const y=new c(20,50,36),v=new d({color:16711680}),x=new i(y,v);x.castShadow=!0,x.position.set(200,25,100),S.add(x);const P=new r(25,36,36),q=new d({color:1193215}),M=new i(P,q);M.castShadow=!0,M.position.set(-50,25,200),S.add(M);const W=new i(new w(800,800),new d({color:3912003,depthWrite:!1}));W.rotation.x=-Math.PI/2,W.receiveShadow=!0,S.add(W);const j=new p({antialias:!0});j.setPixelRatio(window.devicePixelRatio),j.setSize(m,h),j.shadowMap.enabled=!0,document.querySelector("#app").appendChild(j.domElement);const A=new l(u,j.domElement);A.target.y=25,A.update(),function e(){requestAnimationFrame(e),j.render(S,u)}()})),h.resolve();
