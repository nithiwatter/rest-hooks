/*! For license information please see 1cc19027.629ee465.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[99379],{41535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),u=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}function k(){}function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=g.prototype;var v=b.prototype=new k;v.constructor=b,h(v,g.prototype),v.isPureReactComponent=!0;var w=Array.isArray,O=Object.prototype.hasOwnProperty,j={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var s,o={},a=null,i=null;if(null!=t)for(s in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)O.call(t,s)&&!R.hasOwnProperty(s)&&(o[s]=t[s]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var l=Array(u),c=0;c<u;c++)l[c]=arguments[c+2];o.children=l}if(e&&e.defaultProps)for(s in u=e.defaultProps)void 0===o[s]&&(o[s]=u[s]);return{$$typeof:n,type:e,key:a,ref:i,props:o,_owner:j.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var T=/\/+/g;function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,s,o,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return a=a(u=e),e=""===o?"."+U(u,0):o,w(a)?(s="",null!=e&&(s=e.replace(T,"$&/")+"/"),x(a,t,s,"",(function(e){return e}))):null!=a&&(S(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,s+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(T,"$&/")+"/")+e)),t.push(a)),1;if(u=0,o=""===o?".":o+":",w(e))for(var l=0;l<e.length;l++){var c=o+U(i=e[l],l);u+=x(i,t,s,c,a)}else if("function"==typeof(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),l=0;!(i=e.next()).done;)u+=x(i=i.value,t,s,c=o+U(i,l++),a);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function N(e,t,n){if(null==e)return e;var r=[],s=0;return x(e,r,"","",(function(e){return t.call(n,e,s++)})),r}function _(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var E={current:null},C={transition:null}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=s,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(83117),s=(n(27378),n(3905));const o={title:"Immediate Mutation Updates"},a=void 0,i={unversionedId:"guides/immediate-updates",id:"guides/immediate-updates",title:"Immediate Mutation Updates",description:"When a user causes mutations like creating, updating, or deleting resources, it's important",source:"@site/../docs/core/guides/immediate-updates.md",sourceDirName:"guides",slug:"/guides/immediate-updates",permalink:"/docs/guides/immediate-updates",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/immediate-updates.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1654835498,formattedLastUpdatedAt:"6/9/2022",frontMatter:{title:"Immediate Mutation Updates"},sidebar:"docs",previous:{title:"Render as you Fetch",permalink:"/docs/guides/render-as-you-fetch"},next:{title:"Optimistic Updates",permalink:"/docs/guides/optimistic-updates"}},u={},l=[{value:"Update",id:"update",level:2},{value:"Delete",id:"delete",level:2},{value:"Create",id:"create",level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"When a user causes mutations like creating, updating, or deleting resources, it's important\nto have those changed be reflected in the application. A simple publish cache\nthat has no underlying knowledge of the data structures would require a refetch of any endpoints\nthat are changed. This would reduce performance and put extra burden on the backend."),(0,s.kt)("p",null,"However, like many other cases, a normalized cache - one with underlying knowledge of the relationships\nbetween resources - is capable of keeping all data consistent and fresh without\nany refetches."),(0,s.kt)("h2",{id:"update"},"Update"),(0,s.kt)("p",null,"Rest Hooks uses your schema definitions to understand how to normalize response data into\nan ",(0,s.kt)("inlineCode",{parentName:"p"},"entity table")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"result table"),". Of course, this means that there is only ever one copy\nof a given ",(0,s.kt)("inlineCode",{parentName:"p"},"entity"),". Aside from providing consistency when using different response endpoints,\nthis means that by providing an accurate schema definition, Rest Hooks can automatically keep\nall data uses consistent and fresh. The default update endpoints ",(0,s.kt)("a",{parentName:"p",href:"/rest/api/resource#update-endpoint"},"Resource.update()")," and\n",(0,s.kt)("a",{parentName:"p",href:"/rest/api/resource#partialupdate-endpoint"},"Resource.partialUpdate()")," both do this automatically. ",(0,s.kt)("a",{parentName:"p",href:"/rest/guides/rpc"},"Read more about defining other\nupdate endpoints")),(0,s.kt)("h2",{id:"delete"},"Delete"),(0,s.kt)("p",null,"Rest Hooks automatically deletes entity entries ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/Delete"},"schema.Delete")," is used.\n",(0,s.kt)("a",{parentName:"p",href:"/rest/api/resource#delete-endpoint"},"Resource.delete()"),"\nprovides such an endpoint."),(0,s.kt)("h2",{id:"create"},"Create"),(0,s.kt)("p",null,"Like updates, created entities are automatically added to the entities table. This means\nany components useSuspense() for just that item will be able to access it immediately and\nnot have to wait for an additional retrieval request. However, often new items are created\nwhen viewing an entire list of items, and the create should result in that list - any maybe others -\ndisplaying the newly created entry."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/api/Endpoint#update"},"Endpoint.update")," handles this case"),(0,s.kt)("p",null,"Simplest case:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="userEndpoint.ts"',title:'"userEndpoint.ts"'},"const createUser = new Endpoint(postToUserFunction, {\n  schema: User,\n  update: (newUserId: string) => ({\n    [userList.key()]: (users = []) => [newUserId, ...users],\n  }),\n});\n")),(0,s.kt)("p",null,"More updates:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Component.tsx"',title:'"Component.tsx"'},"const allusers = useSuspense(userList);\nconst adminUsers = useSuspense(userList, { admin: true });\n")),(0,s.kt)("p",null,"The endpoint below ensures the new user shows up immediately in the usages above."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="userEndpoint.ts"',title:'"userEndpoint.ts"'},"const createUser = new Endpoint(postToUserFunction, {\n  schema: User,\n  update: (newUserId, newUser)  => {\n    const updates = {\n      [userList.key()]: (users = []) => [newUserId, ...users],\n    ];\n    if (newUser.isAdmin) {\n      updates[userList.key({ admin: true })] = (users = []) => [newUserId, ...users];\n    }\n    return updates;\n  },\n});\n")),(0,s.kt)("p",null,"This is usage with a ",(0,s.kt)("a",{parentName:"p",href:"/rest/api/resource"},"Resource")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="TodoResource.ts"',title:'"TodoResource.ts"'},"import { Resource } from '@rest-hooks/rest';\n\nexport default class TodoResource extends Resource {\n  readonly id: number = 0;\n  readonly userId: number = 0;\n  readonly title: string = '';\n  readonly completed: boolean = false;\n\n  pk() {\n    return `${this.id}`;\n  }\n\n  static urlRoot = 'https://jsonplaceholder.typicode.com/todos';\n\n  static create<T extends typeof Resource>(this: T) {\n    const todoList = this.list();\n    return super.create().extend({\n      schema: this,\n      // highlight-start\n      update: (newResourcePk: string) => ({\n        [todoList.key({})]: (resourcePks: string[] = []) => [\n          ...resourcePks,\n          newResourcePk,\n        ],\n      }),\n      // highlight-end\n    });\n  }\n}\n")),(0,s.kt)("p",null,"Extract the core logic for reuse"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="TodoResource.ts"',title:'"TodoResource.ts"'},"import { Resource } from '@rest-hooks/rest';\n\nexport default class TodoResource extends Resource {\n  readonly id: number = 0;\n  readonly userId: number = 0;\n  readonly title: string = '';\n  readonly completed: boolean = false;\n\n  pk() {\n    return `${this.id}`;\n  }\n\n  static urlRoot = 'https://jsonplaceholder.typicode.com/todos';\n\n  static create<T extends typeof Resource>(this: T) {\n    const todoList = this.list();\n    return super.create().extend({\n      schema: this,\n      update: (newResourcePk: string) => ({\n        // highlight-next-line\n        [todoList.key({})]: this.appendList.bind(this, newResourcePk),\n      }),\n    });\n  }\n\n  // highlight-start\n  static appendList(newResourcePk: string, resourcePks: string[] = []) {\n    if (resourcePks.includes(newResourcePk)) return resourcePks;\n    return [...resourcePks, newResourcePk];\n  }\n  // highlight-end\n}\n")))}p.isMDXComponent=!0}}]);