import{j as b}from"./jsx-runtime.D_zvdyIk.js";import{r as $o,g as Lu,R as Fu,a as jn}from"./index.CL6X04yg.js";/* empty css                       */const ju={},Mi=n=>{let t;const e=new Set,r=(g,w)=>{const R=typeof g=="function"?g(t):g;if(!Object.is(R,t)){const S=t;t=w??(typeof R!="object"||R===null)?R:Object.assign({},t,R),e.forEach(D=>D(t,S))}},i=()=>t,d={setState:r,getState:i,getInitialState:()=>f,subscribe:g=>(e.add(g),()=>e.delete(g)),destroy:()=>{(ju?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),e.clear()}},f=t=n(r,i,d);return d},Uu=n=>n?Mi(n):Mi;var Pr={exports:{}},br={},Vr={exports:{}},Dr={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Li;function Bu(){if(Li)return Dr;Li=1;var n=$o();function t(w,R){return w===R&&(w!==0||1/w===1/R)||w!==w&&R!==R}var e=typeof Object.is=="function"?Object.is:t,r=n.useState,i=n.useEffect,o=n.useLayoutEffect,u=n.useDebugValue;function c(w,R){var S=R(),D=r({inst:{value:S,getSnapshot:R}}),k=D[0].inst,x=D[1];return o(function(){k.value=S,k.getSnapshot=R,d(k)&&x({inst:k})},[w,S,R]),i(function(){return d(k)&&x({inst:k}),w(function(){d(k)&&x({inst:k})})},[w]),u(S),S}function d(w){var R=w.getSnapshot;w=w.value;try{var S=R();return!e(w,S)}catch{return!0}}function f(w,R){return R()}var g=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?f:c;return Dr.useSyncExternalStore=n.useSyncExternalStore!==void 0?n.useSyncExternalStore:g,Dr}var Fi;function qu(){return Fi||(Fi=1,Vr.exports=Bu()),Vr.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ji;function $u(){if(ji)return br;ji=1;var n=$o(),t=qu();function e(f,g){return f===g&&(f!==0||1/f===1/g)||f!==f&&g!==g}var r=typeof Object.is=="function"?Object.is:e,i=t.useSyncExternalStore,o=n.useRef,u=n.useEffect,c=n.useMemo,d=n.useDebugValue;return br.useSyncExternalStoreWithSelector=function(f,g,w,R,S){var D=o(null);if(D.current===null){var k={hasValue:!1,value:null};D.current=k}else k=D.current;D=c(function(){function Y(G){if(!Q){if(Q=!0,K=G,G=R(G),S!==void 0&&k.hasValue){var E=k.value;if(S(E,G))return X=E}return X=G}if(E=X,r(K,G))return E;var p=R(G);return S!==void 0&&S(E,p)?(K=G,E):(K=G,X=p)}var Q=!1,K,X,At=w===void 0?null:w;return[function(){return Y(g())},At===null?void 0:function(){return Y(At())}]},[g,w,R,S]);var x=i(f,D[0],D[1]);return u(function(){k.hasValue=!0,k.value=x},[x]),d(x),x},br}var Ui;function zu(){return Ui||(Ui=1,Pr.exports=$u()),Pr.exports}var Ku=zu();const Gu=Lu(Ku),zo={},{useDebugValue:Hu}=Fu,{useSyncExternalStoreWithSelector:Qu}=Gu;let Bi=!1;const Wu=n=>n;function Yu(n,t=Wu,e){(zo?"production":void 0)!=="production"&&e&&!Bi&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Bi=!0);const r=Qu(n.subscribe,n.getState,n.getServerState||n.getInitialState,t,e);return Hu(r),r}const qi=n=>{(zo?"production":void 0)!=="production"&&typeof n!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof n=="function"?Uu(n):n,e=(r,i)=>Yu(t,r,i);return Object.assign(e,t),e},Ko=n=>n?qi(n):qi,me="en",$i={en:{app:{noLists:"No lists",reset:"Reset",options:"Options",language:"Language",english:"English",polish:"Polish"},progress:{eyebrow:"Mission progress",title:"You’re doing great!",done:"{completed} of {total} tasks done",keepGoing:"Keep going!"},loader:{heading:"Starting dashboard",message:"Please wait while we load your configuration and restore saved progress.",errorHeading:"Unable to load the dashboard",errorMessage:"The application could not complete startup. Please refresh the page and try again.",debugHeading:"Debug details",loadingConfiguration:"Loading configuration",restoringState:"Restoring saved state"},pageTitle:"Lullaby dashboard"},pl:{app:{noLists:"Brak list",reset:"Resetuj",options:"Opcje",language:"Język",english:"Angielski",polish:"Polski"},progress:{eyebrow:"Postęp misji",title:"Świetnie sobie radzisz!",done:"Ukończono {completed} z {total} zadań",keepGoing:"Jeszcze tylko trochę!"},loader:{heading:"Uruchamianie pulpitu",message:"Poczekaj, aż załadujemy konfigurację i przywrócimy zapisany stan.",errorHeading:"Nie można załadować pulpitu",errorMessage:"Aplikacja nie mogła ukończyć uruchamiania. Odśwież stronę i spróbuj ponownie.",debugHeading:"Szczegóły debugowania",loadingConfiguration:"Ładowanie konfiguracji",restoringState:"Przywracanie zapisanych danych"},pageTitle:"Pulpit Lullaby"}};function Xu(n=me){return $i[n]??$i[me]}function Ju(n,t=me,e){const r=n.split(".");let o=Xu(t);for(const u of r){if(typeof o!="object"||o===null||!(u in o))return n;o=o[u]}return typeof o!="string"?n:e?o.replace(/\{(\w+)\}/g,(u,c)=>{const d=e[c];return d===void 0?`{${c}}`:String(d)}):o}const ls="lullaby-dashboard-state",Qn=typeof window<"u";function Zu(n){if(!n||typeof n!="object"||Array.isArray(n))return;const t=n;if(typeof t.selectedIndex!="number")return;const e=t.language==="en"||t.language==="pl"?t.language:me;if(typeof t.checkedKeys!="object"||t.checkedKeys===null||Array.isArray(t.checkedKeys)||typeof t.listExpiryTimestamps!="object"||t.listExpiryTimestamps===null||Array.isArray(t.listExpiryTimestamps))return;const r=Object.fromEntries(Object.entries(t.checkedKeys).filter(([,o])=>typeof o=="boolean")),i=Object.fromEntries(Object.entries(t.listExpiryTimestamps).filter(([,o])=>typeof o=="number"));return{checkedKeys:r,listExpiryTimestamps:i,selectedIndex:t.selectedIndex,language:e}}function tl(){if(Qn)try{const n=window.localStorage.getItem(ls);if(!n)return;const t=JSON.parse(n);return Zu(t)}catch{return}}function el(n,t){const e=Date.now(),r={},i={};for(const[o,u]of Object.entries(n.checkedKeys)){const[c]=o.split("-",2),d=t.find(g=>g.id===c),f=n.listExpiryTimestamps[c];!d?.retentionHours||typeof f!="number"||e>=f||(r[o]=u,i[c]=f)}return{checkedKeys:r,listExpiryTimestamps:i,selectedIndex:n.selectedIndex,language:n.language??me}}function Dn(n){if(Qn)try{window.localStorage.setItem(ls,JSON.stringify(n))}catch{}}function nl(){if(Qn)try{window.localStorage.removeItem(ls)}catch{}}var zi={};/**
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
 */const Go=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},rl=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],u=n[e++],c=n[e++],d=((i&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],u=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|u&63)}}return t.join("")},Ho={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],u=i+1<n.length,c=u?n[i+1]:0,d=i+2<n.length,f=d?n[i+2]:0,g=o>>2,w=(o&3)<<4|c>>4;let R=(c&15)<<2|f>>6,S=f&63;d||(S=64,u||(R=64)),r.push(e[g],e[w],e[R],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Go(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):rl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],c=i<n.length?e[n.charAt(i)]:0;++i;const f=i<n.length?e[n.charAt(i)]:64;++i;const w=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||c==null||f==null||w==null)throw new sl;const R=o<<2|c>>4;if(r.push(R),f!==64){const S=c<<4&240|f>>2;if(r.push(S),w!==64){const D=f<<6&192|w;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class sl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const il=function(n){const t=Go(n);return Ho.encodeByteArray(t,!0)},Un=function(n){return il(n).replace(/\./g,"")},ol=function(n){try{return Ho.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function al(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ul=()=>al().__FIREBASE_DEFAULTS__,ll=()=>{if(typeof process>"u"||typeof zi>"u")return;const n=zi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},cl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&ol(n[1]);return t&&JSON.parse(t)},cs=()=>{try{return ul()||ll()||cl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},hl=n=>{var t,e;return(e=(t=cs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},dl=n=>{const t=hl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Qo=()=>{var n;return(n=cs())===null||n===void 0?void 0:n.config};/**
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
 */class fl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function pl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Un(JSON.stringify(e)),Un(JSON.stringify(u)),""].join(".")}/**
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
 */function gl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ml(){var n;const t=(n=cs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _l(){return!ml()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yl(){try{return typeof indexedDB=="object"}catch{return!1}}function El(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const vl="FirebaseError";class we extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=vl,Object.setPrototypeOf(this,we.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wo.prototype.create)}}class Wo{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],u=o?Tl(o,r):"Error",c=`${this.serviceName}: ${u} (${i}).`;return new we(i,c,r)}}function Tl(n,t){return n.replace(Il,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Il=/\{\$([^}]+)}/g;function Br(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],u=t[i];if(Ki(o)&&Ki(u)){if(!Br(o,u))return!1}else if(o!==u)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Ki(n){return n!==null&&typeof n=="object"}/**
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
 */function wl(n){return n&&n._delegate?n._delegate:n}class Ze{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Xt="[DEFAULT]";/**
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
 */class Al{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new fl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t?.identifier),i=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Sl(t))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Xt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xt){return this.instances.has(t)}getOptions(t=Xt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&u.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const u=this.instances.get(i);return u&&t(u,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rl(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Xt){return this.component?this.component.multipleInstances?t:Xt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rl(n){return n===Xt?void 0:n}function Sl(n){return n.instantiationMode==="EAGER"}/**
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
 */class Cl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Al(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const Pl={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},bl=B.INFO,Vl={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Dl=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Vl[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Yo{constructor(t){this.name=t,this._logLevel=bl,this._logHandler=Dl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Pl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const xl=(n,t)=>t.some(e=>n instanceof e);let Gi,Hi;function Nl(){return Gi||(Gi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kl(){return Hi||(Hi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xo=new WeakMap,qr=new WeakMap,Jo=new WeakMap,xr=new WeakMap,hs=new WeakMap;function Ol(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(qt(n.result)),i()},u=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&Xo.set(e,n)}).catch(()=>{}),hs.set(t,n),t}function Ml(n){if(qr.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),i()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});qr.set(n,t)}let $r={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return qr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Jo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return qt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Ll(n){$r=n($r)}function Fl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Nr(this),t,...e);return Jo.set(r,t.sort?t.sort():[t]),qt(r)}:kl().includes(n)?function(...t){return n.apply(Nr(this),t),qt(Xo.get(this))}:function(...t){return qt(n.apply(Nr(this),t))}}function jl(n){return typeof n=="function"?Fl(n):(n instanceof IDBTransaction&&Ml(n),xl(n,Nl())?new Proxy(n,$r):n)}function qt(n){if(n instanceof IDBRequest)return Ol(n);if(xr.has(n))return xr.get(n);const t=jl(n);return t!==n&&(xr.set(n,t),hs.set(t,n)),t}const Nr=n=>hs.get(n);function Ul(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const u=indexedDB.open(n,t),c=qt(u);return r&&u.addEventListener("upgradeneeded",d=>{r(qt(u.result),d.oldVersion,d.newVersion,qt(u.transaction),d)}),e&&u.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),c.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Bl=["get","getKey","getAll","getAllKeys","count"],ql=["put","add","delete","clear"],kr=new Map;function Qi(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(kr.get(t))return kr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=ql.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Bl.includes(e)))return;const o=async function(u,...c){const d=this.transaction(u,i?"readwrite":"readonly");let f=d.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),i&&d.done]))[0]};return kr.set(t,o),o}Ll(n=>({...n,get:(t,e,r)=>Qi(t,e)||n.get(t,e,r),has:(t,e)=>!!Qi(t,e)||n.has(t,e)}));/**
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
 */class $l{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(zl(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function zl(n){const t=n.getComponent();return t?.type==="VERSION"}const zr="@firebase/app",Wi="0.10.13";/**
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
 */const kt=new Yo("@firebase/app"),Kl="@firebase/app-compat",Gl="@firebase/analytics-compat",Hl="@firebase/analytics",Ql="@firebase/app-check-compat",Wl="@firebase/app-check",Yl="@firebase/auth",Xl="@firebase/auth-compat",Jl="@firebase/database",Zl="@firebase/data-connect",tc="@firebase/database-compat",ec="@firebase/functions",nc="@firebase/functions-compat",rc="@firebase/installations",sc="@firebase/installations-compat",ic="@firebase/messaging",oc="@firebase/messaging-compat",ac="@firebase/performance",uc="@firebase/performance-compat",lc="@firebase/remote-config",cc="@firebase/remote-config-compat",hc="@firebase/storage",dc="@firebase/storage-compat",fc="@firebase/firestore",pc="@firebase/vertexai-preview",gc="@firebase/firestore-compat",mc="firebase",_c="10.14.1";/**
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
 */const Kr="[DEFAULT]",yc={[zr]:"fire-core",[Kl]:"fire-core-compat",[Hl]:"fire-analytics",[Gl]:"fire-analytics-compat",[Wl]:"fire-app-check",[Ql]:"fire-app-check-compat",[Yl]:"fire-auth",[Xl]:"fire-auth-compat",[Jl]:"fire-rtdb",[Zl]:"fire-data-connect",[tc]:"fire-rtdb-compat",[ec]:"fire-fn",[nc]:"fire-fn-compat",[rc]:"fire-iid",[sc]:"fire-iid-compat",[ic]:"fire-fcm",[oc]:"fire-fcm-compat",[ac]:"fire-perf",[uc]:"fire-perf-compat",[lc]:"fire-rc",[cc]:"fire-rc-compat",[hc]:"fire-gcs",[dc]:"fire-gcs-compat",[fc]:"fire-fst",[gc]:"fire-fst-compat",[pc]:"fire-vertex","fire-js":"fire-js",[mc]:"fire-js-all"};/**
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
 */const tn=new Map,Ec=new Map,Gr=new Map;function Yi(n,t){try{n.container.addComponent(t)}catch(e){kt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Bn(n){const t=n.name;if(Gr.has(t))return kt.debug(`There were multiple attempts to register component ${t}.`),!1;Gr.set(t,n);for(const e of tn.values())Yi(e,n);for(const e of Ec.values())Yi(e,n);return!0}function vc(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Tc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$t=new Wo("app","Firebase",Tc);/**
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
 */class Ic{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
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
 */const wc=_c;function Zo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Kr,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw $t.create("bad-app-name",{appName:String(i)});if(e||(e=Qo()),!e)throw $t.create("no-options");const o=tn.get(i);if(o){if(Br(e,o.options)&&Br(r,o.config))return o;throw $t.create("duplicate-app",{appName:i})}const u=new Cl(i);for(const d of Gr.values())u.addComponent(d);const c=new Ic(e,r,u);return tn.set(i,c),c}function Ac(n=Kr){const t=tn.get(n);if(!t&&n===Kr&&Qo())return Zo();if(!t)throw $t.create("no-app",{appName:n});return t}function Rc(){return Array.from(tn.values())}function fe(n,t,e){var r;let i=(r=yc[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),kt.warn(c.join(" "));return}Bn(new Ze(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Sc="firebase-heartbeat-database",Cc=1,en="firebase-heartbeat-store";let Or=null;function ta(){return Or||(Or=Ul(Sc,Cc,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(en)}catch(e){console.warn(e)}}}}).catch(n=>{throw $t.create("idb-open",{originalErrorMessage:n.message})})),Or}async function Pc(n){try{const e=(await ta()).transaction(en),r=await e.objectStore(en).get(ea(n));return await e.done,r}catch(t){if(t instanceof we)kt.warn(t.message);else{const e=$t.create("idb-get",{originalErrorMessage:t?.message});kt.warn(e.message)}}}async function Xi(n,t){try{const r=(await ta()).transaction(en,"readwrite");await r.objectStore(en).put(t,ea(n)),await r.done}catch(e){if(e instanceof we)kt.warn(e.message);else{const r=$t.create("idb-set",{originalErrorMessage:e?.message});kt.warn(r.message)}}}function ea(n){return`${n.name}!${n.options.appId}`}/**
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
 */const bc=1024,Vc=720*60*60*1e3;class Dc{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Nc(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ji();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const c=new Date(u.date).valueOf();return Date.now()-c<=Vc}),this._storage.overwrite(this._heartbeatsCache))}catch(r){kt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ji(),{heartbeatsToSend:r,unsentEntries:i}=xc(this._heartbeatsCache.heartbeats),o=Un(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return kt.warn(e),""}}}function Ji(){return new Date().toISOString().substring(0,10)}function xc(n,t=bc){const e=[];let r=n.slice();for(const i of n){const o=e.find(u=>u.agent===i.agent);if(o){if(o.dates.push(i.date),Zi(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Zi(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Nc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yl()?El().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Pc(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xi(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xi(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Zi(n){return Un(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function kc(n){Bn(new Ze("platform-logger",t=>new $l(t),"PRIVATE")),Bn(new Ze("heartbeat",t=>new Dc(t),"PRIVATE")),fe(zr,Wi,n),fe(zr,Wi,"esm2017"),fe("fire-js","")}kc("");var to=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var te,na;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,p){function _(){}_.prototype=p.prototype,E.D=p.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(y,v,I){for(var m=Array(arguments.length-2),Vt=2;Vt<arguments.length;Vt++)m[Vt-2]=arguments[Vt];return p.prototype[v].apply(y,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)y[v]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(v=0;16>v;++v)y[v]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=E.g[0],_=E.g[1],v=E.g[2];var I=E.g[3],m=p+(I^_&(v^I))+y[0]+3614090360&4294967295;p=_+(m<<7&4294967295|m>>>25),m=I+(v^p&(_^v))+y[1]+3905402710&4294967295,I=p+(m<<12&4294967295|m>>>20),m=v+(_^I&(p^_))+y[2]+606105819&4294967295,v=I+(m<<17&4294967295|m>>>15),m=_+(p^v&(I^p))+y[3]+3250441966&4294967295,_=v+(m<<22&4294967295|m>>>10),m=p+(I^_&(v^I))+y[4]+4118548399&4294967295,p=_+(m<<7&4294967295|m>>>25),m=I+(v^p&(_^v))+y[5]+1200080426&4294967295,I=p+(m<<12&4294967295|m>>>20),m=v+(_^I&(p^_))+y[6]+2821735955&4294967295,v=I+(m<<17&4294967295|m>>>15),m=_+(p^v&(I^p))+y[7]+4249261313&4294967295,_=v+(m<<22&4294967295|m>>>10),m=p+(I^_&(v^I))+y[8]+1770035416&4294967295,p=_+(m<<7&4294967295|m>>>25),m=I+(v^p&(_^v))+y[9]+2336552879&4294967295,I=p+(m<<12&4294967295|m>>>20),m=v+(_^I&(p^_))+y[10]+4294925233&4294967295,v=I+(m<<17&4294967295|m>>>15),m=_+(p^v&(I^p))+y[11]+2304563134&4294967295,_=v+(m<<22&4294967295|m>>>10),m=p+(I^_&(v^I))+y[12]+1804603682&4294967295,p=_+(m<<7&4294967295|m>>>25),m=I+(v^p&(_^v))+y[13]+4254626195&4294967295,I=p+(m<<12&4294967295|m>>>20),m=v+(_^I&(p^_))+y[14]+2792965006&4294967295,v=I+(m<<17&4294967295|m>>>15),m=_+(p^v&(I^p))+y[15]+1236535329&4294967295,_=v+(m<<22&4294967295|m>>>10),m=p+(v^I&(_^v))+y[1]+4129170786&4294967295,p=_+(m<<5&4294967295|m>>>27),m=I+(_^v&(p^_))+y[6]+3225465664&4294967295,I=p+(m<<9&4294967295|m>>>23),m=v+(p^_&(I^p))+y[11]+643717713&4294967295,v=I+(m<<14&4294967295|m>>>18),m=_+(I^p&(v^I))+y[0]+3921069994&4294967295,_=v+(m<<20&4294967295|m>>>12),m=p+(v^I&(_^v))+y[5]+3593408605&4294967295,p=_+(m<<5&4294967295|m>>>27),m=I+(_^v&(p^_))+y[10]+38016083&4294967295,I=p+(m<<9&4294967295|m>>>23),m=v+(p^_&(I^p))+y[15]+3634488961&4294967295,v=I+(m<<14&4294967295|m>>>18),m=_+(I^p&(v^I))+y[4]+3889429448&4294967295,_=v+(m<<20&4294967295|m>>>12),m=p+(v^I&(_^v))+y[9]+568446438&4294967295,p=_+(m<<5&4294967295|m>>>27),m=I+(_^v&(p^_))+y[14]+3275163606&4294967295,I=p+(m<<9&4294967295|m>>>23),m=v+(p^_&(I^p))+y[3]+4107603335&4294967295,v=I+(m<<14&4294967295|m>>>18),m=_+(I^p&(v^I))+y[8]+1163531501&4294967295,_=v+(m<<20&4294967295|m>>>12),m=p+(v^I&(_^v))+y[13]+2850285829&4294967295,p=_+(m<<5&4294967295|m>>>27),m=I+(_^v&(p^_))+y[2]+4243563512&4294967295,I=p+(m<<9&4294967295|m>>>23),m=v+(p^_&(I^p))+y[7]+1735328473&4294967295,v=I+(m<<14&4294967295|m>>>18),m=_+(I^p&(v^I))+y[12]+2368359562&4294967295,_=v+(m<<20&4294967295|m>>>12),m=p+(_^v^I)+y[5]+4294588738&4294967295,p=_+(m<<4&4294967295|m>>>28),m=I+(p^_^v)+y[8]+2272392833&4294967295,I=p+(m<<11&4294967295|m>>>21),m=v+(I^p^_)+y[11]+1839030562&4294967295,v=I+(m<<16&4294967295|m>>>16),m=_+(v^I^p)+y[14]+4259657740&4294967295,_=v+(m<<23&4294967295|m>>>9),m=p+(_^v^I)+y[1]+2763975236&4294967295,p=_+(m<<4&4294967295|m>>>28),m=I+(p^_^v)+y[4]+1272893353&4294967295,I=p+(m<<11&4294967295|m>>>21),m=v+(I^p^_)+y[7]+4139469664&4294967295,v=I+(m<<16&4294967295|m>>>16),m=_+(v^I^p)+y[10]+3200236656&4294967295,_=v+(m<<23&4294967295|m>>>9),m=p+(_^v^I)+y[13]+681279174&4294967295,p=_+(m<<4&4294967295|m>>>28),m=I+(p^_^v)+y[0]+3936430074&4294967295,I=p+(m<<11&4294967295|m>>>21),m=v+(I^p^_)+y[3]+3572445317&4294967295,v=I+(m<<16&4294967295|m>>>16),m=_+(v^I^p)+y[6]+76029189&4294967295,_=v+(m<<23&4294967295|m>>>9),m=p+(_^v^I)+y[9]+3654602809&4294967295,p=_+(m<<4&4294967295|m>>>28),m=I+(p^_^v)+y[12]+3873151461&4294967295,I=p+(m<<11&4294967295|m>>>21),m=v+(I^p^_)+y[15]+530742520&4294967295,v=I+(m<<16&4294967295|m>>>16),m=_+(v^I^p)+y[2]+3299628645&4294967295,_=v+(m<<23&4294967295|m>>>9),m=p+(v^(_|~I))+y[0]+4096336452&4294967295,p=_+(m<<6&4294967295|m>>>26),m=I+(_^(p|~v))+y[7]+1126891415&4294967295,I=p+(m<<10&4294967295|m>>>22),m=v+(p^(I|~_))+y[14]+2878612391&4294967295,v=I+(m<<15&4294967295|m>>>17),m=_+(I^(v|~p))+y[5]+4237533241&4294967295,_=v+(m<<21&4294967295|m>>>11),m=p+(v^(_|~I))+y[12]+1700485571&4294967295,p=_+(m<<6&4294967295|m>>>26),m=I+(_^(p|~v))+y[3]+2399980690&4294967295,I=p+(m<<10&4294967295|m>>>22),m=v+(p^(I|~_))+y[10]+4293915773&4294967295,v=I+(m<<15&4294967295|m>>>17),m=_+(I^(v|~p))+y[1]+2240044497&4294967295,_=v+(m<<21&4294967295|m>>>11),m=p+(v^(_|~I))+y[8]+1873313359&4294967295,p=_+(m<<6&4294967295|m>>>26),m=I+(_^(p|~v))+y[15]+4264355552&4294967295,I=p+(m<<10&4294967295|m>>>22),m=v+(p^(I|~_))+y[6]+2734768916&4294967295,v=I+(m<<15&4294967295|m>>>17),m=_+(I^(v|~p))+y[13]+1309151649&4294967295,_=v+(m<<21&4294967295|m>>>11),m=p+(v^(_|~I))+y[4]+4149444226&4294967295,p=_+(m<<6&4294967295|m>>>26),m=I+(_^(p|~v))+y[11]+3174756917&4294967295,I=p+(m<<10&4294967295|m>>>22),m=v+(p^(I|~_))+y[2]+718787259&4294967295,v=I+(m<<15&4294967295|m>>>17),m=_+(I^(v|~p))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(v+(m<<21&4294967295|m>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+I&4294967295}r.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var _=p-this.blockSize,y=this.B,v=this.h,I=0;I<p;){if(v==0)for(;I<=_;)i(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<p;)if(y[v++]=E.charCodeAt(I++),v==this.blockSize){i(this,y),v=0;break}}else for(;I<p;)if(y[v++]=E[I++],v==this.blockSize){i(this,y),v=0;break}}this.h=v,this.o+=p},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var _=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=_&255,_/=256;for(this.u(E),E=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)E[_++]=this.g[p]>>>y&255;return E};function o(E,p){var _=c;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=p(E)}function u(E,p){this.h=p;for(var _=[],y=!0,v=E.length-1;0<=v;v--){var I=E[v]|0;y&&I==p||(_[v]=I,y=!1)}this.g=_}var c={};function d(E){return-128<=E&&128>E?o(E,function(p){return new u([p|0],0>p?-1:0)}):new u([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return w;if(0>E)return x(f(-E));for(var p=[],_=1,y=0;E>=_;y++)p[y]=E/_|0,_*=4294967296;return new u(p,0)}function g(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return x(g(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(p,8)),y=w,v=0;v<E.length;v+=8){var I=Math.min(8,E.length-v),m=parseInt(E.substring(v,v+I),p);8>I?(I=f(Math.pow(p,I)),y=y.j(I).add(f(m))):(y=y.j(_),y=y.add(f(m)))}return y}var w=d(0),R=d(1),S=d(16777216);n=u.prototype,n.m=function(){if(k(this))return-x(this).m();for(var E=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);E+=(0<=y?y:4294967296+y)*p,p*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(D(this))return"0";if(k(this))return"-"+x(this).toString(E);for(var p=f(Math.pow(E,6)),_=this,y="";;){var v=X(_,p).g;_=Y(_,v.j(p));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=v,D(_))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function D(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function k(E){return E.h==-1}n.l=function(E){return E=Y(this,E),k(E)?-1:D(E)?0:1};function x(E){for(var p=E.g.length,_=[],y=0;y<p;y++)_[y]=~E.g[y];return new u(_,~E.h).add(R)}n.abs=function(){return k(this)?x(this):this},n.add=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0,v=0;v<=p;v++){var I=y+(this.i(v)&65535)+(E.i(v)&65535),m=(I>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);y=m>>>16,I&=65535,m&=65535,_[v]=m<<16|I}return new u(_,_[_.length-1]&-2147483648?-1:0)};function Y(E,p){return E.add(x(p))}n.j=function(E){if(D(this)||D(E))return w;if(k(this))return k(E)?x(this).j(x(E)):x(x(this).j(E));if(k(E))return x(this.j(x(E)));if(0>this.l(S)&&0>E.l(S))return f(this.m()*E.m());for(var p=this.g.length+E.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var v=0;v<E.g.length;v++){var I=this.i(y)>>>16,m=this.i(y)&65535,Vt=E.i(v)>>>16,Ce=E.i(v)&65535;_[2*y+2*v]+=m*Ce,Q(_,2*y+2*v),_[2*y+2*v+1]+=I*Ce,Q(_,2*y+2*v+1),_[2*y+2*v+1]+=m*Vt,Q(_,2*y+2*v+1),_[2*y+2*v+2]+=I*Vt,Q(_,2*y+2*v+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new u(_,0)};function Q(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function K(E,p){this.g=E,this.h=p}function X(E,p){if(D(p))throw Error("division by zero");if(D(E))return new K(w,w);if(k(E))return p=X(x(E),p),new K(x(p.g),x(p.h));if(k(p))return p=X(E,x(p)),new K(x(p.g),p.h);if(30<E.g.length){if(k(E)||k(p))throw Error("slowDivide_ only works with positive integers.");for(var _=R,y=p;0>=y.l(E);)_=At(_),y=At(y);var v=G(_,1),I=G(y,1);for(y=G(y,2),_=G(_,2);!D(y);){var m=I.add(y);0>=m.l(E)&&(v=v.add(_),I=m),y=G(y,1),_=G(_,1)}return p=Y(E,v.j(p)),new K(v,p)}for(v=w;0<=E.l(p);){for(_=Math.max(1,Math.floor(E.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(_),m=I.j(p);k(m)||0<m.l(E);)_-=y,I=f(_),m=I.j(p);D(I)&&(I=R),v=v.add(I),E=Y(E,m)}return new K(v,E)}n.A=function(E){return X(this,E).h},n.and=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&E.i(y);return new u(_,this.h&E.h)},n.or=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|E.i(y);return new u(_,this.h|E.h)},n.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^E.i(y);return new u(_,this.h^E.h)};function At(E){for(var p=E.g.length+1,_=[],y=0;y<p;y++)_[y]=E.i(y)<<1|E.i(y-1)>>>31;return new u(_,E.h)}function G(E,p){var _=p>>5;p%=32;for(var y=E.g.length-_,v=[],I=0;I<y;I++)v[I]=0<p?E.i(I+_)>>>p|E.i(I+_+1)<<32-p:E.i(I+_);return new u(v,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,na=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=g,te=u}).apply(typeof to<"u"?to:typeof self<"u"?self:typeof window<"u"?window:{});var xn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ra,Ke,sa,Mn,Hr,ia,oa,aa;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof xn=="object"&&xn];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var l=r;s=s.split(".");for(var h=0;h<s.length-1;h++){var T=s[h];if(!(T in l))break t;l=l[T]}s=s[s.length-1],h=l[s],a=a(h),a!=h&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,h=!1,T={next:function(){if(!h&&l<s.length){var A=l++;return{value:a(A,s[A]),done:!1}}return h=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function d(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function g(s,a,l){return s.call.apply(s.bind,arguments)}function w(s,a,l){if(!s)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,h),s.apply(a,T)}}return function(){return s.apply(a,arguments)}}function R(s,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:w,R.apply(null,arguments)}function S(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),s.apply(this,h)}}function D(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(h,T,A){for(var P=Array(arguments.length-2),H=2;H<arguments.length;H++)P[H-2]=arguments[H];return a.prototype[T].apply(h,P)}}function k(s){const a=s.length;if(0<a){const l=Array(a);for(let h=0;h<a;h++)l[h]=s[h];return l}return[]}function x(s,a){for(let l=1;l<arguments.length;l++){const h=arguments[l];if(d(h)){const T=s.length||0,A=h.length||0;s.length=T+A;for(let P=0;P<A;P++)s[T+P]=h[P]}else s.push(h)}}class Y{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function Q(s){return/^[\s\xa0]*$/.test(s)}function K(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function X(s){return X[" "](s),s}X[" "]=function(){};var At=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function G(s,a,l){for(const h in s)a.call(l,s[h],h,s)}function E(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function p(s){const a={};for(const l in s)a[l]=s[l];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let l,h;for(let T=1;T<arguments.length;T++){h=arguments[T];for(l in h)s[l]=h[l];for(let A=0;A<_.length;A++)l=_[A],Object.prototype.hasOwnProperty.call(h,l)&&(s[l]=h[l])}}function v(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function I(s){c.setTimeout(()=>{throw s},0)}function m(){var s=sr;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Vt{constructor(){this.h=this.g=null}add(a,l){const h=Ce.get();h.set(a,l),this.h?this.h.next=h:this.g=h,this.h=h}}var Ce=new Y(()=>new nu,s=>s.reset());class nu{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Pe,be=!1,sr=new Vt,Ms=()=>{const s=c.Promise.resolve(void 0);Pe=()=>{s.then(ru)}};var ru=()=>{for(var s;s=m();){try{s.h.call(s.g)}catch(l){I(l)}var a=Ce;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}be=!1};function Mt(){this.s=this.s,this.C=this.C}Mt.prototype.s=!1,Mt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Mt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ct(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var su=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return s})();function Ve(s,a){if(ct.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,h=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(At){t:{try{X(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:iu[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ve.aa.h.call(this)}}D(Ve,ct);var iu={2:"touch",3:"pen",4:"mouse"};Ve.prototype.h=function(){Ve.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var dn="closure_listenable_"+(1e6*Math.random()|0),ou=0;function au(s,a,l,h,T){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!h,this.ha=T,this.key=++ou,this.da=this.fa=!1}function fn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function pn(s){this.src=s,this.g={},this.h=0}pn.prototype.add=function(s,a,l,h,T){var A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);var P=or(s,a,h,T);return-1<P?(a=s[P],l||(a.fa=!1)):(a=new au(a,this.src,A,!!h,T),a.fa=l,s.push(a)),a};function ir(s,a){var l=a.type;if(l in s.g){var h=s.g[l],T=Array.prototype.indexOf.call(h,a,void 0),A;(A=0<=T)&&Array.prototype.splice.call(h,T,1),A&&(fn(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function or(s,a,l,h){for(var T=0;T<s.length;++T){var A=s[T];if(!A.da&&A.listener==a&&A.capture==!!l&&A.ha==h)return T}return-1}var ar="closure_lm_"+(1e6*Math.random()|0),ur={};function Ls(s,a,l,h,T){if(Array.isArray(a)){for(var A=0;A<a.length;A++)Ls(s,a[A],l,h,T);return null}return l=Us(l),s&&s[dn]?s.K(a,l,f(h)?!!h.capture:!1,T):uu(s,a,l,!1,h,T)}function uu(s,a,l,h,T,A){if(!a)throw Error("Invalid event type");var P=f(T)?!!T.capture:!!T,H=cr(s);if(H||(s[ar]=H=new pn(s)),l=H.add(a,l,h,P,A),l.proxy)return l;if(h=lu(),l.proxy=h,h.src=s,h.listener=l,s.addEventListener)su||(T=P),T===void 0&&(T=!1),s.addEventListener(a.toString(),h,T);else if(s.attachEvent)s.attachEvent(js(a.toString()),h);else if(s.addListener&&s.removeListener)s.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function lu(){function s(l){return a.call(s.src,s.listener,l)}const a=cu;return s}function Fs(s,a,l,h,T){if(Array.isArray(a))for(var A=0;A<a.length;A++)Fs(s,a[A],l,h,T);else h=f(h)?!!h.capture:!!h,l=Us(l),s&&s[dn]?(s=s.i,a=String(a).toString(),a in s.g&&(A=s.g[a],l=or(A,l,h,T),-1<l&&(fn(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete s.g[a],s.h--)))):s&&(s=cr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=or(a,l,h,T)),(l=-1<s?a[s]:null)&&lr(l))}function lr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[dn])ir(a.i,s);else{var l=s.type,h=s.proxy;a.removeEventListener?a.removeEventListener(l,h,s.capture):a.detachEvent?a.detachEvent(js(l),h):a.addListener&&a.removeListener&&a.removeListener(h),(l=cr(a))?(ir(l,s),l.h==0&&(l.src=null,a[ar]=null)):fn(s)}}}function js(s){return s in ur?ur[s]:ur[s]="on"+s}function cu(s,a){if(s.da)s=!0;else{a=new Ve(a,this);var l=s.listener,h=s.ha||s.src;s.fa&&lr(s),s=l.call(h,a)}return s}function cr(s){return s=s[ar],s instanceof pn?s:null}var hr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Us(s){return typeof s=="function"?s:(s[hr]||(s[hr]=function(a){return s.handleEvent(a)}),s[hr])}function ht(){Mt.call(this),this.i=new pn(this),this.M=this,this.F=null}D(ht,Mt),ht.prototype[dn]=!0,ht.prototype.removeEventListener=function(s,a,l,h){Fs(this,s,a,l,h)};function _t(s,a){var l,h=s.F;if(h)for(l=[];h;h=h.F)l.push(h);if(s=s.M,h=a.type||a,typeof a=="string")a=new ct(a,s);else if(a instanceof ct)a.target=a.target||s;else{var T=a;a=new ct(h,s),y(a,T)}if(T=!0,l)for(var A=l.length-1;0<=A;A--){var P=a.g=l[A];T=gn(P,h,!0,a)&&T}if(P=a.g=s,T=gn(P,h,!0,a)&&T,T=gn(P,h,!1,a)&&T,l)for(A=0;A<l.length;A++)P=a.g=l[A],T=gn(P,h,!1,a)&&T}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],h=0;h<l.length;h++)fn(l[h]);delete s.g[a],s.h--}}this.F=null},ht.prototype.K=function(s,a,l,h){return this.i.add(String(s),a,!1,l,h)},ht.prototype.L=function(s,a,l,h){return this.i.add(String(s),a,!0,l,h)};function gn(s,a,l,h){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,A=0;A<a.length;++A){var P=a[A];if(P&&!P.da&&P.capture==l){var H=P.listener,ot=P.ha||P.src;P.fa&&ir(s.i,P),T=H.call(ot,h)!==!1&&T}}return T&&!h.defaultPrevented}function Bs(s,a,l){if(typeof s=="function")l&&(s=R(s,l));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function qs(s){s.g=Bs(()=>{s.g=null,s.i&&(s.i=!1,qs(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class hu extends Mt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:qs(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function De(s){Mt.call(this),this.h=s,this.g={}}D(De,Mt);var $s=[];function zs(s){G(s.g,function(a,l){this.g.hasOwnProperty(l)&&lr(a)},s),s.g={}}De.prototype.N=function(){De.aa.N.call(this),zs(this)},De.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dr=c.JSON.stringify,du=c.JSON.parse,fu=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function fr(){}fr.prototype.h=null;function Ks(s){return s.h||(s.h=s.i())}function Gs(){}var xe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pr(){ct.call(this,"d")}D(pr,ct);function gr(){ct.call(this,"c")}D(gr,ct);var Ht={},Hs=null;function mn(){return Hs=Hs||new ht}Ht.La="serverreachability";function Qs(s){ct.call(this,Ht.La,s)}D(Qs,ct);function Ne(s){const a=mn();_t(a,new Qs(a))}Ht.STAT_EVENT="statevent";function Ws(s,a){ct.call(this,Ht.STAT_EVENT,s),this.stat=a}D(Ws,ct);function yt(s){const a=mn();_t(a,new Ws(a,s))}Ht.Ma="timingevent";function Ys(s,a){ct.call(this,Ht.Ma,s),this.size=a}D(Ys,ct);function ke(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function Oe(){this.g=!0}Oe.prototype.xa=function(){this.g=!1};function pu(s,a,l,h,T,A){s.info(function(){if(s.g)if(A)for(var P="",H=A.split("&"),ot=0;ot<H.length;ot++){var $=H[ot].split("=");if(1<$.length){var dt=$[0];$=$[1];var ft=dt.split("_");P=2<=ft.length&&ft[1]=="type"?P+(dt+"="+$+"&"):P+(dt+"=redacted&")}}else P=null;else P=A;return"XMLHTTP REQ ("+h+") [attempt "+T+"]: "+a+`
`+l+`
`+P})}function gu(s,a,l,h,T,A,P){s.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+T+"]: "+a+`
`+l+`
`+A+" "+P})}function oe(s,a,l,h){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+_u(s,l)+(h?" "+h:"")})}function mu(s,a){s.info(function(){return"TIMEOUT: "+a})}Oe.prototype.info=function(){};function _u(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var h=l[s];if(!(2>h.length)){var T=h[1];if(Array.isArray(T)&&!(1>T.length)){var A=T[0];if(A!="noop"&&A!="stop"&&A!="close")for(var P=1;P<T.length;P++)T[P]=""}}}}return dr(l)}catch{return a}}var _n={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},mr;function yn(){}D(yn,fr),yn.prototype.g=function(){return new XMLHttpRequest},yn.prototype.i=function(){return{}},mr=new yn;function Lt(s,a,l,h){this.j=s,this.i=a,this.l=l,this.R=h||1,this.U=new De(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Js}function Js(){this.i=null,this.g="",this.h=!1}var Zs={},_r={};function yr(s,a,l){s.L=1,s.v=In(Dt(a)),s.m=l,s.P=!0,ti(s,null)}function ti(s,a){s.F=Date.now(),En(s),s.A=Dt(s.v);var l=s.A,h=s.R;Array.isArray(h)||(h=[String(h)]),pi(l.i,"t",h),s.C=0,l=s.j.J,s.h=new Js,s.g=xi(s.j,l?a:null,!s.m),0<s.O&&(s.M=new hu(R(s.Y,s,s.g),s.O)),a=s.U,l=s.g,h=s.ca;var T="readystatechange";Array.isArray(T)||(T&&($s[0]=T.toString()),T=$s);for(var A=0;A<T.length;A++){var P=Ls(l,T[A],h||a.handleEvent,!1,a.h||a);if(!P)break;a.g[P.key]=P}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Ne(),pu(s.i,s.u,s.A,s.l,s.R,s.m)}Lt.prototype.ca=function(s){s=s.target;const a=this.M;a&&xt(s)==3?a.j():this.Y(s)},Lt.prototype.Y=function(s){try{if(s==this.g)t:{const ft=xt(this.g);var a=this.g.Ba();const le=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Ti(this.g)))){this.J||ft!=4||a==7||(a==8||0>=le?Ne(3):Ne(2)),Er(this);var l=this.g.Z();this.X=l;e:if(ei(this)){var h=Ti(this.g);s="";var T=h.length,A=xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qt(this),Me(this);var P="";break e}this.h.i=new c.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,s+=this.h.i.decode(h[a],{stream:!(A&&a==T-1)});h.length=0,this.h.g+=s,this.C=0,P=this.h.g}else P=this.g.oa();if(this.o=l==200,gu(this.i,this.u,this.A,this.l,this.R,ft,l),this.o){if(this.T&&!this.K){e:{if(this.g){var H,ot=this.g;if((H=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(H)){var $=H;break e}}$=null}if(l=$)oe(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vr(this,l);else{this.o=!1,this.s=3,yt(12),Qt(this),Me(this);break t}}if(this.P){l=!0;let Rt;for(;!this.J&&this.C<P.length;)if(Rt=yu(this,P),Rt==_r){ft==4&&(this.s=4,yt(14),l=!1),oe(this.i,this.l,null,"[Incomplete Response]");break}else if(Rt==Zs){this.s=4,yt(15),oe(this.i,this.l,P,"[Invalid Chunk]"),l=!1;break}else oe(this.i,this.l,Rt,null),vr(this,Rt);if(ei(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||P.length!=0||this.h.h||(this.s=1,yt(16),l=!1),this.o=this.o&&l,!l)oe(this.i,this.l,P,"[Invalid Chunked Response]"),Qt(this),Me(this);else if(0<P.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+P.length),Sr(dt),dt.M=!0,yt(11))}}else oe(this.i,this.l,P,null),vr(this,P);ft==4&&Qt(this),this.o&&!this.J&&(ft==4?Pi(this.j,this):(this.o=!1,En(this)))}else Ou(this.g),l==400&&0<P.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),Qt(this),Me(this)}}}catch{}finally{}};function ei(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function yu(s,a){var l=s.C,h=a.indexOf(`
`,l);return h==-1?_r:(l=Number(a.substring(l,h)),isNaN(l)?Zs:(h+=1,h+l>a.length?_r:(a=a.slice(h,h+l),s.C=h+l,a)))}Lt.prototype.cancel=function(){this.J=!0,Qt(this)};function En(s){s.S=Date.now()+s.I,ni(s,s.I)}function ni(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=ke(R(s.ba,s),a)}function Er(s){s.B&&(c.clearTimeout(s.B),s.B=null)}Lt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(mu(this.i,this.A),this.L!=2&&(Ne(),yt(17)),Qt(this),this.s=2,Me(this)):ni(this,this.S-s)};function Me(s){s.j.G==0||s.J||Pi(s.j,s)}function Qt(s){Er(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,zs(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function vr(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||Tr(l.h,s))){if(!s.K&&Tr(l.h,s)&&l.G==3){try{var h=l.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var T=h;if(T[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Pn(l),Sn(l);else break t;Rr(l),yt(18)}}else l.za=T[1],0<l.za-l.T&&37500>T[2]&&l.F&&l.v==0&&!l.C&&(l.C=ke(R(l.Za,l),6e3));if(1>=ii(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Yt(l,11)}else if((s.K||l.g==s)&&Pn(l),!Q(a))for(T=l.Da.g.parse(a),a=0;a<T.length;a++){let $=T[a];if(l.T=$[0],$=$[1],l.G==2)if($[0]=="c"){l.K=$[1],l.ia=$[2];const dt=$[3];dt!=null&&(l.la=dt,l.j.info("VER="+l.la));const ft=$[4];ft!=null&&(l.Aa=ft,l.j.info("SVER="+l.Aa));const le=$[5];le!=null&&typeof le=="number"&&0<le&&(h=1.5*le,l.L=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const Rt=s.g;if(Rt){const Vn=Rt.g?Rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vn){var A=h.h;A.g||Vn.indexOf("spdy")==-1&&Vn.indexOf("quic")==-1&&Vn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Ir(A,A.h),A.h=null))}if(h.D){const Cr=Rt.g?Rt.g.getResponseHeader("X-HTTP-Session-Id"):null;Cr&&(h.ya=Cr,W(h.I,h.D,Cr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),h=l;var P=s;if(h.qa=Di(h,h.J?h.ia:null,h.W),P.K){oi(h.h,P);var H=P,ot=h.L;ot&&(H.I=ot),H.B&&(Er(H),En(H)),h.g=P}else Si(h);0<l.i.length&&Cn(l)}else $[0]!="stop"&&$[0]!="close"||Yt(l,7);else l.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?Yt(l,7):Ar(l):$[0]!="noop"&&l.l&&l.l.ta($),l.v=0)}}Ne(4)}catch{}}var Eu=class{constructor(s,a){this.g=s,this.map=a}};function ri(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function si(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ii(s){return s.h?1:s.g?s.g.size:0}function Tr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Ir(s,a){s.g?s.g.add(a):s.h=a}function oi(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}ri.prototype.cancel=function(){if(this.i=ai(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ai(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return k(s.i)}function vu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(d(s)){for(var a=[],l=s.length,h=0;h<l;h++)a.push(s[h]);return a}a=[],l=0;for(h in s)a[l++]=s[h];return a}function Tu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(d(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const h in s)a[l++]=h;return a}}}function ui(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(d(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=Tu(s),h=vu(s),T=h.length,A=0;A<T;A++)a.call(void 0,h[A],l&&l[A],s)}var li=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Iu(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var h=s[l].indexOf("="),T=null;if(0<=h){var A=s[l].substring(0,h);T=s[l].substring(h+1)}else A=s[l];a(A,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Wt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Wt){this.h=s.h,vn(this,s.j),this.o=s.o,this.g=s.g,Tn(this,s.s),this.l=s.l;var a=s.i,l=new je;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),ci(this,l),this.m=s.m}else s&&(a=String(s).match(li))?(this.h=!1,vn(this,a[1]||"",!0),this.o=Le(a[2]||""),this.g=Le(a[3]||"",!0),Tn(this,a[4]),this.l=Le(a[5]||"",!0),ci(this,a[6]||"",!0),this.m=Le(a[7]||"")):(this.h=!1,this.i=new je(null,this.h))}Wt.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Fe(a,hi,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Fe(a,hi,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Fe(l,l.charAt(0)=="/"?Ru:Au,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Fe(l,Cu)),s.join("")};function Dt(s){return new Wt(s)}function vn(s,a,l){s.j=l?Le(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Tn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function ci(s,a,l){a instanceof je?(s.i=a,Pu(s.i,s.h)):(l||(a=Fe(a,Su)),s.i=new je(a,s.h))}function W(s,a,l){s.i.set(a,l)}function In(s){return W(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Le(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Fe(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,wu),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function wu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var hi=/[#\/\?@]/g,Au=/[#\?:]/g,Ru=/[#\?]/g,Su=/[#\?@]/g,Cu=/#/g;function je(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Ft(s){s.g||(s.g=new Map,s.h=0,s.i&&Iu(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=je.prototype,n.add=function(s,a){Ft(this),this.i=null,s=ae(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function di(s,a){Ft(s),a=ae(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function fi(s,a){return Ft(s),a=ae(s,a),s.g.has(a)}n.forEach=function(s,a){Ft(this),this.g.forEach(function(l,h){l.forEach(function(T){s.call(a,T,h,this)},this)},this)},n.na=function(){Ft(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let h=0;h<a.length;h++){const T=s[h];for(let A=0;A<T.length;A++)l.push(a[h])}return l},n.V=function(s){Ft(this);let a=[];if(typeof s=="string")fi(this,s)&&(a=a.concat(this.g.get(ae(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},n.set=function(s,a){return Ft(this),this.i=null,s=ae(this,s),fi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function pi(s,a,l){di(s,a),0<l.length&&(s.i=null,s.g.set(ae(s,a),k(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var h=a[l];const A=encodeURIComponent(String(h)),P=this.V(h);for(h=0;h<P.length;h++){var T=A;P[h]!==""&&(T+="="+encodeURIComponent(String(P[h]))),s.push(T)}}return this.i=s.join("&")};function ae(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Pu(s,a){a&&!s.j&&(Ft(s),s.i=null,s.g.forEach(function(l,h){var T=h.toLowerCase();h!=T&&(di(this,h),pi(this,T,l))},s)),s.j=a}function bu(s,a){const l=new Oe;if(c.Image){const h=new Image;h.onload=S(jt,l,"TestLoadImage: loaded",!0,a,h),h.onerror=S(jt,l,"TestLoadImage: error",!1,a,h),h.onabort=S(jt,l,"TestLoadImage: abort",!1,a,h),h.ontimeout=S(jt,l,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=s}else a(!1)}function Vu(s,a){const l=new Oe,h=new AbortController,T=setTimeout(()=>{h.abort(),jt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:h.signal}).then(A=>{clearTimeout(T),A.ok?jt(l,"TestPingServer: ok",!0,a):jt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),jt(l,"TestPingServer: error",!1,a)})}function jt(s,a,l,h,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),h(l)}catch{}}function Du(){this.g=new fu}function xu(s,a,l){const h=l||"";try{ui(s,function(T,A){let P=T;f(T)&&(P=dr(T)),a.push(h+A+"="+encodeURIComponent(P))})}catch(T){throw a.push(h+"type="+encodeURIComponent("_badmap")),T}}function wn(s){this.l=s.Ub||null,this.j=s.eb||!1}D(wn,fr),wn.prototype.g=function(){return new An(this.l,this.j)},wn.prototype.i=(function(s){return function(){return s}})({});function An(s,a){ht.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(An,ht),n=An.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Be(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ue(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Be(this)),this.g&&(this.readyState=3,Be(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function gi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Ue(this):Be(this),this.readyState==3&&gi(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Ue(this))},n.Qa=function(s){this.g&&(this.response=s,Ue(this))},n.ga=function(){this.g&&Ue(this)};function Ue(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Be(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function Be(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(An.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function mi(s){let a="";return G(s,function(l,h){a+=h,a+=":",a+=l,a+=`\r
`}),a}function wr(s,a,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=mi(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):W(s,a,l))}function J(s){ht.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(J,ht);var Nu=/^https?$/i,ku=["POST","PUT"];n=J.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():mr.g(),this.v=this.o?Ks(this.o):Ks(mr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(A){_i(this,A);return}if(s=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var T in h)l.set(T,h[T]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const A of h.keys())l.set(A,h.get(A));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),T=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ku,a,void 0))||h||T||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,P]of l)this.g.setRequestHeader(A,P);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vi(this),this.u=!0,this.g.send(s),this.u=!1}catch(A){_i(this,A)}};function _i(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,yi(s),Rn(s)}function yi(s){s.A||(s.A=!0,_t(s,"complete"),_t(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,_t(this,"complete"),_t(this,"abort"),Rn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Rn(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ei(this):this.bb())},n.bb=function(){Ei(this)};function Ei(s){if(s.h&&typeof u<"u"&&(!s.v[1]||xt(s)!=4||s.Z()!=2)){if(s.u&&xt(s)==4)Bs(s.Ea,0,s);else if(_t(s,"readystatechange"),xt(s)==4){s.h=!1;try{const P=s.Z();t:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var h;if(h=P===0){var T=String(s.D).match(li)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),h=!Nu.test(T?T.toLowerCase():"")}l=h}if(l)_t(s,"complete"),_t(s,"success");else{s.m=6;try{var A=2<xt(s)?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.Z()+"]",yi(s)}}finally{Rn(s)}}}}function Rn(s,a){if(s.g){vi(s);const l=s.g,h=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||_t(s,"ready");try{l.onreadystatechange=h}catch{}}}function vi(s){s.I&&(c.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function xt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<xt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),du(a)}};function Ti(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Ou(s){const a={};s=(s.g&&2<=xt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<s.length;h++){if(Q(s[h]))continue;var l=v(s[h]);const T=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=a[T]||[];a[T]=A,A.push(l)}E(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qe(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function Ii(s){this.Aa=0,this.i=[],this.j=new Oe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qe("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qe("baseRetryDelayMs",5e3,s),this.cb=qe("retryDelaySeedMs",1e4,s),this.Wa=qe("forwardChannelMaxRetries",2,s),this.wa=qe("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new ri(s&&s.concurrentRequestLimit),this.Da=new Du,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ii.prototype,n.la=8,n.G=1,n.connect=function(s,a,l,h){yt(0),this.W=s,this.H=a||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.I=Di(this,null,this.W),Cn(this)};function Ar(s){if(wi(s),s.G==3){var a=s.U++,l=Dt(s.I);if(W(l,"SID",s.K),W(l,"RID",a),W(l,"TYPE","terminate"),$e(s,l),a=new Lt(s,s.j,a),a.L=2,a.v=In(Dt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=xi(a.j,null),a.g.ea(a.v)),a.F=Date.now(),En(a)}Vi(s)}function Sn(s){s.g&&(Sr(s),s.g.cancel(),s.g=null)}function wi(s){Sn(s),s.u&&(c.clearTimeout(s.u),s.u=null),Pn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function Cn(s){if(!si(s.h)&&!s.s){s.s=!0;var a=s.Ga;Pe||Ms(),be||(Pe(),be=!0),sr.add(a,s),s.B=0}}function Mu(s,a){return ii(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=ke(R(s.Ga,s,a),bi(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new Lt(this,this.j,s);let A=this.o;if(this.S&&(A?(A=p(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(T.H=A,A=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Ri(this,T,a),l=Dt(this.I),W(l,"RID",s),W(l,"CVER",22),this.D&&W(l,"X-HTTP-Session-Id",this.D),$e(this,l),A&&(this.O?a="headers="+encodeURIComponent(String(mi(A)))+"&"+a:this.m&&wr(l,this.m,A)),Ir(this.h,T),this.Ua&&W(l,"TYPE","init"),this.P?(W(l,"$req",a),W(l,"SID","null"),T.T=!0,yr(T,l,null)):yr(T,l,a),this.G=2}}else this.G==3&&(s?Ai(this,s):this.i.length==0||si(this.h)||Ai(this))};function Ai(s,a){var l;a?l=a.l:l=s.U++;const h=Dt(s.I);W(h,"SID",s.K),W(h,"RID",l),W(h,"AID",s.T),$e(s,h),s.m&&s.o&&wr(h,s.m,s.o),l=new Lt(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Ri(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Ir(s.h,l),yr(l,h,a)}function $e(s,a){s.H&&G(s.H,function(l,h){W(a,h,l)}),s.l&&ui({},function(l,h){W(a,h,l)})}function Ri(s,a,l){l=Math.min(s.i.length,l);var h=s.l?R(s.l.Na,s.l,s):null;t:{var T=s.i;let A=-1;for(;;){const P=["count="+l];A==-1?0<l?(A=T[0].g,P.push("ofs="+A)):A=0:P.push("ofs="+A);let H=!0;for(let ot=0;ot<l;ot++){let $=T[ot].g;const dt=T[ot].map;if($-=A,0>$)A=Math.max(0,T[ot].g-100),H=!1;else try{xu(dt,P,"req"+$+"_")}catch{h&&h(dt)}}if(H){h=P.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,h}function Si(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Pe||Ms(),be||(Pe(),be=!0),sr.add(a,s),s.v=0}}function Rr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=ke(R(s.Fa,s),bi(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Ci(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=ke(R(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),Sn(this),Ci(this))};function Sr(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function Ci(s){s.g=new Lt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Dt(s.qa);W(a,"RID","rpc"),W(a,"SID",s.K),W(a,"AID",s.T),W(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&W(a,"TO",s.ja),W(a,"TYPE","xmlhttp"),$e(s,a),s.m&&s.o&&wr(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=In(Dt(a)),l.m=null,l.P=!0,ti(l,s)}n.Za=function(){this.C!=null&&(this.C=null,Sn(this),Rr(this),yt(19))};function Pn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function Pi(s,a){var l=null;if(s.g==a){Pn(s),Sr(s),s.g=null;var h=2}else if(Tr(s.h,a))l=a.D,oi(s.h,a),h=1;else return;if(s.G!=0){if(a.o)if(h==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var T=s.B;h=mn(),_t(h,new Ys(h,l)),Cn(s)}else Si(s);else if(T=a.s,T==3||T==0&&0<a.X||!(h==1&&Mu(s,a)||h==2&&Rr(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),T){case 1:Yt(s,5);break;case 4:Yt(s,10);break;case 3:Yt(s,6);break;default:Yt(s,2)}}}function bi(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function Yt(s,a){if(s.j.info("Error code "+a),a==2){var l=R(s.fb,s),h=s.Xa;const T=!h;h=new Wt(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||vn(h,"https"),In(h),T?bu(h.toString(),l):Vu(h.toString(),l)}else yt(2);s.G=0,s.l&&s.l.sa(a),Vi(s),wi(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function Vi(s){if(s.G=0,s.ka=[],s.l){const a=ai(s.h);(a.length!=0||s.i.length!=0)&&(x(s.ka,a),x(s.ka,s.i),s.h.i.length=0,k(s.i),s.i.length=0),s.l.ra()}}function Di(s,a,l){var h=l instanceof Wt?Dt(l):new Wt(l);if(h.g!="")a&&(h.g=a+"."+h.g),Tn(h,h.s);else{var T=c.location;h=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var A=new Wt(null);h&&vn(A,h),a&&(A.g=a),T&&Tn(A,T),l&&(A.l=l),h=A}return l=s.D,a=s.ya,l&&a&&W(h,l,a),W(h,"VER",s.la),$e(s,h),h}function xi(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new J(new wn({eb:l})):new J(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ni(){}n=Ni.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function bn(){}bn.prototype.g=function(s,a){return new It(s,a)};function It(s,a){ht.call(this),this.g=new Ii(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!Q(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!Q(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new ue(this)}D(It,ht),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){Ar(this.g)},It.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=dr(s),s=l);a.i.push(new Eu(a.Ya++,s)),a.G==3&&Cn(a)},It.prototype.N=function(){this.g.l=null,delete this.j,Ar(this.g),delete this.g,It.aa.N.call(this)};function ki(s){pr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}D(ki,pr);function Oi(){gr.call(this),this.status=1}D(Oi,gr);function ue(s){this.g=s}D(ue,Ni),ue.prototype.ua=function(){_t(this.g,"a")},ue.prototype.ta=function(s){_t(this.g,new ki(s))},ue.prototype.sa=function(s){_t(this.g,new Oi)},ue.prototype.ra=function(){_t(this.g,"b")},bn.prototype.createWebChannel=bn.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,aa=function(){return new bn},oa=function(){return mn()},ia=Ht,Hr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_n.NO_ERROR=0,_n.TIMEOUT=8,_n.HTTP_ERROR=6,Mn=_n,Xs.COMPLETE="complete",sa=Xs,Gs.EventType=xe,xe.OPEN="a",xe.CLOSE="b",xe.ERROR="c",xe.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Ke=Gs,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,ra=J}).apply(typeof xn<"u"?xn:typeof self<"u"?self:typeof window<"u"?window:{});const eo="@firebase/firestore";/**
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
 */let Ae="10.14.0";/**
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
 */const re=new Yo("@firebase/firestore");function ze(){return re.logLevel}function N(n,...t){if(re.logLevel<=B.DEBUG){const e=t.map(ds);re.debug(`Firestore (${Ae}): ${n}`,...e)}}function Ot(n,...t){if(re.logLevel<=B.ERROR){const e=t.map(ds);re.error(`Firestore (${Ae}): ${n}`,...e)}}function _e(n,...t){if(re.logLevel<=B.WARN){const e=t.map(ds);re.warn(`Firestore (${Ae}): ${n}`,...e)}}function ds(n){if(typeof n=="string")return n;try{/**
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
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
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
 */function F(n="Unexpected state"){const t=`FIRESTORE (${Ae}) INTERNAL ASSERTION FAILED: `+n;throw Ot(t),new Error(t)}function tt(n,t){n||F()}function U(n,t){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends we{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ee{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class ua{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Oc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(gt.UNAUTHENTICATED)))}shutdown(){}}class Mc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Lc{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){tt(this.o===void 0);let r=this.i;const i=d=>this.i!==r?(r=this.i,e(d)):Promise.resolve();let o=new ee;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ee,t.enqueueRetryable((()=>i(this.currentUser)))};const u=()=>{const d=o;t.enqueueRetryable((async()=>{await d.promise,await i(this.currentUser)}))},c=d=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((d=>c(d))),setTimeout((()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ee)}}),0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(tt(typeof r.accessToken=="string"),new ua(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return tt(t===null||typeof t=="string"),new gt(t)}}class Fc{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class jc{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Fc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(gt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Uc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bc{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){tt(this.o===void 0);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,N("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(tt(typeof e.token=="string"),this.R=e.token,new Uc(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function qc(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class la{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=qc(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function z(n,t){return n<t?-1:n>t?1:0}function ye(n,t,e){return n.length===t.length&&n.every(((r,i)=>e(r,t[i])))}/**
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
 */class Tt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new O(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Tt.fromMillis(Date.now())}static fromDate(t){return Tt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new Tt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class L{constructor(t){this.timestamp=t}static fromTimestamp(t){return new L(t)}static min(){return new L(new Tt(0,0))}static max(){return new L(new Tt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class nn{constructor(t,e,r){e===void 0?e=0:e>t.length&&F(),r===void 0?r=t.length-e:r>t.length-e&&F(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return nn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof nn?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=t.get(i),u=e.get(i);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Z extends nn{construct(t,e,r){return new Z(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((i=>i.length>0)))}return new Z(e)}static emptyPath(){return new Z([])}}const $c=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends nn{construct(t,e,r){return new Et(t,e,r)}static isValidIdentifier(t){return $c.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Et(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new O(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new O(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new O(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=d,i+=2}else c==="`"?(u=!u,i++):c!=="."||u?(r+=c,i++):(o(),i++)}if(o(),u)throw new O(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Et(e)}static emptyPath(){return new Et([])}}/**
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
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(Z.fromString(t))}static fromName(t){return new M(Z.fromString(t).popFirst(5))}static empty(){return new M(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Z.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Z.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new Z(t.slice()))}}function zc(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=L.fromTimestamp(r===1e9?new Tt(e+1,0):new Tt(e,r));return new zt(i,M.empty(),t)}function Kc(n){return new zt(n.readTime,n.key,-1)}class zt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new zt(L.min(),M.empty(),-1)}static max(){return new zt(L.max(),M.empty(),-1)}}function Gc(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:z(n.largestBatchId,t.largestBatchId))}/**
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
 */const Hc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function fs(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==Hc)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C(((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):C.reject(e)}static resolve(t){return new C(((e,r)=>{e(t)}))}static reject(t){return new C(((e,r)=>{r(t)}))}static waitFor(t){return new C(((e,r)=>{let i=0,o=0,u=!1;t.forEach((c=>{++i,c.next((()=>{++o,u&&o===i&&e()}),(d=>r(d)))})),u=!0,o===i&&e()}))}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next((i=>i?C.resolve(i):r()));return e}static forEach(t,e){const r=[];return t.forEach(((i,o)=>{r.push(e.call(this,i,o))})),this.waitFor(r)}static mapArray(t,e){return new C(((r,i)=>{const o=t.length,u=new Array(o);let c=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next((g=>{u[f]=g,++c,c===o&&r(u)}),(g=>i(g)))}}))}static doWhile(t,e){return new C(((r,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):r()};o()}))}}function Wc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function un(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ps{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ps.oe=-1;function Wn(n){return n==null}function Qr(n){return n===0&&1/n==-1/0}/**
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
 */function no(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Yn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Yc(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class nt{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new nt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Nn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Nn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Nn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Nn(this.root,t,this.comparator,!0)}}class Nn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new at(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const t=this.left.check();if(t!==this.right.check())throw F();return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,r,i,o){return this}insert(t,e,r){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ut{constructor(t){this.comparator=t,this.data=new nt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ro(this.data.getIterator())}getIteratorFrom(t){return new ro(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof ut)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ut(this.comparator);return e.data=t,e}}class ro{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ut{constructor(t){this.fields=t,t.sort(Et.comparator)}static empty(){return new Ut([])}unionWith(t){let e=new ut(Et.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ut(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ye(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
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
 */class ca extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ca("Invalid base64 string: "+o):o}})(t);return new lt(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o})(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Xc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kt(n){if(tt(!!n),typeof n=="string"){let t=0;const e=Xc.exec(n);if(tt(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:et(n.seconds),nanos:et(n.nanos)}}function et(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function se(n){return typeof n=="string"?lt.fromBase64String(n):lt.fromUint8Array(n)}/**
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
 */function gs(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ms(n){const t=n.mapValue.fields.__previous_value__;return gs(t)?ms(t):t}function rn(n){const t=Kt(n.mapValue.fields.__local_write_time__.timestampValue);return new Tt(t.seconds,t.nanos)}/**
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
 */class Jc{constructor(t,e,r,i,o,u,c,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=f}}class sn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new sn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof sn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const kn={mapValue:{}};function ie(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?gs(n)?4:th(n)?9007199254740991:Zc(n)?10:11:F()}function Pt(n,t){if(n===t)return!0;const e=ie(n);if(e!==ie(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return rn(n).isEqual(rn(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Kt(i.timestampValue),c=Kt(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(i,o){return se(i.bytesValue).isEqual(se(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(i,o){return et(i.geoPointValue.latitude)===et(o.geoPointValue.latitude)&&et(i.geoPointValue.longitude)===et(o.geoPointValue.longitude)})(n,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return et(i.integerValue)===et(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=et(i.doubleValue),c=et(o.doubleValue);return u===c?Qr(u)===Qr(c):isNaN(u)&&isNaN(c)}return!1})(n,t);case 9:return ye(n.arrayValue.values||[],t.arrayValue.values||[],Pt);case 10:case 11:return(function(i,o){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(no(u)!==no(c))return!1;for(const d in u)if(u.hasOwnProperty(d)&&(c[d]===void 0||!Pt(u[d],c[d])))return!1;return!0})(n,t);default:return F()}}function on(n,t){return(n.values||[]).find((e=>Pt(e,t)))!==void 0}function Ee(n,t){if(n===t)return 0;const e=ie(n),r=ie(t);if(e!==r)return z(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(n.booleanValue,t.booleanValue);case 2:return(function(o,u){const c=et(o.integerValue||o.doubleValue),d=et(u.integerValue||u.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1})(n,t);case 3:return so(n.timestampValue,t.timestampValue);case 4:return so(rn(n),rn(t));case 5:return z(n.stringValue,t.stringValue);case 6:return(function(o,u){const c=se(o),d=se(u);return c.compareTo(d)})(n.bytesValue,t.bytesValue);case 7:return(function(o,u){const c=o.split("/"),d=u.split("/");for(let f=0;f<c.length&&f<d.length;f++){const g=z(c[f],d[f]);if(g!==0)return g}return z(c.length,d.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,u){const c=z(et(o.latitude),et(u.latitude));return c!==0?c:z(et(o.longitude),et(u.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return io(n.arrayValue,t.arrayValue);case 10:return(function(o,u){var c,d,f,g;const w=o.fields||{},R=u.fields||{},S=(c=w.value)===null||c===void 0?void 0:c.arrayValue,D=(d=R.value)===null||d===void 0?void 0:d.arrayValue,k=z(((f=S?.values)===null||f===void 0?void 0:f.length)||0,((g=D?.values)===null||g===void 0?void 0:g.length)||0);return k!==0?k:io(S,D)})(n.mapValue,t.mapValue);case 11:return(function(o,u){if(o===kn.mapValue&&u===kn.mapValue)return 0;if(o===kn.mapValue)return 1;if(u===kn.mapValue)return-1;const c=o.fields||{},d=Object.keys(c),f=u.fields||{},g=Object.keys(f);d.sort(),g.sort();for(let w=0;w<d.length&&w<g.length;++w){const R=z(d[w],g[w]);if(R!==0)return R;const S=Ee(c[d[w]],f[g[w]]);if(S!==0)return S}return z(d.length,g.length)})(n.mapValue,t.mapValue);default:throw F()}}function so(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return z(n,t);const e=Kt(n),r=Kt(t),i=z(e.seconds,r.seconds);return i!==0?i:z(e.nanos,r.nanos)}function io(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Ee(e[i],r[i]);if(o)return o}return z(e.length,r.length)}function ve(n){return Wr(n)}function Wr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=Kt(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return se(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return M.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=Wr(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of r)o?o=!1:i+=",",i+=`${u}:${Wr(e.fields[u])}`;return i+"}"})(n.mapValue):F()}function Yr(n){return!!n&&"integerValue"in n}function _s(n){return!!n&&"arrayValue"in n}function oo(n){return!!n&&"nullValue"in n}function ao(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Mr(n){return!!n&&"mapValue"in n}function Zc(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Qe(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Yn(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=Qe(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Qe(n.arrayValue.values[e]);return t}return Object.assign({},n)}function th(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class St{constructor(t){this.value=t}static empty(){return new St({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Mr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Qe(e)}setAll(t){let e=Et.emptyPath(),r={},i=[];t.forEach(((u,c)=>{if(!e.isImmediateParentOf(c)){const d=this.getFieldsMap(e);this.applyChanges(d,r,i),r={},i=[],e=c.popLast()}u?r[c.lastSegment()]=Qe(u):i.push(c.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Mr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Pt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Mr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Yn(e,((i,o)=>t[i]=o));for(const i of r)delete t[i]}clone(){return new St(Qe(this.value))}}/**
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
 */class mt{constructor(t,e,r,i,o,u,c){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new mt(t,0,L.min(),L.min(),L.min(),St.empty(),0)}static newFoundDocument(t,e,r,i){return new mt(t,1,e,L.min(),r,i,0)}static newNoDocument(t,e){return new mt(t,2,e,L.min(),L.min(),St.empty(),0)}static newUnknownDocument(t,e){return new mt(t,3,e,L.min(),L.min(),St.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof mt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qn{constructor(t,e){this.position=t,this.inclusive=e}}function uo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],u=n.position[i];if(o.field.isKeyField()?r=M.comparator(M.fromName(u.referenceValue),e.key):r=Ee(u,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function lo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Pt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class $n{constructor(t,e="asc"){this.field=t,this.dir=e}}function eh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class ha{}class st extends ha{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new rh(t,e,r):e==="array-contains"?new oh(t,r):e==="in"?new ah(t,r):e==="not-in"?new uh(t,r):e==="array-contains-any"?new lh(t,r):new st(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new sh(t,r):new ih(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ee(e,this.value)):e!==null&&ie(this.value)===ie(e)&&this.matchesComparison(Ee(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bt extends ha{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new bt(t,e)}matches(t){return da(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function da(n){return n.op==="and"}function fa(n){return nh(n)&&da(n)}function nh(n){for(const t of n.filters)if(t instanceof bt)return!1;return!0}function Xr(n){if(n instanceof st)return n.field.canonicalString()+n.op.toString()+ve(n.value);if(fa(n))return n.filters.map((t=>Xr(t))).join(",");{const t=n.filters.map((e=>Xr(e))).join(",");return`${n.op}(${t})`}}function pa(n,t){return n instanceof st?(function(r,i){return i instanceof st&&r.op===i.op&&r.field.isEqual(i.field)&&Pt(r.value,i.value)})(n,t):n instanceof bt?(function(r,i){return i instanceof bt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((o,u,c)=>o&&pa(u,i.filters[c])),!0):!1})(n,t):void F()}function ga(n){return n instanceof st?(function(e){return`${e.field.canonicalString()} ${e.op} ${ve(e.value)}`})(n):n instanceof bt?(function(e){return e.op.toString()+" {"+e.getFilters().map(ga).join(" ,")+"}"})(n):"Filter"}class rh extends st{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class sh extends st{constructor(t,e){super(t,"in",e),this.keys=ma("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class ih extends st{constructor(t,e){super(t,"not-in",e),this.keys=ma("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ma(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((r=>M.fromName(r.referenceValue)))}class oh extends st{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return _s(e)&&on(e.arrayValue,this.value)}}class ah extends st{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&on(this.value.arrayValue,e)}}class uh extends st{constructor(t,e){super(t,"not-in",e)}matches(t){if(on(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!on(this.value.arrayValue,e)}}class lh extends st{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!_s(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>on(this.value.arrayValue,r)))}}/**
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
 */class ch{constructor(t,e=null,r=[],i=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=u,this.endAt=c,this.ue=null}}function co(n,t=null,e=[],r=[],i=null,o=null,u=null){return new ch(n,t,e,r,i,o,u)}function ys(n){const t=U(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>Xr(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),Wn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>ve(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>ve(r))).join(",")),t.ue=e}return t.ue}function Es(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!eh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!pa(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!lo(n.startAt,t.startAt)&&lo(n.endAt,t.endAt)}function Jr(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Xn{constructor(t,e=null,r=[],i=[],o=null,u="F",c=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function hh(n,t,e,r,i,o,u,c){return new Xn(n,t,e,r,i,o,u,c)}function vs(n){return new Xn(n)}function ho(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function dh(n){return n.collectionGroup!==null}function We(n){const t=U(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new ut(Et.comparator);return u.filters.forEach((d=>{d.getFlattenedFilters().forEach((f=>{f.isInequality()&&(c=c.add(f.field))}))})),c})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new $n(o,r))})),e.has(Et.keyField().canonicalString())||t.ce.push(new $n(Et.keyField(),r))}return t.ce}function Ct(n){const t=U(n);return t.le||(t.le=fh(t,We(n))),t.le}function fh(n,t){if(n.limitType==="F")return co(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new $n(i.field,o)}));const e=n.endAt?new qn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new qn(n.startAt.position,n.startAt.inclusive):null;return co(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Zr(n,t,e){return new Xn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Jn(n,t){return Es(Ct(n),Ct(t))&&n.limitType===t.limitType}function _a(n){return`${ys(Ct(n))}|lt:${n.limitType}`}function ce(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((i=>ga(i))).join(", ")}]`),Wn(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((i=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(i))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((i=>ve(i))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((i=>ve(i))).join(",")),`Target(${r})`})(Ct(n))}; limitType=${n.limitType})`}function Zn(n,t){return t.isFoundDocument()&&(function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,i){for(const o of We(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0})(n,t)&&(function(r,i){return!(r.startAt&&!(function(u,c,d){const f=uo(u,c,d);return u.inclusive?f<=0:f<0})(r.startAt,We(r),i)||r.endAt&&!(function(u,c,d){const f=uo(u,c,d);return u.inclusive?f>=0:f>0})(r.endAt,We(r),i))})(n,t)}function ph(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ya(n){return(t,e)=>{let r=!1;for(const i of We(n)){const o=gh(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function gh(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):(function(o,u,c){const d=u.data.field(o),f=c.data.field(o);return d!==null&&f!==null?Ee(d,f):F()})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
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
 */class Re{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Yn(this.inner,((e,r)=>{for(const[i,o]of r)t(i,o)}))}isEmpty(){return Yc(this.inner)}size(){return this.innerSize}}/**
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
 */const mh=new nt(M.comparator);function Gt(){return mh}const Ea=new nt(M.comparator);function Ge(...n){let t=Ea;for(const e of n)t=t.insert(e.key,e);return t}function _h(n){let t=Ea;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function Zt(){return Ye()}function va(){return Ye()}function Ye(){return new Re((n=>n.toString()),((n,t)=>n.isEqual(t)))}const yh=new ut(M.comparator);function q(...n){let t=yh;for(const e of n)t=t.add(e);return t}const Eh=new ut(z);function vh(){return Eh}/**
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
 */function Th(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qr(t)?"-0":t}}function Ih(n){return{integerValue:""+n}}/**
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
 */class tr{constructor(){this._=void 0}}function wh(n,t,e){return n instanceof ts?(function(i,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&gs(o)&&(o=ms(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}})(e,t):n instanceof zn?Ta(n,t):n instanceof Kn?Ia(n,t):(function(i,o){const u=Rh(i,o),c=fo(u)+fo(i.Pe);return Yr(u)&&Yr(i.Pe)?Ih(c):Th(i.serializer,c)})(n,t)}function Ah(n,t,e){return n instanceof zn?Ta(n,t):n instanceof Kn?Ia(n,t):e}function Rh(n,t){return n instanceof es?(function(r){return Yr(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class ts extends tr{}class zn extends tr{constructor(t){super(),this.elements=t}}function Ta(n,t){const e=wa(t);for(const r of n.elements)e.some((i=>Pt(i,r)))||e.push(r);return{arrayValue:{values:e}}}class Kn extends tr{constructor(t){super(),this.elements=t}}function Ia(n,t){let e=wa(t);for(const r of n.elements)e=e.filter((i=>!Pt(i,r)));return{arrayValue:{values:e}}}class es extends tr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function fo(n){return et(n.integerValue||n.doubleValue)}function wa(n){return _s(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Sh(n,t){return n.field.isEqual(t.field)&&(function(r,i){return r instanceof zn&&i instanceof zn||r instanceof Kn&&i instanceof Kn?ye(r.elements,i.elements,Pt):r instanceof es&&i instanceof es?Pt(r.Pe,i.Pe):r instanceof ts&&i instanceof ts})(n.transform,t.transform)}class ne{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ne}static exists(t){return new ne(void 0,t)}static updateTime(t){return new ne(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ln(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Ts{}function Aa(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ph(n.key,ne.none()):new Is(n.key,n.data,ne.none());{const e=n.data,r=St.empty();let i=new ut(Et.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?r.delete(o):r.set(o,u),i=i.add(o)}return new er(n.key,r,new Ut(i.toArray()),ne.none())}}function Ch(n,t,e){n instanceof Is?(function(i,o,u){const c=i.value.clone(),d=go(i.fieldTransforms,o,u.transformResults);c.setAll(d),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()})(n,t,e):n instanceof er?(function(i,o,u){if(!Ln(i.precondition,o))return void o.convertToUnknownDocument(u.version);const c=go(i.fieldTransforms,o,u.transformResults),d=o.data;d.setAll(Ra(i)),d.setAll(c),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,t,e):(function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()})(0,t,e)}function Xe(n,t,e,r){return n instanceof Is?(function(o,u,c,d){if(!Ln(o.precondition,u))return c;const f=o.value.clone(),g=mo(o.fieldTransforms,d,u);return f.setAll(g),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null})(n,t,e,r):n instanceof er?(function(o,u,c,d){if(!Ln(o.precondition,u))return c;const f=mo(o.fieldTransforms,d,u),g=u.data;return g.setAll(Ra(o)),g.setAll(f),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((w=>w.field)))})(n,t,e,r):(function(o,u,c){return Ln(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c})(n,t,e)}function po(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ye(r,i,((o,u)=>Sh(o,u)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Is extends Ts{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class er extends Ts{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ra(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function go(n,t,e){const r=new Map;tt(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],u=o.transform,c=t.data.field(o.field);r.set(o.field,Ah(u,c,e[i]))}return r}function mo(n,t,e){const r=new Map;for(const i of n){const o=i.transform,u=e.data.field(i.field);r.set(i.field,wh(o,u,t))}return r}class Ph extends Ts{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class bh{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Ch(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Xe(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Xe(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=va();return this.mutations.forEach((i=>{const o=t.get(i.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(i.key)?null:c;const d=Aa(u,c);d!==null&&r.set(i.key,d),u.isValidDocument()||u.convertToNoDocument(L.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),q())}isEqual(t){return this.batchId===t.batchId&&ye(this.mutations,t.mutations,((e,r)=>po(e,r)))&&ye(this.baseMutations,t.baseMutations,((e,r)=>po(e,r)))}}/**
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
 */class Vh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Dh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var rt,j;function Sa(n){if(n===void 0)return Ot("GRPC error has no .code"),V.UNKNOWN;switch(n){case rt.OK:return V.OK;case rt.CANCELLED:return V.CANCELLED;case rt.UNKNOWN:return V.UNKNOWN;case rt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case rt.INTERNAL:return V.INTERNAL;case rt.UNAVAILABLE:return V.UNAVAILABLE;case rt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case rt.NOT_FOUND:return V.NOT_FOUND;case rt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case rt.ABORTED:return V.ABORTED;case rt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case rt.DATA_LOSS:return V.DATA_LOSS;default:return F()}}(j=rt||(rt={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function xh(){return new TextEncoder}/**
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
 */const Nh=new te([4294967295,4294967295],0);function _o(n){const t=xh().encode(n),e=new na;return e.update(t),new Uint8Array(e.digest())}function yo(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new te([e,r],0),new te([i,o],0)]}class ws{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new He(`Invalid padding: ${e}`);if(r<0)throw new He(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new He(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new He(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=te.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(te.fromNumber(r)));return i.compare(Nh)===1&&(i=new te([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=_o(t),[r,i]=yo(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(r,i,o);if(!this.de(u))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new ws(o,i,e);return r.forEach((c=>u.insert(c))),u}insert(t){if(this.Ie===0)return;const e=_o(t),[r,i]=yo(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(r,i,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class He extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class nr{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,ln.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new nr(L.min(),i,new nt(z),Gt(),q())}}class ln{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new ln(r,e,q(),q(),q())}}/**
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
 */class Fn{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class Ca{constructor(t,e){this.targetId=t,this.me=e}}class Pa{constructor(t,e,r=lt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Eo{constructor(){this.fe=0,this.ge=To(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=q(),e=q(),r=q();return this.ge.forEach(((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:F()}})),new ln(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=To()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,tt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class kh{constructor(t){this.Le=t,this.Be=new Map,this.ke=Gt(),this.qe=vo(),this.Qe=new nt(z)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,(e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:F()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach(((r,i)=>{this.ze(i)&&e(i)}))}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const o=i.target;if(Jr(o))if(r===0){const u=new M(o.path);this.Ue(e,u,mt.newNoDocument(u,L.min()))}else tt(r===1);else{const u=this.Ye(e);if(u!==r){const c=this.Ze(t),d=c?this.Xe(c,t,u):1;if(d!==0){this.je(e);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let u,c;try{u=se(r).toUint8Array()}catch(d){if(d instanceof ca)return _e("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{c=new ws(u,i,o)}catch(d){return _e(d instanceof He?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return c.Ie===0?null:c}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach((o=>{const u=this.Le.tt(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),i++)})),i}rt(t){const e=new Map;this.Be.forEach(((o,u)=>{const c=this.Je(u);if(c){if(o.current&&Jr(c.target)){const d=new M(c.target.path);this.ke.get(d)!==null||this.it(u,d)||this.Ue(u,d,mt.newNoDocument(d,t))}o.be&&(e.set(u,o.ve()),o.Ce())}}));let r=q();this.qe.forEach(((o,u)=>{let c=!0;u.forEachWhile((d=>{const f=this.Je(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(o))})),this.ke.forEach(((o,u)=>u.setReadTime(t)));const i=new nr(t,e,this.Qe,this.ke,r);return this.ke=Gt(),this.qe=vo(),this.Qe=new nt(z),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Eo,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ut(z),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Eo),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.Ue(t,e,null)}))}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function vo(){return new nt(M.comparator)}function To(){return new nt(M.comparator)}const Oh={asc:"ASCENDING",desc:"DESCENDING"},Mh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Lh={and:"AND",or:"OR"};class Fh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ns(n,t){return n.useProto3Json||Wn(t)?t:{value:t}}function jh(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Uh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function pe(n){return tt(!!n),L.fromTimestamp((function(e){const r=Kt(e);return new Tt(r.seconds,r.nanos)})(n))}function Bh(n,t){return rs(n,t).canonicalString()}function rs(n,t){const e=(function(i){return new Z(["projects",i.projectId,"databases",i.database])})(n).child("documents");return t===void 0?e:e.child(t)}function ba(n){const t=Z.fromString(n);return tt(ka(t)),t}function Lr(n,t){const e=ba(t);if(e.get(1)!==n.databaseId.projectId)throw new O(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new O(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(Da(e))}function Va(n,t){return Bh(n.databaseId,t)}function qh(n){const t=ba(n);return t.length===4?Z.emptyPath():Da(t)}function Io(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Da(n){return tt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function $h(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:F()})(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=(function(f,g){return f.useProto3Json?(tt(g===void 0||typeof g=="string"),lt.fromBase64String(g||"")):(tt(g===void 0||g instanceof Buffer||g instanceof Uint8Array),lt.fromUint8Array(g||new Uint8Array))})(n,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&(function(f){const g=f.code===void 0?V.UNKNOWN:Sa(f.code);return new O(g,f.message||"")})(u);e=new Pa(r,i,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Lr(n,r.document.name),o=pe(r.document.updateTime),u=r.document.createTime?pe(r.document.createTime):L.min(),c=new St({mapValue:{fields:r.document.fields}}),d=mt.newFoundDocument(i,o,u,c),f=r.targetIds||[],g=r.removedTargetIds||[];e=new Fn(f,g,d.key,d)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Lr(n,r.document),o=r.readTime?pe(r.readTime):L.min(),u=mt.newNoDocument(i,o),c=r.removedTargetIds||[];e=new Fn([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Lr(n,r.document),o=r.removedTargetIds||[];e=new Fn([],o,i,null)}else{if(!("filter"in t))return F();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,u=new Dh(i,o),c=r.targetId;e=new Ca(c,u)}}return e}function zh(n,t){return{documents:[Va(n,t.path)]}}function Kh(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Va(n,i);const o=(function(f){if(f.length!==0)return Na(bt.create(f,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const u=(function(f){if(f.length!==0)return f.map((g=>(function(R){return{field:he(R.field),direction:Qh(R.dir)}})(g)))})(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=ns(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(t.endAt)),{_t:e,parent:i}}function Gh(n){let t=qh(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){tt(r===1);const g=e.from[0];g.allDescendants?i=g.collectionId:t=t.child(g.collectionId)}let o=[];e.where&&(o=(function(w){const R=xa(w);return R instanceof bt&&fa(R)?R.getFilters():[R]})(e.where));let u=[];e.orderBy&&(u=(function(w){return w.map((R=>(function(D){return new $n(de(D.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(R)))})(e.orderBy));let c=null;e.limit&&(c=(function(w){let R;return R=typeof w=="object"?w.value:w,Wn(R)?null:R})(e.limit));let d=null;e.startAt&&(d=(function(w){const R=!!w.before,S=w.values||[];return new qn(S,R)})(e.startAt));let f=null;return e.endAt&&(f=(function(w){const R=!w.before,S=w.values||[];return new qn(S,R)})(e.endAt)),hh(t,i,u,o,c,"F",d,f)}function Hh(n,t){const e=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function xa(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=de(e.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=de(e.unaryFilter.field);return st.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=de(e.unaryFilter.field);return st.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=de(e.unaryFilter.field);return st.create(u,"!=",{nullValue:"NULL_VALUE"});default:return F()}})(n):n.fieldFilter!==void 0?(function(e){return st.create(de(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return bt.create(e.compositeFilter.filters.map((r=>xa(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F()}})(e.compositeFilter.op))})(n):F()}function Qh(n){return Oh[n]}function Wh(n){return Mh[n]}function Yh(n){return Lh[n]}function he(n){return{fieldPath:n.canonicalString()}}function de(n){return Et.fromServerFormat(n.fieldPath)}function Na(n){return n instanceof st?(function(e){if(e.op==="=="){if(ao(e.value))return{unaryFilter:{field:he(e.field),op:"IS_NAN"}};if(oo(e.value))return{unaryFilter:{field:he(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ao(e.value))return{unaryFilter:{field:he(e.field),op:"IS_NOT_NAN"}};if(oo(e.value))return{unaryFilter:{field:he(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:he(e.field),op:Wh(e.op),value:e.value}}})(n):n instanceof bt?(function(e){const r=e.getFilters().map((i=>Na(i)));return r.length===1?r[0]:{compositeFilter:{op:Yh(e.op),filters:r}}})(n):F()}function ka(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Bt{constructor(t,e,r,i,o=L.min(),u=L.min(),c=lt.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=d}withSequenceNumber(t){return new Bt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Xh{constructor(t){this.ct=t}}function Jh(n){const t=Gh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Zr(t,t.limit,"L"):t}/**
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
 */class Zh{constructor(){this.un=new td}addToCollectionParentIndex(t,e){return this.un.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(zt.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(zt.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class td{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new ut(Z.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ut(Z.comparator)).toArray()}}/**
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
 */class Te{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Te(0)}static kn(){return new Te(-1)}}/**
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
 */class ed{constructor(){this.changes=new Re((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,mt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class nd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class rd{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(r=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(r!==null&&Xe(r.mutation,i,Ut.empty(),Tt.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,q()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=q()){const i=Zt();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,r).next((o=>{let u=Ge();return o.forEach(((c,d)=>{u=u.insert(c,d.overlayedDocument)})),u}))))}getOverlayedDocuments(t,e){const r=Zt();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,q())))}populateOverlays(t,e,r){const i=[];return r.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((u,c)=>{e.set(u,c)}))}))}computeViews(t,e,r,i){let o=Gt();const u=Ye(),c=(function(){return Ye()})();return e.forEach(((d,f)=>{const g=r.get(f.key);i.has(f.key)&&(g===void 0||g.mutation instanceof er)?o=o.insert(f.key,f):g!==void 0?(u.set(f.key,g.mutation.getFieldMask()),Xe(g.mutation,f,g.mutation.getFieldMask(),Tt.now())):u.set(f.key,Ut.empty())})),this.recalculateAndSaveOverlays(t,o).next((d=>(d.forEach(((f,g)=>u.set(f,g))),e.forEach(((f,g)=>{var w;return c.set(f,new nd(g,(w=u.get(f))!==null&&w!==void 0?w:null))})),c)))}recalculateAndSaveOverlays(t,e){const r=Ye();let i=new nt(((u,c)=>u-c)),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((u=>{for(const c of u)c.keys().forEach((d=>{const f=e.get(d);if(f===null)return;let g=r.get(d)||Ut.empty();g=c.applyToLocalView(f,g),r.set(d,g);const w=(i.get(c.batchId)||q()).add(d);i=i.insert(c.batchId,w)}))})).next((()=>{const u=[],c=i.getReverseIterator();for(;c.hasNext();){const d=c.getNext(),f=d.key,g=d.value,w=va();g.forEach((R=>{if(!o.has(R)){const S=Aa(e.get(R),r.get(R));S!==null&&w.set(R,S),o=o.add(R)}})),u.push(this.documentOverlayCache.saveOverlays(t,f,w))}return C.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,i){return(function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):dh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next((o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):C.resolve(Zt());let c=-1,d=o;return u.next((f=>C.forEach(f,((g,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),o.get(g)?C.resolve():this.remoteDocumentCache.getEntry(t,g).next((R=>{d=d.insert(g,R)}))))).next((()=>this.populateOverlays(t,f,o))).next((()=>this.computeViews(t,d,f,q()))).next((g=>({batchId:c,changes:_h(g)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next((r=>{let i=Ge();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let u=Ge();return this.indexManager.getCollectionParents(t,o).next((c=>C.forEach(c,(d=>{const f=(function(w,R){return new Xn(R,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next((g=>{g.forEach(((w,R)=>{u=u.insert(w,R)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i)))).next((u=>{o.forEach(((d,f)=>{const g=f.getKey();u.get(g)===null&&(u=u.insert(g,mt.newInvalidDocument(g)))}));let c=Ge();return u.forEach(((d,f)=>{const g=o.get(d);g!==void 0&&Xe(g.mutation,f,Ut.empty(),Tt.now()),Zn(e,f)&&(c=c.insert(d,f))})),c}))}}/**
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
 */class sd{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return C.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:pe(i.createTime)}})(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,(function(i){return{name:i.name,query:Jh(i.bundledQuery),readTime:pe(i.readTime)}})(e)),C.resolve()}}/**
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
 */class id{constructor(){this.overlays=new nt(M.comparator),this.Ir=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Zt();return C.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&r.set(i,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((i,o)=>{this.ht(t,e,o)})),C.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.Ir.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const i=Zt(),o=e.length+1,u=new M(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const d=c.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>r&&i.set(d.getKey(),d)}return C.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new nt(((f,g)=>f-g));const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let g=o.get(f.largestBatchId);g===null&&(g=Zt(),o=o.insert(f.largestBatchId,g)),g.set(f.getKey(),f)}}const c=Zt(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach(((f,g)=>c.set(f,g))),!(c.size()>=i)););return C.resolve(c)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const u=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new Vh(e,r));let o=this.Ir.get(e);o===void 0&&(o=q(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
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
 */class od{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
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
 */class As{constructor(){this.Tr=new ut(it.Er),this.dr=new ut(it.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new it(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Vr(new it(t,e))}mr(t,e){t.forEach((r=>this.removeReference(r,e)))}gr(t){const e=new M(new Z([])),r=new it(e,t),i=new it(e,t+1),o=[];return this.dr.forEachInRange([r,i],(u=>{this.Vr(u),o.push(u.key)})),o}pr(){this.Tr.forEach((t=>this.Vr(t)))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new M(new Z([])),r=new it(e,t),i=new it(e,t+1);let o=q();return this.dr.forEachInRange([r,i],(u=>{o=o.add(u.key)})),o}containsKey(t){const e=new it(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class it{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return M.comparator(t.key,e.key)||z(t.wr,e.wr)}static Ar(t,e){return z(t.wr,e.wr)||M.comparator(t.key,e.key)}}/**
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
 */class ad{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ut(it.Er)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new bh(o,e,r,i);this.mutationQueue.push(u);for(const c of i)this.br=this.br.add(new it(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return C.resolve(u)}lookupMutationBatch(t,e){return C.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.vr(r),o=i<0?0:i;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new it(e,0),i=new it(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],(u=>{const c=this.Dr(u.wr);o.push(c)})),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ut(z);return e.forEach((i=>{const o=new it(i,0),u=new it(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,u],(c=>{r=r.add(c.wr)}))})),C.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const u=new it(new M(o),0);let c=new ut(z);return this.br.forEachWhile((d=>{const f=d.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(c=c.add(d.wr)),!0)}),u),C.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach((r=>{const i=this.Dr(r);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){tt(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return C.forEach(e.mutations,(i=>{const o=new it(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.br=r}))}On(t){}containsKey(t,e){const r=new it(e,0),i=this.br.firstAfterOrEqual(r);return C.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class ud{constructor(t){this.Mr=t,this.docs=(function(){return new nt(M.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,u=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(e))}getEntries(t,e){let r=Gt();return e.forEach((i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():mt.newInvalidDocument(i))})),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Gt();const u=e.path,c=new M(u.child("")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:f,value:{document:g}}=d.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||Gc(Kc(g),r)<=0||(i.has(g.key)||Zn(e,g))&&(o=o.insert(g.key,g.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,i){F()}Or(t,e){return C.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new ld(this)}getSize(t){return C.resolve(this.size)}}class ld extends ed{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(r)})),C.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class cd{constructor(t){this.persistence=t,this.Nr=new Re((e=>ys(e)),Es),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.Lr=0,this.Br=new As,this.targetCount=0,this.kr=Te.Bn()}forEachTarget(t,e){return this.Nr.forEach(((r,i)=>e(i))),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),C.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Te(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.Kn(e),C.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Nr.forEach(((u,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Nr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)})),C.waitFor(o).next((()=>i))}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((u=>{o.push(i.markPotentiallyOrphaned(t,u))})),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.Br.containsKey(e))}}/**
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
 */class hd{constructor(t,e){this.qr={},this.overlays={},this.Qr=new ps(0),this.Kr=!1,this.Kr=!0,this.$r=new od,this.referenceDelegate=t(this),this.Ur=new cd(this),this.indexManager=new Zh,this.remoteDocumentCache=(function(i){return new ud(i)})((r=>this.referenceDelegate.Wr(r))),this.serializer=new Xh(e),this.Gr=new sd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new id,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new ad(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const i=new dd(this.Qr.next());return this.referenceDelegate.zr(),r(i).next((o=>this.referenceDelegate.jr(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Hr(t,e){return C.or(Object.values(this.qr).map((r=>()=>r.containsKey(t,e))))}}class dd extends Qc{constructor(t){super(),this.currentSequenceNumber=t}}class Rs{constructor(t){this.persistence=t,this.Jr=new As,this.Yr=null}static Zr(t){return new Rs(t)}get Xr(){if(this.Yr)return this.Yr;throw F()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),C.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach((i=>this.Xr.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.Xr.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Xr,(r=>{const i=M.fromPath(r);return this.ei(t,i).next((o=>{o||e.removeEntry(i,L.min())}))})).next((()=>(this.Yr=null,e.apply(t))))}updateLimboDocument(t,e){return this.ei(t,e).next((r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())}))}Wr(t){return 0}ei(t,e){return C.or([()=>C.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class Ss{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=i}static Wi(t,e){let r=q(),i=q();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ss(t,e.fromCache,r,i)}}/**
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
 */class fd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class pd{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=(function(){return _l()?8:Wc(gl())>0?6:4})()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.Yi(t,e).next((u=>{o.result=u})).next((()=>{if(!o.result)return this.Zi(t,e,i,r).next((u=>{o.result=u}))})).next((()=>{if(o.result)return;const u=new fd;return this.Xi(t,e,u).next((c=>{if(o.result=c,this.zi)return this.es(t,e,u,c.size)}))})).next((()=>o.result))}es(t,e,r,i){return r.documentReadCount<this.ji?(ze()<=B.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",ce(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),C.resolve()):(ze()<=B.DEBUG&&N("QueryEngine","Query:",ce(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ze()<=B.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",ce(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ct(e))):C.resolve())}Yi(t,e){if(ho(e))return C.resolve(null);let r=Ct(e);return this.indexManager.getIndexType(t,r).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=Zr(e,null,"F"),r=Ct(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const u=q(...o);return this.Ji.getDocuments(t,u).next((c=>this.indexManager.getMinOffset(t,r).next((d=>{const f=this.ts(e,c);return this.ns(e,f,u,d.readTime)?this.Yi(t,Zr(e,null,"F")):this.rs(t,f,e,d)}))))})))))}Zi(t,e,r,i){return ho(e)||i.isEqual(L.min())?C.resolve(null):this.Ji.getDocuments(t,r).next((o=>{const u=this.ts(e,o);return this.ns(e,u,r,i)?C.resolve(null):(ze()<=B.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ce(e)),this.rs(t,u,e,zc(i,-1)).next((c=>c)))}))}ts(t,e){let r=new ut(ya(t));return e.forEach(((i,o)=>{Zn(t,o)&&(r=r.add(o))})),r}ns(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(t,e,r){return ze()<=B.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",ce(e)),this.Ji.getDocumentsMatchingQuery(t,e,zt.min(),r)}rs(t,e,r,i){return this.Ji.getDocumentsMatchingQuery(t,r,i).next((o=>(e.forEach((u=>{o=o.insert(u.key,u)})),o)))}}/**
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
 */class gd{constructor(t,e,r,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new nt(z),this._s=new Re((o=>ys(o)),Es),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new rd(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.os)))}}function md(n,t,e,r){return new gd(n,t,e,r)}async function Oa(n,t){const e=U(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next((o=>(i=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const u=[],c=[];let d=q();for(const f of i){u.push(f.batchId);for(const g of f.mutations)d=d.add(g.key)}for(const f of o){c.push(f.batchId);for(const g of f.mutations)d=d.add(g.key)}return e.localDocuments.getDocuments(r,d).next((f=>({hs:f,removedBatchIds:u,addedBatchIds:c})))}))}))}function Ma(n){const t=U(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ur.getLastRemoteSnapshotVersion(e)))}function _d(n,t){const e=U(n),r=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const u=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const c=[];t.targetChanges.forEach(((g,w)=>{const R=i.get(w);if(!R)return;c.push(e.Ur.removeMatchingKeys(o,g.removedDocuments,w).next((()=>e.Ur.addMatchingKeys(o,g.addedDocuments,w))));let S=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?S=S.withResumeToken(lt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):g.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(g.resumeToken,r)),i=i.insert(w,S),(function(k,x,Y){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0})(R,S,g)&&c.push(e.Ur.updateTargetData(o,S))}));let d=Gt(),f=q();if(t.documentUpdates.forEach((g=>{t.resolvedLimboDocuments.has(g)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,g))})),c.push(yd(o,u,t.documentUpdates).next((g=>{d=g.Ps,f=g.Is}))),!r.isEqual(L.min())){const g=e.Ur.getLastRemoteSnapshotVersion(o).next((w=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r)));c.push(g)}return C.waitFor(c).next((()=>u.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,d,f))).next((()=>d))})).then((o=>(e.os=i,o)))}function yd(n,t,e){let r=q(),i=q();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let u=Gt();return e.forEach(((c,d)=>{const f=o.get(c);d.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),d.isNoDocument()&&d.version.isEqual(L.min())?(t.removeEntry(c,d.readTime),u=u.insert(c,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(d),u=u.insert(c,d)):N("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",d.version)})),{Ps:u,Is:i}}))}function Ed(n,t){const e=U(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return e.Ur.getTargetData(r,t).next((o=>o?(i=o,C.resolve(i)):e.Ur.allocateTargetId(r).next((u=>(i=new Bt(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=e.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r}))}async function ss(n,t,e){const r=U(n),i=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,(u=>r.persistence.referenceDelegate.removeTarget(u,i)))}catch(u){if(!un(u))throw u;N("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}r.os=r.os.remove(t),r._s.delete(i.target)}function wo(n,t,e){const r=U(n);let i=L.min(),o=q();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(d,f,g){const w=U(d),R=w._s.get(g);return R!==void 0?C.resolve(w.os.get(R)):w.Ur.getTargetData(f,g)})(r,u,Ct(t)).next((c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(u,c.targetId).next((d=>{o=d}))})).next((()=>r.ss.getDocumentsMatchingQuery(u,t,e?i:L.min(),e?o:q()))).next((c=>(vd(r,ph(t),c),{documents:c,Ts:o})))))}function vd(n,t,e){let r=n.us.get(t)||L.min();e.forEach(((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.us.set(t,r)}class Ao{constructor(){this.activeTargetIds=vh()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Td{constructor(){this.so=new Ao,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Ao,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Id{_o(t){}shutdown(){}}/**
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
 */class Ro{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let On=null;function Fr(){return On===null?On=(function(){return 268435456+Math.round(2147483648*Math.random())})():On++,"0x"+On.toString(16)}/**
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
 */const wd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Ad{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const pt="WebChannelConnection";class Rd extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(e,r,i,o,u){const c=Fr(),d=this.xo(e,r.toUriEncodedString());N("RestConnection",`Sending RPC '${e}' ${c}:`,d,i);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,u),this.No(e,d,f,i).then((g=>(N("RestConnection",`Received RPC '${e}' ${c}: `,g),g)),(g=>{throw _e("RestConnection",`RPC '${e}' ${c} failed with error: `,g,"url: ",d,"request:",i),g}))}Lo(e,r,i,o,u,c){return this.Mo(e,r,i,o,u)}Oo(e,r,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ae})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach(((o,u)=>e[u]=o)),i&&i.headers.forEach(((o,u)=>e[u]=o))}xo(e,r){const i=wd[e];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,i){const o=Fr();return new Promise(((u,c)=>{const d=new ra;d.setWithCredentials(!0),d.listenOnce(sa.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Mn.NO_ERROR:const g=d.getResponseJson();N(pt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(g)),u(g);break;case Mn.TIMEOUT:N(pt,`RPC '${t}' ${o} timed out`),c(new O(V.DEADLINE_EXCEEDED,"Request time out"));break;case Mn.HTTP_ERROR:const w=d.getStatus();if(N(pt,`RPC '${t}' ${o} failed with status:`,w,"response text:",d.getResponseText()),w>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const S=R?.error;if(S&&S.status&&S.message){const D=(function(x){const Y=x.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(Y)>=0?Y:V.UNKNOWN})(S.status);c(new O(D,S.message))}else c(new O(V.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new O(V.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{N(pt,`RPC '${t}' ${o} completed.`)}}));const f=JSON.stringify(i);N(pt,`RPC '${t}' ${o} sending request:`,i),d.send(e,"POST",f,r,15)}))}Bo(t,e,r){const i=Fr(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=aa(),c=oa(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Oo(d.initMessageHeaders,e,r),d.encodeInitMessageHeaders=!0;const g=o.join("");N(pt,`Creating RPC '${t}' stream ${i}: ${g}`,d);const w=u.createWebChannel(g,d);let R=!1,S=!1;const D=new Ad({Io:x=>{S?N(pt,`Not sending because RPC '${t}' stream ${i} is closed:`,x):(R||(N(pt,`Opening RPC '${t}' stream ${i} transport.`),w.open(),R=!0),N(pt,`RPC '${t}' stream ${i} sending:`,x),w.send(x))},To:()=>w.close()}),k=(x,Y,Q)=>{x.listen(Y,(K=>{try{Q(K)}catch(X){setTimeout((()=>{throw X}),0)}}))};return k(w,Ke.EventType.OPEN,(()=>{S||(N(pt,`RPC '${t}' stream ${i} transport opened.`),D.yo())})),k(w,Ke.EventType.CLOSE,(()=>{S||(S=!0,N(pt,`RPC '${t}' stream ${i} transport closed`),D.So())})),k(w,Ke.EventType.ERROR,(x=>{S||(S=!0,_e(pt,`RPC '${t}' stream ${i} transport errored:`,x),D.So(new O(V.UNAVAILABLE,"The operation could not be completed")))})),k(w,Ke.EventType.MESSAGE,(x=>{var Y;if(!S){const Q=x.data[0];tt(!!Q);const K=Q,X=K.error||((Y=K[0])===null||Y===void 0?void 0:Y.error);if(X){N(pt,`RPC '${t}' stream ${i} received error:`,X);const At=X.status;let G=(function(_){const y=rt[_];if(y!==void 0)return Sa(y)})(At),E=X.message;G===void 0&&(G=V.INTERNAL,E="Unknown error status: "+At+" with message "+X.message),S=!0,D.So(new O(G,E)),w.close()}else N(pt,`RPC '${t}' stream ${i} received:`,Q),D.bo(Q)}})),k(c,ia.STAT_EVENT,(x=>{x.stat===Hr.PROXY?N(pt,`RPC '${t}' stream ${i} detected buffering proxy`):x.stat===Hr.NOPROXY&&N(pt,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{D.wo()}),0),D}}function jr(){return typeof document<"u"?document:null}/**
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
 */function La(n){return new Fh(n,!0)}/**
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
 */class Fa{constructor(t,e,r=1e3,i=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,(()=>(this.Uo=Date.now(),t()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Sd{constructor(t,e,r,i,o,u,c,d){this.ui=t,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Fa(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(Ot(e.toString()),Ot("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.Yo===e&&this.P_(r,i)}),(r=>{t((()=>{const i=new O(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)}))}))}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo((()=>{r((()=>this.listener.Eo()))})),this.stream.Ro((()=>{r((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((i=>{r((()=>this.I_(i)))})),this.stream.onMessage((i=>{r((()=>++this.e_==1?this.E_(i):this.onNext(i)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(t){return N("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget((()=>this.Yo===t?e():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Cd extends Sd{constructor(t,e,r,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,u),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=$h(this.serializer,t),r=(function(o){if(!("targetChange"in o))return L.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?L.min():u.readTime?pe(u.readTime):L.min()})(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=Io(this.serializer),e.addTarget=(function(o,u){let c;const d=u.target;if(c=Jr(d)?{documents:zh(o,d)}:{query:Kh(o,d)._t},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=Uh(o,u.resumeToken);const f=ns(o,u.expectedCount);f!==null&&(c.expectedCount=f)}else if(u.snapshotVersion.compareTo(L.min())>0){c.readTime=jh(o,u.snapshotVersion.toTimestamp());const f=ns(o,u.expectedCount);f!==null&&(c.expectedCount=f)}return c})(this.serializer,t);const r=Hh(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=Io(this.serializer),e.removeTarget=t,this.a_(e)}}/**
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
 */class Pd extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new O(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,u])=>this.connection.Mo(t,rs(e,r),i,o,u))).catch((o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(V.UNKNOWN,o.toString())}))}Lo(t,e,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,c])=>this.connection.Lo(t,rs(e,r),i,u,c,o))).catch((u=>{throw u.name==="FirebaseError"?(u.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new O(V.UNKNOWN,u.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class bd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ot(e),this.D_=!1):N("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Vd{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o((u=>{r.enqueueAndForget((async()=>{hn(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await(async function(d){const f=U(d);f.L_.add(4),await cn(f),f.q_.set("Unknown"),f.L_.delete(4),await rr(f)})(this))}))})),this.q_=new bd(r,i)}}async function rr(n){if(hn(n))for(const t of n.B_)await t(!0)}async function cn(n){for(const t of n.B_)await t(!1)}function ja(n,t){const e=U(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Vs(e)?bs(e):Se(e).r_()&&Ps(e,t))}function Cs(n,t){const e=U(n),r=Se(e);e.N_.delete(t),r.r_()&&Ua(e,t),e.N_.size===0&&(r.r_()?r.o_():hn(e)&&e.q_.set("Unknown"))}function Ps(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Se(n).A_(t)}function Ua(n,t){n.Q_.xe(t),Se(n).R_(t)}function bs(n){n.Q_=new kh({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Se(n).start(),n.q_.v_()}function Vs(n){return hn(n)&&!Se(n).n_()&&n.N_.size>0}function hn(n){return U(n).L_.size===0}function Ba(n){n.Q_=void 0}async function Dd(n){n.q_.set("Online")}async function xd(n){n.N_.forEach(((t,e)=>{Ps(n,t)}))}async function Nd(n,t){Ba(n),Vs(n)?(n.q_.M_(t),bs(n)):n.q_.set("Unknown")}async function kd(n,t,e){if(n.q_.set("Online"),t instanceof Pa&&t.state===2&&t.cause)try{await(async function(i,o){const u=o.cause;for(const c of o.targetIds)i.N_.has(c)&&(await i.remoteSyncer.rejectListen(c,u),i.N_.delete(c),i.Q_.removeTarget(c))})(n,t)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await So(n,r)}else if(t instanceof Fn?n.Q_.Ke(t):t instanceof Ca?n.Q_.He(t):n.Q_.We(t),!e.isEqual(L.min()))try{const r=await Ma(n.localStore);e.compareTo(r)>=0&&await(function(o,u){const c=o.Q_.rt(u);return c.targetChanges.forEach(((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const g=o.N_.get(f);g&&o.N_.set(f,g.withResumeToken(d.resumeToken,u))}})),c.targetMismatches.forEach(((d,f)=>{const g=o.N_.get(d);if(!g)return;o.N_.set(d,g.withResumeToken(lt.EMPTY_BYTE_STRING,g.snapshotVersion)),Ua(o,d);const w=new Bt(g.target,d,f,g.sequenceNumber);Ps(o,w)})),o.remoteSyncer.applyRemoteEvent(c)})(n,e)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await So(n,r)}}async function So(n,t,e){if(!un(t))throw t;n.L_.add(1),await cn(n),n.q_.set("Offline"),e||(e=()=>Ma(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{N("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await rr(n)}))}async function Co(n,t){const e=U(n);e.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const r=hn(e);e.L_.add(3),await cn(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await rr(e)}async function Od(n,t){const e=U(n);t?(e.L_.delete(2),await rr(e)):t||(e.L_.add(2),await cn(e),e.q_.set("Unknown"))}function Se(n){return n.K_||(n.K_=(function(e,r,i){const o=U(e);return o.w_(),new Cd(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Eo:Dd.bind(null,n),Ro:xd.bind(null,n),mo:Nd.bind(null,n),d_:kd.bind(null,n)}),n.B_.push((async t=>{t?(n.K_.s_(),Vs(n)?bs(n):n.q_.set("Unknown")):(await n.K_.stop(),Ba(n))}))),n.K_}/**
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
 */class Ds{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new ee,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const u=Date.now()+r,c=new Ds(t,e,u,i,o);return c.start(r),c}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qa(n,t){if(Ot("AsyncQueue",`${t}: ${n}`),un(n))return new O(V.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class ge{constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=Ge(),this.sortedSet=new nt(this.comparator)}static emptySet(t){return new ge(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ge)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new ge;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class Po{constructor(){this.W_=new nt(M.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):F():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal(((e,r)=>{t.push(r)})),t}}class Ie{constructor(t,e,r,i,o,u,c,d,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,i,o){const u=[];return e.forEach((c=>{u.push({type:0,doc:c})})),new Ie(t,e,ge.emptySet(e),u,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Jn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Md{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((t=>t.J_()))}}class Ld{constructor(){this.queries=bo(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const i=U(e),o=i.queries;i.queries=bo(),o.forEach(((u,c)=>{for(const d of c.j_)d.onError(r)}))})(this,new O(V.ABORTED,"Firestore shutting down"))}}function bo(){return new Re((n=>_a(n)),Jn)}async function Fd(n,t){const e=U(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.H_()&&t.J_()&&(r=2):(o=new Md,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(i,!0);break;case 1:o.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const c=qa(u,`Initialization of query '${ce(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&xs(e)}async function jd(n,t){const e=U(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const u=o.j_.indexOf(t);u>=0&&(o.j_.splice(u,1),o.j_.length===0?i=t.J_()?0:1:!o.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Ud(n,t){const e=U(n);let r=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const c of u.j_)c.X_(i)&&(r=!0);u.z_=i}}r&&xs(e)}function Bd(n,t,e){const r=U(n),i=r.queries.get(t);if(i)for(const o of i.j_)o.onError(e);r.queries.delete(t)}function xs(n){n.Y_.forEach((t=>{t.next()}))}var is,Vo;(Vo=is||(is={})).ea="default",Vo.Cache="cache";class qd{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Ie(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Ie.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==is.Cache}}/**
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
 */class $a{constructor(t){this.key=t}}class za{constructor(t){this.key=t}}class $d{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=q(),this.mutatedKeys=q(),this.Aa=ya(t),this.Ra=new ge(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new Po,i=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,c=!1;const d=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((g,w)=>{const R=i.get(g),S=Zn(this.query,w)?w:null,D=!!R&&this.mutatedKeys.has(R.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let x=!1;R&&S?R.data.isEqual(S.data)?D!==k&&(r.track({type:3,doc:S}),x=!0):this.ga(R,S)||(r.track({type:2,doc:S}),x=!0,(d&&this.Aa(S,d)>0||f&&this.Aa(S,f)<0)&&(c=!0)):!R&&S?(r.track({type:0,doc:S}),x=!0):R&&!S&&(r.track({type:1,doc:R}),x=!0,(d||f)&&(c=!0)),x&&(S?(u=u.add(S),o=k?o.add(g):o.delete(g)):(u=u.delete(g),o=o.delete(g)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const g=this.query.limitType==="F"?u.last():u.first();u=u.delete(g.key),o=o.delete(g.key),r.track({type:1,doc:g})}return{Ra:u,fa:r,ns:c,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const u=t.fa.G_();u.sort(((g,w)=>(function(S,D){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return k(S)-k(D)})(g.type,w.type)||this.Aa(g.doc,w.doc))),this.pa(r),i=i!=null&&i;const c=e&&!i?this.ya():[],d=this.da.size===0&&this.current&&!i?1:0,f=d!==this.Ea;return this.Ea=d,u.length!==0||f?{snapshot:new Ie(this.query,t.Ra,o,u,t.mutatedKeys,d===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Po,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach((e=>this.Ta=this.Ta.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ta=this.Ta.delete(e))),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=q(),this.Ra.forEach((r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))}));const e=[];return t.forEach((r=>{this.da.has(r)||e.push(new za(r))})),this.da.forEach((r=>{t.has(r)||e.push(new $a(r))})),e}ba(t){this.Ta=t.Ts,this.da=q();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Ie.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class zd{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Kd{constructor(t){this.key=t,this.va=!1}}class Gd{constructor(t,e,r,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ca={},this.Fa=new Re((c=>_a(c)),Jn),this.Ma=new Map,this.xa=new Set,this.Oa=new nt(M.comparator),this.Na=new Map,this.La=new As,this.Ba={},this.ka=new Map,this.qa=Te.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Hd(n,t,e=!0){const r=Wa(n);let i;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await Ka(r,t,e,!0),i}async function Qd(n,t){const e=Wa(n);await Ka(e,t,!0,!1)}async function Ka(n,t,e,r){const i=await Ed(n.localStore,Ct(t)),o=i.targetId,u=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await Wd(n,t,o,u==="current",i.resumeToken)),n.isPrimaryClient&&e&&ja(n.remoteStore,i),c}async function Wd(n,t,e,r,i){n.Ka=(w,R,S)=>(async function(k,x,Y,Q){let K=x.view.ma(Y);K.ns&&(K=await wo(k.localStore,x.query,!1).then((({documents:E})=>x.view.ma(E,K))));const X=Q&&Q.targetChanges.get(x.targetId),At=Q&&Q.targetMismatches.get(x.targetId)!=null,G=x.view.applyChanges(K,k.isPrimaryClient,X,At);return xo(k,x.targetId,G.wa),G.snapshot})(n,w,R,S);const o=await wo(n.localStore,t,!0),u=new $d(t,o.Ts),c=u.ma(o.documents),d=ln.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),f=u.applyChanges(c,n.isPrimaryClient,d);xo(n,e,f.wa);const g=new zd(t,e,u);return n.Fa.set(t,g),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),f.snapshot}async function Yd(n,t,e){const r=U(n),i=r.Fa.get(t),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter((u=>!Jn(u,t)))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ss(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Cs(r.remoteStore,i.targetId),os(r,i.targetId)})).catch(fs)):(os(r,i.targetId),await ss(r.localStore,i.targetId,!0))}async function Xd(n,t){const e=U(n),r=e.Fa.get(t),i=e.Ma.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Cs(e.remoteStore,r.targetId))}async function Ga(n,t){const e=U(n);try{const r=await _d(e.localStore,t);t.targetChanges.forEach(((i,o)=>{const u=e.Na.get(o);u&&(tt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?u.va=!0:i.modifiedDocuments.size>0?tt(u.va):i.removedDocuments.size>0&&(tt(u.va),u.va=!1))})),await Qa(e,r,t)}catch(r){await fs(r)}}function Do(n,t,e){const r=U(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Fa.forEach(((o,u)=>{const c=u.view.Z_(t);c.snapshot&&i.push(c.snapshot)})),(function(u,c){const d=U(u);d.onlineState=c;let f=!1;d.queries.forEach(((g,w)=>{for(const R of w.j_)R.Z_(c)&&(f=!0)})),f&&xs(d)})(r.eventManager,t),i.length&&r.Ca.d_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Jd(n,t,e){const r=U(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Na.get(t),o=i&&i.key;if(o){let u=new nt(M.comparator);u=u.insert(o,mt.newNoDocument(o,L.min()));const c=q().add(o),d=new nr(L.min(),new Map,new nt(z),u,c);await Ga(r,d),r.Oa=r.Oa.remove(o),r.Na.delete(t),Ns(r)}else await ss(r.localStore,t,!1).then((()=>os(r,t,e))).catch(fs)}function os(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach((r=>{n.La.containsKey(r)||Ha(n,r)}))}function Ha(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Cs(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Ns(n))}function xo(n,t,e){for(const r of e)r instanceof $a?(n.La.addReference(r.key,t),Zd(n,r)):r instanceof za?(N("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||Ha(n,r.key)):F()}function Zd(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(N("SyncEngine","New document in limbo: "+e),n.xa.add(r),Ns(n))}function Ns(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new M(Z.fromString(t)),r=n.qa.next();n.Na.set(r,new Kd(e)),n.Oa=n.Oa.insert(e,r),ja(n.remoteStore,new Bt(Ct(vs(e.path)),r,"TargetPurposeLimboResolution",ps.oe))}}async function Qa(n,t,e){const r=U(n),i=[],o=[],u=[];r.Fa.isEmpty()||(r.Fa.forEach(((c,d)=>{u.push(r.Ka(d,t,e).then((f=>{var g;if((f||e)&&r.isPrimaryClient){const w=f?!f.fromCache:(g=e?.targetChanges.get(d.targetId))===null||g===void 0?void 0:g.current;r.sharedClientState.updateQueryState(d.targetId,w?"current":"not-current")}if(f){i.push(f);const w=Ss.Wi(d.targetId,f);o.push(w)}})))})),await Promise.all(u),r.Ca.d_(i),await(async function(d,f){const g=U(d);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>C.forEach(f,(R=>C.forEach(R.$i,(S=>g.persistence.referenceDelegate.addReference(w,R.targetId,S))).next((()=>C.forEach(R.Ui,(S=>g.persistence.referenceDelegate.removeReference(w,R.targetId,S)))))))))}catch(w){if(!un(w))throw w;N("LocalStore","Failed to update sequence numbers: "+w)}for(const w of f){const R=w.targetId;if(!w.fromCache){const S=g.os.get(R),D=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(D);g.os=g.os.insert(R,k)}}})(r.localStore,o))}async function tf(n,t){const e=U(n);if(!e.currentUser.isEqual(t)){N("SyncEngine","User change. New user:",t.toKey());const r=await Oa(e.localStore,t);e.currentUser=t,(function(o,u){o.ka.forEach((c=>{c.forEach((d=>{d.reject(new O(V.CANCELLED,u))}))})),o.ka.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Qa(e,r.hs)}}function ef(n,t){const e=U(n),r=e.Na.get(t);if(r&&r.va)return q().add(r.key);{let i=q();const o=e.Ma.get(t);if(!o)return i;for(const u of o){const c=e.Fa.get(u);i=i.unionWith(c.view.Va)}return i}}function Wa(n){const t=U(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ga.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ef.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Jd.bind(null,t),t.Ca.d_=Ud.bind(null,t.eventManager),t.Ca.$a=Bd.bind(null,t.eventManager),t}class Gn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=La(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return md(this.persistence,new pd,t.initialUser,this.serializer)}Ga(t){return new hd(Rs.Zr,this.serializer)}Wa(t){return new Td}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gn.provider={build:()=>new Gn};class as{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Do(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tf.bind(null,this.syncEngine),await Od(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Ld})()}createDatastore(t){const e=La(t.databaseInfo.databaseId),r=(function(o){return new Rd(o)})(t.databaseInfo);return(function(o,u,c,d){return new Pd(o,u,c,d)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,i,o,u,c){return new Vd(r,i,o,u,c)})(this.localStore,this.datastore,t.asyncQueue,(e=>Do(this.syncEngine,e,0)),(function(){return Ro.D()?new Ro:new Id})())}createSyncEngine(t,e){return(function(i,o,u,c,d,f,g){const w=new Gd(i,o,u,c,d,f);return g&&(w.Qa=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(i){const o=U(i);N("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await cn(o),o.k_.shutdown(),o.q_.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}as.provider={build:()=>new as};/**
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
 */class nf{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Ot("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
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
 */class rf{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=la.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async u=>{N("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(N("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ee;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=qa(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Ur(n,t){n.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Oa(t.localStore,i),r=i)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function No(n,t){n.asyncQueue.verifyOperationInProgress();const e=await sf(n);N("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>Co(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>Co(t.remoteStore,i))),n._onlineComponents=t}async function sf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ur(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;_e("Error using user provided cache. Falling back to memory cache: "+e),await Ur(n,new Gn)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await Ur(n,new Gn);return n._offlineComponents}async function of(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await No(n,n._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await No(n,new as))),n._onlineComponents}async function af(n){const t=await of(n),e=t.eventManager;return e.onListen=Hd.bind(null,t.syncEngine),e.onUnlisten=Yd.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Qd.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Xd.bind(null,t.syncEngine),e}function uf(n,t,e={}){const r=new ee;return n.asyncQueue.enqueueAndForget((async()=>(function(o,u,c,d,f){const g=new nf({next:R=>{g.Za(),u.enqueueAndForget((()=>jd(o,w)));const S=R.docs.has(c);!S&&R.fromCache?f.reject(new O(V.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&R.fromCache&&d&&d.source==="server"?f.reject(new O(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(R)},error:R=>f.reject(R)}),w=new qd(vs(c.path),g,{includeMetadataChanges:!0,_a:!0});return Fd(o,w)})(await af(n),n.asyncQueue,t,e,r))),r.promise}/**
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
 */function Ya(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */function lf(n,t,e){if(!e)throw new O(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function cf(n,t,e,r){if(t===!0&&r===!0)throw new O(V.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Oo(n){if(!M.isDocumentKey(n))throw new O(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function hf(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":F()}function us(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=hf(n);throw new O(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class Mo{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new O(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}cf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ya((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ks{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mo({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mo(t),t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Oc;switch(r.type){case"firstParty":return new jc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=ko.get(e);r&&(N("ComponentProvider","Removing Datastore"),ko.delete(e),r.terminate())})(this),Promise.resolve()}}function df(n,t,e,r={}){var i;const o=(n=us(n,ks))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&_e("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),r.mockUserToken){let c,d;if(typeof r.mockUserToken=="string")c=r.mockUserToken,d=gt.MOCK_USER;else{c=pl(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new O(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new gt(f)}n._authCredentials=new Mc(new ua(c,d))}}/**
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
 */class Os{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Os(this.firestore,t,this._query)}}class Nt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new an(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Nt(this.firestore,t,this._key)}}class an extends Os{constructor(t,e,r){super(t,e,vs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Nt(this.firestore,null,new M(t))}withConverter(t){return new an(this.firestore,t,this._path)}}function ff(n,t,...e){if(n=wl(n),arguments.length===1&&(t=la.newId()),lf("doc","path",t),n instanceof ks){const r=Z.fromString(t,...e);return Oo(r),new Nt(n,null,new M(r))}{if(!(n instanceof Nt||n instanceof an))throw new O(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(t,...e));return Oo(r),new Nt(n.firestore,n instanceof an?n.converter:null,new M(r))}}/**
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
 */class Lo{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Fa(this,"async_queue_retry"),this.Vu=()=>{const r=jr();r&&N("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=jr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=jr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise((()=>{}));const e=new ee;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Pu.push(t),this.pu())))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!un(t))throw t;N("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(t){const e=this.mu.then((()=>(this.du=!0,t().catch((r=>{this.Eu=r,this.du=!1;const i=(function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c})(r);throw Ot("INTERNAL UNHANDLED ERROR: ",i),r})).then((r=>(this.du=!1,r))))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=Ds.createAndSchedule(this,t,e,r,(o=>this.yu(o)));return this.Tu.push(i),i}fu(){this.Eu&&F()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then((()=>{this.Tu.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()}))}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Xa extends ks{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Lo,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Lo(t),this._firestoreClient=void 0,await t}}}function Fo(n,t){const e=typeof n=="object"?n:Ac(),r=typeof n=="string"?n:"(default)",i=vc(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=dl("firestore");o&&df(i,...o)}return i}function pf(n){if(n._terminated)throw new O(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||gf(n),n._firestoreClient}function gf(n){var t,e,r;const i=n._freezeSettings(),o=(function(c,d,f,g){return new Jc(c,d,f,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,Ya(g.experimentalLongPollingOptions),g.useFetchStreams)})(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new rf(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&(function(c){const d=c?._online.build();return{_offline:c?._offline.build(d),_online:d}})(n._componentsProvider))}/**
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
 */class Hn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Hn(lt.fromBase64String(t))}catch(e){throw new O(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Hn(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Ja{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class mf{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}}/**
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
 */class _f{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0})(this._values,t._values)}}const yf=new RegExp("[~\\*/\\[\\]]");function Ef(n,t,e){if(t.search(yf)>=0)throw jo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Ja(...t.split("."))._internalPath}catch{throw jo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function jo(n,t,e,r,i){let o=`Function ${t}() called with invalid data`;o+=". ";let u="";return new O(V.INVALID_ARGUMENT,o+n+u)}/**
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
 */class Za{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new vf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(tu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class vf extends Za{data(){return super.data()}}function tu(n,t){return typeof t=="string"?Ef(n,t):t instanceof Ja?t._internalPath:t._delegate._internalPath}class Tf{convertValue(t,e="none"){switch(ie(t)){case 0:return null;case 1:return t.booleanValue;case 2:return et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(se(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw F()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Yn(t,((i,o)=>{r[i]=this.convertValue(o,e)})),r}convertVectorValue(t){var e,r,i;const o=(i=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map((u=>et(u.doubleValue)));return new _f(o)}convertGeoPoint(t){return new mf(et(t.latitude),et(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=ms(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(rn(t));default:return null}}convertTimestamp(t){const e=Kt(t);return new Tt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Z.fromString(t);tt(ka(r));const i=new sn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return i.isEqual(e)||Ot(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */class If{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class eu extends Za{constructor(t,e,r,i,o,u){super(t,e,r,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new wf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(tu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class wf extends eu{data(t={}){return super.data(t)}}/**
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
 */function Af(n){n=us(n,Nt);const t=us(n.firestore,Xa);return uf(pf(t),n._key).then((e=>Sf(t,n,e)))}class Rf extends Tf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Hn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Nt(this.firestore,null,e)}}function Sf(n,t,e){const r=e.docs.get(t._key),i=new Rf(n);return new eu(n,i,t._key,r,new If(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){Ae=i})(wc),Bn(new Ze("firestore",((r,{instanceIdentifier:i,options:o})=>{const u=r.getProvider("app").getImmediate(),c=new Xa(new Lc(r.getProvider("auth-internal")),new Bc(r.getProvider("app-check-internal")),(function(f,g){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new O(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sn(f.options.projectId,g)})(u,i),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c}),"PUBLIC").setMultipleInstances(!0)),fe(eo,"4.7.3",t),fe(eo,"4.7.3","esm2017")})();var Cf="firebase",Pf="10.14.1";/**
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
 */fe(Cf,Pf,"app");const Jt={apiKey:"AIzaSyDb0C_yeAMVI-O0wkMzeXmsGoc0MIua6v8",authDomain:"lullaby-dashboard.firebaseapp.com",projectId:"lullaby-dashboard",storageBucket:"lullaby-dashboard.firebasestorage.app",messagingSenderId:"960750423784",appId:"1:960750423784:web:027368a1188967d2ce435d"};function bf(){return!!(Jt.apiKey&&Jt.authDomain&&Jt.projectId&&Jt.storageBucket&&Jt.messagingSenderId&&Jt.appId)}if(!bf())throw new Error("Missing required Firebase environment variables. Please set PUBLIC_FIREBASE_API_KEY, PUBLIC_FIREBASE_AUTH_DOMAIN, PUBLIC_FIREBASE_PROJECT_ID, PUBLIC_FIREBASE_STORAGE_BUCKET, PUBLIC_FIREBASE_MESSAGING_SENDER_ID, and PUBLIC_FIREBASE_APP_ID.");const Vf=Rc().length?Fo():Fo(Zo(Jt)),wt=Ko((n,t)=>({lists:[],selectedIndex:0,checkedKeys:{},listExpiryTimestamps:{},language:me,setLists(e){n(r=>({...r,lists:e}))},setSelectedIndex(e){return n(r=>(Dn({checkedKeys:r.checkedKeys,listExpiryTimestamps:r.listExpiryTimestamps,selectedIndex:e,language:r.language}),{...r,selectedIndex:e}))},setLanguage(e){return n(r=>(Dn({checkedKeys:r.checkedKeys,listExpiryTimestamps:r.listExpiryTimestamps,selectedIndex:r.selectedIndex,language:e}),{...r,language:e}))},toggleItem(e){return n(r=>{const[i]=e.split("-",2),o=r.lists.find(d=>d.id===i),u={...r.checkedKeys,[e]:!r.checkedKeys[e]},c=o?.retentionHours?{...r.listExpiryTimestamps,[i]:Date.now()+o.retentionHours*60*60*1e3}:r.listExpiryTimestamps;return Dn({checkedKeys:u,listExpiryTimestamps:c,selectedIndex:r.selectedIndex,language:r.language}),{checkedKeys:u,listExpiryTimestamps:c}})},hydrateState(){if(!Qn)return;const e=tl();if(!e)return;const r=el(e,t().lists);n(i=>({...i,selectedIndex:r.selectedIndex,checkedKeys:r.checkedKeys,listExpiryTimestamps:r.listExpiryTimestamps,language:r.language}))},resetState(){const{language:e}=t();nl(),Dn({checkedKeys:{},listExpiryTimestamps:{},selectedIndex:0,language:e}),n({selectedIndex:0,checkedKeys:{},listExpiryTimestamps:{},language:e})},async loadConfiguration(){const e=await Af(ff(Vf,"dashboard","configuration"));if(!e.exists())throw new Error("Firebase configuration document not found");const r=e.data();if(!r||!Array.isArray(r.savedLists))throw new Error("Firebase configuration is missing savedLists");n(i=>({...i,lists:r.savedLists}))}})),Df=[{id:"loadConfiguration",labelKey:"loader.loadingConfiguration",status:"pending",stepFn:()=>wt.getState().loadConfiguration()},{id:"hydrateState",labelKey:"loader.restoringState",status:"inProgress",stepFn:async()=>await wt.getState().hydrateState()}],Je=Ko((n,t)=>({steps:Df,failureInfo:null,isReady:!1,startupStarted:!1,setStepStatus(e,r){n(i=>({steps:i.steps.map(o=>o.id===e?{...o,status:r}:o)}))},async loadData(){const{setStepStatus:e,startupStarted:r}=t();if(r)return;n({startupStarted:!0});let i="loadConfiguration";try{for(const o of t().steps)i=o.id,e(i,"inProgress"),await o.stepFn(),e(i,"complete");n({isReady:!0})}catch(o){const u=o instanceof Error?o.message:String(o),c=o instanceof Error?o.stack:void 0;e(i,"failed"),n({failureInfo:{step:i,message:u,stack:c}})}}}));function vt({textKey:n,values:t,size:e="medium",variant:r="body",as:i,className:o,...u}){const c=wt(g=>g.language),d=i??"span",f=[o,`typography typography--${r}`,`typography--${e}`].filter(Boolean).join(" ");return b.jsx(d,{className:f,...u,children:Ju(n,c,t)})}function xf(){const n=Je(t=>t.failureInfo);return n?b.jsx("div",{className:"loader loader--error",children:b.jsxs("div",{className:"loader__panel",children:[b.jsx("h1",{className:"loader__heading",children:b.jsx(vt,{textKey:"loader.errorHeading",variant:"heading",size:"large"})}),b.jsx("p",{className:"loader__message",children:b.jsx(vt,{textKey:"loader.errorMessage"})}),b.jsxs("div",{className:"loader__error",children:[b.jsx("strong",{children:"Error during:"})," ",n.step,b.jsx("br",{}),b.jsx("strong",{children:"Message:"})," ",n.message]}),b.jsxs("div",{className:"loader__debug",children:[b.jsx("strong",{children:b.jsx(vt,{textKey:"loader.debugHeading"})}),b.jsx("pre",{children:`step: ${n.step}
message: ${n.message}
stack:
${n.stack??"(no stack available)"}`})]})]})}):null}const{loadData:Uo}=Je.getState();function Nf({children:n}){const t=Je(i=>i.steps),e=Je(i=>i.failureInfo),r=Je(i=>i.isReady);return jn.useEffect(()=>{Uo()},[Uo]),e?b.jsx(xf,{}):r?b.jsx(b.Fragment,{children:n}):b.jsx("div",{className:"loader",children:b.jsxs("div",{className:"loader__panel",children:[b.jsx("h1",{className:"loader__heading",children:b.jsx(vt,{textKey:"loader.heading",variant:"heading",size:"large"})}),b.jsx("p",{className:"loader__message",children:b.jsx(vt,{textKey:"loader.message"})}),b.jsx("ol",{className:"loader__list",children:t.map(i=>b.jsxs("li",{className:`loader__item loader__item--${i.status}`,children:[b.jsx("span",{className:`loader__item-status loader__item-status--${i.status}`,"aria-hidden":"true",children:i.status==="complete"?"✓":i.status==="failed"?"✕":""}),b.jsx("span",{children:b.jsx(vt,{textKey:i.labelKey})})]},i.id))})]})})}function Bo(n){return n.toString().padStart(2,"0")}function qo(){const n=new Date;return`${Bo(n.getHours())}:${Bo(n.getMinutes())}`}function kf(){const[n,t]=jn.useState(qo());return jn.useEffect(()=>{const e=setInterval(()=>{t(qo())},1e3);return()=>clearInterval(e)},[]),b.jsx("span",{children:n})}function Of({videoUrl:n}){const t=n?`${n}&autoplay=1`:"";return b.jsx("iframe",{className:"video-embed__iframe",src:t,title:"YouTube video player",frameBorder:"0",allow:"autoplay; fullscreen; encrypted-media; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})}const{toggleItem:Mf}=wt.getState();function Lf({list:n}){const t=wt(e=>e.checkedKeys);return b.jsx(b.Fragment,{children:n.groups.map(e=>e.items?.length?b.jsx("div",{className:"todo-list",children:b.jsx("ul",{className:"todo-list__group",children:e.items.map(r=>{const i=`${n.id}-${e.id}-${r.id}`,o=!!t[i];return b.jsx("li",{className:`todo-list__item${o?" todo-list__item--checked":""}`,style:{color:r.color},onClick:()=>Mf(i),children:b.jsx("span",{className:"todo-list__item-text",children:r.name})},i)})})},e.id):null)})}const{setSelectedIndex:Ff}=wt.getState();function jf(){const n=wt(r=>r.lists),t=wt(r=>r.selectedIndex),e=r=>{Ff(Number(r.target.value))};return b.jsx("div",{className:"list-selector",children:b.jsx("select",{className:"list-selector__select",value:t,onChange:e,children:n.map((r,i)=>b.jsx("option",{value:i,children:r.label},r.id??i))})})}function Uf({completed:n,total:t}){const e=Math.max(t,1),r=Math.round(n/e*100),i=`${Math.min(Math.max(n/e*100,0),100)}%`;return b.jsxs("section",{className:"progress-bar","aria-label":"Task progress",children:[b.jsxs("header",{className:"progress-bar__header",children:[b.jsxs("div",{children:[b.jsx("p",{className:"progress-bar__eyebrow",children:b.jsx(vt,{textKey:"progress.eyebrow",variant:"eyebrow",size:"small"})}),b.jsx("h2",{className:"progress-bar__title",children:b.jsx(vt,{textKey:"progress.title",variant:"heading",size:"large"})})]}),b.jsxs("strong",{className:"progress-bar__percent",children:[r,"%"]})]}),b.jsx("div",{className:"progress-bar__track",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":r,children:b.jsx("span",{className:"progress-bar__fill",style:{width:i}})}),b.jsxs("footer",{className:"progress-bar__footer",children:[b.jsx("span",{children:b.jsx(vt,{textKey:"progress.done",variant:"label",values:{completed:n,total:t}})}),b.jsx("span",{children:b.jsx(vt,{textKey:"progress.keepGoing",variant:"label"})})]})]})}const{resetState:Bf}=wt.getState();function qf(){const[n,t]=jn.useState(!1),e=wt(g=>g.selectedIndex),r=wt(g=>g.lists),i=wt(g=>g.checkedKeys),o=wt(g=>g.setLanguage),u=r[e]??null,c=u?.bgColor?{backgroundColor:u.bgColor}:void 0,d=u?.groups.reduce((g,w)=>g+(w.items?.length??0),0)??0,f=u?u.groups.reduce((g,w)=>g+w.items.reduce((R,S)=>{const D=`${u.id}-${w.id}-${S.id}`;return R+(i[D]?1:0)},0),0):0;return b.jsxs("article",{className:"app",style:c,children:[b.jsx("section",{className:"app__content",children:u?b.jsx(Lf,{list:u}):b.jsx("div",{className:"app__no-list",children:b.jsx(vt,{textKey:"app.noLists"})})}),b.jsxs("div",{className:"app__sidebar",children:[b.jsx("figure",{className:"app__video",children:b.jsx(Of,{videoUrl:u?.youtubeUrl})}),b.jsx("section",{className:"app__clock",children:b.jsx(kf,{})}),b.jsxs("section",{className:"app__selector",children:[b.jsx(jf,{}),b.jsx("button",{type:"button",className:"app__reset-button",onClick:Bf,children:b.jsx(vt,{textKey:"app.reset"})})]}),b.jsx(Uf,{completed:f,total:d})]}),b.jsxs("div",{className:"app__options-wrap",children:[b.jsx("button",{type:"button",className:"app__options-button",onClick:()=>t(g=>!g),"aria-expanded":n,"aria-label":"Options",children:"⚙"}),n&&b.jsxs("div",{className:"app__options-menu",role:"menu","aria-label":"Language",children:[b.jsx("button",{type:"button",className:"app__options-menu-button",onClick:()=>{o("en"),t(!1)},children:b.jsx(vt,{textKey:"app.english"})}),b.jsx("button",{type:"button",className:"app__options-menu-button",onClick:()=>{o("pl"),t(!1)},children:b.jsx(vt,{textKey:"app.polish"})})]})]})]})}function Wf(){return b.jsx(Nf,{children:b.jsx(qf,{})})}export{Wf as default};
