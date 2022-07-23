"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[26627],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(83117),a=(n(67294),n(3905));const o={title:"Authentication",id:"auth",original_id:"auth"},i=void 0,s={unversionedId:"guides/auth",id:"version-3.0/guides/auth",title:"Authentication",description:"All network requests are run through the static fetchPlugin optionally",source:"@site/versioned_docs/version-3.0/guides/auth.md",sourceDirName:"guides",slug:"/guides/auth",permalink:"/docs/3.0/guides/auth",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/auth.md",tags:[],version:"3.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"Authentication",id:"auth",original_id:"auth"},sidebar:"version-3.0/docs",previous:{title:"Pagination",permalink:"/docs/3.0/guides/pagination"},next:{title:"Transforming data on fetch",permalink:"/docs/3.0/guides/network-transform"}},u={},l=[{value:"Code organization",id:"code-organization",level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All network requests are run through the ",(0,a.kt)("inlineCode",{parentName:"p"},"static fetchPlugin")," optionally\ndefined in your ",(0,a.kt)("inlineCode",{parentName:"p"},"Resource"),"."),(0,a.kt)("p",null,"Here's an example using simple cookie auth:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Request } from 'rest-hooks';\n\nclass AuthdResource extends Resource {\n  static fetchPlugin = (request: Request) => request.withCredentials();\n}\n")),(0,a.kt)("p",null,"You can also do more complex flows (like adding arbitrary headers) to\nthe request. Every ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchPlugin")," will take in a ",(0,a.kt)("a",{parentName:"p",href:"http://visionmedia.github.io/superagent/"},"superagent"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Request")," and return a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Request"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"Superagent")," uses the builder\npattern so this is quite easy."),(0,a.kt)("h2",{id:"code-organization"},"Code organization"),(0,a.kt)("p",null,"If much of your ",(0,a.kt)("inlineCode",{parentName:"p"},"Resources")," share a similar auth mechanism, you might\ntry extending from a base class that defines such common customizations."))}p.isMDXComponent=!0}}]);