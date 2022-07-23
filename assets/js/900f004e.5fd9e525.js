"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[60622],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(83117),a=(n(67294),n(3905));const o={title:"Render as you Fetch"},s=void 0,i={unversionedId:"guides/render-as-you-fetch",id:"version-4.3/guides/render-as-you-fetch",title:"Render as you Fetch",description:"A core design feature of Rest Hooks is decoupling actual data retrieval from data",source:"@site/versioned_docs/version-4.3/guides/render-as-you-fetch.md",sourceDirName:"guides",slug:"/guides/render-as-you-fetch",permalink:"/docs/4.3/guides/render-as-you-fetch",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/render-as-you-fetch.md",tags:[],version:"4.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"Render as you Fetch"}},l={},d=[{value:"Route preload example",id:"route-preload-example",level:2},{value:"Resource Definitions",id:"resource-definitions",level:3},{value:"Preloader",id:"preloader",level:3},{value:"Components using data",id:"components-using-data",level:3},{value:"FriendCard",id:"friendcard",level:4},{value:"Posts",id:"posts",level:4},{value:"Routing",id:"routing",level:3}],u=(c="SuspenseList",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const p={toc:d};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A core design feature of Rest Hooks is decoupling actual data retrieval from data\nusage. This means hooks that want to ensure data availability like ",(0,a.kt)("a",{parentName:"p",href:"../api/useRetrieve"},"useRetrieve()"),"\nor ",(0,a.kt)("a",{parentName:"p",href:"../api/useresource"},"useResource()")," actually only dispatch the request to fetch. ",(0,a.kt)("a",{parentName:"p",href:"../api/NetworkManager"},"NetworkManager"),"\nthen uses its global awareness to determine whether to fetch. This means, for instance, that\nduplicate requests for data can be deduped into one fetch, with one promise to resolve."),(0,a.kt)("p",null,"Another interesting implication is that fetches started imperatively via ",(0,a.kt)("a",{parentName:"p",href:"../api/useFetcher"},"useFetcher"),"\nwon't result in redundant fetches. This is known as 'fetch then render,' and often results\nin an improved user experience."),(0,a.kt)("p",null,"These are some scenarios where this pattern is especially useful:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Server Side Rendering"),(0,a.kt)("li",{parentName:"ul"},"Loading data in parallel with code"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/concurrent-mode-intro.html"},"Concurrent Mode"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/concurrent-mode-reference.html#suspenselist"},"SuspenseList")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/concurrent-mode-reference.html#usetransition"},"useTransition()"))))),(0,a.kt)("p",null,"Fetch-then-render can be adopted incrementally. Components using data can ",(0,a.kt)("a",{parentName:"p",href:"../api/useresource"},"useResource()"),"\nand be assured they will get their data when it's ready. And when render-as-you-fetch optimizations\nare added later - ",(0,a.kt)("em",{parentName:"p"},"those components don't need to change"),". This makes data usage ",(0,a.kt)("em",{parentName:"p"},"tightly coupled"),",\nand fetch optimization ",(0,a.kt)("em",{parentName:"p"},"loosely coupled"),"."),(0,a.kt)("h2",{id:"route-preload-example"},"Route preload example"),(0,a.kt)("p",null,"In most cases the best time to pre-fetch data is at the routing layer. Doing this\nmakes incorporating all of the above capabilities quite easy. Here we'll walk through\na ",(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/concurrent-react-example-ly1ds"},"small demo")," that\nincorporates concurrent mode with SuspenseList, and useTransition().\nHowever, it would be quite easy to extend this to also support server side rendering and\ncode splitting routes with paraellel data and code loading."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/concurrent-react-example-ly1ds"},"See full demo here")),(0,a.kt)("h3",{id:"resource-definitions"},"Resource Definitions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class PostResource extends SlowFetchResource {\n  readonly id: number | undefined = undefined;\n  readonly userId: number | null = null;\n  readonly title: string = '';\n  readonly body: string = '';\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'https://jsonplaceholder.typicode.com/posts/';\n}\n\nexport interface Address {\n  readonly street: string;\n  readonly suite: string;\n  readonly city: string;\n  readonly zipcode: string;\n  readonly geo: {\n    readonly lat: string;\n    readonly lng: string;\n  };\n}\n\nexport class UserResource extends SlowFetchResource {\n  readonly id: number | undefined = undefined;\n  readonly name: string = '';\n  readonly username: string = '';\n  readonly email: string = '';\n  readonly phone: string = '';\n  readonly website: string = '';\n  readonly address: Address | null = null;\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'https://jsonplaceholder.typicode.com/users/';\n}\n")),(0,a.kt)("h3",{id:"preloader"},"Preloader"),(0,a.kt)("p",null,"This is a preload hook for one route. It returns a function that will load\nthe data needed for that route."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useCallback } from 'react';\nimport { useFetcher } from 'rest-hooks';\nimport { UserResource, PostResource } from 'resources';\n\nfunction useFriendPreloader() {\n  const fetchUser = useFetcher(UserResource.detail(), true);\n  const fetchPosts = useFetcher(PostResource.list(), true);\n  // ideally we could also fetch the comments for each post at this point\n  // however, the API has no solution to this, so we have to have one cascade\n  // waterfall here.\n\n  // Alternative API designs include nesting, HTTP/2 server push, and an endpoint\n  // to fetch comments based on a user rather than post.\n\n  return useCallback(\n    (friendId: number) => {\n      fetchUser({ id: friendId });\n      fetchPosts({ id: friendId });\n    },\n    [fetchUser, fetchPosts],\n  );\n}\n")),(0,a.kt)("h3",{id:"components-using-data"},"Components using data"),(0,a.kt)("h4",{id:"friendcard"},"FriendCard"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const FriendCard = () => {\n  // useData gets the route context\n  const { friendId } = useData();\n  const friend = useResource(UserResource.detail(), { id: friendId });\n  // render some JSX\n};\n")),(0,a.kt)("h4",{id:"posts"},"Posts"),(0,a.kt)("p",null,"Here we use ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/concurrent-mode-reference.html#suspenselist"},"\\",(0,a.kt)(u,{mdxType:"SuspenseList"}))," and ",(0,a.kt)("a",{parentName:"p",href:"../api/useresource"},"useResource()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const Posts = () => {\n  // useData gets the route context\n  const { friendId } = useData();\n  const posts = useResource(PostResource.list(), { userId: friendId });\n\n  // By using a SuspenseList here, we can guarantee that posts\n  // appear in the optimal viewing order, despite separately loading comments.\n  // Using "forwards" and "collapsed", we always see earlier loaded posts before later,\n  // but never later loaded posts before earlier. This avoids the page "popping"\n  // as it resizes with the comment section.\n  // Suspsense lets us "unlock" the title and body of the first post, but avoid\n  // showing other posts or having to wait for all the comments to load to display.\n\n  // I\'ve also chunked posts to appear two at a time inside a Suspense boundary.\n  // This is mostly to explore the possibilities of Suspense - displaying data\n  // exactly on our terms, rather than merely when the network returns.\n\n  // LOOK: Uncomment / recomment the Suspense boundaries in Posts and Post to\n  // see how boundaries at different layers can affect users.\n  // Remove the SuspenseList and see how much jankier it looks!\n\n  const chunkedPosts = chunk(posts, 2);\n\n  return (\n    <>\n      <div className="flex flex-wrap -mx-4">\n        <SuspenseList revealOrder="forwards" tail="collapsed">\n          {chunkedPosts.map(([post1, post2]: any) => (\n            <React.Fragment key={post1.id}>\n              {post1 && (\n                <div key={post1.id} className="w-1/2">\n                  <Post post={post1} />\n                </div>\n              )}\n              {post2 && (\n                <div key={post2.id} className="w-1/2">\n                  <Post post={post2} />\n                </div>\n              )}\n            </React.Fragment>\n          ))}\n        </SuspenseList>\n      </div>\n    </>\n  );\n};\n')),(0,a.kt)("h3",{id:"routing"},"Routing"),(0,a.kt)("p",null,"To make things easier, routing libraries could adopt two properties defined for each route -\nthe component information (either a path or function to load it) and a hook like\nthis that returns a function to call to preload."),(0,a.kt)("p",null,"In our example we're just scrapping together a very redimentary routing layer. This is\nnot very extensible but demonstrates incorporating preloading with ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/concurrent-mode-reference.html#usetransition"},"useTransition()")),(0,a.kt)("p",null,"To see all of this in context ",(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/concurrent-react-example-ly1ds"},"check out the demo"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  // where we store the route\n  const [friendId, setFriendId] = useState(1);\n  const [startTransition, isPending] = useTransition(SUSPENSE_CONFIG);\n  const preload = useFriendPreloader();\n\n  // effectively route change trigger\n  const changeFriend = useCallback(\n    friendId => {\n      // This becomes more meaningful when you start code splitting and load\n      // load with suspense as well. Then you don't have to wait on the code\n      // loading to start the data fetch.\n      preload(friendId);\n      // This delays commiting the React tree with new friendId until\n      // suspense is resolved.\n      startTransition(() => {\n        setFriendId(friendId);\n      });\n    },\n    [startTransition],\n  );\n\n  const context = {\n    friendId: friendId,\n    changeFriend: changeFriend,\n    isPending,\n  };\n\n  return (\n    <ErrorBoundary\n      FallbackComponent={props => {\n        console.error(props.error);\n        return <span>Error</span>;\n      }}\n    >\n      <DataContext.Provider value={context}>\n        <Suspense fallback={null}>\n          {/* Null fallback means less intermediate loading spinners */}\n          <Core />\n        </Suspense>\n      </DataContext.Provider>\n    </ErrorBoundary>\n  );\n}\n")))}h.isMDXComponent=!0}}]);