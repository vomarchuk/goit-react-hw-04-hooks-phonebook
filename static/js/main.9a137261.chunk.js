(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,,,function(t,e,n){t.exports={title:"App_title__1YcTA"}},function(t,e,n){t.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",btn__delete:"ContactList_btn__delete__2u4p9"}},,function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",button:"ContactForm_button__1MLZK"}},function(t,e,n){t.exports={label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}},,function(t,e,n){t.exports={container:"Container_container__3RIox"}},function(t,e,n){t.exports={input:"Input_input__3PNbO"}},function(t,e,n){t.exports={label:"Label_label__2bY5z"}},,,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(10),r=n.n(i),o=(n(20),n(14)),s=n(2),l=n(23),u=n(5),b=n.n(u),j=n(11),d=n.n(j),m=n(0),h=function(t){var e=t.children;return Object(m.jsx)("div",{className:d.a.container,children:e})},f=n(8),p=n.n(f),O=n(12),_=n.n(O),x=function(t){var e=t.id,n=t.type,a=t.name,c=t.value,i=t.handleChange,r=t.options;return Object(m.jsx)("input",{className:_.a.input,id:e,type:n,name:a,value:c,onChange:function(t){i(t)},pattern:r.pattern,title:r.title,required:!0})},v=n(13),C=n.n(v),g=function(t){var e=t.id,n=t.title,a=t.children;return Object(m.jsxs)("label",{className:C.a.label,htmlFor:e,children:[n,a]})},N={name:{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f."},number:{pattern:"+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +"}};function y(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),i=c[0],r=c[1],o=Object(a.useState)(""),u=Object(s.a)(o,2),b=u[0],j=u[1],d=Object(l.a)(),h=Object(l.a)(),f=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":r(a);break;case"number":j(a);break;default:return}},O=function(){r(""),j("")};return Object(m.jsxs)("form",{className:p.a.form,onSubmit:function(t){t.preventDefault(),e(i,b),O()},autoComplete:"off",children:[Object(m.jsx)(g,{id:d,title:"Name",children:Object(m.jsx)(x,{id:d,type:"text",name:"name",value:i,handleChange:f,options:N.name})}),Object(m.jsx)(g,{id:h,title:"Number",children:Object(m.jsx)(x,{id:h,type:"tel",name:"number",value:b,handleChange:f,options:N.number})}),Object(m.jsx)("button",{className:p.a.button,type:"submit",children:"add Contact"})]})}var S=n(6),k=n.n(S),L=function(t){var e=t.contactList,n=t.onDeleteContact;return Object(m.jsx)("ul",{className:k.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(m.jsxs)("li",{className:k.a.item,children:[a,": ",c,Object(m.jsx)("button",{className:k.a.btn__delete,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},w=n(9),A=n.n(w),F=function(t){var e=t.value,n=t.onChange;return Object(m.jsxs)("label",{className:A.a.label,children:["Find contacts by name",Object(m.jsx)("input",{className:A.a.input,type:"text",value:e,onChange:n})]})};function D(){var t,e=Object(a.useState)(null!==(t=JSON.parse(localStorage.getItem("Contacts")))&&void 0!==t?t:""),n=Object(s.a)(e,2),c=n[0],i=n[1],r=Object(a.useState)(""),u=Object(s.a)(r,2),j=u[0],d=u[1];return Object(a.useEffect)((function(){localStorage.setItem("Contacts",JSON.stringify(c))}),[c]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(h,{children:[Object(m.jsx)("h1",{className:b.a.title,children:"Phonebook"}),Object(m.jsx)(y,{onSubmit:function(t,e){if(n=t,c.find((function(t){return t.name===n}))){var n;alert("".concat(t," is already in contacts"))}else{var a={id:Object(l.a)(),name:t,number:e};i((function(t){return[].concat(Object(o.a)(t),[a])}))}}})]}),c.length>0?Object(m.jsxs)(h,{children:[Object(m.jsx)("h2",{className:b.a.title,children:"Contacts"}),Object(m.jsx)(F,{value:j,onChange:function(t){d(t.currentTarget.value)}}),Object(m.jsx)(L,{contactList:function(){var t=j.toLowerCase();return c.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),onDeleteContact:function(t){i(c.filter((function(e){return e.id!==t})))}})]}):Object(m.jsx)(h,{children:Object(m.jsx)("h2",{className:b.a.title,children:"Phone book is empty"})})]})}r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.9a137261.chunk.js.map