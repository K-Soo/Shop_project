(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4503],{97757:function(n,e,t){"use strict";t.d(e,{Z:function(){return l}});var i=t(85893),r=(t(67294),t(24097)),a=t(41664),c=t(79970),o=t(11163),s={List:r.default.article.withConfig({displayName:"List",componentId:"j27g3w-0"})(["table{width:100%;border-collapse:collapse;font-size:12px;padding:0 15px;border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0;caption{display:none;}thead{tr{th{padding:10px 15px;font-weight:normal;border-bottom:1px solid #f0f0f0;background-color:#f9f9f9;}}}tbody{tr{td{padding:10px 15px;vertical-align:middle;a{display:block;height:100%;}}.index{white-space:nowrap;font-size:11px;color:#939393;text-align:center;padding:10px;}.title{cursor:pointer;color:#000;}.date{white-space:nowrap;}}}}"])};function l(n){var e=n.items,t=n.handleCheckBox,r=n.checkedArray,l=(0,o.useRouter)();return(0,i.jsx)(s.List,{children:(0,i.jsxs)("table",{children:[(0,i.jsx)("caption",{children:"\uacf5\uc9c0\uc0ac\ud56d \ub9ac\uc2a4\ud2b8"}),(0,i.jsxs)("colgroup",{children:[(0,i.jsx)("col",{width:"5%"}),(0,i.jsx)("col",{width:"85%"}),(0,i.jsx)("col",{width:"5%"}),(0,i.jsx)("col",{width:"5%"})]}),(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{colSpan:4,children:"\uc81c\ubaa9"})})}),(0,i.jsx)("tbody",{children:e.map((function(n){return(0,i.jsxs)("tr",{className:"notice-tr",children:[(0,i.jsx)("td",{className:"index",children:"\uacf5\uc9c0"}),(0,i.jsx)("td",{className:"title",children:(0,i.jsx)(a.default,{href:"/admin/notice/".concat(n._id),children:(0,i.jsx)("a",{children:n.title})})}),(0,i.jsx)("td",{className:"date",children:n.createdAt}),"/board/notice"!==l.asPath&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("td",{className:"date",children:(0,i.jsx)(c.Z,{name:"delete",value:n._id,onChange:t,checked:r.includes(n._id)})})})]},n._id)}))})]})})}},27777:function(n,e,t){"use strict";t.d(e,{Z:function(){return l}});var i=t(85893),r=t(32465),a=t(67294),c=t(24097);function o(){var n=(0,r.Z)(["\n      display: none;\n    "]);return o=function(){return n},n}var s={Breadcrumb:c.default.nav.withConfig({displayName:"Breadcrumb",componentId:"m02x82-0"})(["max-width:1200px;margin:15px auto;display:flex;justify-content:flex-end;",";"],(function(n){return n.theme.mobile(o())})),BreadcrumbLists:c.default.ol.withConfig({displayName:"Breadcrumb__BreadcrumbLists",componentId:"m02x82-1"})(["display:flex;font-size:11px;color:#666666;li{padding:0 5px;a{display:inline-block;}&:last-child{font-weight:600;color:#000;}}"])};function l(n){var e=function(n){return(0,i.jsx)("li",{className:"breadcrumb-item",children:n.children})},t=a.Children.toArray(n.children),r=(t=t.map((function(n,t){return(0,i.jsx)(e,{children:n},"breadcrumb_item".concat(t))}))).length-1;return t=t.reduce((function(n,e,t){return t<r?n.push(e,">"):n.push(e),n}),[]),(0,i.jsx)(s.Breadcrumb,{className:n.className,children:(0,i.jsx)(s.BreadcrumbLists,{children:t})})}},46908:function(n,e,t){"use strict";t.d(e,{Z:function(){return u}});var i=t(85893),r=t(32465),a=(t(67294),t(24097)),c=t(23595),o=t(46930),s=t(11163);function l(){var n=(0,r.Z)(["\n      justify-content: center;\n      align-items: center;\n      .redirect-icon{\n        display: block;\n      }\n      ","{\n        font-size: 20px;\n      }\n    "]);return l=function(){return n},n}var d={PageTitle:a.default.article.withConfig({displayName:"PageTitle",componentId:"sc-1j8axyo-0"})(["position:relative;display:flex;justify-content:center;align-items:center;height:60px;.redirect-icon{display:none;position:absolute;font-size:0;left:10px;cursor:pointer;&:hover{svg{color:#000;}}svg{width:24px;height:24px;}}",""],(function(n){return n.theme.mobile(l(),o.Z)}))};function u(n){var e=n.TitleText,t=(0,s.useRouter)();return(0,i.jsxs)(d.PageTitle,{children:[(0,i.jsx)("i",{className:"redirect-icon",onClick:function(){return t.back()},children:(0,i.jsx)(c.Z,{name:"BigArrowLeft"})}),(0,i.jsx)(o.Z,{level:3,size:"24",textAlign:"left",children:e})]})}},9973:function(n,e,t){"use strict";t.d(e,{Z:function(){return h}});var i=t(85893),r=t(67294),a=t(24097);var c=t(20693),o=t(89546),s={NumBtn:a.default.button.withConfig({displayName:"NumBtn",componentId:"sc-79nueo-0"})(["display:flex;align-items:center;justify-content:center;text-align:center;cursor:pointer;margin:0 5px;border-radius:50%;width:30px;height:30px;line-height:30px;background-color:#fff;border:1px solid #fff;font-size:13px;&:hover{text-decoration:underline;}&[data-active=true]{border:1px solid #999;background-color:#f9f9f9;cursor:default;text-decoration:none;};"])};function l(n){var e=n.onClick,t=n.value,r=n.name,a=n.children,c=n.active,o=n.disabled;return(0,i.jsx)(s.NumBtn,{onClick:e,name:r,value:t,"data-active":c,disabled:o,children:a})}var d={TurnBtn:a.default.button.withConfig({displayName:"TurnBtn",componentId:"sc-1qcsiyw-0"})(["margin:0 3px;background-color:#fff;cursor:",";font-size:12px;&:hover{text-decoration:",";}"],(function(n){return n.disabled?"default":"pointer"}),(function(n){return n.disabled?"none":"underline"}))};function u(n){var e=n.onClick,t=n.value,r=n.children,a=n.disabled;return(0,i.jsx)(d.TurnBtn,{disabled:a,onClick:e,value:t,children:r})}var f={Pagination:a.default.div.withConfig({displayName:"Pagination",componentId:"sc-4qhqf7-0"})(["margin:",";.wrapper{display:flex;justify-content:center;align-items:center;}"],(function(n){return n.margin?n.margin:"0"}))};function h(n){var e=n.maxPages,t=n.className,a=n.isFetching,s=n.margin,d=n.pageSize,h=void 0===d?3:d,p=(0,c.bp)(),x=p.state,m=p.action,g=(0,r.useState)(1),v=g[0],b=g[1],j=(0,r.useState)(!1),N=j[0],w=j[1],y=Math.ceil(e/h),k=Array.from({length:y},(function(n,e){return e+1})),C=function(n,e,t){var i=(0,r.useState)([]),a=i[0],c=i[1];return(0,r.useEffect)((function(){var i=Array.from({length:n},(function(n,e){return e+1})).slice((t-1)*e,t*e);c(i)}),[n,t,e]),{array:a}}(e,h,v).array;(0,o.Z)((function(){C.length&&(N?m.InitData("pagination.currentPage",String(C[C.length-1])):m.InitData("pagination.currentPage",String(C[0])))}),[v,C]);return(0,i.jsx)(f.Pagination,{margin:s,className:t,children:(0,i.jsxs)("div",{className:"wrapper",children:[(0,i.jsx)(u,{onClick:function(){w(!1),b(k[0])},disabled:a||1===v,children:"\ucc98\uc74c"}),(0,i.jsx)(u,{onClick:function(){v>1&&(w(!1),b((function(n){return n-1})))},disabled:a||1==v,children:"\uc774\uc804"}),C&&C.map((function(n){return(0,i.jsx)(l,{name:"pagination.currentPage",active:String(n)===x.pagination.currentPage,value:n,onClick:m.setFormData,disabled:a,children:n},n)})),(0,i.jsx)(u,{onClick:function(){w(!1),b((function(n){return n+1}))},disabled:a||v===k[k.length-1],children:"\ub2e4\uc74c"}),(0,i.jsx)(u,{onClick:function(){w(!0),b(k[k.length-1])},disabled:a||v===k[k.length-1],children:"\ub9c8\uc9c0\ub9c9"})]})})}},79970:function(n,e,t){"use strict";var i=t(85893),r=(t(67294),t(24097)),a=t(23595);e.Z=(0,r.default)((function(n){var e=n.className,t=n.name,r=n.onChange,c=n.defaultChecked,o=n.checked,s=n.value,l=n.required,d=n.id;return(0,i.jsxs)("label",{className:e,children:[(0,i.jsx)("input",{type:"checkbox",name:t,onChange:r,checked:o,defaultChecked:c,value:s,required:l,id:d}),(0,i.jsx)("div",{children:(0,i.jsx)(a.Z,{name:"check"})})]})})).withConfig({displayName:"CheckBox",componentId:"sc-12w7viv-0"})(["position:relative;max-width:20px;width:20px;height:20px;display:inline-block;font-size:0;margin-left:",";margin-right:",";svg{color:#dee2e6;width:18px;height:18px;padding-right:1px;padding-bottom:2px;}input[type='checkbox']{display:none;}input[type='checkbox'] + div{box-sizing:border-box;position:relative;width:100%;height:100%;top:0;left:0;background-color:#fff;border:2px solid #dee2e6;border-radius:3px;cursor:pointer;font-size:0;}input[type='checkbox']:checked + div{border:#142a69;background-color:#142a69;font-size:0;svg{display:inline-block;color:#fff;font-size:0;width:18px;height:18px;padding-top:3px;padding-left:2px;}}"],(function(n){var e,t=n.marginL;return null!==(e="".concat(t,"px"))&&void 0!==e?e:"0"}),(function(n){var e,t=n.marginR;return null!==(e="".concat(t,"px"))&&void 0!==e?e:"0"}))},46930:function(n,e,t){"use strict";var i=t(85893),r=(t(67294),t(24097));e.Z=(0,r.default)((function(n){var e=n.className,t=n.children;switch(n.level){case 1:return(0,i.jsx)("h1",{className:e,children:t});case 2:return(0,i.jsx)("h2",{className:e,children:t});case 3:return(0,i.jsx)("h3",{className:e,children:t});case 4:return(0,i.jsx)("h4",{className:e,children:t});case 5:return(0,i.jsx)("h5",{className:e,children:t});case 6:return(0,i.jsx)("h6",{className:e,children:t});default:return(0,i.jsx)("h1",{className:e,children:t})}})).withConfig({displayName:"Title",componentId:"lkkel4-0"})(["cursor:default;font-size:",";color:",";margin:",";margin-top:",";margin-left:",";margin-right:",";margin-bottom:",";text-align:",";"],(function(n){var e=n.size;return e?"".concat(e,"px"):"30px"}),(function(n){var e=n.color;return null!==e&&void 0!==e?e:"#2e2e2e"}),(function(n){var e,t=n.margin;return null!==(e="".concat(t))&&void 0!==e?e:"0px"}),(function(n){var e,t=n.marginT;return null!==(e="".concat(t,"px"))&&void 0!==e?e:"0px"}),(function(n){var e,t=n.marginL;return null!==(e="".concat(t,"px"))&&void 0!==e?e:"0px"}),(function(n){var e,t=n.marginR;return null!==(e="".concat(t,"px"))&&void 0!==e?e:"0px"}),(function(n){var e,t=n.marginB;return null!==(e="".concat(t,"px"))&&void 0!==e?e:"0px"}),(function(n){var e=n.textAlign;return null!==e&&void 0!==e?e:"center"}))},9490:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});var i=t(85893),r=t(32465);t(67294);function a(){var n=(0,r.Z)(["\n      padding: 0;\n    "]);return a=function(){return n},n}var c={MainContainer:t(24097).default.main.withConfig({displayName:"MainContainer",componentId:"ok5p0e-0"})(["width:100%;max-width:1200px;margin:0 auto;",""],(function(n){return n.theme.mobile(a())}))};function o(n){return(0,i.jsx)(c.MainContainer,{children:n.children})}},37590:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return y}});var i=t(85893),r=(t(67294),t(9008)),a=t(9490),c=t(87757),o=t.n(c),s=t(92137),l=t(24097),d=t(46908),u=t(97757),f=t(38740),h=t(87834),p=t(9973),x=t(88767),m=t(20693),g=t(11163),v={Notice:l.default.section.withConfig({displayName:"Notice",componentId:"sc-1pqbpm4-0"})([".page-nation{margin-top:25px;}"])};function b(){var n=(0,m.bp)(),e=Number(n.state.pagination.currentPage),t=((0,g.useRouter)(),(0,x.useQuery)([h.a.NOTICE_LIST.name,e,h.a.NOTICE_LIST.limit],(0,s.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.dX.getNoticeList(e,h.a.NOTICE_LIST.limit);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)}))),{retry:0,keepPreviousData:!0,refetchOnWindowFocus:!1,staleTime:2e3})),r=t.data,a=t.isLoading,c=t.isSuccess,l=t.isError,b=t.isFetching;return l?(0,i.jsx)("div",{children:"isError"}):a?(0,i.jsx)("div",{children:"loading"}):(0,i.jsxs)(v.Notice,{children:[(0,i.jsx)(d.Z,{TitleText:"\uacf5\uc9c0\uc0ac\ud56d"}),(0,i.jsx)(u.Z,{items:r.items,isLoading:a}),c&&(0,i.jsx)(p.Z,{className:"page-nation",maxPages:r.maxPages,isFetching:b})]})}var j=t(90643),N=t(27777),w=t(41664);function y(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.default,{children:[(0,i.jsx)("title",{children:"\uc96c\uc5bc\ub9ac | \uacf5\uc9c0\uc0ac\ud56d \ub9ac\uc2a4\ud2b8"}),(0,i.jsx)("meta",{name:"description",content:"\uacf5\uc9c0\uc0ac\ud56d \ub9ac\uc2a4\ud2b8 \ud398\uc774\uc9c0"})]}),(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(N.Z,{children:[j.Z.MAIN,j.Z.NOTICE].map((function(n){var e=n.path,t=n.tag;return(0,i.jsx)(w.default,{href:e,children:t},e)}))}),(0,i.jsx)(b,{})]})]})}},69131:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/board/notice",function(){return t(37590)}])},9008:function(n,e,t){n.exports=t(92775)}},function(n){n.O(0,[9774,2888,179],(function(){return e=69131,n(n.s=e);var e}));var e=n.O();_N_E=e}]);