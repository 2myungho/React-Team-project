(this.webpackJsonpproj=this.webpackJsonpproj||[]).push([[0],{220:function(e,t,n){e.exports=n(342)},339:function(e,t,n){},342:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),i=n.n(o),c=n(12),l=n(13),u=n(15),s=n(14),p=n(41),m=n(399),h=n(26),f=n(203),d=n(42),b=n(126),v=n.n(b),g=n(135);function O(){var e=Object(p.a)(["\n    .ListItem{\n        width:100%;\n        height:150px;\n        padding:10px;\n    }\n    .checked{\n        box-shadow:0px 0px 10px #afafaf;\n        background:rgb(234, 244, 252);\n    }\n    &:hover{background:#f2f2f2;}\n    svg{\n        font-size:20px;\n        cursor:pointer;\n        color:#58e2b6;\n        &:hover{\n            color:#ff7b7c;\n        }\n    }\n    \n"]);return O=function(){return e},e}var y=d.a.div(O()),E=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.quiz,n=e.onRemove,a=e.onSelect,o=e.selectquiz,i=e.onItemMouseOver,c=e.hoverquiz;return r.a.createElement(y,null,o===t?r.a.createElement(f.a.Group,{className:v()("ListItem","checked")},r.a.createElement(f.a,{onClick:function(){a(t)}},r.a.createElement(f.a.Image,{size:"tiny",src:t.imgUrl}),r.a.createElement(f.a.Content,null,r.a.createElement(f.a.Header,{as:"a"},t.title),r.a.createElement(f.a.Description,null,r.a.createElement("p",null,t.price)),r.a.createElement(f.a.Extra,null,"Additional Details"),r.a.createElement(g.a,{onClick:function(){return n()}},"\uc81c\uac70")))):r.a.createElement(f.a.Group,{className:v()("ListItem")},r.a.createElement(f.a,{onClick:function(){a(t)},onMouseEnter:function(){i(t)},onMouseLeave:function(){i(!1)}},r.a.createElement(f.a.Image,{size:"tiny",src:t.imgUrl}),r.a.createElement(f.a.Content,null,r.a.createElement(f.a.Header,{as:"a"},t.title),r.a.createElement(f.a.Description,null,r.a.createElement("p",null,t.select1),r.a.createElement("p",null,t.select2),r.a.createElement("p",null,t.select3),r.a.createElement("p",null,t.select4)),r.a.createElement(f.a.Extra,null,"Additional Details"),c===t?r.a.createElement(g.a,{onClick:function(){return n()}},"\uc81c\uac70"):""))))}}]),n}(a.Component),z=n(188),j=n(397);function w(){var e=Object(p.a)(["\n    box-shadow:0px 0px 4px #b3b3b3;\n    height:100%;\n    overflow: scroll;\n    .center{\n        display:block;\n        margin:0 auto;\n    }\n"]);return w=function(){return e},e}var k=d.a.div(w()),q=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.quizs,n=e.onRemove,a=e.onSelect,o=e.onAddQuiz,i=e.selectquiz,c=e.onItemMouseOver,l=e.hoverquiz,u=t.map((function(e){return r.a.createElement(E,{quiz:e,onRemove:n,onSelect:a,onAddQuiz:o,selectquiz:i,onItemMouseOver:c,hoverquiz:l})}));return r.a.createElement(k,null,r.a.createElement(z.a,null,u),r.a.createElement(j.a,{variant:"contained",primary:!0,disableElevation:!0,className:"center",onClick:function(){return o()}},"Add question"))}}]),n}(a.Component);var C,Q,S,M,I=function(e){var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");e||(e=Math.floor(Math.random()*t.length));for(var n="",a=0;a<e;a++)n+=t[Math.floor(Math.random()*t.length)];return n},x=Object(h.b)("QuizStore")(C=Object(h.c)(C=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onRemove=function(){var t=e.props.QuizStore.selectquiz.ISBN;e.props.QuizStore.Remove(t)},e.onSelect=function(t){e.props.QuizStore.selectQuiz(t)},e.onAddQuiz=function(){alert("answer / true or false");var t={ISBN:I(5)};e.props.QuizStore.addQuiz(t)},e.onItemMouseOver=function(t){e.props.QuizStore.ItemMouseOver(t)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.QuizStore.getquizs,t=this.props.QuizStore.selectquiz,n=this.props.QuizStore.hoverquiz;return r.a.createElement(q,{quizs:e,onRemove:this.onRemove,onSelect:this.onSelect,onAddQuiz:this.onAddQuiz,selectquiz:t,onItemMouseOver:this.onItemMouseOver,hoverquiz:n})}}]),n}(a.Component))||C)||C,R=n(204),N=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(m.a,{columns:3,divided:!0},r.a.createElement(m.a.Column,null,r.a.createElement(R.a,{src:"https://react.semantic-ui.com/images/wireframe/media-paragraph.png"})),r.a.createElement(m.a.Column,null,r.a.createElement(R.a,{src:"https://react.semantic-ui.com/images/wireframe/media-paragraph.png"})),r.a.createElement(m.a.Column,null,r.a.createElement(R.a,{src:"https://react.semantic-ui.com/images/wireframe/media-paragraph.png"})))}}]),n}(a.Component),P=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,null))}}]),n}(a.Component),B=n(394),A=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.quiz,n=e.setQuiz;return r.a.createElement(B.a.Group,{widths:"equal"},r.a.createElement(B.a.Input,{fluid:!0,label:"Title",placeholder:"Title",value:t&&t.title?t.title:"",onChange:function(e){return n("title",e.target.value)}}))}}]),n}(a.Component),D=Object(h.b)("QuizStore")(Q=Object(h.c)(Q=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).setQuiz=function(t,n){console.log(n),e.props.QuizStore.setQuizProps(t,n)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.QuizStore.getselectquiz;return r.a.createElement("div",null,r.a.createElement(A,{quiz:e,setQuiz:this.setQuiz}))}}]),n}(a.Component))||Q)||Q,T=n(189),L=n(384),G=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.quiz,n=e.setQuiz;return r.a.createElement(m.a,{columns:2,divided:!0},r.a.createElement(T.a,null,r.a.createElement(m.a.Column,null,r.a.createElement(L.a,{placeholder:"Tell us more",value:t&&t.select1?t.select1:"",onChange:function(e){return n("select1",e.target.value)}})),r.a.createElement(m.a.Column,null,r.a.createElement(L.a,{placeholder:"Tell us more",value:t&&t.select2?t.select2:"",onChange:function(e){return n("select2",e.target.value)}}))),r.a.createElement(T.a,null,r.a.createElement(m.a.Column,null,r.a.createElement(L.a,{placeholder:"Tell us more",value:t&&t.select3?t.select3:"",onChange:function(e){return n("select3",e.target.value)}})),r.a.createElement(m.a.Column,null,r.a.createElement(L.a,{placeholder:"Tell us more",value:t&&t.select4?t.select4:"",onChange:function(e){return n("select4",e.target.value)}}))))}}]),n}(a.Component),J=Object(h.b)("QuizStore")(S=Object(h.c)(S=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).setQuiz=function(t,n){e.props.QuizStore.setQuizProps(t,n)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.QuizStore.getselectquiz;return r.a.createElement("div",null,r.a.createElement(G,{quiz:e,setQuiz:this.setQuiz}))}}]),n}(a.Component))||S)||S,U=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.onModify;return r.a.createElement(m.a,{columns:"three",divided:!0,style:{margin:"0"}},r.a.createElement(m.a.Row,null,r.a.createElement(m.a.Column,null,r.a.createElement(D,null))),r.a.createElement(m.a.Row,null,r.a.createElement(m.a.Column,null,r.a.createElement(P,null))),r.a.createElement(m.a.Row,null,r.a.createElement(m.a.Column,null,r.a.createElement(J,null))),r.a.createElement(j.a,{primary:!0,onClick:e},"\uc218\uc815\ud558\uae30"))}}]),n}(a.Component),W=Object(h.b)("QuizStore")(M=Object(h.c)(M=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onModify=function(){var t=e.props.QuizStore.getselectquiz;e.props.QuizStore.Modify(t)},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(U,{onModify:this.onModify}))}}]),n}(a.Component))||M)||M,H=n(134),F=n(45),_=n(385),K=n(24),V=n(202),X=n(393),Z=n(389),$=n(390),Y=n(388),ee=n(391),te=n(396),ne=n(398),ae=n(395),re=n(200),oe=n.n(re),ie=n(201),ce=n.n(ie),le=n(132),ue=n.n(le),se=n(392),pe=n(103);function me(){var e=Object(p.a)(["\n    .MuiToolbar-root{\n        height:80px;\n    }\n"]);return me=function(){return e},e}var he=d.a.div(me()),fe={marginRight:"10px",color:"#fff"},de={fontSize:"2rem"},be=Object(_.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(F.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(F.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(K.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(K.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(F.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}})),ve=Object(V.a)({palette:{primary:pe.a}});function ge(){var e=be(),t=r.a.useState(null),n=Object(H.a)(t,2),a=n[0],o=n[1],i=r.a.useState(null),c=Object(H.a)(i,2),l=c[0],u=c[1],s=Boolean(a),p=Boolean(l),m=function(e){o(e.currentTarget)},h=function(){u(null)},f=function(){o(null),h()},d="primary-search-account-menu",b=r.a.createElement(ae.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},id:d,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:s,onClose:f},r.a.createElement(ne.a,{onClick:f},"Profile"),r.a.createElement(ne.a,{onClick:f},"My account")),v=r.a.createElement(ae.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:p,onClose:h},r.a.createElement(ne.a,{onClick:m},r.a.createElement(Y.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(ue.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement(he,{className:e.grow},r.a.createElement(Z.a,{position:"static"},r.a.createElement($.a,null,r.a.createElement(Y.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(oe.a,{style:de})),r.a.createElement(ee.a,{className:e.title,variant:"h6",noWrap:!0},"Myungho"),r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(ce.a,null)),r.a.createElement(te.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement(se.a,{variant:"contained",color:"secondary",style:fe},"Exit"),r.a.createElement(X.a,{theme:ve},r.a.createElement(se.a,{variant:"contained",color:"primary",className:e.margin,style:fe},"Done")),r.a.createElement(Y.a,{edge:"end","aria-label":"account of current user","aria-controls":d,"aria-haspopup":"true",onClick:m,color:"inherit"},r.a.createElement(ue.a,{style:de}))))),v,b)}n(339);function Oe(){var e=Object(p.a)(["\n"]);return Oe=function(){return e},e}var ye=d.a.div(Oe()),Ee=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e={padding:"0px",height:"100%"};return r.a.createElement(ye,{style:e,className:"navStyle"},r.a.createElement(ge,null),r.a.createElement(m.a,{columns:2,divided:!0,style:{height:"100%",margin:"0px"}},r.a.createElement(m.a.Row,{style:e},r.a.createElement(m.a.Column,{width:3,style:e},r.a.createElement(x,null)),r.a.createElement(m.a.Column,{width:13},r.a.createElement(W,null)))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ze,je,we,ke,qe=n(133),Ce=n(104),Qe=n(28),Se=(n(340),n(8)),Me=[{ISBN:"9781617293986",title:"Spring Microservices in Action",author:"John Carnell",publisher:"Manning",price:59.92,imgUrl:"book_images/spring.jpg",introduce:"Spring Boot and Spring Cloud offer Java developers an easy migration path from traditional monolithic Spring applications to microservice-based applications that can be deployed to multiple cloud platforms."},{ISBN:"9781491954621",title:"Learning React",author:"Alex Banks , Eve Porcello",publisher:"O`Relly",price:49.19,imgUrl:"book_images/react.jpg",introduce:"Interested in React but find yourself confused about how to use it with the Flux architecture? This is your book."}],Ie=new(ze=function(){function e(){Object(c.a)(this,e),Object(Ce.a)(this,"quizs",je,this),Object(Ce.a)(this,"selectquiz",we,this),Object(Ce.a)(this,"hoverquiz",ke,this)}return Object(l.a)(e,[{key:"setQuizProps",value:function(e,t){console.log(e),this.selectquiz=Object(qe.a)(Object(qe.a)({},this.selectquiz),{},Object(F.a)({},e,t))}},{key:"Remove",value:function(e){this.quizs=this.quizs.filter((function(t){return t.ISBN!==e}))}},{key:"selectQuiz",value:function(e){this.selectquiz=e}},{key:"ItemMouseOver",value:function(e){this.hoverquiz=e}},{key:"addQuiz",value:function(e){this.quizs.push(e)}},{key:"Modify",value:function(e){this.quizs=this.quizs.map((function(t){return t.ISBN===e.ISBN?e:t}))}},{key:"getquizs",get:function(){return this.quizs?this.quizs.slice():[]}},{key:"getselectquiz",get:function(){return this.selectquiz?this.selectquiz:{}}}]),e}(),je=Object(Qe.a)(ze.prototype,"quizs",[Se.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Me}}),we=Object(Qe.a)(ze.prototype,"selectquiz",[Se.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Me[0]}}),ke=Object(Qe.a)(ze.prototype,"hoverquiz",[Se.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Object(Qe.a)(ze.prototype,"getquizs",[Se.g],Object.getOwnPropertyDescriptor(ze.prototype,"getquizs"),ze.prototype),Object(Qe.a)(ze.prototype,"getselectquiz",[Se.g],Object.getOwnPropertyDescriptor(ze.prototype,"getselectquiz"),ze.prototype),Object(Qe.a)(ze.prototype,"setQuizProps",[Se.f],Object.getOwnPropertyDescriptor(ze.prototype,"setQuizProps"),ze.prototype),Object(Qe.a)(ze.prototype,"Remove",[Se.f],Object.getOwnPropertyDescriptor(ze.prototype,"Remove"),ze.prototype),Object(Qe.a)(ze.prototype,"selectQuiz",[Se.f],Object.getOwnPropertyDescriptor(ze.prototype,"selectQuiz"),ze.prototype),Object(Qe.a)(ze.prototype,"ItemMouseOver",[Se.f],Object.getOwnPropertyDescriptor(ze.prototype,"ItemMouseOver"),ze.prototype),Object(Qe.a)(ze.prototype,"addQuiz",[Se.f],Object.getOwnPropertyDescriptor(ze.prototype,"addQuiz"),ze.prototype),Object(Qe.a)(ze.prototype,"Modify",[Se.f],Object.getOwnPropertyDescriptor(ze.prototype,"Modify"),ze.prototype),ze);n(341);i.a.render(r.a.createElement(h.a,{QuizStore:Ie},r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[220,1,2]]]);
//# sourceMappingURL=main.aab4bd5e.chunk.js.map