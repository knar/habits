(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();const m={};function me(e){m.context=e}const _e=(e,t)=>e===t,T=Symbol("solid-proxy"),ee=Symbol("solid-track"),F={equals:_e};let ce=be;const x=1,K=2,ae={owned:null,cleanups:null,context:null,owner:null};var g=null;let E=null,d=null,b=null,C=null,Z=0;function U(e,t){const n=d,i=g,l=e.length===0,s=l?ae:{owned:null,cleanups:null,context:null,owner:t===void 0?i:t},r=l?e:()=>e(()=>k(()=>z(s)));g=s,d=null;try{return j(r,!0)}finally{d=n,g=i}}function q(e,t){t=t?Object.assign({},F,t):F;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=l=>(typeof l=="function"&&(l=l(n.value)),ge(n,l));return[he.bind(n),i]}function J(e,t,n){const i=se(e,t,!1,x);B(i)}function Ce(e,t,n){ce=Ee;const i=se(e,t,!1,x);i.user=!0,C?C.push(i):B(i)}function W(e,t,n){n=n?Object.assign({},F,n):F;const i=se(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,B(i),he.bind(i)}function Oe(e){return j(e,!1)}function k(e){if(d===null)return e();const t=d;d=null;try{return e()}finally{d=t}}function xe(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function de(){return d}function he(){const e=E;if(this.sources&&(this.state||e))if(this.state===x||e)B(this);else{const t=b;b=null,j(()=>G(this),!1),b=t}if(d){const t=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(t)):(d.sources=[this],d.sourceSlots=[t]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function ge(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&j(()=>{for(let l=0;l<e.observers.length;l+=1){const s=e.observers[l],r=E&&E.running;r&&E.disposed.has(s),(r&&!s.tState||!r&&!s.state)&&(s.pure?b.push(s):C.push(s),s.observers&&ye(s)),r||(s.state=x)}if(b.length>1e6)throw b=[],new Error},!1)),t}function B(e){if(!e.fn)return;z(e);const t=g,n=d,i=Z;d=g=e,De(e,e.value,i),d=n,g=t}function De(e,t,n){let i;try{i=e.fn(t)}catch(l){return e.pure&&(e.state=x,e.owned&&e.owned.forEach(z),e.owned=null),e.updatedAt=n+1,pe(l)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ge(e,i):e.value=i,e.updatedAt=n)}function se(e,t,n,i=x,l){const s={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:null,pure:n};return g===null||g!==ae&&(g.owned?g.owned.push(s):g.owned=[s]),s}function X(e){const t=E;if(e.state===0||t)return;if(e.state===K||t)return G(e);if(e.suspense&&k(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Z);)(e.state||t)&&n.push(e);for(let i=n.length-1;i>=0;i--)if(e=n[i],e.state===x||t)B(e);else if(e.state===K||t){const l=b;b=null,j(()=>G(e,n[0]),!1),b=l}}function j(e,t){if(b)return e();let n=!1;t||(b=[]),C?n=!0:C=[],Z++;try{const i=e();return Ne(n),i}catch(i){n||(C=null),b=null,pe(i)}}function Ne(e){if(b&&(be(b),b=null),e)return;const t=C;C=null,t.length&&j(()=>ce(t),!1)}function be(e){for(let t=0;t<e.length;t++)X(e[t])}function Ee(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:X(i)}for(m.context&&me(),t=0;t<n;t++)X(e[t])}function G(e,t){const n=E;e.state=0;for(let i=0;i<e.sources.length;i+=1){const l=e.sources[i];l.sources&&(l.state===x||n?l!==t&&(!l.updatedAt||l.updatedAt<Z)&&X(l):(l.state===K||n)&&G(l,t))}}function ye(e){const t=E;for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n];(!i.state||t)&&(i.state=K,i.pure?b.push(i):C.push(i),i.observers&&ye(i))}}function z(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),l=n.observers;if(l&&l.length){const s=l.pop(),r=n.observerSlots.pop();i<l.length&&(s.sourceSlots[r]=i,l[i]=s,n.observerSlots[i]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Te(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function pe(e){throw e=Te(e),e}const Pe=Symbol("fallback");function re(e){for(let t=0;t<e.length;t++)e[t]()}function Le(e,t,n={}){let i=[],l=[],s=[],r=0,o=t.length>1?[]:null;return xe(()=>re(s)),()=>{let u=e()||[],c,f;return u[ee],k(()=>{let h=u.length,y,S,O,D,P,p,$,w,A;if(h===0)r!==0&&(re(s),s=[],i=[],l=[],r=0,o&&(o=[])),n.fallback&&(i=[Pe],l[0]=U(L=>(s[0]=L,n.fallback())),r=1);else if(r===0){for(l=new Array(h),f=0;f<h;f++)i[f]=u[f],l[f]=U(a);r=h}else{for(O=new Array(h),D=new Array(h),o&&(P=new Array(h)),p=0,$=Math.min(r,h);p<$&&i[p]===u[p];p++);for($=r-1,w=h-1;$>=p&&w>=p&&i[$]===u[w];$--,w--)O[w]=l[$],D[w]=s[$],o&&(P[w]=o[$]);for(y=new Map,S=new Array(w+1),f=w;f>=p;f--)A=u[f],c=y.get(A),S[f]=c===void 0?-1:c,y.set(A,f);for(c=p;c<=$;c++)A=i[c],f=y.get(A),f!==void 0&&f!==-1?(O[f]=l[c],D[f]=s[c],o&&(P[f]=o[c]),f=S[f],y.set(A,f)):s[c]();for(f=p;f<h;f++)f in O?(l[f]=O[f],s[f]=D[f],o&&(o[f]=P[f],o[f](f))):l[f]=U(a);l=l.slice(0,r=h),i=u.slice(0)}return l});function a(h){if(s[f]=h,o){const[y,S]=q(f);return o[f]=S,t(u[f],y)}return t(u[f])}}}function N(e,t){return k(()=>e(t||{}))}function te(e){const t="fallback"in e&&{fallback:()=>e.fallback};return W(Le(()=>e.each,e.children,t||void 0))}function Me(e){let t=!1;const n=e.keyed,i=W(()=>e.when,void 0,{equals:(l,s)=>t?l===s:!l==!s});return W(()=>{const l=i();if(l){const s=e.children,r=typeof s=="function"&&s.length>0;return t=n||r,r?k(()=>s(l)):s}return e.fallback},void 0,void 0)}function ke(e,t,n){let i=n.length,l=t.length,s=i,r=0,o=0,u=t[l-1].nextSibling,c=null;for(;r<l||o<s;){if(t[r]===n[o]){r++,o++;continue}for(;t[l-1]===n[s-1];)l--,s--;if(l===r){const f=s<i?o?n[o-1].nextSibling:n[s-o]:u;for(;o<s;)e.insertBefore(n[o++],f)}else if(s===o)for(;r<l;)(!c||!c.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[s-1]&&n[o]===t[l-1]){const f=t[--l].nextSibling;e.insertBefore(n[o++],t[r++].nextSibling),e.insertBefore(n[--s],f),t[l]=n[s]}else{if(!c){c=new Map;let a=o;for(;a<s;)c.set(n[a],a++)}const f=c.get(t[r]);if(f!=null)if(o<f&&f<s){let a=r,h=1,y;for(;++a<l&&a<s&&!((y=c.get(t[a]))==null||y!==f+h);)h++;if(h>f-o){const S=t[r];for(;o<f;)e.insertBefore(n[o++],S)}else e.replaceChild(n[o++],t[r++])}else r++;else t[r++].remove()}}}const fe="_$DX_DELEGATE";function je(e,t,n,i={}){let l;return U(s=>{l=s,t===document?e():_(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{l(),t.textContent=""}}function R(e,t,n){const i=document.createElement("template");if(i.innerHTML=e,t&&i.innerHTML.split("<").length-1!==t)throw`The browser resolved template HTML does not match JSX input:
${i.innerHTML}

${e}. Is your HTML properly formed?`;let l=i.content.firstChild;return n&&(l=l.firstChild),l}function He(e,t=window.document){const n=t[fe]||(t[fe]=new Set);for(let i=0,l=e.length;i<l;i++){const s=e[i];n.has(s)||(n.add(s),t.addEventListener(s,ve))}}function Ie(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function _(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return V(e,t,i,n);J(l=>V(e,t(),l,n),i)}function ve(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),m.registry&&!m.done&&(m.done=_$HY.done=!0);n;){const i=n[t];if(i&&!n.disabled){const l=n[`${t}Data`];if(l!==void 0?i.call(n,l,e):i.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function V(e,t,n,i,l){for(m.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,r=i!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(m.context)return n;if(s==="number"&&(t=t.toString()),r){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=M(e,n,i,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean"){if(m.context)return n;n=M(e,n,i)}else{if(s==="function")return J(()=>{let o=t();for(;typeof o=="function";)o=o();n=V(e,o,n,i)}),()=>n;if(Array.isArray(t)){const o=[],u=n&&Array.isArray(n);if(ne(o,t,n,l))return J(()=>n=V(e,o,n,i,!0)),()=>n;if(m.context){if(!o.length)return n;for(let c=0;c<o.length;c++)if(o[c].parentNode)return n=o}if(o.length===0){if(n=M(e,n,i),r)return n}else u?n.length===0?ue(e,o,i):ke(e,n,o):(n&&M(e),ue(e,o));n=o}else if(t instanceof Node){if(m.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=M(e,n,i,t);M(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function ne(e,t,n,i){let l=!1;for(let s=0,r=t.length;s<r;s++){let o=t[s],u=n&&n[s];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))l=ne(e,o,u)||l;else if(typeof o=="function")if(i){for(;typeof o=="function";)o=o();l=ne(e,Array.isArray(o)?o:[o],Array.isArray(u)?u:[u])||l}else e.push(o),l=!0;else{const c=String(o);c==="<!>"?u&&u.nodeType===8&&e.push(u):u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return l}function ue(e,t,n=null){for(let i=0,l=t.length;i<l;i++)e.insertBefore(t[i],n)}function M(e,t,n,i){if(n===void 0)return e.textContent="";const l=i||document.createTextNode("");if(t.length){let s=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(l!==o){const u=o.parentNode===e;!s&&!r?u?e.replaceChild(l,o):e.insertBefore(l,n):u&&o.remove()}else s=!0}}else e.insertBefore(l,n);return[l]}const ie=Symbol("store-raw"),I=Symbol("store-node"),Be=Symbol("store-name");function we(e,t){let n=e[T];if(!n&&(Object.defineProperty(e,T,{value:n=new Proxy(e,Fe)}),!Array.isArray(e))){const i=Object.keys(e),l=Object.getOwnPropertyDescriptors(e);for(let s=0,r=i.length;s<r;s++){const o=i[s];l[o].get&&Object.defineProperty(e,o,{enumerable:l[o].enumerable,get:l[o].get.bind(n)})}}return n}function Y(e){let t;return e!=null&&typeof e=="object"&&(e[T]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function v(e,t=new Set){let n,i,l,s;if(n=e!=null&&e[ie])return n;if(!Y(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let r=0,o=e.length;r<o;r++)l=e[r],(i=v(l,t))!==l&&(e[r]=i)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const r=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let u=0,c=r.length;u<c;u++)s=r[u],!o[s].get&&(l=e[s],(i=v(l,t))!==l&&(e[s]=i))}return e}function oe(e){let t=e[I];return t||Object.defineProperty(e,I,{value:t={}}),t}function le(e,t,n){return e[t]||(e[t]=Ae(n))}function Re(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===T||t===I||t===Be||(delete n.value,delete n.writable,n.get=()=>e[T][t]),n}function $e(e){if(de()){const t=oe(e);(t._||(t._=Ae()))()}}function Ue(e){return $e(e),Reflect.ownKeys(e)}function Ae(e){const[t,n]=q(e,{equals:!1,internal:!0});return t.$=n,t}const Fe={get(e,t,n){if(t===ie)return e;if(t===T)return n;if(t===ee)return $e(e),n;const i=oe(e),l=i.hasOwnProperty(t);let s=l?i[t]():e[t];if(t===I||t==="__proto__")return s;if(!l){const r=Object.getOwnPropertyDescriptor(e,t);de()&&(typeof s!="function"||e.hasOwnProperty(t))&&!(r&&r.get)&&(s=le(i,t,s)())}return Y(s)?we(s):s},has(e,t){return t===ie||t===T||t===ee||t===I||t==="__proto__"?!0:(this.get(e,t,e),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Ue,getOwnPropertyDescriptor:Re};function Q(e,t,n,i=!1){if(!i&&e[t]===n)return;const l=e[t],s=e.length;n===void 0?delete e[t]:e[t]=n;let r=oe(e),o;(o=le(r,t,l))&&o.$(()=>n),Array.isArray(e)&&e.length!==s&&(o=le(r,"length",s))&&o.$(e.length),(o=r._)&&o.$()}function Se(e,t){const n=Object.keys(t);for(let i=0;i<n.length;i+=1){const l=n[i];Q(e,l,t[l])}}function Ke(e,t){if(typeof t=="function"&&(t=t(e)),t=v(t),Array.isArray(t)){if(e===t)return;let n=0,i=t.length;for(;n<i;n++){const l=t[n];e[n]!==l&&Q(e,n,l)}Q(e,"length",i)}else Se(e,t)}function H(e,t,n=[]){let i,l=e;if(t.length>1){i=t.shift();const r=typeof i,o=Array.isArray(e);if(Array.isArray(i)){for(let u=0;u<i.length;u++)H(e,[i[u]].concat(t),n);return}else if(o&&r==="function"){for(let u=0;u<e.length;u++)i(e[u],u)&&H(e,[u].concat(t),n);return}else if(o&&r==="object"){const{from:u=0,to:c=e.length-1,by:f=1}=i;for(let a=u;a<=c;a+=f)H(e,[a].concat(t),n);return}else if(t.length>1){H(e[i],t,[i].concat(n));return}l=e[i],n=[i].concat(n)}let s=t[0];typeof s=="function"&&(s=s(l,n),s===l)||i===void 0&&s==null||(s=v(s),i===void 0||Y(l)&&Y(s)&&!Array.isArray(s)?Se(l,s):Q(e,i,s))}function qe(...[e,t]){const n=v(e||{}),i=Array.isArray(n),l=we(n);function s(...r){Oe(()=>{i&&r.length===1?Ke(n,r[0]):H(n,r)})}return[l,s]}function Je(e){const i=new Date(e*864e5).toString().split(" ");return`${i[0]} ${i[2]}`}function We(e){return Math.floor(e/864e5)+1}function Xe(e,t){const n=localStorage.getItem(e),[i,l]=qe(n?JSON.parse(n):t);return Ce(()=>localStorage.setItem(e,JSON.stringify(i))),[i,l]}function Ge(e,t){return[...e.slice(0,t),...e.slice(t+1)]}const Ve=R('<main class="container"><article><figure><table role="grid"><thead><tr><th></th></tr></thead><tbody><tr><td>+</td></tr></tbody></table></figure><label>Days: <input type="range" min="1" max="30"></label></article></main>',23),Ye=R("<th></th>",2),Qe=R("<tr><td></td></tr>",4),Ze=R("<td></td>",2),ze=R('<dialog open><article><h3>Confirm deleting <b></b>.</h3><p>Are you sure you want to delete this habit? Deleting a habit is permanent and you will lose all the tracking data.</p><footer><a href="#" role="button" class="secondary">Cancel</a><a href="#" role="button">Delete</a></footer></article></dialog>',16);function et(){const[e,t]=Xe("habits",[]),[n,i]=q(5),l=W(()=>{const c=We(Date.now()),f=[];for(let a=c-n()+1;a<=c;a++)f.push(a);return f}),[s,r]=q(void 0);function o(){t(c=>[...c,{label:"New habit",history:{}}])}function u(c){t(f=>Ge(f,c))}return[N(Me,{get when(){return s()},get children(){return N(nt,{get i(){return s().i},get label(){return s().label},setDeleteModal:r,deleteHabit:u})}}),(()=>{const c=Ve.cloneNode(!0),f=c.firstChild,a=f.firstChild,h=a.firstChild,y=h.firstChild,S=y.firstChild;S.firstChild;const O=y.nextSibling,D=O.firstChild,P=D.firstChild,p=a.nextSibling,$=p.firstChild,w=$.nextSibling;return _(S,N(te,{get each(){return l()},children:A=>(()=>{const L=Ye.cloneNode(!0);return _(L,()=>Je(A)),L})()}),null),_(O,N(te,{each:e,children:(A,L)=>N(tt,{habit:A,setHabits:t,get i(){return L()},get dates(){return l()},setDeleteModal:r})}),D),P.$$click=o,_(p,n,w),w.$$input=A=>i(parseInt(A.currentTarget.value)),J(()=>w.value=n()),c})()]}function tt(e){function t(i,l){e.setHabits(l,"label",i)}function n(i,l){e.setHabits(l,"history",i,i in e.habit.history?void 0:!0)}return(()=>{const i=Qe.cloneNode(!0),l=i.firstChild;return l.$$contextmenu=s=>{s.preventDefault(),e.setDeleteModal({show:!0,i:e.i,label:e.habit.label})},l.$$input=s=>t(s.currentTarget.textContent||"",e.i),Ie(l,"contenteditable",!0),_(l,()=>k(()=>e.habit.label)),_(i,N(te,{get each(){return e.dates},children:s=>(()=>{const r=Ze.cloneNode(!0);return r.$$click=()=>n(s,e.i),_(r,()=>s in e.habit.history?"✓":""),r})()}),null),i})()}function nt(e){return(()=>{const t=ze.cloneNode(!0),n=t.firstChild,i=n.firstChild,l=i.firstChild,s=l.nextSibling,r=i.nextSibling,o=r.nextSibling,u=o.firstChild,c=u.nextSibling;return _(s,()=>e.label),u.$$click=()=>{e.setDeleteModal(void 0)},c.$$click=()=>{e.deleteHabit(e.i),e.setDeleteModal(void 0)},t})()}He(["click","input","contextmenu"]);const it=document.getElementById("root");je(()=>N(et,{}),it);