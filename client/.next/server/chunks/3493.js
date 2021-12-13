exports.id = 3493;
exports.ids = [3493];
exports.modules = {

/***/ 7777:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Breadcrumb; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const S = {
  Breadcrumb: styled_components__WEBPACK_IMPORTED_MODULE_2___default().nav.withConfig({
    displayName: "Breadcrumb",
    componentId: "m02x82-0"
  })(["max-width:1200px;margin:15px auto;display:flex;justify-content:flex-end;", ";"], ({
    theme
  }) => theme.mobile`
      display: none;
    `),
  BreadcrumbLists: styled_components__WEBPACK_IMPORTED_MODULE_2___default().ol.withConfig({
    displayName: "Breadcrumb__BreadcrumbLists",
    componentId: "m02x82-1"
  })(["display:flex;font-size:11px;color:#666666;li{padding:0 5px;a{display:inline-block;}&:last-child{font-weight:600;color:#000;}}"])
};
function Breadcrumb(props) {
  const BreadcrumbItem = props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
    className: "breadcrumb-item",
    children: props.children
  });

  let children = react__WEBPACK_IMPORTED_MODULE_1___default().Children.toArray(props.children);
  children = children.map((child, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BreadcrumbItem, {
    children: child
  }, `breadcrumb_item${index}`));
  const lastIndex = children.length - 1;
  children = children.reduce((acc, child, index) => {
    const notLast = index < lastIndex;

    if (notLast) {
      acc.push(child, ">");
    } else {
      acc.push(child);
    }

    return acc;
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(S.Breadcrumb, {
    className: props.className,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(S.BreadcrumbLists, {
      children: children
    })
  });
}
;

/***/ }),

/***/ 9490:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ MainContainer; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const S = {
  MainContainer: styled_components__WEBPACK_IMPORTED_MODULE_2___default().main.withConfig({
    displayName: "MainContainer",
    componentId: "ok5p0e-0"
  })(["width:100%;max-width:1200px;margin:0 auto;", ""], ({
    theme
  }) => theme.mobile`
      padding: 0;
    `)
};
function MainContainer(props) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(S.MainContainer, {
    children: props.children
  });
}
;

/***/ })

};
;