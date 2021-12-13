exports.id = 8761;
exports.ids = [8761];
exports.modules = {

/***/ 8761:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);




const Button = ({
  className,
  children,
  onClick,
  type,
  name,
  dataColor,
  disabled,
  onKeyPress,
  value,
  color
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
    className: className,
    onClick: onClick,
    type: type !== null && type !== void 0 ? type : 'button',
    "data-color": dataColor,
    name: name,
    disabled: disabled,
    onKeyPress: onKeyPress,
    value: value,
    children: children
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (styled_components__WEBPACK_IMPORTED_MODULE_2___default()(Button).withConfig({
  displayName: "Button",
  componentId: "xh1pk1-0"
})(["width:", ";height:", ";margin:", ";font-size:", ";font-weight:", ";cursor:pointer;text-align:center;background:", ";color:#ffffff;border:none;letter-spacing:2px;white-space:nowrap;", " ", " ", " ", " ", " ", ""], ({
  width
}) => width !== null && width !== void 0 ? width : "100%", ({
  height
}) => height !== null && height !== void 0 ? height : "50px", ({
  margin
}) => margin !== null && margin !== void 0 ? margin : "0px", ({
  fontSize
}) => fontSize !== null && fontSize !== void 0 ? fontSize : "16px", ({
  fontWeight
}) => fontWeight !== null && fontWeight !== void 0 ? fontWeight : "500", ({
  color
}) => color !== null && color !== void 0 ? color : "#152a69", props => props.pageNum && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["all:unset;"]), props => props.login && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["background:#333;&:hover{background:#2a2b2d;}"]), props => props.kakao && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["background:#feed35;color:#222;&:hover{background:#ffff6e;}"]), props => props.black && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["color:#fff;padding:0 10px;border:1px solid #222;border-bottom-color:#222;box-shadow:0 2px 2px rgb(0 0 0 / 4%);text-shadow:0 0 2px rgb(0 0 0 / 20%);background:#333;&:hover{background:#2a2b2d;transition:all 0.3s ease-in-out;}"]), props => props.white && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["background:linear-gradient(to bottom,#ffffff 40%,#f6f6f6 100%);padding:0 10px;color:#333;border:1px solid #ebebeb;border-bottom-color:#c6c6c6;box-shadow:0 2px 2px rgb(0 0 0 / 4%);text-shadow:0 0 2px rgb(255 255 255);&:hover{background:#fff;}"]), props => props.disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["background:#999;border:none;text-shadow:none;color:#fff;cursor:default;&:hover{background-color:#999;}"])));

/***/ })

};
;