(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[80786],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),i=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?o.createElement(g,a(a({ref:t},u),{},{components:n})):o.createElement(g,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var i=2;i<l;i++)a[i]=n[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93896:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ne});var o=n(83117),r=n(67294),l=n(86010),a=n(72389),c=n(61313),s=n(95999),i=n(52263),u=n(91262),p=n(66412);const m="playgroundContainer_X_Ta",d="playgroundHeader_dyrN",g="playgroundEditor_Q6Y7",f="playgroundPreview_DzOI";function y(e){let{children:t}=e;return r.createElement("div",{className:(0,l.Z)(d)},t)}function h(){return r.createElement("div",null,"Loading...")}function b(){return r.createElement(r.Fragment,null,r.createElement(y,null,r.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),r.createElement("div",{className:f},r.createElement(u.Z,{fallback:r.createElement(h,null)},(()=>r.createElement(r.Fragment,null,r.createElement(c.i5,null),r.createElement(c.IF,null))))))}function v(){const e=(0,a.Z)();return r.createElement(c.uz,{key:String(e),className:g})}function k(){return r.createElement(r.Fragment,null,r.createElement(y,null,r.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),r.createElement(v,null))}function E(e){let{children:t,transformCode:n,...l}=e;const{siteConfig:{themeConfig:a}}=(0,i.Z)(),{liveCodeBlock:{playgroundPosition:s}}=a,u=(0,p.p)();return r.createElement("div",{className:m},r.createElement(c.nu,(0,o.Z)({code:t.replace(/\n$/,""),transformCode:n??(e=>`${e};`),theme:u},l),"top"===s?r.createElement(r.Fragment,null,r.createElement(b,null),r.createElement(k,null)):r.createElement(r.Fragment,null,r.createElement(k,null),r.createElement(b,null))))}var N=n(56922),B=n(87594),j=n.n(B);const C=/title=(?<quote>["'])(?<title>.*?)\1/,w=/\{(?<range>[\d,-]+)\}/,O={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function L(e,t){const n=e.map((e=>{const{start:n,end:o}=O[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function T(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:r,metastring:l}=t;if(l&&w.test(l)){const e=l.match(w).groups.range;if(0===r.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${l}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=r[0].className,o=j()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const a=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return L(["js","jsBlock"],t);case"jsx":case"tsx":return L(["js","jsBlock","jsx"],t);case"html":return L(["js","jsBlock","html"],t);case"python":case"py":case"bash":return L(["bash"],t);case"markdown":case"md":return L(["html","jsx","bash"],t);default:return L(Object.keys(O),t)}}(o,r),c=n.split("\n"),s=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(r.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),p=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let d=0;d<c.length;){const e=c[d].match(a);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=`${d},`:u[t]?s[u[t]].start=d:p[t]&&(s[p[t]].range+=`${s[p[t]].start}-${d-1},`),c.splice(d,1)}n=c.join("\n");const m={};return Object.entries(s).forEach((e=>{let[t,{range:n}]=e;j()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}var P=n(35281);const x="codeBlockContainer_Ckt0";function S(e){let{as:t,...n}=e;const a=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,r]=e;const l=t[o];l&&"string"==typeof r&&(n[l]=r)})),n}((0,p.p)());return r.createElement(t,(0,o.Z)({},n,{style:a,className:(0,l.Z)(n.className,x,P.k.common.codeBlock)}))}const _={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function Z(e){let{children:t,className:n}=e;return r.createElement(S,{as:"pre",tabIndex:0,className:(0,l.Z)(_.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:_.codeBlockLines},t))}var I=n(86668);const A={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var D={Prism:n(87410).Z,theme:A};function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var H=/\r\n|\r|\n/,F=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},R=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},V=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=z({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=z({},n,{backgroundColor:null}),r};function M(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const W=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),$(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?V(e.theme,e.language):void 0;return t.themeDict=n})),$(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,l=z({},M(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(l.style=a.plain),void 0!==r&&(l.style=void 0!==l.style?z({},l.style,r):r),void 0!==n&&(l.key=n),o&&(l.className+=" "+o),l})),$(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return l[n[0]];var a=o?{display:"inline-block"}:{},c=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[a].concat(c))}})),$(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,l=e.token,a=z({},M(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(a.style=void 0!==a.style?z({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),$(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,l=this.getThemeDict(this.props),a=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],l=0,a=0,c=[],s=[c];a>-1;){for(;(l=o[a]++)<r[a];){var i=void 0,u=t[a],p=n[a][l];if("string"==typeof p?(u=a>0?u:["plain"],i=p):(u=R(u,p.type),p.alias&&(u=R(u,p.alias)),i=p.content),"string"==typeof i){var m=i.split(H),d=m.length;c.push({types:u,content:m[0]});for(var g=1;g<d;g++)F(c),s.push(c=[]),c.push({types:u,content:m[g]})}else a++,t.push(u),n.push(i),o.push(0),r.push(i.length)}a--,t.pop(),n.pop(),o.pop(),r.pop()}return F(c),s}(void 0!==a?this.tokenize(t,o,a,n):[o]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),q="codeLine_lJS_",G="codeLineNumber_Tfdd",X="codeLineContent_feaV";function Y(e){let{line:t,classNames:n,showLineNumbers:a,getLineProps:c,getTokenProps:s}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=c({line:t,className:(0,l.Z)(n,a&&q)}),u=t.map(((e,t)=>r.createElement("span",(0,o.Z)({key:t},s({token:e,key:t})))));return r.createElement("span",i,a?r.createElement(r.Fragment,null,r.createElement("span",{className:G}),r.createElement("span",{className:X},u)):r.createElement(r.Fragment,null,u,r.createElement("br",null)))}const J={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function K(e){let{code:t,className:n}=e;const[o,a]=(0,r.useState)(!1),c=(0,r.useRef)(void 0),i=(0,r.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const o=document.createElement("textarea"),r=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const l=document.getSelection();let a=!1;l.rangeCount>0&&(a=l.getRangeAt(0)),n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}o.remove(),a&&(l.removeAllRanges(),l.addRange(a)),r&&r.focus()}(t),a(!0),c.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),r.createElement("button",{type:"button","aria-label":o?(0,s.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,s.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,s.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",n,J.copyButton,o&&J.copyButtonCopied),onClick:i},r.createElement("span",{className:J.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:J.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:J.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const Q="wordWrapButtonIcon_Bwma",U="wordWrapButtonEnabled_EoeP";function ee(e){let{className:t,onClick:n,isEnabled:o}=e;const a=(0,s.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,l.Z)("clean-btn",t,o&&U),"aria-label":a,title:a},r.createElement("svg",{className:Q,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function te(e){let{children:t,className:n="",metastring:a,title:c,showLineNumbers:s,language:i}=e;const{prism:{defaultLanguage:u,magicComments:m}}=(0,I.L)(),d=i??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(n)??u,g=(0,p.p)(),f=function(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),l=(0,r.useRef)(null),a=(0,r.useCallback)((()=>{const n=l.current.querySelector("code");e?n.removeAttribute("style"):n.style.whiteSpace="pre-wrap",t((e=>!e))}),[l,e]),c=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=l.current,n=e>t||l.current.querySelector("code").hasAttribute("style");o(n)}),[l]);return(0,r.useEffect)((()=>{c()}),[e,c]),(0,r.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:l,isEnabled:e,isCodeScrollable:n,toggle:a}}(),y=function(e){var t;return(null==e||null==(t=e.match(C))?void 0:t.groups.title)??""}(a)||c,{lineClassNames:h,code:b}=T(t,{metastring:a,language:d,magicComments:m}),v=s??function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(a);return r.createElement(S,{as:"div",className:(0,l.Z)(n,d&&!n.includes(`language-${d}`)&&`language-${d}`)},y&&r.createElement("div",{className:_.codeBlockTitle},y),r.createElement("div",{className:_.codeBlockContent},r.createElement(W,(0,o.Z)({},D,{theme:g,code:b,language:d??"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:a}=e;return r.createElement("pre",{tabIndex:0,ref:f.codeBlockRef,className:(0,l.Z)(t,_.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,l.Z)(_.codeBlockLines,v&&_.codeBlockLinesWithNumbering)},n.map(((e,t)=>r.createElement(Y,{key:t,line:e,getLineProps:o,getTokenProps:a,classNames:h[t],showLineNumbers:v})))))})),r.createElement("div",{className:_.buttonGroup},(f.isEnabled||f.isCodeScrollable)&&r.createElement(ee,{className:_.codeButton,onClick:()=>f.toggle(),isEnabled:f.isEnabled}),r.createElement(K,{className:_.codeButton,code:b}))))}const ne=(oe=function(e){let{children:t,...n}=e;const l=(0,a.Z)(),c=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof c?te:Z;return r.createElement(s,(0,o.Z)({key:String(l)},n),c)},function(e){return e.live?r.createElement(E,(0,o.Z)({scope:N.Z},e)):r.createElement(oe,e)});var oe},87594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,l]=t;if(o&&l){o=parseInt(o),l=parseInt(l);const e=o<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=o;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);