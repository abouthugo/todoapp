(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2500)}])},2500:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var r=n(5893),o=n(7294),a=n(9008);function i(e){switch(e){case 1:return"red";case 2:return"orange";case 3:return"indigo";default:return"neutral"}}var s,c=n(2861),l=n.n(c),d=new Uint8Array(16);function u(){if(!s&&!(s="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(d)}var h=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var m=function(e){return"string"===typeof e&&h.test(e)},x=[],f=0;f<256;++f)x.push((f+256).toString(16).substr(1));var p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(x[e[t+0]]+x[e[t+1]]+x[e[t+2]]+x[e[t+3]]+"-"+x[e[t+4]]+x[e[t+5]]+"-"+x[e[t+6]]+x[e[t+7]]+"-"+x[e[t+8]]+x[e[t+9]]+"-"+x[e[t+10]]+x[e[t+11]]+x[e[t+12]]+x[e[t+13]]+x[e[t+14]]+x[e[t+15]]).toLowerCase();if(!m(n))throw TypeError("Stringified UUID is invalid");return n};var b=function(e,t,n){var r=(e=e||{}).random||(e.rng||u)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return p(r)},v=function(e){var t=e.isActive,n=e.priority,a=e.onClick,s=(0,o.useRef)(null);(0,o.useEffect)((function(){var e=function(e){s.current&&!s.current.contains(e.target)&&t&&a()};return document.addEventListener("click",e,!0),function(){document.removeEventListener("click",e,!0)}}));var c=i(n),l="stroke-".concat(c,"-500"),d="neutral"===c?"":"fill-".concat(c,"-500"),u=t?"bg-slate-100":"";return(0,r.jsx)("div",{role:"button",onClick:a,ref:s,children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"-3 -3 30 30",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"cursor-pointer rounded-sm ".concat(l," ").concat(u," ").concat(d," hover:stroke-").concat(c,"-500 hover:bg-slate-100"),children:[(0,r.jsx)("path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}),(0,r.jsx)("line",{x1:"4",y1:"22",x2:"4",y2:"15"})]})})},g=function(e){var t=e.handleOnClick,n=e.active,o=function(e){var t=e.color;return(0,r.jsx)("div",{children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"-3 -3 30 30",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"neutral"===t?"stroke-".concat(t,"-500"):"stroke-".concat(t,"-500 fill-").concat(t,"-500"),children:[(0,r.jsx)("path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}),(0,r.jsx)("line",{x1:"4",y1:"22",x2:"4",y2:"15"})]})})};return(0,r.jsx)("div",{className:"-z-1 absolute -top-3 -right-6 w-52 border-2 border-neutral-200 bg-white rounded-md shadow-lg mt-10 border-box max-w-52 ".concat(!n&&"hidden"),children:(0,r.jsx)("ul",{children:new Array(4).fill(1).map((function(e,n){return(0,r.jsxs)("li",{role:"button",className:"flex p-1 hover:bg-neutral-100 cursor-pointer",onClick:function(){return t(n+1)},children:[(0,r.jsx)(o,{color:i(n+1)}),(0,r.jsxs)("p",{className:"pl-2 text-sm",children:["Priority ",n+1]})]},"priority-control=".concat(n+1))}))})})};function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){j(e,t,n[t])}))}return e}function y(){return{id:b(),name:"",priority:4,completed:!1}}var k=function(e){var t=e.handleOnSubmit,n=e.initialTask,a=e.buttonLabel,i=e.handleOnCancel,s=(0,o.useRef)(null),c=(0,o.useState)(n||y()),l=c[0],d=c[1],u=function(){d(y())},h=function(){t(l),u(),"Add Task"===a&&s.current.focus()},m=function(e){"Enter"===e.key&&l.name.length?h():"Escape"===e.key&&(u(),i())},x=(0,o.useState)(!1),f=x[0],p=x[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex flex-col w-full border-neutral-200 border-2 rounded-md py-2 px-3 focus-within:border-neutral-400",children:[(0,r.jsx)("input",{type:"text",name:"task-name",placeholder:"Task name",className:"font-medium my-2 outline-none",onChange:function(e){d(w({},l,{name:e.target.value}))},value:l.name,ref:s,onKeyDown:m,autoFocus:!0}),(0,r.jsx)("textarea",{name:"task-description",placeholder:"Description",className:"placeholder-normal outline-none",onChange:function(e){d(w({},l,{description:e.target.value}))},value:l.description||"",onKeyDown:m,rows:3}),(0,r.jsxs)("div",{className:"relative flex justify-end",children:[(0,r.jsx)(v,{isActive:f,onClick:function(){p(!f)},priority:l.priority}),(0,r.jsx)(g,{handleOnClick:function(e){d(w({},l,{priority:e}))},active:f})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{role:"button",className:"w-auto self-start rounded-md px-3 font-medium py-1 mt-2 mr-4 bg-neutral-800 text-white disabled:cursor-not-allowed disabled:bg-neutral-400",onClick:h,disabled:!l.name.length,children:a}),(0,r.jsx)("button",{role:"button",className:"w-auto self-start border-neutral-300 border-2 rounded-md px-3 font-medium py-1 mt-2 hover:bg-neutral-100",onClick:i,children:"Cancel"})]})]})},_=n(7793),N=function(e){var t=e.onClick;return(0,r.jsx)("div",{className:"hover:bg-slate-100 rounded-sm",role:"button",onClick:t,children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"-3 -3 30 30",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"cursor-pointer stroke-neutral-300 hover:stroke-neutral-500",children:[(0,r.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,r.jsx)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})})},C=function(e){var t=e.todo,n=e.onTaskChange,a=(0,_.D)(),s=a.editNode,c=a.setEditNode,d=(0,o.useState)(!1),u=d[0],h=d[1],m=function(){c(null),h(!1)};return u&&s===t.id?(0,r.jsx)(k,{handleOnSubmit:function(e){n(e),m()},handleOnCancel:m,buttonLabel:"Save",initialTask:t}):(0,r.jsx)("li",{className:l()["card-trigger"],children:(0,r.jsxs)("div",{className:"p-5 flex flex-row space-x-2 relative",children:[(0,r.jsx)("div",{role:"button",children:(0,r.jsx)("button",{role:"button",className:"align-middle",children:(0,r.jsx)("div",{className:"w-5 h-5 ".concat(function(){var e=i(t.priority);return"border-".concat(e,"-600 bg-").concat(e,"-50")}(),"  rounded-full border-2")})})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:t.name}),t.description&&(0,r.jsx)("p",{className:"text-sm text-neutral-400",children:t.description})]}),(0,r.jsx)("div",{className:l()["hover-target"],children:(0,r.jsx)(N,{onClick:function(){c(t.id),h(!0)}})})]})},t.id)},O=function(e){var t=e.todos,n=e.onTaskChange;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("ul",{className:"max-w-2x w-full grid gap-y-4 mx-auto mb-6",children:t.map((function(e){return(0,r.jsx)(C,{todo:e,onTaskChange:n},"TodoItemList")}))})})};function T(){return(0,r.jsxs)("div",{className:"flex justify-center flex-col mt-10",children:[(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",width:"150",height:"150",viewBox:"0 0 250.57245 402.57036",className:"m-auto",children:[(0,r.jsx)("path",{d:"M517.883,473.53046a101.57092,101.57092,0,0,1,14.8558-148.44374,183.149,183.149,0,0,0,61.89328-84.41463C594.63117,329.08156,563.27172,417.17537,517.883,473.53046Z",transform:"translate(-462.42755 -212.99041)",fill:"#e5e7eb"}),(0,r.jsx)("path",{d:"M645.01649,295.2618c-4.12169-15.79943-9.20291-31.58717-17.0642-45.95439-6.5218-10.73238-14.81156-20.70665-24.90338-28.24681-.68793-.47982-1.40261-.92155-2.12024-1.35376a44.19752,44.19752,0,0,1,4.96288,5.33649c10.0076,13.11117,16.55185,25.667,20.39719,40.983,6.90664,26.278,9.9057,45.41177,8.70644,73.07108q-.09573,3.61835-.29007,7.16813c-33.799,8.45911-62.38858,28.99323-85.1546,54.9577,27.32809-18.99934,55.06209-37.6813,84.64248-53.0272q.19824-.10151.39661-.20324c-2.18,35.62918-11.797,66.50914-30.7699,98.413-17.48088,29.4056-46.2499,57.65161-73.443,50.10465a210.19055,210.19055,0,0,1,1.33675-34.81339c1.79221-19.3157,8.50071-50.91228,18.39994-74.38233,6.9437-17.87954,12.83675-29.82715,23.51993-52.14147,10.4618-21.94343,20.54477-44.08057,31.87088-65.59961,3.84557-6.51387-4.559,5.29954-5.94881,6.97839-15.87571,21.49013-29.86116,44.30183-43.2386,67.40848A278.6233,278.6233,0,0,0,536.002,385.99671a147.84748,147.84748,0,0,0-15.05436-11.60858c-10.31625-6.1151-21.53354-10.68205-32.84537-14.60345-.54069-.174-1.084-.34346-1.62433-.51439,5.52068,4.00925,11.01133,8.06736,16.727,11.79776,10.28973,6.47908,20.713,12.81374,31.453,18.53687a292.18727,292.18727,0,0,0-18.026,100.56908c-10.73679-6.92511-20.69826-17.76766-27.09017-28.23445-12.57467-22.11685-16.27923-60.00275-10.83008-85.52277,4.23086-20.22773,9.532-31.48719,17.99063-48.16588,13.783-26.4342,27.10909-43.5366,46.19016-64.34855,10.74348-11.423,21.88879-22.56346,34.14575-32.36975,6.38839-4.91538,18.69091-12.93468,27.47045-18.54219-10.40138,4.49462-20.94763,8.76288-30.82227,14.35589-11.349,6.56737-21.76829,14.606-31.92019,22.87143-22.73871,18.72628-42.24224,41.46464-55.518,67.8594-14.82494,27.135-25.29819,57.5395-23.65006,88.81076,1.675,42.1766,13.28642,74.43311,50.62993,97.37766,1.51381.82192,3.02128,1.559,4.52319,2.22827,5.06081,41.28691,21.72148,81.5032,53.78257,109.067-20.44718-26.04937-31.37214-52.94944-37.08971-85.2548-1.21887-6.6075-2.22011-13.1148-2.95123-19.6756,43.89128,6.997,80.777-45.976,96.93208-82.60056,9.50908-20.93041,16.463-43.05384,18.87227-65.97776C650.08932,339.88294,650.03446,317.11262,645.01649,295.2618Z",transform:"translate(-462.42755 -212.99041)"}),(0,r.jsx)("circle",{cx:"29.57245",cy:"33.00959",r:"9"}),(0,r.jsx)("circle",{cx:"242.57245",cy:"153.00959",r:"8"}),(0,r.jsx)("circle",{cx:"137.57245",cy:"327.00959",r:"8"})]}),(0,r.jsx)("p",{className:"text-center text-neutral-500 mt-4",children:"All Clear"})]})}var S=n(214),L=n.n(S),E=function(e){var t=e.handleNewTask,n="adding-task",a=(0,_.D)(),i=a.editNode,s=a.setEditNode,c=(0,o.useState)(!1),l=c[0],d=c[1];return l&&i===n?(0,r.jsx)(k,{handleOnSubmit:t,handleOnCancel:function(){s(null),d(!1)},buttonLabel:"Add Task"}):(0,r.jsxs)("div",{className:"hover:cursor-pointer text-neutral-400 hover:text-neutral-600",role:"button",onClick:function(){s(n),d(!0)},children:[" ","+ Add Task"]},"add-task")};function A(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function H(){var e=(0,o.useState)(!1),t=e[0],n=e[1],i=(0,o.useState)([]),s=i[0],c=i[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:L().container,children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:"Todo App"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"favicon-new.ico"})]}),(0,r.jsxs)("nav",{className:"bg-neutral-800 py-2 px-6 text-white flex justify-between",children:[(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsxs)("button",{type:"button",className:"w-9 h-7 hover:cursor-pointer hover:bg-neutral-700 box-border grid justify-center items-center py-1",onClick:function(){n(!t)},children:[(0,r.jsx)("div",{className:"w-5 h-px bg-white"}),(0,r.jsx)("div",{className:"w-5 h-px bg-white"}),(0,r.jsx)("div",{className:"w-5 h-px bg-white"})]}),(0,r.jsx)("input",{type:"text",placeholder:"Search",className:"text-black box-border px-2 ml-2 rounded-sm transition-colors duration-200 bg-neutral-600 placeholder-white hover:bg-white hover:placeholder-black"})]}),(0,r.jsx)("span",{children:(0,r.jsx)("button",{type:"button",className:"hover:bg-neutral-700 text-lg px-3 hover:cursor-pointer h-7 box-border",children:"+"})})]}),(0,r.jsxs)("div",{className:L().content,children:[(0,r.jsx)("aside",{className:"bg-neutral-50 text-zinc-500 w-64 pl-6 transition-transform ease-in-out duration-200 ".concat(t?"":"-ml-64"),children:"Sidebar"}),(0,r.jsxs)("main",{className:L().main,children:[(0,r.jsx)("h1",{className:"border-b-2 mb-6",children:"Inbox"}),(0,r.jsx)(O,{todos:s,onTaskChange:function(e){c(s.map((function(t){return t.id===e.id?e:t})))}}),(0,r.jsx)(E,{handleNewTask:function(e){c(A(s).concat([e]))}}),!s.length&&(0,r.jsx)(T,{})]})]})]}),(0,r.jsx)("footer",{className:L().footer,children:(0,r.jsx)("p",{children:"Created by Hugo Perdomo"})})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",content:"Home_content__Zy02X",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},2861:function(e){e.exports={"card-trigger":"TodoItem_card-trigger__QXMb6","hover-target":"TodoItem_hover-target__25F2e"}},9008:function(e,t,n){e.exports=n(5443)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);