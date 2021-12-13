exports.id = 6930;
exports.ids = [6930];
exports.modules = {

/***/ 6930:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);




const Title = ({
  className,
  children,
  level
}) => {
  switch (level) {
    case 1:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: className,
        children: children
      });

    case 2:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: className,
        children: children
      });

    case 3:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
        className: className,
        children: children
      });

    case 4:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
        className: className,
        children: children
      });

    case 5:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
        className: className,
        children: children
      });

    case 6:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
        className: className,
        children: children
      });

    default:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: className,
        children: children
      });
  }
};

/* harmony default export */ __webpack_exports__["Z"] = (styled_components__WEBPACK_IMPORTED_MODULE_2___default()(Title).withConfig({
  displayName: "Title",
  componentId: "lkkel4-0"
})(["cursor:default;font-size:", ";color:", ";margin:", ";margin-top:", ";margin-left:", ";margin-right:", ";margin-bottom:", ";text-align:", ";"], ({
  size
}) => size ? `${size}px` : "30px", ({
  color
}) => color !== null && color !== void 0 ? color : "#2e2e2e", ({
  margin
}) => {
  var _ref;

  return (_ref = `${margin}`) !== null && _ref !== void 0 ? _ref : "0px";
}, ({
  marginT
}) => {
  var _ref2;

  return (_ref2 = `${marginT}px`) !== null && _ref2 !== void 0 ? _ref2 : "0px";
}, ({
  marginL
}) => {
  var _ref3;

  return (_ref3 = `${marginL}px`) !== null && _ref3 !== void 0 ? _ref3 : "0px";
}, ({
  marginR
}) => {
  var _ref4;

  return (_ref4 = `${marginR}px`) !== null && _ref4 !== void 0 ? _ref4 : "0px";
}, ({
  marginB
}) => {
  var _ref5;

  return (_ref5 = `${marginB}px`) !== null && _ref5 !== void 0 ? _ref5 : "0px";
}, ({
  textAlign
}) => textAlign !== null && textAlign !== void 0 ? textAlign : "center"));

/***/ })

};
;