(this.webpackJsonptheme=this.webpackJsonptheme||[]).push([[79],{825:function(e,t,c){"use strict";c.r(t);var a=c(6),s=c(1),i=c(181),l=c(25),r=c(153),j=c(213),d=c(0);function m(e){return Object(d.jsx)("div",{className:"chat-conversation",children:Object(d.jsx)("ul",{className:"conversation-list",children:e.children.map((function(e,t){return e}))})})}function n(e){return Object(d.jsx)(s.Fragment,{children:e.me?Object(d.jsxs)("li",{className:"center-bottom j-right odd",children:[Object(d.jsx)("div",{className:"relative w-70",children:Object(d.jsxs)("div",{className:"conversation-text pt-2",children:[e.img&&Object(d.jsxs)("div",{className:"bg-light mb-2 radius-10 oh",children:[Object(d.jsx)("img",{src:"".concat(e.img||c(163).default),className:"w-100",alt:"me"}),e.imgTitle&&Object(d.jsx)("p",{className:"m-0 p-2 f-600 lh-12 text-10",children:" Lorem ipsum dolor sit amet. "})]}),e.product&&!0!==e.product&&Object(d.jsxs)("div",{className:"bg-light mb-2 radius-10 oh",children:[Object(d.jsx)(j.d,{img:e.product}),e.productTitle&&Object(d.jsx)("p",{className:"m-0 p-2 f-600 lh-12 text-10",children:" Lorem ipsum dolor sit amet. "})]}),Object(d.jsx)("div",{className:"ctext-wrap",children:Object(d.jsx)("p",{className:"m-0 lh-12 text-11",children:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, laborum. "})}),Object(d.jsx)("p",{className:"m-0 pt-1 lh-75 text-7 f-600 text-gray",children:"18 Mei 1992"})]})}),Object(d.jsx)("div",{className:"chat-avatar ".concat(!e.avatar&&"o-0"),children:Object(d.jsx)("img",{src:"".concat(e.avatar&&!0!==e.avatar?e.avatar:c(163).default),className:"border",alt:"me"})})]}):Object(d.jsxs)("li",{className:"center-bottom j-left",children:[Object(d.jsx)("div",{className:"chat-avatar ".concat(!e.avatar&&"o-0"),children:Object(d.jsx)("img",{src:"".concat(e.avatar&&!0!==e.avatar?e.avatar:c(163).default),className:"border",alt:"other"})}),Object(d.jsx)("div",{className:"relative w-70",children:Object(d.jsxs)("div",{className:"conversation-text pt-2",children:[e.img&&Object(d.jsxs)("div",{className:"bg-light mb-2 radius-10 oh",children:[Object(d.jsx)("img",{src:"".concat(e.img||c(51).default),className:"w-100",alt:"me"}),e.imgTitle&&Object(d.jsx)("p",{className:"m-0 p-2 f-600 lh-12 text-10",children:" Lorem ipsum dolor sit amet. "})]}),e.product&&!0!==e.product&&Object(d.jsxs)("div",{className:"bg-light mb-2 radius-10 oh",children:[Object(d.jsx)(j.d,{img:e.product}),e.productTitle&&Object(d.jsx)("p",{className:"m-0 p-2 f-600 lh-12 text-10",children:" Lorem ipsum dolor sit amet. "})]}),Object(d.jsx)("div",{className:"ctext-wrap",children:Object(d.jsx)("p",{className:"m-0 lh-12 text-11",children:" Lorem ipsum dolor sit amet. "})}),Object(d.jsx)("p",{className:"m-0 pt-1 lh-75 text-7 f-600 text-gray",children:"18 Mei 1992"})]})})]})})}t.default=function(){var e=Object(s.useRef)(),t=Object(s.useRef)(),j=Object(s.useState)(),o=Object(a.a)(j,2),b=o[0],x=o[1],h=Object(s.useState)(!1),u=Object(a.a)(h,2),O=u[0],p=u[1];return Object(s.useEffect)((function(){x(e.current.offsetHeight+5)}),[]),Object(d.jsxs)(s.Fragment,{children:[Object(d.jsx)(r.b,{fixed:!0,back:!0,ref:t,children:Object(d.jsxs)("div",{className:"row center m-0",children:[Object(d.jsx)("div",{className:"col text-14 bold lh-1 px-1",children:"Chat"}),Object(d.jsx)("div",{className:"col-auto",children:Object(d.jsx)("div",{className:"same-35 radius-50 bg-light center pointer",onClick:function(){return p(!O)},children:Object(d.jsx)("i",{className:"uil uil-ellipsis-v"})})})]})}),Object(d.jsxs)(m,{children:[Object(d.jsx)(n,{avatar:!0,img:c(138).default,imgTitle:!0}),Object(d.jsx)(n,{avatar:c(15).default,me:!0}),Object(d.jsx)(n,{avatar:!0,me:!0,product:c(138).default}),Object(d.jsx)(n,{avatar:c(102).default}),Object(d.jsx)(n,{me:!0}),Object(d.jsx)(n,{avatar:!0,me:!0})]}),Object(d.jsx)("div",{style:{paddingTop:b}}),Object(d.jsx)(r.a,{ref:e,children:Object(d.jsx)("div",{className:"row center py-2 m-0",children:Object(d.jsxs)("div",{className:"col text-center relative",children:[Object(d.jsx)("div",{className:"absolute-center-v l-4",children:Object(d.jsx)("div",{className:"same-40 radius-50 bg-light center pointer",children:Object(d.jsx)("i",{className:"uil uil-camera text-dark text-12"})})}),Object(d.jsx)(l.f,{name:"typing",rows:"1",noResize:!0,rowClass:"w-100",className:"text-dark f-600 radius-50 px-5 text-12 py-3",placeholder:"Tulis Pesan..."}),Object(d.jsx)("div",{className:"absolute-center-v r-4",children:Object(d.jsx)("div",{className:"same-40 radius-50 bg-light center pointer",children:Object(d.jsx)("i",{className:"uil uil-navigator text-dark text-12"})})})]})})}),Object(d.jsx)(i.a,{onSwipeChange:function(e){return p(e)},open:O,overlay:!1,height:"25vh",children:Object(d.jsx)("div",{className:"p-2",children:"TEST"})})]})}}}]);