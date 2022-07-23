"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[74662],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,m=d["".concat(i,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const o={title:"Legacy browser support"},l=void 0,s={unversionedId:"guides/legacy-browser",id:"version-4.2/guides/legacy-browser",title:"Legacy browser support",description:"Rest Hooks is designed to work out of the box with most tooling.",source:"@site/versioned_docs/version-4.2/guides/legacy-browser.md",sourceDirName:"guides",slug:"/guides/legacy-browser",permalink:"/docs/4.2/guides/legacy-browser",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/legacy-browser.md",tags:[],version:"4.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"Legacy browser support"}},i={},p=[{value:"Transpile packages",id:"transpile-packages",level:3},{value:"Polyfills",id:"polyfills",level:3},{value:"<code>index.tsx</code>",id:"indextsx",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rest Hooks is designed to work out of the box with most tooling."),(0,a.kt)("p",null,"If you see, ",(0,a.kt)("inlineCode",{parentName:"p"},"Uncaught TypeError: Class constructor Resource cannot be invoked without 'new'"),"\nthis is most likely due to targeting Internet Explorer support with a custom webpack configuration.\nThis will occur even when using a modern browser, so long as your target (typically set with ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/browserslist"},"browserslist"),")\nincludes legacy browsers like Internet Explorer."),(0,a.kt)("p",null,"In this case, follow the instructions below to ensure compatibility."),(0,a.kt)("h3",{id:"transpile-packages"},"Transpile packages"),(0,a.kt)("p",null,"Adding ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/webpack-plugin-modern-npm"},"webpack-plugin-modern-npm")," will ensure compatibility of all installed\npackages with legacy browsers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev webpack-plugin-modern-npm\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install webpack-plugin-modern-npm\n")),(0,a.kt)("p",null,"Then install the plugin by adding to webpack config."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"webpack.config.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const ModernNpmPlugin = require('webpack-plugin-modern-npm');\n\nmodule.exports = {\n  plugins: [\n    new ModernNpmPlugin()\n  ]\n};\n")),(0,a.kt)("h3",{id:"polyfills"},"Polyfills"),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill"},"CRA polyfill"),"\nor follow instructions below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add core-js whatwg-fetch\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install core-js whatwg-fetch\n")),(0,a.kt)("h4",{id:"indextsx"},(0,a.kt)("inlineCode",{parentName:"h4"},"index.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import 'core-js/stable';\nimport 'whatwg-fetch';\n// place the above line at top\n")))}u.isMDXComponent=!0}}]);