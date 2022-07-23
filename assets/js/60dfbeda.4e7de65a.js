"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[22659],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62819:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(83117),a=(r(67294),r(3905));const o={title:"mockInitialState()"},i=void 0,s={unversionedId:"api/mockInitialState",id:"version-6.1/api/mockInitialState",title:"mockInitialState()",description:"mockInitialState() makes it easy to construct prefill the cache with fixtures. It's",source:"@site/versioned_docs/version-6.1/api/mockInitialState.md",sourceDirName:"api",slug:"/api/mockInitialState",permalink:"/docs/6.1/api/mockInitialState",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/mockInitialState.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"Oct 24, 2021",frontMatter:{title:"mockInitialState()"},sidebar:"version-6.1/docs",previous:{title:"makeExternalCacheProvider()",permalink:"/docs/6.1/api/makeExternalCacheProvider"},next:{title:"<MockProvider />",permalink:"/docs/6.1/api/MockProvider"}},c={},l=[{value:"Arguments",id:"arguments",level:2},{value:"results",id:"results",level:3},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function mockInitialState(results: Fixture[]): State;\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mockInitialState()")," makes it easy to construct prefill the cache with fixtures. It's\nused in ",(0,a.kt)("a",{parentName:"p",href:"./MockResolver"},"<MockResolver /",">")," to process the results prop. However, this\ncan also be useful to send into a normal provider when testing more complete flows\nthat need to handle ",(0,a.kt)("inlineCode",{parentName:"p"},"dispatches")," (and thus fetch)."),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"results"},"results"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface SuccessFixture {\n  request: ReadShape<Schema, object>;\n  params: object;\n  result: object | string | number;\n  error?: false;\n}\n\nexport interface ErrorFixture {\n  request: ReadShape<Schema, object>;\n  params: object;\n  result: Error;\n  error: true;\n}\n\nexport type Fixture = SuccessFixture | ErrorFixture;\n")),(0,a.kt)("p",null,"This prop specifies the fixtures to use data from. Each item represents a fetch defined by the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/6.1/api/Endpoint"},"Endpoint")," and params. ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," contains the JSON response expected from said fetch."),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"State\n")),(0,a.kt)("p",null,"This can be used as the initialState prop for ",(0,a.kt)("a",{parentName:"p",href:"./CacheProvider"},"<CacheProvider /",">")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { CacheProvider } from 'rest-hooks';\nimport { mockInitialState } from '@rest-hooks/test';\n\nimport ArticleResource from 'resources/ArticleResource';\nimport MyComponentToTest from 'components/MyComponentToTest';\n\nconst results = [\n  {\n    request: ArticleResource.list(),\n    params: { maxResults: 10 },\n    result: [\n      {\n        id: 5,\n        content: 'have a merry christmas',\n        author: 2,\n        contributors: [],\n      },\n      {\n        id: 532,\n        content: 'never again',\n        author: 23,\n        contributors: [5],\n      },\n    ],\n  },\n];\n\n<CacheProvider initialState={mockInitialState(results)}>\n  <MyComponentToTest />\n</CacheProvider>\n")))}u.isMDXComponent=!0}}]);