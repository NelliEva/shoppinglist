(this.webpackJsonpshoppinglist=this.webpackJsonpshoppinglist||[]).push([[0],{46:function(e,t,s){},96:function(e,t,s){"use strict";s.r(t);var n=s(2),c=s(17),i=s.n(c),r=s(8),j=(s(46),s(6)),l=s(5),a=s(0),o=function(){var e=Object(n.useRef)(),t=Object(n.useRef)();return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{className:"form",onSubmit:function(s){s.preventDefault();var n={newitem:e.current.value,quantity:t.current.value};fetch("https://shoppinglist-18749-default-rtdb.firebaseio.com/list.json",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(){window.location.reload(!1)}))},children:[Object(a.jsx)("input",{className:"inputitem",id:"newitem",required:!0,type:"text",ref:e}),Object(a.jsx)("label",{htmlFor:"quantity",children:"Quantity"}),Object(a.jsx)("input",{className:"inputquantity",id:"quantity",name:"quantity",min:"1",required:!0,type:"number",ref:t}),Object(a.jsx)("input",{className:"submit",type:"submit",value:"Add"})]})})},d=s(39),b=function(e){var t=e.item,s=e.onRemove,c=(e.newprice,e.price),i=Object(n.useRef)(),r=Object(n.useRef)();return Object(a.jsxs)("div",{className:"allBoxes",children:[Object(a.jsxs)("div",{className:"box",style:{backgroundColor:"rgba(199, 134, 179, 0.8)",with:"100%"},ref:i,onTouchStart:function(){i.current.style.backgroundColor="black"},onTouchMove:function(){i.current.style.width="10rem",r.current.style.visibility="hidden"},onTouchEnd:function(){s(t.id)},onClick:function(){return s(t.id)},children:[Object(a.jsx)("li",{children:Object(a.jsx)("p",{className:"",children:t.newitem})}),Object(a.jsx)("li",{style:{visibility:"visible"},ref:r,children:Object(a.jsx)("p",{className:"quantity ",children:t.quantity})})]}),Object(a.jsx)("div",{className:"price",children:Object(a.jsx)("li",{children:Object(a.jsxs)("p",{children:["$",c]})})})]})},h=function(e){var t=Object(n.useState)(0),s=Object(j.a)(t,2),c=s[0],i=s[1],r=Object(n.useState)(0),l=Object(j.a)(r,2),o=l[0],d=l[1],h=Object(n.useState)(12),O=Object(j.a)(h,2),p=O[0],u=O[1],x=function(){u(0)};Object(n.useEffect)((function(){m(),f()}),[e.items]);var m=function(){for(var t=0,s=0;s<e.items.length;s++)t+=parseInt(e.items[s].quantity);i(t)},f=function(){for(var t=0,s=0;s<e.items.length;s++)t+=p;d(t)};return Object(a.jsxs)("div",{children:[e.items.map((function(t){return Object(a.jsx)(b,{id:t.id,item:t,newitem:t.newitem,quantity:t.quantity,onRemove:e.onRemove,price:p,newPrice:x},t.id)})),Object(a.jsxs)("div",{className:"Total",children:[Object(a.jsxs)("div",{className:"boxTotal",children:[Object(a.jsx)("h4",{className:"total wordTotal",children:"Total:"}),Object(a.jsx)("h4",{className:"total",children:c})]}),Object(a.jsxs)("h4",{className:"total totalPrice",children:["$",o]})]})]})},O=function(){var e=Object(n.useState)(!0),t=Object(j.a)(e,2),s=t[0],c=t[1],i=Object(n.useState)([]),r=Object(j.a)(i,2),l=r[0],o=r[1];if(Object(n.useEffect)((function(){c(!0),fetch("https://shoppinglist-18749-default-rtdb.firebaseio.com/list.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var s in e){var n=Object(d.a)({id:s},e[s]);t.push(n)}c(!1),o([].concat(t))}))}),[]),s)return Object(a.jsx)("p",{children:"Adding..."});return Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("ul",{className:"containerUl",children:Object(a.jsx)(h,{onRemove:function(e){var t=l.filter((function(t){return t.id!==e}));o(t),fetch("https://shoppinglist-18749-default-rtdb.firebaseio.com/shoppinglist.json",{method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})},items:l})})})},p=s(36),u=s.n(p),x=(s(48),function(){var e=Object(n.useState)(new Date),t=Object(j.a)(e,2),s=t[0],c=t[1];return Object(a.jsx)("div",{className:"date",children:Object(a.jsx)(u.a,{className:"datepicker",selected:s,onChange:function(e){c(e)},onSelect:function(){fetch("https://shoppinglist-18749-default-rtdb.firebaseio.com/date.json",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"aplication/json"}}).then((function(){}))}})})}),m=function(){return Object(a.jsx)("div",{className:"nav",children:Object(a.jsxs)("ul",{className:"navUl",children:[Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{className:"navLink",to:"/shoppinglist/settings",children:" Settings"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{className:"navLink",to:"/shoppinglist/purchases",children:" Purchases"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{className:"navLink",to:"/shoppinglist/type",children:"Purchase Type"})})]})})},f=function(e){var t=e.grocery;return Object(a.jsxs)("div",{children:[Object(a.jsx)(m,{}),Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("span",{className:"profile_box",children:Object(a.jsx)("h5",{className:"profile",children:Object(a.jsx)(r.b,{to:"/user",children:"Profile"})})}),Object(a.jsx)(x,{})]}),Object(a.jsx)("h1",{children:"Shopping List"}),Object(a.jsx)("h4",{className:"h7",children:t}),Object(a.jsx)(o,{}),Object(a.jsx)(O,{})]})},g=s.p+"static/media/photo.b24fd7fc.jpg",v=function(){var e=Object(n.useRef)(),t=Object(n.useState)(""),s=Object(j.a)(t,2),c=s[0],i=s[1],r=g;return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{className:"profileForm",onSubmit:function(t){t.preventDefault();var s=e.current.value;fetch("https://shoppinglist-18749-default-rtdb.firebaseio.com/notes.json",{method:"POST",body:JSON.stringify(s),headers:{"Conetent-Type":"application/json"}}).then((function(){fetch("https://shoppinglist-18749-default-rtdb.firebaseio.com/notes.json").then((function(e){return e.json()})).then((function(e){i(e)}))}))},children:[Object(a.jsx)("h5",{children:"Hannah"}),Object(a.jsx)("img",{src:r,alt:"",width:"180px",height:"250px"}),Object(a.jsx)("p",{children:"Notes"}),Object(a.jsx)("textarea",{rows:"15",cols:"70",ref:e,children:c}),Object(a.jsx)("button",{className:"profileButton",type:"submit",children:"Save"})]})})},N=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Welcome to the"}),Object(a.jsx)("h1",{children:"Shopping List"}),Object(a.jsx)("h2",{children:"app !"}),Object(a.jsx)("button",{className:"signin",children:Object(a.jsx)(r.b,{className:"a_signin",to:"/shoppinglist/signin",children:"SignIn"})}),Object(a.jsx)("button",{className:"register",children:Object(a.jsx)(r.b,{className:"a_signin",to:"/shoppinglist/register",children:"Register"})})]})},y=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),s=Object(l.f)();return Object(a.jsxs)("div",{className:"signin_box",children:[Object(a.jsx)("h2",{className:"h2_signin",children:"Welcome Back to the"})," ",Object(a.jsx)("h1",{className:"h1_signin",children:"Shopping List "}),Object(a.jsx)("h2",{className:"h2_signin",children:"app!"}),Object(a.jsx)("h3",{children:"Please provide the following informations:"}),Object(a.jsxs)("form",{className:"form signin_form",onSubmit:function(n){n.preventDefault();var c={email:e.current.value,password:t.current.value};fetch("https://shoppinglist-18749-default-rtdb.firebaseio.com/sigin.json",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((function(){s("/shoppinglist/main")}))},children:[Object(a.jsx)("label",{children:"name"}),Object(a.jsx)("input",{id:"name",type:"name",required:!0}),Object(a.jsx)("label",{children:"email"}),Object(a.jsx)("input",{id:"email",type:"email",required:!0,ref:e}),Object(a.jsx)("label",{children:"password"}),Object(a.jsx)("input",{id:"psw",type:"password",required:!0,ref:t}),Object(a.jsx)("input",{className:"signin_submit",type:"submit",value:"SignIn"})]})]})},w=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),s=Object(n.useRef)(),c=Object(n.useRef)(),i=Object(l.f)();return Object(a.jsxs)("div",{className:"signin_box",children:[Object(a.jsx)("h2",{className:"h2_signin",children:"Welcome to the "})," ",Object(a.jsx)("h1",{className:"h1_signin",children:" Shopping List"}),Object(a.jsx)("h2",{className:"h2_signin",children:" app!"}),Object(a.jsx)("h3",{children:"This app will help you shopping blabla balaa"}),Object(a.jsx)("h4",{children:"Please provide the following informations:"}),Object(a.jsxs)("form",{className:"form register_form",onSubmit:function(n){n.preventDefault();var r={user:e.current.value,email:t.current.value,password:s.current.value,password2:c.current.value};fetch("https://shoppinglist-18749-default-rtdb.firebaseio.com/register.json",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((function(){i("/shoppinglist/main")}))},children:[Object(a.jsx)("label",{children:"name"}),Object(a.jsx)("input",{id:"name",type:"name",required:!0,ref:e}),Object(a.jsx)("label",{children:"email"}),Object(a.jsx)("input",{id:"email",type:"email",required:!0,ref:t}),Object(a.jsx)("label",{children:"password"}),Object(a.jsx)("input",{id:"psw",type:"password",required:!0,ref:s}),Object(a.jsx)("label",{children:"confirm password"}),Object(a.jsx)("input",{id:"psw2",type:"password",required:!0,ref:c}),Object(a.jsx)("input",{className:"signin_submit",type:"submit",value:"Register"})]})]})},S=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),s=t[0],c=t[1],i=Object(n.useState)(!1),r=Object(j.a)(i,2),l=r[0],o=r[1],d=Object(n.useState)(!1),b=Object(j.a)(d,2),h=b[0],O=b[1];return Object(a.jsxs)("div",{className:"settings",children:[Object(a.jsxs)("div",{className:"dropdown",onClick:function(){c(!s)},children:[Object(a.jsx)("p",{children:"Language"}),s?Object(a.jsxs)("ul",{className:"dropdown_content",children:[Object(a.jsx)("li",{children:Object(a.jsx)("p",{children:"English"})}),Object(a.jsx)("li",{children:Object(a.jsx)("p",{children:"French"})}),Object(a.jsx)("li",{children:Object(a.jsx)("p",{children:"Spanish"})}),Object(a.jsx)("li",{children:Object(a.jsx)("p",{children:"German"})})]}):null]}),Object(a.jsxs)("div",{className:"dropdown",onClick:function(){o(!l)},children:[Object(a.jsx)("p",{children:"Currency"}),l?Object(a.jsxs)("ul",{className:"dropdown_content",children:[Object(a.jsx)("li",{children:Object(a.jsx)("p",{children:"US dollar"})}),Object(a.jsx)("li",{children:Object(a.jsx)("p",{children:"euro"})}),Object(a.jsx)("li",{children:Object(a.jsx)("p",{children:"CA dollar"})}),Object(a.jsx)("li",{children:Object(a.jsx)("p",{children:"pound"})})]}):null]}),Object(a.jsxs)("div",{className:"dropdown",onClick:function(){O(!h)},children:[Object(a.jsx)("p",{children:"Color Scheme"}),h?Object(a.jsxs)("ul",{className:"dropdown_content",children:[Object(a.jsx)("li",{children:Object(a.jsx)("p",{children:"Green"})}),Object(a.jsx)("li",{children:Object(a.jsx)("p",{children:"Blue"})}),Object(a.jsx)("li",{children:Object(a.jsx)("p",{children:"Red"})}),Object(a.jsx)("li",{children:Object(a.jsx)("p",{children:"BnW"})})]}):null]})]})},C=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"02.11.2021"}),Object(a.jsx)("td",{children:"Grocery"}),Object(a.jsx)("td",{children:"45"}),Object(a.jsx)("td",{children:"$200"})]})})},T=function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Date"}),Object(a.jsx)("th",{children:"Purchase Type"}),Object(a.jsx)("th",{children:"Total Items"}),Object(a.jsx)("th",{children:"Total Amount"})]}),Object(a.jsx)(C,{})]})},k=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("table",{children:Object(a.jsx)(T,{})})})},q=function(e){var t=e.onClickHandeler;return Object(a.jsxs)("div",{className:"settings type",children:[Object(a.jsx)("div",{className:"dropdown",children:Object(a.jsx)("p",{onClick:t,id:"Grocery",children:"Grocery"})}),Object(a.jsx)("div",{className:"dropdown",children:Object(a.jsx)("p",{onClick:t,id:"Clothing",children:"Clothing"})}),Object(a.jsx)("div",{className:"dropdown",children:Object(a.jsx)("p",{onClick:t,id:"Christmas",children:"Christmas"})}),Object(a.jsx)("div",{className:"dropdown",children:Object(a.jsx)("p",{id:"+",children:"+"})})]})};var R=function(){var e=Object(l.f)(),t=Object(n.useState)(""),s=Object(j.a)(t,2),c=s[0],i=s[1];return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/shoppinglist/main",element:Object(a.jsx)(f,{grocery:c})}),Object(a.jsx)(l.a,{path:"/shoppinglist/user",element:Object(a.jsx)(v,{})}),Object(a.jsx)(l.a,{path:"/shoppinglist",element:Object(a.jsx)(N,{})}),Object(a.jsx)(l.a,{path:"/shoppinglist/signin",element:Object(a.jsx)(y,{})}),Object(a.jsx)(l.a,{path:"/shoppinglist/register",element:Object(a.jsx)(w,{})}),Object(a.jsx)(l.a,{path:"/shoppinglist/settings",element:Object(a.jsx)(S,{})}),Object(a.jsx)(l.a,{path:"/shoppinglist/purchases",element:Object(a.jsx)(k,{})}),Object(a.jsx)(l.a,{path:"/shoppinglist/type",element:Object(a.jsx)(q,{onClickHandeler:function(t){i(t.target.id),e("/main")}})})]})})};i.a.render(Object(a.jsx)(r.a,{children:Object(a.jsx)(R,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.ab4bbf10.chunk.js.map