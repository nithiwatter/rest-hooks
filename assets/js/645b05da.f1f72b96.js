"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[35844],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(y,s(s({ref:n},c),{},{components:t})):a.createElement(y,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},46170:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(83117),r=(t(67294),t(3905));const i={title:"Array"},s=void 0,o={unversionedId:"api/Array",id:"version-2.2/api/Array",title:"Array",description:"Creates a schema to normalize an array of schemas. If the input value is an Object instead of an Array,",source:"@site/versioned_docs/version-2.2/api/Array.md",sourceDirName:"api",slug:"/api/Array",permalink:"/docs/2.2/api/Array",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Array.md",tags:[],version:"2.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"Array"}},l={},p=[{value:"Instance Methods",id:"instance-methods",level:2},{value:"Usage",id:"usage",level:2},{value:"Output",id:"output",level:4},{value:"Dynamic entity types",id:"dynamic-entity-types",level:3},{value:"string schemaAttribute",id:"string-schemaattribute",level:4},{value:"function schemaAttribute",id:"function-schemaattribute",level:4},{value:"Output",id:"output-1",level:4}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Creates a schema to normalize an array of schemas. If the input value is an ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")," instead of an ",(0,r.kt)("inlineCode",{parentName:"p"},"Array"),",\nthe normalized result will be an ",(0,r.kt)("inlineCode",{parentName:"p"},"Array")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),"'s values."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: The same behavior can be defined with shorthand syntax: ",(0,r.kt)("inlineCode",{parentName:"em"},"[ mySchema ]"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,r.kt)("strong",{parentName:"li"},"required")," A singular schema that this array contains ",(0,r.kt)("em",{parentName:"li"},"or")," a mapping of schema to attribute values."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"schemaAttribute"),": ",(0,r.kt)("em",{parentName:"li"},"optional")," (required if ",(0,r.kt)("inlineCode",{parentName:"li"},"definition")," is not a singular schema) The attribute on each entity found that defines what schema, per the definition mapping, to use when normalizing.\nCan be a string or a function. If given a function, accepts the following arguments:\n",(0,r.kt)("em",{parentName:"li"}," ",(0,r.kt)("inlineCode",{parentName:"em"},"value"),": The input value of the entity.\n")," ",(0,r.kt)("inlineCode",{parentName:"li"},"parent"),": The parent object of the input array. ","*"," ",(0,r.kt)("inlineCode",{parentName:"li"},"key"),": The key at which the input array appears on the parent object.")),(0,r.kt)("h2",{id:"instance-methods"},"Instance Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,r.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Array")," constructor. This method tends to be useful for creating circular references in schema.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To describe a simple array of a singular entity type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const data = [\n  { id: '123', name: 'Jim' },\n  { id: '456', name: 'Jane' },\n];\nclass User extends Entity {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n}\n\nconst userListSchema = new schema.Array(User);\n// or use shorthand syntax:\nconst userListSchema = [User];\n\nconst normalizedData = normalize(data, userListSchema);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const data = [\n  { id: '123', name: 'Jim' },\n  { id: '456', name: 'Jane' },\n];\nclass User extends Entity {\n  pk() {\n    return this.id;\n  }\n}\n\nconst userListSchema = new schema.Array(User);\n// or use shorthand syntax:\nconst userListSchema = [User];\n\nconst normalizedData = normalize(data, userListSchema);\n")),(0,r.kt)("h4",{id:"output"},"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  entities: {\n    User: {\n      '123': { id: '123', name: 'Jim' },\n      '456': { id: '456', name: 'Jane' }\n    }\n  },\n  result: [ '123', '456' ]\n}\n")),(0,r.kt)("h3",{id:"dynamic-entity-types"},"Dynamic entity types"),(0,r.kt)("p",null,"If your input data is an array of more than one type of entity, it is necessary to define a schema mapping."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: If your data returns an object that you did not provide a mapping for, the original object will be returned in the result and an entity will not be created.")),(0,r.kt)("h4",{id:"string-schemaattribute"},"string schemaAttribute"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const data = [\n  { id: 1, type: 'admin' },\n  { id: 2, type: 'user' },\n];\n\nclass User extends Entity {\n  readonly type = 'user' as const;\n  pk() {\n    return this.id;\n  }\n}\nclass Admin extends Entity {\n  readonly type = 'admin' as const;\n  pk() {\n    return this.id;\n  }\n}\nconst myArray = new schema.Array(\n  {\n    admin: Admin,\n    user: User,\n  },\n  'type'\n);\n\nconst normalizedData = normalize(data, myArray);\n")),(0,r.kt)("h4",{id:"function-schemaattribute"},"function schemaAttribute"),(0,r.kt)("p",null,"The return values should match a key in the ",(0,r.kt)("inlineCode",{parentName:"p"},"definition"),". Here we'll show the same behavior as the 'string'\ncase, except we'll append an 's'."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const data = [\n  { id: 1, type: 'admin' },\n  { id: 2, type: 'user' },\n];\n\nclass User extends Entity {\n  readonly type = 'user' as const;\n  pk() {\n    return this.id;\n  }\n}\nclass Admin extends Entity {\n  readonly type = 'admin' as const;\n  pk() {\n    return this.id;\n  }\n}\nconst myArray = new schema.Array(\n  {\n    admins: Admin,\n    users: User,\n  },\n  (input, parent, key) => `${input.type}s`,\n);\n\nconst normalizedData = normalize(data, myArray);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const data = [{ id: 1, type: 'admin' }, { id: 2, type: 'user' }];\n\nclass User extends Entity {\n  pk() {\n    return this.id;\n  }\n}\nclass Admin extends Entity {\n  pk() {\n    return this.id;\n  }\n}\nconst myArray = new schema.Array(\n  {\n    admins: Admin,\n    users: User,\n  },\n  (input, parent, key) => `${input.type}s`,\n);\n\nconst normalizedData = normalize(data, myArray);\n")),(0,r.kt)("h4",{id:"output-1"},"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  entities: {\n    Admin: { '1': { id: 1, type: 'admin' } },\n    User: { '2': { id: 2, type: 'user' } }\n  },\n  result: [\n    { id: 1, schema: 'Admin' },\n    { id: 2, schema: 'User' }\n  ]\n}\n")))}d.isMDXComponent=!0}}]);