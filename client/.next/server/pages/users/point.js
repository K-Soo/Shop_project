(function() {
var exports = {};
exports.id = 2129;
exports.ids = [2129];
exports.modules = {

/***/ 6255:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ PointPage; }
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
// EXTERNAL MODULE: ./src/components/Forms/FormFieldset.tsx
var FormFieldset = __webpack_require__(8608);
// EXTERNAL MODULE: ./src/context/AppProvider.tsx + 1 modules
var AppProvider = __webpack_require__(693);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/components/Common/Loading.tsx
var Loading = __webpack_require__(7460);
// EXTERNAL MODULE: ./src/components/Common/EmptyItem.tsx
var EmptyItem = __webpack_require__(8358);
;// CONCATENATED MODULE: ./src/components/Point/List.tsx









const S = {
  List: external_styled_components_default().div.withConfig({
    displayName: "List",
    componentId: "bn1zxf-0"
  })([""]),
  Tap: external_styled_components_default().div.withConfig({
    displayName: "List__Tap",
    componentId: "bn1zxf-1"
  })(["border-bottom:1px solid #000;.list{display:flex;.all{border-bottom:3px solid #000;}&__item{color:#AAA;padding:10px 0;cursor:pointer;font-size:12px;&:first-child{span{border-right:1px solid #f0f0f0}}span{padding:0 15px;pointer-events:none;}}}"]),
  Content: external_styled_components_default().div.withConfig({
    displayName: "List__Content",
    componentId: "bn1zxf-2"
  })(["margin-top:15px;min-height:150px;.item{display:flex;&__detail{flex:1;text-align:center;justify-content:center;align-items:center;border-top:1px solid #f0f0f0;font-size:12px;padding:10px;color:#353535;&:nth-child(1){flex-basis:20%;}&:nth-child(2){flex-basis:20%;}&:nth-child(3){flex-basis:20%;}&:nth-child(4){flex-basis:40%;}", "}}"], ({
    theme
  }) => theme.mobile`
          font-size: 10px;
          padding: 10px 5px;
        }`),
  ContentHeader: external_styled_components_default().li.withConfig({
    displayName: "List__ContentHeader",
    componentId: "bn1zxf-3"
  })(["display:flex;background-color:#f9f9f9;text-align:center;.item{flex:1;text-align:center;justify-content:center;padding:14px 0;font-size:12px;&:nth-child(1){flex-basis:20%;}&:nth-child(2){flex-basis:20%;}&:nth-child(3){flex-basis:20%;}&:nth-child(4){flex-basis:40%;}}"])
};
function List({
  data,
  isSuccess,
  isLoading,
  isError
}) {
  const {
    state: {
      userInfo: {
        idx
      }
    }
  } = (0,AppProvider/* useAppContext */.bp)();
  if (isError) return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: "Error"
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.List, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(S.Tap, {
      children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: "list",
        children: /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "list__item all",
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "\uC804\uCCB4"
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(S.Content, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(S.ContentHeader, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item",
            children: "\uC8FC\uBB38\uB0A0\uC9DC"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item",
            children: "\uC801\uB9BD\uAE08"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item",
            children: "\uAD00\uB828\uC8FC\uBB38"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item",
            children: "\uB0B4\uC6A9"
          })]
        }), isLoading && /*#__PURE__*/jsx_runtime_.jsx(Loading/* default */.Z, {
          isLoading: true,
          text: ""
        }), isSuccess ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
          children: data.pointInfo.length > 0 && data.pointInfo.map(d => {
            if (d) {
              return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                className: "item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "item__detail",
                  children: d.createdAt
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "item__detail",
                  children: d.point
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "item__detail",
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: `/users/history/details/${idx}/${d.orderNum}`,
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: d.orderNum
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "item__detail",
                  children: d.account
                })]
              }, d._id);
            }
          })
        }) : /*#__PURE__*/jsx_runtime_.jsx(EmptyItem/* default */.Z, {
          text: "\uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4"
        })]
      })
    })]
  });
}
// EXTERNAL MODULE: ./src/components/Pagination/index.tsx + 3 modules
var Pagination = __webpack_require__(9973);
// EXTERNAL MODULE: ./src/constants/queryKeys.ts
var queryKeys = __webpack_require__(7834);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(3803);
// EXTERNAL MODULE: ./src/api/index.ts
var api = __webpack_require__(8740);
;// CONCATENATED MODULE: ./src/components/Point/index.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const Point_S = {
  Point: external_styled_components_default().section.withConfig({
    displayName: "Point",
    componentId: "sc-1ur4frh-0"
  })([""])
};
function Point() {
  var _data$pointInfo;

  const App = (0,AppProvider/* useAppContext */.bp)();
  const {
    state: {
      userInfo: {
        idx
      }
    }
  } = (0,AppProvider/* useAppContext */.bp)();
  const queryClient = (0,external_react_query_.useQueryClient)();
  const currentPage = Number(App.state.pagination.currentPage);
  const limit = 4;
  const selectFc = (0,external_react_.useCallback)(data => {
    const filtered = data.pointInfo.map(d => d.usedPoint > 0 ? _objectSpread(_objectSpread({}, d), {}, {
      point: `-${(0,utils/* PriceComma */.OB)(d.usedPoint)}`,
      account: '사용 적립금'
    }) : _objectSpread(_objectSpread({}, d), {}, {
      point: (0,utils/* PriceComma */.OB)(d.savedPoint),
      account: '상품구매 적립금'
    }));
    return _objectSpread(_objectSpread({}, data), {}, {
      pointInfo: filtered
    });
  }, []);
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching
  } = (0,external_react_query_.useQuery)([queryKeys/* queryKeys.POINT_DETAIL */.a.POINT_DETAIL, idx, currentPage, limit], async () => await api/* Get.getPointList */.dX.getPointList(idx, currentPage, limit), {
    retry: 0,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: 2000,
    enabled: !!idx,
    select: selectFc
  });
  (0,external_react_.useEffect)(() => {
    if (isSuccess) {
      if (currentPage < data.maxPages) {
        let nextValue = currentPage;
        const nextPreFetchPage = nextValue += 1;
        queryClient.prefetchQuery([queryKeys/* queryKeys.POINT_DETAIL */.a.POINT_DETAIL, idx, nextPreFetchPage, limit], () => api/* Get.getPointList */.dX.getPointList(idx, currentPage, limit));
      }
    }
  }, [App.state.pagination.currentPage, queryClient, idx, isSuccess, currentPage]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Point_S.Point, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PageTitle/* default */.Z, {
      TitleText: "\uC801\uB9BD\uAE08"
    }), /*#__PURE__*/jsx_runtime_.jsx(FormFieldset/* default */.Z, {
      title: "\uC801\uB9BD\uAE08 \uB0B4\uC5ED",
      children: /*#__PURE__*/jsx_runtime_.jsx(List, {
        data: data,
        isSuccess: isSuccess,
        isLoading: isLoading,
        isError: isError
      })
    }), (data === null || data === void 0 ? void 0 : (_data$pointInfo = data.pointInfo) === null || _data$pointInfo === void 0 ? void 0 : _data$pointInfo.length) && /*#__PURE__*/jsx_runtime_.jsx(Pagination/* default */.Z, {
      maxPages: data.maxPages,
      isFetching: isFetching
    })]
  });
}
// EXTERNAL MODULE: ./src/constants/path.ts
var path = __webpack_require__(643);
// EXTERNAL MODULE: ./src/components/Common/Breadcrumb.tsx
var Breadcrumb = __webpack_require__(7777);
;// CONCATENATED MODULE: ./src/pages/users/point.tsx










function PointPage() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\uC96C\uC5BC\uB9AC | \uC801\uB9BD\uAE08 \uC870\uD68C"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "\uC801\uB9BD\uAE08\uB0B4\uC5ED"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainContainer/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Breadcrumb/* default */.Z, {
        children: [path/* default.MAIN */.Z.MAIN, path/* default.POINT */.Z.POINT].map(({
          path,
          tag
        }) => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: path,
          children: tag
        }, path))
      }), /*#__PURE__*/jsx_runtime_.jsx(Point, {})]
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,8703,6930,3803,643,8740,693,3493,6908,8608,7320,3744], function() { return __webpack_exec__(6255); });
module.exports = __webpack_exports__;

})();