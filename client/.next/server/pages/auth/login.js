(function() {
var exports = {};
exports.id = 9344;
exports.ids = [9344];
exports.modules = {

/***/ 2727:
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
// EXTERNAL MODULE: ./src/containers/MainContainer.tsx
var MainContainer = __webpack_require__(9490);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/components/style/Button.tsx
var Button = __webpack_require__(8761);
// EXTERNAL MODULE: ./src/api/index.ts
var api = __webpack_require__(8740);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(3803);
// EXTERNAL MODULE: ./src/context/AppProvider.tsx + 1 modules
var AppProvider = __webpack_require__(693);
// EXTERNAL MODULE: ./src/components/Common/PageTitle.tsx
var PageTitle = __webpack_require__(6908);
// EXTERNAL MODULE: ./src/components/style/Input.tsx
var Input = __webpack_require__(8847);
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__(3595);
// EXTERNAL MODULE: ./src/context/OrderProvider.tsx + 1 modules
var OrderProvider = __webpack_require__(1098);
// EXTERNAL MODULE: ./src/constants/path.ts
var path = __webpack_require__(643);
;// CONCATENATED MODULE: ./src/components/Auth/Login/NonMemBox.tsx










const S = {
  NonMemBox: external_styled_components_default().div.withConfig({
    displayName: "NonMemBox",
    componentId: "sc-1k3jhrj-0"
  })(["margin-top:15px;display:flex;font-size:13px;p{flex-basis:60%;color:#999;display:flex;align-items:center;}", "{flex-basis:40%;display:flex;align-items:center;justify-content:center;font-size:13px;span{margin-left:5px;}i{font-size:0;height:16px;svg{color:#333;height:100%;}}}"], Button/* default */.Z)
};
function NonMemBox() {
  const router = (0,router_.useRouter)();
  const {
    action
  } = (0,AppProvider/* useAppContext */.bp)();
  const Order = (0,OrderProvider/* useOrderContext */.m)();

  const handleNonMemLogin = () => {
    action.InitData('status.guest', true);
    localStorage.setItem('guest', 'on');
    Order.action.setInitOrderForm();
    router.push(path/* default.ORDER.path */.Z.ORDER.path);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.NonMemBox, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "\uBE44\uD68C\uC6D0\uC73C\uB85C\uB3C4 \uC0C1\uD488\uAD6C\uB9E4\uAC00 \uAC00\uB2A5\uD558\uB098 \uB2E4\uC591\uD55C \uD68C\uC6D0\uD61C\uD0DD\uC5D0\uC11C \uC81C\uC678\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Button/* default */.Z, {
      white: true,
      height: "40px",
      onClick: handleNonMemLogin,
      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
        children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
          name: "userNot"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "\uBE44\uD68C\uC6D0 \uAD6C\uB9E4"
      })]
    })]
  });
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/constants/auth.ts
const AUTH_QUICK_LIST = [{
  label: '회원가입',
  url: '/auth/register',
  value: 'register'
}, {
  label: '아이디 찾기',
  url: '/auth/login/find-id',
  value: 'findId'
}, {
  label: '비밀번호 찾기',
  url: '/auth/login/find-password',
  value: 'findPassword'
}];
;// CONCATENATED MODULE: ./src/components/Auth/Login/QuickBox.tsx





const QuickBox_S = {
  QuickBox: external_styled_components_default().div.withConfig({
    displayName: "QuickBox",
    componentId: "sc-1p77t01-0"
  })(["margin-top:30px;padding:15px 0;border-top:1px solid #dee2e6;font-size:14px;.lists{display:flex;justify-content:space-between;color:#444;li{flex:1;text-align:center;border-right:1px solid #dee2e6;&:hover{color:#000;}&:first-child{a{border-bottom:2px solid #333;}}&:last-child{border:none;}}}"])
};
function QuickBox() {
  return /*#__PURE__*/jsx_runtime_.jsx(QuickBox_S.QuickBox, {
    children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "lists",
      children: AUTH_QUICK_LIST.map(d => /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: d.url,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: d.label
          })
        })
      }, d.value))
    })
  });
}
// EXTERNAL MODULE: ./src/hooks/useDidMountEffect.ts
var useDidMountEffect = __webpack_require__(9546);
// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__(3308);
;// CONCATENATED MODULE: external "@mui/material/FormControlLabel"
var FormControlLabel_namespaceObject = require("@mui/material/FormControlLabel");;
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Switch"
var Switch_namespaceObject = require("@mui/material/Switch");;
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Checkbox"
var Checkbox_namespaceObject = require("@mui/material/Checkbox");;
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Auth/Login/index.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const Login_S = {
  Login: external_styled_components_default().section.withConfig({
    displayName: "Login",
    componentId: "sc-173k9-0"
  })(["max-width:350px;margin:0 auto;.security{font-size:13px;display:flex;justify-content:space-between;align-items:center;.ctr-label{margin:0;display:flex;align-items:center;.check{padding:5px;}.css-ahj2mt-MuiTypography-root{font-size:13px;}}}"]),
  LoginTap: external_styled_components_default().ul.withConfig({
    displayName: "Login__LoginTap",
    componentId: "sc-173k9-1"
  })(["display:flex;height:30px;margin-bottom:15px;font-size:12px;li{flex:1;height:100%;line-height:30px;text-align:center;cursor:pointer;&:nth-child(1){border:", ";border-width:", ";background-color:", ";}&:nth-child(2){border:", ";border-width:", ";background-color:", ";}}"], props => props.users === 'member' ? 'solid #dee2e6' : 'solid #dee2e6', props => props.users === 'member' ? '1px 1px 0 1px' : '0 0 1px 0', props => props.users === 'member' ? '#fff' : '#f9f9f9', props => props.users === 'nonMember' ? 'solid #dee2e6' : 'solid #dee2e6', props => props.users === 'nonMember' ? '1px 1px 0 1px' : '0 0 1px 0', props => props.users === 'nonMember' ? '#fff' : '#f9f9f9')
};
const initLogin = {
  userId: '',
  password: ''
};
const initOrderFind = {
  userName: '',
  orderNum: '',
  orderPassword: ''
};
const category = [{
  label: '회원',
  value: 'member'
}, {
  label: '비회원',
  value: 'nonMember'
}];
function Login({
  type
}) {
  const {
    0: login,
    1: setLogin
  } = (0,external_react_.useState)(initLogin);
  const {
    0: orderFind,
    1: setOrderFind
  } = (0,external_react_.useState)(initOrderFind);
  const {
    0: users,
    1: setUsers
  } = (0,external_react_.useState)('member');
  const {
    0: rememberId,
    1: setRememberId
  } = (0,external_react_.useState)(false);
  const {
    action
  } = (0,AppProvider/* useAppContext */.bp)();
  const router = (0,router_.useRouter)();
  const {
    enqueueSnackbar,
    closeSnackbar
  } = (0,external_notistack_.useSnackbar)();
  (0,external_react_.useEffect)(() => {
    const existId = JSON.parse(localStorage.getItem("remember_id"));

    if (existId) {
      setRememberId(true);
      setLogin(_objectSpread(_objectSpread({}, login), {}, {
        userId: existId
      }));
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  (0,useDidMountEffect/* default */.Z)(() => {
    setLogin(initLogin);
    setOrderFind(initOrderFind);
  }, [users]);

  const handleSubmit = async e => {
    e.preventDefault();
    closeSnackbar();

    if ([login.userId, login.password].includes('')) {
      return alert('로그인 정보를 모두 입력해주세요.');
    }

    try {
      const res = await api/* Post.login */.SO.login({
        userId: login.userId,
        password: login.password
      });

      if (res.success) {
        var _res$basket;

        utils/* customCookie.set */.S1.set("access_token", res.token);
        if ((_res$basket = res.basket) !== null && _res$basket !== void 0 && _res$basket.items) action.setLocalItems(res.basket.items);
        localStorage.removeItem('unknown-basket');
        localStorage.removeItem('guest');

        if (rememberId) {
          localStorage.setItem('remember_id', JSON.stringify(login.userId));
        }

        router.push(path/* default.MAIN.path */.Z.MAIN.path);
      }
    } catch (error) {
      enqueueSnackbar('아이디 또는 비밀번호를 확인해주세요.', {
        variant: 'error'
      });
    }
  };

  const handleGuestSubmit = async e => {
    e.preventDefault();

    if ([orderFind.userName, orderFind.orderPassword, orderFind.orderNum].includes('')) {
      return alert('주문정보를 모두 입력해주세요.');
    }

    try {
      const res = await api/* Post.guestLogin */.SO.guestLogin(orderFind);
      if (res.success) router.push(path/* default.MAIN.path */.Z.MAIN.path);
    } catch (error) {
      alert('주문정보를 다시확인해주세요');
      console.error('login: ', error);
    }
  };

  const handleChangeLogin = e => {
    const {
      name,
      value
    } = e.target;
    setLogin(_objectSpread(_objectSpread({}, login), {}, {
      [name]: value
    }));
  };

  const handleChangeGuest = e => {
    const {
      name,
      value
    } = e.target;
    setOrderFind(_objectSpread(_objectSpread({}, orderFind), {}, {
      [name]: value
    }));
  };

  const handleCategory = e => {
    const {
      className
    } = e.target;
    setUsers(className);
  };

  const handleRememberId = e => {
    const isChecked = e.target.checked;

    if (isChecked) {
      setRememberId(isChecked);
    } else {
      setRememberId(isChecked);
      localStorage.removeItem('remember_id');
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Login_S.Login, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PageTitle/* default */.Z, {
      TitleText: "\uB85C\uADF8\uC778"
    }), type === 'history' && /*#__PURE__*/jsx_runtime_.jsx(Login_S.LoginTap, {
      users: users,
      children: category.map(d => /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: d.value,
        onClick: handleCategory,
        children: d.label
      }, d.value))
    }), users === 'member' && /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("fieldset", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
          placeholder: "\uC544\uC774\uB514",
          margin: "0 0 10px 0",
          name: "userId",
          value: login.userId,
          onChange: handleChangeLogin
        }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
          placeholder: "\uBE44\uBC00\uBC88\uD638",
          type: "password",
          name: "password",
          value: login.password,
          onChange: handleChangeLogin
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("fieldset", {
        className: "security",
        children: [/*#__PURE__*/jsx_runtime_.jsx((FormControlLabel_default()), {
          className: "ctr-label",
          labelPlacement: "start",
          control: /*#__PURE__*/jsx_runtime_.jsx((Switch_default()), {
            defaultChecked: true,
            size: "small",
            color: "default"
          }),
          label: "\uBCF4\uC548\uC811\uC18D"
        }), /*#__PURE__*/jsx_runtime_.jsx((FormControlLabel_default()), {
          className: "ctr-label",
          labelPlacement: "start",
          control: /*#__PURE__*/jsx_runtime_.jsx((Checkbox_default()), {
            className: "check",
            color: "default",
            size: "small",
            checked: rememberId,
            onChange: handleRememberId
          }),
          label: "\uC544\uC774\uB514 \uC800\uC7A5"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        login: true,
        type: "submit",
        children: "\uB85C\uADF8\uC778"
      }), /*#__PURE__*/jsx_runtime_.jsx(QuickBox, {})]
    }), type === 'history' && users === 'nonMember' && /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      onSubmit: handleGuestSubmit,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("fieldset", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
          placeholder: "\uC8FC\uBB38\uC790\uBA85",
          margin: "0 0 10px 0",
          name: "userName",
          onChange: handleChangeGuest
        }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
          placeholder: "\uC8FC\uBB38\uBC88\uD638 \uD558\uC774\uD508(-)\uD3EC\uD568",
          margin: "0 0 10px 0",
          name: "orderNum",
          onChange: handleChangeGuest
        }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
          placeholder: "\uBE44\uD68C\uC6D0 \uD328\uC2A4\uC6CC\uB4DC",
          margin: "0 0 10px 0",
          type: "password",
          name: "orderPassword",
          onChange: handleChangeGuest
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        login: true,
        type: "submit",
        children: "\uC870\uD68C"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        style: {
          fontSize: '12px',
          marginTop: '10px',
          color: '#757575'
        },
        children: "\uBE44\uD68C\uC6D0\uC778 \uACBD\uC6B0 \uC8FC\uBB38\uBC88\uD638\uB85C \uC8FC\uBB38\uC870\uD68C\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4."
      })]
    }), type === 'order' && /*#__PURE__*/jsx_runtime_.jsx(NonMemBox, {})]
  });
}
;
// EXTERNAL MODULE: ./src/components/Common/Breadcrumb.tsx
var Breadcrumb = __webpack_require__(7777);
;// CONCATENATED MODULE: ./src/pages/auth/login/index.tsx











function LoginPage() {
  const router = (0,router_.useRouter)();
  const {
    type
  } = router.query;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\uB85C\uADF8\uC778"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainContainer/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Breadcrumb/* default */.Z, {
        children: [path/* default.MAIN */.Z.MAIN, path/* default.LOGIN */.Z.LOGIN].map(({
          path,
          tag
        }) => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: path,
          children: tag
        }, path))
      }), /*#__PURE__*/jsx_runtime_.jsx(Login, {
        type: type
      })]
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,8703,6930,3803,643,8740,8761,693,3493,6908,8847,1098], function() { return __webpack_exec__(2727); });
module.exports = __webpack_exports__;

})();