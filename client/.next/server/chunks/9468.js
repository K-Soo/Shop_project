exports.id = 9468;
exports.ids = [9468];
exports.modules = {

/***/ 6257:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);




const Label = ({
  className,
  children,
  htmlFor
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
    className: className,
    htmlFor: htmlFor,
    children: children
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (styled_components__WEBPACK_IMPORTED_MODULE_2___default()(Label).withConfig({
  displayName: "Label",
  componentId: "fy7ods-0"
})(["color:", ";margin:", ";margin-bottom:", ";min-width:", ";width:", ";display:inline-block;height:100%;white-space:nowrap;font-size:12px;", " ", ""], ({
  color
}) => color !== null && color !== void 0 ? color : "#222", ({
  margin
}) => {
  var _ref;

  return (_ref = `${margin}`) !== null && _ref !== void 0 ? _ref : "0px";
}, ({
  marginBottom
}) => {
  var _ref2;

  return (_ref2 = `${marginBottom}`) !== null && _ref2 !== void 0 ? _ref2 : "0px";
}, ({
  minWidth
}) => minWidth !== null && minWidth !== void 0 ? minWidth : "80px", ({
  width
}) => width !== null && width !== void 0 ? width : "80px", props => props.required && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["&::after{content:\" *\";color:red;}"]), ({
  theme
}) => theme.mobile`
    font-size: 11px;
    // width: 60px;
    padding-right: 5px;
  `));

/***/ }),

/***/ 4558:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);




const TextArea = ({
  id,
  className,
  value,
  readOnly,
  name,
  placeholder,
  onChange,
  required,
  height,
  color,
  margin,
  maxWidth
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
    id: id,
    className: className,
    rows: 13,
    readOnly: readOnly,
    color: color,
    value: value,
    name: name,
    placeholder: placeholder,
    required: required,
    onChange: onChange
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (styled_components__WEBPACK_IMPORTED_MODULE_2___default()(TextArea).withConfig({
  displayName: "TextArea",
  componentId: "q8q33u-0"
})(["width:", ";max-width:", ";height:", ";color:", ";margin:", ";resize:none;outline:none;font-size:12px;border:1px solid #e7e7e7e7;height:100px;padding:10px;&::placeholder{color:#adb5bd;}"], ({
  width
}) => width ? `${width}px` : "100%", ({
  maxWidth
}) => maxWidth ? `${maxWidth}px` : '100%', ({
  height
}) => height ? `${height}px` : "100%", ({
  color
}) => color ? `${color}` : "#747474", ({
  margin
}) => margin !== null && margin !== void 0 ? margin : "0px"));

/***/ })

};
;