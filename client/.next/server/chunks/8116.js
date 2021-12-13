exports.id = 8116;
exports.ids = [8116];
exports.modules = {

/***/ 8116:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);




let Select = ({
  className,
  children,
  name,
  value,
  id,
  onChange,
  disabled,
  required,
  maxWidth
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
    required: required,
    className: className,
    name: name,
    id: id,
    value: value,
    onChange: onChange,
    disabled: disabled,
    children: children
  });
};

Select = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(Select).withConfig({
  displayName: "Select",
  componentId: "sc-1qxlwm6-0"
})(["box-sizing:border-box;width:", ";max-width:", ";margin-left:", ";margin-right:", ";height:", ";font-size:14px;padding-left:15px;border:1px solid #dee2e6;cursor:pointer;:hover{border:1px solid #333;}", ""], ({
  width
}) => width ? `${width}px` : '100%', ({
  maxWidth
}) => maxWidth ? `${maxWidth}px` : '100%', ({
  marginLeft
}) => {
  var _ref;

  return (_ref = `${marginLeft}px`) !== null && _ref !== void 0 ? _ref : "0";
}, ({
  marginRight
}) => {
  var _ref2;

  return (_ref2 = `${marginRight}px`) !== null && _ref2 !== void 0 ? _ref2 : "0";
}, props => props.height ? `${props.height}px` : "100%", props => props.disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["background-color:#f2f3f4;cursor:default;color:#999;"]));
/* harmony default export */ __webpack_exports__["Z"] = (Select);

/***/ })

};
;