(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var s,c=n(5),l=n.n(c),a=n(3),o=n(1),i=n(2),r=n.n(i),u=(n(10),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),b=["button","is-info","is-small","box","is-$white-ter"],j=n(0);!function(t){t.alfabetically="alfabetically",t.length="length",t.nosort=""}(s||(s={}));var h=function(){var t=Object(o.useState)(!1),e=Object(a.a)(t,2),n=e[0],c=e[1],l=Object(o.useState)(1),i=Object(a.a)(l,2),h=i[0],d=i[1],f=Object(o.useState)(!1),m=Object(a.a)(f,2),p=m[0],O=m[1],g=Object(o.useState)(s.nosort),x=Object(a.a)(g,2),y=x[0],N=x[1],v=u.filter((function(t){return t.length>=h}));return v.sort((function(t,e){switch(y){case s.alfabetically:return t.localeCompare(e);case s.length:return t.length-e.length;default:return 0}})),p&&v.reverse(),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"App__title",children:[Object(j.jsx)("h1",{className:"title is-2",children:"Goods"}),n?null:Object(j.jsx)("button",{type:"button",className:r()(b,"is-outlined"),onClick:function(){n||c(!n)},children:"Start"}),Object(j.jsx)("select",{value:h,className:"select is-small",onChange:function(t){return d(+t.target.value)},children:[1,2,3,4,5,6,7,8,9,10].map((function(t){return Object(j.jsx)("option",{value:"".concat(t),children:t},t)}))})]}),Object(j.jsxs)("div",{className:"buttons has-addons",children:[Object(j.jsx)("button",{type:"button",className:r()(b,{"is-outlined":!p}),onClick:function(){O(!p)},children:"Reverse"}),Object(j.jsx)("button",{type:"button",className:r()(b,{"is-outlined":y!==s.alfabetically}),onClick:function(){return N(s.alfabetically)},children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:r()(b,{"is-outlined":y!==s.length}),onClick:function(){return N(s.length)},children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:r()(b,"is-outlined"),onClick:function(){N(s.nosort),O(!1)},children:"Reset"})]}),n&&Object(j.jsx)("ul",{className:"goods",children:v.map((function(t){return Object(j.jsx)("li",{className:"content is-medium box",children:t},t)}))})]})};l.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.5c6d34cb.chunk.js.map