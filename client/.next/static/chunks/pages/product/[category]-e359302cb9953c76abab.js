(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4819],{70208:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(85893),o=(r(67294),r(24097)),i=r(25949),a=(0,o.default)(i.Z).withConfig({displayName:"Loading__StyledLoader",componentId:"sc-13kuzqi-0"})(["display:none;height:",";width:100%;"," .loading__overlay{background-color:#fff;}.loading__content{color:#000;};.loading__spinner{svg circle{stroke:rgba(10,10,10,0.5);}}"],(function(e){return e.height?"".concat(e.height,"px"):"0px"}),(function(e){return e.isLoading&&(0,o.css)(["display:block;"])}));function s(e){var t=e.text,r=e.isLoading,o=e.height;return(0,n.jsx)(a,{active:!0,spinner:!0,text:t,classNamePrefix:"loading__",isLoading:r,height:o})}},55565:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return J}});var n=r(85893),o=r(87757),i=r.n(o),a=r(92137),s=r(67294),c=r(9008),l=r(11163),u=r(88767),d=r(9490),p=r(24097),g=r(88356),f=r(47501),b=r(20693),m=r(89546);var x=r(84556),h=r(70208),y={Product:p.default.section.withConfig({displayName:"Product",componentId:"sc-1uuyc3e-0"})(["width:100%;"])};function v(e){var t=e.item,r=e.isLoading,o=e.isSuccess,i=((0,l.useRouter)(),(0,b.bp)().state),a=function(e){var t=(0,b.bp)().state,r=(0,s.useState)([]),n=r[0],o=r[1];return(0,m.Z)((function(){e.length>0&&("all"===t.targetCategory?o(e):o(e.filter((function(e){return e.category===t.targetCategory}))))}),[t.targetCategory,e]),n}(t),c=(0,s.useState)([]),u=(c[0],c[1]),d=(0,x.Z)(a),p=d.setSort,v=d.sortingData;return(0,m.Z)((function(){t&&("all"===i.targetCategory?u(t):u(t.filter((function(e){return e.category===i.targetCategory}))))}),[i.targetCategory,t]),(0,n.jsxs)(y.Product,{children:[r&&(0,n.jsx)(h.Z,{isLoading:r,height:300,text:""}),o&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.Z,{itemCount:null===a||void 0===a?void 0:a.length,setSort:p}),(0,n.jsx)(g.Z,{items:v})]})]})}var _=r(38740),j=r(29770),w=r(90643),C=r(27777),S=r(41664),k=r(96156),N=r(46066),L=(r(36591),r(6694),r(15613));function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,k.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O={ImageSlider:p.default.div.withConfig({displayName:"ImageSlider",componentId:"z54wwh-0"})(["margin:0 auto;"])},I={infinite:!0,slidesToShow:3,slidesToScroll:3,autoplay:!0,speed:2e3,autoplaySpeed:3e3,cssEase:"linear",focusOnSelect:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,dots:!0}}]};function T(e){var t=e.item;return(0,n.jsx)(O.ImageSlider,{children:(0,n.jsx)(N.Z,Z(Z({},I),{},{children:t.map((function(e){return(0,n.jsx)(L.Z,{product_type:e.product_type,seq:e.seq,name:e.name,description:e.description,product_price:e.product_price,consumer_price:e.consumer_price,imageUrl:e.imageUrl,product_colors:e.product_colors,best_product:e.best_product,new_product:e.new_product,isList:!1},e._id)}))}))})}var E={BestProducts:p.default.article.withConfig({displayName:"BestProducts",componentId:"oulvf-0"})(["width:100%;margin:0 auto;overflow:hidden;"])};function M(e){var t=e.item,r=e.isLoading,o=e.isSuccess,i=(0,s.useCallback)((function(){return null===t||void 0===t?void 0:t.filter((function(e){return e.best_product&&e.qty>=1}))}),[t]);return(0,n.jsxs)(E.BestProducts,{children:[r&&(0,n.jsx)(h.Z,{isLoading:r,height:300,text:""}),o&&(0,n.jsx)(T,{item:i()})]})}var z=r(32465),B=r(46930);function q(){var e=(0,z.Z)(["\n        display: none;\n    "]);return q=function(){return e},e}var D={HamburgerMenuList:p.default.div.withConfig({displayName:"HamburgerMenuList",componentId:"cmwkc3-0"})(["z-index:10;position:absolute;border:1px solid #f0f0f0;top:35px;left:0;height:auto;width:100%;background-color:#fff;padding:30px;box-shadow:0 30px 30px -50px rgb(0 0 0);"," .sub-category-box{font-size:14px;&__item{cursor:pointer;padding:10px 0 10px 10px;border-top:1px solid #f0f0f0;:hover{background-color:#F9F9F9;}}.all{border:none;}}",""],(function(e){return e.toggleSubMenu?(0,p.css)(["visibility:visible;opacity:1;transition:all 0.3s ease;"]):(0,p.css)(["visibility:hidden;opacity:0;"])}),(function(e){return e.theme.mobile(q())}))};function F(e){var t=e.productSubList,r=(0,b.bp)(),o=r.action,i=r.state;return(0,n.jsx)(D.HamburgerMenuList,{toggleSubMenu:i.openSubMenu,children:(0,n.jsxs)("ul",{className:"sub-category-box",children:[(0,n.jsx)("li",{className:"sub-category-box__item all","data-name":"all",onClick:o.setCategory,children:"\uc804\uccb4"}),t&&t.map((function(e){return(0,n.jsx)("li",{"data-name":e.label,className:"sub-category-box__item",onClick:o.setCategory,children:e.label},e.label)}))]})})}var A=r(34633),H=r(23595);function R(){var e=(0,z.Z)(["\n      display: block;\n    "]);return R=function(){return e},e}function X(){var e=(0,z.Z)(["\n      justify-content: center;\n      height: 60px;\n      align-items: center;\n      border-bottom: none;\n      margin-bottom: 0px;\n      .redirect-icon{\n        display: block;\n      }\n      ","{\n        font-size: 20px;\n        &::after{\n          content: none;\n        }\n      }\n      .hamburger-icon{\n        display: none;\n      }\n    "]);return X=function(){return e},e}var U=(0,p.css)(["margin:2px;padding:5px;font-size:12px;border-radius:15px;text-align:center;cursor:pointer;border:1px solid #fff;&[data-active=true]{color:#fff;border:solid 1px #222529;background-color:#333;}"]),G={ProductCategory:p.default.article.withConfig({displayName:"ProductCategory",componentId:"sc-9v5ww3-0"})(["margin-bottom:15px;width:100%;"]),SubTitle:p.default.div.withConfig({displayName:"ProductCategory__SubTitle",componentId:"sc-9v5ww3-1"})(["position:relative;display:flex;justify-content:space-between;align-items:flex-end;border-bottom:2px solid #e8e8e8;margin-bottom:10px;height:35px;width:100%;margin:0 auto;.redirect-icon{display:none;position:absolute;font-size:0;left:10px;}","{position:relative;&::after{content:'';position:absolute;width:100%;height:3px;bottom:-2px;left:0;background:#333;}}",""],B.Z,(function(e){return e.theme.mobile(X(),B.Z)})),CategorySubList:p.default.div.withConfig({displayName:"ProductCategory__CategorySubList",componentId:"sc-9v5ww3-2"})(["border:solid #e8e8e8;border-width:1px 0px;padding:15px 5px;display:none;color:#777;.list{display:flex;flex-wrap:wrap;&__item{flex:1 30%;","}&__all{flex:1 100%;","}}",""],U,U,(function(e){return e.theme.mobile(R())}))};function Q(e){var t=e.currentProduct,r=e.keyName,o=(0,b.bp)(),i=o.action,a=o.state,s=(0,l.useRouter)();return(0,n.jsxs)(G.ProductCategory,{children:[(0,n.jsxs)(G.SubTitle,{children:[(0,n.jsx)("i",{className:"redirect-icon",onClick:function(){return s.back()},children:(0,n.jsx)(H.Z,{name:"BigArrowLeft"})}),(0,n.jsx)(B.Z,{level:3,size:"24",textAlign:"left",children:t}),(0,n.jsx)(A.Z,{className:"hamburger-icon",toggle:a.openSubMenu,dataName:"openSubMenu",onClick:i.setGlobalToggle}),(0,n.jsx)(F,{productSubList:j.c[r]})]}),(0,n.jsx)(G.CategorySubList,{category:a.targetCategory,children:(0,n.jsxs)("ul",{className:"list",children:[(0,n.jsx)("li",{className:"list__all","data-name":"all","data-active":"all"===a.targetCategory,onClick:i.setCategory,children:"ALL"}),r&&j.c[r].map((function(e){return(0,n.jsx)("li",{className:"list__item","data-name":e.label,"data-active":e.label===a.targetCategory,onClick:i.setCategory,children:e.label},e.label)}))]})})]})}function J(){var e=(0,l.useRouter)(),t=e.query.category,r=e.query.category,o=j.B[r],s=(0,u.useQuery)(["product",t],(0,a.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.dX.products(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),{retry:0}),p=s.data,g=void 0===p?[]:p,f=s.isLoading,b=s.isSuccess;return s.isError?(0,n.jsx)("h1",{children:"error.."}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(c.default,{children:[(0,n.jsxs)("title",{children:["\uc96c\uc5bc\ub9ac | ",j.B[t]]}),(0,n.jsx)("meta",{name:"description",content:"".concat(j.B[t]," \uce74\ud14c\uace0\ub9ac \ub9ac\uc2a4\ud2b8")})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(C.Z,{children:[w.Z.MAIN,{path:"/product/".concat(t),tag:"".concat(j.B[t])}].map((function(e){var t=e.path,r=e.tag;return(0,n.jsx)(S.default,{href:t,children:r},t)}))}),(0,n.jsx)(Q,{currentProduct:o,keyName:r}),(0,n.jsx)(M,{item:g,isLoading:f,isSuccess:b}),(0,n.jsx)(v,{item:g.length>0&&g,isLoading:f,isSuccess:b})]})]})}},54093:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/[category]",function(){return r(55565)}])}},function(e){e.O(0,[3619,3971,2019,9774,2888,179],(function(){return t=54093,e(e.s=t);var t}));var t=e.O();_N_E=t}]);