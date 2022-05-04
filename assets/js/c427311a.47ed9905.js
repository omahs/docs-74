"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[36],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9451:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={title:"Type basics"},s=void 0,p={unversionedId:"api/start/types.basics",id:"api/start/types.basics",title:"Type basics",description:"We've touched upon types in most previous sections, i.e. that these are driven by metadata and that they are created and converted to/from automatically by the API. Since they appear in all results, we will divert a bit from the regularly scheduled program in explaining the API interfaces to giving some info on the base types.",source:"@site/docs/api/start/types.basics.md",sourceDirName:"api/start",slug:"/api/start/types.basics",permalink:"/docs/api/start/types.basics",draft:!1,editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/start/types.basics.md",tags:[],version:"current",frontMatter:{title:"Type basics"},sidebar:"reference",previous:{title:"Complex transactions",permalink:"/docs/api/start/api.tx.wrap"},next:{title:"Extending types",permalink:"/docs/api/start/types.extend"}},d={},u=[{value:"Everything is a type",id:"everything-is-a-type",level:2},{value:"Comparing types",id:"comparing-types",level:2},{value:"Working with numbers",id:"working-with-numbers",level:2},{value:"Working with structures",id:"working-with-structures",level:2},{value:"Working with enums",id:"working-with-enums",level:2},{value:"Working with Option&lt;Type&gt;",id:"working-with-optiontype",level:2},{value:"Working with Tuples",id:"working-with-tuples",level:2},{value:"Boolean values",id:"boolean-values",level:2},{value:"Extending types",id:"extending-types",level:2}],m={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We've touched upon types in most previous sections, i.e. that these are driven by metadata and that they are created and converted to/from automatically by the API. Since they appear in all results, we will divert a bit from the regularly scheduled program in explaining the API interfaces to giving some info on the base types."),(0,r.kt)("h2",{id:"everything-is-a-type"},"Everything is a type"),(0,r.kt)("p",null,"Just to re-iterate from the above. Everything returned by the API is a type and has a consistent interface: ",(0,r.kt)("inlineCode",{parentName:"p"},"Codec"),". This means that a ",(0,r.kt)("inlineCode",{parentName:"p"},"Vec<u32>")," (an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"u32")," values) as well as a ",(0,r.kt)("inlineCode",{parentName:"p"},"Struct")," (an pre-defined object) or an ",(0,r.kt)("inlineCode",{parentName:"p"},"Enum")," has the same consistent base interface. Specific types will have values, based on the type - decorated and available."),(0,r.kt)("p",null,"As a minimum, anything returned by the API, be it a ",(0,r.kt)("inlineCode",{parentName:"p"},"Vec<...>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Option<...>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Struct")," or any normal type will always have the following methods - as defined on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Codec")," interface:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".eq(<other value>)"),' - checks for equality against the other value. In all cases, it will accept "like" values, i.e. in the case of a number you can pass a primitive (such as ',(0,r.kt)("inlineCode",{parentName:"li"},"1"),"), a hex value (such as ",(0,r.kt)("inlineCode",{parentName:"li"},"0x01"),") or even an ",(0,r.kt)("inlineCode",{parentName:"li"},"Unit8Array")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"toHex()")," - returns a hex-base representation of the value, always prefixed by ",(0,r.kt)("inlineCode",{parentName:"li"},"0x")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"toHuman()")," - returns Human-parsable JSON structure with values formatted as per the settings"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"toJSON()")," - returns a JSON-like representation of the value, this is generally used when calling ",(0,r.kt)("inlineCode",{parentName:"li"},"JSON.stringify(...)")," on the value"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"toString()")," - returns a string representation, in some cases this performs additional encoding, i.e. for ",(0,r.kt)("inlineCode",{parentName:"li"},"Address"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"AccountId")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"AccountIndex")," it will encode to the ss58 address"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".toU8a()")," - returns a ",(0,r.kt)("inlineCode",{parentName:"li"},"Uint8Array")," representation of the encoded value (generally exactly as passed to the node, where values are SCALE encoded)")),(0,r.kt)("p",null,"Additionally, the following getters and utilities are available -"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".isEmpty")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," if the value is an all-empty value, i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," in for numbers, all-zero for Arrays (or anything ",(0,r.kt)("inlineCode",{parentName:"li"},"Uint8Array"),"), ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," is non-zero"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".hash")," - a ",(0,r.kt)("inlineCode",{parentName:"li"},"Hash")," (once again with all the methods above) that is a ",(0,r.kt)("inlineCode",{parentName:"li"},"blake2-256")," representation of the contained value")),(0,r.kt)("h2",{id:"comparing-types"},"Comparing types"),(0,r.kt)("p",null,"To reiterate the above API, the ",(0,r.kt)("inlineCode",{parentName:"p"},".eq")," method is the preferred means of comparing base types, rather than the JavaScript equality operator (",(0,r.kt)("inlineCode",{parentName:"p"},"==="),")."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { metadata } = await api.rpc.state.getMetadata();\nconst modules = metadata.asLatest.modules;\n\n// This will not work, because `name` is an instance of `Text`, not a string\n// const system = modules.find(m => m.name === 'system');\n\n// This will work, because `Text.eq()` can compare against a string\nconst system = modules.find(m => m.name.eq('system'));\n")),(0,r.kt)("h2",{id:"working-with-numbers"},"Working with numbers"),(0,r.kt)("p",null,"All numbers wrap and extend an instance of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/indutny/bn.js/"},"bn.js"),". This means that in addition to the interfaces defined above, they have some additional methods -"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".toNumber()")," - a JS number (limited to 2^53 - 1). This does mean that for large values, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"Balance")," (a ",(0,r.kt)("inlineCode",{parentName:"li"},"u128")," extension), this can cause overflows"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".toBigInt()")," - a JS ",(0,r.kt)("inlineCode",{parentName:"li"},"BigInt")," object (on supported platforms)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".add(...)"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".sub(...)"),", ... - all the base methods available on the ",(0,r.kt)("inlineCode",{parentName:"li"},"BN")," object")),(0,r.kt)("p",null,"In cases where a ",(0,r.kt)("inlineCode",{parentName:"p"},"Compact")," is returned, i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"Compact<Balance>"),", the value is wrapped. This object should be ",(0,r.kt)("inlineCode",{parentName:"p"},".unwrap()"),"-ed first to gain access to the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"Balance")," object."),(0,r.kt)("h2",{id:"working-with-structures"},"Working with structures"),(0,r.kt)("p",null,"All structures, a wrapping of an object containing a number of member variables, is an implementation of a standard JS ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," object, so all the functions available on a ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," such as ",(0,r.kt)("inlineCode",{parentName:"p"},".entries()")," are available. Additionally it is decorated with actual getters for the fields."),(0,r.kt)("p",null,"As an example, a ",(0,r.kt)("inlineCode",{parentName:"p"},"Header")," will have getters for the ",(0,r.kt)("inlineCode",{parentName:"p"},".parentHash"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".stateRoot"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".extrinsicsRoot")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".digest")," fields. The same applies for all structures, as they are returned, each member will have an associated getter."),(0,r.kt)("p",null,"Be aware that in the JS version naming defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"camelCase")," where names of fields in Substrate defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"snake_case"),". (Each version aligning with conventions in the respective languages)"),(0,r.kt)("h2",{id:"working-with-enums"},"Working with enums"),(0,r.kt)("p",null,"Each enum has additional getters which are injected based on the fields wrapped. These take the form of ",(0,r.kt)("inlineCode",{parentName:"p"},".is<Name>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".as<Name>")," to allow you to check if the enum is a certain value or to retrieve the underlying value as a specific type."),(0,r.kt)("p",null,"As a real-world example, when an extrinsic is applied, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Phase")," enum has one of two states, ",(0,r.kt)("inlineCode",{parentName:"p"},"ApplyExtrinsic(u32)")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Finalization"),". In this case ",(0,r.kt)("inlineCode",{parentName:"p"},".isApplyExtrinsic")," would be ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," when an extrinsic is being applied, and ",(0,r.kt)("inlineCode",{parentName:"p"},".asApplyExtrinsic")," would return the value as a ",(0,r.kt)("inlineCode",{parentName:"p"},"u32")," (which is the index of the extrinsic in the block, as it is being applied). When ",(0,r.kt)("inlineCode",{parentName:"p"},"isApplyExtrinsic")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"asApplyExtrinsic")," is called, the getter will throw."),(0,r.kt)("h2",{id:"working-with-optiontype"},"Working with Option","<","Type",">"),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"Option<Type>")," attempts to mimic the Rust approach of having ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Some")," available. This means the following getters & methods are available on an ",(0,r.kt)("inlineCode",{parentName:"p"},"Option")," -"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".isNone")," - is ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," if no underlying values is wrapped, effectively the same as ",(0,r.kt)("inlineCode",{parentName:"li"},".isEmpty")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".isSome")," - this is ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," if a value is wrapped, i.e. if a ",(0,r.kt)("inlineCode",{parentName:"li"},"Option<u32>")," has an actual underlying ",(0,r.kt)("inlineCode",{parentName:"li"},"u32")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".unwrap()")," - when ",(0,r.kt)("inlineCode",{parentName:"li"},"isSome"),", this will return the wrapped value, i.e. for ",(0,r.kt)("inlineCode",{parentName:"li"},"Option<u32>"),", this would return the ",(0,r.kt)("inlineCode",{parentName:"li"},"u32"),". When the value is ",(0,r.kt)("inlineCode",{parentName:"li"},"isNone"),", this call will throw an exception."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".unwrapOr(<default value>)")," - this extends ",(0,r.kt)("inlineCode",{parentName:"li"},"unwrap()"),", returning the wrapped value when ",(0,r.kt)("inlineCode",{parentName:"li"},"isSome")," and in the case of ",(0,r.kt)("inlineCode",{parentName:"li"},"isNone")," it will return the ",(0,r.kt)("inlineCode",{parentName:"li"},"<default value>")," passed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".unwrapOrDefault()")," - returns either the wrapped value when ",(0,r.kt)("inlineCode",{parentName:"li"},"isSome"),", or the default for the type when ",(0,r.kt)("inlineCode",{parentName:"li"},"isNone"))),(0,r.kt)("h2",{id:"working-with-tuples"},"Working with Tuples"),(0,r.kt)("p",null,"A tuple is defined in the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"(u32, AccountId)"),". To access the individual values, you can access it via its index, i.e."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Assuming a tuple defined as `(32, AccountId)`\nconst [count, accountId] = tuple;\n\nconsole.log(`${accountId} has ${count.toNumber()} values`);\n")),(0,r.kt)("p",null,"When making a call that expect a ",(0,r.kt)("inlineCode",{parentName:"p"},"Tuple")," input, pass it as an array, so to pass the example above into a call, it would be ",(0,r.kt)("inlineCode",{parentName:"p"},".call([123, '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'])")),(0,r.kt)("h2",{id:"boolean-values"},"Boolean values"),(0,r.kt)("p",null,"All ",(0,r.kt)("inlineCode",{parentName:"p"},"bool")," values are returned as nomal JS ",(0,r.kt)("inlineCode",{parentName:"p"},"Boolean")," objects, i.e. they extend the ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3schools.com/jsref/jsref_obj_boolean.asp"},"JS Boolean")," to allow it to be used as a ",(0,r.kt)("inlineCode",{parentName:"p"},"Codec")," type. "),(0,r.kt)("p",null,"In addition to the default ",(0,r.kt)("inlineCode",{parentName:"p"},"getValue()")," on the JS Boolean and the default interfaces explained above, two additional getters have been added for ease-of-use. These are ",(0,r.kt)("inlineCode",{parentName:"p"},"isTrue")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"isFalse")," that will just return a normal JS primitive ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," for a quick check without using ",(0,r.kt)("inlineCode",{parentName:"p"},"getValue()"),"."),(0,r.kt)("h2",{id:"extending-types"},"Extending types"),(0,r.kt)("p",null,"For customized chains, the need exists to register types so the API is aware of how to decode values for those types. The next section will provide a ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/start/types.extend"},"walk-through for the definition of custom types")," allowing the definition or re-definition of any type the API is aware of."))}c.isMDXComponent=!0}}]);