exports.id = 6908;
exports.ids = [6908];
exports.modules = {

/***/ 6908:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ PageTitle; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3595);
/* harmony import */ var components_style_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6930);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);







const S = {
  PageTitle: styled_components__WEBPACK_IMPORTED_MODULE_2___default().article.withConfig({
    displayName: "PageTitle",
    componentId: "sc-1j8axyo-0"
  })(["position:relative;display:flex;justify-content:center;align-items:center;height:60px;.redirect-icon{display:none;position:absolute;font-size:0;left:10px;cursor:pointer;&:hover{svg{color:#000;}}svg{width:24px;height:24px;}}", ""], ({
    theme
  }) => theme.mobile`
      justify-content: center;
      align-items: center;
      .redirect-icon{
        display: block;
      }
      ${components_style_Title__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z}{
        font-size: 20px;
      }
    `)
};
function PageTitle({
  TitleText
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(S.PageTitle, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
      className: "redirect-icon",
      onClick: () => router.back(),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        name: "BigArrowLeft"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_style_Title__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      level: 3,
      size: "24",
      textAlign: "left",
      children: TitleText
    })]
  });
}

/***/ })

};
;