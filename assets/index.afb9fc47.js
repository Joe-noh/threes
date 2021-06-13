import{d as e,r as n,c as t,w as o,o as s,a,p as i,b as d,e as r,f as c,g as l,P as w,S as u,C as p,H as m,D as h,B as v,M as f,h as g,i as b,j as x,k as y,W as P,O as S,l as E,m as A,n as _,v as k,G as I,q as C,s as M,t as z}from"./vendor.2b314885.js";var W=e({});const q=o()(((e,o,a,i,d,r)=>{const c=n("router-view");return s(),t(c)}));W.render=q,W.__scopeId="data-v-c15e945a";var B=e({});const F=o();i("data-v-db783f06");const H={class:"index"},G=d("Basic Geometries"),L=d("CSS 3D"),j=d("GLTF");r();const D=F(((e,o,i,d,r,c)=>{const l=n("router-link");return s(),t("ul",H,[a("li",null,[a(l,{to:"/basic-geometries"},{default:F((()=>[G])),_:1})]),a("li",null,[a(l,{to:"/css3d"},{default:F((()=>[L])),_:1})]),a("li",null,[a(l,{to:"/gltf"},{default:F((()=>[j])),_:1})])])}));B.render=D,B.__scopeId="data-v-db783f06";var R=e({setup(){const e=c(null);let n,t,o;function s(){requestAnimationFrame(s),o.render(n,t)}return l((()=>{const{innerWidth:a,innerHeight:i}=window;t=new w(45,a/i,1,2e3),t.position.set(400,200,400),n=new u,n.background=new p(6669045);const d=new m(16777215,4473924);d.position.set(0,200,0),n.add(d);const r=new h(16777215);r.position.set(-100,200,100),r.castShadow=!0,r.shadow.camera.top=300,r.shadow.camera.bottom=-300,r.shadow.camera.left=-300,r.shadow.camera.right=300,n.add(r);const c=new v(50,50,50),l=new f({color:747043}),E=new g(c,l);E.castShadow=!0,E.position.y=25,n.add(E);const A=new b(20,50,36),_=new f({color:16711680}),k=new g(A,_);k.castShadow=!0,k.position.set(200,25,100),n.add(k);const I=new x(25,36,36),C=new f({color:1193215}),M=new g(I,C);M.castShadow=!0,M.position.set(-50,25,200),n.add(M);const z=new g(new y(800,800),new f({color:3912003,depthWrite:!1}));z.rotation.x=-Math.PI/2,z.receiveShadow=!0,n.add(z),o=new P({antialias:!0}),o.setPixelRatio(window.devicePixelRatio),o.setSize(a,i),o.shadowMap.enabled=!0,e.value.appendChild(o.domElement);const W=new S(t,o.domElement);W.target.y=25,W.update(),s()})),{container:e}}});const J={ref:"container"};R.render=function(e,n,o,a,i,d){return s(),t("div",J,null,512)};var O=e({setup(){const e=c(null),n=c(!1);return l((()=>{const{innerWidth:t,innerHeight:o}=window,s=new w(45,t/o,1,2e3);s.position.set(280,0,1e3);const a=new u,i=document.createElement("div");i.style.width="600px",i.style.height="400px",i.style.backgroundColor="#222";const d=document.createElement("iframe");d.style.width="560px",d.style.height="315px",d.style.left="20px",d.style.top="10px",d.style.position="absolute",d.style.border="0px",d.src="https://www.youtube.com/embed/n9xhJrPXop4?controls=0",i.appendChild(d);const r=new E(i);a.add(r);const c=new A;c.setSize(t,o),e.value.appendChild(c.domElement);const l=new S(s,c.domElement);l.minPolarAngle=Math.PI/3,l.maxPolarAngle=2*Math.PI/3,l.minAzimuthAngle=-Math.PI/3,l.maxAzimuthAngle=Math.PI/3,l.update(),l.addEventListener("start",(()=>{n.value=!0})),l.addEventListener("end",(()=>{n.value=!1})),function e(){requestAnimationFrame(e),c.render(a,s)}()})),{container:e,showBlocker:n}}});const T=o();i("data-v-349a1d00");const X={ref:"container",class:"container"},Z={class:"blocker"};r();const K=T(((e,n,o,i,d,r)=>(s(),t("div",null,[a("div",X,null,512),_(a("div",Z,null,512),[[k,e.showBlocker]])]))));O.render=K,O.__scopeId="data-v-349a1d00";var N=e({setup(){const e=c(null);return l((()=>{const{innerWidth:n,innerHeight:t}=window,o=new w(45,n/t,1,200);o.position.set(8,8,8);const s=new u;s.background=new p(16777215);const a=new m(16777215,0);a.position.set(0,20,0),s.add(a);(new I).load("/threes/assets/suzanne.dcfd7f0d.gltf",(e=>{e.scene.position.set(0,1,0),s.add(e.scene)}));const i=new P({antialias:!0});i.setSize(n,t),e.value.appendChild(i.domElement);const d=new S(o,i.domElement);d.enableZoom=!1,d.update(),function e(){requestAnimationFrame(e),i.render(s,o)}()})),{container:e}}});const Q={ref:"container"};N.render=function(e,n,o,a,i,d){return s(),t("div",Q,null,512)};const U=C(W),V=M({history:z("/threes"),routes:[{path:"/",component:B},{path:"/basic-geometries",component:R},{path:"/css3d",component:O},{path:"/gltf",component:N}]});U.use(V),U.mount("#app");
