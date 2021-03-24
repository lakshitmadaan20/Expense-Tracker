(this.webpackJsonpspeechly=this.webpackJsonpspeechly||[]).push([[0],{338:function(e,t,n){},339:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),i=n(20),s=n(72),l=n(47),u=function(e,t){var n;switch(t.type){case"DELETE_TRANSACTION":return n=e.filter((function(e){return e.id!==t.payload})),localStorage.setItem("transactions",JSON.stringify(n)),n;case"ADD_TRANSACTION":return n=[t.payload].concat(Object(l.a)(e)),localStorage.setItem("transactions",JSON.stringify(n)),n;default:return e}},j=n(4),d=JSON.parse(localStorage.getItem("transactions"))||[],b=Object(a.createContext)(d),m=function(e){var t=e.children,n=Object(a.useReducer)(u,d),c=Object(s.a)(n,2),r=c[0],o=c[1],i=r.reduce((function(e,t){return"Expense"===t.type?e-t.amount:e+t.amount}),0);return Object(j.jsx)(b.Provider,{value:{transactions:r,balance:i,deleteTransaction:function(e){o({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){o({type:"ADD_TRANSACTION",payload:e})}},children:t})},p=n(386),O=n(109),x=n(380),h=n(382),f=n(383),y=n(41),g=n(156),v=n(377),C=Object(v.a)((function(){return{income:{borderBottom:"20px solid rgba(0, 255, 0, 0.5)"},expense:{borderBottom:"20px solid rgba(255, 0, 0, 0.5)"}}})),T=["#123123","#154731","#165f40","#16784f","#14915f","#10ac6e","#0bc77e","#04e38d","#00ff9d"],I=["#b50d12","#bf2f1f","#c9452c","#d3583a","#dc6a48","#e57c58","#ee8d68","#f79d79","#ffae8a","#cc474b","#f55b5f"],N=[{type:"Business",amount:0,color:T[0]},{type:"Investments",amount:0,color:T[1]},{type:"Extra income",amount:0,color:T[2]},{type:"Deposits",amount:0,color:T[3]},{type:"Lottery",amount:0,color:T[4]},{type:"Gifts",amount:0,color:T[5]},{type:"Salary",amount:0,color:T[6]},{type:"Savings",amount:0,color:T[7]},{type:"Rental income",amount:0,color:T[8]}],E=[{type:"Bills",amount:0,color:I[0]},{type:"Car",amount:0,color:I[1]},{type:"Clothes",amount:0,color:I[2]},{type:"Travel",amount:0,color:I[3]},{type:"Food",amount:0,color:I[4]},{type:"Shopping",amount:0,color:I[5]},{type:"House",amount:0,color:I[6]},{type:"Entertainment",amount:0,color:I[7]},{type:"Phone",amount:0,color:I[8]},{type:"Pets",amount:0,color:I[9]},{type:"Other",amount:0,color:I[10]}],S=function(e){N.forEach((function(e){return e.amount=0})),E.forEach((function(e){return e.amount=0}));var t=Object(a.useContext)(b).transactions.filter((function(t){return t.type===e})),n=t.reduce((function(e,t){return e+t.amount}),0),c="Income"===e?N:E;t.forEach((function(e){var t=c.find((function(t){return t.type===e.category}));t&&(t.amount+=e.amount)}));var r=c.filter((function(e){return e.amount>0}));return{total:n,chartData:{datasets:[{data:r.map((function(e){return e.amount})),backgroundColor:r.map((function(e){return e.color}))}],labels:r.map((function(e){return e.type}))}}},k=function(e){var t=e.title,n=S(t),a=n.total,c=n.chartData,r=C();return Object(j.jsxs)(x.a,{className:"Income"===t?r.income:r.expense,children:[Object(j.jsx)(h.a,{title:t}),Object(j.jsxs)(f.a,{children:[Object(j.jsxs)(y.a,{variant:"h5",children:["INR ",a," "]}),Object(j.jsx)(g.Doughnut,{data:c})]})]})},w=n(22),A=Object(v.a)((function(e){return{desktop:Object(w.a)({},e.breakpoints.up("sm"),{display:"none"}),mobile:Object(w.a)({},e.breakpoints.down("sm"),{display:"none"}),main:Object(w.a)({},e.breakpoints.up("sm"),{paddingBottom:"5%"}),last:Object(w.a)({},e.breakpoints.down("sm"),{marginBottom:e.spacing(3),paddingBottom:"200px"}),grid:{"& > *":{margin:e.spacing(2)}}}})),D=n(399),B=Object(v.a)((function(e){return{media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},cartContent:{paddingTop:0},divider:{margin:"20px 0"}}})),R=n(11),_=n(387),P=n(403),F=n(400),J=n(391),L=n(405),W=n(392),H=Object(v.a)((function(){return{radioGroup:{display:"flex",justifyContent:"center",marginBottom:"-10px"},button:{marginTop:"20px"}}})),M=n(131),G=function(e){var t=new Date(e),n="".concat(t.getMonth()+1),a="".concat(t.getDate()),c=t.getFullYear();return n.length<2&&(n="0".concat(n)),a.length<2&&(a="0".concat(a)),[c,n,a].join("-")},z=n(402),U=n(401),V=Object(v.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),Y=function(e){var t=e.open,n=e.setOpen,a=V(),c=function(e,t){"clickaway"!==t&&n(!1)};return Object(j.jsx)("div",{className:a.root,children:Object(j.jsx)(z.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:t,autoHideDuration:6e3,onClose:c,children:Object(j.jsx)(U.a,{onClose:c,severity:"success",elevation:6,variant:"filled",children:"Transaction successfully created."})})})},q={amount:"",category:"",type:"Income",date:G(new Date)},K=function(){var e=Object(a.useState)(q),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(a.useContext)(b).addTransaction,l=c.a.useState(!1),u=Object(s.a)(l,2),d=u[0],m=u[1],O=Object(i.useSpeechContext)().segment,x=function(){var e=Object(R.a)(Object(R.a)({},n),{},{amount:Number(n.amount),id:Object(M.a)()});o(e),r(q)},h=H(),f="Income"===n.type?N:E;return Object(a.useEffect)((function(){if(O){if("add_expense"===O.intent.intent)r(Object(R.a)(Object(R.a)({},n),{},{type:"Expense"}));else if("add_income"===O.intent.intent)r(Object(R.a)(Object(R.a)({},n),{},{type:"Income"}));else{if(O.isFinal&&"create_transaction"===O.intent.intent)return x();if(O.isFinal&&"cancel_transaction"===O.intent.intent)return r(q)}O.entities.forEach((function(e){var t="".concat(e.value.charAt(0)).concat(e.value.slice(1).toLowerCase());switch(e.type){case"amount":r(Object(R.a)(Object(R.a)({},n),{},{amount:e.value}));break;case"category":N.map((function(e){return e.type})).includes(t)?r(Object(R.a)(Object(R.a)({},n),{},{type:"Income",category:t})):E.map((function(e){return e.type})).includes(t)&&r(Object(R.a)(Object(R.a)({},n),{},{type:"Expense",category:t}));break;case"date":r(Object(R.a)(Object(R.a)({},n),{},{date:e.value}))}})),O.isFinal&&n.amount&&n.category&&n.type&&n.date&&x()}}),[O]),Object(j.jsxs)(p.a,{container:!0,spacing:2,children:[Object(j.jsx)(Y,{open:d,setOpen:m}),Object(j.jsx)(p.a,{item:!0,xs:12,children:Object(j.jsx)(y.a,{align:"center",variant:"subtitle2",gutterBottom:!0,children:O&&Object(j.jsx)(j.Fragment,{children:O.words.map((function(e){return e.value})).join(" ")})})}),Object(j.jsx)(p.a,{item:!0,xs:6,children:Object(j.jsxs)(_.a,{fullWidth:!0,children:[Object(j.jsx)(P.a,{children:"Type"}),Object(j.jsxs)(F.a,{value:n.type,onChange:function(e){return r(Object(R.a)(Object(R.a)({},n),{},{type:e.target.value}))},children:[Object(j.jsx)(J.a,{value:"Income",children:"Income"}),Object(j.jsx)(J.a,{value:"Expense",children:"Expense"})]})]})}),Object(j.jsx)(p.a,{item:!0,xs:6,children:Object(j.jsxs)(_.a,{fullWidth:!0,children:[Object(j.jsx)(P.a,{children:"Category"}),Object(j.jsx)(F.a,{value:n.category,onChange:function(e){return r(Object(R.a)(Object(R.a)({},n),{},{category:e.target.value}))},children:f.map((function(e){return Object(j.jsx)(J.a,{value:e.type,children:e.type},e.type)}))})]})}),Object(j.jsx)(p.a,{item:!0,xs:6,children:Object(j.jsx)(L.a,{type:"number",label:"Amount",value:n.amount,onChange:function(e){return r(Object(R.a)(Object(R.a)({},n),{},{amount:e.target.value}))},fullWidth:!0})}),Object(j.jsx)(p.a,{item:!0,xs:6,children:Object(j.jsx)(L.a,{fullWidth:!0,label:"Date",type:"date",value:n.date,onChange:function(e){return r(Object(R.a)(Object(R.a)({},n),{},{date:G(e.target.value)}))}})}),Object(j.jsx)(W.a,{className:h.button,variant:"contained",color:"primary",fullWidth:!0,onClick:x,children:"Create"})]})},Q=n(390),X=n(393),Z=n(342),$=n(394),ee=n(406),te=n(396),ne=n(397),ae=n(385),ce=n(395),re=n(398),oe=n(87),ie=n(86),se=Object(v.a)((function(e){return{avatarIncome:{color:"#fff",backgroundColor:oe.a[500]},avatarExpense:{color:e.palette.getContrastText(ie.a[500]),backgroundColor:ie.a[500]},list:{maxHeight:"150px",overflow:"auto"}}})),le=function(){var e=se(),t=Object(a.useContext)(b),n=t.deleteTransaction,c=t.transactions;return Object(j.jsx)(Q.a,{dense:!1,className:e.list,children:c.map((function(t){return Object(j.jsx)(X.a,{direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0,children:Object(j.jsxs)(Z.a,{children:[Object(j.jsx)($.a,{children:Object(j.jsx)(ee.a,{className:"Income"===t.type?e.avatarIncome:e.avatarExpense,children:Object(j.jsx)(ce.a,{})})}),Object(j.jsx)(te.a,{primary:t.category,secondary:"INR".concat(t.amount," - ").concat(t.date)}),Object(j.jsx)(ne.a,{children:Object(j.jsx)(ae.a,{edge:"end","aria-label":"delete",onClick:function(){return n(t.id)},children:Object(j.jsx)(re.a,{})})})]})},t.id)}))})},ue=Math.round(Math.random()),je=function(){return Object(j.jsxs)("div",{elevation:3,style:{textAlign:"center",padding:"0 10%"},children:["Try saying: ",Object(j.jsx)("br",{}),"Add ",ue?"Income ":"Expense ","for ",ue?"INR 100 ":"INR 50 ","in Category ",ue?"Salary ":"Travel ","for ",ue?"Monday ":"Thursday "]})},de=function(){var e=B(),t=Object(a.useContext)(b).balance;return Object(j.jsxs)(x.a,{className:e.root,children:[Object(j.jsx)(h.a,{title:"Expense Tracker",subheader:"Powered by Speechly",style:{textAlign:"center"}}),Object(j.jsxs)(f.a,{children:[Object(j.jsxs)(y.a,{align:"center",variant:"h5",children:["Total Balance INR ",t]}),Object(j.jsx)(y.a,{variant:"subtitle1",style:{lineHeight:"1.5em",marginTop:"20px",textAlign:"center"},children:Object(j.jsx)(je,{})}),Object(j.jsx)(D.a,{}),Object(j.jsx)(K,{})]}),Object(j.jsx)(f.a,{classname:e.CardContent,children:Object(j.jsx)(p.a,{container:!0,spacing:2,children:Object(j.jsx)(p.a,{item:!0,xs:12,children:Object(j.jsx)(le,{})})})})]})},be=function(){var e=A(),t=Object(i.useSpeechContext)().speechState,n=Object(a.useRef)(null);return Object(a.useEffect)((function(){t===i.SpeechState.Recording&&n.current.scrollIntoView()}),[t]),Object(j.jsx)("div",{children:Object(j.jsxs)(p.a,{className:e.grid,container:!0,spacing:0,alignItems:"center",justify:"center",style:{height:"100vh"},children:[Object(j.jsx)(p.a,{item:!0,xs:12,sm:4,className:e.mobile,children:Object(j.jsx)(k,{title:"Income"})}),Object(j.jsx)(p.a,{ref:n,item:!0,xs:12,sm:3,className:e.main,children:Object(j.jsx)(de,{})}),Object(j.jsx)(p.a,{item:!0,xs:12,sm:4,className:e.desktop,children:Object(j.jsx)(k,{title:"Income"})}),Object(j.jsx)(p.a,{item:!0,xs:12,sm:4,className:e.last,children:Object(j.jsx)(k,{title:"Expense"})}),Object(j.jsx)(O.PushToTalkButtonContainer,{children:Object(j.jsx)(O.PushToTalkButton,{})})]})})};n(338);o.a.render(Object(j.jsx)(i.SpeechProvider,{appId:"db5817a2-cfb0-4ecf-8a2a-9bbc8909283d",language:"en-US",children:Object(j.jsx)(m,{children:Object(j.jsx)(be,{})})}),document.getElementById("root"))}},[[339,1,2]]]);
//# sourceMappingURL=main.8021adaa.chunk.js.map