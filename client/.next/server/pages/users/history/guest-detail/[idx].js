(function() {
var exports = {};
exports.id = 9729;
exports.ids = [9729];
exports.modules = {

/***/ 9342:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GuestDetailsPage; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var containers_MainContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9490);
/* harmony import */ var context_AppProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(693);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_History_Details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1431);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8354);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8740);
/* harmony import */ var constants_path__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(643);
/* harmony import */ var components_Common_Breadcrumb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7777);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1664);














function GuestDetailsPage(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  console.log('router: ', router);
  const {
    state: {
      userInfo
    }
  } = (0,context_AppProvider__WEBPACK_IMPORTED_MODULE_4__/* .useAppContext */ .bp)();

  if (props.errorCode) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_error__WEBPACK_IMPORTED_MODULE_7___default()), {
      statusCode: props.errorCode
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: "\uC96C\uC5BC\uB9AC | \uC8FC\uBB38\uB0B4\uC5ED \uC0C1\uC138"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "description",
        content: "\uC0C1\uD488 \uC8FC\uBB38\uB0B4\uC5ED \uC0C1\uC138"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(containers_MainContainer__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Common_Breadcrumb__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
        children: [constants_path__WEBPACK_IMPORTED_MODULE_9__/* .default.MAIN */ .Z.MAIN].map(({
          path,
          tag
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_11__.default, {
          href: path,
          children: tag
        }, path))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_History_Details__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        items: props.items
      })]
    })]
  });
}
;
const getServerSideProps = async context => {
  const {
    idx
  } = context.query;

  try {
    const res = await api__WEBPACK_IMPORTED_MODULE_8__/* .Get.getGuestHistoryDetail */ .dX.getGuestHistoryDetail(idx);
    console.log('res: ', res);
    return {
      props: {
        items: res
      }
    };
  } catch (error) {
    return {
      props: {
        errorCode: error.response.status
      }
    };
  }
};

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

/***/ 8354:
/***/ (function(module) {

"use strict";
module.exports = require("next/error");;

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

/***/ 9341:
/***/ (function(module) {

"use strict";
module.exports = require("react-to-print");;

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5675,8703,6930,3803,643,8740,8761,693,3493,6908,8608,1431], function() { return __webpack_exec__(9342); });
module.exports = __webpack_exports__;

})();