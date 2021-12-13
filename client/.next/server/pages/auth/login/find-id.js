(function() {
var exports = {};
exports.id = 675;
exports.ids = [675];
exports.modules = {

/***/ 7704:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ FindIdPage; }
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
// EXTERNAL MODULE: ./src/components/style/Input.tsx
var Input = __webpack_require__(8847);
// EXTERNAL MODULE: ./src/components/style/Button.tsx
var Button = __webpack_require__(8761);
// EXTERNAL MODULE: ./src/api/index.ts
var api = __webpack_require__(8740);
// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__(3308);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/constants/path.ts
var path = __webpack_require__(643);
;// CONCATENATED MODULE: ./src/components/Auth/FindId/index.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const S = {
  FindId: external_styled_components_default().section.withConfig({
    displayName: "FindId",
    componentId: "sc-8y83eu-0"
  })(["max-width:350px;margin:0 auto;button{height:40px;font-size:13px;}"]),
  View: external_styled_components_default().div.withConfig({
    displayName: "FindId__View",
    componentId: "sc-8y83eu-1"
  })(["border:1px solid #999;background:#f9f9f9;height:300px;display:flex;flex-direction:column;justify-content:center;align-items:center;button{margin-top:30px;width:100px;}"])
};
const initFind = {
  userName: '',
  email: ''
};
function FindId() {
  const {
    0: findId,
    1: setFindId
  } = (0,external_react_.useState)(initFind);
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)(null);
  const {
    enqueueSnackbar,
    closeSnackbar
  } = (0,external_notistack_.useSnackbar)();
  const router = (0,router_.useRouter)();

  const handleSubmit = async e => {
    e.preventDefault();
    closeSnackbar();

    if ([findId.userName, findId.email].includes('')) {
      return alert('정보를 모두 입력해주세요.');
    }

    try {
      const res = await api/* Post.findUserId */.SO.findUserId(findId);

      if (res.success) {
        setData(res.userId);
      }
    } catch (error) {
      enqueueSnackbar('존재하지않는 회원입니다.', {
        variant: 'error'
      });
    }
  };

  const handleChangeLogin = e => {
    const {
      name,
      value
    } = e.target;
    setFindId(_objectSpread(_objectSpread({}, findId), {}, {
      [name]: value
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.FindId, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PageTitle/* default */.Z, {
      TitleText: "\uC544\uC774\uB514 \uCC3E\uAE30"
    }), data ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.View, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["\uD68C\uC6D0\uB2D8\uC758 \uC544\uC774\uB514\uB294 ", /*#__PURE__*/jsx_runtime_.jsx("strong", {
          children: data
        }), " \uC785\uB2C8\uB2E4"]
      }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        login: true,
        onClick: () => router.push(path/* default.MAIN.path */.Z.MAIN.path),
        children: "\uBA54\uC778\uC73C\uB85C"
      })]
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("fieldset", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
          placeholder: "\uC774\uB984",
          name: "userName",
          onChange: handleChangeLogin,
          margin: "0 0 10px 0",
          value: findId.userName
        }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
          name: "email",
          placeholder: "\uC774\uBA54\uC77C",
          onChange: handleChangeLogin,
          margin: "0 0 10px 0",
          value: findId.email
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        login: true,
        type: "submit",
        children: "\uC774\uBA54\uC77C\uB85C \uCC3E\uAE30"
      })]
    })]
  });
}
// EXTERNAL MODULE: ./src/components/Common/Breadcrumb.tsx
var Breadcrumb = __webpack_require__(7777);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/pages/auth/login/find-id.tsx










function FindIdPage() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\uC544\uC774\uB514\uCC3E\uAE30"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainContainer/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Breadcrumb/* default */.Z, {
        children: [path/* default.MAIN */.Z.MAIN, path/* default.LOGIN */.Z.LOGIN, path/* default.FIND_ID */.Z.FIND_ID].map(({
          path,
          tag
        }) => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: path,
          children: tag
        }, path))
      }), /*#__PURE__*/jsx_runtime_.jsx(FindId, {})]
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

/***/ 3308:
/***/ (function(module) {

"use strict";
module.exports = require("notistack");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,8703,6930,3803,643,8740,8761,3493,6908,8847], function() { return __webpack_exec__(7704); });
module.exports = __webpack_exports__;

})();