(this["webpackJsonpvidly-app"]=this["webpackJsonpvidly-app"]||[]).push([[0],{36:function(e,t,a){e.exports=a(69)},41:function(e,t,a){},42:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),o=(a(41),a(42),a(26)),i=a(4),s=a(10),u=a(6),m=a(5),d=a(7),b=[{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"}];function h(){return b.filter((function(e){return e}))}var f=[{_id:"5b21ca3eeb7f6fbccd471815",title:"Terminator",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:6,dailyRentalRate:2.5,publishDate:"2018-01-03T19:04:28.809Z"},{_id:"5b21ca3eeb7f6fbccd471816",title:"Die Hard",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:5,dailyRentalRate:2.5},{_id:"5b21ca3eeb7f6fbccd471817",title:"Get Out",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:8,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471819",title:"Trip to Italy",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181a",title:"Airplane",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181b",title:"Wedding Crashers",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181e",title:"Gone Girl",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:7,dailyRentalRate:4.5},{_id:"5b21ca3eeb7f6fbccd47181f",title:"The Sixth Sense",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:4,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471821",title:"The Avengers",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:7,dailyRentalRate:3.5}];var p=a(14),v=a.n(p),g=function(e){var t=e.itemsCount,a=e.pageSize,n=e.onPageChange,l=e.currentPage,c=Math.ceil(t/a);if(1===c)return null;var o=v.a.range(1,c+1);return r.a.createElement("nav",{"aria-label":"Page navigation example"},r.a.createElement("ul",{className:"pagination"},o.map((function(e){return r.a.createElement("li",{className:"page-item ".concat(e===l?"active":""),key:e},r.a.createElement("button",{style:{cursor:"pointer"},className:"page-link",onClick:function(){return n(e)}},e))}))))};var y=function(e){var t=e.items,a=e.selectedItem,n=e.onItemSelect,l=e.textProperty,c=e.valueProperty;return r.a.createElement("ul",{className:"list-group"},t.map((function(e){return r.a.createElement("li",{style:{cursor:"pointer"},key:e[c],className:"list-group-item ".concat(a===e?"active":""),onClick:function(){return n(e)}},e[l])})))};y.defaultProps={textProperty:"name",valueProperty:"_id"};var E=y,S=function(e){var t=e.liked,a=e.handleLike;return r.a.createElement("i",{style:{cursor:"pointer"},onClick:a,className:"fa fa-heart".concat(!0!==t?"-o":"")})},k=a(18),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).raiseSort=function(e){var t=Object(k.a)({},a.props.sortColumn);t.path===e?t.order="asc"===t.order?"desc":"asc":(t.path=e,t.order="asc"),a.props.onSort(t)},a.renderSortIcon=function(e){var t=a.props.sortColumn;return e.path!==t.path?null:"asc"===t.order?r.a.createElement("i",{className:"fa fa-sort-asc"}):r.a.createElement("i",{className:"fa fa-sort-desc"})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.columns;return r.a.createElement("thead",{className:"clickable"},r.a.createElement("tr",null,t.map((function(t){return r.a.createElement("th",{key:t.path||t.key,onClick:function(){return e.raiseSort(t.path)}},t.label,e.renderSortIcon(t))}))))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).renderCell=function(e,t){return t.content?t.content(e):v.a.get(e,t.path)},a.createKey=function(e,t){return e[a.props.valueProperty]+(t.path||t.key)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.columns,l=t.valueProperty;return r.a.createElement("tbody",null,a.map((function(t){return r.a.createElement("tr",{key:t[l]},n.map((function(a){return r.a.createElement("td",{key:e.createKey(t,a)},e.renderCell(t,a))})))})))}}]),t}(n.Component);O.defaultProps={textProperty:"name",valueProperty:"_id"};var C=O,N=function(e){var t=e.columns,a=e.onSort,n=e.sortColumn,l=e.data;return r.a.createElement("table",{className:"table"},r.a.createElement(j,{columns:t,onSort:a,sortColumn:n}),r.a.createElement(C,{data:l,columns:t}))},_=a(11),R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).columns=[{path:"title",label:"Title",content:function(e){return r.a.createElement(_.b,{to:"/movies/".concat(e._id)},e.title)}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",content:function(e){return r.a.createElement(S,{handleLike:function(){return a.props.onLike(e)},liked:e.isLiked})}},{key:"delete",content:function(e){return r.a.createElement("button",{onClick:function(){a.props.onDelete(e)},className:"btn btn-sm btn-danger"},"Delete")}}],a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.movies,a=e.onSort,n=e.sortColumn;return r.a.createElement(N,{columns:this.columns,data:t,onSort:a,sortColumn:n})}}]),t}(n.Component),I=function(e){var t=e.value,a=e.onChange;return r.a.createElement("input",{type:"text",name:"query",className:"form-control my-3",placeholder:"Search...",value:t,onChange:function(e){return a(e.currentTarget.value)}})},w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[],pageSize:4,currentPage:1,genres:[],selectedGenre:null,searchQuery:"",sortColumn:{path:"title",order:"asc"}},a.handleDelete=function(e){var t=a.state.movies.filter((function(t){return t._id!==e._id}));a.setState({movies:t})},a.handleLike=function(e){var t=Object(o.a)(a.state.movies),n=a.state.movies.findIndex((function(t){return t._id===e._id}));!0===t[n].isLiked?t[n].isLiked=!1:t[n].isLiked=!0,a.setState({movies:t})},a.handlePageChange=function(e){a.setState({currentPage:e})},a.handleGenreSelect=function(e){a.setState({selectedGenre:e,currentPage:1,searchQuery:""})},a.handleSort=function(e){a.setState({sortColumn:e})},a.handleSearch=function(e){a.setState({selectedGenre:null,searchQuery:e,currentPage:1})},a.getPageData=function(){var e=a.state,t=e.pageSize,n=e.currentPage,r=e.movies,l=e.selectedGenre,c=e.sortColumn,o=e.searchQuery,i=r;o?i=r.filter((function(e){return e.title.toLowerCase().startsWith(o.toLowerCase())})):l&&l._id&&r.filter((function(e){return e.genre._id===l._id}));var s=function(e,t,a){var n=(t-1)*a;return v()(e).slice(n).take(a).value()}(v.a.orderBy(i,[c.path],[c.order]),n,t);return{totalCount:s.length,movies:s}},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=[{_id:"",name:"All Genres"}].concat(Object(o.a)(h()));this.setState({movies:f,genres:e,selectedGenre:e[0]})}},{key:"render",value:function(){var e=this.state,t=e.pageSize,a=e.currentPage,n=e.movies,l=e.genres,c=e.selectedGenre,o=e.sortColumn,i=e.searchQuery;if(0===n.length)return r.a.createElement("h1",null,"there are no movies");var s=this.getPageData(),u=s.totalCount,m=s.movies;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"},r.a.createElement(E,{items:l,selectedItem:c,onItemSelect:this.handleGenreSelect})),r.a.createElement("div",{className:"col"},r.a.createElement(_.b,{to:"/movies/new",className:"btn btn-primary mb-2"},"New Movie"),r.a.createElement("h1",null,"there are ",u," movies in the database"),r.a.createElement(I,{value:i,onChange:this.handleSearch}),r.a.createElement(R,{movies:m,onDelete:this.handleDelete,onLike:this.handleLike,onSort:this.handleSort,sortColumn:o}),r.a.createElement(g,{itemsCount:u,pageSize:t,onPageChange:this.handlePageChange,currentPage:a}))))}}]),t}(n.Component),P=a(15),G=a(35),L=function(){return r.a.createElement("h1",null,"Customers")},D=function(){return r.a.createElement("h1",null,"Rentals")},T=function(){return r.a.createElement("h1",null,"Not Found")},A=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(_.c,{className:"navbar-brand",to:"/movies"},"Vidly"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(_.c,{className:"nav-link",to:"/movies"},"Movies")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(_.c,{className:"nav-link",to:"/customers"},"Customers")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(_.c,{className:"nav-link",to:"/rentals"},"Rentals")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(_.c,{className:"nav-link",to:"/login"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(_.c,{className:"nav-link",to:"/register"},"Register")))))},x=a(19),M=a(9),q=a.n(M),F=a(21),B=function(e){var t=e.name,a=e.label,n=e.error,l=Object(F.a)(e,["name","label","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",Object.assign({},l,{name:t,id:t,className:"form-control",placeholder:t,autoComplete:"off"})),n&&r.a.createElement("div",{className:"alert alert-danger"},n))},U=function(e){var t=e.name,a=e.label,n=e.options,l=e.error,c=Object(F.a)(e,["name","label","options","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("select",Object.assign({},c,{name:t,id:t,className:"form-control"}),r.a.createElement("option",{value:""}),n.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.name)}))),l&&r.a.createElement("div",{className:"alert alert-danger"},l))},z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={data:{},errors:{}},a.validate=function(){var e=q.a.object(a.schema).validate(a.state.data,{abortEarly:!1}).error;if(!e)return null;var t={},n=!0,r=!1,l=void 0;try{for(var c,o=e.details[Symbol.iterator]();!(n=(c=o.next()).done);n=!0){var i=c.value;t[i.path[0]]=i.message}}catch(s){r=!0,l=s}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return t},a.validateProperty=function(e){var t=e.name,n=e.value,r=Object(x.a)({},t,n),l=q.a.object(Object(x.a)({},t,a.schema[t])).validate(r).error;return l?l.details[0].message:null},a.handleSubmit=function(e){e.preventDefault();var t=a.validate();a.setState({errors:t||{}}),t||a.doSubmit()},a.handleChange=function(e){var t=e.currentTarget,n=a.validateProperty(t),r=Object(k.a)({},a.state.errors);r[t.name]=n;var l=Object(k.a)({},a.state.data);l[t.name]=t.value,a.setState({data:l,errors:r})},a.renderButton=function(e){return r.a.createElement("button",{disabled:a.validate(),className:"btn btn-primary"},e)},a.renderSelect=function(e,t,n){var l=a.state,c=l.data,o=l.errors;return r.a.createElement(U,{name:e,value:c[e],label:t,options:n,onChange:a.handleChange,error:o[e]})},a.renderInput=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",l=a.state,c=l.data,o=l.errors;return r.a.createElement(B,{name:e,value:c[e],label:t,onChange:a.handleChange,error:o[e],type:n})},a}return Object(d.a)(t,e),t}(n.Component),Q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={data:{title:"",genreId:"",numberInStock:"",dailyRentalRate:""},errors:{},genres:[]},a.schema={_id:q.a.string(),title:q.a.string().required().label("Title"),genreId:q.a.string().required().label("Genre"),numberInStock:q.a.number().required().min(0).max(100).label("Number in Stock"),dailyRentalRate:q.a.number().required().min(0).max(10).label("Daily Rental Rate")},a.componentDidMount=function(){a.populateGenre(),a.populateMovie()},a.mapToViewModel=function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}},a.doSubmit=function(){!function(e){var t=f.find((function(t){return t._id===e._id}))||{};t.title=e.title,t.genre=b.find((function(t){return t._id===e.genreId})),t.numberInStock=e.numberInStock,t.dailyRentalRate=e.dailyRentalRate,t._id||(t._id=Date.now().toString(),f.push(t))}(a.state.data),a.props.history.push("/movies"),console.log("submitted Movie Form")},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"populateMovie",value:function(){var e=this.props.match.params.id;if("new"!==e){var t,a=(t=e,f.find((function(e){return e._id===t})));if(!a)return this.props.history.replace("/not-found");this.setState({data:this.mapToViewModel(a)})}}},{key:"populateGenre",value:function(){var e=h();this.setState({genres:e})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Movie Form"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("title","Title"),this.renderSelect("genreId","Genre",this.state.genres),this.renderInput("numberInStock","Number in Stock","number"),this.renderInput("dailyRentalRate","Rate"),this.renderButton("Save")))}}]),t}(z),V=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={data:{username:"",password:""},errors:{}},a.schema={username:q.a.string().required().label("Username"),password:q.a.string().required().label("Password")},a.doSubmit=function(){console.log("submitted")},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderButton("Login")))}}]),t}(z),W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={data:{username:"",password:"",name:""},errors:{}},a.schema={username:q.a.string().required().label("Username").email({minDomainSegments:2,tlds:{allow:["com","net"]}}),password:q.a.string().required().label("Password").min(5),name:q.a.string().required().label("Password")},a.doSubmit=function(){console.log("submitted")},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Register"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("username","Username","email"),this.renderInput("password","Psername","password"),this.renderInput("name","Name"),this.renderButton("Register")))}}]),t}(z);a(66);var J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,null),r.a.createElement(A,null),r.a.createElement("main",{className:"container"},r.a.createElement(P.d,null,r.a.createElement(P.b,{path:"/register",component:W}),r.a.createElement(P.b,{path:"/login",component:V}),r.a.createElement(P.b,{path:"/movies/:id",component:Q}),r.a.createElement(P.b,{path:"/movies",component:w}),r.a.createElement(P.b,{path:"/customers",component:L}),r.a.createElement(P.b,{path:"/rentals",component:D}),r.a.createElement(P.b,{path:"/not-found",component:T}),r.a.createElement(P.a,{from:"/",to:"/movies",exact:!0}),r.a.createElement(P.a,{to:"/not-found"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(67),a(68);console.log(Object({NODE_ENV:"production",PUBLIC_URL:""})),c.a.render(r.a.createElement(_.a,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.23bef9da.chunk.js.map