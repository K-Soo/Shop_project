exports.id = 8847;
exports.ids = [8847];
exports.modules = {

/***/ 8847:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);




let Input = ({
  className,
  placeholder,
  defaultValue,
  onChange,
  name,
  value,
  readOnly,
  pattern,
  type,
  maxLength,
  minLength,
  max,
  min,
  required,
  title,
  disabled,
  height,
  margin,
  id,
  width,
  maxWidth,
  onBlur,
  onFocus,
  onKeyPress,
  refValue
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
    type: type,
    readOnly: readOnly,
    placeholder: placeholder,
    name: name,
    className: className // defaultValue={defaultValue}
    ,
    value: value,
    onChange: onChange,
    pattern: pattern,
    maxLength: maxLength,
    minLength: minLength,
    onBlur: onBlur,
    onFocus: onFocus,
    max: max,
    min: min,
    required: required,
    title: title,
    disabled: disabled,
    id: id,
    onKeyPress: onKeyPress,
    autoComplete: "off",
    ref: refValue
  });
};

Input = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(Input).withConfig({
  displayName: "Input",
  componentId: "cj5bp5-0"
})(["height:", ";width:", ";max-width:", ";margin:", ";box-sizing:border-box;font-size:12px;padding-left:10px;border:1px solid #dee2e6;appearance:none;&::placeholder{color:#adb5bd;}", ""], ({
  height
}) => height ? `${height}px` : "40px", ({
  width
}) => width ? `${width}px` : '100%', ({
  maxWidth
}) => maxWidth ? `${maxWidth}px` : '100%', ({
  margin
}) => margin !== null && margin !== void 0 ? margin : "0px", props => props.readOnly && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["background-color:#f2f3f4;cursor:default;color:#999;"]));
/* harmony default export */ __webpack_exports__["Z"] = (Input);

/***/ })

};
;