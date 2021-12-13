exports.id = 9970;
exports.ids = [9970];
exports.modules = {

/***/ 9970:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3595);






const CheckBoxInput = ({
  className,
  name,
  onChange,
  defaultChecked,
  checked,
  value,
  required,
  id
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
    className: className,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
      type: "checkbox",
      name: name,
      onChange: onChange,
      checked: checked,
      defaultChecked: defaultChecked,
      value: value,
      required: required,
      id: id
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        name: "check"
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (styled_components__WEBPACK_IMPORTED_MODULE_2___default()(CheckBoxInput).withConfig({
  displayName: "CheckBox",
  componentId: "sc-12w7viv-0"
})(["position:relative;max-width:20px;width:20px;height:20px;display:inline-block;font-size:0;margin-left:", ";margin-right:", ";svg{color:#dee2e6;width:18px;height:18px;padding-right:1px;padding-bottom:2px;}input[type='checkbox']{display:none;}input[type='checkbox'] + div{box-sizing:border-box;position:relative;width:100%;height:100%;top:0;left:0;background-color:#fff;border:2px solid #dee2e6;border-radius:3px;cursor:pointer;font-size:0;}input[type='checkbox']:checked + div{border:#142a69;background-color:#142a69;font-size:0;svg{display:inline-block;color:#fff;font-size:0;width:18px;height:18px;padding-top:3px;padding-left:2px;}}"], ({
  marginL
}) => {
  var _ref;

  return (_ref = `${marginL}px`) !== null && _ref !== void 0 ? _ref : '0';
}, ({
  marginR
}) => {
  var _ref2;

  return (_ref2 = `${marginR}px`) !== null && _ref2 !== void 0 ? _ref2 : '0';
}));

/***/ })

};
;