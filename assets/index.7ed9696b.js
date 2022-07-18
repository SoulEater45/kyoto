const be=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerpolicy&&(s.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?s.credentials="include":l.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}};be();function v(){}function ye(t,e){for(const n in e)t[n]=e[n];return t}function ke(t){return t&&typeof t=="object"&&typeof t.then=="function"}function _e(t){return t()}function ce(){return Object.create(null)}function M(t){t.forEach(_e)}function $e(t){return typeof t=="function"}function z(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function we(t){return Object.keys(t).length===0}function xe(t,e,n,r){if(t){const l=pe(t,e,n,r);return t[0](l)}}function pe(t,e,n,r){return t[1]&&r?ye(n.ctx.slice(),t[1](r(e))):n.ctx}function je(t,e,n,r){if(t[2]&&r){const l=t[2](r(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const s=[],o=Math.max(e.dirty.length,l.length);for(let i=0;i<o;i+=1)s[i]=e.dirty[i]|l[i];return s}return e.dirty|l}return e.dirty}function Ee(t,e,n,r,l,s){if(l){const o=pe(e,n,r,s);t.p(o,l)}}function Ce(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function ie(t){return t==null?"":t}function f(t,e){t.appendChild(e)}function C(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode.removeChild(t)}function Le(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function G(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Pe(t){return document.createTextNode(t)}function E(){return Pe(" ")}function I(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Oe(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function c(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Me(t){return Array.from(t.childNodes)}function Se(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function ue(t,e,n){t.classList[n?"add":"remove"](e)}let K;function P(t){K=t}function ge(){if(!K)throw new Error("Function called outside component initialization");return K}function qe(t){ge().$$.on_destroy.push(t)}const D=[],Z=[],Q=[],ae=[],ze=Promise.resolve();let ee=!1;function Ne(){ee||(ee=!0,ze.then(se))}function te(t){Q.push(t)}const X=new Set;let J=0;function se(){const t=K;do{for(;J<D.length;){const e=D[J];J++,P(e),Te(e.$$)}for(P(null),D.length=0,J=0;Z.length;)Z.pop()();for(let e=0;e<Q.length;e+=1){const n=Q[e];X.has(n)||(X.add(n),n())}Q.length=0}while(D.length);for(;ae.length;)ae.pop()();ee=!1,X.clear(),P(t)}function Te(t){if(t.fragment!==null){t.update(),M(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(te)}}const U=new Set;let O;function ne(){O={r:0,c:[],p:O}}function le(){O.r||M(O.c),O=O.p}function k(t,e){t&&t.i&&(U.delete(t),t.i(e))}function $(t,e,n,r){if(t&&t.o){if(U.has(t))return;U.add(t),O.c.push(()=>{U.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Ae(t,e){const n=e.token={};function r(l,s,o,i){if(e.token!==n)return;e.resolved=i;let u=e.ctx;o!==void 0&&(u=u.slice(),u[o]=i);const a=l&&(e.current=l)(u);let g=!1;e.block&&(e.blocks?e.blocks.forEach((_,m)=>{m!==s&&_&&(ne(),$(_,1,1,()=>{e.blocks[m]===_&&(e.blocks[m]=null)}),le())}):e.block.d(1),a.c(),k(a,1),a.m(e.mount(),e.anchor),g=!0),e.block=a,e.blocks&&(e.blocks[s]=a),g&&se()}if(ke(t)){const l=ge();if(t.then(s=>{P(l),r(e.then,1,e.value,s),P(null)},s=>{if(P(l),r(e.catch,2,e.error,s),P(null),!e.hasCatch)throw s}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function He(t,e,n){const r=e.slice(),{resolved:l}=t;t.current===t.then&&(r[t.value]=l),t.current===t.catch&&(r[t.error]=l),t.block.p(r,n)}function N(t){t&&t.c()}function S(t,e,n,r){const{fragment:l,on_mount:s,on_destroy:o,after_update:i}=t.$$;l&&l.m(e,n),r||te(()=>{const u=s.map(_e).filter($e);o?o.push(...u):M(u),t.$$.on_mount=[]}),i.forEach(te)}function q(t,e){const n=t.$$;n.fragment!==null&&(M(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Fe(t,e){t.$$.dirty[0]===-1&&(D.push(t),Ne(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function T(t,e,n,r,l,s,o,i=[-1]){const u=K;P(t);const a=t.$$={fragment:null,ctx:null,props:s,update:v,not_equal:l,bound:ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:ce(),dirty:i,skip_bound:!1,root:e.target||u.$$.root};o&&o(a.root);let g=!1;if(a.ctx=n?n(t,e.props||{},(_,m,...p)=>{const h=p.length?p[0]:m;return a.ctx&&l(a.ctx[_],a.ctx[_]=h)&&(!a.skip_bound&&a.bound[_]&&a.bound[_](h),g&&Fe(t,_)),m}):[],a.update(),g=!0,M(a.before_update),a.fragment=r?r(a.ctx):!1,e.target){if(e.hydrate){const _=Me(e.target);a.fragment&&a.fragment.l(_),_.forEach(x)}else a.fragment&&a.fragment.c();e.intro&&k(t.$$.fragment),S(t,e.target,e.anchor,e.customElement),se()}P(u)}class A{$destroy(){q(this,1),this.$destroy=v}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(e){this.$$set&&!we(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function fe(t,e,n){const r=t.slice();return r[1]=e[n],r[3]=n,r}function de(t){let e,n,r,l,s,o;return{c(){e=d("li"),n=d("a"),r=d("i"),o=E(),c(r,"class",l="fa-brands fa-"+t[1].network.toLowerCase()+" svg"),c(n,"href",s=t[1].url),c(n,"target","_blank"),c(n,"rel","noreferrer")},m(i,u){C(i,e,u),f(e,n),f(n,r),f(e,o)},p(i,u){u&1&&l!==(l="fa-brands fa-"+i[1].network.toLowerCase()+" svg")&&c(r,"class",l),u&1&&s!==(s=i[1].url)&&c(n,"href",s)},d(i){i&&x(e)}}}function Be(t){let e,n=t[0],r=[];for(let l=0;l<n.length;l+=1)r[l]=de(fe(t,n,l));return{c(){e=d("ul");for(let l=0;l<r.length;l+=1)r[l].c();c(e,"class","social")},m(l,s){C(l,e,s);for(let o=0;o<r.length;o+=1)r[o].m(e,null)},p(l,[s]){if(s&1){n=l[0];let o;for(o=0;o<n.length;o+=1){const i=fe(l,n,o);r[o]?r[o].p(i,s):(r[o]=de(i),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},i:v,o:v,d(l){l&&x(e),Le(r,l)}}}function De(t,e,n){let{list:r}=e;return t.$$set=l=>{"list"in l&&n(0,r=l.list)},[r]}class Ie extends A{constructor(e){super(),T(this,e,De,Be,z,{list:0})}}function Ke(t){let e,n,r,l,s,o,i,u,a,g,_,m,p;return m=new Ie({props:{list:t[0].profiles}}),{c(){e=d("div"),n=d("div"),r=d("div"),l=d("div"),s=E(),o=d("div"),i=d("h3"),u=d("span"),u.textContent=`${t[1]}`,a=E(),g=d("p"),g.textContent=`${t[2]}`,_=E(),N(m.$$.fragment),c(l,"class","image avatar_img blob svelte-x0v2cv"),Se(l,"background-image","url("+t[3]+")"),c(r,"class","avatar"),c(u,"class","svelte-x0v2cv"),c(i,"class","name svelte-x0v2cv"),c(g,"class","job"),c(o,"class","details"),c(n,"class","home_content"),c(e,"class","kyoto_home")},m(h,b){C(h,e,b),f(e,n),f(n,r),f(r,l),f(n,s),f(n,o),f(o,i),f(i,u),f(o,a),f(o,g),f(o,_),S(m,o,null),p=!0},p(h,[b]){const y={};b&1&&(y.list=h[0].profiles),m.$set(y)},i(h){p||(k(m.$$.fragment,h),p=!0)},o(h){$(m.$$.fragment,h),p=!1},d(h){h&&x(e),q(m)}}}function Re(t,e,n){let{basics:r}=e,l=r.name||"",s=r.label||"",o=r.image||"";return t.$$set=i=>{"basics"in i&&n(0,r=i.basics)},[r,l,s,o]}class We extends A{constructor(e){super(),T(this,e,Re,Ke,z,{basics:0})}}function Ye(t){let e;return{c(){e=d("div"),e.innerHTML=`<h1>This project is still under development!</h1> 

  <p>The project is inspired by the <a href="http://tokyovue.ibthemespro.com/home-light">tokyo portfolio website</a> 
    designed by <a href="https://themeforest.net/user/ib-themes">ib-themes</a>. On <a href="https://themeforest.net/">themeforest</a> 
    there are other implementations of this theme.</p> 

  <p>The background image is obtained from <a href="http://christian-woehler.de/">Christian W\xF6hler</a>. 
    For more amazing astrophotography works, visit his website.</p>`,c(e,"class","credits")},m(n,r){C(n,e,r)},p:v,i:v,o:v,d(n){n&&x(e)}}}class ve extends A{constructor(e){super(),T(this,e,null,Ye,z,{})}}function Ge(t){let e,n,r,l,s,o,i,u,a,g,_;const m=t[5].default,p=xe(m,t,t[4],null);return{c(){e=d("div"),n=d("div"),r=G("svg"),l=G("circle"),s=G("line"),o=G("line"),i=E(),u=d("div"),p&&p.c(),c(l,"cx","6"),c(l,"cy","6"),c(l,"r","6"),c(s,"x1","3"),c(s,"y1","3"),c(s,"x2","9"),c(s,"y2","9"),c(s,"class","svelte-18s3qyj"),c(o,"x1","9"),c(o,"y1","3"),c(o,"x2","3"),c(o,"y2","9"),c(o,"class","svelte-18s3qyj"),c(r,"id","close"),c(r,"viewBox","0 0 12 12"),c(r,"class","svelte-18s3qyj"),c(u,"id","modal-content"),c(u,"class","svelte-18s3qyj"),c(n,"id","modal"),c(n,"class","svelte-18s3qyj"),c(e,"id","topModal"),c(e,"class","svelte-18s3qyj"),ue(e,"visible",t[1])},m(h,b){C(h,e,b),f(e,n),f(n,r),f(r,l),f(r,s),f(r,o),f(n,i),f(n,u),p&&p.m(u,null),t[7](e),a=!0,g||(_=[I(r,"click",t[6]),I(n,"click",Oe(Qe)),I(e,"click",t[8])],g=!0)},p(h,[b]){p&&p.p&&(!a||b&16)&&Ee(p,m,h,h[4],a?je(m,h[4],b,null):Ce(h[4]),null),b&2&&ue(e,"visible",h[1])},i(h){a||(k(p,h),a=!0)},o(h){$(p,h),a=!1},d(h){h&&x(e),p&&p.d(h),t[7](null),g=!1,M(_)}}}let B;const re={};function Je(t=""){return re[t]}const Qe=()=>{};function Ue(t,e,n){let{$$slots:r={},$$scope:l}=e,s,o=!1,i,u,{id:a=""}=e;function g(y){y.key=="Escape"&&B==s&&m()}function _(y){u=y,!o&&(i=B,B=s,window.addEventListener("keydown",g),document.body.style.overflow="hidden",n(1,o=!0),document.body.appendChild(s))}function m(y){!o||(window.removeEventListener("keydown",g),B=i,B==null&&(document.body.style.overflow=""),n(1,o=!1),u&&u(y))}re[a]={open:_,close:m},qe(()=>{delete re[a],window.removeEventListener("keydown",g)});const p=()=>m();function h(y){Z[y?"unshift":"push"](()=>{s=y,n(0,s)})}const b=()=>m();return t.$$set=y=>{"id"in y&&n(3,a=y.id),"$$scope"in y&&n(4,l=y.$$scope)},[s,o,m,a,l,r,p,h,b]}class Ve extends A{constructor(e){super(),T(this,e,Ue,Ge,z,{id:3})}}function Xe(t){let e,n;return e=new ve({}),{c(){N(e.$$.fragment)},m(r,l){S(e,r,l),n=!0},i(r){n||(k(e.$$.fragment,r),n=!0)},o(r){$(e.$$.fragment,r),n=!1},d(r){q(e,r)}}}function Ze(t){return{c:v,m:v,p:v,i:v,o:v,d:v}}function et(t){let e,n,r,l=t[0]===1&&he(t),s=t[0]===2&&me();return{c(){e=d("div"),l&&l.c(),n=E(),s&&s.c(),c(e,"class","container")},m(o,i){C(o,e,i),l&&l.m(e,null),f(e,n),s&&s.m(e,null),r=!0},p(o,i){o[0]===1?l?(l.p(o,i),i&1&&k(l,1)):(l=he(o),l.c(),k(l,1),l.m(e,n)):l&&(ne(),$(l,1,1,()=>{l=null}),le()),o[0]===2?s?i&1&&k(s,1):(s=me(),s.c(),k(s,1),s.m(e,null)):s&&(ne(),$(s,1,1,()=>{s=null}),le())},i(o){r||(k(l),k(s),r=!0)},o(o){$(l),$(s),r=!1},d(o){o&&x(e),l&&l.d(),s&&s.d()}}}function he(t){let e,n,r;return n=new We({props:{basics:t[7].basics}}),{c(){e=d("div"),N(n.$$.fragment),c(e,"class","tabcontent")},m(l,s){C(l,e,s),S(n,e,null),r=!0},p:v,i(l){r||(k(n.$$.fragment,l),r=!0)},o(l){$(n.$$.fragment,l),r=!1},d(l){l&&x(e),q(n)}}}function me(t){let e,n,r;return n=new ve({}),{c(){e=d("div"),N(n.$$.fragment),c(e,"class","tabcontent")},m(l,s){C(l,e,s),S(n,e,null),r=!0},i(l){r||(k(n.$$.fragment,l),r=!0)},o(l){$(n.$$.fragment,l),r=!1},d(l){l&&x(e),q(n)}}}function tt(t){return{c:v,m:v,p:v,i:v,o:v,d:v}}function nt(t){let e,n,r,l,s,o,i,u,a,g,_,m,p,h,b,y,R,W,H,F,V,oe;b=new Ve({props:{$$slots:{default:[Xe]},$$scope:{ctx:t}}});let w={ctx:t,current:null,token:null,hasCatch:!1,pending:tt,then:et,catch:Ze,value:7,blocks:[,,,]};return Ae(t[1],w),{c(){e=d("div"),n=d("div"),r=d("div"),l=d("div"),s=d("button"),o=d("i"),i=E(),u=d("span"),u.textContent="Home",g=E(),_=d("div"),m=d("button"),p=d("p"),p.textContent=`\xA9 ${new Date().getFullYear()} Kyoto`,h=E(),N(b.$$.fragment),y=E(),R=d("div"),W=d("div"),H=d("div"),w.block.c(),c(o,"class","fa-solid fa-house svg"),c(u,"class","menu_content svelte-kwzxuj"),c(s,"class",a=ie(t[0]===1?"active":"")+" svelte-kwzxuj"),c(l,"class","menu"),c(m,"class","svelte-kwzxuj"),c(_,"class","panel_footer"),c(r,"class","leftpart_inner"),c(n,"class","leftpart svelte-kwzxuj"),c(H,"class","kyoto_section"),c(W,"class","rightpart_in"),c(R,"class","rightpart")},m(L,j){C(L,e,j),f(e,n),f(n,r),f(r,l),f(l,s),f(s,o),f(s,i),f(s,u),f(r,g),f(r,_),f(_,m),f(m,p),f(_,h),S(b,_,null),f(e,y),f(e,R),f(R,W),f(W,H),w.block.m(H,w.anchor=null),w.mount=()=>H,w.anchor=null,F=!0,V||(oe=[I(s,"click",t[3]),I(m,"click",t[4])],V=!0)},p(L,[j]){t=L,(!F||j&1&&a!==(a=ie(t[0]===1?"active":"")+" svelte-kwzxuj"))&&c(s,"class",a);const Y={};j&256&&(Y.$$scope={dirty:j,ctx:t}),b.$set(Y),He(w,t,j)},i(L){F||(k(b.$$.fragment,L),k(w.block),F=!0)},o(L){$(b.$$.fragment,L);for(let j=0;j<3;j+=1){const Y=w.blocks[j];$(Y)}F=!1},d(L){L&&x(e),q(b),w.block.d(),w.token=null,w=null,V=!1,M(oe)}}}let lt="https://gist.githubusercontent.com/SoulEater45/9d8bdf6e325077cff45b79e5f574e6e3/raw/resume.json";function rt(t,e,n){const r=fetch(lt).then(u=>u.json(),u=>{console.log("Something happened tho.."),console.log(u)});let l=1;function s(u){n(0,l=u),console.log(l)}return[l,r,s,()=>s(1),()=>Je().open()]}class st extends A{constructor(e){super(),T(this,e,rt,nt,z,{})}}function ot(t){let e,n,r,l;return r=new st({}),{c(){e=d("main"),n=d("div"),N(r.$$.fragment),c(n,"id","app"),c(n,"class","kyoto_all_wrap")},m(s,o){C(s,e,o),f(e,n),S(r,n,null),l=!0},p:v,i(s){l||(k(r.$$.fragment,s),l=!0)},o(s){$(r.$$.fragment,s),l=!1},d(s){s&&x(e),q(r)}}}class ct extends A{constructor(e){super(),T(this,e,null,ot,z,{})}}new ct({target:document.getElementById("app")});