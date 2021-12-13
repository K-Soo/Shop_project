(function() {
var exports = {};
exports.id = 9352;
exports.ids = [9352];
exports.modules = {

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

/***/ 5000:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useSearch; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7834);
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8740);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);




function useSearch() {
  const {
    0: filter,
    1: setFilter
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const fallback = [];
  const selectFc = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(data => {
    if (filter) return data.filter(d => d.name.trim().includes(filter));
  }, [filter]);
  const {
    data: FilteredData = fallback,
    isLoading,
    isSuccess,
    isError
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__/* .queryKeys.SEARCH */ .a.SEARCH], async () => await api__WEBPACK_IMPORTED_MODULE_2__/* .Get.getAllProduct */ .dX.getAllProduct(), {
    retry: 0,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    select: selectFc // enabled: state.openSearch,

  });
  return {
    FilteredData,
    isLoading,
    isSuccess,
    isError,
    setFilter,
    filter
  };
}

/***/ }),

/***/ 5190:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ SearchPage; }
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
// EXTERNAL MODULE: ./src/components/style/Select.tsx
var Select = __webpack_require__(8116);
// EXTERNAL MODULE: ./src/components/style/Input.tsx
var Input = __webpack_require__(8847);
// EXTERNAL MODULE: ./src/components/style/Button.tsx
var Button = __webpack_require__(8761);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./src/components/ProductSearch/SearchBox.tsx








const S = {
  SearchBox: external_styled_components_default().article.withConfig({
    displayName: "SearchBox",
    componentId: "zz4kcu-0"
  })(["background-color:#f9f9f9;padding:30px;display:flex;font-size:14px;.select-box{flex:1 40%;min-width:270px;display:flex;select{margin-right:10px;}}.search-box{flex:1 60%;display:flex;input{flex:1 70%;height:40px;margin-right:10px;font-size:14px;}button{flex:1 30%;font-size:14px;}}", ""], ({
    theme
  }) => theme.mobile`
      padding: 15px;
      flex-direction: column;
      .select-box{
        margin-bottom: 15px;
        height: 40px;
        select:nth-child(2){
          margin-right: 0;
        }
        select{
          height: 30px;
        }
      }
      .search-box{
        input{
          height: 30px;
        }
      }
    }
  `)
};
function SearchBox({
  setFilter
}) {
  const router = (0,router_.useRouter)();
  const {
    0: text,
    1: setText
  } = (0,external_react_.useState)('');
  (0,external_react_.useEffect)(() => {
    const {
      keyword
    } = router.query;
    setText(keyword);
  }, [router.query]);
  const handleClick = (0,external_react_.useCallback)(() => {
    setFilter(text);
  }, [setFilter, text]);
  const handleKeyPress = (0,external_react_.useCallback)(e => {
    if (e.key === 'Enter') handleClick();
  }, [text, handleClick]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.SearchBox, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "select-box",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Select/* default */.Z, {
        height: "40",
        children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "",
          children: "\uC0C1\uD488 \uBD84\uB958\uC120\uD0DD"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "",
          children: "\uBAA9\uAC78\uC774"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "",
          children: "\uADC0\uAC78\uC774"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "",
          children: "\uBC18\uC9C0"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "",
          children: "\uD314\uCC0C"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "",
          children: "\uC21C\uAE08"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "",
          children: "\uB2E4\uC774\uC544\uBAAC\uB4DC"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "",
          children: "\uCEE4\uD50C\uB9C1"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Select/* default */.Z, {
        height: "40",
        children: /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "",
          children: "\uC0C1\uD488\uBA85"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "search-box",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
        value: text,
        onKeyPress: handleKeyPress,
        onChange: e => setText(e.target.value)
      }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        onClick: handleClick,
        height: "40",
        black: true,
        children: "\uAC80\uC0C9"
      })]
    })]
  });
}
// EXTERNAL MODULE: ./src/components/Common/ProductSortMenu.tsx
var ProductSortMenu = __webpack_require__(7501);
// EXTERNAL MODULE: ./src/hooks/useSearch.ts
var useSearch = __webpack_require__(5000);
// EXTERNAL MODULE: ./src/components/Product/ProductList.tsx
var ProductList = __webpack_require__(8356);
// EXTERNAL MODULE: ./src/hooks/useSort.ts
var useSort = __webpack_require__(4556);
;// CONCATENATED MODULE: ./src/components/ProductSearch/index.tsx











const ProductSearch_S = {
  ProductSearch: external_styled_components_default().section.withConfig({
    displayName: "ProductSearch",
    componentId: "kd8td4-0"
  })([""])
};
function ProductSearch() {
  const router = (0,router_.useRouter)();
  const {
    FilteredData,
    isSuccess,
    setFilter,
    filter,
    isLoading
  } = (0,useSearch/* default */.Z)();
  const {
    setSort,
    sortingData
  } = (0,useSort/* useSort */.Z)(FilteredData);
  (0,external_react_.useEffect)(() => {
    const {
      keyword
    } = router.query;
    setFilter(keyword);
  }, [router.query, setFilter]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProductSearch_S.ProductSearch, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PageTitle/* default */.Z, {
      TitleText: "\uC0C1\uD488\uAC80\uC0C9"
    }), /*#__PURE__*/jsx_runtime_.jsx(SearchBox, {
      filter: filter,
      setFilter: setFilter
    }), /*#__PURE__*/jsx_runtime_.jsx(ProductSortMenu/* default */.Z, {
      itemCount: FilteredData.length,
      setSort: setSort
    }), isSuccess && /*#__PURE__*/jsx_runtime_.jsx(ProductList/* default */.Z, {
      items: sortingData,
      isLoading: isLoading,
      isSuccess: isSuccess
    })]
  });
}
// EXTERNAL MODULE: ./src/constants/path.ts
var path = __webpack_require__(643);
// EXTERNAL MODULE: ./src/components/Common/Breadcrumb.tsx
var Breadcrumb = __webpack_require__(7777);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/pages/product/search/index.tsx











function SearchPage() {
  const router = (0,router_.useRouter)();
  const {
    keyword
  } = router.query;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\uC96C\uC5BC\uB9AC | \uAC80\uC0C9"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "\uC0C1\uD488 \uAC80\uC0C9"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainContainer/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Breadcrumb/* default */.Z, {
        children: [path/* default.MAIN */.Z.MAIN, {
          path: `${path/* default.SEARCH.path */.Z.SEARCH.path}${keyword}`,
          tag: path/* default.SEARCH.tag */.Z.SEARCH.tag
        }].map(({
          path,
          tag
        }) => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: path,
          children: tag
        }, path))
      }), /*#__PURE__*/jsx_runtime_.jsx(ProductSearch, {})]
    })]
  });
}

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 6155:
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,8703,6930,3803,643,8740,8761,3493,6908,8847,8116,8356,4808], function() { return __webpack_exec__(5190); });
module.exports = __webpack_exports__;

})();