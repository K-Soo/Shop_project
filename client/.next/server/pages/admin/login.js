(function() {
var exports = {};
exports.id = 2300;
exports.ids = [2300];
exports.modules = {

/***/ 9546:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useDidMountEffect = (func, deps) => {
  const didMount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (didMount.current) func();else didMount.current = true;
  }, deps);
};

/* harmony default export */ __webpack_exports__["Z"] = (useDidMountEffect);

/***/ }),

/***/ 9449:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ LoginPage; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/components/style/Title.tsx
var Title = __webpack_require__(6930);
// EXTERNAL MODULE: ./src/components/style/Input.tsx
var Input = __webpack_require__(8847);
// EXTERNAL MODULE: ./src/components/style/Button.tsx
var Button = __webpack_require__(8761);
// EXTERNAL MODULE: ./src/context/AdminProvider.tsx + 1 modules
var AdminProvider = __webpack_require__(1160);
// EXTERNAL MODULE: ./src/api/index.ts
var api = __webpack_require__(8740);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(3803);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./src/components/Admin/LoginControllers/index.tsx











const S = {
  LoginControllers: external_styled_components_default().div.withConfig({
    displayName: "LoginControllers",
    componentId: "vgxs9n-0"
  })(["margin-top:-40px;height:100vh;background-color:#999;display:flex;align-items:center;justify-content:center;"]),
  Content: external_styled_components_default().div.withConfig({
    displayName: "LoginControllers__Content",
    componentId: "vgxs9n-1"
  })(["margin:0 10px;height:250px;width:300px;background-color:#fff;border-radius:5px;padding:10px;.form-box{display:flex;flex-direction:column;height:100%;justify-content:space-between;}"])
};
function LoginControllers() {
  const {
    state,
    action
  } = (0,AdminProvider/* useAdminContext */.O)();
  const router = (0,router_.useRouter)();

  const handleSubmit = async e => {
    e.preventDefault();

    if ([state.user.id, state.user.password].includes('')) {
      return alert('로그인 정보를 모두 입력해주세요.');
    }

    const obj = {
      userId: state.user.id,
      password: state.user.password
    };

    try {
      const res = await api/* Post.login */.SO.login(obj);

      if (res.success) {
        utils/* customCookie.set */.S1.set("access_token_a", res.token);
        router.push('/admin');
      }
    } catch (error) {
      alert('로그인 정보가 정확하지않습니다.');
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(S.LoginControllers, {
    children: /*#__PURE__*/jsx_runtime_.jsx(S.Content, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        onSubmit: handleSubmit,
        className: "form-box",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("fieldset", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
            level: 6,
            marginB: "20",
            children: "LOGIN"
          }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
            name: "user.id",
            margin: "0 0 10px 0",
            placeholder: "\uC544\uC774\uB514",
            onChange: action.setFormData
          }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
            name: "user.password",
            margin: "0 0 10px 0",
            placeholder: "\uBE44\uBC00\uBC88\uD638",
            type: "password",
            onChange: action.setFormData
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          black: true,
          type: "submit",
          children: "\uB85C\uADF8\uC778"
        })]
      })
    })
  });
}
;// CONCATENATED MODULE: ./src/pages/admin/login.tsx







const login_S = {
  Login: external_styled_components_default().div.withConfig({
    displayName: "login__Login",
    componentId: "sc-13g0dli-0"
  })(["background-color:#000;height:100vh;"])
};
function LoginPage() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\uAD00\uB9AC\uC790"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(LoginControllers, {})]
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [6930,3803,8740,8761,8847,6155], function() { return __webpack_exec__(9449); });
module.exports = __webpack_exports__;

})();