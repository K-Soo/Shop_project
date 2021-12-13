exports.id = 8608;
exports.ids = [8608];
exports.modules = {

/***/ 8608:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ FormFieldset; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_style_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6930);
/* harmony import */ var components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3595);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);







const S = {
  FormFieldset: styled_components__WEBPACK_IMPORTED_MODULE_2___default().article.withConfig({
    displayName: "FormFieldset",
    componentId: "v05mvp-0"
  })(["", ""], ({
    theme
  }) => theme.mobile`
      padding: 0 10px;
      border: solid #e8e8e8;
      border-width: 1px 0 0 0;
      // margin-top: 10px;
    `),
  SubTitle: styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "FormFieldset__SubTitle",
    componentId: "v05mvp-1"
  })(["position:relative;display:", ";justify-content:space-between;align-items:center;border-bottom:2px solid #e8e8e8;margin-bottom:10px;width:100%;i{cursor:pointer;}", "{position:relative;&::after{content:'';position:absolute;width:100%;height:3px;bottom:-2px;left:0;background:#333;}}.arrow-icon{display:none;transform:", ";font-size:0;svg{height:16px;width:16px;}}.plus{font-size:0;padding-right:5px;svg{height:14px;width:14px;}}", ""], props => props.titleDisable ? 'none' : 'flex', components_style_Title__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, props => props.disable ? 'rotate()' : 'rotate(180deg)', ({
    theme
  }) => theme.mobile`
      align-items: center;
      border-bottom: none;
      margin-bottom: 0px;
      height: 35px;
      ${components_style_Title__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z}{
        font-size: 14px;
        &::after{
          content: none;
        }
      }
      .arrow-icon{
        display: block;
      }
    `),
  Content: styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "FormFieldset__Content",
    componentId: "v05mvp-2"
  })(["padding-bottom:20px;", ""], ({
    theme
  }) => theme.mobile`
      display: none;
      display: ${({
    disable
  }) => disable ? 'block' : 'none'};
    `)
};
function FormFieldset({
  className,
  children,
  title,
  titleDisable,
  margin,
  LinkBtn
}) {
  const {
    0: disable,
    1: setDisable
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(S.FormFieldset, {
    margin: margin,
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(S.SubTitle, {
      disable: disable,
      titleDisable: titleDisable,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_style_Title__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        level: 3,
        size: "18",
        textAlign: "left",
        children: title
      }), LinkBtn || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
        onClick: () => setDisable(!disable),
        className: "arrow-icon",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
          style: {
            color: '#333'
          },
          name: "arrowNoTailBottom"
        })
      }), LinkBtn && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
        onClick: () => router.push('/board/notice'),
        className: "plus",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
          style: {
            color: '#333'
          },
          name: "plus"
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(S.Content, {
      disable: disable,
      className: "content",
      children: children
    })]
  });
}

/***/ })

};
;