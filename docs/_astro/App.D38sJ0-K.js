import{j as C}from"./jsx-runtime.D_zvdyIk.js";import{r as Ko,g as Fu,R as Bu,a as St}from"./index.CL6X04yg.js";/* empty css                       */const ju={},Mi=r=>{let t;const e=new Set,n=(m,w)=>{const A=typeof m=="function"?m(t):m;if(!Object.is(A,t)){const S=t;t=w??(typeof A!="object"||A===null)?A:Object.assign({},t,A),e.forEach(V=>V(t,S))}},i=()=>t,h={setState:n,getState:i,getInitialState:()=>f,subscribe:m=>(e.add(m),()=>e.delete(m)),destroy:()=>{(ju?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),e.clear()}},f=t=r(n,i,h);return h},Uu=r=>r?Mi(r):Mi;var Cr={exports:{}},Pr={},Vr={exports:{}},Dr={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oi;function qu(){if(Oi)return Dr;Oi=1;var r=Ko();function t(w,A){return w===A&&(w!==0||1/w===1/A)||w!==w&&A!==A}var e=typeof Object.is=="function"?Object.is:t,n=r.useState,i=r.useEffect,o=r.useLayoutEffect,u=r.useDebugValue;function c(w,A){var S=A(),V=n({inst:{value:S,getSnapshot:A}}),N=V[0].inst,x=V[1];return o(function(){N.value=S,N.getSnapshot=A,h(N)&&x({inst:N})},[w,S,A]),i(function(){return h(N)&&x({inst:N}),w(function(){h(N)&&x({inst:N})})},[w]),u(S),S}function h(w){var A=w.getSnapshot;w=w.value;try{var S=A();return!e(w,S)}catch{return!0}}function f(w,A){return A()}var m=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?f:c;return Dr.useSyncExternalStore=r.useSyncExternalStore!==void 0?r.useSyncExternalStore:m,Dr}var Fi;function $u(){return Fi||(Fi=1,Vr.exports=qu()),Vr.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bi;function Ku(){if(Bi)return Pr;Bi=1;var r=Ko(),t=$u();function e(f,m){return f===m&&(f!==0||1/f===1/m)||f!==f&&m!==m}var n=typeof Object.is=="function"?Object.is:e,i=t.useSyncExternalStore,o=r.useRef,u=r.useEffect,c=r.useMemo,h=r.useDebugValue;return Pr.useSyncExternalStoreWithSelector=function(f,m,w,A,S){var V=o(null);if(V.current===null){var N={hasValue:!1,value:null};V.current=N}else N=V.current;V=c(function(){function z(Q){if(!G){if(G=!0,H=Q,Q=A(Q),S!==void 0&&N.hasValue){var v=N.value;if(S(v,Q))return X=v}return X=Q}if(v=X,n(H,Q))return v;var p=A(Q);return S!==void 0&&S(v,p)?(H=Q,v):(H=Q,X=p)}var G=!1,H,X,At=w===void 0?null:w;return[function(){return z(m())},At===null?void 0:function(){return z(At())}]},[m,w,A,S]);var x=i(f,V[0],V[1]);return u(function(){N.hasValue=!0,N.value=x},[x]),h(x),x},Pr}var ji;function zu(){return ji||(ji=1,Cr.exports=Ku()),Cr.exports}var Gu=zu();const Hu=Fu(Gu),zo={},{useDebugValue:Qu}=Bu,{useSyncExternalStoreWithSelector:Wu}=Hu;let Ui=!1;const Yu=r=>r;function Xu(r,t=Yu,e){(zo?"production":void 0)!=="production"&&e&&!Ui&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Ui=!0);const n=Wu(r.subscribe,r.getState,r.getServerState||r.getInitialState,t,e);return Qu(n),n}const qi=r=>{(zo?"production":void 0)!=="production"&&typeof r!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof r=="function"?Uu(r):r,e=(n,i)=>Xu(t,n,i);return Object.assign(e,t),e},Go=r=>r?qi(r):qi,ye="en",$i={en:{app:{noLists:"No lists",reset:"Reset",options:"Options",language:"Language",english:"English",polish:"Polish"},progress:{eyebrow:"Mission progress",title:"You’re doing great!",done:"{completed} of {total} tasks done",keepGoing:"Keep going!"},loader:{heading:"Starting dashboard",message:"Please wait while we load your configuration and restore saved progress.",errorHeading:"Unable to load the dashboard",errorMessage:"The application could not complete startup. Please refresh the page and try again.",debugHeading:"Debug details",loadingConfiguration:"Loading configuration",restoringState:"Restoring saved state"},pageTitle:"Lullaby dashboard"},pl:{app:{noLists:"Brak list",reset:"Resetuj",options:"Opcje",language:"Język",english:"Angielski",polish:"Polski"},progress:{eyebrow:"Postęp misji",title:"Świetnie sobie radzisz!",done:"Ukończono {completed} z {total} zadań",keepGoing:"Jeszcze tylko trochę!"},loader:{heading:"Uruchamianie pulpitu",message:"Poczekaj, aż załadujemy konfigurację i przywrócimy zapisany stan.",errorHeading:"Nie można załadować pulpitu",errorMessage:"Aplikacja nie mogła ukończyć uruchamiania. Odśwież stronę i spróbuj ponownie.",debugHeading:"Szczegóły debugowania",loadingConfiguration:"Ładowanie konfiguracji",restoringState:"Przywracanie zapisanych danych"},pageTitle:"Pulpit Lullaby"}};function Ju(r=ye){return $i[r]??$i[ye]}function Zu(r,t=ye,e){const n=r.split(".");let o=Ju(t);for(const u of n){if(typeof o!="object"||o===null||!(u in o))return r;o=o[u]}return typeof o!="string"?r:e?o.replace(/\{(\w+)\}/g,(u,c)=>{const h=e[c];return h===void 0?`{${c}}`:String(h)}):o}const ls="lullaby-dashboard-state",Qn=typeof window<"u";function tl(r){if(!r||typeof r!="object"||Array.isArray(r))return;const t=r;if(typeof t.selectedIndex!="number")return;const e=t.language==="en"||t.language==="pl"?t.language:ye;if(typeof t.checkedKeys!="object"||t.checkedKeys===null||Array.isArray(t.checkedKeys)||typeof t.listExpiryTimestamps!="object"||t.listExpiryTimestamps===null||Array.isArray(t.listExpiryTimestamps))return;const n=Object.fromEntries(Object.entries(t.checkedKeys).filter(([,h])=>typeof h=="boolean")),i=Object.fromEntries(Object.entries(t.listExpiryTimestamps).filter(([,h])=>typeof h=="number")),o=typeof t.timerRunsByList=="object"&&t.timerRunsByList!==null&&!Array.isArray(t.timerRunsByList)?t.timerRunsByList:{},u=typeof t.fastestRunsByList=="object"&&t.fastestRunsByList!==null&&!Array.isArray(t.fastestRunsByList)?t.fastestRunsByList:{},c=typeof t.celebration=="object"&&t.celebration!==null&&!Array.isArray(t.celebration)?t.celebration:{visible:!1,listId:null,isNewBest:!1,elapsedMs:0};return{checkedKeys:n,listExpiryTimestamps:i,selectedIndex:t.selectedIndex,language:e,timerRunsByList:o,fastestRunsByList:u,celebration:{visible:!!c.visible,listId:typeof c.listId=="string"?c.listId:null,isNewBest:!!c.isNewBest,elapsedMs:typeof c.elapsedMs=="number"?c.elapsedMs:0}}}function el(){if(Qn)try{const r=window.localStorage.getItem(ls);if(!r)return;const t=JSON.parse(r);return tl(t)}catch{return}}function nl(r,t){const e=Date.now(),n={},i={};for(const[o,u]of Object.entries(r.checkedKeys)){const[c]=o.split("-",2),h=t.find(m=>m.id===c),f=r.listExpiryTimestamps[c];!h?.retentionHours||typeof f!="number"||e>=f||(n[o]=u,i[c]=f)}return{checkedKeys:n,listExpiryTimestamps:i,selectedIndex:r.selectedIndex,language:r.language??ye,timerRunsByList:r.timerRunsByList??{},fastestRunsByList:r.fastestRunsByList??{},celebration:r.celebration??{visible:!1,listId:null,isNewBest:!1,elapsedMs:0}}}function bt(r){if(Qn)try{window.localStorage.setItem(ls,JSON.stringify(r))}catch{}}function rl(){if(Qn)try{window.localStorage.removeItem(ls)}catch{}}var Ki={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},sl=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const i=r[e++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){const o=r[e++];t[n++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=r[e++],u=r[e++],c=r[e++],h=((i&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;t[n++]=String.fromCharCode(55296+(h>>10)),t[n++]=String.fromCharCode(56320+(h&1023))}else{const o=r[e++],u=r[e++];t[n++]=String.fromCharCode((i&15)<<12|(o&63)<<6|u&63)}}return t.join("")},Qo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const o=r[i],u=i+1<r.length,c=u?r[i+1]:0,h=i+2<r.length,f=h?r[i+2]:0,m=o>>2,w=(o&3)<<4|c>>4;let A=(c&15)<<2|f>>6,S=f&63;h||(S=64,u||(A=64)),n.push(e[m],e[w],e[A],e[S])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(Ho(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):sl(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const o=e[r.charAt(i++)],c=i<r.length?e[r.charAt(i)]:0;++i;const f=i<r.length?e[r.charAt(i)]:64;++i;const w=i<r.length?e[r.charAt(i)]:64;if(++i,o==null||c==null||f==null||w==null)throw new il;const A=o<<2|c>>4;if(n.push(A),f!==64){const S=c<<4&240|f>>2;if(n.push(S),w!==64){const V=f<<6&192|w;n.push(V)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class il extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ol=function(r){const t=Ho(r);return Qo.encodeByteArray(t,!0)},jn=function(r){return ol(r).replace(/\./g,"")},al=function(r){try{return Qo.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll=()=>ul().__FIREBASE_DEFAULTS__,cl=()=>{if(typeof process>"u"||typeof Ki>"u")return;const r=Ki.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},hl=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&al(r[1]);return t&&JSON.parse(t)},cs=()=>{try{return ll()||cl()||hl()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},dl=r=>{var t,e;return(e=(t=cs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[r]},fl=r=>{const t=dl(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},Wo=()=>{var r;return(r=cs())===null||r===void 0?void 0:r.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",i=r.iat||0,o=r.sub||r.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},r);return[jn(JSON.stringify(e)),jn(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _l(){var r;const t=(r=cs())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yl(){return!_l()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vl(){try{return typeof indexedDB=="object"}catch{return!1}}function El(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl="FirebaseError";class Re extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Tl,Object.setPrototypeOf(this,Re.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yo.prototype.create)}}class Yo{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],u=o?Il(o,n):"Error",c=`${this.serviceName}: ${u} (${i}).`;return new Re(i,c,n)}}function Il(r,t){return r.replace(wl,(e,n)=>{const i=t[n];return i!=null?String(i):`<${n}?>`})}const wl=/\{\$([^}]+)}/g;function Ur(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const i of e){if(!n.includes(i))return!1;const o=r[i],u=t[i];if(zi(o)&&zi(u)){if(!Ur(o,u))return!1}else if(o!==u)return!1}for(const i of n)if(!e.includes(i))return!1;return!0}function zi(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(r){return r&&r._delegate?r._delegate:r}class en{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new pl;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t?.identifier),i=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(bl(t))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});n.resolve(o)}catch{}}}}clearInstance(t=Zt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Zt){return this.instances.has(t)}getOptions(t=Zt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[o,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);n===c&&u.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),o=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;o.add(t),this.onInitCallbacks.set(i,o);const u=this.instances.get(i);return u&&t(u,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Sl(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Zt){return this.component?this.component.multipleInstances?t:Zt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sl(r){return r===Zt?void 0:r}function bl(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Rl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(U||(U={}));const Pl={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Vl=U.INFO,Dl={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},xl=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),i=Dl[t];if(i)console[i](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Xo{constructor(t){this.name=t,this._logLevel=Vl,this._logHandler=xl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Pl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const Nl=(r,t)=>t.some(e=>r instanceof e);let Gi,Hi;function kl(){return Gi||(Gi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ll(){return Hi||(Hi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jo=new WeakMap,qr=new WeakMap,Zo=new WeakMap,xr=new WeakMap,hs=new WeakMap;function Ml(r){const t=new Promise((e,n)=>{const i=()=>{r.removeEventListener("success",o),r.removeEventListener("error",u)},o=()=>{e(Kt(r.result)),i()},u=()=>{n(r.error),i()};r.addEventListener("success",o),r.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&Jo.set(e,r)}).catch(()=>{}),hs.set(t,r),t}function Ol(r){if(qr.has(r))return;const t=new Promise((e,n)=>{const i=()=>{r.removeEventListener("complete",o),r.removeEventListener("error",u),r.removeEventListener("abort",u)},o=()=>{e(),i()},u=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",o),r.addEventListener("error",u),r.addEventListener("abort",u)});qr.set(r,t)}let $r={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return qr.get(r);if(t==="objectStoreNames")return r.objectStoreNames||Zo.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Kt(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Fl(r){$r=r($r)}function Bl(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(Nr(this),t,...e);return Zo.set(n,t.sort?t.sort():[t]),Kt(n)}:Ll().includes(r)?function(...t){return r.apply(Nr(this),t),Kt(Jo.get(this))}:function(...t){return Kt(r.apply(Nr(this),t))}}function jl(r){return typeof r=="function"?Bl(r):(r instanceof IDBTransaction&&Ol(r),Nl(r,kl())?new Proxy(r,$r):r)}function Kt(r){if(r instanceof IDBRequest)return Ml(r);if(xr.has(r))return xr.get(r);const t=jl(r);return t!==r&&(xr.set(r,t),hs.set(t,r)),t}const Nr=r=>hs.get(r);function Ul(r,t,{blocked:e,upgrade:n,blocking:i,terminated:o}={}){const u=indexedDB.open(r,t),c=Kt(u);return n&&u.addEventListener("upgradeneeded",h=>{n(Kt(u.result),h.oldVersion,h.newVersion,Kt(u.transaction),h)}),e&&u.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const ql=["get","getKey","getAll","getAllKeys","count"],$l=["put","add","delete","clear"],kr=new Map;function Qi(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(kr.get(t))return kr.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,i=$l.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(i||ql.includes(e)))return;const o=async function(u,...c){const h=this.transaction(u,i?"readwrite":"readonly");let f=h.store;return n&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),i&&h.done]))[0]};return kr.set(t,o),o}Fl(r=>({...r,get:(t,e,n)=>Qi(t,e)||r.get(t,e,n),has:(t,e)=>!!Qi(t,e)||r.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(zl(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function zl(r){const t=r.getComponent();return t?.type==="VERSION"}const Kr="@firebase/app",Wi="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new Xo("@firebase/app"),Gl="@firebase/app-compat",Hl="@firebase/analytics-compat",Ql="@firebase/analytics",Wl="@firebase/app-check-compat",Yl="@firebase/app-check",Xl="@firebase/auth",Jl="@firebase/auth-compat",Zl="@firebase/database",tc="@firebase/data-connect",ec="@firebase/database-compat",nc="@firebase/functions",rc="@firebase/functions-compat",sc="@firebase/installations",ic="@firebase/installations-compat",oc="@firebase/messaging",ac="@firebase/messaging-compat",uc="@firebase/performance",lc="@firebase/performance-compat",cc="@firebase/remote-config",hc="@firebase/remote-config-compat",dc="@firebase/storage",fc="@firebase/storage-compat",pc="@firebase/firestore",mc="@firebase/vertexai-preview",gc="@firebase/firestore-compat",_c="firebase",yc="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="[DEFAULT]",vc={[Kr]:"fire-core",[Gl]:"fire-core-compat",[Ql]:"fire-analytics",[Hl]:"fire-analytics-compat",[Yl]:"fire-app-check",[Wl]:"fire-app-check-compat",[Xl]:"fire-auth",[Jl]:"fire-auth-compat",[Zl]:"fire-rtdb",[tc]:"fire-data-connect",[ec]:"fire-rtdb-compat",[nc]:"fire-fn",[rc]:"fire-fn-compat",[sc]:"fire-iid",[ic]:"fire-iid-compat",[oc]:"fire-fcm",[ac]:"fire-fcm-compat",[uc]:"fire-perf",[lc]:"fire-perf-compat",[cc]:"fire-rc",[hc]:"fire-rc-compat",[dc]:"fire-gcs",[fc]:"fire-gcs-compat",[pc]:"fire-fst",[gc]:"fire-fst-compat",[mc]:"fire-vertex","fire-js":"fire-js",[_c]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new Map,Ec=new Map,Gr=new Map;function Yi(r,t){try{r.container.addComponent(t)}catch(e){Mt.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function Un(r){const t=r.name;if(Gr.has(t))return Mt.debug(`There were multiple attempts to register component ${t}.`),!1;Gr.set(t,r);for(const e of nn.values())Yi(e,r);for(const e of Ec.values())Yi(e,r);return!0}function Tc(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zt=new Yo("app","Firebase",Ic);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=yc;function ta(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n=Object.assign({name:zr,automaticDataCollectionEnabled:!1},t),i=n.name;if(typeof i!="string"||!i)throw zt.create("bad-app-name",{appName:String(i)});if(e||(e=Wo()),!e)throw zt.create("no-options");const o=nn.get(i);if(o){if(Ur(e,o.options)&&Ur(n,o.config))return o;throw zt.create("duplicate-app",{appName:i})}const u=new Cl(i);for(const h of Gr.values())u.addComponent(h);const c=new wc(e,n,u);return nn.set(i,c),c}function Rc(r=zr){const t=nn.get(r);if(!t&&r===zr&&Wo())return ta();if(!t)throw zt.create("no-app",{appName:r});return t}function Sc(){return Array.from(nn.values())}function me(r,t,e){var n;let i=(n=vc[r])!==null&&n!==void 0?n:r;e&&(i+=`-${e}`);const o=i.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Mt.warn(c.join(" "));return}Un(new en(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc="firebase-heartbeat-database",Cc=1,rn="firebase-heartbeat-store";let Lr=null;function ea(){return Lr||(Lr=Ul(bc,Cc,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(rn)}catch(e){console.warn(e)}}}}).catch(r=>{throw zt.create("idb-open",{originalErrorMessage:r.message})})),Lr}async function Pc(r){try{const e=(await ea()).transaction(rn),n=await e.objectStore(rn).get(na(r));return await e.done,n}catch(t){if(t instanceof Re)Mt.warn(t.message);else{const e=zt.create("idb-get",{originalErrorMessage:t?.message});Mt.warn(e.message)}}}async function Xi(r,t){try{const n=(await ea()).transaction(rn,"readwrite");await n.objectStore(rn).put(t,na(r)),await n.done}catch(e){if(e instanceof Re)Mt.warn(e.message);else{const n=zt.create("idb-set",{originalErrorMessage:e?.message});Mt.warn(n.message)}}}function na(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=1024,Dc=720*60*60*1e3;class xc{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new kc(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ji();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const c=new Date(u.date).valueOf();return Date.now()-c<=Dc}),this._storage.overwrite(this._heartbeatsCache))}catch(n){Mt.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ji(),{heartbeatsToSend:n,unsentEntries:i}=Nc(this._heartbeatsCache.heartbeats),o=jn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Mt.warn(e),""}}}function Ji(){return new Date().toISOString().substring(0,10)}function Nc(r,t=Vc){const e=[];let n=r.slice();for(const i of r){const o=e.find(u=>u.agent===i.agent);if(o){if(o.dates.push(i.date),Zi(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Zi(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class kc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vl()?El().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Pc(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xi(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xi(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Zi(r){return jn(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(r){Un(new en("platform-logger",t=>new Kl(t),"PRIVATE")),Un(new en("heartbeat",t=>new xc(t),"PRIVATE")),me(Kr,Wi,r),me(Kr,Wi,"esm2017"),me("fire-js","")}Lc("");var to=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ne,ra;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function _(){}_.prototype=p.prototype,v.D=p.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(y,E,I){for(var g=Array(arguments.length-2),xt=2;xt<arguments.length;xt++)g[xt-2]=arguments[xt];return p.prototype[E].apply(y,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=v.g[0],_=v.g[1],E=v.g[2];var I=v.g[3],g=p+(I^_&(E^I))+y[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=I+(E^p&(_^E))+y[1]+3905402710&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(_^I&(p^_))+y[2]+606105819&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(p^E&(I^p))+y[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(I^_&(E^I))+y[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=I+(E^p&(_^E))+y[5]+1200080426&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(_^I&(p^_))+y[6]+2821735955&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(p^E&(I^p))+y[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(I^_&(E^I))+y[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=I+(E^p&(_^E))+y[9]+2336552879&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(_^I&(p^_))+y[10]+4294925233&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(p^E&(I^p))+y[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(I^_&(E^I))+y[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=I+(E^p&(_^E))+y[13]+4254626195&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(_^I&(p^_))+y[14]+2792965006&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(p^E&(I^p))+y[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(E^I&(_^E))+y[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(p^_))+y[6]+3225465664&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(I^p))+y[11]+643717713&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(E^I))+y[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(_^E))+y[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(p^_))+y[10]+38016083&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(I^p))+y[15]+3634488961&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(E^I))+y[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(_^E))+y[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(p^_))+y[14]+3275163606&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(I^p))+y[3]+4107603335&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(E^I))+y[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(_^E))+y[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(p^_))+y[2]+4243563512&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(I^p))+y[7]+1735328473&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(E^I))+y[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(_^E^I)+y[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^E)+y[8]+2272392833&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^_)+y[11]+1839030562&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^p)+y[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^I)+y[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^E)+y[4]+1272893353&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^_)+y[7]+4139469664&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^p)+y[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^I)+y[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^E)+y[0]+3936430074&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^_)+y[3]+3572445317&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^p)+y[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^I)+y[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^E)+y[12]+3873151461&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^_)+y[15]+530742520&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^p)+y[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(E^(_|~I))+y[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~E))+y[7]+1126891415&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~_))+y[14]+2878612391&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~p))+y[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~I))+y[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~E))+y[3]+2399980690&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~_))+y[10]+4293915773&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~p))+y[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~I))+y[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~E))+y[15]+4264355552&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~_))+y[6]+2734768916&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~p))+y[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~I))+y[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~E))+y[11]+3174756917&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~_))+y[2]+718787259&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~p))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+I&4294967295}n.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var _=p-this.blockSize,y=this.B,E=this.h,I=0;I<p;){if(E==0)for(;I<=_;)i(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<p;)if(y[E++]=v.charCodeAt(I++),E==this.blockSize){i(this,y),E=0;break}}else for(;I<p;)if(y[E++]=v[I++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=p},n.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var _=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=_&255,_/=256;for(this.u(v),v=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)v[_++]=this.g[p]>>>y&255;return v};function o(v,p){var _=c;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=p(v)}function u(v,p){this.h=p;for(var _=[],y=!0,E=v.length-1;0<=E;E--){var I=v[E]|0;y&&I==p||(_[E]=I,y=!1)}this.g=_}var c={};function h(v){return-128<=v&&128>v?o(v,function(p){return new u([p|0],0>p?-1:0)}):new u([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return w;if(0>v)return x(f(-v));for(var p=[],_=1,y=0;v>=_;y++)p[y]=v/_|0,_*=4294967296;return new u(p,0)}function m(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return x(m(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(p,8)),y=w,E=0;E<v.length;E+=8){var I=Math.min(8,v.length-E),g=parseInt(v.substring(E,E+I),p);8>I?(I=f(Math.pow(p,I)),y=y.j(I).add(f(g))):(y=y.j(_),y=y.add(f(g)))}return y}var w=h(0),A=h(1),S=h(16777216);r=u.prototype,r.m=function(){if(N(this))return-x(this).m();for(var v=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);v+=(0<=y?y:4294967296+y)*p,p*=4294967296}return v},r.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(V(this))return"0";if(N(this))return"-"+x(this).toString(v);for(var p=f(Math.pow(v,6)),_=this,y="";;){var E=X(_,p).g;_=z(_,E.j(p));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=E,V(_))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},r.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function V(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function N(v){return v.h==-1}r.l=function(v){return v=z(this,v),N(v)?-1:V(v)?0:1};function x(v){for(var p=v.g.length,_=[],y=0;y<p;y++)_[y]=~v.g[y];return new u(_,~v.h).add(A)}r.abs=function(){return N(this)?x(this):this},r.add=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0,E=0;E<=p;E++){var I=y+(this.i(E)&65535)+(v.i(E)&65535),g=(I>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=g>>>16,I&=65535,g&=65535,_[E]=g<<16|I}return new u(_,_[_.length-1]&-2147483648?-1:0)};function z(v,p){return v.add(x(p))}r.j=function(v){if(V(this)||V(v))return w;if(N(this))return N(v)?x(this).j(x(v)):x(x(this).j(v));if(N(v))return x(this.j(x(v)));if(0>this.l(S)&&0>v.l(S))return f(this.m()*v.m());for(var p=this.g.length+v.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var I=this.i(y)>>>16,g=this.i(y)&65535,xt=v.i(E)>>>16,Pe=v.i(E)&65535;_[2*y+2*E]+=g*Pe,G(_,2*y+2*E),_[2*y+2*E+1]+=I*Pe,G(_,2*y+2*E+1),_[2*y+2*E+1]+=g*xt,G(_,2*y+2*E+1),_[2*y+2*E+2]+=I*xt,G(_,2*y+2*E+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new u(_,0)};function G(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function H(v,p){this.g=v,this.h=p}function X(v,p){if(V(p))throw Error("division by zero");if(V(v))return new H(w,w);if(N(v))return p=X(x(v),p),new H(x(p.g),x(p.h));if(N(p))return p=X(v,x(p)),new H(x(p.g),p.h);if(30<v.g.length){if(N(v)||N(p))throw Error("slowDivide_ only works with positive integers.");for(var _=A,y=p;0>=y.l(v);)_=At(_),y=At(y);var E=Q(_,1),I=Q(y,1);for(y=Q(y,2),_=Q(_,2);!V(y);){var g=I.add(y);0>=g.l(v)&&(E=E.add(_),I=g),y=Q(y,1),_=Q(_,1)}return p=z(v,E.j(p)),new H(E,p)}for(E=w;0<=v.l(p);){for(_=Math.max(1,Math.floor(v.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(_),g=I.j(p);N(g)||0<g.l(v);)_-=y,I=f(_),g=I.j(p);V(I)&&(I=A),E=E.add(I),v=z(v,g)}return new H(E,v)}r.A=function(v){return X(this,v).h},r.and=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&v.i(y);return new u(_,this.h&v.h)},r.or=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|v.i(y);return new u(_,this.h|v.h)},r.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^v.i(y);return new u(_,this.h^v.h)};function At(v){for(var p=v.g.length+1,_=[],y=0;y<p;y++)_[y]=v.i(y)<<1|v.i(y-1)>>>31;return new u(_,v.h)}function Q(v,p){var _=p>>5;p%=32;for(var y=v.g.length-_,E=[],I=0;I<y;I++)E[I]=0<p?v.i(I+_)>>>p|v.i(I+_+1)<<32-p:v.i(I+_);return new u(E,v.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,ra=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=m,ne=u}).apply(typeof to<"u"?to:typeof self<"u"?self:typeof window<"u"?window:{});var Nn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sa,He,ia,On,Hr,oa,aa,ua;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nn=="object"&&Nn];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(s,a){if(a)t:{var l=n;s=s.split(".");for(var d=0;d<s.length-1;d++){var T=s[d];if(!(T in l))break t;l=l[T]}s=s[s.length-1],d=l[s],a=a(d),a!=d&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,d=!1,T={next:function(){if(!d&&l<s.length){var R=l++;return{value:a(R,s[R]),done:!1}}return d=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function m(s,a,l){return s.call.apply(s.bind,arguments)}function w(s,a,l){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,d),s.apply(a,T)}}return function(){return s.apply(a,arguments)}}function A(s,a,l){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:w,A.apply(null,arguments)}function S(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function V(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(d,T,R){for(var P=Array(arguments.length-2),W=2;W<arguments.length;W++)P[W-2]=arguments[W];return a.prototype[T].apply(d,P)}}function N(s){const a=s.length;if(0<a){const l=Array(a);for(let d=0;d<a;d++)l[d]=s[d];return l}return[]}function x(s,a){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const T=s.length||0,R=d.length||0;s.length=T+R;for(let P=0;P<R;P++)s[T+P]=d[P]}else s.push(d)}}class z{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function G(s){return/^[\s\xa0]*$/.test(s)}function H(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function X(s){return X[" "](s),s}X[" "]=function(){};var At=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function Q(s,a,l){for(const d in s)a.call(l,s[d],d,s)}function v(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function p(s){const a={};for(const l in s)a[l]=s[l];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let l,d;for(let T=1;T<arguments.length;T++){d=arguments[T];for(l in d)s[l]=d[l];for(let R=0;R<_.length;R++)l=_[R],Object.prototype.hasOwnProperty.call(d,l)&&(s[l]=d[l])}}function E(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function I(s){c.setTimeout(()=>{throw s},0)}function g(){var s=sr;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class xt{constructor(){this.h=this.g=null}add(a,l){const d=Pe.get();d.set(a,l),this.h?this.h.next=d:this.g=d,this.h=d}}var Pe=new z(()=>new ru,s=>s.reset());class ru{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Ve,De=!1,sr=new xt,Ms=()=>{const s=c.Promise.resolve(void 0);Ve=()=>{s.then(su)}};var su=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(l){I(l)}var a=Pe;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}De=!1};function Ft(){this.s=this.s,this.C=this.C}Ft.prototype.s=!1,Ft.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ft.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var iu=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return s})();function xe(s,a){if(ht.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(At){t:{try{X(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:ou[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&xe.aa.h.call(this)}}V(xe,ht);var ou={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var pn="closure_listenable_"+(1e6*Math.random()|0),au=0;function uu(s,a,l,d,T){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!d,this.ha=T,this.key=++au,this.da=this.fa=!1}function mn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function gn(s){this.src=s,this.g={},this.h=0}gn.prototype.add=function(s,a,l,d,T){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var P=or(s,a,d,T);return-1<P?(a=s[P],l||(a.fa=!1)):(a=new uu(a,this.src,R,!!d,T),a.fa=l,s.push(a)),a};function ir(s,a){var l=a.type;if(l in s.g){var d=s.g[l],T=Array.prototype.indexOf.call(d,a,void 0),R;(R=0<=T)&&Array.prototype.splice.call(d,T,1),R&&(mn(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function or(s,a,l,d){for(var T=0;T<s.length;++T){var R=s[T];if(!R.da&&R.listener==a&&R.capture==!!l&&R.ha==d)return T}return-1}var ar="closure_lm_"+(1e6*Math.random()|0),ur={};function Os(s,a,l,d,T){if(Array.isArray(a)){for(var R=0;R<a.length;R++)Os(s,a[R],l,d,T);return null}return l=js(l),s&&s[pn]?s.K(a,l,f(d)?!!d.capture:!1,T):lu(s,a,l,!1,d,T)}function lu(s,a,l,d,T,R){if(!a)throw Error("Invalid event type");var P=f(T)?!!T.capture:!!T,W=cr(s);if(W||(s[ar]=W=new gn(s)),l=W.add(a,l,d,P,R),l.proxy)return l;if(d=cu(),l.proxy=d,d.src=s,d.listener=l,s.addEventListener)iu||(T=P),T===void 0&&(T=!1),s.addEventListener(a.toString(),d,T);else if(s.attachEvent)s.attachEvent(Bs(a.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function cu(){function s(l){return a.call(s.src,s.listener,l)}const a=hu;return s}function Fs(s,a,l,d,T){if(Array.isArray(a))for(var R=0;R<a.length;R++)Fs(s,a[R],l,d,T);else d=f(d)?!!d.capture:!!d,l=js(l),s&&s[pn]?(s=s.i,a=String(a).toString(),a in s.g&&(R=s.g[a],l=or(R,l,d,T),-1<l&&(mn(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete s.g[a],s.h--)))):s&&(s=cr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=or(a,l,d,T)),(l=-1<s?a[s]:null)&&lr(l))}function lr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[pn])ir(a.i,s);else{var l=s.type,d=s.proxy;a.removeEventListener?a.removeEventListener(l,d,s.capture):a.detachEvent?a.detachEvent(Bs(l),d):a.addListener&&a.removeListener&&a.removeListener(d),(l=cr(a))?(ir(l,s),l.h==0&&(l.src=null,a[ar]=null)):mn(s)}}}function Bs(s){return s in ur?ur[s]:ur[s]="on"+s}function hu(s,a){if(s.da)s=!0;else{a=new xe(a,this);var l=s.listener,d=s.ha||s.src;s.fa&&lr(s),s=l.call(d,a)}return s}function cr(s){return s=s[ar],s instanceof gn?s:null}var hr="__closure_events_fn_"+(1e9*Math.random()>>>0);function js(s){return typeof s=="function"?s:(s[hr]||(s[hr]=function(a){return s.handleEvent(a)}),s[hr])}function dt(){Ft.call(this),this.i=new gn(this),this.M=this,this.F=null}V(dt,Ft),dt.prototype[pn]=!0,dt.prototype.removeEventListener=function(s,a,l,d){Fs(this,s,a,l,d)};function yt(s,a){var l,d=s.F;if(d)for(l=[];d;d=d.F)l.push(d);if(s=s.M,d=a.type||a,typeof a=="string")a=new ht(a,s);else if(a instanceof ht)a.target=a.target||s;else{var T=a;a=new ht(d,s),y(a,T)}if(T=!0,l)for(var R=l.length-1;0<=R;R--){var P=a.g=l[R];T=_n(P,d,!0,a)&&T}if(P=a.g=s,T=_n(P,d,!0,a)&&T,T=_n(P,d,!1,a)&&T,l)for(R=0;R<l.length;R++)P=a.g=l[R],T=_n(P,d,!1,a)&&T}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],d=0;d<l.length;d++)mn(l[d]);delete s.g[a],s.h--}}this.F=null},dt.prototype.K=function(s,a,l,d){return this.i.add(String(s),a,!1,l,d)},dt.prototype.L=function(s,a,l,d){return this.i.add(String(s),a,!0,l,d)};function _n(s,a,l,d){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,R=0;R<a.length;++R){var P=a[R];if(P&&!P.da&&P.capture==l){var W=P.listener,at=P.ha||P.src;P.fa&&ir(s.i,P),T=W.call(at,d)!==!1&&T}}return T&&!d.defaultPrevented}function Us(s,a,l){if(typeof s=="function")l&&(s=A(s,l));else if(s&&typeof s.handleEvent=="function")s=A(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function qs(s){s.g=Us(()=>{s.g=null,s.i&&(s.i=!1,qs(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class du extends Ft{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:qs(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ne(s){Ft.call(this),this.h=s,this.g={}}V(Ne,Ft);var $s=[];function Ks(s){Q(s.g,function(a,l){this.g.hasOwnProperty(l)&&lr(a)},s),s.g={}}Ne.prototype.N=function(){Ne.aa.N.call(this),Ks(this)},Ne.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dr=c.JSON.stringify,fu=c.JSON.parse,pu=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function fr(){}fr.prototype.h=null;function zs(s){return s.h||(s.h=s.i())}function Gs(){}var ke={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pr(){ht.call(this,"d")}V(pr,ht);function mr(){ht.call(this,"c")}V(mr,ht);var Wt={},Hs=null;function yn(){return Hs=Hs||new dt}Wt.La="serverreachability";function Qs(s){ht.call(this,Wt.La,s)}V(Qs,ht);function Le(s){const a=yn();yt(a,new Qs(a))}Wt.STAT_EVENT="statevent";function Ws(s,a){ht.call(this,Wt.STAT_EVENT,s),this.stat=a}V(Ws,ht);function vt(s){const a=yn();yt(a,new Ws(a,s))}Wt.Ma="timingevent";function Ys(s,a){ht.call(this,Wt.Ma,s),this.size=a}V(Ys,ht);function Me(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function Oe(){this.g=!0}Oe.prototype.xa=function(){this.g=!1};function mu(s,a,l,d,T,R){s.info(function(){if(s.g)if(R)for(var P="",W=R.split("&"),at=0;at<W.length;at++){var $=W[at].split("=");if(1<$.length){var ft=$[0];$=$[1];var pt=ft.split("_");P=2<=pt.length&&pt[1]=="type"?P+(ft+"="+$+"&"):P+(ft+"=redacted&")}}else P=null;else P=R;return"XMLHTTP REQ ("+d+") [attempt "+T+"]: "+a+`
`+l+`
`+P})}function gu(s,a,l,d,T,R,P){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+T+"]: "+a+`
`+l+`
`+R+" "+P})}function ue(s,a,l,d){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+yu(s,l)+(d?" "+d:"")})}function _u(s,a){s.info(function(){return"TIMEOUT: "+a})}Oe.prototype.info=function(){};function yu(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var d=l[s];if(!(2>d.length)){var T=d[1];if(Array.isArray(T)&&!(1>T.length)){var R=T[0];if(R!="noop"&&R!="stop"&&R!="close")for(var P=1;P<T.length;P++)T[P]=""}}}}return dr(l)}catch{return a}}var vn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gr;function En(){}V(En,fr),En.prototype.g=function(){return new XMLHttpRequest},En.prototype.i=function(){return{}},gr=new En;function Bt(s,a,l,d){this.j=s,this.i=a,this.l=l,this.R=d||1,this.U=new Ne(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Js}function Js(){this.i=null,this.g="",this.h=!1}var Zs={},_r={};function yr(s,a,l){s.L=1,s.v=An(Nt(a)),s.m=l,s.P=!0,ti(s,null)}function ti(s,a){s.F=Date.now(),Tn(s),s.A=Nt(s.v);var l=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),pi(l.i,"t",d),s.C=0,l=s.j.J,s.h=new Js,s.g=xi(s.j,l?a:null,!s.m),0<s.O&&(s.M=new du(A(s.Y,s,s.g),s.O)),a=s.U,l=s.g,d=s.ca;var T="readystatechange";Array.isArray(T)||(T&&($s[0]=T.toString()),T=$s);for(var R=0;R<T.length;R++){var P=Os(l,T[R],d||a.handleEvent,!1,a.h||a);if(!P)break;a.g[P.key]=P}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Le(),mu(s.i,s.u,s.A,s.l,s.R,s.m)}Bt.prototype.ca=function(s){s=s.target;const a=this.M;a&&kt(s)==3?a.j():this.Y(s)},Bt.prototype.Y=function(s){try{if(s==this.g)t:{const pt=kt(this.g);var a=this.g.Ba();const he=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Ti(this.g)))){this.J||pt!=4||a==7||(a==8||0>=he?Le(3):Le(2)),vr(this);var l=this.g.Z();this.X=l;e:if(ei(this)){var d=Ti(this.g);s="";var T=d.length,R=kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yt(this),Fe(this);var P="";break e}this.h.i=new c.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,s+=this.h.i.decode(d[a],{stream:!(R&&a==T-1)});d.length=0,this.h.g+=s,this.C=0,P=this.h.g}else P=this.g.oa();if(this.o=l==200,gu(this.i,this.u,this.A,this.l,this.R,pt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var W,at=this.g;if((W=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(W)){var $=W;break e}}$=null}if(l=$)ue(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Er(this,l);else{this.o=!1,this.s=3,vt(12),Yt(this),Fe(this);break t}}if(this.P){l=!0;let Rt;for(;!this.J&&this.C<P.length;)if(Rt=vu(this,P),Rt==_r){pt==4&&(this.s=4,vt(14),l=!1),ue(this.i,this.l,null,"[Incomplete Response]");break}else if(Rt==Zs){this.s=4,vt(15),ue(this.i,this.l,P,"[Invalid Chunk]"),l=!1;break}else ue(this.i,this.l,Rt,null),Er(this,Rt);if(ei(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||P.length!=0||this.h.h||(this.s=1,vt(16),l=!1),this.o=this.o&&l,!l)ue(this.i,this.l,P,"[Invalid Chunked Response]"),Yt(this),Fe(this);else if(0<P.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+P.length),Sr(ft),ft.M=!0,vt(11))}}else ue(this.i,this.l,P,null),Er(this,P);pt==4&&Yt(this),this.o&&!this.J&&(pt==4?Ci(this.j,this):(this.o=!1,Tn(this)))}else Mu(this.g),l==400&&0<P.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),Yt(this),Fe(this)}}}catch{}finally{}};function ei(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function vu(s,a){var l=s.C,d=a.indexOf(`
`,l);return d==-1?_r:(l=Number(a.substring(l,d)),isNaN(l)?Zs:(d+=1,d+l>a.length?_r:(a=a.slice(d,d+l),s.C=d+l,a)))}Bt.prototype.cancel=function(){this.J=!0,Yt(this)};function Tn(s){s.S=Date.now()+s.I,ni(s,s.I)}function ni(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Me(A(s.ba,s),a)}function vr(s){s.B&&(c.clearTimeout(s.B),s.B=null)}Bt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(_u(this.i,this.A),this.L!=2&&(Le(),vt(17)),Yt(this),this.s=2,Fe(this)):ni(this,this.S-s)};function Fe(s){s.j.G==0||s.J||Ci(s.j,s)}function Yt(s){vr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Ks(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Er(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||Tr(l.h,s))){if(!s.K&&Tr(l.h,s)&&l.G==3){try{var d=l.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var T=d;if(T[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Vn(l),Cn(l);else break t;Rr(l),vt(18)}}else l.za=T[1],0<l.za-l.T&&37500>T[2]&&l.F&&l.v==0&&!l.C&&(l.C=Me(A(l.Za,l),6e3));if(1>=ii(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Jt(l,11)}else if((s.K||l.g==s)&&Vn(l),!G(a))for(T=l.Da.g.parse(a),a=0;a<T.length;a++){let $=T[a];if(l.T=$[0],$=$[1],l.G==2)if($[0]=="c"){l.K=$[1],l.ia=$[2];const ft=$[3];ft!=null&&(l.la=ft,l.j.info("VER="+l.la));const pt=$[4];pt!=null&&(l.Aa=pt,l.j.info("SVER="+l.Aa));const he=$[5];he!=null&&typeof he=="number"&&0<he&&(d=1.5*he,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const Rt=s.g;if(Rt){const xn=Rt.g?Rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xn){var R=d.h;R.g||xn.indexOf("spdy")==-1&&xn.indexOf("quic")==-1&&xn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Ir(R,R.h),R.h=null))}if(d.D){const br=Rt.g?Rt.g.getResponseHeader("X-HTTP-Session-Id"):null;br&&(d.ya=br,Y(d.I,d.D,br))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var P=s;if(d.qa=Di(d,d.J?d.ia:null,d.W),P.K){oi(d.h,P);var W=P,at=d.L;at&&(W.I=at),W.B&&(vr(W),Tn(W)),d.g=P}else Si(d);0<l.i.length&&Pn(l)}else $[0]!="stop"&&$[0]!="close"||Jt(l,7);else l.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?Jt(l,7):Ar(l):$[0]!="noop"&&l.l&&l.l.ta($),l.v=0)}}Le(4)}catch{}}var Eu=class{constructor(s,a){this.g=s,this.map=a}};function ri(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function si(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ii(s){return s.h?1:s.g?s.g.size:0}function Tr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Ir(s,a){s.g?s.g.add(a):s.h=a}function oi(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}ri.prototype.cancel=function(){if(this.i=ai(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ai(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return N(s.i)}function Tu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],l=s.length,d=0;d<l;d++)a.push(s[d]);return a}a=[],l=0;for(d in s)a[l++]=s[d];return a}function Iu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const d in s)a[l++]=d;return a}}}function ui(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=Iu(s),d=Tu(s),T=d.length,R=0;R<T;R++)a.call(void 0,d[R],l&&l[R],s)}var li=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wu(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var d=s[l].indexOf("="),T=null;if(0<=d){var R=s[l].substring(0,d);T=s[l].substring(d+1)}else R=s[l];a(R,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Xt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Xt){this.h=s.h,In(this,s.j),this.o=s.o,this.g=s.g,wn(this,s.s),this.l=s.l;var a=s.i,l=new Ue;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),ci(this,l),this.m=s.m}else s&&(a=String(s).match(li))?(this.h=!1,In(this,a[1]||"",!0),this.o=Be(a[2]||""),this.g=Be(a[3]||"",!0),wn(this,a[4]),this.l=Be(a[5]||"",!0),ci(this,a[6]||"",!0),this.m=Be(a[7]||"")):(this.h=!1,this.i=new Ue(null,this.h))}Xt.prototype.toString=function(){var s=[],a=this.j;a&&s.push(je(a,hi,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(je(a,hi,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(je(l,l.charAt(0)=="/"?Su:Ru,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",je(l,Cu)),s.join("")};function Nt(s){return new Xt(s)}function In(s,a,l){s.j=l?Be(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function wn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function ci(s,a,l){a instanceof Ue?(s.i=a,Pu(s.i,s.h)):(l||(a=je(a,bu)),s.i=new Ue(a,s.h))}function Y(s,a,l){s.i.set(a,l)}function An(s){return Y(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Be(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function je(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,Au),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Au(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var hi=/[#\/\?@]/g,Ru=/[#\?:]/g,Su=/[#\?]/g,bu=/[#\?@]/g,Cu=/#/g;function Ue(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function jt(s){s.g||(s.g=new Map,s.h=0,s.i&&wu(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=Ue.prototype,r.add=function(s,a){jt(this),this.i=null,s=le(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function di(s,a){jt(s),a=le(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function fi(s,a){return jt(s),a=le(s,a),s.g.has(a)}r.forEach=function(s,a){jt(this),this.g.forEach(function(l,d){l.forEach(function(T){s.call(a,T,d,this)},this)},this)},r.na=function(){jt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let d=0;d<a.length;d++){const T=s[d];for(let R=0;R<T.length;R++)l.push(a[d])}return l},r.V=function(s){jt(this);let a=[];if(typeof s=="string")fi(this,s)&&(a=a.concat(this.g.get(le(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},r.set=function(s,a){return jt(this),this.i=null,s=le(this,s),fi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},r.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function pi(s,a,l){di(s,a),0<l.length&&(s.i=null,s.g.set(le(s,a),N(l)),s.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var d=a[l];const R=encodeURIComponent(String(d)),P=this.V(d);for(d=0;d<P.length;d++){var T=R;P[d]!==""&&(T+="="+encodeURIComponent(String(P[d]))),s.push(T)}}return this.i=s.join("&")};function le(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Pu(s,a){a&&!s.j&&(jt(s),s.i=null,s.g.forEach(function(l,d){var T=d.toLowerCase();d!=T&&(di(this,d),pi(this,T,l))},s)),s.j=a}function Vu(s,a){const l=new Oe;if(c.Image){const d=new Image;d.onload=S(Ut,l,"TestLoadImage: loaded",!0,a,d),d.onerror=S(Ut,l,"TestLoadImage: error",!1,a,d),d.onabort=S(Ut,l,"TestLoadImage: abort",!1,a,d),d.ontimeout=S(Ut,l,"TestLoadImage: timeout",!1,a,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else a(!1)}function Du(s,a){const l=new Oe,d=new AbortController,T=setTimeout(()=>{d.abort(),Ut(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:d.signal}).then(R=>{clearTimeout(T),R.ok?Ut(l,"TestPingServer: ok",!0,a):Ut(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Ut(l,"TestPingServer: error",!1,a)})}function Ut(s,a,l,d,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),d(l)}catch{}}function xu(){this.g=new pu}function Nu(s,a,l){const d=l||"";try{ui(s,function(T,R){let P=T;f(T)&&(P=dr(T)),a.push(d+R+"="+encodeURIComponent(P))})}catch(T){throw a.push(d+"type="+encodeURIComponent("_badmap")),T}}function Rn(s){this.l=s.Ub||null,this.j=s.eb||!1}V(Rn,fr),Rn.prototype.g=function(){return new Sn(this.l,this.j)},Rn.prototype.i=(function(s){return function(){return s}})({});function Sn(s,a){dt.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Sn,dt),r=Sn.prototype,r.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,$e(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qe(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,$e(this)),this.g&&(this.readyState=3,$e(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;mi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function mi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?qe(this):$e(this),this.readyState==3&&mi(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,qe(this))},r.Qa=function(s){this.g&&(this.response=s,qe(this))},r.ga=function(){this.g&&qe(this)};function qe(s){s.readyState=4,s.l=null,s.j=null,s.v=null,$e(s)}r.setRequestHeader=function(s,a){this.u.append(s,a)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function $e(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Sn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function gi(s){let a="";return Q(s,function(l,d){a+=d,a+=":",a+=l,a+=`\r
`}),a}function wr(s,a,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=gi(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):Y(s,a,l))}function Z(s){dt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Z,dt);var ku=/^https?$/i,Lu=["POST","PUT"];r=Z.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,a,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gr.g(),this.v=this.o?zs(this.o):zs(gr),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(R){_i(this,R);return}if(s=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var T in d)l.set(T,d[T]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())l.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),T=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Lu,a,void 0))||d||T||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,P]of l)this.g.setRequestHeader(R,P);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ei(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){_i(this,R)}};function _i(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,yi(s),bn(s)}function yi(s){s.A||(s.A=!0,yt(s,"complete"),yt(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,yt(this,"complete"),yt(this,"abort"),bn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bn(this,!0)),Z.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?vi(this):this.bb())},r.bb=function(){vi(this)};function vi(s){if(s.h&&typeof u<"u"&&(!s.v[1]||kt(s)!=4||s.Z()!=2)){if(s.u&&kt(s)==4)Us(s.Ea,0,s);else if(yt(s,"readystatechange"),kt(s)==4){s.h=!1;try{const P=s.Z();t:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var d;if(d=P===0){var T=String(s.D).match(li)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),d=!ku.test(T?T.toLowerCase():"")}l=d}if(l)yt(s,"complete"),yt(s,"success");else{s.m=6;try{var R=2<kt(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",yi(s)}}finally{bn(s)}}}}function bn(s,a){if(s.g){Ei(s);const l=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||yt(s,"ready");try{l.onreadystatechange=d}catch{}}}function Ei(s){s.I&&(c.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function kt(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<kt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),fu(a)}};function Ti(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Mu(s){const a={};s=(s.g&&2<=kt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(G(s[d]))continue;var l=E(s[d]);const T=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=a[T]||[];a[T]=R,R.push(l)}v(a,function(d){return d.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ke(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function Ii(s){this.Aa=0,this.i=[],this.j=new Oe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ke("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ke("baseRetryDelayMs",5e3,s),this.cb=Ke("retryDelaySeedMs",1e4,s),this.Wa=Ke("forwardChannelMaxRetries",2,s),this.wa=Ke("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new ri(s&&s.concurrentRequestLimit),this.Da=new xu,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ii.prototype,r.la=8,r.G=1,r.connect=function(s,a,l,d){vt(0),this.W=s,this.H=a||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=Di(this,null,this.W),Pn(this)};function Ar(s){if(wi(s),s.G==3){var a=s.U++,l=Nt(s.I);if(Y(l,"SID",s.K),Y(l,"RID",a),Y(l,"TYPE","terminate"),ze(s,l),a=new Bt(s,s.j,a),a.L=2,a.v=An(Nt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=xi(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Tn(a)}Vi(s)}function Cn(s){s.g&&(Sr(s),s.g.cancel(),s.g=null)}function wi(s){Cn(s),s.u&&(c.clearTimeout(s.u),s.u=null),Vn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function Pn(s){if(!si(s.h)&&!s.s){s.s=!0;var a=s.Ga;Ve||Ms(),De||(Ve(),De=!0),sr.add(a,s),s.B=0}}function Ou(s,a){return ii(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Me(A(s.Ga,s,a),Pi(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new Bt(this,this.j,s);let R=this.o;if(this.S&&(R?(R=p(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(T.H=R,R=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Ri(this,T,a),l=Nt(this.I),Y(l,"RID",s),Y(l,"CVER",22),this.D&&Y(l,"X-HTTP-Session-Id",this.D),ze(this,l),R&&(this.O?a="headers="+encodeURIComponent(String(gi(R)))+"&"+a:this.m&&wr(l,this.m,R)),Ir(this.h,T),this.Ua&&Y(l,"TYPE","init"),this.P?(Y(l,"$req",a),Y(l,"SID","null"),T.T=!0,yr(T,l,null)):yr(T,l,a),this.G=2}}else this.G==3&&(s?Ai(this,s):this.i.length==0||si(this.h)||Ai(this))};function Ai(s,a){var l;a?l=a.l:l=s.U++;const d=Nt(s.I);Y(d,"SID",s.K),Y(d,"RID",l),Y(d,"AID",s.T),ze(s,d),s.m&&s.o&&wr(d,s.m,s.o),l=new Bt(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Ri(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Ir(s.h,l),yr(l,d,a)}function ze(s,a){s.H&&Q(s.H,function(l,d){Y(a,d,l)}),s.l&&ui({},function(l,d){Y(a,d,l)})}function Ri(s,a,l){l=Math.min(s.i.length,l);var d=s.l?A(s.l.Na,s.l,s):null;t:{var T=s.i;let R=-1;for(;;){const P=["count="+l];R==-1?0<l?(R=T[0].g,P.push("ofs="+R)):R=0:P.push("ofs="+R);let W=!0;for(let at=0;at<l;at++){let $=T[at].g;const ft=T[at].map;if($-=R,0>$)R=Math.max(0,T[at].g-100),W=!1;else try{Nu(ft,P,"req"+$+"_")}catch{d&&d(ft)}}if(W){d=P.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,d}function Si(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Ve||Ms(),De||(Ve(),De=!0),sr.add(a,s),s.v=0}}function Rr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Me(A(s.Fa,s),Pi(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,bi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Me(A(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),Cn(this),bi(this))};function Sr(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function bi(s){s.g=new Bt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Nt(s.qa);Y(a,"RID","rpc"),Y(a,"SID",s.K),Y(a,"AID",s.T),Y(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&Y(a,"TO",s.ja),Y(a,"TYPE","xmlhttp"),ze(s,a),s.m&&s.o&&wr(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=An(Nt(a)),l.m=null,l.P=!0,ti(l,s)}r.Za=function(){this.C!=null&&(this.C=null,Cn(this),Rr(this),vt(19))};function Vn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function Ci(s,a){var l=null;if(s.g==a){Vn(s),Sr(s),s.g=null;var d=2}else if(Tr(s.h,a))l=a.D,oi(s.h,a),d=1;else return;if(s.G!=0){if(a.o)if(d==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var T=s.B;d=yn(),yt(d,new Ys(d,l)),Pn(s)}else Si(s);else if(T=a.s,T==3||T==0&&0<a.X||!(d==1&&Ou(s,a)||d==2&&Rr(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),T){case 1:Jt(s,5);break;case 4:Jt(s,10);break;case 3:Jt(s,6);break;default:Jt(s,2)}}}function Pi(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function Jt(s,a){if(s.j.info("Error code "+a),a==2){var l=A(s.fb,s),d=s.Xa;const T=!d;d=new Xt(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||In(d,"https"),An(d),T?Vu(d.toString(),l):Du(d.toString(),l)}else vt(2);s.G=0,s.l&&s.l.sa(a),Vi(s),wi(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Vi(s){if(s.G=0,s.ka=[],s.l){const a=ai(s.h);(a.length!=0||s.i.length!=0)&&(x(s.ka,a),x(s.ka,s.i),s.h.i.length=0,N(s.i),s.i.length=0),s.l.ra()}}function Di(s,a,l){var d=l instanceof Xt?Nt(l):new Xt(l);if(d.g!="")a&&(d.g=a+"."+d.g),wn(d,d.s);else{var T=c.location;d=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var R=new Xt(null);d&&In(R,d),a&&(R.g=a),T&&wn(R,T),l&&(R.l=l),d=R}return l=s.D,a=s.ya,l&&a&&Y(d,l,a),Y(d,"VER",s.la),ze(s,d),d}function xi(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new Z(new Rn({eb:l})):new Z(s.pa),a.Ha(s.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ni(){}r=Ni.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Dn(){}Dn.prototype.g=function(s,a){return new wt(s,a)};function wt(s,a){dt.call(this),this.g=new Ii(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!G(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!G(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new ce(this)}V(wt,dt),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){Ar(this.g)},wt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=dr(s),s=l);a.i.push(new Eu(a.Ya++,s)),a.G==3&&Pn(a)},wt.prototype.N=function(){this.g.l=null,delete this.j,Ar(this.g),delete this.g,wt.aa.N.call(this)};function ki(s){pr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}V(ki,pr);function Li(){mr.call(this),this.status=1}V(Li,mr);function ce(s){this.g=s}V(ce,Ni),ce.prototype.ua=function(){yt(this.g,"a")},ce.prototype.ta=function(s){yt(this.g,new ki(s))},ce.prototype.sa=function(s){yt(this.g,new Li)},ce.prototype.ra=function(){yt(this.g,"b")},Dn.prototype.createWebChannel=Dn.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,ua=function(){return new Dn},aa=function(){return yn()},oa=Wt,Hr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vn.NO_ERROR=0,vn.TIMEOUT=8,vn.HTTP_ERROR=6,On=vn,Xs.COMPLETE="complete",ia=Xs,Gs.EventType=ke,ke.OPEN="a",ke.CLOSE="b",ke.ERROR="c",ke.MESSAGE="d",dt.prototype.listen=dt.prototype.K,He=Gs,Z.prototype.listenOnce=Z.prototype.L,Z.prototype.getLastError=Z.prototype.Ka,Z.prototype.getLastErrorCode=Z.prototype.Ba,Z.prototype.getStatus=Z.prototype.Z,Z.prototype.getResponseJson=Z.prototype.Oa,Z.prototype.getResponseText=Z.prototype.oa,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Ha,sa=Z}).apply(typeof Nn<"u"?Nn:typeof self<"u"?self:typeof window<"u"?window:{});const eo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Se="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=new Xo("@firebase/firestore");function Ge(){return ie.logLevel}function k(r,...t){if(ie.logLevel<=U.DEBUG){const e=t.map(ds);ie.debug(`Firestore (${Se}): ${r}`,...e)}}function Ot(r,...t){if(ie.logLevel<=U.ERROR){const e=t.map(ds);ie.error(`Firestore (${Se}): ${r}`,...e)}}function ve(r,...t){if(ie.logLevel<=U.WARN){const e=t.map(ds);ie.warn(`Firestore (${Se}): ${r}`,...e)}}function ds(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(r="Unexpected state"){const t=`FIRESTORE (${Se}) INTERNAL ASSERTION FAILED: `+r;throw Ot(t),new Error(t)}function et(r,t){r||F()}function j(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Re{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Mc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(gt.UNAUTHENTICATED)))}shutdown(){}}class Oc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Fc{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){et(this.o===void 0);let n=this.i;const i=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new re;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new re,t.enqueueRetryable((()=>i(this.currentUser)))};const u=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await i(this.currentUser)}))},c=h=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((h=>c(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new re)}}),0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((n=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(et(typeof n.accessToken=="string"),new la(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return et(t===null||typeof t=="string"),new gt(t)}}class Bc{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class jc{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Bc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(gt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Uc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qc{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){et(this.o===void 0);const n=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,k("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>n(o)))};const i=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(et(typeof e.token=="string"),this.R=e.token,new Uc(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=$c(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%t.length))}return n}}function K(r,t){return r<t?-1:r>t?1:0}function Ee(r,t,e){return r.length===t.length&&r.every(((n,i)=>e(n,t[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new L(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new L(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new L(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return It.fromMillis(Date.now())}static fromDate(t){return It.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new It(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?K(this.nanoseconds,t.nanoseconds):K(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.timestamp=t}static fromTimestamp(t){return new O(t)}static min(){return new O(new It(0,0))}static max(){return new O(new It(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t,e,n){e===void 0?e=0:e>t.length&&F(),n===void 0?n=t.length-e:n>t.length-e&&F(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return sn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof sn?t.forEach((n=>{e.push(n)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=t.get(i),u=e.get(i);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class tt extends sn{construct(t,e,n){return new tt(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new L(D.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((i=>i.length>0)))}return new tt(e)}static emptyPath(){return new tt([])}}const Kc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends sn{construct(t,e,n){return new Et(t,e,n)}static isValidIdentifier(t){return Kc.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Et(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new L(D.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new L(D.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new L(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,i+=2}else c==="`"?(u=!u,i++):c!=="."||u?(n+=c,i++):(o(),i++)}if(o(),u)throw new L(D.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Et(e)}static emptyPath(){return new Et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(tt.fromString(t))}static fromName(t){return new M(tt.fromString(t).popFirst(5))}static empty(){return new M(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return tt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new tt(t.slice()))}}function zc(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=O.fromTimestamp(n===1e9?new It(e+1,0):new It(e,n));return new Gt(i,M.empty(),t)}function Gc(r){return new Gt(r.readTime,r.key,-1)}class Gt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Gt(O.min(),M.empty(),-1)}static max(){return new Gt(O.max(),M.empty(),-1)}}function Hc(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(r.documentKey,t.documentKey),e!==0?e:K(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(r){if(r.code!==D.FAILED_PRECONDITION||r.message!==Qc)throw r;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new b(((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof b?e:b.resolve(e)}catch(e){return b.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):b.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):b.reject(e)}static resolve(t){return new b(((e,n)=>{e(t)}))}static reject(t){return new b(((e,n)=>{n(t)}))}static waitFor(t){return new b(((e,n)=>{let i=0,o=0,u=!1;t.forEach((c=>{++i,c.next((()=>{++o,u&&o===i&&e()}),(h=>n(h)))})),u=!0,o===i&&e()}))}static or(t){let e=b.resolve(!1);for(const n of t)e=e.next((i=>i?b.resolve(i):n()));return e}static forEach(t,e){const n=[];return t.forEach(((i,o)=>{n.push(e.call(this,i,o))})),this.waitFor(n)}static mapArray(t,e){return new b(((n,i)=>{const o=t.length,u=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next((m=>{u[f]=m,++c,c===o&&n(u)}),(m=>i(m)))}}))}static doWhile(t,e){return new b(((n,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):n()};o()}))}}function Yc(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function cn(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ps.oe=-1;function Wn(r){return r==null}function Qr(r){return r===0&&1/r==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Yn(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Xc(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new rt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new kn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new kn(this.root,t,this.comparator,!1)}getReverseIterator(){return new kn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new kn(this.root,t,this.comparator,!0)}}class kn{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??ut.RED,this.left=i??ut.EMPTY,this.right=o??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new ut(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ut.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const t=this.left.check();if(t!==this.right.check())throw F();return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,n,i,o){return this}insert(t,e,n){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.comparator=t,this.data=new rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ro(this.data.getIterator())}getIteratorFrom(t){return new ro(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((n=>{e=e.add(n)})),e}isEqual(t){if(!(t instanceof lt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new lt(this.comparator);return e.data=t,e}}class ro{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.fields=t,t.sort(Et.comparator)}static empty(){return new qt([])}unionWith(t){let e=new lt(Et.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new qt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ee(this.fields,t.fields,((e,n)=>e.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ha("Invalid base64 string: "+o):o}})(t);return new ct(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o})(t);return new ct(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return K(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const Jc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ht(r){if(et(!!r),typeof r=="string"){let t=0;const e=Jc.exec(r);if(et(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:nt(r.seconds),nanos:nt(r.nanos)}}function nt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function oe(r){return typeof r=="string"?ct.fromBase64String(r):ct.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function gs(r){const t=r.mapValue.fields.__previous_value__;return ms(t)?gs(t):t}function on(r){const t=Ht(r.mapValue.fields.__local_write_time__.timestampValue);return new It(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(t,e,n,i,o,u,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}class an{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new an("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof an&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln={mapValue:{}};function ae(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ms(r)?4:eh(r)?9007199254740991:th(r)?10:11:F()}function Vt(r,t){if(r===t)return!0;const e=ae(r);if(e!==ae(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return on(r).isEqual(on(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Ht(i.timestampValue),c=Ht(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(i,o){return oe(i.bytesValue).isEqual(oe(o.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(i,o){return nt(i.geoPointValue.latitude)===nt(o.geoPointValue.latitude)&&nt(i.geoPointValue.longitude)===nt(o.geoPointValue.longitude)})(r,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return nt(i.integerValue)===nt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=nt(i.doubleValue),c=nt(o.doubleValue);return u===c?Qr(u)===Qr(c):isNaN(u)&&isNaN(c)}return!1})(r,t);case 9:return Ee(r.arrayValue.values||[],t.arrayValue.values||[],Vt);case 10:case 11:return(function(i,o){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(no(u)!==no(c))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(c[h]===void 0||!Vt(u[h],c[h])))return!1;return!0})(r,t);default:return F()}}function un(r,t){return(r.values||[]).find((e=>Vt(e,t)))!==void 0}function Te(r,t){if(r===t)return 0;const e=ae(r),n=ae(t);if(e!==n)return K(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return K(r.booleanValue,t.booleanValue);case 2:return(function(o,u){const c=nt(o.integerValue||o.doubleValue),h=nt(u.integerValue||u.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1})(r,t);case 3:return so(r.timestampValue,t.timestampValue);case 4:return so(on(r),on(t));case 5:return K(r.stringValue,t.stringValue);case 6:return(function(o,u){const c=oe(o),h=oe(u);return c.compareTo(h)})(r.bytesValue,t.bytesValue);case 7:return(function(o,u){const c=o.split("/"),h=u.split("/");for(let f=0;f<c.length&&f<h.length;f++){const m=K(c[f],h[f]);if(m!==0)return m}return K(c.length,h.length)})(r.referenceValue,t.referenceValue);case 8:return(function(o,u){const c=K(nt(o.latitude),nt(u.latitude));return c!==0?c:K(nt(o.longitude),nt(u.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return io(r.arrayValue,t.arrayValue);case 10:return(function(o,u){var c,h,f,m;const w=o.fields||{},A=u.fields||{},S=(c=w.value)===null||c===void 0?void 0:c.arrayValue,V=(h=A.value)===null||h===void 0?void 0:h.arrayValue,N=K(((f=S?.values)===null||f===void 0?void 0:f.length)||0,((m=V?.values)===null||m===void 0?void 0:m.length)||0);return N!==0?N:io(S,V)})(r.mapValue,t.mapValue);case 11:return(function(o,u){if(o===Ln.mapValue&&u===Ln.mapValue)return 0;if(o===Ln.mapValue)return 1;if(u===Ln.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=u.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let w=0;w<h.length&&w<m.length;++w){const A=K(h[w],m[w]);if(A!==0)return A;const S=Te(c[h[w]],f[m[w]]);if(S!==0)return S}return K(h.length,m.length)})(r.mapValue,t.mapValue);default:throw F()}}function so(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return K(r,t);const e=Ht(r),n=Ht(t),i=K(e.seconds,n.seconds);return i!==0?i:K(e.nanos,n.nanos)}function io(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=Te(e[i],n[i]);if(o)return o}return K(e.length,n.length)}function Ie(r){return Wr(r)}function Wr(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(e){const n=Ht(e);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(e){return oe(e).toBase64()})(r.bytesValue):"referenceValue"in r?(function(e){return M.fromName(e).toString()})(r.referenceValue):"geoPointValue"in r?(function(e){return`geo(${e.latitude},${e.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=Wr(o);return n+"]"})(r.arrayValue):"mapValue"in r?(function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of n)o?o=!1:i+=",",i+=`${u}:${Wr(e.fields[u])}`;return i+"}"})(r.mapValue):F()}function Yr(r){return!!r&&"integerValue"in r}function _s(r){return!!r&&"arrayValue"in r}function oo(r){return!!r&&"nullValue"in r}function ao(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Mr(r){return!!r&&"mapValue"in r}function th(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Ye(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Yn(r.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Ye(n))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ye(r.arrayValue.values[e]);return t}return Object.assign({},r)}function eh(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.value=t}static empty(){return new Ct({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Mr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ye(e)}setAll(t){let e=Et.emptyPath(),n={},i=[];t.forEach(((u,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,n,i),n={},i=[],e=c.popLast()}u?n[c.lastSegment()]=Ye(u):i.push(c.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());Mr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Vt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Mr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Yn(e,((i,o)=>t[i]=o));for(const i of n)delete t[i]}clone(){return new Ct(Ye(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e,n,i,o,u,c){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new _t(t,0,O.min(),O.min(),O.min(),Ct.empty(),0)}static newFoundDocument(t,e,n,i){return new _t(t,1,e,O.min(),n,i,0)}static newNoDocument(t,e){return new _t(t,2,e,O.min(),O.min(),Ct.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,O.min(),O.min(),Ct.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(O.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,e){this.position=t,this.inclusive=e}}function uo(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],u=r.position[i];if(o.field.isKeyField()?n=M.comparator(M.fromName(u.referenceValue),e.key):n=Te(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function lo(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Vt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e="asc"){this.field=t,this.dir=e}}function nh(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{}class it extends da{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new sh(t,e,n):e==="array-contains"?new ah(t,n):e==="in"?new uh(t,n):e==="not-in"?new lh(t,n):e==="array-contains-any"?new ch(t,n):new it(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new ih(t,n):new oh(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Te(e,this.value)):e!==null&&ae(this.value)===ae(e)&&this.matchesComparison(Te(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dt extends da{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Dt(t,e)}matches(t){return fa(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function fa(r){return r.op==="and"}function pa(r){return rh(r)&&fa(r)}function rh(r){for(const t of r.filters)if(t instanceof Dt)return!1;return!0}function Xr(r){if(r instanceof it)return r.field.canonicalString()+r.op.toString()+Ie(r.value);if(pa(r))return r.filters.map((t=>Xr(t))).join(",");{const t=r.filters.map((e=>Xr(e))).join(",");return`${r.op}(${t})`}}function ma(r,t){return r instanceof it?(function(n,i){return i instanceof it&&n.op===i.op&&n.field.isEqual(i.field)&&Vt(n.value,i.value)})(r,t):r instanceof Dt?(function(n,i){return i instanceof Dt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce(((o,u,c)=>o&&ma(u,i.filters[c])),!0):!1})(r,t):void F()}function ga(r){return r instanceof it?(function(e){return`${e.field.canonicalString()} ${e.op} ${Ie(e.value)}`})(r):r instanceof Dt?(function(e){return e.op.toString()+" {"+e.getFilters().map(ga).join(" ,")+"}"})(r):"Filter"}class sh extends it{constructor(t,e,n){super(t,e,n),this.key=M.fromName(n.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class ih extends it{constructor(t,e){super(t,"in",e),this.keys=_a("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class oh extends it{constructor(t,e){super(t,"not-in",e),this.keys=_a("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function _a(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((n=>M.fromName(n.referenceValue)))}class ah extends it{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return _s(e)&&un(e.arrayValue,this.value)}}class uh extends it{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&un(this.value.arrayValue,e)}}class lh extends it{constructor(t,e){super(t,"not-in",e)}matches(t){if(un(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!un(this.value.arrayValue,e)}}class ch extends it{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!_s(e)||!e.arrayValue.values)&&e.arrayValue.values.some((n=>un(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,e=null,n=[],i=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=u,this.endAt=c,this.ue=null}}function co(r,t=null,e=[],n=[],i=null,o=null,u=null){return new hh(r,t,e,n,i,o,u)}function ys(r){const t=j(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((n=>Xr(n))).join(","),e+="|ob:",e+=t.orderBy.map((n=>(function(o){return o.field.canonicalString()+o.dir})(n))).join(","),Wn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((n=>Ie(n))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((n=>Ie(n))).join(",")),t.ue=e}return t.ue}function vs(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!nh(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!ma(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!lo(r.startAt,t.startAt)&&lo(r.endAt,t.endAt)}function Jr(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,e=null,n=[],i=[],o=null,u="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function dh(r,t,e,n,i,o,u,c){return new Xn(r,t,e,n,i,o,u,c)}function Es(r){return new Xn(r)}function ho(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function fh(r){return r.collectionGroup!==null}function Xe(r){const t=j(r);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new lt(Et.comparator);return u.filters.forEach((h=>{h.getFlattenedFilters().forEach((f=>{f.isInequality()&&(c=c.add(f.field))}))})),c})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new $n(o,n))})),e.has(Et.keyField().canonicalString())||t.ce.push(new $n(Et.keyField(),n))}return t.ce}function Pt(r){const t=j(r);return t.le||(t.le=ph(t,Xe(r))),t.le}function ph(r,t){if(r.limitType==="F")return co(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new $n(i.field,o)}));const e=r.endAt?new qn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new qn(r.startAt.position,r.startAt.inclusive):null;return co(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Zr(r,t,e){return new Xn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Jn(r,t){return vs(Pt(r),Pt(t))&&r.limitType===t.limitType}function ya(r){return`${ys(Pt(r))}|lt:${r.limitType}`}function de(r){return`Query(target=${(function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map((i=>ga(i))).join(", ")}]`),Wn(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map((i=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(i))).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((i=>Ie(i))).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((i=>Ie(i))).join(",")),`Target(${n})`})(Pt(r))}; limitType=${r.limitType})`}function Zn(r,t){return t.isFoundDocument()&&(function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):M.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)})(r,t)&&(function(n,i){for(const o of Xe(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(r,t)&&(function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0})(r,t)&&(function(n,i){return!(n.startAt&&!(function(u,c,h){const f=uo(u,c,h);return u.inclusive?f<=0:f<0})(n.startAt,Xe(n),i)||n.endAt&&!(function(u,c,h){const f=uo(u,c,h);return u.inclusive?f>=0:f>0})(n.endAt,Xe(n),i))})(r,t)}function mh(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function va(r){return(t,e)=>{let n=!1;for(const i of Xe(r)){const o=gh(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function gh(r,t,e){const n=r.field.isKeyField()?M.comparator(t.key,e.key):(function(o,u,c){const h=u.data.field(o),f=c.data.field(o);return h!==null&&f!==null?Te(h,f):F()})(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Yn(this.inner,((e,n)=>{for(const[i,o]of n)t(i,o)}))}isEmpty(){return Xc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=new rt(M.comparator);function Qt(){return _h}const Ea=new rt(M.comparator);function Qe(...r){let t=Ea;for(const e of r)t=t.insert(e.key,e);return t}function yh(r){let t=Ea;return r.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function ee(){return Je()}function Ta(){return Je()}function Je(){return new be((r=>r.toString()),((r,t)=>r.isEqual(t)))}const vh=new lt(M.comparator);function q(...r){let t=vh;for(const e of r)t=t.add(e);return t}const Eh=new lt(K);function Th(){return Eh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qr(t)?"-0":t}}function wh(r){return{integerValue:""+r}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(){this._=void 0}}function Ah(r,t,e){return r instanceof ts?(function(i,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ms(o)&&(o=gs(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}})(e,t):r instanceof Kn?Ia(r,t):r instanceof zn?wa(r,t):(function(i,o){const u=Sh(i,o),c=fo(u)+fo(i.Pe);return Yr(u)&&Yr(i.Pe)?wh(c):Ih(i.serializer,c)})(r,t)}function Rh(r,t,e){return r instanceof Kn?Ia(r,t):r instanceof zn?wa(r,t):e}function Sh(r,t){return r instanceof es?(function(n){return Yr(n)||(function(o){return!!o&&"doubleValue"in o})(n)})(t)?t:{integerValue:0}:null}class ts extends tr{}class Kn extends tr{constructor(t){super(),this.elements=t}}function Ia(r,t){const e=Aa(t);for(const n of r.elements)e.some((i=>Vt(i,n)))||e.push(n);return{arrayValue:{values:e}}}class zn extends tr{constructor(t){super(),this.elements=t}}function wa(r,t){let e=Aa(t);for(const n of r.elements)e=e.filter((i=>!Vt(i,n)));return{arrayValue:{values:e}}}class es extends tr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function fo(r){return nt(r.integerValue||r.doubleValue)}function Aa(r){return _s(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function bh(r,t){return r.field.isEqual(t.field)&&(function(n,i){return n instanceof Kn&&i instanceof Kn||n instanceof zn&&i instanceof zn?Ee(n.elements,i.elements,Vt):n instanceof es&&i instanceof es?Vt(n.Pe,i.Pe):n instanceof ts&&i instanceof ts})(r.transform,t.transform)}class se{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new se}static exists(t){return new se(void 0,t)}static updateTime(t){return new se(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Fn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Ts{}function Ra(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Ph(r.key,se.none()):new Is(r.key,r.data,se.none());{const e=r.data,n=Ct.empty();let i=new lt(Et.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),i=i.add(o)}return new er(r.key,n,new qt(i.toArray()),se.none())}}function Ch(r,t,e){r instanceof Is?(function(i,o,u){const c=i.value.clone(),h=mo(i.fieldTransforms,o,u.transformResults);c.setAll(h),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()})(r,t,e):r instanceof er?(function(i,o,u){if(!Fn(i.precondition,o))return void o.convertToUnknownDocument(u.version);const c=mo(i.fieldTransforms,o,u.transformResults),h=o.data;h.setAll(Sa(i)),h.setAll(c),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()})(r,t,e):(function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()})(0,t,e)}function Ze(r,t,e,n){return r instanceof Is?(function(o,u,c,h){if(!Fn(o.precondition,u))return c;const f=o.value.clone(),m=go(o.fieldTransforms,h,u);return f.setAll(m),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null})(r,t,e,n):r instanceof er?(function(o,u,c,h){if(!Fn(o.precondition,u))return c;const f=go(o.fieldTransforms,h,u),m=u.data;return m.setAll(Sa(o)),m.setAll(f),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((w=>w.field)))})(r,t,e,n):(function(o,u,c){return Fn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c})(r,t,e)}function po(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Ee(n,i,((o,u)=>bh(o,u)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Is extends Ts{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class er extends Ts{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Sa(r){const t=new Map;return r.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}})),t}function mo(r,t,e){const n=new Map;et(r.length===e.length);for(let i=0;i<e.length;i++){const o=r[i],u=o.transform,c=t.data.field(o.field);n.set(o.field,Rh(u,c,e[i]))}return n}function go(r,t,e){const n=new Map;for(const i of r){const o=i.transform,u=e.data.field(i.field);n.set(i.field,Ah(o,u,t))}return n}class Ph extends Ts{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Ch(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ze(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ze(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ta();return this.mutations.forEach((i=>{const o=t.get(i.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(i.key)?null:c;const h=Ra(u,c);h!==null&&n.set(i.key,h),u.isValidDocument()||u.convertToNoDocument(O.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),q())}isEqual(t){return this.batchId===t.batchId&&Ee(this.mutations,t.mutations,((e,n)=>po(e,n)))&&Ee(this.baseMutations,t.baseMutations,((e,n)=>po(e,n)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st,B;function ba(r){if(r===void 0)return Ot("GRPC error has no .code"),D.UNKNOWN;switch(r){case st.OK:return D.OK;case st.CANCELLED:return D.CANCELLED;case st.UNKNOWN:return D.UNKNOWN;case st.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case st.INTERNAL:return D.INTERNAL;case st.UNAVAILABLE:return D.UNAVAILABLE;case st.UNAUTHENTICATED:return D.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case st.NOT_FOUND:return D.NOT_FOUND;case st.ALREADY_EXISTS:return D.ALREADY_EXISTS;case st.PERMISSION_DENIED:return D.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case st.ABORTED:return D.ABORTED;case st.OUT_OF_RANGE:return D.OUT_OF_RANGE;case st.UNIMPLEMENTED:return D.UNIMPLEMENTED;case st.DATA_LOSS:return D.DATA_LOSS;default:return F()}}(B=st||(st={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=new ne([4294967295,4294967295],0);function _o(r){const t=Nh().encode(r),e=new ra;return e.update(t),new Uint8Array(e.digest())}function yo(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ne([e,n],0),new ne([i,o],0)]}class ws{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new We(`Invalid padding: ${e}`);if(n<0)throw new We(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new We(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new We(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=ne.fromNumber(this.Ie)}Ee(t,e,n){let i=t.add(e.multiply(ne.fromNumber(n)));return i.compare(kh)===1&&(i=new ne([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=_o(t),[n,i]=yo(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,i,o);if(!this.de(u))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new ws(o,i,e);return n.forEach((c=>u.insert(c))),u}insert(t){if(this.Ie===0)return;const e=_o(t),[n,i]=yo(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,i,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class We extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,hn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new nr(O.min(),i,new rt(K),Qt(),q())}}class hn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new hn(n,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t,e,n,i){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=i}}class Ca{constructor(t,e){this.targetId=t,this.me=e}}class Pa{constructor(t,e,n=ct.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class vo{constructor(){this.fe=0,this.ge=To(),this.pe=ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=q(),e=q(),n=q();return this.ge.forEach(((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:F()}})),new hn(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=To()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,et(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Lh{constructor(t){this.Le=t,this.Be=new Map,this.ke=Qt(),this.qe=Eo(),this.Qe=new rt(K)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,(e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:F()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach(((n,i)=>{this.ze(i)&&e(i)}))}He(t){const e=t.targetId,n=t.me.count,i=this.Je(e);if(i){const o=i.target;if(Jr(o))if(n===0){const u=new M(o.path);this.Ue(e,u,_t.newNoDocument(u,O.min()))}else et(n===1);else{const u=this.Ye(e);if(u!==n){const c=this.Ze(t),h=c?this.Xe(c,t,u):1;if(h!==0){this.je(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let u,c;try{u=oe(n).toUint8Array()}catch(h){if(h instanceof ha)return ve("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new ws(u,i,o)}catch(h){return ve(h instanceof We?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let i=0;return n.forEach((o=>{const u=this.Le.tt(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),i++)})),i}rt(t){const e=new Map;this.Be.forEach(((o,u)=>{const c=this.Je(u);if(c){if(o.current&&Jr(c.target)){const h=new M(c.target.path);this.ke.get(h)!==null||this.it(u,h)||this.Ue(u,h,_t.newNoDocument(h,t))}o.be&&(e.set(u,o.ve()),o.Ce())}}));let n=q();this.qe.forEach(((o,u)=>{let c=!0;u.forEachWhile((h=>{const f=this.Je(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(n=n.add(o))})),this.ke.forEach(((o,u)=>u.setReadTime(t)));const i=new nr(t,e,this.Qe,this.ke,n);return this.ke=Qt(),this.qe=Eo(),this.Qe=new rt(K),i}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new vo,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new lt(K),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||k("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new vo),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.Ue(t,e,null)}))}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Eo(){return new rt(M.comparator)}function To(){return new rt(M.comparator)}const Mh={asc:"ASCENDING",desc:"DESCENDING"},Oh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Fh={and:"AND",or:"OR"};class Bh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ns(r,t){return r.useProto3Json||Wn(t)?t:{value:t}}function jh(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Uh(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function ge(r){return et(!!r),O.fromTimestamp((function(e){const n=Ht(e);return new It(n.seconds,n.nanos)})(r))}function qh(r,t){return rs(r,t).canonicalString()}function rs(r,t){const e=(function(i){return new tt(["projects",i.projectId,"databases",i.database])})(r).child("documents");return t===void 0?e:e.child(t)}function Va(r){const t=tt.fromString(r);return et(La(t)),t}function Or(r,t){const e=Va(t);if(e.get(1)!==r.databaseId.projectId)throw new L(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new L(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new M(xa(e))}function Da(r,t){return qh(r.databaseId,t)}function $h(r){const t=Va(r);return t.length===4?tt.emptyPath():xa(t)}function Io(r){return new tt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function xa(r){return et(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Kh(r,t){let e;if("targetChange"in t){t.targetChange;const n=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:F()})(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=(function(f,m){return f.useProto3Json?(et(m===void 0||typeof m=="string"),ct.fromBase64String(m||"")):(et(m===void 0||m instanceof Buffer||m instanceof Uint8Array),ct.fromUint8Array(m||new Uint8Array))})(r,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&(function(f){const m=f.code===void 0?D.UNKNOWN:ba(f.code);return new L(m,f.message||"")})(u);e=new Pa(n,i,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=Or(r,n.document.name),o=ge(n.document.updateTime),u=n.document.createTime?ge(n.document.createTime):O.min(),c=new Ct({mapValue:{fields:n.document.fields}}),h=_t.newFoundDocument(i,o,u,c),f=n.targetIds||[],m=n.removedTargetIds||[];e=new Bn(f,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=Or(r,n.document),o=n.readTime?ge(n.readTime):O.min(),u=_t.newNoDocument(i,o),c=n.removedTargetIds||[];e=new Bn([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=Or(r,n.document),o=n.removedTargetIds||[];e=new Bn([],o,i,null)}else{if(!("filter"in t))return F();{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,u=new xh(i,o),c=n.targetId;e=new Ca(c,u)}}return e}function zh(r,t){return{documents:[Da(r,t.path)]}}function Gh(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Da(r,i);const o=(function(f){if(f.length!==0)return ka(Dt.create(f,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const u=(function(f){if(f.length!==0)return f.map((m=>(function(A){return{field:fe(A.field),direction:Wh(A.dir)}})(m)))})(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=ns(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(t.endAt)),{_t:e,parent:i}}function Hh(r){let t=$h(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){et(n===1);const m=e.from[0];m.allDescendants?i=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=(function(w){const A=Na(w);return A instanceof Dt&&pa(A)?A.getFilters():[A]})(e.where));let u=[];e.orderBy&&(u=(function(w){return w.map((A=>(function(V){return new $n(pe(V.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(A)))})(e.orderBy));let c=null;e.limit&&(c=(function(w){let A;return A=typeof w=="object"?w.value:w,Wn(A)?null:A})(e.limit));let h=null;e.startAt&&(h=(function(w){const A=!!w.before,S=w.values||[];return new qn(S,A)})(e.startAt));let f=null;return e.endAt&&(f=(function(w){const A=!w.before,S=w.values||[];return new qn(S,A)})(e.endAt)),dh(t,i,u,o,c,"F",h,f)}function Qh(r,t){const e=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Na(r){return r.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=pe(e.unaryFilter.field);return it.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=pe(e.unaryFilter.field);return it.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=pe(e.unaryFilter.field);return it.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=pe(e.unaryFilter.field);return it.create(u,"!=",{nullValue:"NULL_VALUE"});default:return F()}})(r):r.fieldFilter!==void 0?(function(e){return it.create(pe(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}})(e.fieldFilter.op),e.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(e){return Dt.create(e.compositeFilter.filters.map((n=>Na(n))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F()}})(e.compositeFilter.op))})(r):F()}function Wh(r){return Mh[r]}function Yh(r){return Oh[r]}function Xh(r){return Fh[r]}function fe(r){return{fieldPath:r.canonicalString()}}function pe(r){return Et.fromServerFormat(r.fieldPath)}function ka(r){return r instanceof it?(function(e){if(e.op==="=="){if(ao(e.value))return{unaryFilter:{field:fe(e.field),op:"IS_NAN"}};if(oo(e.value))return{unaryFilter:{field:fe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ao(e.value))return{unaryFilter:{field:fe(e.field),op:"IS_NOT_NAN"}};if(oo(e.value))return{unaryFilter:{field:fe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fe(e.field),op:Yh(e.op),value:e.value}}})(r):r instanceof Dt?(function(e){const n=e.getFilters().map((i=>ka(i)));return n.length===1?n[0]:{compositeFilter:{op:Xh(e.op),filters:n}}})(r):F()}function La(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t,e,n,i,o=O.min(),u=O.min(),c=ct.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new $t(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(t){this.ct=t}}function Zh(r){const t=Hh({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Zr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){this.un=new ed}addToCollectionParentIndex(t,e){return this.un.add(e),b.resolve()}getCollectionParents(t,e){return b.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return b.resolve()}deleteFieldIndex(t,e){return b.resolve()}deleteAllFieldIndexes(t){return b.resolve()}createTargetIndexes(t,e){return b.resolve()}getDocumentsMatchingTarget(t,e){return b.resolve(null)}getIndexType(t,e){return b.resolve(0)}getFieldIndexes(t,e){return b.resolve([])}getNextCollectionGroupToUpdate(t){return b.resolve(null)}getMinOffset(t,e){return b.resolve(Gt.min())}getMinOffsetFromCollectionGroup(t,e){return b.resolve(Gt.min())}updateCollectionGroup(t,e,n){return b.resolve()}updateIndexEntries(t,e){return b.resolve()}}class ed{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new lt(tt.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new lt(tt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new we(0)}static kn(){return new we(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(){this.changes=new be((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?b.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(n!==null&&Ze(n.mutation,i,qt.empty(),It.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.getLocalViewOfDocuments(t,n,q()).next((()=>n))))}getLocalViewOfDocuments(t,e,n=q()){const i=ee();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((o=>{let u=Qe();return o.forEach(((c,h)=>{u=u.insert(c,h.overlayedDocument)})),u}))))}getOverlayedDocuments(t,e){const n=ee();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,q())))}populateOverlays(t,e,n){const i=[];return n.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((u,c)=>{e.set(u,c)}))}))}computeViews(t,e,n,i){let o=Qt();const u=Je(),c=(function(){return Je()})();return e.forEach(((h,f)=>{const m=n.get(f.key);i.has(f.key)&&(m===void 0||m.mutation instanceof er)?o=o.insert(f.key,f):m!==void 0?(u.set(f.key,m.mutation.getFieldMask()),Ze(m.mutation,f,m.mutation.getFieldMask(),It.now())):u.set(f.key,qt.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((f,m)=>u.set(f,m))),e.forEach(((f,m)=>{var w;return c.set(f,new rd(m,(w=u.get(f))!==null&&w!==void 0?w:null))})),c)))}recalculateAndSaveOverlays(t,e){const n=Je();let i=new rt(((u,c)=>u-c)),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((u=>{for(const c of u)c.keys().forEach((h=>{const f=e.get(h);if(f===null)return;let m=n.get(h)||qt.empty();m=c.applyToLocalView(f,m),n.set(h,m);const w=(i.get(c.batchId)||q()).add(h);i=i.insert(c.batchId,w)}))})).next((()=>{const u=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,m=h.value,w=Ta();m.forEach((A=>{if(!o.has(A)){const S=Ra(e.get(A),n.get(A));S!==null&&w.set(A,S),o=o.add(A)}})),u.push(this.documentOverlayCache.saveOverlays(t,f,w))}return b.waitFor(u)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.recalculateAndSaveOverlays(t,n)))}getDocumentsMatchingQuery(t,e,n,i){return(function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):fh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):b.resolve(ee());let c=-1,h=o;return u.next((f=>b.forEach(f,((m,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),o.get(m)?b.resolve():this.remoteDocumentCache.getEntry(t,m).next((A=>{h=h.insert(m,A)}))))).next((()=>this.populateOverlays(t,f,o))).next((()=>this.computeViews(t,h,f,q()))).next((m=>({batchId:c,changes:yh(m)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next((n=>{let i=Qe();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let u=Qe();return this.indexManager.getCollectionParents(t,o).next((c=>b.forEach(c,(h=>{const f=(function(w,A){return new Xn(A,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,i).next((m=>{m.forEach(((w,A)=>{u=u.insert(w,A)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i)))).next((u=>{o.forEach(((h,f)=>{const m=f.getKey();u.get(m)===null&&(u=u.insert(m,_t.newInvalidDocument(m)))}));let c=Qe();return u.forEach(((h,f)=>{const m=o.get(h);m!==void 0&&Ze(m.mutation,f,qt.empty(),It.now()),Zn(e,f)&&(c=c.insert(h,f))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return b.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:ge(i.createTime)}})(e)),b.resolve()}getNamedQuery(t,e){return b.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,(function(i){return{name:i.name,query:Zh(i.bundledQuery),readTime:ge(i.readTime)}})(e)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(){this.overlays=new rt(M.comparator),this.Ir=new Map}getOverlay(t,e){return b.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ee();return b.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&n.set(i,o)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((i,o)=>{this.ht(t,e,o)})),b.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Ir.get(n);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.Ir.delete(n)),b.resolve()}getOverlaysForCollection(t,e,n){const i=ee(),o=e.length+1,u=new M(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>n&&i.set(h.getKey(),h)}return b.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new rt(((f,m)=>f-m));const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let m=o.get(f.largestBatchId);m===null&&(m=ee(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const c=ee(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((f,m)=>c.set(f,m))),!(c.size()>=i)););return b.resolve(c)}ht(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const u=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new Dh(e,n));let o=this.Ir.get(e);o===void 0&&(o=q(),this.Ir.set(e,o)),this.Ir.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(t){return b.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.Tr=new lt(ot.Er),this.dr=new lt(ot.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new ot(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach((n=>this.addReference(n,e)))}removeReference(t,e){this.Vr(new ot(t,e))}mr(t,e){t.forEach((n=>this.removeReference(n,e)))}gr(t){const e=new M(new tt([])),n=new ot(e,t),i=new ot(e,t+1),o=[];return this.dr.forEachInRange([n,i],(u=>{this.Vr(u),o.push(u.key)})),o}pr(){this.Tr.forEach((t=>this.Vr(t)))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new M(new tt([])),n=new ot(e,t),i=new ot(e,t+1);let o=q();return this.dr.forEachInRange([n,i],(u=>{o=o.add(u.key)})),o}containsKey(t){const e=new ot(t,0),n=this.Tr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class ot{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return M.comparator(t.key,e.key)||K(t.wr,e.wr)}static Ar(t,e){return K(t.wr,e.wr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new lt(ot.Er)}checkEmpty(t){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Vh(o,e,n,i);this.mutationQueue.push(u);for(const c of i)this.br=this.br.add(new ot(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return b.resolve(u)}lookupMutationBatch(t,e){return b.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.vr(n),o=i<0?0:i;return b.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ot(e,0),i=new ot(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([n,i],(u=>{const c=this.Dr(u.wr);o.push(c)})),b.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new lt(K);return e.forEach((i=>{const o=new ot(i,0),u=new ot(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,u],(c=>{n=n.add(c.wr)}))})),b.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;M.isDocumentKey(o)||(o=o.child(""));const u=new ot(new M(o),0);let c=new lt(K);return this.br.forEachWhile((h=>{const f=h.key.path;return!!n.isPrefixOf(f)&&(f.length===i&&(c=c.add(h.wr)),!0)}),u),b.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach((n=>{const i=this.Dr(n);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){et(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return b.forEach(e.mutations,(i=>{const o=new ot(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.br=n}))}On(t){}containsKey(t,e){const n=new ot(e,0),i=this.br.firstAfterOrEqual(n);return b.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,b.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(t){this.Mr=t,this.docs=(function(){return new rt(M.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,u=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return b.resolve(n?n.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let n=Qt();return e.forEach((i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():_t.newInvalidDocument(i))})),b.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=Qt();const u=e.path,c=new M(u.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||Hc(Gc(m),n)<=0||(i.has(m.key)||Zn(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return b.resolve(o)}getAllFromCollectionGroup(t,e,n,i){F()}Or(t,e){return b.forEach(this.docs,(n=>e(n)))}newChangeBuffer(t){return new cd(this)}getSize(t){return b.resolve(this.size)}}class cd extends nd{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(n)})),b.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(t){this.persistence=t,this.Nr=new be((e=>ys(e)),vs),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.Lr=0,this.Br=new As,this.targetCount=0,this.kr=we.Bn()}forEachTarget(t,e){return this.Nr.forEach(((n,i)=>e(i))),b.resolve()}getLastRemoteSnapshotVersion(t){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return b.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),b.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new we(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,b.resolve()}updateTargetData(t,e){return this.Kn(e),b.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,b.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.Nr.forEach(((u,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.Nr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)})),b.waitFor(o).next((()=>i))}getTargetCount(t){return b.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return b.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),b.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((u=>{o.push(i.markPotentiallyOrphaned(t,u))})),b.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),b.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return b.resolve(n)}containsKey(t,e){return b.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t,e){this.qr={},this.overlays={},this.Qr=new ps(0),this.Kr=!1,this.Kr=!0,this.$r=new ad,this.referenceDelegate=t(this),this.Ur=new hd(this),this.indexManager=new td,this.remoteDocumentCache=(function(i){return new ld(i)})((n=>this.referenceDelegate.Wr(n))),this.serializer=new Jh(e),this.Gr=new id(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new od,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new ud(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){k("MemoryPersistence","Starting transaction:",t);const i=new fd(this.Qr.next());return this.referenceDelegate.zr(),n(i).next((o=>this.referenceDelegate.jr(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Hr(t,e){return b.or(Object.values(this.qr).map((n=>()=>n.containsKey(t,e))))}}class fd extends Wc{constructor(t){super(),this.currentSequenceNumber=t}}class Rs{constructor(t){this.persistence=t,this.Jr=new As,this.Yr=null}static Zr(t){return new Rs(t)}get Xr(){if(this.Yr)return this.Yr;throw F()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),b.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),b.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),b.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach((i=>this.Xr.add(i.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.Xr.add(o.toString())))})).next((()=>n.removeTargetData(t,e)))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Xr,(n=>{const i=M.fromPath(n);return this.ei(t,i).next((o=>{o||e.removeEntry(i,O.min())}))})).next((()=>(this.Yr=null,e.apply(t))))}updateLimboDocument(t,e){return this.ei(t,e).next((n=>{n?this.Xr.delete(e.toString()):this.Xr.add(e.toString())}))}Wr(t){return 0}ei(t,e){return b.or([()=>b.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=i}static Wi(t,e){let n=q(),i=q();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ss(t,e.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=(function(){return yl()?8:Yc(gl())>0?6:4})()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.Yi(t,e).next((u=>{o.result=u})).next((()=>{if(!o.result)return this.Zi(t,e,i,n).next((u=>{o.result=u}))})).next((()=>{if(o.result)return;const u=new pd;return this.Xi(t,e,u).next((c=>{if(o.result=c,this.zi)return this.es(t,e,u,c.size)}))})).next((()=>o.result))}es(t,e,n,i){return n.documentReadCount<this.ji?(Ge()<=U.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",de(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),b.resolve()):(Ge()<=U.DEBUG&&k("QueryEngine","Query:",de(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(Ge()<=U.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",de(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Pt(e))):b.resolve())}Yi(t,e){if(ho(e))return b.resolve(null);let n=Pt(e);return this.indexManager.getIndexType(t,n).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=Zr(e,null,"F"),n=Pt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((o=>{const u=q(...o);return this.Ji.getDocuments(t,u).next((c=>this.indexManager.getMinOffset(t,n).next((h=>{const f=this.ts(e,c);return this.ns(e,f,u,h.readTime)?this.Yi(t,Zr(e,null,"F")):this.rs(t,f,e,h)}))))})))))}Zi(t,e,n,i){return ho(e)||i.isEqual(O.min())?b.resolve(null):this.Ji.getDocuments(t,n).next((o=>{const u=this.ts(e,o);return this.ns(e,u,n,i)?b.resolve(null):(Ge()<=U.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),de(e)),this.rs(t,u,e,zc(i,-1)).next((c=>c)))}))}ts(t,e){let n=new lt(va(t));return e.forEach(((i,o)=>{Zn(t,o)&&(n=n.add(o))})),n}ns(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(t,e,n){return Ge()<=U.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",de(e)),this.Ji.getDocumentsMatchingQuery(t,e,Gt.min(),n)}rs(t,e,n,i){return this.Ji.getDocumentsMatchingQuery(t,n,i).next((o=>(e.forEach((u=>{o=o.insert(u.key,u)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(t,e,n,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new rt(K),this._s=new be((o=>ys(o)),vs),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new sd(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.os)))}}function _d(r,t,e,n){return new gd(r,t,e,n)}async function Ma(r,t){const e=j(r);return await e.persistence.runTransaction("Handle user change","readonly",(n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next((o=>(i=o,e.ls(t),e.mutationQueue.getAllMutationBatches(n)))).next((o=>{const u=[],c=[];let h=q();for(const f of i){u.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){c.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(n,h).next((f=>({hs:f,removedBatchIds:u,addedBatchIds:c})))}))}))}function Oa(r){const t=j(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ur.getLastRemoteSnapshotVersion(e)))}function yd(r,t){const e=j(r),n=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const u=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const c=[];t.targetChanges.forEach(((m,w)=>{const A=i.get(w);if(!A)return;c.push(e.Ur.removeMatchingKeys(o,m.removedDocuments,w).next((()=>e.Ur.addMatchingKeys(o,m.addedDocuments,w))));let S=A.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?S=S.withResumeToken(ct.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,n)),i=i.insert(w,S),(function(N,x,z){return N.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(A,S,m)&&c.push(e.Ur.updateTargetData(o,S))}));let h=Qt(),f=q();if(t.documentUpdates.forEach((m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))})),c.push(vd(o,u,t.documentUpdates).next((m=>{h=m.Ps,f=m.Is}))),!n.isEqual(O.min())){const m=e.Ur.getLastRemoteSnapshotVersion(o).next((w=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,n)));c.push(m)}return b.waitFor(c).next((()=>u.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,f))).next((()=>h))})).then((o=>(e.os=i,o)))}function vd(r,t,e){let n=q(),i=q();return e.forEach((o=>n=n.add(o))),t.getEntries(r,n).next((o=>{let u=Qt();return e.forEach(((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(O.min())?(t.removeEntry(c,h.readTime),u=u.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),u=u.insert(c,h)):k("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)})),{Ps:u,Is:i}}))}function Ed(r,t){const e=j(r);return e.persistence.runTransaction("Allocate target","readwrite",(n=>{let i;return e.Ur.getTargetData(n,t).next((o=>o?(i=o,b.resolve(i)):e.Ur.allocateTargetId(n).next((u=>(i=new $t(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Ur.addTargetData(n,i).next((()=>i)))))))})).then((n=>{const i=e.os.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(n.targetId,n),e._s.set(t,n.targetId)),n}))}async function ss(r,t,e){const n=j(r),i=n.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,(u=>n.persistence.referenceDelegate.removeTarget(u,i)))}catch(u){if(!cn(u))throw u;k("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}n.os=n.os.remove(t),n._s.delete(i.target)}function wo(r,t,e){const n=j(r);let i=O.min(),o=q();return n.persistence.runTransaction("Execute query","readwrite",(u=>(function(h,f,m){const w=j(h),A=w._s.get(m);return A!==void 0?b.resolve(w.os.get(A)):w.Ur.getTargetData(f,m)})(n,u,Pt(t)).next((c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(u,c.targetId).next((h=>{o=h}))})).next((()=>n.ss.getDocumentsMatchingQuery(u,t,e?i:O.min(),e?o:q()))).next((c=>(Td(n,mh(t),c),{documents:c,Ts:o})))))}function Td(r,t,e){let n=r.us.get(t)||O.min();e.forEach(((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)})),r.us.set(t,n)}class Ao{constructor(){this.activeTargetIds=Th()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Id{constructor(){this.so=new Ao,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Ao,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mn=null;function Fr(){return Mn===null?Mn=(function(){return 268435456+Math.round(2147483648*Math.random())})():Mn++,"0x"+Mn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class Sd extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+e.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(e,n,i,o,u){const c=Fr(),h=this.xo(e,n.toUriEncodedString());k("RestConnection",`Sending RPC '${e}' ${c}:`,h,i);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,u),this.No(e,h,f,i).then((m=>(k("RestConnection",`Received RPC '${e}' ${c}: `,m),m)),(m=>{throw ve("RestConnection",`RPC '${e}' ${c} failed with error: `,m,"url: ",h,"request:",i),m}))}Lo(e,n,i,o,u,c){return this.Mo(e,n,i,o,u)}Oo(e,n,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Se})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((o,u)=>e[u]=o)),i&&i.headers.forEach(((o,u)=>e[u]=o))}xo(e,n){const i=Ad[e];return`${this.Do}/v1/${n}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,i){const o=Fr();return new Promise(((u,c)=>{const h=new sa;h.setWithCredentials(!0),h.listenOnce(ia.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case On.NO_ERROR:const m=h.getResponseJson();k(mt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),u(m);break;case On.TIMEOUT:k(mt,`RPC '${t}' ${o} timed out`),c(new L(D.DEADLINE_EXCEEDED,"Request time out"));break;case On.HTTP_ERROR:const w=h.getStatus();if(k(mt,`RPC '${t}' ${o} failed with status:`,w,"response text:",h.getResponseText()),w>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const S=A?.error;if(S&&S.status&&S.message){const V=(function(x){const z=x.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(z)>=0?z:D.UNKNOWN})(S.status);c(new L(V,S.message))}else c(new L(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new L(D.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{k(mt,`RPC '${t}' ${o} completed.`)}}));const f=JSON.stringify(i);k(mt,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",f,n,15)}))}Bo(t,e,n){const i=Fr(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=ua(),c=aa(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const m=o.join("");k(mt,`Creating RPC '${t}' stream ${i}: ${m}`,h);const w=u.createWebChannel(m,h);let A=!1,S=!1;const V=new Rd({Io:x=>{S?k(mt,`Not sending because RPC '${t}' stream ${i} is closed:`,x):(A||(k(mt,`Opening RPC '${t}' stream ${i} transport.`),w.open(),A=!0),k(mt,`RPC '${t}' stream ${i} sending:`,x),w.send(x))},To:()=>w.close()}),N=(x,z,G)=>{x.listen(z,(H=>{try{G(H)}catch(X){setTimeout((()=>{throw X}),0)}}))};return N(w,He.EventType.OPEN,(()=>{S||(k(mt,`RPC '${t}' stream ${i} transport opened.`),V.yo())})),N(w,He.EventType.CLOSE,(()=>{S||(S=!0,k(mt,`RPC '${t}' stream ${i} transport closed`),V.So())})),N(w,He.EventType.ERROR,(x=>{S||(S=!0,ve(mt,`RPC '${t}' stream ${i} transport errored:`,x),V.So(new L(D.UNAVAILABLE,"The operation could not be completed")))})),N(w,He.EventType.MESSAGE,(x=>{var z;if(!S){const G=x.data[0];et(!!G);const H=G,X=H.error||((z=H[0])===null||z===void 0?void 0:z.error);if(X){k(mt,`RPC '${t}' stream ${i} received error:`,X);const At=X.status;let Q=(function(_){const y=st[_];if(y!==void 0)return ba(y)})(At),v=X.message;Q===void 0&&(Q=D.INTERNAL,v="Unknown error status: "+At+" with message "+X.message),S=!0,V.So(new L(Q,v)),w.close()}else k(mt,`RPC '${t}' stream ${i} received:`,G),V.bo(G)}})),N(c,oa.STAT_EVENT,(x=>{x.stat===Hr.PROXY?k(mt,`RPC '${t}' stream ${i} detected buffering proxy`):x.stat===Hr.NOPROXY&&k(mt,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{V.wo()}),0),V}}function Br(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(r){return new Bh(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(t,e,n=1e3,i=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-n);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,(()=>(this.Uo=Date.now(),t()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(t,e,n,i,o,u,c,h){this.ui=t,this.Ho=n,this.Jo=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ba(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===D.RESOURCE_EXHAUSTED?(Ot(e.toString()),Ot("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,i])=>{this.Yo===e&&this.P_(n,i)}),(n=>{t((()=>{const i=new L(D.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(i)}))}))}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo((()=>{n((()=>this.listener.Eo()))})),this.stream.Ro((()=>{n((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((i=>{n((()=>this.I_(i)))})),this.stream.onMessage((i=>{n((()=>++this.e_==1?this.E_(i):this.onNext(i)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(t){return k("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget((()=>this.Yo===t?e():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Cd extends bd{constructor(t,e,n,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Kh(this.serializer,t),n=(function(o){if(!("targetChange"in o))return O.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?O.min():u.readTime?ge(u.readTime):O.min()})(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=Io(this.serializer),e.addTarget=(function(o,u){let c;const h=u.target;if(c=Jr(h)?{documents:zh(o,h)}:{query:Gh(o,h)._t},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=Uh(o,u.resumeToken);const f=ns(o,u.expectedCount);f!==null&&(c.expectedCount=f)}else if(u.snapshotVersion.compareTo(O.min())>0){c.readTime=jh(o,u.snapshotVersion.toTimestamp());const f=ns(o,u.expectedCount);f!==null&&(c.expectedCount=f)}return c})(this.serializer,t);const n=Qh(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=Io(this.serializer),e.removeTarget=t,this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new L(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,u])=>this.connection.Mo(t,rs(e,n),i,o,u))).catch((o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(D.UNKNOWN,o.toString())}))}Lo(t,e,n,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,c])=>this.connection.Lo(t,rs(e,n),i,u,c,o))).catch((u=>{throw u.name==="FirebaseError"?(u.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new L(D.UNKNOWN,u.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class Vd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ot(e),this.D_=!1):k("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o((u=>{n.enqueueAndForget((async()=>{fn(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await(async function(h){const f=j(h);f.L_.add(4),await dn(f),f.q_.set("Unknown"),f.L_.delete(4),await rr(f)})(this))}))})),this.q_=new Vd(n,i)}}async function rr(r){if(fn(r))for(const t of r.B_)await t(!0)}async function dn(r){for(const t of r.B_)await t(!1)}function ja(r,t){const e=j(r);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Vs(e)?Ps(e):Ce(e).r_()&&Cs(e,t))}function bs(r,t){const e=j(r),n=Ce(e);e.N_.delete(t),n.r_()&&Ua(e,t),e.N_.size===0&&(n.r_()?n.o_():fn(e)&&e.q_.set("Unknown"))}function Cs(r,t){if(r.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(O.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ce(r).A_(t)}function Ua(r,t){r.Q_.xe(t),Ce(r).R_(t)}function Ps(r){r.Q_=new Lh({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>r.N_.get(t)||null,tt:()=>r.datastore.serializer.databaseId}),Ce(r).start(),r.q_.v_()}function Vs(r){return fn(r)&&!Ce(r).n_()&&r.N_.size>0}function fn(r){return j(r).L_.size===0}function qa(r){r.Q_=void 0}async function xd(r){r.q_.set("Online")}async function Nd(r){r.N_.forEach(((t,e)=>{Cs(r,t)}))}async function kd(r,t){qa(r),Vs(r)?(r.q_.M_(t),Ps(r)):r.q_.set("Unknown")}async function Ld(r,t,e){if(r.q_.set("Online"),t instanceof Pa&&t.state===2&&t.cause)try{await(async function(i,o){const u=o.cause;for(const c of o.targetIds)i.N_.has(c)&&(await i.remoteSyncer.rejectListen(c,u),i.N_.delete(c),i.Q_.removeTarget(c))})(r,t)}catch(n){k("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await So(r,n)}else if(t instanceof Bn?r.Q_.Ke(t):t instanceof Ca?r.Q_.He(t):r.Q_.We(t),!e.isEqual(O.min()))try{const n=await Oa(r.localStore);e.compareTo(n)>=0&&await(function(o,u){const c=o.Q_.rt(u);return c.targetChanges.forEach(((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.N_.get(f);m&&o.N_.set(f,m.withResumeToken(h.resumeToken,u))}})),c.targetMismatches.forEach(((h,f)=>{const m=o.N_.get(h);if(!m)return;o.N_.set(h,m.withResumeToken(ct.EMPTY_BYTE_STRING,m.snapshotVersion)),Ua(o,h);const w=new $t(m.target,h,f,m.sequenceNumber);Cs(o,w)})),o.remoteSyncer.applyRemoteEvent(c)})(r,e)}catch(n){k("RemoteStore","Failed to raise snapshot:",n),await So(r,n)}}async function So(r,t,e){if(!cn(t))throw t;r.L_.add(1),await dn(r),r.q_.set("Offline"),e||(e=()=>Oa(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{k("RemoteStore","Retrying IndexedDB access"),await e(),r.L_.delete(1),await rr(r)}))}async function bo(r,t){const e=j(r);e.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const n=fn(e);e.L_.add(3),await dn(e),n&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await rr(e)}async function Md(r,t){const e=j(r);t?(e.L_.delete(2),await rr(e)):t||(e.L_.add(2),await dn(e),e.q_.set("Unknown"))}function Ce(r){return r.K_||(r.K_=(function(e,n,i){const o=j(e);return o.w_(),new Cd(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(r.datastore,r.asyncQueue,{Eo:xd.bind(null,r),Ro:Nd.bind(null,r),mo:kd.bind(null,r),d_:Ld.bind(null,r)}),r.B_.push((async t=>{t?(r.K_.s_(),Vs(r)?Ps(r):r.q_.set("Unknown")):(await r.K_.stop(),qa(r))}))),r.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new re,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const u=Date.now()+n,c=new Ds(t,e,u,i,o);return c.start(n),c}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(D.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $a(r,t){if(Ot("AsyncQueue",`${t}: ${r}`),cn(r))return new L(D.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t){this.comparator=t?(e,n)=>t(e,n)||M.comparator(e.key,n.key):(e,n)=>M.comparator(e.key,n.key),this.keyedMap=Qe(),this.sortedSet=new rt(this.comparator)}static emptySet(t){return new _e(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof _e)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new _e;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.W_=new rt(M.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?t.type!==0&&n.type===3?this.W_=this.W_.insert(e,t):t.type===3&&n.type!==1?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.W_=this.W_.remove(e):t.type===1&&n.type===2?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):F():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Ae{constructor(t,e,n,i,o,u,c,h,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,i,o){const u=[];return e.forEach((c=>{u.push({type:0,doc:c})})),new Ae(t,e,_e.emptySet(e),u,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Jn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((t=>t.J_()))}}class Fd{constructor(){this.queries=Po(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,n){const i=j(e),o=i.queries;i.queries=Po(),o.forEach(((u,c)=>{for(const h of c.j_)h.onError(n)}))})(this,new L(D.ABORTED,"Firestore shutting down"))}}function Po(){return new be((r=>ya(r)),Jn)}async function Bd(r,t){const e=j(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.H_()&&t.J_()&&(n=2):(o=new Od,n=t.J_()?0:1);try{switch(n){case 0:o.z_=await e.onListen(i,!0);break;case 1:o.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const c=$a(u,`Initialization of query '${de(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&xs(e)}async function jd(r,t){const e=j(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const u=o.j_.indexOf(t);u>=0&&(o.j_.splice(u,1),o.j_.length===0?i=t.J_()?0:1:!o.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Ud(r,t){const e=j(r);let n=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const c of u.j_)c.X_(i)&&(n=!0);u.z_=i}}n&&xs(e)}function qd(r,t,e){const n=j(r),i=n.queries.get(t);if(i)for(const o of i.j_)o.onError(e);n.queries.delete(t)}function xs(r){r.Y_.forEach((t=>{t.next()}))}var is,Vo;(Vo=is||(is={})).ea="default",Vo.Cache="cache";class $d{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new Ae(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const n=e!=="Offline";return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Ae.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==is.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(t){this.key=t}}class za{constructor(t){this.key=t}}class Kd{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=q(),this.mutatedKeys=q(),this.Aa=va(t),this.Ra=new _e(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new Co,i=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((m,w)=>{const A=i.get(m),S=Zn(this.query,w)?w:null,V=!!A&&this.mutatedKeys.has(A.key),N=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let x=!1;A&&S?A.data.isEqual(S.data)?V!==N&&(n.track({type:3,doc:S}),x=!0):this.ga(A,S)||(n.track({type:2,doc:S}),x=!0,(h&&this.Aa(S,h)>0||f&&this.Aa(S,f)<0)&&(c=!0)):!A&&S?(n.track({type:0,doc:S}),x=!0):A&&!S&&(n.track({type:1,doc:A}),x=!0,(h||f)&&(c=!0)),x&&(S?(u=u.add(S),o=N?o.add(m):o.delete(m)):(u=u.delete(m),o=o.delete(m)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const m=this.query.limitType==="F"?u.last():u.first();u=u.delete(m.key),o=o.delete(m.key),n.track({type:1,doc:m})}return{Ra:u,fa:n,ns:c,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const u=t.fa.G_();u.sort(((m,w)=>(function(S,V){const N=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return N(S)-N(V)})(m.type,w.type)||this.Aa(m.doc,w.doc))),this.pa(n),i=i!=null&&i;const c=e&&!i?this.ya():[],h=this.da.size===0&&this.current&&!i?1:0,f=h!==this.Ea;return this.Ea=h,u.length!==0||f?{snapshot:new Ae(this.query,t.Ra,o,u,t.mutatedKeys,h===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Co,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach((e=>this.Ta=this.Ta.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ta=this.Ta.delete(e))),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=q(),this.Ra.forEach((n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))}));const e=[];return t.forEach((n=>{this.da.has(n)||e.push(new za(n))})),this.da.forEach((n=>{t.has(n)||e.push(new Ka(n))})),e}ba(t){this.Ta=t.Ts,this.da=q();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Ae.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class zd{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Gd{constructor(t){this.key=t,this.va=!1}}class Hd{constructor(t,e,n,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ca={},this.Fa=new be((c=>ya(c)),Jn),this.Ma=new Map,this.xa=new Set,this.Oa=new rt(M.comparator),this.Na=new Map,this.La=new As,this.Ba={},this.ka=new Map,this.qa=we.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Qd(r,t,e=!0){const n=Ya(r);let i;const o=n.Fa.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await Ga(n,t,e,!0),i}async function Wd(r,t){const e=Ya(r);await Ga(e,t,!0,!1)}async function Ga(r,t,e,n){const i=await Ed(r.localStore,Pt(t)),o=i.targetId,u=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await Yd(r,t,o,u==="current",i.resumeToken)),r.isPrimaryClient&&e&&ja(r.remoteStore,i),c}async function Yd(r,t,e,n,i){r.Ka=(w,A,S)=>(async function(N,x,z,G){let H=x.view.ma(z);H.ns&&(H=await wo(N.localStore,x.query,!1).then((({documents:v})=>x.view.ma(v,H))));const X=G&&G.targetChanges.get(x.targetId),At=G&&G.targetMismatches.get(x.targetId)!=null,Q=x.view.applyChanges(H,N.isPrimaryClient,X,At);return xo(N,x.targetId,Q.wa),Q.snapshot})(r,w,A,S);const o=await wo(r.localStore,t,!0),u=new Kd(t,o.Ts),c=u.ma(o.documents),h=hn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),f=u.applyChanges(c,r.isPrimaryClient,h);xo(r,e,f.wa);const m=new zd(t,e,u);return r.Fa.set(t,m),r.Ma.has(e)?r.Ma.get(e).push(t):r.Ma.set(e,[t]),f.snapshot}async function Xd(r,t,e){const n=j(r),i=n.Fa.get(t),o=n.Ma.get(i.targetId);if(o.length>1)return n.Ma.set(i.targetId,o.filter((u=>!Jn(u,t)))),void n.Fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await ss(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),e&&bs(n.remoteStore,i.targetId),os(n,i.targetId)})).catch(fs)):(os(n,i.targetId),await ss(n.localStore,i.targetId,!0))}async function Jd(r,t){const e=j(r),n=e.Fa.get(t),i=e.Ma.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),bs(e.remoteStore,n.targetId))}async function Ha(r,t){const e=j(r);try{const n=await yd(e.localStore,t);t.targetChanges.forEach(((i,o)=>{const u=e.Na.get(o);u&&(et(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?u.va=!0:i.modifiedDocuments.size>0?et(u.va):i.removedDocuments.size>0&&(et(u.va),u.va=!1))})),await Wa(e,n,t)}catch(n){await fs(n)}}function Do(r,t,e){const n=j(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.Fa.forEach(((o,u)=>{const c=u.view.Z_(t);c.snapshot&&i.push(c.snapshot)})),(function(u,c){const h=j(u);h.onlineState=c;let f=!1;h.queries.forEach(((m,w)=>{for(const A of w.j_)A.Z_(c)&&(f=!0)})),f&&xs(h)})(n.eventManager,t),i.length&&n.Ca.d_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Zd(r,t,e){const n=j(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Na.get(t),o=i&&i.key;if(o){let u=new rt(M.comparator);u=u.insert(o,_t.newNoDocument(o,O.min()));const c=q().add(o),h=new nr(O.min(),new Map,new rt(K),u,c);await Ha(n,h),n.Oa=n.Oa.remove(o),n.Na.delete(t),Ns(n)}else await ss(n.localStore,t,!1).then((()=>os(n,t,e))).catch(fs)}function os(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Ma.get(t))r.Fa.delete(n),e&&r.Ca.$a(n,e);r.Ma.delete(t),r.isPrimaryClient&&r.La.gr(t).forEach((n=>{r.La.containsKey(n)||Qa(r,n)}))}function Qa(r,t){r.xa.delete(t.path.canonicalString());const e=r.Oa.get(t);e!==null&&(bs(r.remoteStore,e),r.Oa=r.Oa.remove(t),r.Na.delete(e),Ns(r))}function xo(r,t,e){for(const n of e)n instanceof Ka?(r.La.addReference(n.key,t),tf(r,n)):n instanceof za?(k("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,t),r.La.containsKey(n.key)||Qa(r,n.key)):F()}function tf(r,t){const e=t.key,n=e.path.canonicalString();r.Oa.get(e)||r.xa.has(n)||(k("SyncEngine","New document in limbo: "+e),r.xa.add(n),Ns(r))}function Ns(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const t=r.xa.values().next().value;r.xa.delete(t);const e=new M(tt.fromString(t)),n=r.qa.next();r.Na.set(n,new Gd(e)),r.Oa=r.Oa.insert(e,n),ja(r.remoteStore,new $t(Pt(Es(e.path)),n,"TargetPurposeLimboResolution",ps.oe))}}async function Wa(r,t,e){const n=j(r),i=[],o=[],u=[];n.Fa.isEmpty()||(n.Fa.forEach(((c,h)=>{u.push(n.Ka(h,t,e).then((f=>{var m;if((f||e)&&n.isPrimaryClient){const w=f?!f.fromCache:(m=e?.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(h.targetId,w?"current":"not-current")}if(f){i.push(f);const w=Ss.Wi(h.targetId,f);o.push(w)}})))})),await Promise.all(u),n.Ca.d_(i),await(async function(h,f){const m=j(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>b.forEach(f,(A=>b.forEach(A.$i,(S=>m.persistence.referenceDelegate.addReference(w,A.targetId,S))).next((()=>b.forEach(A.Ui,(S=>m.persistence.referenceDelegate.removeReference(w,A.targetId,S)))))))))}catch(w){if(!cn(w))throw w;k("LocalStore","Failed to update sequence numbers: "+w)}for(const w of f){const A=w.targetId;if(!w.fromCache){const S=m.os.get(A),V=S.snapshotVersion,N=S.withLastLimboFreeSnapshotVersion(V);m.os=m.os.insert(A,N)}}})(n.localStore,o))}async function ef(r,t){const e=j(r);if(!e.currentUser.isEqual(t)){k("SyncEngine","User change. New user:",t.toKey());const n=await Ma(e.localStore,t);e.currentUser=t,(function(o,u){o.ka.forEach((c=>{c.forEach((h=>{h.reject(new L(D.CANCELLED,u))}))})),o.ka.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Wa(e,n.hs)}}function nf(r,t){const e=j(r),n=e.Na.get(t);if(n&&n.va)return q().add(n.key);{let i=q();const o=e.Ma.get(t);if(!o)return i;for(const u of o){const c=e.Fa.get(u);i=i.unionWith(c.view.Va)}return i}}function Ya(r){const t=j(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ha.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=nf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Zd.bind(null,t),t.Ca.d_=Ud.bind(null,t.eventManager),t.Ca.$a=qd.bind(null,t.eventManager),t}class Gn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Fa(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return _d(this.persistence,new md,t.initialUser,this.serializer)}Ga(t){return new dd(Rs.Zr,this.serializer)}Wa(t){return new Id}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gn.provider={build:()=>new Gn};class as{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Do(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=ef.bind(null,this.syncEngine),await Md(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Fd})()}createDatastore(t){const e=Fa(t.databaseInfo.databaseId),n=(function(o){return new Sd(o)})(t.databaseInfo);return(function(o,u,c,h){return new Pd(o,u,c,h)})(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return(function(n,i,o,u,c){return new Dd(n,i,o,u,c)})(this.localStore,this.datastore,t.asyncQueue,(e=>Do(this.syncEngine,e,0)),(function(){return Ro.D()?new Ro:new wd})())}createSyncEngine(t,e){return(function(i,o,u,c,h,f,m){const w=new Hd(i,o,u,c,h,f);return m&&(w.Qa=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(i){const o=j(i);k("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await dn(o),o.k_.shutdown(),o.q_.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}as.provider={build:()=>new as};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Ot("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=ca.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,(async u=>{k("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(n,(u=>(k("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new re;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=$a(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function jr(r,t){r.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener((async i=>{n.isEqual(i)||(await Ma(t.localStore,i),n=i)})),t.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=t}async function No(r,t){r.asyncQueue.verifyOperationInProgress();const e=await of(r);k("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener((n=>bo(t.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,i)=>bo(t.remoteStore,i))),r._onlineComponents=t}async function of(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await jr(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===D.FAILED_PRECONDITION||i.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;ve("Error using user provided cache. Falling back to memory cache: "+e),await jr(r,new Gn)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await jr(r,new Gn);return r._offlineComponents}async function af(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await No(r,r._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await No(r,new as))),r._onlineComponents}async function uf(r){const t=await af(r),e=t.eventManager;return e.onListen=Qd.bind(null,t.syncEngine),e.onUnlisten=Xd.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Wd.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Jd.bind(null,t.syncEngine),e}function lf(r,t,e={}){const n=new re;return r.asyncQueue.enqueueAndForget((async()=>(function(o,u,c,h,f){const m=new rf({next:A=>{m.Za(),u.enqueueAndForget((()=>jd(o,w)));const S=A.docs.has(c);!S&&A.fromCache?f.reject(new L(D.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&A.fromCache&&h&&h.source==="server"?f.reject(new L(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(A)},error:A=>f.reject(A)}),w=new $d(Es(c.path),m,{includeMetadataChanges:!0,_a:!0});return Bd(o,w)})(await uf(r),r.asyncQueue,t,e,n))),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(r,t,e){if(!e)throw new L(D.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function hf(r,t,e,n){if(t===!0&&n===!0)throw new L(D.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Lo(r){if(!M.isDocumentKey(r))throw new L(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function df(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(n){return n.constructor?n.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":F()}function us(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new L(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=df(r);throw new L(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new L(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new L(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}hf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xa((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),(function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new L(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new L(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new L(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(n,i){return n.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ks{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mo({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new L(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mo(t),t.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new Mc;switch(n.type){case"firstParty":return new jc(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const n=ko.get(e);n&&(k("ComponentProvider","Removing Datastore"),ko.delete(e),n.terminate())})(this),Promise.resolve()}}function ff(r,t,e,n={}){var i;const o=(r=us(r,ks))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&ve("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),n.mockUserToken){let c,h;if(typeof n.mockUserToken=="string")c=n.mockUserToken,h=gt.MOCK_USER;else{c=ml(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new L(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new gt(f)}r._authCredentials=new Oc(new la(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ls(this.firestore,t,this._query)}}class Lt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Lt(this.firestore,t,this._key)}}class ln extends Ls{constructor(t,e,n){super(t,e,Es(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Lt(this.firestore,null,new M(t))}withConverter(t){return new ln(this.firestore,t,this._path)}}function pf(r,t,...e){if(r=Al(r),arguments.length===1&&(t=ca.newId()),cf("doc","path",t),r instanceof ks){const n=tt.fromString(t,...e);return Lo(n),new Lt(r,null,new M(n))}{if(!(r instanceof Lt||r instanceof ln))throw new L(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(tt.fromString(t,...e));return Lo(n),new Lt(r.firestore,r instanceof ln?r.converter:null,new M(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ba(this,"async_queue_retry"),this.Vu=()=>{const n=Br();n&&k("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=t;const e=Br();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Br();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise((()=>{}));const e=new re;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Pu.push(t),this.pu())))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!cn(t))throw t;k("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(t){const e=this.mu.then((()=>(this.du=!0,t().catch((n=>{this.Eu=n,this.du=!1;const i=(function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c})(n);throw Ot("INTERNAL UNHANDLED ERROR: ",i),n})).then((n=>(this.du=!1,n))))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=Ds.createAndSchedule(this,t,e,n,(o=>this.yu(o)));return this.Tu.push(i),i}fu(){this.Eu&&F()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then((()=>{this.Tu.sort(((e,n)=>e.targetTimeMs-n.targetTimeMs));for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()}))}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Ja extends ks{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Oo,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Oo(t),this._firestoreClient=void 0,await t}}}function Fo(r,t){const e=typeof r=="object"?r:Rc(),n=typeof r=="string"?r:"(default)",i=Tc(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=fl("firestore");o&&ff(i,...o)}return i}function mf(r){if(r._terminated)throw new L(D.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||gf(r),r._firestoreClient}function gf(r){var t,e,n;const i=r._freezeSettings(),o=(function(c,h,f,m){return new Zc(c,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Xa(m.experimentalLongPollingOptions),m.useFetchStreams)})(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new sf(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&(function(c){const h=c?._online.build();return{_offline:c?._offline.build(h),_online:h}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Hn(ct.fromBase64String(t))}catch(e){throw new L(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Hn(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new L(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new L(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new L(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return K(this._lat,t._lat)||K(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0})(this._values,t._values)}}const vf=new RegExp("[~\\*/\\[\\]]");function Ef(r,t,e){if(t.search(vf)>=0)throw Bo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new Za(...t.split("."))._internalPath}catch{throw Bo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function Bo(r,t,e,n,i){let o=`Function ${t}() called with invalid data`;o+=". ";let u="";return new L(D.INVALID_ARGUMENT,o+r+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Tf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(eu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Tf extends tu{data(){return super.data()}}function eu(r,t){return typeof t=="string"?Ef(r,t):t instanceof Za?t._internalPath:t._delegate._internalPath}class If{convertValue(t,e="none"){switch(ae(t)){case 0:return null;case 1:return t.booleanValue;case 2:return nt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(oe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw F()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Yn(t,((i,o)=>{n[i]=this.convertValue(o,e)})),n}convertVectorValue(t){var e,n,i;const o=(i=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map((u=>nt(u.doubleValue)));return new yf(o)}convertGeoPoint(t){return new _f(nt(t.latitude),nt(t.longitude))}convertArray(t,e){return(t.values||[]).map((n=>this.convertValue(n,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=gs(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(on(t));default:return null}}convertTimestamp(t){const e=Ht(t);return new It(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=tt.fromString(t);et(La(n));const i=new an(n.get(1),n.get(3)),o=new M(n.popFirst(5));return i.isEqual(e)||Ot(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class nu extends tu{constructor(t,e,n,i,o,u){super(t,e,n,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Af(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(eu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Af extends nu{data(t={}){return super.data(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(r){r=us(r,Lt);const t=us(r.firestore,Ja);return lf(mf(t),r._key).then((e=>bf(t,r,e)))}class Sf extends If{constructor(t){super(),this.firestore=t}convertBytes(t){return new Hn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Lt(this.firestore,null,e)}}function bf(r,t,e){const n=e.docs.get(t._key),i=new Sf(r);return new nu(r,i,t._key,n,new wf(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){Se=i})(Ac),Un(new en("firestore",((n,{instanceIdentifier:i,options:o})=>{const u=n.getProvider("app").getImmediate(),c=new Ja(new Fc(n.getProvider("auth-internal")),new qc(n.getProvider("app-check-internal")),(function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new L(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new an(f.options.projectId,m)})(u,i),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c}),"PUBLIC").setMultipleInstances(!0)),me(eo,"4.7.3",t),me(eo,"4.7.3","esm2017")})();var Cf="firebase",Pf="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */me(Cf,Pf,"app");const te={apiKey:"AIzaSyDb0C_yeAMVI-O0wkMzeXmsGoc0MIua6v8",authDomain:"lullaby-dashboard.firebaseapp.com",projectId:"lullaby-dashboard",storageBucket:"lullaby-dashboard.firebasestorage.app",messagingSenderId:"960750423784",appId:"1:960750423784:web:027368a1188967d2ce435d"};function Vf(){return!!(te.apiKey&&te.authDomain&&te.projectId&&te.storageBucket&&te.messagingSenderId&&te.appId)}if(!Vf())throw new Error("Missing required Firebase environment variables. Please set PUBLIC_FIREBASE_API_KEY, PUBLIC_FIREBASE_AUTH_DOMAIN, PUBLIC_FIREBASE_PROJECT_ID, PUBLIC_FIREBASE_STORAGE_BUCKET, PUBLIC_FIREBASE_MESSAGING_SENDER_ID, and PUBLIC_FIREBASE_APP_ID.");const Df=Sc().length?Fo():Fo(ta(te)),J=Go((r,t)=>({lists:[],selectedIndex:0,checkedKeys:{},listExpiryTimestamps:{},timerRunsByList:{},fastestRunsByList:{},celebration:{visible:!1,listId:null,isNewBest:!1,elapsedMs:0},language:ye,setLists(e){r(n=>({...n,lists:e}))},setSelectedIndex(e){return r(n=>(bt({checkedKeys:n.checkedKeys,listExpiryTimestamps:n.listExpiryTimestamps,selectedIndex:e,language:n.language,timerRunsByList:n.timerRunsByList,fastestRunsByList:n.fastestRunsByList,celebration:n.celebration}),{...n,selectedIndex:e}))},setLanguage(e){return r(n=>(bt({checkedKeys:n.checkedKeys,listExpiryTimestamps:n.listExpiryTimestamps,selectedIndex:n.selectedIndex,language:e,timerRunsByList:n.timerRunsByList,fastestRunsByList:n.fastestRunsByList,celebration:n.celebration}),{...n,language:e}))},toggleItem(e){return r(n=>{const[i]=e.split("-",2),o=n.lists.find(A=>A.id===i),u=!n.checkedKeys[e],c={...n.checkedKeys,[e]:u},h=o?.groups.reduce((A,S)=>A+(S.items?.length??0),0)??0,f=o?.groups.reduce((A,S)=>A+S.items.reduce((V,N)=>{const x=`${o.id}-${S.id}-${N.id}`;return V+(c[x]?1:0)},0),0)??0,m=o?.retentionHours?{...n.listExpiryTimestamps,[i]:Date.now()+o.retentionHours*60*60*1e3}:n.listExpiryTimestamps,w={...n.timerRunsByList};if(u&&!n.timerRunsByList[i]&&(w[i]={listId:i,startedAtMs:Date.now(),elapsedMs:0,isRunning:!0,lastResumedAtMs:Date.now(),completedAtMs:null}),h>0&&f>=h){const A=w[i],S=Date.now(),V=A?Math.max(0,S-(A.lastResumedAtMs??A.startedAtMs))+A.elapsedMs:0,N=n.fastestRunsByList[i]?.elapsedMs,x=N===void 0||V<N,z={...n.fastestRunsByList};w[i]={...A,elapsedMs:V,isRunning:!1,completedAtMs:S},x&&(z[i]={elapsedMs:V,completedAtMs:S});const G={visible:!0,listId:i,isNewBest:x,elapsedMs:V};return bt({checkedKeys:c,listExpiryTimestamps:m,selectedIndex:n.selectedIndex,language:n.language,timerRunsByList:w,fastestRunsByList:z,celebration:G}),{checkedKeys:c,listExpiryTimestamps:m,timerRunsByList:w,fastestRunsByList:z,celebration:G}}return bt({checkedKeys:c,listExpiryTimestamps:m,selectedIndex:n.selectedIndex,language:n.language,timerRunsByList:w,fastestRunsByList:n.fastestRunsByList,celebration:n.celebration}),{checkedKeys:c,listExpiryTimestamps:m,timerRunsByList:w,fastestRunsByList:n.fastestRunsByList,celebration:n.celebration}})},startTimer(e){return r(n=>{const i=n.timerRunsByList[e],o=Date.now(),u=i?{...i,isRunning:!0,lastResumedAtMs:o}:{listId:e,startedAtMs:o,elapsedMs:0,isRunning:!0,lastResumedAtMs:o,completedAtMs:null},c={...n.timerRunsByList,[e]:u};return bt({checkedKeys:n.checkedKeys,listExpiryTimestamps:n.listExpiryTimestamps,selectedIndex:n.selectedIndex,language:n.language,timerRunsByList:c,fastestRunsByList:n.fastestRunsByList,celebration:n.celebration}),{...n,timerRunsByList:c}})},pauseTimer(e){return r(n=>{const i=n.timerRunsByList[e];if(!i||!i.isRunning)return n;const o=Date.now(),u=i.elapsedMs+Math.max(0,o-(i.lastResumedAtMs??i.startedAtMs)),c={...i,elapsedMs:u,isRunning:!1,lastResumedAtMs:null},h={...n.timerRunsByList,[e]:c};return bt({checkedKeys:n.checkedKeys,listExpiryTimestamps:n.listExpiryTimestamps,selectedIndex:n.selectedIndex,language:n.language,timerRunsByList:h,fastestRunsByList:n.fastestRunsByList,celebration:n.celebration}),{...n,timerRunsByList:h}})},resumeTimer(e){return r(n=>{const i=n.timerRunsByList[e];if(!i||i.isRunning)return n;const o={...i,isRunning:!0,lastResumedAtMs:Date.now()},u={...n.timerRunsByList,[e]:o};return bt({checkedKeys:n.checkedKeys,listExpiryTimestamps:n.listExpiryTimestamps,selectedIndex:n.selectedIndex,language:n.language,timerRunsByList:u,fastestRunsByList:n.fastestRunsByList,celebration:n.celebration}),{...n,timerRunsByList:u}})},completeRun(e){return r(n=>{const i=n.timerRunsByList[e],o=Date.now(),u=i?i.elapsedMs+Math.max(0,o-(i.lastResumedAtMs??i.startedAtMs)):0,c=n.fastestRunsByList[e]?.elapsedMs,h=c===void 0||u<c,f={...n.fastestRunsByList};h&&(f[e]={elapsedMs:u,completedAtMs:o});const m={...i,listId:e,elapsedMs:u,isRunning:!1,completedAtMs:o},w={visible:!0,listId:e,isNewBest:h,elapsedMs:u},A={...n.timerRunsByList,[e]:m};return bt({checkedKeys:n.checkedKeys,listExpiryTimestamps:n.listExpiryTimestamps,selectedIndex:n.selectedIndex,language:n.language,timerRunsByList:A,fastestRunsByList:f,celebration:w}),{...n,timerRunsByList:A,fastestRunsByList:f,celebration:w}})},clearCelebration(){return r(e=>(bt({checkedKeys:e.checkedKeys,listExpiryTimestamps:e.listExpiryTimestamps,selectedIndex:e.selectedIndex,language:e.language,timerRunsByList:e.timerRunsByList,fastestRunsByList:e.fastestRunsByList,celebration:{visible:!1,listId:null,isNewBest:!1,elapsedMs:0}}),{...e,celebration:{visible:!1,listId:null,isNewBest:!1,elapsedMs:0}}))},hydrateState(){if(!Qn)return;const e=el();if(!e)return;const n=nl(e,t().lists);r(i=>({...i,selectedIndex:n.selectedIndex,checkedKeys:n.checkedKeys,listExpiryTimestamps:n.listExpiryTimestamps,timerRunsByList:n.timerRunsByList??{},fastestRunsByList:n.fastestRunsByList??{},celebration:n.celebration??{visible:!1,listId:null,isNewBest:!1,elapsedMs:0},language:n.language}))},resetState(){const{language:e}=t();rl(),bt({checkedKeys:{},listExpiryTimestamps:{},selectedIndex:0,language:e,timerRunsByList:{},fastestRunsByList:{},celebration:{visible:!1,listId:null,isNewBest:!1,elapsedMs:0}}),r({selectedIndex:0,checkedKeys:{},listExpiryTimestamps:{},timerRunsByList:{},fastestRunsByList:{},celebration:{visible:!1,listId:null,isNewBest:!1,elapsedMs:0},language:e})},async loadConfiguration(){const e=await Rf(pf(Df,"dashboard","configuration"));if(!e.exists())throw new Error("Firebase configuration document not found");const n=e.data();if(!n||!Array.isArray(n.savedLists))throw new Error("Firebase configuration is missing savedLists");r(i=>({...i,lists:n.savedLists}))}})),xf=[{id:"loadConfiguration",labelKey:"loader.loadingConfiguration",status:"pending",stepFn:()=>J.getState().loadConfiguration()},{id:"hydrateState",labelKey:"loader.restoringState",status:"inProgress",stepFn:async()=>await J.getState().hydrateState()}],tn=Go((r,t)=>({steps:xf,failureInfo:null,isReady:!1,startupStarted:!1,setStepStatus(e,n){r(i=>({steps:i.steps.map(o=>o.id===e?{...o,status:n}:o)}))},async loadData(){const{setStepStatus:e,startupStarted:n}=t();if(n)return;r({startupStarted:!0});let i="loadConfiguration";try{for(const o of t().steps)i=o.id,e(i,"inProgress"),await o.stepFn(),e(i,"complete");r({isReady:!0})}catch(o){const u=o instanceof Error?o.message:String(o),c=o instanceof Error?o.stack:void 0;e(i,"failed"),r({failureInfo:{step:i,message:u,stack:c}})}}}));function Tt({textKey:r,values:t,size:e="medium",variant:n="body",as:i,className:o,...u}){const c=J(m=>m.language),h=i??"span",f=[o,`typography typography--${n}`,`typography--${e}`].filter(Boolean).join(" ");return C.jsx(h,{className:f,...u,children:Zu(r,c,t)})}function Nf(){const r=tn(t=>t.failureInfo);return r?C.jsx("div",{className:"loader loader--error",children:C.jsxs("div",{className:"loader__panel",children:[C.jsx("h1",{className:"loader__heading",children:C.jsx(Tt,{textKey:"loader.errorHeading",variant:"heading",size:"large"})}),C.jsx("p",{className:"loader__message",children:C.jsx(Tt,{textKey:"loader.errorMessage"})}),C.jsxs("div",{className:"loader__error",children:[C.jsx("strong",{children:"Error during:"})," ",r.step,C.jsx("br",{}),C.jsx("strong",{children:"Message:"})," ",r.message]}),C.jsxs("div",{className:"loader__debug",children:[C.jsx("strong",{children:C.jsx(Tt,{textKey:"loader.debugHeading"})}),C.jsx("pre",{children:`step: ${r.step}
message: ${r.message}
stack:
${r.stack??"(no stack available)"}`})]})]})}):null}const{loadData:jo}=tn.getState();function kf({children:r}){const t=tn(i=>i.steps),e=tn(i=>i.failureInfo),n=tn(i=>i.isReady);return St.useEffect(()=>{jo()},[jo]),e?C.jsx(Nf,{}):n?C.jsx(C.Fragment,{children:r}):C.jsx("div",{className:"loader",children:C.jsxs("div",{className:"loader__panel",children:[C.jsx("h1",{className:"loader__heading",children:C.jsx(Tt,{textKey:"loader.heading",variant:"heading",size:"large"})}),C.jsx("p",{className:"loader__message",children:C.jsx(Tt,{textKey:"loader.message"})}),C.jsx("ol",{className:"loader__list",children:t.map(i=>C.jsxs("li",{className:`loader__item loader__item--${i.status}`,children:[C.jsx("span",{className:`loader__item-status loader__item-status--${i.status}`,"aria-hidden":"true",children:i.status==="complete"?"✓":i.status==="failed"?"✕":""}),C.jsx("span",{children:C.jsx(Tt,{textKey:i.labelKey})})]},i.id))})]})})}const{toggleItem:Lf}=J.getState();function Mf({list:r}){const t=J(e=>e.checkedKeys);return C.jsx(C.Fragment,{children:r.groups.map(e=>e.items?.length?C.jsx("div",{className:"todo-list",children:C.jsx("ul",{className:"todo-list__group",children:e.items.map(n=>{const i=`${r.id}-${e.id}-${n.id}`,o=!!t[i];return C.jsx("li",{className:`todo-list__item${o?" todo-list__item--checked":""}`,style:{color:n.color},onClick:()=>Lf(i),children:C.jsx("span",{className:"todo-list__item-text",children:n.name})},i)})})},e.id):null)})}function Uo(r){return r.toString().padStart(2,"0")}function qo(){const r=new Date;return`${Uo(r.getHours())}:${Uo(r.getMinutes())}`}function Of(){const[r,t]=St.useState(qo());return St.useEffect(()=>{const e=setInterval(()=>{t(qo())},1e3);return()=>clearInterval(e)},[]),C.jsx("span",{children:r})}const{setSelectedIndex:Ff}=J.getState();function Bf(){const r=J(n=>n.lists),t=J(n=>n.selectedIndex),e=n=>{Ff(Number(n.target.value))};return C.jsx("div",{className:"list-selector",children:C.jsx("select",{className:"list-selector__select",value:t,onChange:e,children:r.map((n,i)=>C.jsx("option",{value:i,children:n.label},n.id??i))})})}function jf({completed:r,total:t}){const e=Math.max(t,1),n=Math.round(r/e*100),i=`${Math.min(Math.max(r/e*100,0),100)}%`;return C.jsxs("section",{className:"progress-bar","aria-label":"Task progress",children:[C.jsxs("header",{className:"progress-bar__header",children:[C.jsxs("div",{children:[C.jsx("p",{className:"progress-bar__eyebrow",children:C.jsx(Tt,{textKey:"progress.eyebrow",variant:"eyebrow",size:"small"})}),C.jsx("h2",{className:"progress-bar__title",children:C.jsx(Tt,{textKey:"progress.title",variant:"heading",size:"large"})})]}),C.jsxs("strong",{className:"progress-bar__percent",children:[n,"%"]})]}),C.jsx("div",{className:"progress-bar__track",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":n,children:C.jsx("span",{className:"progress-bar__fill",style:{width:i}})}),C.jsxs("footer",{className:"progress-bar__footer",children:[C.jsx("span",{children:C.jsx(Tt,{textKey:"progress.done",variant:"label",values:{completed:r,total:t}})}),C.jsx("span",{children:C.jsx(Tt,{textKey:"progress.keepGoing",variant:"label"})})]})]})}function $o(r){const t=Math.max(0,Math.floor(r/1e3)),e=Math.floor(t/60),n=t%60;return`${e.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`}function Uf({}){const[r,t]=St.useState(Date.now()),e=J(S=>S.selectedIndex),n=J(S=>S.lists),i=J(S=>S.timerRunsByList),o=J(S=>S.fastestRunsByList),u=J(S=>S.pauseTimer),c=J(S=>S.resumeTimer),h=n[e]??null,f=h?i[h.id]:void 0,m=h?o[h.id]:void 0,w=f&&f.isRunning?f.elapsedMs+Math.max(0,r-(f.lastResumedAtMs??f.startedAtMs)):f?.elapsedMs??0,A=St.useRef(null);return St.useEffect(()=>{if(!h?.id)return;A.current&&A.current!==h.id&&u(A.current);const S=i[h.id];S&&!S.isRunning&&document.visibilityState==="visible"&&c(h.id),A.current=h.id},[u,c,h,i]),St.useEffect(()=>{if(!h)return;const S=()=>{if(document.visibilityState==="hidden"){u(h.id);return}const N=i[h.id];N&&!N.isRunning&&N.startedAtMs&&c(h.id)},V=()=>{u(h.id)};return document.addEventListener("visibilitychange",S),window.addEventListener("beforeunload",V),()=>{document.removeEventListener("visibilitychange",S),window.removeEventListener("beforeunload",V)}},[u,c,h,i]),St.useEffect(()=>{if(!h||!f?.isRunning)return;const S=window.setInterval(()=>t(Date.now()),1e3);return()=>window.clearInterval(S)},[f?.isRunning,h?.id]),h?C.jsxs("section",{className:"app__timer-card","aria-live":"polite",children:[C.jsx("p",{className:"app__timer-label",children:"Active focus"}),C.jsx("strong",{className:"app__timer-value",children:$o(w)}),C.jsxs("p",{className:"app__timer-fastest",children:["Fastest: ",m?$o(m.elapsedMs):"—"]})]}):null}function qf({videoUrl:r}){const t=r?`${r}&autoplay=1`:"";return C.jsx("iframe",{className:"video-embed__iframe",src:t,title:"YouTube video player",frameBorder:"0",allow:"autoplay; fullscreen; encrypted-media; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})}const{resetState:$f}=J.getState();function Kf({completedItems:r,totalItems:t}){const e=J(n=>n.lists[n.selectedIndex]??null);return C.jsxs("div",{className:"app__sidebar",children:[C.jsx("figure",{className:"app__video",children:C.jsx(qf,{videoUrl:e?.youtubeUrl})}),C.jsx("section",{className:"app__clock",children:C.jsx(Of,{})}),C.jsxs("section",{className:"app__selector",children:[C.jsx(Bf,{}),C.jsx("button",{type:"button",className:"app__reset-button",onClick:$f,children:C.jsx(Tt,{textKey:"app.reset"})})]}),C.jsx(jf,{completed:r,total:t}),C.jsx(Uf,{})]})}function zf(){const r=J(e=>e.celebration),t=J(e=>e.clearCelebration);return St.useEffect(()=>{if(!r.visible)return;const e=window.setTimeout(()=>t(),3200);return()=>window.clearTimeout(e)},[r.visible,t]),r.visible?C.jsxs("div",{className:"app__celebration",role:"status","aria-live":"polite",children:[C.jsx("div",{className:"app__celebration-bubble",children:r.isNewBest?"New fastest run!":"List cleared!"}),C.jsx("div",{className:"app__fireworks","aria-hidden":"true",children:Array.from({length:14}).map((e,n)=>C.jsx("span",{className:"app__firework",style:{"--delay":`${n*.15}s`}},n))})]}):null}function Gf({onClose:r}){const[t,e]=St.useState(!1),n=J(i=>i.setLanguage);return C.jsxs("div",{className:"app__options-wrap",children:[C.jsx("button",{type:"button",className:"app__options-button",onClick:()=>e(i=>!i),"aria-expanded":t,"aria-label":"Options",children:"⚙"}),t&&C.jsxs("div",{className:"app__options-menu",role:"menu","aria-label":"Language",children:[C.jsx("button",{type:"button",className:"app__options-menu-button",onClick:()=>{n("en"),e(!1),r?.()},children:C.jsx(Tt,{textKey:"app.english"})}),C.jsx("button",{type:"button",className:"app__options-menu-button",onClick:()=>{n("pl"),e(!1),r?.()},children:C.jsx(Tt,{textKey:"app.polish"})})]})]})}function Hf(){const r=J(h=>h.selectedIndex),t=J(h=>h.lists),e=J(h=>h.checkedKeys),n=J(h=>h.celebration),i=t[r]??null,o=i?.bgColor?{backgroundColor:i.bgColor}:void 0,u=St.useMemo(()=>i?.groups.reduce((h,f)=>h+(f.items?.length??0),0)??0,[i]),c=i?i.groups.reduce((h,f)=>h+f.items.reduce((m,w)=>{const A=`${i.id}-${f.id}-${w.id}`;return m+(e[A]?1:0)},0),0):0;return C.jsxs("article",{className:"app",style:o,children:[C.jsx("section",{className:"app__content",children:i?C.jsx(Mf,{list:i}):C.jsx("div",{className:"app__no-list",children:C.jsx(Tt,{textKey:"app.noLists"})})}),C.jsx(Kf,{completedItems:c,totalItems:u}),n.visible&&C.jsx(zf,{}),C.jsx(Gf,{})]})}function tp(){return C.jsx(kf,{children:C.jsx(Hf,{})})}export{tp as default};
