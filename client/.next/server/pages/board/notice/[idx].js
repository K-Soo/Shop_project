(function() {
var exports = {};
exports.id = 9461;
exports.ids = [9461];
exports.modules = {

/***/ 6182:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ NoticeDetailPage; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
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
// EXTERNAL MODULE: ./src/components/style/Button.tsx
var Button = __webpack_require__(8761);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./src/components/Board/Notice/Detail.tsx







const S = {
  Detail: external_styled_components_default().section.withConfig({
    displayName: "Detail",
    componentId: "sc-13hggsu-0"
  })([""]),
  Content: external_styled_components_default().article.withConfig({
    displayName: "Detail__Content",
    componentId: "sc-13hggsu-1"
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
function Detail({
  item
}) {
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.Detail, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PageTitle/* default */.Z, {
      TitleText: "\uACF5\uC9C0\uC0AC\uD56D"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.Content, {
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
    })]
  });
}
// EXTERNAL MODULE: ./src/api/index.ts
var api = __webpack_require__(8740);
// EXTERNAL MODULE: external "next/error"
var error_ = __webpack_require__(8354);
var error_default = /*#__PURE__*/__webpack_require__.n(error_);
// EXTERNAL MODULE: ./src/constants/path.ts
var path = __webpack_require__(643);
// EXTERNAL MODULE: ./src/components/Common/Breadcrumb.tsx
var Breadcrumb = __webpack_require__(7777);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/pages/board/notice/[idx].tsx













function NoticeDetailPage(props) {
  const router = (0,router_.useRouter)();

  if (props.errorCode) {
    return /*#__PURE__*/jsx_runtime_.jsx((error_default()), {
      statusCode: props.errorCode
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\uC96C\uC5BC\uB9AC | \uACF5\uC9C0\uC0AC\uD56D"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "\uACF5\uC9C0\uC0AC\uD56D \uB514\uD14C\uC77C"
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
      }), /*#__PURE__*/jsx_runtime_.jsx(Detail, {
        item: props.item
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
    const res = await api/* Get.getNoticeDetail */.dX.getNoticeDetail(idx);
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
var __webpack_exports__ = __webpack_require__.X(0, [1664,8703,6930,3803,643,8740,8761,3493,6908], function() { return __webpack_exec__(6182); });
module.exports = __webpack_exports__;

})();