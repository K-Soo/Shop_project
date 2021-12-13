(function() {
var exports = {};
exports.id = 5712;
exports.ids = [5712];
exports.modules = {

/***/ 8358:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ EmptyItem; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3595);





const S = {
  EmptyItem: styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "EmptyItem",
    componentId: "fwzjae-0"
  })(["padding:60px 0;", " .wrapper{margin:0 auto;text-align:center;color:#999;i{display:block;font-size:0;svg{color:#000;}}p{padding-top:10px;font-size:13px;}}"], ({
    theme
  }) => theme.mobile`
    padding: 30px 0;
    }`)
};
function EmptyItem({
  text
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(S.EmptyItem, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "wrapper",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
          name: "warning"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: text
      })]
    })
  });
}

/***/ }),

/***/ 7174:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ TextIcon; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const S = {
  TextIcon: styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
    displayName: "TextIcon",
    componentId: "sc-1b8wiug-0"
  })(["background-color:#999;display:block;align-items:center;border-radius:5%;padding:1px 5px;color:#fff;font-size:12px;margin:", ";", " ", ""], ({
    margin
  }) => margin !== null && margin !== void 0 ? margin : "0px", props => props.text === 'best' && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["color:#505050;background-color:#fff;border:1px solid #eee;"]), props => props.text === 'new' && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["color:#718FC5;background-color:#FFEF36;"]))
};
function TextIcon({
  text,
  margin
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(S.TextIcon, {
    text: text,
    margin: margin,
    children: text
  });
}

/***/ }),

/***/ 7834:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ queryKeys; }
/* harmony export */ });
const queryKeys = {
  PRODUCT: 'product',
  PRODUCT_CLOSE: 'product-close',
  HISTORY: 'history',
  SEARCH: 'search',
  REVIEW: {
    name: 'review',
    limit: 4
  },
  INTEREST_PRODUCT: 'interestProduct',
  POINT: 'point',
  POINT_DETAIL: 'pointDetail',
  NOTICE_LIST: {
    name: 'notice-list',
    limit: 15
  },
  ADMIN: {
    sales: 'admin-sales',
    usedPoint: 'admin-usedPoint',
    notice: 'admin-notice',
    statistics: 'admin-statistics'
  }
};

/***/ }),

/***/ 1898:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ InterestProductPage; }
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
// EXTERNAL MODULE: ./src/context/AppProvider.tsx + 1 modules
var AppProvider = __webpack_require__(693);
// EXTERNAL MODULE: ./src/components/Common/PageTitle.tsx
var PageTitle = __webpack_require__(6908);
// EXTERNAL MODULE: ./src/components/Forms/FormFieldset.tsx
var FormFieldset = __webpack_require__(8608);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/components/style/Button.tsx
var Button = __webpack_require__(8761);
// EXTERNAL MODULE: ./src/components/style/Title.tsx
var Title = __webpack_require__(6930);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(3803);
// EXTERNAL MODULE: ./src/components/Common/TextIcon.tsx
var TextIcon = __webpack_require__(7174);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/components/Common/EmptyItem.tsx
var EmptyItem = __webpack_require__(8358);
;// CONCATENATED MODULE: ./src/components/InterestProduct/List.tsx












const S = {
  List: external_styled_components_default().div.withConfig({
    displayName: "List",
    componentId: "sc-1fi01pm-0"
  })([""]),
  Item: external_styled_components_default().div.withConfig({
    displayName: "List__Item",
    componentId: "sc-1fi01pm-1"
  })(["border-bottom:1px dashed #ccc;display:flex;flex-direction:column;padding:10px;font-size:12px;button{font-size:12px;}"]),
  MainContent: external_styled_components_default().div.withConfig({
    displayName: "List__MainContent",
    componentId: "sc-1fi01pm-2"
  })(["height:90px;display:flex;flex-direction:column;.product-info{display:flex;&__left{margin-right:10px;font-size:0;a{display:inline-block;height:100%;}}&__right{flex:1;height:120px;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;&--desc{flex:1;width:100%;align-items:center;.category{display:flex;align-items:center;justify-content:space-between;}.title{display:flex;align-items:flex-start;justify-content:space-between;&__name{display:flex;align-items:center;a{&:hover{text-decoration:underline;}}}}.consumer-price{font-size:14px;font-weight:600;&::after{content:'\uC6D0';}}.product-price{color:#333;&::after{content:'\uC6D0';}}}}}"]),
  ColorBox: external_styled_components_default().div.withConfig({
    displayName: "List__ColorBox",
    componentId: "sc-1fi01pm-3"
  })(["margin-bottom:3px;display:flex;span{padding:0 2px;}"])
};
function List({
  items,
  isLoading,
  isSuccess,
  handleRemoveItem
}) {
  const {
    action,
    state
  } = (0,AppProvider/* useAppContext */.bp)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.List, {
    children: [isSuccess && items.length > 0 && items.map(d => /*#__PURE__*/jsx_runtime_.jsx(S.Item, {
      children: /*#__PURE__*/jsx_runtime_.jsx(S.MainContent, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "product-info",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "product-info__left",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: '/product/' + d.product_type + '/' + d.seq,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  className: "img",
                  src: d.imageUrl[0].url,
                  alt: "Picture of the author",
                  width: 80,
                  height: 90
                })
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "product-info__right",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "product-info__right--desc",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "category",
                children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: d.category
                }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
                  white: true,
                  name: d._id,
                  height: "25px",
                  width: "50px",
                  onClick: handleRemoveItem,
                  children: "\uC0AD\uC81C"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "product-info__right--desc title",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "title__name",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: '/product/' + d.product_type + '/' + d.seq,
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: /*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
                        level: 6,
                        size: "13",
                        children: d.name
                      })
                    })
                  }), d.best_product && /*#__PURE__*/jsx_runtime_.jsx(TextIcon/* default */.Z, {
                    text: "best",
                    margin: "0 0 0 5px"
                  }), d.new_product && /*#__PURE__*/jsx_runtime_.jsx(TextIcon/* default */.Z, {
                    text: "new",
                    margin: "0 0 0 5px"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.ColorBox, {
                children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "[\uC0C9\uC0C1]: "
                }), d.product_colors.map(c => /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: c.color_name
                }, c.hex_value))]
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "product-price",
                children: /*#__PURE__*/jsx_runtime_.jsx("del", {
                  children: (0,utils/* PriceComma */.OB)(d.product_price)
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "consumer-price",
                children: (0,utils/* PriceComma */.OB)(d.consumer_price)
              })]
            })
          })]
        })
      })
    }, d._id)), !(items !== null && items !== void 0 && items.length) && /*#__PURE__*/jsx_runtime_.jsx(EmptyItem/* default */.Z, {
      text: "\uAD00\uC2EC\uC0C1\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."
    })]
  });
}
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
// EXTERNAL MODULE: ./src/constants/queryKeys.ts
var queryKeys = __webpack_require__(7834);
// EXTERNAL MODULE: ./src/api/index.ts
var api = __webpack_require__(8740);
;// CONCATENATED MODULE: ./src/components/InterestProduct/index.tsx











const InterestProduct_S = {
  ProductList: external_styled_components_default().section.withConfig({
    displayName: "InterestProduct__ProductList",
    componentId: "zx4c6a-0"
  })([""])
};
function InterestProduct() {
  const {
    0: currentPage,
    1: setCurrentPage
  } = (0,external_react_.useState)(1);
  const {
    state: {
      userInfo: {
        idx
      }
    }
  } = (0,AppProvider/* useAppContext */.bp)();
  const queryClient = (0,external_react_query_.useQueryClient)();
  const {
    data = [],
    isLoading,
    isSuccess,
    isError,
    error,
    isFetching
  } = (0,external_react_query_.useQuery)([queryKeys/* queryKeys.INTEREST_PRODUCT */.a.INTEREST_PRODUCT, idx, currentPage], async () => await api/* Get.getInterestProductList */.dX.getInterestProductList(idx, currentPage), {
    retry: 0,
    keepPreviousData: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: !!idx
  });
  const handleRemoveItem = (0,external_react_.useCallback)(async e => {
    const {
      name
    } = e.target;

    if (idx) {
      try {
        const res = await api/* Delete.deleteInterestProduct */.HG.deleteInterestProduct(idx, name);
        if (res.success) alert('삭제되었습니다.');
        queryClient.invalidateQueries([queryKeys/* queryKeys.INTEREST_PRODUCT */.a.INTEREST_PRODUCT, idx, currentPage]);
      } catch (error) {
        console.error('remove-error: ', error);
      }
    }
  }, [idx]);

  if (isError) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: "error"
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(InterestProduct_S.ProductList, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PageTitle/* default */.Z, {
      TitleText: "\uAD00\uC2EC\uC0C1\uD488"
    }), /*#__PURE__*/jsx_runtime_.jsx(FormFieldset/* default */.Z, {
      title: "\uC704\uC2DC\uB9AC\uC2A4\uD2B8",
      children: /*#__PURE__*/jsx_runtime_.jsx(List, {
        items: data.item,
        isSuccess: isSuccess,
        isLoading: isLoading,
        handleRemoveItem: handleRemoveItem
      })
    })]
  });
}
// EXTERNAL MODULE: ./src/constants/path.ts
var path = __webpack_require__(643);
// EXTERNAL MODULE: ./src/components/Common/Breadcrumb.tsx
var Breadcrumb = __webpack_require__(7777);
;// CONCATENATED MODULE: ./src/pages/users/interest-products.tsx










function InterestProductPage({}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\uC96C\uC5BC\uB9AC | \uAD00\uC2EC\uC0C1\uD488"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "\uAD00\uC2EC\uC0C1\uD488 \uB9AC\uC2A4\uD2B8"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainContainer/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Breadcrumb/* default */.Z, {
        children: [path/* default.MAIN */.Z.MAIN, path/* default.INTEREST */.Z.INTEREST].map(({
          path,
          tag
        }) => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: path,
          children: tag
        }, path))
      }), /*#__PURE__*/jsx_runtime_.jsx(InterestProduct, {})]
    })]
  });
}

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5675,8703,6930,3803,643,8740,8761,693,3493,6908,8608], function() { return __webpack_exec__(1898); });
module.exports = __webpack_exports__;

})();