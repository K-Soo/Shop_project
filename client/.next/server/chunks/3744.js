exports.id = 3744;
exports.ids = [3744];
exports.modules = {

/***/ 8358:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ EmptyItem; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3595);





const S = {
  EmptyItem: styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "EmptyItem",
    componentId: "fwzjae-0"
  })(["padding:60px 0;", " .wrapper{margin:0 auto;text-align:center;color:#999;i{display:block;font-size:0;svg{color:#000;}}p{padding-top:10px;font-size:13px;}}"], ({
    theme
  }) => theme.mobile`
    padding: 30px 0;
    }`)
};
function EmptyItem({
  text
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(S.EmptyItem, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "wrapper",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
          name: "warning"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: text
      })]
    })
  });
}

/***/ }),

/***/ 7460:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Loading; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_loading_overlay_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5513);
/* harmony import */ var react_loading_overlay_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loading_overlay_ts__WEBPACK_IMPORTED_MODULE_3__);




const StyledLoader = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default()((react_loading_overlay_ts__WEBPACK_IMPORTED_MODULE_3___default())).withConfig({
  displayName: "Loading__StyledLoader",
  componentId: "sc-5if1yx-0"
})(["height:200px;background-color:#fff;width:100%;.gosoo_overlay{background-color:#fff;}.gosoo_content{color:#000;};.gosoo_spinner{svg circle{stroke:rgba(10,10,10,0.5);}}", ""], props => props.isLoading && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["display:block;"]));
function Loading({
  text,
  isLoading
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledLoader, {
    active: true,
    spinner: true,
    text: text,
    classNamePrefix: "gosoo_",
    isLoading: isLoading
  });
}

/***/ })

};
;