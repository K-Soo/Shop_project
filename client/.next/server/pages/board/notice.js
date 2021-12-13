(function() {
var exports = {};
exports.id = 4503;
exports.ids = [4503];
exports.modules = {

/***/ 7590:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ NoticePage; }
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
// EXTERNAL MODULE: ./src/components/Board/Notice/List.tsx
var List = __webpack_require__(7757);
// EXTERNAL MODULE: ./src/api/index.ts
var api = __webpack_require__(8740);
// EXTERNAL MODULE: ./src/constants/queryKeys.ts
var queryKeys = __webpack_require__(7834);
// EXTERNAL MODULE: ./src/components/Pagination/index.tsx + 3 modules
var Pagination = __webpack_require__(9973);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
// EXTERNAL MODULE: ./src/context/AppProvider.tsx + 1 modules
var AppProvider = __webpack_require__(693);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./src/components/Board/Notice/index.tsx












const S = {
  Notice: external_styled_components_default().section.withConfig({
    displayName: "Notice",
    componentId: "sc-1pqbpm4-0"
  })([".page-nation{margin-top:25px;}"])
};
function Notice() {
  const App = (0,AppProvider/* useAppContext */.bp)();
  const currentPage = Number(App.state.pagination.currentPage);
  const router = (0,router_.useRouter)();
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching
  } = (0,external_react_query_.useQuery)([queryKeys/* queryKeys.NOTICE_LIST.name */.a.NOTICE_LIST.name, currentPage, queryKeys/* queryKeys.NOTICE_LIST.limit */.a.NOTICE_LIST.limit], async () => await api/* Get.getNoticeList */.dX.getNoticeList(currentPage, queryKeys/* queryKeys.NOTICE_LIST.limit */.a.NOTICE_LIST.limit), {
    retry: 0,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: 2000
  });
  if (isError) return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: "isError"
  });
  if (isLoading) return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: "loading"
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.Notice, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PageTitle/* default */.Z, {
      TitleText: "\uACF5\uC9C0\uC0AC\uD56D"
    }), /*#__PURE__*/jsx_runtime_.jsx(List/* default */.Z, {
      items: data.items,
      isLoading: isLoading
    }), isSuccess && /*#__PURE__*/jsx_runtime_.jsx(Pagination/* default */.Z, {
      className: "page-nation",
      maxPages: data.maxPages,
      isFetching: isFetching
    })]
  });
}
// EXTERNAL MODULE: ./src/constants/path.ts
var path = __webpack_require__(643);
// EXTERNAL MODULE: ./src/components/Common/Breadcrumb.tsx
var Breadcrumb = __webpack_require__(7777);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/pages/board/notice/index.tsx










function NoticePage() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\uC96C\uC5BC\uB9AC | \uACF5\uC9C0\uC0AC\uD56D \uB9AC\uC2A4\uD2B8"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "\uACF5\uC9C0\uC0AC\uD56D \uB9AC\uC2A4\uD2B8 \uD398\uC774\uC9C0"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainContainer/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Breadcrumb/* default */.Z, {
        children: [path/* default.MAIN */.Z.MAIN, path/* default.NOTICE */.Z.NOTICE].map(({
          path,
          tag
        }) => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: path,
          children: tag
        }, path))
      }), /*#__PURE__*/jsx_runtime_.jsx(Notice, {})]
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
var __webpack_exports__ = __webpack_require__.X(0, [1664,8703,6930,3803,643,8740,693,3493,6908,9970,7320,7757], function() { return __webpack_exec__(7590); });
module.exports = __webpack_exports__;

})();