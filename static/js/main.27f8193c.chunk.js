(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var n=c(3),s=c.n(n),a=c(4),o=c(5),l=c(7),r=c(6),i=c(1),d=(c(12),c(13),c(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(t){Object(l.a)(c,t);var e=Object(r.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={selectedGood:"Jam"},t.clearButton=function(){t.setState({selectedGood:""})},t.addButton=function(e){t.setState({selectedGood:e})},t}return Object(o.a)(c,[{key:"render",value:function(){var t=this,e=this.state.selectedGood;return Object(d.jsxs)("main",{className:"section container",children:[""===e?Object(d.jsx)("h1",{className:"title",children:"No goods selected"}):Object(d.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(e," is selected"),Object(d.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.clearButton,children:void 0})]}),Object(d.jsx)("table",{className:"table",children:Object(d.jsx)("tbody",{children:u.map((function(c){return Object(d.jsxs)("tr",{"data-cy":"Good",className:c===e?"has-background-success-light":"",children:[Object(d.jsx)("td",{children:c===e?Object(d.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:t.clearButton,children:"-"}):Object(d.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return t.addButton(c)},children:"+"})}),Object(d.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]})}))})})]})}}]),c}(i.Component);s.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.27f8193c.chunk.js.map