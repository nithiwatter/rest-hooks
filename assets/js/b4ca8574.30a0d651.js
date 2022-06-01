"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[58598],{85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(83117),r=a(67294),l=a(86010),o=a(72389),s=a(67392),i=a(7094),u=a(12466);const d="tabList__CuJ",c="tabItem_LNqP";function p(e){var t;const{lazy:a,block:o,defaultValue:p,values:m,groupId:v,className:b}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,s.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===p?p:p??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,i.U)(),[x,T]=(0,r.useState)(f),N=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=v){const e=y[v];null!=e&&e!==x&&g.some((t=>t.value===e))&&T(e)}const Z=e=>{const t=e.currentTarget,a=N.indexOf(t),n=g[a].value;n!==x&&(E(t),T(n),null!=v&&w(v,String(n)))},C=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]??N[N.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},b)},g.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>N.push(e),onKeyDown:C,onFocus:Z,onClick:Z},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":x===t})}),a??t)}))),a?(0,r.cloneElement)(h.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,o.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},96497:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(65488),r=a(85162),l=a(67294),o=a(93896);function s(e){let{pkgs:t,dev:a=!1}=e;return l.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},l.createElement(r.Z,{value:"yarn"},l.createElement(o.Z,{className:"language-bash"},"yarn add ",a?"--dev ":"",t)),l.createElement(r.Z,{value:"npm"},l.createElement(o.Z,{className:"language-bash"},"npm install --save",a?"Dev ":""," ",t)))}},56922:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(15814);const l={React:n,...n,...r}},57810:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>v,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var n=a(83117),r=(a(67294),a(3905)),l=a(65488),o=a(85162),s=a(96497);const i={id:"installation",title:"Installation"},u=void 0,d={unversionedId:"getting-started/installation",id:"version-5.0/getting-started/installation",title:"Installation",description:"TypeScript is optional, but requires at least version 3.7 for full type enforcement.",source:"@site/versioned_docs/version-5.0/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/5.0/getting-started/installation",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/installation.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631077272,formattedLastUpdatedAt:"9/8/2021",frontMatter:{id:"installation",title:"Installation"},sidebar:"version-5.0/docs",previous:{title:"Introduction",permalink:"/docs/5.0/"},next:{title:"Endpoint",permalink:"/docs/5.0/getting-started/endpoint"}},c={},p=[{value:"Add provider at top-level component",id:"add-provider-at-top-level-component",level:2}],m={toc:p};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{pkgs:"rest-hooks @rest-hooks/test @rest-hooks/hooks @rest-hooks/rest",mdxType:"PkgTabs"}),(0,r.kt)("p",null,"TypeScript is optional, but requires at least version ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#more-recursive-type-aliases"},"3.7")," for full type enforcement."),(0,r.kt)("h2",{id:"add-provider-at-top-level-component"},"Add provider at top-level component"),(0,r.kt)(l.Z,{defaultValue:"web",groupId:"platform",values:[{label:"React Web 16+",value:"web"},{label:"React Web 18+",value:"18-web"},{label:"React Native",value:"native"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"web",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/index.tsx"',title:'"/index.tsx"'},"import { CacheProvider } from 'rest-hooks';\nimport ReactDOM from 'react-dom';\n\nReactDOM.render(\n  <CacheProvider>\n    <App />\n  </CacheProvider>,\n  document.body,\n);\n"))),(0,r.kt)(o.Z,{value:"18-web",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/index.tsx"',title:'"/index.tsx"'},"import { CacheProvider } from 'rest-hooks';\nimport ReactDOM from 'react-dom';\n\nReactDOM.createRoot(document.body).render(\n  <CacheProvider>\n    <App />\n  </CacheProvider>,\n);\n"))),(0,r.kt)(o.Z,{value:"native",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/index.tsx"',title:'"/index.tsx"'},"import { CacheProvider } from 'rest-hooks';\nimport { AppRegistry } from 'react-native';\n\nconst Root = () => (\n  <CacheProvider>\n    <App />\n  </CacheProvider>\n);\nAppRegistry.registerComponent('MyApp', () => Root);\n")))),(0,r.kt)("p",null,"Alternatively ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.0/guides/redux"},"integrate state with redux")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Legacy (IE) browser support")),(0,r.kt)("p",null,"If you see ",(0,r.kt)("inlineCode",{parentName:"p"},"Uncaught TypeError: Class constructor Resource cannot be invoked without 'new'"),",\nfollow the instructions to ",(0,r.kt)("a",{parentName:"p",href:"../guides/legacy-browser"},"add legacy browser support to packages"))))}v.isMDXComponent=!0}}]);