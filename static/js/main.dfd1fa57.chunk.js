(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){},133:function(e,t,c){},134:function(e,t,c){},135:function(e,t,c){},136:function(e,t,c){},137:function(e,t,c){},140:function(e,t,c){},141:function(e,t,c){},142:function(e,t,c){"use strict";c.r(t);var s=c(4),n=c.n(s),i=c(27),a=c.n(i),r=(c(105),c(106),c(16)),o=c(18),l=(c(107),c(88)),j=c.n(l),d=c(89),h=c.n(d),b=c(90),u=c.n(b),x=c(5);var O=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],n=t[1],i=Object(o.f)(),a=function(){window.scrollY>100?n(!0):n(!1)};return Object(s.useEffect)((function(){window.addEventListener("scroll",a)})),Object(x.jsx)("div",{className:"nav ".concat(c&&"nav__black"),children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("div",{className:"left",children:[Object(x.jsx)("img",{onClick:function(){i.push("/")},src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",alt:""}),Object(x.jsx)("span",{id:"home",onClick:function(){i.push("/")},children:"Homepage"}),Object(x.jsx)("span",{id:"series",onClick:function(){i.push("/tvshows")},children:"Series"}),Object(x.jsx)("span",{id:"movies",onClick:function(){i.push("/movies")},children:"Movies"}),Object(x.jsx)("span",{children:"New and Popular"}),Object(x.jsx)("span",{children:"My List"})]}),Object(x.jsxs)("div",{className:"right",children:[Object(x.jsx)(j.a,{className:"icon"}),Object(x.jsx)("span",{children:"KID"}),Object(x.jsx)(h.a,{className:"icon"}),Object(x.jsx)("img",{onClick:function(){i.push("/profile")},src:"https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",alt:""}),Object(x.jsxs)("div",{className:"profile",children:[Object(x.jsx)(u.a,{className:"icon"}),Object(x.jsxs)("div",{className:"options",children:[Object(x.jsx)("span",{children:"Settings"}),Object(x.jsx)("span",{children:"Logout"})]})]})]})]})})},m=c(0),f=c.n(m),p=c(1),v=c(91),g=c.n(v).a.create({baseURL:"https://api.themoviedb.org/3"}),N="0811f7cab26d0c41f14c7646a7597b0d",y={fetchTrending:"/trending/all/week?api_key=".concat(N,"&language=en-US"),fetchNetflixoriginals:"/discover/tv?api_key=".concat(N,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(N,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(N,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(N,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(N,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(N,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(N,"&with_genres=99")},w=c(64),k=c.n(w),M=c(92),U=c.n(M),S=c(93),R=c.n(S);c(133);var C=function(e){var t,c,n=e.category,i=Object(s.useState)([]),a=Object(r.a)(i,2),o=a[0],l=a[1];return Object(s.useEffect)((function(){function e(){return(e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get(y.fetchNetflixoriginals);case 2:return t=e.sent,l(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(x.jsx)("div",{className:"wrapper",children:Object(x.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===o||void 0===o?void 0:o.backdrop_path,'")'),backgroundPosition:"center center"},children:[n&&Object(x.jsxs)("div",{className:"category",children:[Object(x.jsx)("span",{children:"movies"===n?"Movies":"Series"}),Object(x.jsxs)("select",{name:"genre",id:"genre",children:[Object(x.jsx)("option",{children:"Genre"}),Object(x.jsx)("option",{value:"adventure",children:"Adventure"}),Object(x.jsx)("option",{value:"comedy",children:"Comedy"}),Object(x.jsx)("option",{value:"crime",children:"Crime"}),Object(x.jsx)("option",{value:"fantasy",children:"Fantasy"}),Object(x.jsx)("option",{value:"historical",children:"Historical"}),Object(x.jsx)("option",{value:"horror",children:"Horror"}),Object(x.jsx)("option",{value:"romance",children:"Romance"}),Object(x.jsx)("option",{value:"sci-fi",children:"Sci-fi"}),Object(x.jsx)("option",{value:"thriller",children:"Thriller"}),Object(x.jsx)("option",{value:"western",children:"Western"}),Object(x.jsx)("option",{value:"animation",children:"Animation"}),Object(x.jsx)("option",{value:"drama",children:"Drama"}),Object(x.jsx)("option",{value:"documentary",children:"Documentary"})]})]}),Object(x.jsxs)("div",{className:"detailsContainer",children:[Object(x.jsx)("h1",{className:"title",children:(null===o||void 0===o?void 0:o.name)||(null===o||void 0===o?void 0:o.title)||(null===o||void 0===o?void 0:o.original_name)}),Object(x.jsx)("h1",{className:"description",children:(t=null===o||void 0===o?void 0:o.overview,c=150,(null===t||void 0===t?void 0:t.length)>c?t.substr(0,c-1)+"...":t)}),Object(x.jsxs)("div",{className:"buttons",children:[Object(x.jsx)("button",{className:"button play",children:Object(x.jsxs)("div",{className:"btnAlign",children:[Object(x.jsx)(k.a,{}),Object(x.jsx)("span",{children:"Play"})]})}),Object(x.jsx)("button",{className:"button more",children:Object(x.jsxs)("div",{className:"btnAlign",children:[Object(x.jsx)(U.a,{}),Object(x.jsx)("span",{children:"More Info"})]})})]})]}),Object(x.jsxs)("div",{className:"ratingContainer",children:[Object(x.jsx)(R.a,{className:"icon"}),Object(x.jsx)("div",{className:"ageRating",children:Object(x.jsx)("span",{children:"13+"})})]}),Object(x.jsx)("div",{className:"fadeBottom"})]})})},_=c(95),A=c.n(_),T=c(67),D=c(166),I=c(165),E=c(163),H=c(164);c(134);var L=function(e){var t=e.poster,c=Object(T.a)((function(e){return{tooltip:{backgroundColor:e.palette.common.white,color:"rgba(0, 0, 0, 0.87)",boxShadow:e.shadows[1],fontSize:20,fontWeight:700,padding:"10px"}}}))(D.a);return Object(x.jsx)("div",{className:"slide",children:Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("img",{src:t,alt:""}),Object(x.jsxs)("div",{className:"buttons",children:[Object(x.jsxs)("div",{className:"left",children:[Object(x.jsx)(k.a,{className:"icon play"}),Object(x.jsx)(c,{title:"Add to My List",placement:"top",arrow:!0,children:Object(x.jsx)(A.a,{className:"icon"})}),Object(x.jsx)(c,{title:"I Like this",placement:"top",arrow:!0,children:Object(x.jsx)(E.a,{className:"icon"})}),Object(x.jsx)(c,{title:"Not for me",placement:"top",arrow:!0,children:Object(x.jsx)(H.a,{className:"icon"})})]}),Object(x.jsx)("div",{className:"right",children:Object(x.jsx)(c,{title:"More info",placement:"top",arrow:!0,children:Object(x.jsx)(I.a,{className:"icon"})})})]}),Object(x.jsxs)("div",{className:"details",children:[Object(x.jsx)("h5",{children:"97% match"}),Object(x.jsx)("span",{className:"ageRating",children:"13+"}),Object(x.jsx)("h6",{children:"1h 20min"}),Object(x.jsx)("span",{className:"videoQuality",children:"HD"})]}),Object(x.jsxs)("div",{className:"genre",children:[Object(x.jsx)("span",{children:"Action"}),Object(x.jsx)("div",{className:"dot"}),Object(x.jsx)("span",{children:"Comedy"}),Object(x.jsx)("div",{className:"dot"}),Object(x.jsx)("span",{children:"Drama"})]})]})})};c(135);var W=function(e){var t=e.title,c=e.fetchUrl,n=e.isLargeRow,i=void 0!==n&&n,a=Object(s.useState)([]),o=Object(r.a)(a,2),l=o[0],j=o[1];return Object(s.useEffect)((function(){function e(){return(e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get(c);case 2:return t=e.sent,j(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("h1",{children:t}),Object(x.jsx)("div",{className:"posters",children:l.map((function(e){return(i&&e.poster_path||!i&&e.backdrop_path)&&Object(x.jsx)(L,{poster:"".concat("https://image.tmdb.org/t/p/original").concat(e.backdrop_path)})}))})]})},P=c(38),B=c(69),z=Object(B.b)({name:"user",initialState:{user:null,category:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null},setCategory:function(e,t){e.category=t.payload}}}),G=z.actions,K=G.login,F=G.logout,J=(G.setCategory,function(e){return e.user.user}),Y=function(e){return e.user.category},q=z.reducer;c(136);var Q=function(){var e=Object(P.c)(Y);return Object(x.jsxs)("div",{className:"homeScreen",children:[Object(x.jsx)(O,{}),Object(x.jsx)(C,{category:e}),Object(x.jsx)(W,{title:"Netflix Originals",fetchUrl:y.fetchNetflixoriginals,isLargeRow:!0}),Object(x.jsx)(W,{title:"Trending Now",fetchUrl:y.fetchTrending}),Object(x.jsx)(W,{title:"Top Rated",fetchUrl:y.fetchTopRated}),Object(x.jsx)(W,{title:"Action Movies",fetchUrl:y.fetchActionMovies}),Object(x.jsx)(W,{title:"Comedy Movies",fetchUrl:y.fetchComedyMovies}),Object(x.jsx)(W,{title:"Horror Movies",fetchUrl:y.fetchHorrorMovies}),Object(x.jsx)(W,{title:"Romance Movies",fetchUrl:y.fetchRomanceMovies}),Object(x.jsx)(W,{title:"Documentaries",fetchUrl:y.fetchDocumentaries})]})},V=(c(137),c(75)),$=(c(144),c(138),V.a.initializeApp({apiKey:"AIzaSyBqehK2vWnkS9-v7Rh2bGGpu_Wgkr3YjI8",authDomain:"netflix-clone-dd12c.firebaseapp.com",databaseURL:"https://netflix-clone-dd12c-default-rtdb.europe-west1.firebasedatabase.app",projectId:"netflix-clone-dd12c",storageBucket:"netflix-clone-dd12c.appspot.com",messagingSenderId:"864634775014",appId:"1:864634775014:web:6541040386fb489a3ae227"}).firestore(),V.a.auth());c(140);var X=function(){var e=Object(s.useRef)(null),t=Object(s.useRef)(null);return Object(x.jsx)("div",{className:"signInScreen",children:Object(x.jsxs)("form",{children:[Object(x.jsx)("h1",{children:"Sign In"}),Object(x.jsx)("input",{ref:e,type:"email",placeholder:"Email"}),Object(x.jsx)("input",{ref:t,type:"password",placeholder:"Password"}),Object(x.jsx)("button",{onClick:function(c){c.preventDefault(),$.signInWithEmailAndPassword(e.current.value,t.current.value).then((function(e){console.log(e)})).catch((function(e){alert(e.message)}))},type:"submit",children:"Sign In"}),Object(x.jsxs)("h4",{children:[Object(x.jsx)("span",{className:"gray",children:"New to Netflix? "}),Object(x.jsx)("span",{className:"link",onClick:function(c){c.preventDefault(),$.createUserWithEmailAndPassword(e.current.value,t.current.value).then((function(e){console.log(e)})).catch((function(e){alert(e.message)}))},children:"Sign Up now."})]})]})})};var Z=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(x.jsxs)("div",{className:"login",children:[Object(x.jsx)("img",{src:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:"",className:"logo"}),Object(x.jsx)("button",{onClick:function(){return n(!0)},className:"button",children:"Sign In"}),Object(x.jsx)("div",{className:"gradient"}),Object(x.jsx)("div",{className:"body",children:c?Object(x.jsx)(X,{}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:"Unlimited films, TV programmes and more."}),Object(x.jsx)("h2",{children:"Watch anywhere. Cancel at anytime "}),Object(x.jsx)("h3",{children:"Ready to start enter your email to create or restart your membership."}),Object(x.jsx)("div",{className:"input",children:Object(x.jsxs)("form",{action:"",children:[Object(x.jsx)("input",{type:"email",placeholder:"Email Address"}),Object(x.jsx)("button",{onClick:function(){return n(!0)},className:"getstarted",children:"GET STARTED"})]})})]})})]})};c(141);var ee=function(){var e=Object(P.c)(J);return Object(x.jsxs)("div",{className:"profileScreen",children:[Object(x.jsx)(O,{}),Object(x.jsxs)("div",{className:"body",children:[Object(x.jsx)("h1",{children:"Edit Profile"}),Object(x.jsxs)("div",{className:"info",children:[Object(x.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:"Avatar"}),Object(x.jsxs)("div",{className:"details",children:[Object(x.jsx)("h2",{children:e.email}),Object(x.jsx)("div",{className:"plans",children:Object(x.jsx)("button",{onClick:function(){return $.signOut()},className:"signout",children:"Sign Out"})})]})]})]})]})},te=c(96);var ce=function(){return Object(x.jsxs)("div",{className:"tvshows",children:[Object(x.jsx)(O,{}),Object(x.jsx)(C,{category:"Series"}),Object(x.jsx)(W,{title:"Netflix Originals",fetchUrl:y.fetchNetflixoriginals,isLargeRow:!0}),Object(x.jsx)(W,{title:"Trending Now",fetchUrl:y.fetchTrending}),Object(x.jsx)(W,{title:"Top Rated",fetchUrl:y.fetchTopRated}),Object(x.jsx)(W,{title:"Action Movies",fetchUrl:y.fetchActionMovies}),Object(x.jsx)(W,{title:"Comedy Movies",fetchUrl:y.fetchComedyMovies}),Object(x.jsx)(W,{title:"Horror Movies",fetchUrl:y.fetchHorrorMovies}),Object(x.jsx)(W,{title:"Romance Movies",fetchUrl:y.fetchRomanceMovies}),Object(x.jsx)(W,{title:"Documentaries",fetchUrl:y.fetchDocumentaries})]})};var se=function(){return Object(x.jsxs)("div",{className:"movies",children:[Object(x.jsx)(O,{}),Object(x.jsx)(C,{category:"movies"}),Object(x.jsx)(W,{title:"Netflix Originals",fetchUrl:y.fetchNetflixoriginals,isLargeRow:!0}),Object(x.jsx)(W,{title:"Trending Now",fetchUrl:y.fetchTrending}),Object(x.jsx)(W,{title:"Top Rated",fetchUrl:y.fetchTopRated}),Object(x.jsx)(W,{title:"Action Movies",fetchUrl:y.fetchActionMovies}),Object(x.jsx)(W,{title:"Comedy Movies",fetchUrl:y.fetchComedyMovies}),Object(x.jsx)(W,{title:"Horror Movies",fetchUrl:y.fetchHorrorMovies}),Object(x.jsx)(W,{title:"Romance Movies",fetchUrl:y.fetchRomanceMovies}),Object(x.jsx)(W,{title:"Documentaries",fetchUrl:y.fetchDocumentaries})]})};var ne=function(){var e=Object(P.c)(J),t=Object(P.b)();return Object(s.useEffect)((function(){return $.onAuthStateChanged((function(e){t(e?K({uid:e.uid,email:e.email}):F())}))}),[t]),Object(x.jsx)("div",{className:"app",children:Object(x.jsx)(te.a,{children:e?Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{path:"/profile",children:Object(x.jsx)(ee,{})}),Object(x.jsx)(o.a,{exact:!0,path:"/",children:Object(x.jsx)(Q,{})}),Object(x.jsx)(o.a,{path:"/tvshows",children:Object(x.jsx)(ce,{})}),Object(x.jsx)(o.a,{path:"/movies",children:Object(x.jsx)(se,{})})]}):Object(x.jsx)(Z,{})})})},ie=Object(B.a)({reducer:{user:q}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(P.a,{store:ie,children:Object(x.jsx)(ne,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[142,1,2]]]);
//# sourceMappingURL=main.dfd1fa57.chunk.js.map