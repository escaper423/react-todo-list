(this.webpackJsonptrolling=this.webpackJsonptrolling||[]).push([[0],{12:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(4),r=n.n(i),s=n(5),a=(n(21),n(22),n(0)),d=n(13),l=n(16),j=n(3),u=(n(23),n(8)),b=n(35),x=n(2);function O(e){var t=e.theme,n=e.opened,c=e.setOpened,o=e.inputText,i=e.setInputText,s=e.todoList,a=e.setTodoList,d=document.getElementById("modal-portal"),O={backgroundColor:t?"#555":"#aaa",color:t?"#ccc":"#333",borderRadius:"8px",position:"absolute",margin:"auto",top:"20%",left:"50%",padding:"2rem",width:Math.min("30vw","300px"),display:"block",transform:"translateX(-50%)",zIndex:1e3};return n?r.a.createPortal(Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{id:"create-task-modal",onClick:function(){return c(!1)}}),Object(x.jsxs)("div",{className:"create-task-container",style:O,children:[Object(x.jsx)(u.a,{className:"create-task-container-close",onClick:function(){return c(!1)},size:"2rem"}),Object(x.jsx)("h2",{children:"Create Task"}),Object(x.jsx)("br",{}),Object(x.jsx)("hr",{}),Object(x.jsx)("h3",{children:"Content:"}),Object(x.jsx)("input",{type:"text",value:o,placeholder:"type here",className:"create-task-container-title",onChange:function(e){return i(e.target.value)}}),Object(x.jsx)("p",{className:"create-task-container-cannot-text"}),Object(x.jsx)("button",{className:"create-task-container-confirm",onClick:function(){var e=document.getElementsByClassName("create-task-container-cannot-text")[0];if(o){e.innerHTML="";var t=Object(j.a)(Object(j.a)({},s),{},{todo:{title:"Todo",items:[].concat(Object(l.a)(s.todo.items),[{id:Object(b.a)(),name:o}])}});return i(""),a(t)}return e.innerHTML="Content text is required.",null},children:"Create"})]})]}),d):null}function h(e){var t=e.todoList,n=e.setTodoList,o=e.inputText,i=e.setInputText,r=Object(c.useState)(!1),l=Object(s.a)(r,2),j=l[0],u=l[1],b=L(),h=Object(c.useContext)(C),p=b?"Day":"Night",m={display:"inline-block",backgroundColor:b?"#333":"#eee",color:b?"#ccc":"#333",width:"100vw",height:"30vh",textAlign:"center",padding:"20px"};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(O,{opened:j,theme:b,setOpened:u,inputText:o,setInputText:i,todoList:t,setTodoList:n}),Object(x.jsxs)("div",{className:"todo-header",style:m,children:[Object(x.jsx)(a.b.Provider,{value:{size:"2rem"},children:Object(x.jsxs)("nav",{className:"todo-header-navbar",children:[Object(x.jsx)(d.a,{onClick:h}),Object(x.jsxs)("p",{children:[p," Mode"]})]})}),Object(x.jsxs)("div",{className:"todo-header-container",children:[Object(x.jsx)("h1",{children:"Todo List Tutorial"}),Object(x.jsx)("p",{className:"textxt",children:"Press 'Create Task' to add a todo task"}),Object(x.jsx)("button",{className:"todo-header-btn",onClick:function(){return u(!0)},children:"Create Task"})]})]})]})}n(12);var p=n(9),m=n(14),g=n.n(m);var f=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),o=n[0],i=n[1];return Object(c.useEffect)((function(){var t=window.matchMedia(e);t.matches!==o&&i(t.matches);var n=function(){i(t.matches)};return t.addListener(n),function(){return t.removeListener(n)}}),[o,e]),o};var v=function(e){var t=e.todoList,n=e.setTodoList,c=f("(max-width: 800px)"),o=L(),i={width:c?"95%":"25%",display:c?"block":"inline-block",margin:c?"10px":"0",height:"30%",backgroundColor:o?"#555":"#ccc",color:o?"#ccc":"#555",borderRadius:"6px",padding:"1rem"};return Object(x.jsx)("div",{className:"todo-list-container",children:Object(x.jsx)(p.a,{onDragEnd:function(e){var c=e.destination,o=e.source;if(console.log(c),console.log(o),c&&(c.index!==o.index||c.droppableId!==o.droppableId)){var i=Object(j.a)({},t[o.droppableId].items[o.index]);n((function(e){return(e=Object(j.a)({},e))[o.droppableId].items.splice(o.index,1),e[c.droppableId].items.splice(c.index,0,i),e}))}},children:g.a.map(t,(function(e,t){return Object(x.jsxs)("div",{className:"todo-list",style:i,children:[Object(x.jsx)("h3",{children:e.title}),Object(x.jsx)("hr",{}),Object(x.jsx)(p.c,{droppableId:t,children:function(c,o){return Object(x.jsxs)("div",Object(j.a)(Object(j.a)({ref:c.innerRef},c.droppableProps),{},{className:"todo-list-column",children:[e.items.map((function(e,c){return console.log(e.id),Object(x.jsx)(p.b,{index:c,draggableId:e.id,children:function(c,o){return console.log(o),Object(x.jsxs)("div",Object(j.a)(Object(j.a)({ref:c.innerRef},c.draggableProps),{},{className:"todo-list-item ".concat(o.isDragging&&"dragging"),children:[Object(x.jsx)("span",Object(j.a)(Object(j.a)({},c.dragHandleProps),{},{style:{margin:"auto",width:"80%",textOverflow:"ellipsis"},children:e.name})),Object(x.jsx)(u.a,{className:"todo-list-item-delete",onClick:function(){return function(e,t){console.log("clicked"),n((function(n){return(n=Object(j.a)({},n))[e].items=n[e].items.filter((function(e){return e.id!==t})),n}))}(t,e.id)}})]}))}},e.id)})),c.placeholder]}))}})]},t)}))})})};function k(e){var t=e.todoList,n=e.setTodoList,c=L(),o={backgroundColor:c?"#333":"#eee",color:c?"#eee":"333",width:"100vw",height:"70vh",textAlign:"center"};return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{id:"todo-body",style:o,children:Object(x.jsx)(v,{todoList:t,setTodoList:n})})})}var T=o.a.createContext(),C=o.a.createContext();function L(){return Object(c.useContext)(T)}function N(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)({todo:{title:"Todo",items:[]},"in-progress":{title:"In Progress",items:[]},completed:{title:"Completed",items:[]}}),r=Object(s.a)(i,2),a=r[0],d=r[1],l=Object(c.useState)(!0),j=Object(s.a)(l,2),u=j[0],b=j[1];return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{id:"app",children:Object(x.jsx)(T.Provider,{value:u,children:Object(x.jsxs)(C.Provider,{value:function(){b((function(e){return!e}))},children:[Object(x.jsx)(O,{theme:L}),Object(x.jsx)(h,{todoList:a,setTodoList:d,inputText:n,setInputText:o}),Object(x.jsx)(k,{todoList:a,setTodoList:d})]})})})})}var I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),i(e),r(e)}))};r.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(N,{})}),document.getElementById("root")),I(console.log)}},[[33,1,2]]]);
//# sourceMappingURL=main.2ac4b490.chunk.js.map