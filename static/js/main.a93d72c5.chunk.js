(this["webpackJsonppms-ui"]=this["webpackJsonppms-ui"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(7),r=a.n(i),s=(a(14),a(5)),M=a(1),m=a(2),c=a(3),o=a(4),u=(a(15),function(){return l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Action")))}),L=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(M.a)(this,a),(n=t.call(this,e)).state={editIndex:-1},n.employee={name:null,email:null},n}return Object(m.a)(a,[{key:"setEditIndex",value:function(e){this.setState({editIndex:e}),-1===e&&this.resetLocalEmployee()}},{key:"updateLocalEmployee",value:function(e,t,a){if(e&&""!==e&&t.target.value&&""!==t.target.value)switch(this.employee=Object.assign({},this.props.employeeData[a]),e){case"name":this.employee.name=t.target.value;break;case"email":this.employee.email=t.target.value}}},{key:"updateEmployee",value:function(e){this.props.updateEmployee(e,this.employee),this.setEditIndex(-1)}},{key:"resetLocalEmployee",value:function(){this.employee={name:null,email:null}}},{key:"render",value:function(){var e=this,t=this.props.employeeData.map((function(t,a){return l.a.createElement("tr",{key:a},e.state.editIndex===a?l.a.createElement(l.a.Fragment,null,l.a.createElement("td",{id:"tdName"+a},l.a.createElement("input",{type:"text",id:"name"+a,name:"name"+a,defaultValue:t.name,onChange:function(t){return e.updateLocalEmployee("name",t,a)}})),l.a.createElement("td",{id:"tdEmail"+a},l.a.createElement("input",{type:"email",id:"email"+a,name:"email"+a,defaultValue:t.email,onChange:function(t){return e.updateLocalEmployee("email",t,a)}})),l.a.createElement("td",{id:"tdSave"+a},l.a.createElement("button",{id:"btnSave"+a,onClick:function(){return e.updateEmployee(a)}},"Save")),l.a.createElement("td",{id:"tdCancel"+a},l.a.createElement("button",{id:"btnCancel"+a,onClick:function(){return e.setEditIndex(-1)}},"Cancel"))):l.a.createElement(l.a.Fragment,null,l.a.createElement("td",{id:"tdName"+a},t.name),l.a.createElement("td",{id:"tdEmail"+a},t.email),l.a.createElement("td",{id:"tdDelete"+a},l.a.createElement("button",{id:"btnDelete"+a,onClick:function(){return e.props.removeEmployee(a)}},"Delete")),l.a.createElement("td",{id:"tdEdit"+a},l.a.createElement("button",{id:"btnEdit"+a,onClick:function(){return e.setEditIndex(a)}},"Edit"))))}));return l.a.createElement("tbody",null,t)}}]),a}(n.Component),E=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(M.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.employeeData,a=e.removeEmployee,n=e.updateEmployee;return l.a.createElement("div",{className:"contain-table"},l.a.createElement("table",{className:"ProseMirror normal"},l.a.createElement(u,null),l.a.createElement(L,{employeeData:t,removeEmployee:a,updateEmployee:n})))}}]),a}(n.Component),y=a(8),d=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(M.a)(this,a),(n=t.call(this,e)).handleChange=function(e){e.target.parentElement.classList.remove("form-field-error");var t=e.target,a=t.name,l=t.value;n.setState(Object(y.a)({},a,l)),n.showInputError(e.target.name)},n.handleSubmit=function(e){(e.preventDefault(),n.isFormValid())&&(n.props.addEmployee(n.state),n.setState(n.initialState),document.querySelectorAll("input").forEach((function(e){e.parentElement.classList.remove("form-field-error"),document.getElementById("".concat(e.name,"Label")).classList.remove("form-field-label-shift")})))},n.initialState={name:"",email:""},n.state=n.initialState,n}return Object(m.a)(a,[{key:"isFormValid",value:function(){var e=this,t=document.querySelectorAll("input"),a=!0;return t.forEach((function(t){e.showInputError(t.name)||(a=!1)})),a}},{key:"showInputError",value:function(e){var t=this.refs[e].validity,a=document.getElementById("".concat(e,"Label"));a.classList.add("form-field-label-shift");var n,l="string"!==typeof(n=e)?"":n.charAt(0).toUpperCase()+n.slice(1);return t.valid?(a.textContent=l,!0):(a.parentElement.classList.add("form-field-error"),t.valueMissing?(a.classList.remove("form-field-label-shift"),a.textContent="".concat(l," required")):t.typeMismatch&&(a.textContent="".concat(l," should be valid")),!1)}},{key:"render",value:function(){return l.a.createElement("form",{noValidate:!0},l.a.createElement("div",{className:"form-field"},l.a.createElement("label",{htmlFor:"name",id:"nameLabel",className:"form-field-label"},"Name"),l.a.createElement("input",{type:"text",id:"name",name:"name",ref:"name",className:"form-field-input",spellCheck:"false",value:this.state.name,onChange:this.handleChange,required:!0}),l.a.createElement("div",{className:"_3ND7O5VNyy88KOUTSjso-S"})),l.a.createElement("div",{className:"form-field"},l.a.createElement("label",{htmlFor:"email",id:"emailLabel",className:"form-field-label"},"Email"),l.a.createElement("input",{type:"email",id:"email",name:"email",ref:"email",className:"form-field-input",spellCheck:"false",value:this.state.email,pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",onChange:this.handleChange,required:!0}),l.a.createElement("div",{className:"_3ND7O5VNyy88KOUTSjso-S"})),l.a.createElement("div",{className:"btn form-field-button form-field-button-color form-field-button-display form-field-button-transform",onClick:this.handleSubmit},l.a.createElement("span",null,"Add Employee")))}}]),a}(n.Component),j=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(M.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={employees:[{name:"Abraham",email:"abraham@xyz.com"},{name:"Bahadur",email:"bahadur@abc.xyz"},{name:"Cinderella",email:"cinderella@xyz.com"},{name:"Danish",email:"danish@abc.xyz"}]},e.remove=function(t){var a=e.state.employees;e.setState({employees:a.filter((function(e,a){return t!==a}))})},e.add=function(t){e.setState({employees:[].concat(Object(s.a)(e.state.employees),[t])})},e.update=function(t,a){""!==a.name&&""!==a.email&&e.setState((function(e){var n=Object(s.a)(e.employees);return n[t]=a,{employees:n}}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.employees;return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",{className:"header-elem-height"},l.a.createElement("div",{className:"page-header page-header-shadow zoom2-enter-done"},l.a.createElement("div",{className:"logo"},l.a.createElement("a",{className:"logo-img-link",href:"/",target:"_self"},l.a.createElement("img",{alt:"Logo",src:"data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPgogICAgPGRlZnM+CiAgICAgICAgPHN0eWxlPi5jbHMtMXtmaWxsOiNmYTU1NjA7fTwvc3R5bGU+CiAgICA8L2RlZnM+CiAgICA8dGl0bGU+aWNvbjwvdGl0bGU+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03MDUuMzIsMjgwLjEzYy00LjYxLDAtOS4yLjIyLTEzLjc5LjU0bC0uMDctLjU5Yy00LjIxLjQ4LTguMzgsMS4xNC0xMi41MiwxLjg5LTQuNzEuNjQtOS40LDEuMzgtMTQuMDYsMi4zNmExOTYuNDIsMTk2LjQyLDAsMCwwLTI4Mi42Ni0yMC45MWwtLjI3LS4yOWExOTUuODIsMTk1LjgyLDAsMCwwLTIwLjM2LDIxLjcxLDE5Ny4yLDE5Ny4yLDAsMCwwLTQyLjkxLTQuNzFDMjEwLjIzLDI4MC4xMywxMjIsMzY4LjM2LDEyMiw0NzYuODFzODguMjMsMTk2LjY4LDE5Ni42OCwxOTYuNjhINTE3LjE2djExNS4xQTIxLjYyLDIxLjYyLDAsMCwwLDU0NSw4MDkuMjljMi4xLS42Myw1Mi0xNi4xMSw5Ny44My02Ny4zNCwyMy4wOS0yNS43OSwzOC40OS01Mi43OCw0Ni42OC02OS4xMnE4LC42NiwxNS43OS42NkM4MTMuNzcsNjczLjQ5LDkwMiw1ODUuMjYsOTAyLDQ3Ni44MVM4MTMuNzcsMjgwLjEzLDcwNS4zMiwyODAuMTNabTAsMzUwLjEzQTE1NC4zOSwxNTQuMzksMCwwLDEsNjgwLDYyOC4xMWEyMS42NiwyMS42NiwwLDAsMC0yMy42OSwxMy41NiwyNzcuNzMsMjc3LjczLDAsMCwxLTQ1LjcyLDcxLjQ1LDIxNC42LDIxNC42LDAsMCwxLTUwLjI0LDQxLjQyVjY1MS44OGEyMS42MSwyMS42MSwwLDAsMC0yMS42MS0yMS42MkgzMTguNjhjLTg0LjYxLDAtMTUzLjQ0LTY4Ljg0LTE1My40NC0xNTMuNDVzNjguODMtMTUzLjQ1LDE1My40NC0xNTMuNDVhMTU0LjEzLDE1NC4xMywwLDAsMSwxOC4xMiwxLjE3QTE5Ny4xNSwxOTcuMTUsMCwwLDAsMzE5LDM4OGExMjIuMjYsMTIyLjI2LDAsMCwwLTQ0Ljg3LDE5LjI3LDIxLjYyLDIxLjYyLDAsMSwwLDI0LjYxLDM1LjU1LDgwLjE4LDgwLjE4LDAsMCwxLDExMiwyMS4xNiwyMS42MiwyMS42MiwwLDAsMCwzNS44My0yNC4yMSwxMjIuMzMsMTIyLjMzLDAsMCwwLTgzLjg3LTUzLDE1Mi41NSwxNTIuNTUsMCwwLDEsMjU5LjM1LTg1LjI4LDE5NS43OSwxOTUuNzksMCwwLDAtNDksMzYuNzksMTI3LjE0LDEyNy4xNCwwLDAsMC0xMy43OC00Ljc1LDEyMi4yNiwxMjIuMjYsMCwwLDAtNzkuMzgsNC4yMiwyMS42MiwyMS42MiwwLDEsMCwxNi4xMSw0MC4xMyw4MC4yLDgwLjIsMCwwLDEsMTA0LjU4LDQ1LjQ4LDIxLjYyLDIxLjYyLDAsMSwwLDQwLjMtMTUuNjYsMTIzLjMxLDEyMy4zMSwwLDAsMC0zMC41LTQ1LjI4LDE1MiwxNTIsMCwwLDEsNzYuOS0zOCwxNTIuMzIsMTUyLjMyLDAsMCwxLDE4LTEuMTVjODQuNjEsMCwxNTMuNDQsNjguODQsMTUzLjQ0LDE1My40NVM3ODkuOTMsNjMwLjI2LDcwNS4zMiw2MzAuMjZaIi8+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zNjAuODksNTE1LjY3YTgwLjIsODAuMiwwLDAsMS0xMTMtMTUuNDIsMjEuNjIsMjEuNjIsMCwxLDAtMzQuNTUsMjYsMTIzLjQzLDEyMy40MywwLDAsMCwxNzMuOTMsMjMuNjcsMjEuNjEsMjEuNjEsMCwxLDAtMjYuMzktMzQuMjRaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNzgyLjY2LDQ5OS44OWE2My41Nyw2My41NywwLDAsMS02My4yOC02NC41NCwyMS42MiwyMS42MiwwLDAsMC0yMS4zMS0yMS45M2gtLjMyYTIxLjYxLDIxLjYxLDAsMCwwLTIxLjYsMjEuMzEsMTA1Ljg2LDEwNS44NiwwLDAsMCwyMSw2NSwxMDYuNTUsMTA2LjU1LDAsMCwxLTQ4Ljg1LDQ1LjE0Yy0yOC44NywxMy40MS02MSwxMy41NC04OC43LjczYTEyMi4xMywxMjIuMTMsMCwwLDAsMjMuMDUtNjYuMzYsMjEuNjIsMjEuNjIsMCwxLDAtNDMuMi0xLjk0LDgwLjE5LDgwLjE5LDAsMCwxLTg0LjY5LDc2LjM4LDIxLjYxLDIxLjYxLDAsMCwwLTIuNDIsNDMuMTZxMy41OC4yMSw3LjE1LjIxYTEyMi4xMywxMjIuMTMsMCwwLDAsNjkuMzktMjEuNTgsMjEuMzQsMjEuMzQsMCwwLDAsOC4yNCw3LjQzLDE0NS4yNCwxNDUuMjQsMCwwLDAsNjUuNCwxNS41MSwxNTEuODUsMTUxLjg1LDAsMCwwLDY0LTE0LjMzQTE0OS42NiwxNDkuNjYsMCwwLDAsNzI5LjkxLDUyOWExMDUuNzcsMTA1Ljc3LDAsMCwwLDUyLjYxLDE0LjE1aC4wN2EyMS42MiwyMS42MiwwLDAsMCwuMDctNDMuMjRaIi8+Cjwvc3ZnPg=="}))),l.a.createElement("div",{className:"header-item"},l.a.createElement("span",null,"Employees")),l.a.createElement("div",{className:"_1SKg9gcMzCdO0BL1ImbqvM"}),l.a.createElement("div",{className:"header-item-center"},l.a.createElement("div",{className:"btn form-field-button form-field-button-bgcolor form-field-button-topbar form-field-button-display form-field-button-topbar-pad form-field-button-transform"},l.a.createElement("span",null),l.a.createElement("div",{className:"user-icon user-icon-filter user-icon-props",style:{backgroundColor:"rgb(154, 89, 166)"}},"SS"))))),l.a.createElement("div",{className:"header-elem-height"},l.a.createElement("div",{className:"page-content zoom2-enter-done"},l.a.createElement("div",{className:"form-container"},l.a.createElement("header",{className:"form-header"},l.a.createElement("h1",{className:"text-center"},"Employees")),l.a.createElement(d,{addEmployee:this.add}),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("div",{className:"table-container"},l.a.createElement(E,{employeeData:e,removeEmployee:this.remove,updateEmployee:this.update}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.a93d72c5.chunk.js.map