(this["webpackJsonptoto-shop"]=this["webpackJsonptoto-shop"]||[]).push([[0],{119:function(e,t,c){},121:function(e,t,c){"use strict";c.r(t);var n=c(4),s=c.n(n),i=c(62),a=c.n(i),r=c(8),l=c(19),o=c(17),j=c(12),d=(c(1),c(5),"https://toto-shop.herokuapp.com/menu"),u="https://toto-shop.herokuapp.com/slider",b="https://toto-shop.herokuapp.com/poster",h="https://toto-shop.herokuapp.com/products",m="https://toto-shop.herokuapp.com/news";var O=c(6),p=c(7),x=c(10),v=c(11),f=c(0);function g(e){var t=e.item,c=e.cls;return Object(f.jsx)("div",{className:c,children:Object(f.jsx)("img",{src:t.img,alt:t.name})})}c(75);var N=function(e){Object(x.a)(c,e);var t=Object(v.a)(c);function c(e){var n;return Object(O.a)(this,c),(n=t.call(this,e)).state={ITEMS:[]},n}return Object(p.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch(u).then((function(e){return e.json()})).then((function(t){e.setState({ITEMS:t})}));var t=document.querySelector(".carouzel-item:last-child");setInterval((function(){var e=document.querySelector(".carouzel-item.active");if(null!==e)if(e==t)(e=document.querySelector(".carouzel-item:first-child")).classList.add("active"),t.classList.remove("active");else{var c=e.nextElementSibling;null==c&&(c=document.querySelector(".carouzel-item:first-child")),e.classList.remove("active"),c.classList.add("active")}}),5e3)}},{key:"render",value:function(){var e=this.state.ITEMS;return Object(f.jsx)("div",{className:"carouzel",children:e.map((function(e,t){return Object(f.jsx)(g,{item:e,cls:0===t?"carouzel-item active":"carouzel-item "},e.id)}))})}}]),c}(s.a.Component),y=s.a.createContext(),w=function(e){var t=e.reducer,c=e.initialstate,s=e.children;return Object(f.jsx)(y.Provider,{value:Object(n.useReducer)(t,c),children:s})},S=function(){return Object(n.useContext)(y)};function k(e){return Object(f.jsxs)("div",{className:"section-heading",children:[Object(f.jsx)("h3",{children:e.children}),Object(f.jsx)("span",{className:"line-title",children:Object(f.jsx)("img",{src:"images/line.png",alt:""})})]})}function T(e){var t=e.item,c=e.setproductDetails,s=Object(n.useState)(""),i=Object(r.a)(s,2),a=i[0],o=i[1];return Object(f.jsxs)("div",{className:"product-item",children:[Object(f.jsx)(l.b,{to:"/product/"+t.plug,onClick:function(){return function(e){"function"==typeof c&&c(e)}(t)},children:Object(f.jsxs)("div",{className:"thumb",children:[t.img.map((function(e,t){return Object(f.jsx)("img",{className:"imgShow",src:e,alt:e},t)})),Object(f.jsx)("div",{className:"content",children:Object(f.jsx)("div",{className:"many-type",children:t.imgmalls.map((function(e,t){return Object(f.jsx)("img",{onMouseLeave:j,onMouseEnter:j,src:e.img,alt:e.img},t)}))})})]})}),Object(f.jsx)("div",{className:"price",children:Intl.NumberFormat("en-US").format(t.pirce)+" vnd"})]});function j(e){var t=e.target.closest(".thumb").querySelectorAll(".imgShow");if(t=t.length>1?t[t.length-1]:t[0],"mouseenter"===e.type){var c=e.target.src;o(t.src),t.src=c}else t.src=a}}c(80),c(48);var E=function(e){Object(x.a)(c,e);var t=Object(v.a)(c);function c(e){return Object(O.a)(this,c),t.call(this,e)}return Object(p.a)(c,[{key:"render",value:function(){var e=this.props,t=e.cls,c=e.products,n=e.title,s=e.setproductDetails,i=e.splitRow;return Object(f.jsxs)("div",{className:t,children:[Object(f.jsx)(k,{children:n}),Object(f.jsx)("div",{className:i?"colection-products colection-wapper row-to-split-2":"colection-products colection-wapper",children:c.map((function(e){return Object(f.jsx)(T,{item:e,setproductDetails:s},e.id)}))})]})}}]),c}(s.a.Component);function I(){var e=S(),t=Object(r.a)(e,2),c=t[0].products,i=(t[1],Object(n.useState)()),a=Object(r.a)(i,2),l=a[0],u=a[1],b=Object(n.useState)([]),h=Object(r.a)(b,2),m=h[0],O=h[1],p=Object(n.useState)(!1),x=Object(r.a)(p,2),v=x[0],g=x[1],y=Object(o.g)(),w=function(){return Object(f.jsx)("h3",{style:{fontStyle:"italic",fontFamily:"cursive",textAlign:"center",fontSize:30},children:"category item find of you is empty!"})},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(c,n){if(!c.hasOwnProperty(e)||!n.hasOwnProperty(e))return 0;var s="string"===typeof c[e]?c[e].toUpperCase():c[e],i="string"===typeof n[e]?n[e].toUpperCase():n[e],a=0;return s>i?a=1:s<i&&(a=-1),"desc"===t?-1*a:a}};return Object(n.useEffect)((function(){return fetch(d).then((function(e){return e.json()})).then((function(e){var t=e.find((function(e){return e.plug==y.id}));t&&u(t.id)})),function(){}})),Object(n.useEffect)((function(){if(l){var e=c.filter((function(e){return e.cartergoryID==l}));O(e)}return function(){}}),[l]),Object(f.jsx)(s.a.Fragment,{children:Object(f.jsxs)("section",{id:"main-content",children:[Object(f.jsx)(N,{}),Object(f.jsxs)("div",{className:"filter-bar",children:[Object(f.jsxs)("select",{className:"sort-bar",onChange:function(e){return function(e){var t;switch(e){case"des":t=m.sort(k("pirce","desc")),O(Object(j.a)(t));break;case"adc":t=m.sort(k("pirce")),O(Object(j.a)(t));break;case"az":t=m.sort(k("name")),O(Object(j.a)(t));break;case"za":t=m.sort(k("name","desc")),O(Object(j.a)(t))}}(e.target.value)},children:[Object(f.jsx)("option",{value:"des",children:"gi\u1ea3m d\u1ea7n "}),Object(f.jsx)("option",{value:"adc",children:"T\u0103ng  d\u1ea7n "}),Object(f.jsx)("option",{value:"az",children:"A -Z "}),Object(f.jsx)("option",{value:"za",children:"Z -A "})]}),Object(f.jsxs)("div",{className:"view-bar",children:[Object(f.jsx)("span",{onClick:function(){return g(!1)},className:"df",children:Object(f.jsx)("svg",{"aria-hidden":"true",focusable:"false",role:"presentation",className:"icon icon-grid-view",viewBox:"0 0 500 500",children:Object(f.jsx)("path",{d:"M231.3 232.1H5.8V6.6h225.6v225.5zm-190.5-35h155.6V41.6H40.8v155.5zM493.5 232.1H267.9V6.6h225.6v225.5zm-190.6-35h155.6V41.6H302.9v155.5zM231.3 493.1H5.8V267.6h225.6v225.5zm-190.5-35h155.6V302.6H40.8v155.5zM493.5 493.1H267.9V267.6h225.6v225.5zm-190.6-35h155.6V302.6H302.9v155.5z"})})}),Object(f.jsx)("span",{className:"two-line",onClick:function(){return g(!0)},children:Object(f.jsx)("svg",{"aria-hidden":"true",focusable:"false",role:"presentation",className:"icon icon-list-view",viewBox:"0 0 500 500",children:Object(f.jsx)("path",{d:"M493.5 232.1H5.8V6.6h487.7v225.5zm-452.7-35h417.7V41.6H40.8v155.5zM493.5 493.1H5.8V267.6h487.7v225.5zm-452.7-35h417.7V302.6H40.8v155.5z"})})})]})]}),(null===m||void 0===m?void 0:m.length)>0?Object(f.jsx)(E,{cls:"section-products category",products:m,splitRow:v}):Object(f.jsx)(w,{})]})})}function C(e){var t=e.item;return void 0==t?null:Object(f.jsx)("div",{className:"colections-item",children:Object(f.jsx)("div",{className:"thumb",children:Object(f.jsx)("img",{src:t.img,alt:t.img})})})}function F(e){var t=e.items;return Object(f.jsxs)(s.a.Fragment,{children:[Object(f.jsx)(C,{item:t[0]}),Object(f.jsx)("div",{className:"colections-item",children:Object(f.jsx)("div",{className:"list-products",children:t.map((function(e,t){return 0==t?null:Object(f.jsx)("div",{className:"product-item",children:Object(f.jsx)("img",{src:e.img,alt:e.img})},e.id)}))})})]})}c(81);var _=function(e){Object(x.a)(c,e);var t=Object(v.a)(c);function c(e){var n;return Object(O.a)(this,c),(n=t.call(this,e)).state={ITEMS:[],ITEMS_FULLWIDTH:[]},n}return Object(p.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch(b).then((function(e){return e.json()})).then((function(t){var c=t.filter((function(e){return 1===e.bannertype})),n=t.filter((function(e){return 2==e.bannertype}));e.setState({ITEMS:c,ITEMS_FULLWIDTH:n})}))}},{key:"render",value:function(){var e=this.props.style_modify,t=this.state,c=t.ITEMS,n=t.ITEMS_FULLWIDTH,s=void 0===e?"":"full-width";return void 0!==e?Object(f.jsx)("div",{className:"colections "+s,children:Object(f.jsx)(F,{items:n})}):Object(f.jsx)("div",{className:"colections ",children:c.map((function(e){return Object(f.jsx)(C,{item:e},e.id)}))})}}]),c}(s.a.Component);function M(e){var t=e.cls,c=e.item;return Object(f.jsxs)("div",{className:t,children:[Object(f.jsx)("div",{className:"thumb",children:Object(f.jsx)("img",{src:c.img,alt:c.img})}),Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)("h3",{className:"title green",children:c.title}),Object(f.jsx)("p",{children:c.description})]})]})}c(82);function D(e){var t=e.cls,c=e.item;return Object(f.jsxs)("div",{className:t,children:[Object(f.jsx)("div",{className:"thumb",children:Object(f.jsx)("img",{src:c.img,alt:c.img})}),Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)("h4",{children:c.title}),Object(f.jsx)("p",{className:"date",children:c.date}),Object(f.jsx)("p",{className:"plud",children:c.plug})]})]})}var q=function(e){Object(x.a)(c,e);var t=Object(v.a)(c);function c(e){var n;return Object(O.a)(this,c),(n=t.call(this,e)).state={ITEMS:[]},n}return Object(p.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch(m).then((function(e){return e.json()})).then((function(t){e.props.hot?e.setState({ITEMS:t.filter((function(e){return e.hot}))}):e.setState({ITEMS:t.filter((function(e){return!e.hot}))})})).then((function(){window.$(".news-slider").slick({slidesPerRow:4,arrows:!1,autoplay:!0,autoplaySpeed:2e3})}))}},{key:"render",value:function(){var e=this.props.cls,t=e.clsMain,c=e.clsChild,n=this.props.hot,s=this.state.ITEMS;return n?Object(f.jsx)("div",{className:t,children:s.map((function(e){return Object(f.jsx)(M,{item:e,cls:c},e.id)}))}):Object(f.jsx)("div",{className:t,children:s.map((function(e){return Object(f.jsx)(D,{item:e,cls:c},e.id)}))})}}]),c}(s.a.Component);var z=function(){var e=S(),t=Object(r.a)(e,2),c=t[0].products,i=t[1];return Object(n.useEffect)((function(){return fetch(h).then((function(e){return e.json()})).then((function(e){return i({type:"API_PRODUCTS",data:e})})),function(){}}),[]),Object(f.jsx)(s.a.Fragment,{children:Object(f.jsxs)("section",{id:"main-content",children:[Object(f.jsx)(N,{}),Object(f.jsx)(_,{}),Object(f.jsx)(_,{style_modify:"full"}),Object(f.jsx)(E,{cls:"section-products",title:"new arivals",products:c}),Object(f.jsxs)("div",{className:"section-news",children:[Object(f.jsx)(k,{children:"Tin t\u1ee9c m\u1ed7i ng\xe0y"}),Object(f.jsxs)("div",{className:"colection-wapper colection-news",children:[Object(f.jsx)(q,{hot:!0,cls:{clsMain:"news-slider",clsChild:"slider-item"}}),Object(f.jsxs)("div",{className:"list-news",children:[Object(f.jsx)(k,{children:"Tin t\u1ee9c m\u1ed7i ng\xe0y"}),Object(f.jsx)(q,{hot:!1,cls:{clsMain:"list-news-content",clsChild:"list-news-item"}})]})]})]}),Object(f.jsx)("section",{class:"pr-video",children:Object(f.jsx)("iframe",{width:"100%",height:"700px",src:"https://www.youtube.com/embed/xjrU3N8M4eo?autoplay=1&loop=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})}),Object(f.jsxs)("section",{className:"info-shop",children:[Object(f.jsx)(k,{children:"H\u1ec7 th\u1ed1ng c\u1eeda h\xe0ng"}),Object(f.jsxs)("div",{className:"shop-content",children:[Object(f.jsx)("img",{src:"https://storage.googleapis.com/cdn.nhanh.vn/store/7136/bn/sb_1570684484_63.jpg",alt:""}),Object(f.jsx)("div",{className:"text",children:"\u0110\u1ecba ch\u1ec9 hi\u1ec7n t\u1ea1i c\u1ee7a shop"}),Object(f.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n                                .shop-content {position: relative; }\n                                .text {position: absolute; top: 50%; left: 50%; background: rgba(255, 165, 0, 0.53); font-size: 2rem; text-transform: uppercase; padding: 15px 20px; transform: translate(-50%, -50%); color: rgb(0, 0, 0); cursor: pointer; border: 3px solid rgb(255, 255, 255); }\n                            "}})]})]})]})})},A=c(14);c(83);function L(e){var t=e.productDetails,c=S(),i=Object(r.a)(c,2),a=i[0],o=(a.products,a.carts),j=i[1],d=Object(n.useState)(),u=Object(r.a)(d,2),b=u[0],h=u[1],m=Object(n.useState)(),O=Object(r.a)(m,2),p=O[0],x=O[1],v=Object(n.useState)(),g=Object(r.a)(v,2),N=g[0],y=g[1],w=function(){return void 0==b?(alert("Please check for Quantity "),!1):void 0==N?(alert("Please check for colorImage "),!1):void 0!=p||(alert("Please check for size "),!1)};return Object(f.jsxs)(s.a.Fragment,{children:[Object(f.jsx)("div",{className:"box-left box-item",children:Object(f.jsx)("div",{className:"thumb",children:Object(f.jsx)("img",{src:t.img[0],alt:t.img[0]})})}),Object(f.jsxs)("div",{className:"box-right box-item",children:[Object(f.jsx)("h3",{className:"title",children:t.name}),Object(f.jsx)("p",{className:"price",children:Intl.NumberFormat("en-US").format(t.pirce)+" vnd"}),Object(f.jsx)("p",{className:"guide txt ",children:"H\u01b0\u1edbng d\u1eabn ch\u1ecdn size"}),Object(f.jsx)("div",{className:"box-wapper-3-small",children:t.imgmalls.map((function(e){return Object(f.jsx)("img",{className:N==e.img?"active":null,src:e.img,alt:e.img,onClick:function(t){return y(e.img)}},e.id)}))}),Object(f.jsxs)("div",{className:"box-quatity",children:[Object(f.jsx)("p",{className:" txt ",children:"color :"}),Object(f.jsxs)("div",{className:"box-wapper-2",children:[Object(f.jsx)("div",{className:"size",children:["x","m","xl","xxx"].map((function(e){return Object(f.jsx)("p",{className:p==e?"active":null,onClick:function(e){return x(e.target.textContent)},children:e},e)}))}),Object(f.jsx)("input",{type:"number",defaultValue:1,id:"quantity",name:"quantity",min:1,max:5,onChange:function(e){return h(e.target.value)}})]})]}),Object(f.jsxs)("div",{className:"box-wapper-2 add-cart-list",children:[Object(f.jsx)("button",{onClick:function(){if(w()){var e=Object(A.a)(Object(A.a)({},t),{},{qty:b,size:p,colorImage:N});j({type:"ADD_TO_CART",cart:e})}},className:"add-cart button button-red ",children:" ADD CART"}),Object(f.jsxs)("button",{className:"buy-now button",onClick:function(e){return 0==o.length?alert("Please add a cart !"):""},children:[" ",o.length>0?Object(f.jsx)(l.b,{to:"/checkout",children:" buy now"}):"buy now"]})]}),Object(f.jsx)("button",{className:"add-cart button button-fullwidth ",children:" \u0110ang c\xf3 t\u1ea1i c\xe1c c\u1eeda h\xe0ng"})]})]})}function H(){return Object(f.jsx)("div",{className:"tabs-item ",children:Object(f.jsx)("div",{className:"body-comment",children:Object(f.jsx)("div",{className:"comment-list",children:Object(f.jsx)("div",{className:"comment-item",children:Object(f.jsx)("div",{className:"fb-comments fb_iframe_widget fb_iframe_widget_fluid_desktop","data-href":"http://127.0.0.1:5500/productDetail.html","data-width":"100%","data-numposts":5,"fb-xfbml-state":"rendered","fb-iframe-plugin-query":"app_id=&container_width=0&height=100&href=http%3A%2F%2F127.0.0.1%3A5500%2FproductDetail.html&locale=vi_VN&numposts=5&sdk=joey&version=v12.0&width=",style:{width:"100%"},children:Object(f.jsx)("span",{style:{verticalAlign:"bottom",width:"0px",height:"0px"},children:Object(f.jsx)("iframe",{name:"feddbd5bf8c06",width:"1000px",height:"100px","data-testid":"fb:comments Facebook Social Plugin",title:"fb:comments Facebook Social Plugin",frameBorder:0,allowTransparency:"true",allowFullScreen:"true",scrolling:"no",allow:"encrypted-media",src:"https://www.facebook.com/v12.0/plugins/comments.php?app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df6bd0c9a7e09e4%26domain%3D%26is_canvas%3Dfalse%26origin%3Dfile%253A%252F%252F%252Ff259cc0601d1f3%26relation%3Dparent.parent&container_width=0&height=100&href=http%3A%2F%2F127.0.0.1%3A5500%2FproductDetail.html&locale=vi_VN&numposts=5&sdk=joey&version=v12.0&width=",className:!0,style:{border:"none",visibility:"visible",width:"0px",height:"0px"}})})})})})})})}function U(){return Object(f.jsx)("div",{className:"tabs-item  ",children:Object(f.jsx)("img",{src:"https://storage.googleapis.com/cdn.nhanh.vn/_temp/users/2563341/concept_moi_truong_Doi.jpg",alt:""})})}c(84);var R=c(65),P=c.n(R),V=c(64),G=Object(V.a)({apiKey:"AIzaSyCNguk7pf2QRlinKRYjncmbwG27FJyJNjk",authDomain:"totoshop-1605e.firebaseapp.com",projectId:"totoshop-1605e",storageBucket:"totoshop-1605e.appspot.com",messagingSenderId:"302913160034",appId:"1:302913160034:web:86b689acd671fc1fe8a23b"}),W=c(25),B=c(37),J=c(29);var Q=function(){var e=S(),t=Object(r.a)(e,2),c=t[0],s=c.reviewOfUser,i=c.userLogin,a=t[1],o=(Object(W.c)(G),Object(B.a)()),j=o.register,d=o.handleSubmit,u=o.formState.errors,b=Object(n.useState)(),h=Object(r.a)(b,2),m=h[0],O=h[1],p=Object(n.useState)(-1),x=Object(r.a)(p,2),v=x[0],g=x[1],N=Object(n.useState)(!1),y=Object(r.a)(N,2),w=y[0],k=y[1];console.log(s),Object(n.useEffect)((function(){return O(i?Object(f.jsx)(I,{}):Object(f.jsx)(_,{})),function(){}}),[v]),Object(n.useEffect)((function(){return w&&O(Object(f.jsx)(I,{})),function(){}}),[w]);var T=function(e){var t=e.email,c=e.password,n=Object(J.b)();Object(J.a)(n,t,c).then((function(e){e.user&&O(Object(f.jsx)(F,{}))})).catch((function(e){e.code;var t=e.message;alert(t)}))},E=function(){return Object(f.jsxs)("div",{className:"compound-logon page-width",children:[Object(f.jsx)("div",{className:"head",children:Object(f.jsx)("img",{src:"http://theme.hstatic.net/1000245692/1000351967/14/hannah-morgan-39891.jpg",alt:""})}),Object(f.jsx)("div",{className:"body",children:Object(f.jsxs)("form",{onSubmit:d(T),className:"body-loin",children:[Object(f.jsx)("input",Object(A.a)({type:"text",placeholder:u.emailLogin?"Email is require!":"email or phone number ..."},j("email",{required:!0}))),Object(f.jsx)("input",Object(A.a)({type:"password",placeholder:u.emailLogin?"Password is require!":"password..."},j("password",{required:!0}))),Object(f.jsx)("button",{type:"submit",className:"button",children:" Sign-in "})]})})]})},I=function e(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"info-evaluate",children:[Object(f.jsxs)("div",{className:"info",children:[Object(f.jsxs)("h3",{children:[Object(f.jsx)("span",{style:{fontFamily:"cursive",fontStyle:"italic",fontWeight:300},children:"wellcom :"}),i]}),Object(f.jsx)("span",{children:(null===s||void 0===s?void 0:s.review.length)||0}),"\u0110\xc1NH GI\xc1 ",Object(f.jsx)("span",{})]}),Object(f.jsx)("div",{className:"reviews",children:null===s||void 0===s?void 0:s.review.map((function(e,t){return Object(f.jsxs)("div",{className:"review-item",children:[Object(f.jsxs)("span",{style:{color:"blue",fontFamily:"cursive"},children:[i,":"]}),Object(f.jsxs)("b",{children:[e,"  - "]}),Object(f.jsx)("i",{style:{color:"gray"},children:"  :".concat(s.date[t]," - ").concat(s.time[t])})]},t)}))})]}),Object(f.jsxs)("form",{className:"loggin has-login",onSubmit:d((function(t){var c=t.review;if(-1==v)return alert("please vote rated for products!"),!1;var n=i.replace("@gmail.com",""),r=new Date,l="".concat(r.getUTCDate(),"/").concat(r.getUTCMonth(),"/").concat(r.getUTCFullYear()),o="".concat(r.getHours(),"h").concat(r.getMinutes(),"'").concat(r.getUTCSeconds(),"s"),j=Object(W.c)();if(s){var d={date:s.date.push(l),review:s.review.push(c),rated:v,time:s.time.push(o)};a({type:"USER_COMMENT",value:d}),Object(W.e)(Object(W.d)(j,"comments/"+n),s),O(Object(f.jsx)(e,{}))}else{var u={review:[c],rated:v,date:[l],time:[o]};Object(W.e)(Object(W.d)(j,"comments/"+n),u),a({type:"USER_COMMENT",value:u}),k(!0)}})),children:[Object(f.jsx)("p",{children:"TH\xcaM \u0110\xc1NH GI\xc1 "}),Object(f.jsxs)("div",{className:"evaluate",children:[Object(f.jsx)("p",{children:" your evaluate"}),Object(f.jsx)("div",{className:"star",children:Array(5).fill().map((function(e,t){return Object(f.jsx)(P.a,{className:t<=v?"hover-star":"",onMouseEnter:function(e){return function(e){g(e)}(t)}},t)}))}),Object(f.jsx)("textarea",Object(A.a)({className:"review",name:!0,id:!0,cols:30,rows:10,placeholder:u.review?"Review is require!":"your review ...",defaultValue:""},j("review",{required:!0})))]}),Object(f.jsx)("button",{className:"button send-to ",type:"submit",value:"Send Email",children:"Send to ... "})]})]})},C=function(e){var t=e.email,c=e.password,n=Object(J.b)();Object(J.d)(n,t,c).then((function(e){e.user&&O(Object(f.jsx)(I,{}))})).catch((function(e){e.code;var t=e.message;alert(t)}))},F=function(){return Object(f.jsxs)("div",{className:"compound-logon page-width",children:[Object(f.jsx)("div",{className:"head",children:Object(f.jsx)("img",{src:"http://theme.hstatic.net/1000245692/1000351967/14/hannah-morgan-39891.jpg",alt:""})}),Object(f.jsx)("div",{className:"body",children:Object(f.jsxs)("form",{onSubmit:d(C),className:"body-loin",children:[Object(f.jsx)("input",Object(A.a)({type:"text",placeholder:u.emailLogin?"Email is require!":"email or phone number ..."},j("email",{required:!0}))),Object(f.jsx)("input",Object(A.a)({type:"password",placeholder:u.emailLogin?"Password is require!":"password..."},j("email",{required:!0}))),Object(f.jsx)("button",{type:"submit",className:"button",children:" Login "}),Object(f.jsxs)("div",{className:"combo-page",children:[Object(f.jsx)("p",{children:Object(f.jsx)(l.b,{to:"/",children:"V\u1ec1 trang ch\u1ee7"})}),Object(f.jsx)("p",{className:"sign",onClick:function(){return O(Object(f.jsx)(E,{}))},children:"\u0110\u0103ng k\xfd"}),Object(f.jsx)("p",{className:"fg-pass",children:"Qu\xean m\u1eadt kh\u1ea9u?"})]})]})})]})},_=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"info-evaluate",children:[Object(f.jsx)("span",{children:"0"}),"\u0110\xc1NH GI\xc1 CHO ",Object(f.jsx)("span",{children:"\xc1O THUN D1ATN2041002"})]}),Object(f.jsxs)("div",{className:"loggin active",children:[Object(f.jsx)("p",{children:"TH\xcaM \u0110\xc1NH GI\xc1 "}),Object(f.jsx)("button",{className:"button",onClick:function(e){return O(Object(f.jsx)(F,{}))},children:"\u0110\u0103ng nh\u1eadp \u0111\u1ec3 \u0111\xe1nh gi\xe1 "})]})]})};return Object(f.jsx)("div",{className:"tabs-item ",children:Object(f.jsx)("div",{className:"evaluate",children:m})})};var Z=function(){var e=Object(n.useState)(Object(f.jsx)(U,{})),t=Object(r.a)(e,2),c=t[0],s=t[1],i=S(),a=Object(r.a)(i,2),l=a[0],o=(l.reviewOfUser,l.userLogin),j=a[1];Object(n.useEffect)((function(){var e=Object(J.b)();return Object(J.c)(e,(function(e){e&&j({type:"ADD_USERLOGIN",value:e.email})})),function(){}}),[]),Object(n.useEffect)((function(){var e=null===o||void 0===o?void 0:o.replace("@gmail.com",""),t=Object(W.d)(Object(W.c)());return Object(W.b)(Object(W.a)(t,"comments/")).then((function(t){t.exists()?j({type:"GET_DATA_REVIEWSOFUSER_FIRST_TIME",value:t.val()[e]}):console.log("No data available")})).catch((function(e){console.error(e)})),function(){}}),[o]);var d=function(e){s("evalue"==e?Object(f.jsx)(U,{}):"comment"==e?Object(f.jsx)(H,{}):Object(f.jsx)(Q,{}))};return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"page-width list-tabs",children:[Object(f.jsxs)("div",{className:"tabs-wapper",children:[Object(f.jsx)("div",{id:"evalue",onClick:function(e){return d(e.target.id)},children:"\u0110\xc1NH GI\xc1 "}),Object(f.jsx)("div",{id:"comment",onClick:function(e){return d(e.target.id)},children:"comment"}),Object(f.jsx)("div",{id:"description",onClick:function(e){return d(e.target.id)},children:"M\xf4 t\u1ea3"})]}),c]})})};var K=function(){var e=Object(o.g)().id,t=S(),c=Object(r.a)(t,2),i=c[0].products,a=(c[1],Object(n.useState)([])),l=Object(r.a)(a,2),j=l[0],d=l[1],u=Object(n.useState)(),b=Object(r.a)(u,2),h=b[0],m=b[1];return Object(n.useEffect)((function(){return function(){var t=i.find((function(t){return t.plug===e}));if(void 0!==t){var c=i.filter((function(e){return e.cartergoryID==t.cartergoryID}));d(c)}}(),function(){}}),[]),Object(n.useEffect)((function(){var t=i.find((function(t){return t.plug==e}));return t&&m(t),function(){}}),[]),Object(f.jsx)(s.a.Fragment,{children:Object(f.jsxs)("section",{id:"main-content",children:[Object(f.jsx)("div",{className:"info-product page-width",children:Object(f.jsx)("div",{className:"box-wapper-2",children:h&&Object(f.jsx)(L,{productDetails:h})})}),Object(f.jsx)(Z,{}),Object(f.jsx)(E,{cls:"section-products same-category ",title:"s\u1ea3n ph\u1ea9m c\xf9ng danh m\u1ee5c",setproductDetails:m,products:j})]})})},Y={products:[],carts:[],reviewOfUser:null,userLogin:""},$=function(e,t){switch(t.type){case"API_PRODUCTS":return Object(A.a)(Object(A.a)({},e),{},{products:t.data});case"ADD_TO_CART":if(e.carts.find((function(e){return e.id==t.cart.id}))){var c=e.carts.findIndex((function(e){return e.id==t.cart.id}));return e.carts[c]=t.cart,Object(A.a)(Object(A.a)({},e),{},{carts:Object(j.a)(e.carts)})}return Object(A.a)(Object(A.a)({},e),{},{carts:[].concat(Object(j.a)(e.carts),[t.cart])});case"GET_DATA_REVIEWSOFUSER_FIRST_TIME":case"USER_COMMENT":return Object(A.a)(Object(A.a)({},e),{},{reviewOfUser:t.value});case"ADD_USERLOGIN":return Object(A.a)(Object(A.a)({},e),{},{userLogin:t.value});default:return e}};function X(){var e=S(),t=Object(r.a)(e,2),c=t[0],s=c.carts,i=c.userLogin,a=(t[1],Object(n.useState)(!1)),j=Object(r.a)(a,2),d=j[0],u=j[1],b=Object(n.useState)(!1),h=Object(r.a)(b,2),m=h[0],O=h[1],p=Object(o.f)(),x=function(){return Object(f.jsx)("div",{className:d?"search-template active":"search-template",children:Object(f.jsx)("input",{type:"text",onKeyUp:function(e){return v(e,e.target.value)}})})},v=function(e,t){13===e.keyCode&&p.push("/search/".concat(t))};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(x,{}),Object(f.jsxs)("div",{className:"head-extra",children:[Object(f.jsxs)("div",{className:"extra-item",onClick:function(){i?O((function(e){return!e})):alert("you are not logged in, please go to product details and login account !")},children:[Object(f.jsx)("i",{className:"fas fa-user-circle"}),Object(f.jsx)("p",{className:m?"logout active":"logout",onClick:function(){return function(){var e=Object(J.b)();Object(J.e)(e).then((function(){})).catch((function(e){console.log(e)}))}()},children:"logout"})]}),Object(f.jsx)("div",{className:"extra-item",onClick:function(){return u((function(e){return!e}))},children:Object(f.jsx)("i",{className:"fas fa-search"})}),Object(f.jsx)("div",{className:"extra-item",children:Object(f.jsx)("i",{class:"far fa-heart"})}),Object(f.jsx)("div",{className:"extra-item",children:Object(f.jsxs)(l.b,{to:"/checkout",children:[Object(f.jsx)("i",{class:"fas fa-shopping-cart"}),s.length||"0"]})})]})]})}var ee=s.a.memo(X);c(86);function te(e){var t=e.menu;return Object(f.jsx)("div",{className:"nav-box",children:t.map((function(e,c){var n="nav-item ";return t.length-1===c&&(n="nav-item  subtitles"),Object(f.jsx)("div",{className:n,children:Object(f.jsx)(l.b,{to:"/category/"+e.plug,children:e.name})},e.id)}))})}function ce(e){var t=e.menu;return Object(f.jsxs)("div",{className:"nav",children:[Object(f.jsx)(te,{menu:t}),Object(f.jsxs)("div",{className:"phone-contact",children:[Object(f.jsx)("div",{className:"thub",children:Object(f.jsx)("img",{src:"./images/phone.png",alt:""})}),Object(f.jsx)("div",{className:"phone-number",children:"1900 0000"})]})]})}var ne=function(e){Object(x.a)(c,e);var t=Object(v.a)(c);function c(e){var n;return Object(O.a)(this,c),(n=t.call(this,e)).state={ITEMS:[]},n}return Object(p.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch(d).then((function(e){return e.json()})).then((function(t){e.setState({ITEMS:t})}))}},{key:"render",value:function(){return Object(f.jsx)("section",{id:"sidebar-main",children:Object(f.jsxs)("div",{className:"sidebar-warp",children:[Object(f.jsx)("div",{className:"logo",children:Object(f.jsx)(l.b,{to:"/",children:Object(f.jsx)("img",{src:"https://storage.googleapis.com/cdn.nhanh.vn/store/7136/store_1587022637_735.jpg",alt:""})})}),Object(f.jsx)(ee,{}),Object(f.jsx)(ce,{menu:this.state.ITEMS})]})})}}]),c}(s.a.Component),se=c(66),ie=c.n(se);var ae=function(){var e,t,c,s,i=new ie.a("pk_test_34952d4dcaee58b76216b5da141bef9d07e04e4a194d8"),a=S(),o=Object(r.a)(a,2),j=o[0].carts,d=(o[1],Object(n.useState)([])),u=Object(r.a)(d,2),b=u[0],h=u[1],m=Object(n.useState)(0),O=Object(r.a)(m,2),p=O[0],x=O[1],v=Object(B.a)(),g=v.register,N=v.handleSubmit,y=(v.watch,v.formState.errors);return Object(n.useEffect)((function(){return i.services.localeListSubdivisions("VN").then((function(e){var t=e.subdivisions;h(Object.entries(t)),x(Object.entries(t)[0][0])})),function(){}}),[]),Object(f.jsxs)("section",{id:"main-content",children:[Object(f.jsx)("div",{className:"headding",children:Object(f.jsx)("h3",{children:"Thanh to\xe1n gi\u1ecf h\xe0ng"})}),Object(f.jsxs)("div",{className:"body-content",children:[Object(f.jsxs)("div",{className:"bill",children:[Object(f.jsx)("h4",{children:"Th\xf4ng tin h\xf3a \u0111\u01a1n"}),Object(f.jsxs)("form",{children:[Object(f.jsx)("div",{className:"fr-gruop",children:Object(f.jsxs)("div",{className:"gruop-item",children:[Object(f.jsx)("label",{htmlFor:!0,children:"full name"}),Object(f.jsx)("input",Object(A.a)({type:"text"},g("fullname",{required:!0,maxLength:20}))),Object(f.jsx)("span",{children:"required"===(null===(e=y.fullname)||void 0===e?void 0:e.type)&&"First name is required"})]})}),Object(f.jsxs)("div",{className:"fr-gruop",children:[Object(f.jsxs)("div",{className:"gruop-item",children:[Object(f.jsx)("label",{htmlFor:!0,children:"Email "}),Object(f.jsx)("input",Object(A.a)({type:"email"},g("email",{required:!0,pattern:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}))),Object(f.jsx)("span",{children:"required"===(null===(t=y.email)||void 0===t?void 0:t.type)&&"email is required"})]}),Object(f.jsxs)("div",{className:"gruop-item",children:[Object(f.jsx)("label",{htmlFor:!0,children:"Phone "}),Object(f.jsx)("input",Object(A.a)({type:"number"},g("phone",{required:!0,maxLength:10}))),Object(f.jsx)("span",{children:"required"===(null===(c=y.phone)||void 0===c?void 0:c.type)&&"Phone is required"})]})]}),Object(f.jsx)("div",{className:"fr-gruop",children:Object(f.jsxs)("div",{className:"gruop-item",children:[Object(f.jsx)("label",{htmlFor:!0,children:"city "}),Object(f.jsx)("select",Object(A.a)(Object(A.a)({value:p},g("city")),{},{onChange:function(e){return x(e.target.value)},id:"country",children:b.map((function(e){return Object(f.jsx)("option",{value:e[0],children:e[1]})}))}))]})}),Object(f.jsx)("div",{className:"fr-gruop",children:Object(f.jsxs)("div",{className:"gruop-item",children:[Object(f.jsx)("label",{htmlFor:!0,children:"Comment write "}),Object(f.jsx)("textarea",Object(A.a)(Object(A.a)({},g("comment",{required:!0,maxLength:49})),{},{cols:30,rows:10,defaultValue:""})),Object(f.jsx)("span",{children:"required"===(null===(s=y.comment)||void 0===s?void 0:s.type)&&"comment is required"})]})})]})]}),Object(f.jsxs)("div",{className:"method-pays",children:[Object(f.jsx)("h4",{children:"Ph\u01b0\u01a1ng th\u1ee9c thanh to\xe1n"}),Object(f.jsx)("form",{action:!0,children:Object(f.jsx)("div",{className:"fr-gruop",children:Object(f.jsxs)("div",{className:"gruop-item",children:[Object(f.jsx)("label",{htmlFor:!0,children:"Thanh to\xe1n ti\u1ec1n m\u1eb7t khi nh\u1eadn h\xe0ng (COD)"}),Object(f.jsx)("input",Object(A.a)(Object(A.a)({},g("methodpay")),{},{type:"radio"}))]})})})]}),Object(f.jsxs)("div",{className:"cart-info",children:[Object(f.jsx)("h4",{children:"Ph\u01b0\u01a1ng th\u1ee9c thanh to\xe1n"}),Object(f.jsxs)("div",{className:"head",children:[Object(f.jsx)("p",{children:"Name"}),Object(f.jsx)("p",{children:"Quantyti"}),Object(f.jsx)("p",{children:"Price"})]}),Object(f.jsx)("div",{className:"body",children:j.map((function(e){return console.log(e),Object(f.jsxs)("div",{className:"item",children:[Object(f.jsxs)("div",{className:"thumb",children:[Object(f.jsx)("img",{src:e.colorImage}),Object(f.jsx)("p",{className:"name",children:e.name})]}),Object(f.jsx)("div",{className:"qty",children:e.qty}),Object(f.jsxs)("div",{className:"price-total",children:[e.pirce*Number.parseInt(e.qty),"vnd"]})]},e.id)}))}),Object(f.jsxs)("div",{className:"money-fetch",children:[" ",Object(f.jsx)("span",{children:"T\u1ea0M T\xcdNH"})," ",j.reduce((function(e,t){return e+t.pirce*Number.parseInt(t.qty)}),0),".vnd"]}),Object(f.jsxs)("button",{className:"button",children:[" ",Object(f.jsx)(l.b,{to:"/",children:"return home"})]}),Object(f.jsx)("button",{className:"button",onClick:N((function(e){0==j.length?alert("Please buy a product can to payment!"):console.log(e)})),children:"Thanh to\xe1n"})]})]})]})};var re=function(){var e=S(),t=Object(r.a)(e,2),c=t[0].products,s=(t[1],Object(o.g)().id),i=Object(n.useState)([]),a=Object(r.a)(i,2),l=a[0],j=a[1];Object(n.useEffect)((function(){var e=c.filter((function(e){return e.name.includes(s)}));return j(e),function(){}}),[s]);var d=function(){return Object(f.jsxs)("h3",{style:{fontFamily:"cursive",fontSize:30,textAlign:"center"},children:["result for :",s," is emty!"]})};return Object(f.jsx)("div",{className:"search-container",style:{flex:1},children:l.length>0?Object(f.jsx)(E,{title:"result for :".concat(s),splitRow:!1,cls:"section-products",products:l}):Object(f.jsx)(d,{})})},le=c(67),oe=c.n(le);var je=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(f.jsxs)("div",{className:c?"nav-mobile show-menu-mobile":"nav-mobile",children:[Object(f.jsx)(oe.a,{onClick:function(){return s((function(e){return!e}))}}),Object(f.jsx)(ee,{})]})};var de=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){return window.addEventListener("resize",(function(e){var t=e.target.innerWidth;s(t<1024)})),function(){window.removeEventListener("resize",(function(){return null}))}}),[c]),Object(f.jsx)(w,{reducer:$,initialstate:Y,children:Object(f.jsx)(l.a,{children:Object(f.jsxs)("div",{className:c?"main-wapper mobile":"main-wapper ",children:[Object(f.jsx)(je,{}),Object(f.jsx)(ne,{}),Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{path:"/checkout/",children:Object(f.jsx)(ae,{})}),Object(f.jsx)(o.a,{path:"/search/:id",children:Object(f.jsx)(re,{})}),Object(f.jsx)(o.a,{path:"/category/:id",children:Object(f.jsx)(I,{})}),Object(f.jsx)(o.a,{path:"/product/:id",children:Object(f.jsx)(K,{})}),Object(f.jsx)(o.a,{exact:!0,path:"/",children:Object(f.jsx)(z,{})})]})]})})})};c(119);a.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(de,{})}),document.getElementById("root"))},75:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},86:function(e,t,c){}},[[121,1,2]]]);
//# sourceMappingURL=main.766eceb7.chunk.js.map