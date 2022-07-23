"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[9601],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(83117),i=(n(67294),n(3905));const o={title:"PollingSubscription implements Subscription",sidebar_label:"PollingSubscription",hide_title:!0},a="PollingSubscription implements [Subscription](/docs/6.1/api/SubscriptionManager)",l={unversionedId:"api/PollingSubscription",id:"version-6.1/api/PollingSubscription",title:"PollingSubscription implements Subscription",description:"Will dispatch a fetch action at the minimum interval of all subscriptions to this",source:"@site/versioned_docs/version-6.1/api/PollingSubscription.md",sourceDirName:"api",slug:"/api/PollingSubscription",permalink:"/docs/6.1/api/PollingSubscription",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/PollingSubscription.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"Oct 24, 2021",frontMatter:{title:"PollingSubscription implements Subscription",sidebar_label:"PollingSubscription",hide_title:!0},sidebar:"version-6.1/docs",previous:{title:"SubscriptionManager",permalink:"/docs/6.1/api/SubscriptionManager"},next:{title:"DevToolsManager",permalink:"/docs/6.1/api/DevToolsManager"}},s={},c=[{value:"Dispatched Actions",id:"dispatched-actions",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pollingsubscription-implements-subscription"},"PollingSubscription implements ",(0,i.kt)("a",{parentName:"h1",href:"/docs/6.1/api/SubscriptionManager"},"Subscription")),(0,i.kt)("p",null,"Will dispatch a ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," action at the minimum interval of all subscriptions to this\nresource."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pauses when offline."),(0,i.kt)("li",{parentName:"ul"},"Immediately fetches when online status returns."),(0,i.kt)("li",{parentName:"ul"},"Immediately fetches any new subscriptions.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  SubscriptionManager,\n  PollingSubscription,\n  CacheProvider,\n  NetworkManager,\n} from 'rest-hooks';\nimport ReactDOM from 'react-dom';\n\nconst managers = [\n  new NetworkManager(),\n  new SubscriptionManager(PollingSubscription)\n]\n\nReactDOM.render(\n  <CacheProvider managers={managers}>\n    <App />\n  </CacheProvider>,\n  document.body,\n);\n")),(0,i.kt)("h2",{id:"dispatched-actions"},"Dispatched Actions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"'rest-hooks/fetch'")),(0,i.kt)("blockquote",null,(0,i.kt)("h4",{parentName:"blockquote",id:"note"},"Note:"),(0,i.kt)("p",{parentName:"blockquote"},"This is already used by ",(0,i.kt)("inlineCode",{parentName:"p"},"CacheProvider")," by default.")))}u.isMDXComponent=!0}}]);