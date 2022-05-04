"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[9211],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1106:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="ApiRx Examples",c={unversionedId:"api/examples/rxjs/README",id:"api/examples/rxjs/README",title:"ApiRx Examples",description:"Here you will find a list of examples that takes you through the basics of connecting to a local node, retrieving data from the Node and chain and execute transactions on the chain. It uses the [[ApiRx]] interface.",source:"@site/docs/api/examples/rxjs/README.md",sourceDirName:"api/examples/rxjs",slug:"/api/examples/rxjs/",permalink:"/docs/api/examples/rxjs/",draft:!1,editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/examples/rxjs/README.md",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Running the examples",id:"running-the-examples",level:2},{value:"Development accounts",id:"development-accounts",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"apirx-examples"},"ApiRx Examples"),(0,o.kt)("p",null,"Here you will find a list of examples that takes you through the basics of connecting to a local node, retrieving data from the Node and chain and execute transactions on the chain. It uses the [","[ApiRx]","] interface."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"For the following examples, you need a local node. It is usually convenient testing with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"substrate --dev\n")),(0,o.kt)("h2",{id:"running-the-examples"},"Running the examples"),(0,o.kt)("p",null,"From each folder, run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," to install the required dependencies and then run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," to execute the example against the running node."),(0,o.kt)("h2",{id:"development-accounts"},"Development accounts"),(0,o.kt)("p",null,"Some of the examples use the following accounts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Alice: ",(0,o.kt)("inlineCode",{parentName:"li"},"5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ")),(0,o.kt)("li",{parentName:"ul"},"Bob: ",(0,o.kt)("inlineCode",{parentName:"li"},"5Gw3s7q4QLkSWwknsiPtjujPv3XM4Trxi5d4PgKMMk3gfGTE"))),(0,o.kt)("p",null,"Those accounts are easy to add if you don't have/see them. The seed of Alice's account is ",(0,o.kt)("inlineCode",{parentName:"p"},"Alice\u2423\u2423\u2423\u2423\u2423\u2423\u2423\u2423\u2423\u2423\u2423\u2423\u2423\u2423\u2423\u2423\u2423\u2423\u2423\u2423\u2423\u2423\u2423\u2423\u2423\u2423\u2423")," and the seed of Bob is... well you guess..."),(0,o.kt)("p",null,"NOTE: Note the spaces padding Alice's key up to 32 chars."))}f.isMDXComponent=!0}}]);