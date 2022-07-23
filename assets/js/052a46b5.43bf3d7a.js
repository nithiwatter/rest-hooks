"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[96957],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=u(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||a;return n?o.createElement(m,s(s({ref:t},p),{},{components:n})):o.createElement(m,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},31791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=n(83117),r=(n(67294),n(3905));const a={authors:["ntucker"],tags:["releases","rest-hooks"],title:"Rest Hooks 2.1 Released"},s=void 0,i={permalink:"/blog/2019/08/07/Rest-Hooks-2.1-Released",source:"@site/blog/2019-08-07-Rest-Hooks-2.1-Released.md",title:"Rest Hooks 2.1 Released",description:"New Features",date:"2019-08-07T00:00:00.000Z",formattedDate:"August 7, 2019",tags:[{label:"releases",permalink:"/blog/tags/releases"},{label:"rest-hooks",permalink:"/blog/tags/rest-hooks"}],readingTime:2.69,hasTruncateMarker:!0,authors:[{name:"Nathaniel Tucker",title:"Creator of Rest Hooks",url:"https://github.com/ntucker",imageURL:"https://github.com/ntucker.png",key:"ntucker"}],frontMatter:{authors:["ntucker"],tags:["releases","rest-hooks"],title:"Rest Hooks 2.1 Released"},prevItem:{title:"Rest Hooks 2.2 Released",permalink:"/blog/2019/10/28/Rest-Hooks-2.2-Released"},nextItem:{title:"Announcing Rest Hooks 2.0",permalink:"/blog/2019/07/13/Announcing-Rest-Hooks-2.0"}},l={authorsImageUrls:[void 0]},u=[{value:"New Features",id:"new-features",level:2},{value:"Reduced bundle size with custom networking library",id:"reduced-bundle-size-with-custom-networking-library",level:3},{value:"RPCAction, PurgeAction",id:"rpcaction-purgeaction",level:3},{value:"Improved Debugging",id:"improved-debugging",level:2},{value:"Type refinements",id:"type-refinements",level:2},{value:"Final notes",id:"final-notes",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"new-features"},"New Features"),(0,r.kt)("h3",{id:"reduced-bundle-size-with-custom-networking-library"},"Reduced bundle size with custom networking library"),(0,r.kt)("p",null,"Resource comes with a default ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch()")," implementation to make getting started easy.\nIt uses ",(0,r.kt)("a",{parentName:"p",href:"http://visionmedia.github.io/superagent/"},"superagent")," as the networking library\ndue to its server-side support as well as nice interface via the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Builder_pattern"},"builder pattern"),".\nHowever, this comes at the cost of 6kb gziped added to the bundle. For those who want\nto ",(0,r.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/2.2/guides/custom-networking"},"use another networking library")," this is quite a cost to pay for a library that itself\nis well under 10kb gzip."),(0,r.kt)("p",null,"To solve this problem there is a new exported called ",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleResource"),". This provides\nall the Resource behavior without the ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch()")," implementation. If you're customizing\n",(0,r.kt)("inlineCode",{parentName:"p"},"fetch()")," or want to customize ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch()"),", simply ",(0,r.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/2.2/guides/custom-networking"},"follow the instructions")," to use\nSimpleResource as your base class now. With tree-shaking this will leave ",(0,r.kt)("a",{parentName:"p",href:"http://visionmedia.github.io/superagent/"},"superagent"),"\nout of your bundle and save a cool 6kb gzip."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/pull/113"},"Enable customizing networking library reducing bundle size #113")),(0,r.kt)("h3",{id:"rpcaction-purgeaction"},"RPCAction, PurgeAction"),(0,r.kt)("p",null,"RPCAction, PurgeAction types join ReceiveAction and FetchAction as exportes from Rest Hooks.\nInternally Rest Hooks dispatches actions (plain objects) that describe what Rest Hooks should do.\nThe structure of these actions is typed and previously only some of those types were actually\nexported. Now you can get access to all of them. This is most useful for building your own ",(0,r.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/2.2/api/Manager"},"custom\nmanagers"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/pull/119"},"Export new types RPCAction, PurgeAction #119")),(0,r.kt)("h2",{id:"improved-debugging"},"Improved Debugging"),(0,r.kt)("p",null,"Sometimes the backend can fail and return bad responses - even without an HTTP error code.\nIt would behoove any fetching library to gracefully handle those cases and inform the user what\nhappened."),(0,r.kt)("p",null,"Previously there was a check for this very case - but it was only included in development mode.\nHaving certain bug checking code only exist in development mode makes sense for errors that\nwould exist and be caught in the client code. However, for issues independant of client (like\nservers) this is an unreasonable restriction."),(0,r.kt)("p",null,"To solve this, the default ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch()")," implementation in ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," has been updated to\ncheck for valid responses even in production. Its checking logic has also been improved.\nAdditionally the internal action dispatching types have been updated to not allow void\nresponses for anything besides a PurgeAction. This is important to enforce voids are not\npassed around as they have no meaning as the result of a fetch. This leads the way to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/issues/120"},"further\ntype refinements that enforce this as the FetchShape.fetch()"),"\nlevel as to ensure user implementations provide those same guarantees."),(0,r.kt)("p",null,'Now even in production - if the API soft errors by returning an invalid response without\nan error status code you will get a "JSON expected but not returned from API" error response.'),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/pull/119"},"Handle null fetch response even in production #119")),(0,r.kt)("h2",{id:"type-refinements"},"Type refinements"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"String")," is considered a valid payload to be sent in requests, so it has been added to the union along\nwith ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),". This makes API really as flexible as it should be."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/pull/116"},"Allow string type for body (payload) parameters ")),(0,r.kt)("h2",{id:"final-notes"},"Final notes"),(0,r.kt)("p",null,"Please try out the new release and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/issues"},"give feedback"),"\nif there are any issues or if things are working great! We've got a lot of great new features\ncoming down the pipeline and we hope to see your contributions as well. \ud83d\ude0a"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/releases/tag/2.1.0"},"Full set of 2.1 release commits")))}c.isMDXComponent=!0}}]);