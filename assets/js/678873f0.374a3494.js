"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[37632],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,y=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46702:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(83117),o=(r(67294),r(3905));const i={title:"Multi-column primary key",id:"multi-pk",original_id:"multi-pk"},a=void 0,s={unversionedId:"guides/multi-pk",id:"version-4.0/guides/multi-pk",title:"Multi-column primary key",description:"Sometimes you have a resource that doesn't have its own primary key. This is typically",source:"@site/versioned_docs/version-4.0/guides/multi-pk.md",sourceDirName:"guides",slug:"/guides/multi-pk",permalink:"/docs/4.0/guides/multi-pk",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/multi-pk.md",tags:[],version:"4.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"Multi-column primary key",id:"multi-pk",original_id:"multi-pk"},sidebar:"version-4.0/docs",previous:{title:"Computed Properties",permalink:"/docs/4.0/guides/computed-properties"},next:{title:"Nesting related resources (server-side join)",permalink:"/docs/4.0/guides/nested-response"}},u={},l=[],p={toc:l};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sometimes you have a resource that doesn't have its own primary key. This is typically\nfound in ",(0,o.kt)("inlineCode",{parentName:"p"},"join tables")," that express ",(0,o.kt)("inlineCode",{parentName:"p"},"many-to-many")," relationships."),(0,o.kt)("p",null,"Since the pk() method must return either a number, string or undefined, make sure to\ndo a simple serialization. A simple join on the values should work. Be care to\nmake sure your join value can't be a part of the id."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class VoteResource extends Resource {\n  readonly userId: number | undefined = undefined;\n  readonly postId: number | undefined = undefined;\n  readonly createdAt: string = '1900-01-01T01:01:01Z';\n\n  pk() {\n    return [this.userId, this.postId].join(',');\n  }\n  static urlRoot = 'https://example.com/votes/';\n}\n")))}c.isMDXComponent=!0}}]);