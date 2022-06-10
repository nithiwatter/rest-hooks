/*! For license information please see 24725a92.c9d8824f.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[65519],{41535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),f=Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,h={};function k(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}function g(){}function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=k.prototype;var v=b.prototype=new g;v.constructor=b,y(v,k.prototype),v.isPureReactComponent=!0;var w=Array.isArray,N=Object.prototype.hasOwnProperty,P={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,n){var a,o={},i=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)N.call(t,a)&&!O.hasOwnProperty(a)&&(o[a]=t[a]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===o[a]&&(o[a]=l[a]);return{$$typeof:r,type:e,key:i,ref:s,props:o,_owner:P.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var S=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,a,o,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case n:l=!0}}if(l)return i=i(l=e),e=""===o?"."+C(l,0):o,w(i)?(a="",null!=e&&(a=e.replace(S,"$&/")+"/"),_(i,t,a,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(S,"$&/")+"/")+e)),t.push(i)),1;if(l=0,o=""===o?".":o+":",w(e))for(var u=0;u<e.length;u++){var c=o+C(s=e[u],u);l+=_(s,t,a,c,i)}else if("function"==typeof(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),u=0;!(s=e.next()).done;)l+=_(s=s.value,t,a,c=o+C(s,u++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function x(e,t,r){if(null==e)return e;var n=[],a=0;return _(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function E(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},U={transition:null}},27378:(e,t,r)=>{r(41535)},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22392:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(83117),a=(r(27378),r(3905));const o={title:"URL Patterns"},i=void 0,s={unversionedId:"guides/url",id:"guides/url",title:"URL Patterns",description:"Common REST urls resemble the following:",source:"@site/../docs/rest/guides/url.md",sourceDirName:"guides",slug:"/guides/url",permalink:"/rest/guides/url",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/guides/url.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1654835498,formattedLastUpdatedAt:"6/9/2022",frontMatter:{title:"URL Patterns"},sidebar:"docs",previous:{title:"Usage",permalink:"/rest/usage"},next:{title:"Custom endpoints",permalink:"/rest/guides/extending-endpoints"}},l={},u=[{value:"Example",id:"example",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Common REST urls resemble the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/static_root/"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"GET - retrieve list of resources",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"optionally include search params ",(0,a.kt)("inlineCode",{parentName:"li"},"/static_root/?size=20&page=5")))),(0,a.kt)("li",{parentName:"ul"},"POST - create resource"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/static_root/[id]/"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"GET - retrieve one entity matching 'id'"),(0,a.kt)("li",{parentName:"ul"},"PUT - update entire entity"),(0,a.kt)("li",{parentName:"ul"},"PATCH - update partial entity"),(0,a.kt)("li",{parentName:"ul"},"DELETE - delete entity")))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rest/api/resource"},"Resource")," comes out of the box with support for these patterns simply\nby defining the ",(0,a.kt)("inlineCode",{parentName:"p"},"static urlRoot")," property on a Resource."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export default ArticleResource extends Resource {\n  readonly id: string = '';\n  //...\n\n  pk() { return this.id; }\n  static urlRoot = '/articles/';\n}\n")),(0,a.kt)("p",null,"It does this by using that ",(0,a.kt)("inlineCode",{parentName:"p"},"urlRoot")," static property in two static methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest/api/resource#url"},"url(urlParams)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"handles most Endpoints"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest/api/resource#listUrl"},"listUrl(searchParams)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"used in create() and list()")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'ArticleResource.listUrl();\n// "/articles/"\nArticleResource.listUrl({ size: 20, page: 5 });\n// "/articles/?size=20&page=5"\nArticleResource.url({ id: 5 });\n// "/articles/5/"\n')),(0,a.kt)("p",null,"Customizing the url patterns is typically as easy as overriding either of these\nmethods. However, in more extreme scenarios, ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Endpoint#key"},"key()"),"\ncan be set in a custom Endpoint definition."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"A somewhat common pattern is to hold 'sub' resources at nested paths to their 'master'."),(0,a.kt)("p",null,"We might see something like ",(0,a.kt)("inlineCode",{parentName:"p"},"/articles/[articleId]/comments/")," to get the comments for\na given article."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export default class CommentResource extends Resource {\n  readonly id: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  // since we won't be using urlRoot to build our urls we\n  // still need to tell rest hooks how to uniquely identify this Resource\n  static get key() {\n    return 'CommentResource';\n  }\n\n  /**\n   * Get the url for a Resource\n   */\n  static url<T extends typeof Resource>(\n    this: T,\n    urlParams: { articleId: string } & Partial<AbstractInstanceType<T>>,\n  ): string {\n    if (urlParams) {\n      if (this.pk(urlParams) !== undefined) {\n        return `/articles/${articleId}/comments/${this.pk(urlParams)}`;\n      }\n    }\n    // since we're overriding the url() function we must keep the type the\n    // same, which means we might not get urlParams\n    throw new Error('Comments require articleId to retrieve');\n  }\n\n  /**\n   * Get the url for many Resources\n   */\n  static listUrl(searchParams: { articleId: string }): string {\n    if (searchParams && Object.keys(searchParams).length) {\n      const { articleId, ...realSearchParams } = searchParams;\n      const params = new URLSearchParams(realSearchParams as any);\n      // this is essential for consistent url strings\n      params.sort();\n      return `/articles/${articleId}/comments/?${params.toString()}`;\n    }\n    throw new Error('Comments require articleId to retrieve');\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"CommentResource.listUrl();\n// error thrown\nCommentResource.listUrl({ articleId: '5' });\n// \"/articles/5/comments/\"\nCommentResource.listUrl({ articleId: '5', size: 20, page: 6 });\n// \"/articles/5/comments/?size=20&page=6\"\nCommentResource.url({ id: 5 });\n// error thrown\nCommentResource.url({ articleId: '5', id: '23' });\n// \"/articles/5/comments/23/\"\n")))}p.isMDXComponent=!0}}]);