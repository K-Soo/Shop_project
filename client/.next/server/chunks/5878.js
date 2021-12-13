exports.id = 5878;
exports.ids = [5878];
exports.modules = {

/***/ 5878:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ UserInfo; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_style_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8761);
/* harmony import */ var components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3595);
/* harmony import */ var context_AppProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(693);
/* harmony import */ var context_OrderProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1098);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3803);










const S = {
  UserInfo: styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "UserInfo",
    componentId: "mv4dui-0"
  })(["border:5px solid #f5f5f5;height:100px;padding:15px;display:flex;.user-icon{padding-right:20px;width:70px;border-right:1px solid #f0f0f0;display:flex;align-items:center;justify-content:center;i{display:inline-block;font-size:0;}}"]),
  MemberInfo: styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "UserInfo__MemberInfo",
    componentId: "mv4dui-1"
  })(["flex:1;padding-left:30px;display:flex;flex-direction:column;justify-content:space-between;font-size:14px;color:#404040;.name{flex:1;display:flex;align-items:center}.point{flex:1;display:flex;align-items:center;i{font-size:0;margin-right:5px;svg{color:#000;height:17px;width:18px;}}a{border-bottom:1px solid #999;&:hover{border-bottom:1px solid #000;}}}"]),
  NonMemberInfo: styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "UserInfo__NonMemberInfo",
    componentId: "mv4dui-2"
  })(["flex:1;padding-left:30px;display:flex;flex-direction:column;justify-content:space-between;font-size:12px;color:#404040;.text{flex:1;}.link-box{flex:1;display:flex;", "{height:auto;font-size:12px;padding:0;width:80px;height:25px;a{display:flex;justify-content:center;align-items:center;width:100%;height:100%;}}}"], components_style_Button__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)
};
function UserInfo({
  currentPoint
}) {
  const {
    state: {
      userInfo: {
        userId
      }
    }
  } = (0,context_AppProvider__WEBPACK_IMPORTED_MODULE_5__/* .useAppContext */ .bp)();
  const Order = (0,context_OrderProvider__WEBPACK_IMPORTED_MODULE_6__/* .useOrderContext */ .m)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(S.UserInfo, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "user-icon",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
        children: userId ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
          name: "user"
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
          name: "userNot"
        })
      })
    }), userId ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(S.MemberInfo, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        className: "name",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
          children: userId
        }), "\uB2D8 \uC548\uB155\uD558\uC138\uC694."]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        className: "point",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
            name: "coin"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_7__.default, {
          href: "/users/point",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            children: ["\uAC00\uC6A9\uC801\uB9BD\uAE08: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
              children: [(0,utils__WEBPACK_IMPORTED_MODULE_8__/* .PriceComma */ .OB)(currentPoint), "\uC6D0"]
            })]
          })
        })]
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(S.NonMemberInfo, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        className: "text",
        children: ["\uC800\uD76C \uC1FC\uD551\uBAB0\uC744 \uC774\uC6A9\uD574\uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4.", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), "\uD68C\uC6D0\uAC00\uC785 \uD558\uC2DC\uBA74 \uD61C\uD0DD\uB4E4\uC744 \uBC1B\uC73C\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        className: "link-box",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_style_Button__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
          black: true,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_7__.default, {
            href: "/auth/login",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              children: "\uB85C\uADF8\uC778"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_style_Button__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
          white: true,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_7__.default, {
            href: "/auth/register",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              children: "\uD68C\uC6D0\uAC00\uC785"
            })
          })
        })]
      })]
    })]
  });
}

/***/ })

};
;