(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(8),c=a.n(r),o=a(1),l=a.n(o),u=a(2),i=a(3),d=a(4),m=a(6),p=a(5),h=(a(15),a(16),a(17),function(e){var t=e.todos,a=e.selectedUser;return s.a.createElement("div",{className:"TodoList"},s.a.createElement("h2",null,"Todos:"),s.a.createElement("div",{className:"TodoList__list-container"},s.a.createElement("ul",{className:"TodoList__list"},t.map((function(e){return s.a.createElement("li",{key:e.id,className:e.completed?"TodoList__item--checked TodoList__item":"TodoList__item TodoList__item--unchecked"},s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",readOnly:!0}),s.a.createElement("p",null,e.title)),s.a.createElement("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){return a(e.userId)}},"User\xa0#",e.userId))})))))}),f=(a(18),"https://mate-api.herokuapp.com"),_=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={user:""},e.getTodos=Object(u.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(f,"/users/").concat(e.props.userId));case 2:return a=t.sent,t.next=5,a.json();case 5:return n=t.sent,t.abrupt("return",n.data);case 7:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.allData()}},{key:"componentDidUpdate",value:function(e){e!==this.props&&this.allData()}},{key:"allData",value:function(){var e=this;this.getTodos().then((function(t){return e.setState({user:t})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"CurrentUser"},s.a.createElement("h2",{className:"CurrentUser__title"},s.a.createElement("span",null,this.state.user.id)),s.a.createElement("h3",{className:"CurrentUser__name"},this.state.user.name),s.a.createElement("p",{className:"CurrentUser__email"},this.state.user.email),s.a.createElement("p",{className:"CurrentUser__phone"},this.state.user.phone))}}]),a}(s.a.Component),v="https://mate-api.herokuapp.com",E=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={todos:[],selectedUserId:0},e.getTodos=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/todos"));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a.data);case 7:case"end":return e.stop()}}),e)}))),e.selectedUser=function(t){e.setState({selectedUserId:t})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.allData()}},{key:"allData",value:function(){var e=this;this.getTodos().then((function(t){return e.setState({todos:t})}))}},{key:"render",value:function(){var e=this.state,t=e.todos,a=e.selectedUserId;return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"App__sidebar"},s.a.createElement(h,{todos:t,selectedUser:this.selectedUser}),this.allData(),console.log(this.state.todos)),s.a.createElement("div",{className:"App__content"},s.a.createElement("div",{className:"App__content-container"},a?s.a.createElement(_,{userId:a}):"No user selected")))}}]),a}(s.a.Component);c.a.render(s.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.de2bfc0b.chunk.js.map