"use strict";(self.webpackChunksheltertech_org=self.webpackChunksheltertech_org||[]).push([[4125],{"./src/components/block/YouTubeEmbed/YouTubeEmbed.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>YouTubeEmbed_stories});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),YouTubeEmbed_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[11].use[2]!./src/components/block/YouTubeEmbed/YouTubeEmbed.module.css"),options={insert:"head",singleton:!1},YouTubeEmbed=(injectStylesIntoStyleTag_default()(YouTubeEmbed_module.ZP,options),function YouTubeEmbed(_ref){var url=_ref.url,title=_ref.title;return react.createElement("div",{className:YouTubeEmbed_module.YS},react.createElement("iframe",{className:YouTubeEmbed_module.V,title,src:url,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))});const YouTubeEmbed_YouTubeEmbed=YouTubeEmbed;try{YouTubeEmbed.displayName="YouTubeEmbed",YouTubeEmbed.__docgenInfo={description:"",displayName:"YouTubeEmbed",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/block/YouTubeEmbed/YouTubeEmbed.tsx#YouTubeEmbed"]={docgenInfo:YouTubeEmbed.__docgenInfo,name:"YouTubeEmbed",path:"src/components/block/YouTubeEmbed/YouTubeEmbed.tsx#YouTubeEmbed"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const YouTubeEmbed_stories={title:"Block/YouTubeEmbed",component:YouTubeEmbed_YouTubeEmbed};var Default=function Template(_ref){var url=_ref.url,title=_ref.title;return react.createElement("div",{style:{maxWidth:"800px"}},react.createElement(YouTubeEmbed_YouTubeEmbed,{url,title}))}.bind({});Default.args={url:"https://www.youtube.com/embed/2aLyGwaRufY",title:"My Video"},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'({\n  url,\n  title\n}) => <div style={{\n  maxWidth: "800px"\n}}>\n    <YouTubeEmbed url={url} title={title} />\n  </div>'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});var __namedExportsOrder=["Default"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[11].use[2]!./src/components/block/YouTubeEmbed/YouTubeEmbed.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>iframe,YS:()=>wrapper,ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/cssWithMappingToString.js"),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/* Uses a trick to allow iframes to be more responsive while preserving aspect\n * ratio.\n *\n * https://fettblog.eu/blog/2013/06/16/preserving-aspect-ratio-for-embedded-iframes/\n */\n\n.YouTubeEmbed-module--wrapper--fH94W {\n  height: 0;\n  padding-bottom: 56.25%; /* 9/16, for a 16:9 aspect ratio */\n  position: relative;\n  width: 100%;\n}\n\n.YouTubeEmbed-module--iframe--9p2bX {\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n","",{version:3,sources:["webpack://./src/components/block/YouTubeEmbed/YouTubeEmbed.module.css"],names:[],mappings:"AAAA;;;;EAIE;;AAEF;EACE,SAAS;EACT,sBAAsB,EAAE,kCAAkC;EAC1D,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,OAAO;EACP,kBAAkB;EAClB,MAAM;EACN,WAAW;AACb",sourcesContent:["/* Uses a trick to allow iframes to be more responsive while preserving aspect\n * ratio.\n *\n * https://fettblog.eu/blog/2013/06/16/preserving-aspect-ratio-for-embedded-iframes/\n */\n\n.wrapper {\n  height: 0;\n  padding-bottom: 56.25%; /* 9/16, for a 16:9 aspect ratio */\n  position: relative;\n  width: 100%;\n}\n\n.iframe {\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n"],sourceRoot:""}]);var wrapper="YouTubeEmbed-module--wrapper--fH94W",iframe="YouTubeEmbed-module--iframe--9p2bX";const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);