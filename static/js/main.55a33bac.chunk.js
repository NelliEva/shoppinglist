(this.webpackJsonpshoppinglist=this.webpackJsonpshoppinglist||[]).push([[0],{46:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var i=n(3),s=n(17),c=n.n(s),r=n(7),j=(n(46),n(5)),a=n(2),l=function(){var e=Object(i.useRef)(),t=Object(i.useRef)();return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{className:"form",onSubmit:function(n){n.preventDefault();var i={newitem:e.current.value,quantity:t.current.value};fetch("https://shoppinglist-18749-default-rtdb.firebaseio.com/shoppinglist.json",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}).then((function(){window.location.reload(!1)}))},children:[Object(a.jsx)("input",{className:"inputitem",id:"newitem",required:!0,type:"text",ref:e}),Object(a.jsx)("label",{children:"Quantity"}),Object(a.jsx)("input",{className:"inputquantity",id:"quantity",required:!0,type:"number",ref:t}),Object(a.jsx)("input",{className:"submit",type:"submit"})]})})},o=n(39),b=n(9),u=function(e,t){var n=e.item,s=e.onRemove,c=Object(i.useRef)();return Object(a.jsxs)("div",{className:"box",style:{backgroundColor:"rgba(199, 134, 179, 0.8)"},ref:c,onTouchStart:function(){c.current.style.backgroundColor="black"},onTouchEnd:function(){return s(n.id)},onClick:function(){return s(n.id)},children:[Object(a.jsx)("li",{children:Object(a.jsx)("p",{className:"list-group-item",children:n.newitem})}),Object(a.jsx)("li",{children:Object(a.jsx)("p",{className:"quantity list-group-item",children:n.quantity})})]})},d=function(e){return Object(a.jsx)("div",{children:e.items.map((function(t){return Object(a.jsx)(u,{id:t.id,item:t,newitem:t.newitem,quantity:t.quantity,onRemove:e.onRemove},t.id)}))})},h=function(){var e=Object(i.useState)(!0),t=Object(b.a)(e,2),n=t[0],s=t[1],c=Object(i.useState)([]),r=Object(b.a)(c,2),j=r[0],l=r[1];if(Object(i.useEffect)((function(){fetch("https://shoppinglist-18749-default-rtdb.firebaseio.com/shoppinglist.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var n in e){var i=Object(o.a)({id:n},e[n]);t.push(i)}s(!1),l(t)}))}),[]),n)return Object(a.jsx)("p",{children:"Adding..."});return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("ul",{children:Object(a.jsx)(d,{onRemove:function(e){var t=j.filter((function(t){return t.id!==e}));l(t),fetch("https://shoppinglist-18749-default-rtdb.firebaseio.com/shoppinglist.json",{method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})},items:j})}),Object(a.jsxs)("div",{className:"Total",children:[Object(a.jsx)("h4",{className:"total",children:"Total"}),Object(a.jsx)("h4",{className:"total",children:"55"})]})]})},p=n(36),O=n.n(p),m=(n(48),function(){var e=Object(i.useState)(new Date),t=Object(b.a)(e,2),n=t[0],s=t[1];return Object(a.jsx)("div",{className:"date",children:Object(a.jsx)(O.a,{className:"datepicker",selected:n,onChange:function(e){return s(e)}})})}),f=function(){return Object(a.jsx)("div",{className:"nav",children:Object(a.jsxs)("ul",{className:"navUl",children:[Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{className:"navLink",to:"/settings",children:" Settings"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{className:"navLink",to:"/purchase",children:" Purchases"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{className:"navLink",to:"/type",children:" Shopping Type"})})]})})},x=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(f,{}),Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("h5",{children:Object(a.jsx)(r.b,{to:"/user",children:"Profile"})}),Object(a.jsx)(m,{})]}),Object(a.jsx)("h1",{children:"Shopping List"}),Object(a.jsx)(l,{}),Object(a.jsx)(h,{})]})},v=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h5",{children:"Profile"})})},g=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Welcome to the"}),Object(a.jsx)("h1",{children:"Shopping List"}),Object(a.jsx)("h2",{children:"app !"}),Object(a.jsx)("button",{children:Object(a.jsx)(r.b,{to:"/signin",children:"SignIn"})}),Object(a.jsx)("button",{children:Object(a.jsx)(r.b,{to:"/register",children:"Register"})})]})},y=function(){var e=Object(i.useRef)(),t=Object(i.useRef)(),n=Object(j.f)();return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Welcome Back to the Shopping List app!"}),Object(a.jsx)("h3",{children:"Please provide the following informations:"}),Object(a.jsxs)("form",{className:"form",onSubmit:function(i){i.preventDefault();var s={email:e.current.value,password:t.current.value};fetch("https://shoppinglist-18749-default-rtdb.firebaseio.com/sigin.json",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((function(){n("/main")}))},children:[Object(a.jsx)("label",{children:"name"}),Object(a.jsx)("input",{id:"name",type:"name",required:!0}),Object(a.jsx)("label",{children:"email"}),Object(a.jsx)("input",{id:"email",type:"email",required:!0,ref:e}),Object(a.jsx)("label",{children:"password"}),Object(a.jsx)("input",{id:"psw",type:"password",required:!0,ref:t}),Object(a.jsx)("input",{type:"submit",value:"SignIn"})]})]})},N=function(){var e=Object(i.useRef)(),t=Object(i.useRef)(),n=Object(i.useRef)(),s=Object(i.useRef)(),c=Object(j.f)();return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Welcome to the Shopping List app!"}),Object(a.jsx)("h3",{children:"This app will help you shopping blabla balaa"}),Object(a.jsx)("h4",{children:"Please provide the following informations:"}),Object(a.jsxs)("form",{className:"form",onSubmit:function(i){i.preventDefault();var r={user:e.current.value,email:t.current.value,password:n.current.value,password2:s.current.value};fetch("https://shoppinglist-18749-default-rtdb.firebaseio.com/register.json",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((function(){c("/main")}))},children:[Object(a.jsx)("label",{children:"name"}),Object(a.jsx)("input",{id:"name",type:"name",required:!0,ref:e}),Object(a.jsx)("label",{children:"email"}),Object(a.jsx)("input",{id:"email",type:"email",required:!0,ref:t}),Object(a.jsx)("label",{children:"password"}),Object(a.jsx)("input",{id:"psw",type:"password",required:!0,ref:n}),Object(a.jsx)("label",{children:"confirm password"}),Object(a.jsx)("input",{id:"psw2",type:"password",required:!0,ref:s}),Object(a.jsx)("input",{type:"submit",value:"Register"})]})]})};var w=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{path:"/main",element:Object(a.jsx)(x,{})}),Object(a.jsx)(j.a,{path:"/user",element:Object(a.jsx)(v,{})}),Object(a.jsx)(j.a,{path:"/shoppinglist",element:Object(a.jsx)(g,{})}),Object(a.jsx)(j.a,{path:"/signin",element:Object(a.jsx)(y,{})}),Object(a.jsx)(j.a,{path:"/register",element:Object(a.jsx)(N,{})})]})})};c.a.render(Object(a.jsx)(r.a,{children:Object(a.jsx)(w,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.55a33bac.chunk.js.map