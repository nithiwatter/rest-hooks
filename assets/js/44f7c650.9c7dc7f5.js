/*! For license information please see 44f7c650.9c7dc7f5.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[54234],{41535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,y={};function h(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}function g(){}function k(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=h.prototype;var v=k.prototype=new g;v.constructor=k,b(v,h.prototype),v.isPureReactComponent=!0;var w=Array.isArray,_=Object.prototype.hasOwnProperty,N={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var a,o={},l=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(l=""+t.key),t)_.call(t,a)&&!x.hasOwnProperty(a)&&(o[a]=t[a]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(a in i=e.defaultProps)void 0===o[a]&&(o[a]=i[a]);return{$$typeof:r,type:e,key:l,ref:s,props:o,_owner:N.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var j=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function Z(e,t,a,o,l){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i=!1;if(null===e)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return l=l(i=e),e=""===o?"."+E(i,0):o,w(l)?(a="",null!=e&&(a=e.replace(j,"$&/")+"/"),Z(l,t,a,"",(function(e){return e}))):null!=l&&(T(l)&&(l=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,a+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(j,"$&/")+"/")+e)),t.push(l)),1;if(i=0,o=""===o?".":o+":",w(e))for(var u=0;u<e.length;u++){var c=o+E(s=e[u],u);i+=Z(s,t,a,c,l)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(s=e.next()).done;)i+=Z(s=s.value,t,a,c=o+E(s,u++),l);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function C(e,t,r){if(null==e)return e;var n=[],a=0;return Z(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},P={transition:null}},27378:(e,t,r)=>{r(41535)},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(83117),a=r(67294),o=r(86010),l=r(72389),s=r(67392),i=r(7094),u=r(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:r,block:l,defaultValue:d,values:f,groupId:m,className:b}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=f??y.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),g=(0,s.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,i.U)(),[_,N]=(0,a.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:S}=(0,u.o5)();if(null!=m){const e=v[m];null!=e&&e!==_&&h.some((t=>t.value===e))&&N(e)}const T=e=>{const t=e.currentTarget,r=x.indexOf(t),n=h[r].value;n!==_&&(S(t),N(n),null!=m&&w(m,String(n)))},j=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;r=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;r=x[t]??x[x.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},b)},h.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>x.push(e),onKeyDown:j,onFocus:T,onClick:T},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":_===t})}),r??t)}))),r?(0,a.cloneElement)(y.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function f(e){const t=(0,l.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},96497:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(65488),a=r(85162),o=r(67294),l=r(69671);function s(e){let{pkgs:t,dev:r=!1}=e;return o.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},o.createElement(a.Z,{value:"yarn"},o.createElement(l.Z,{className:"language-bash"},"yarn add ",r?"--dev ":"",t)),o.createElement(a.Z,{value:"npm"},o.createElement(l.Z,{className:"language-bash"},"npm install --save",r?"Dev ":""," ",t)))}},56922:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(55468);const o={React:n,...n,...a}},1005:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(83117),a=(r(27378),r(3905)),o=r(96497);const l={title:"Legacy browser support"},s=void 0,i={unversionedId:"guides/legacy-browser",id:"guides/legacy-browser",title:"Legacy browser support",description:"Rest Hooks is designed to work out of the box with most tooling.",source:"@site/../docs/core/guides/legacy-browser.md",sourceDirName:"guides",slug:"/guides/legacy-browser",permalink:"/docs/guides/legacy-browser",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/legacy-browser.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1654835498,formattedLastUpdatedAt:"Jun 10, 2022",frontMatter:{title:"Legacy browser support"},sidebar:"docs",previous:{title:"Usage with class components",permalink:"/docs/guides/class-components"},next:{title:"TypeScript Types",permalink:"/docs/api/types"}},u={},c=[{value:"Transpile packages",id:"transpile-packages",level:3},{value:"Polyfills",id:"polyfills",level:3},{value:"<code>index.tsx</code>",id:"indextsx",level:4}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rest Hooks is designed to work out of the box with most tooling."),(0,a.kt)("p",null,"If you see, ",(0,a.kt)("inlineCode",{parentName:"p"},"Uncaught TypeError: Class constructor Resource cannot be invoked without 'new'"),"\nthis is most likely due to targeting Internet Explorer support with a custom webpack configuration.\nThis will occur even when using a modern browser, so long as your target (typically set with ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/browserslist"},"browserslist"),")\nincludes legacy browsers like Internet Explorer."),(0,a.kt)("p",null,"In this case, follow the instructions below to ensure compatibility."),(0,a.kt)("h3",{id:"transpile-packages"},"Transpile packages"),(0,a.kt)("p",null,"Adding ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/webpack-plugin-modern-npm"},"webpack-plugin-modern-npm")," will ensure compatibility of all installed\npackages with legacy browsers."),(0,a.kt)(o.Z,{pkgs:"webpack-plugin-modern-npm",dev:!0,mdxType:"PkgTabs"}),(0,a.kt)("p",null,"Then install the plugin by adding to webpack config."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"webpack.config.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const ModernNpmPlugin = require('webpack-plugin-modern-npm');\n\nmodule.exports = {\n  plugins: [\n    new ModernNpmPlugin()\n  ]\n};\n")),(0,a.kt)("h3",{id:"polyfills"},"Polyfills"),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill"},"CRA polyfill"),"\nor follow instructions below."),(0,a.kt)(o.Z,{pkgs:"core-js whatwg-fetch",mdxType:"PkgTabs"}),(0,a.kt)("h4",{id:"indextsx"},(0,a.kt)("inlineCode",{parentName:"h4"},"index.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import 'core-js/stable';\nimport 'whatwg-fetch';\n// place the above line at top\n")))}d.isMDXComponent=!0}}]);