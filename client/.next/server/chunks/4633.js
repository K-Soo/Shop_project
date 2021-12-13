exports.id = 4633;
exports.ids = [4633];
exports.modules = {

/***/ 4633:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ HamburgerIcon; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);




const S = {
  HamburgerIcon: styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "HamburgerIcon",
    componentId: "sc-11z5i8s-0"
  })(["cursor:pointer;width:25px;height:25px;display:flex;justify-content:space-around;align-items:center;flex-flow:column nowrap;overflow:hidden;.line{pointer-events:none;margin:0 auto;width:25px;height:2px;background-color:", ";border-radius:10px;transform-origin:1px;overflow:hidden;transition:all 0.3s linear;&:nth-child(1){transform:", ";}&:nth-child(2){transform:", ";opacity:", ";}&:nth-child(3){transform:", ";}}"], ({
    toggle
  }) => toggle ? "#ccc" : "#333", ({
    toggle
  }) => toggle ? "rotate(45deg)" : "rotate(0)", ({
    toggle
  }) => toggle ? "translateX(100%)" : "translateX(0)", ({
    toggle
  }) => toggle ? 0 : 1, ({
    toggle
  }) => toggle ? "rotate(-45deg)" : "rotate(0)")
};
function HamburgerIcon({
  className,
  toggle,
  onClick,
  dataName
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(S.HamburgerIcon, {
    className: className,
    toggle: toggle,
    onClick: onClick,
    "data-name": dataName,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
      className: "line"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
      className: "line"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
      className: "line"
    })]
  });
}

/***/ })

};
;