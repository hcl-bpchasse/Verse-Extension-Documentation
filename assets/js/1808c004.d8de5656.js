"use strict";(self.webpackChunkverse_developer=self.webpackChunkverse_developer||[]).push([[113],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8873:function(e,t,n){n.d(t,{A:function(){return i}});var r=n(7294),a=n(4996),i=function(e){var t=e.path,n=r.useState(!1),i=n[0],o=n[1],s=r.useState({}),p=s[0],l=s[1],c=r.useRef(null),m=function(e){e.preventDefault(),o(!i)},d=function(e){i&&(e.preventDefault(),o(!1))};return r.useEffect((function(){return document.body.addEventListener("keydown",d),function(){document.body.removeEventListener("keydown",d)}}),[]),r.useEffect((function(){var e=document.getElementsByClassName("navbar")[0];i&&c.current?(document.body.setAttribute("style","overflow:hidden;"),l({top:e.offsetTop})):(document.body.removeAttribute("style"),c.current.focus(),l({}))}),[i]),r.createElement("div",{onKeyPress:m,onClick:m,className:i?"expandable-container expanded":"expandable-container",ref:c,style:p},r.createElement("img",{tabIndex:"0",className:i?"image image-expanded":"image",src:(0,a.Z)(t)}))}},8853:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(8873),s=["components"],p={id:"custom-name-picker",title:"Custom Name Picker"},l=void 0,c={unversionedId:"custom-name-picker",id:"custom-name-picker",title:"Custom Name Picker",description:"In this tutorial you will learn how to use the Name Picker extension type.",source:"@site/docs/custom-name-picker.md",sourceDirName:".",slug:"/custom-name-picker",permalink:"/Verse-Extension-Documentation/docs/custom-name-picker",tags:[],version:"current",frontMatter:{id:"custom-name-picker",title:"Custom Name Picker"},sidebar:"tutorials_examples",previous:{title:"Your First Application",permalink:"/Verse-Extension-Documentation/docs/your-first-application"},next:{title:"Hook Before Send",permalink:"/Verse-Extension-Documentation/docs/hook-before-send"}},m={},d=[{value:"Add the Extension",id:"add-the-extension",level:2},{value:"Extension Properties",id:"extension-properties",level:4},{value:"Test it Out",id:"test-it-out",level:2},{value:"How it Works",id:"how-it-works",level:2}],u={toc:d};function k(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this tutorial you will learn how to use the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"../extension-points#alternative-name-picker"},"Name Picker"))," extension type. "),(0,i.kt)("h2",{id:"add-the-extension"},"Add the Extension"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'[\n  {\n    "name": "Custom Name Picker",\n    "title": "Custom Name Picker",\n    "description": "Sample that shows how to add a custom name picker in mail compose view",\n    "extensions": [\n      {\n        "type": "com.ibm.verse.ext.namePicker",\n        "name": "Custom name picker in mail compose",\n        "payload": {\n          "url": "${extensionPath}/custom-name-picker/index.html"\n        }\n      }\n    ],\n    "services": [\n      "Verse"\n    ]\n  }\n]\n')),(0,i.kt)("h4",{id:"extension-properties"},"Extension Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"the name of the extension")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"the extension point  (",(0,i.kt)("a",{parentName:"td",href:"../extension-points"},"List of Extension Points"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"payload"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"object")),(0,i.kt)("td",{parentName:"tr",align:null},"JSON object that specifies properties specific to the extension")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"url"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"The fully-qualified URL of your application")))),(0,i.kt)("h2",{id:"test-it-out"},"Test it Out"),(0,i.kt)(o.A,{path:"samples/custom-name-picker.gif",mdxType:"Expandable"}),(0,i.kt)("h2",{id:"how-it-works"},"How it Works"),(0,i.kt)("p",null,"This extension turns the ",(0,i.kt)("inlineCode",{parentName:"p"},"To")," field, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Mail Compose")," view into a link. Selecting the ",(0,i.kt)("inlineCode",{parentName:"p"},"To")," field opens an embedded web application specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," property. In this example, the web application is ",(0,i.kt)("inlineCode",{parentName:"p"},"custom-name-picker/index.html")," which renders a list of sample users that are defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"custom-name-picker/ui.js"),". "),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"To")," link is selected, ",(0,i.kt)("inlineCode",{parentName:"p"},"Verse")," sends a message to the web application with the verseApiType ",(0,i.kt)("inlineCode",{parentName:"p"},"com.ibm.verse.ping.application.loaded"),". When the application has loaded, it solidifies the ",(0,i.kt)("em",{parentName:"p"},"handshake")," by sending back a message with verseApiType ",(0,i.kt)("inlineCode",{parentName:"p"},"com.ibm.verse.application.loaded"),". Now that Verse knows the application is ready to receive data, the extension recieves a new message from Verse with the verseApiType ",(0,i.kt)("inlineCode",{parentName:"p"},"com.ibm.verse.action.clicked"),". It is also good practice to verify the ",(0,i.kt)("inlineCode",{parentName:"p"},"actionId")," which, for the Name Picker extension, is ",(0,i.kt)("inlineCode",{parentName:"p"},"com.ibm.verse.ext.action.namePicker"),"."),(0,i.kt)("p",null,"Each sample user in the custom name picker has an ",(0,i.kt)("inlineCode",{parentName:"p"},"Add")," button that posts a message back to Verse with the verseApiType ",(0,i.kt)("inlineCode",{parentName:"p"},"com.ibm.verse.add.contact")," and the data of the selected user. Verse uses that data to add the user's name to the ",(0,i.kt)("inlineCode",{parentName:"p"},"To")," field. "),(0,i.kt)("p",null,"The custom name picker application in this tutorial only supports adding single users at a time to the ",(0,i.kt)("inlineCode",{parentName:"p"},"To")," field. Please reference the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"../extension-points#alternative-name-picker"},"Name Picker"))," extension point for information on adding multiple users at a time and how to add users to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Cc")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Bcc")," fields."))}k.isMDXComponent=!0}}]);