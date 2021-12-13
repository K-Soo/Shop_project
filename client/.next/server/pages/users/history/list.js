(function() {
var exports = {};
exports.id = 7703;
exports.ids = [7703];
exports.modules = {

/***/ 2502:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ListPage; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/containers/MainContainer.tsx
var MainContainer = __webpack_require__(9490);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/components/Common/PageTitle.tsx
var PageTitle = __webpack_require__(6908);
;// CONCATENATED MODULE: ./src/components/History/List/Guide.tsx




const S = {
  Guide: external_styled_components_default().article.withConfig({
    displayName: "Guide",
    componentId: "sc-1galste-0"
  })(["margin:15px 0;border:1px solid #eaeaea;padding:20px;font-size:12px;color:#999;li{padding-bottom:5px;::before{content:'# ';color:#000;}}li:last-child{padding-bottom:0;}", ""], ({
    theme
  }) => theme.mobile`
      padding: 10px;
    `)
};
function Guide() {
  return /*#__PURE__*/jsx_runtime_.jsx(S.Guide, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ol", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: "\uAE30\uBCF8\uC801\uC73C\uB85C \uCD5C\uADFC 3\uAC1C\uC6D4\uAC04\uC758 \uC790\uB8CC\uAC00 \uC870\uD68C\uB429\uB2C8\uB2E4."
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: "\uC8FC\uBB38\uBC88\uD638\uB97C \uD074\uB9AD\uD558\uC2DC\uBA74 \uD574\uB2F9 \uC8FC\uBB38\uC5D0 \uB300\uD55C \uC0C1\uC138\uB0B4\uC5ED\uC744 \uD655\uC778\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
      })]
    })
  });
}
;// CONCATENATED MODULE: ./src/constants/history.ts
const ORDER_INFO = [{
  label: '주문번호',
  value: 'orderNumber'
}, {
  label: '이미지',
  value: 'image'
}, {
  label: '상품정보',
  value: 'productInfo'
}, {
  label: '수량',
  value: 'qty'
}, {
  label: '상품구매금액',
  value: 'productPrice'
}, {
  label: '주문처리상태',
  value: 'status'
}];
// EXTERNAL MODULE: ./src/components/Common/Loading.tsx
var Loading = __webpack_require__(7460);
// EXTERNAL MODULE: ./src/components/Common/EmptyItem.tsx
var EmptyItem = __webpack_require__(8358);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(3803);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/History/List/Content.tsx










const Content_S = {
  Content: external_styled_components_default().article.withConfig({
    displayName: "Content",
    componentId: "s5t6s-0"
  })(["border:1px solid #f0f0f0;margin-bottom:15px;"]),
  LoadingBox: external_styled_components_default().div.withConfig({
    displayName: "Content__LoadingBox",
    componentId: "s5t6s-1"
  })(["height:60px;"]),
  Header: external_styled_components_default().ul.withConfig({
    displayName: "Content__Header",
    componentId: "s5t6s-2"
  })(["display:flex;height:40px;text-align:center;font-size:12px;background-color:#f9f9f9;li{border:solid #f0f0f0;border-width:0 1px 1px 0;vertical-align:middle;line-height:40px;background:#f9f9f9;}li:nth-child(1){width:15%;min-width:140px;}li:nth-child(2){min-width:90px;}li:nth-child(3){flex:1;}li:nth-child(4){width:40px;}li:nth-child(5){width:90px;}li:nth-child(6){width:70px;}", ""], ({
    theme
  }) => theme.mobile`
      display: none;
    `),
  Body: external_styled_components_default().div.withConfig({
    displayName: "Content__Body",
    componentId: "s5t6s-3"
  })([".item-box{display:flex;border-bottom:1px solid #f0f0f0;:last-child{border-bottom:none;}", " .order-number{width:15%;min-width:140px;display:flex;align-items:center;justify-content:center;font-size:12px;color:#353535;border-right:1px solid #f0f0f0;&__info{display:flex;flex-direction:column;align-items:center;justify-content:center;white-space:nowrap;&--number{color:#000;font-weight:500;&:hover{text-decoration:underline;}}}&__detail-link{display:none;}", "}.details-box{width:85%;font-size:12px;.details{flex:1;height:90px;display:flex;border-bottom:1px solid #f0f0f0;:last-child{border-bottom:none;}&__img{font-size:0;}&__option{&--category{font-size:10px;}&--name{color:#000;:hover{text-decoration:underline;}}&--color{padding-top:5px;color:#555;}}li{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;}li:nth-child(1){width:90px;}li:nth-child(2){flex:1;align-items:flex-start;padding-left:10px;}li:nth-child(3){width:40px;}li:nth-child(4){width:90px;}li:nth-child(5){width:70px;}}", "}}"], ({
    theme
  }) => theme.mobile`
        flex-direction: column;
      `, ({
    theme
  }) => theme.mobile`
          width: 100%;
          height: 40px;
          padding: 0 20px;
          background-color: #555;
          justify-content: space-between;
          color: #fff;
          &__info{
            flex-direction: row;
            &--date{
              padding-right: 10px;
            }
            &--number{
              font-weight: 300;
              color: #fff;
            }
            }
            &__detail-link{
             display: block;
            }
        `, ({
    theme
  }) => theme.mobile`
          width: 100%;
          .details{
            li{

            }
            li:nth-child(1){
              flex-basis: 20%;
              height: 100%;
            }
            li:nth-child(2){
              flex-basis: 35%;
              align-items: flex-start;
            
            }
            li:nth-child(3){
              flex-basis: 10%;
            }
            li:nth-child(4){
              flex-basis: 20%;
            }
            li:nth-child(5){
              flex-basis: 15%;
            }
          }
        `)
};
function Content({
  items,
  isLoading,
  isSuccess
}) {
  var _items$data;

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Content_S.Content, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Content_S.Header, {
      children: ORDER_INFO.map(d => /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: d.label
      }, d.value))
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Content_S.Body, {
      children: [isSuccess && items.data.map(d => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "item-box",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "order-number",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "order-number__info",
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "order-number__info--date",
              children: d.createAt
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "order-number__info--number",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: `/users/history/details/${items.user}/${d.orderNum}`,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: `[ ${d.orderNum} ]`
                })
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "order-number__detail-link",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: `/users/history/details/${items.user}/${d.orderNum}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "\uC0C1\uC138\uC815\uBCF4"
              })
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "details-box",
          children: d.Products.map(v => /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "details",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "details__img",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: '/product/' + v.product_type + '/' + v.seq,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                    src: v.imageUrl[0].url,
                    alt: d.name,
                    width: 80,
                    height: 80
                  })
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              className: "details__option",
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "details__option--category",
                children: v.category
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "details__option--name",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: '/product/' + v.product_type + '/' + v.seq,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: v.name
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                className: "details__option--color",
                children: ["[\uC0C9\uC0C1 : ", v.selectColor[0].colorName, "]"]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: v.qty
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: [(0,utils/* PriceComma */.OB)(v.totalConsumerPrice), "\uC6D0"]
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: "\uACB0\uC81C\uC644\uB8CC"
            })]
          }, v._id))
        })]
      }, d._id)), isLoading && /*#__PURE__*/jsx_runtime_.jsx(Content_S.LoadingBox, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Loading/* default */.Z, {
          isLoading: true,
          text: ""
        })
      }), !((_items$data = items.data) !== null && _items$data !== void 0 && _items$data.length) && /*#__PURE__*/jsx_runtime_.jsx(EmptyItem/* default */.Z, {
        text: "\uC8FC\uBB38 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."
      })]
    })]
  });
}
// EXTERNAL MODULE: ./src/components/Forms/FormFieldset.tsx
var FormFieldset = __webpack_require__(8608);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
// EXTERNAL MODULE: ./src/api/index.ts
var api = __webpack_require__(8740);
// EXTERNAL MODULE: ./src/constants/queryKeys.ts
var queryKeys = __webpack_require__(7834);
// EXTERNAL MODULE: ./src/components/Pagination/index.tsx + 3 modules
var Pagination = __webpack_require__(9973);
// EXTERNAL MODULE: ./src/context/AppProvider.tsx + 1 modules
var AppProvider = __webpack_require__(693);
;// CONCATENATED MODULE: ./src/components/History/List/index.tsx














const List_S = {
  List: external_styled_components_default().section.withConfig({
    displayName: "List",
    componentId: "sc-4up647-0"
  })([""])
};
function List({
  idx
}) {
  const App = (0,AppProvider/* useAppContext */.bp)();
  const currentPage = Number(App.state.pagination.currentPage);
  const fallback = [];
  const queryClient = (0,external_react_query_.useQueryClient)();
  const limit = 2;
  const {
    data: responseData = [],
    isLoading,
    isSuccess,
    isError,
    isFetching
  } = (0,external_react_query_.useQuery)([queryKeys/* queryKeys.HISTORY */.a.HISTORY, idx, currentPage, limit], async () => await api/* Get.getHistory */.dX.getHistory(idx, currentPage, limit), {
    retry: 0,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: 2000,
    enabled: !!idx
  });
  (0,external_react_.useEffect)(() => {
    if (currentPage < responseData.total) {
      const nextPreFetchPage = currentPage + 1;
      queryClient.prefetchQuery([queryKeys/* queryKeys.HISTORY */.a.HISTORY, idx, nextPreFetchPage], () => api/* Get.getHistory */.dX.getHistory(idx, currentPage, limit));
    }
  }, [currentPage, queryClient, idx, responseData.total]);

  if (isError) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: "error"
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(List_S.List, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PageTitle/* default */.Z, {
      TitleText: "\uC8FC\uBB38\uB0B4\uC5ED \uB9AC\uC2A4\uD2B8"
    }), /*#__PURE__*/jsx_runtime_.jsx(Guide, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FormFieldset/* default */.Z, {
      title: isSuccess && `주문 상품 정보 (${responseData.total})`,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Content, {
        items: responseData,
        isLoading: isLoading,
        isSuccess: isSuccess
      }), isSuccess && responseData.data.length > 0 && /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Pagination/* default */.Z, {
          maxPages: responseData.maxPages,
          isFetching: isFetching
        })
      })]
    })]
  });
}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/constants/path.ts
var path = __webpack_require__(643);
// EXTERNAL MODULE: ./src/components/Common/Breadcrumb.tsx
var Breadcrumb = __webpack_require__(7777);
;// CONCATENATED MODULE: ./src/pages/users/history/list.tsx












function ListPage() {
  const router = (0,router_.useRouter)();
  const {
    state: {
      userInfo
    }
  } = (0,AppProvider/* useAppContext */.bp)();
  (0,external_react_.useEffect)(() => {
    if (!userInfo.idx) {
      router.push({
        pathname: '/auth/login',
        query: {
          type: 'history'
        }
      });
    }
  }, [userInfo.idx, router]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\uC96C\uC5BC\uB9AC | \uC8FC\uBB38\uB0B4\uC5ED \uB9AC\uC2A4\uD2B8"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "\uC0C1\uD488 \uC8FC\uBB38\uB0B4\uC5ED \uB9AC\uC2A4\uD2B8"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainContainer/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Breadcrumb/* default */.Z, {
        children: [path/* default.MAIN */.Z.MAIN, path/* default.HISTORY */.Z.HISTORY].map(({
          path,
          tag
        }) => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: path,
          children: tag
        }, path))
      }), /*#__PURE__*/jsx_runtime_.jsx(List, {
        idx: userInfo === null || userInfo === void 0 ? void 0 : userInfo.idx
      })]
    })]
  });
}
;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 4584:
/***/ (function(module) {

"use strict";
module.exports = require("immer");;

/***/ }),

/***/ 6155:
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5513:
/***/ (function(module) {

"use strict";
module.exports = require("react-loading-overlay-ts");;

/***/ }),

/***/ 2585:
/***/ (function(module) {

"use strict";
module.exports = require("react-query");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 9914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5675,8703,6930,3803,643,8740,693,3493,6908,8608,7320,3744], function() { return __webpack_exec__(2502); });
module.exports = __webpack_exports__;

})();