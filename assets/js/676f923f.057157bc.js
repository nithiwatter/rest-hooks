"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[60244],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},18234:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(83117),o=(r(67294),r(3905));const a={title:"<RestProvider />",id:"RestProvider",original_id:"RestProvider"},i=void 0,s={unversionedId:"api/RestProvider",id:"version-2.2/api/RestProvider",title:"<RestProvider />",description:"Manages state, providing all context needed to use the hooks. Should be placed as high as possible",source:"@site/versioned_docs/version-2.2/api/RestProvider.md",sourceDirName:"api",slug:"/api/RestProvider",permalink:"/docs/2.2/api/RestProvider",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/RestProvider.md",tags:[],version:"2.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"<RestProvider />",id:"RestProvider",original_id:"RestProvider"}},l={},p=[{value:"initialState?: State&lt;unknown&gt;",id:"initialstate-stateunknown",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Manages state, providing all context needed to use the hooks. Should be placed as high as possible\nin application tree as any usage of the hooks is only possible for components below the provider\nin the React tree."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"index.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RestProvider } from 'rest-hooks';\nimport ReactDOM from 'react-dom';\n\nReactDOM.render(\n  <RestProvider>\n    <App />\n  </RestProvider>,\n  document.body\n);\n")),(0,o.kt)("h2",{id:"initialstate-stateunknown"},"initialState?: State\\<unknown",">"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type State<T> = Readonly<{\n  entities: Readonly<{ [k: string]: { [id: string]: T } | undefined }>;\n  results: Readonly<{ [url: string]: unknown | PK[] | PK | undefined }>;\n  meta: Readonly<{\n    [url: string]: { date: number; error?: Error; expiresAt: number };\n  }>;\n}>;\n")),(0,o.kt)("p",null,"Instead of starting with an empty cache, you can provide your own initial state. This can\nbe useful for testing, or rehydrating the cache state when using server side rendering."))}d.isMDXComponent=!0}}]);