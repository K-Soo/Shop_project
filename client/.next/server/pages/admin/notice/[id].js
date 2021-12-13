(function() {
var exports = {};
exports.id = 7067;
exports.ids = [7067];
exports.modules = {

/***/ 8531:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ NoticeControllers; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var context_AdminProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1160);




const S = {
  NoticeControllers: styled_components__WEBPACK_IMPORTED_MODULE_2___default().section.withConfig({
    displayName: "NoticeControllers",
    componentId: "q7outz-0"
  })(["height:100%;width:100%;background-color:", ";border-radius:5px;padding:20px;"], props => props.isWhite ? '#FFF' : '#1F2A40')
};
function NoticeControllers({
  children
}) {
  const {
    state
  } = (0,context_AdminProvider__WEBPACK_IMPORTED_MODULE_3__/* .useAdminContext */ .O)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(S.NoticeControllers, {
    isWhite: state.isWhite,
    children: children
  });
}

/***/ }),

/***/ 7177:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ AdminNoticeDetailPage; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/api/index.ts
var api = __webpack_require__(8740);
// EXTERNAL MODULE: external "next/error"
var error_ = __webpack_require__(8354);
var error_default = /*#__PURE__*/__webpack_require__.n(error_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/containers/AdminContainer.tsx + 4 modules
var AdminContainer = __webpack_require__(5931);
// EXTERNAL MODULE: ./src/components/Admin/NoticeControllers/index.tsx
var NoticeControllers = __webpack_require__(8531);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/components/style/Button.tsx
var Button = __webpack_require__(8761);
;// CONCATENATED MODULE: ./src/components/Admin/NoticeControllers/NoticeDetail.tsx






const S = {
  NoticeDetail: external_styled_components_default().div.withConfig({
    displayName: "NoticeDetail",
    componentId: "sc-138ku7-0"
  })([""]),
  Content: external_styled_components_default().article.withConfig({
    displayName: "NoticeDetail__Content",
    componentId: "sc-138ku7-1"
  })([".title-box{display:flex;margin-bottom:15px;p{padding:5px 0;}p:first-child{flex:1 10%;border:1px solid #f0f0f0;padding-left:10px;background-color:#f9f9f9;font-size:14px;min-width:50px;}p:nth-child(2){flex:1 90%;border:solid #f0f0f0;border-width:1px 1px 1px 0;padding-left:10px;color:#353535;font-size:14px;}}.text{border:1px solid #f0f0f0;padding:30px;min-height:300px;", "}", ""], ({
    theme
  }) => theme.mobile`
        padding: 10px;
      }
    `, ({
    theme
  }) => theme.mobile`
        padding: 0 15px;
      }
    `)
};
function NoticeDetail({
  item
}) {
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(S.NoticeDetail, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.Content, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "title-box",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "\uC81C\uBAA9"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: item.title
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text",
        dangerouslySetInnerHTML: {
          __html: item.content
        }
      }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        white: true,
        margin: "15px 0 0 0",
        width: "100",
        height: "30px",
        onClick: () => router.back(),
        children: "\uBAA9\uB85D\uC73C\uB85C"
      })]
    })
  });
}
;// CONCATENATED MODULE: ./src/pages/admin/notice/[id].tsx











function AdminNoticeDetailPage(props) {
  const router = (0,router_.useRouter)();

  if (props.errorCode) {
    return /*#__PURE__*/jsx_runtime_.jsx((error_default()), {
      statusCode: props.errorCode
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\uAD00\uB9AC\uC790"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(AdminContainer/* default */.Z, {
      children: /*#__PURE__*/jsx_runtime_.jsx(NoticeControllers/* default */.Z, {
        children: /*#__PURE__*/jsx_runtime_.jsx(NoticeDetail, {
          item: props.item
        })
      })
    })]
  });
}
;
const getServerSideProps = async context => {
  const {
    id
  } = context.query;

  try {
    const res = await api/* Get.getNoticeDetail */.dX.getNoticeDetail(id);
    return {
      props: {
        item: res
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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5675,8703,6930,3803,643,8740,8761,693,6155,5931], function() { return __webpack_exec__(7177); });
module.exports = __webpack_exports__;

})();