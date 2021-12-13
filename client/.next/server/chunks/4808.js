exports.id = 4808;
exports.ids = [4808];
exports.modules = {

/***/ 7501:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ProductSortMenu; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_style_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8116);





const S = {
  ProductSortMenu: styled_components__WEBPACK_IMPORTED_MODULE_2___default().article.withConfig({
    displayName: "ProductSortMenu",
    componentId: "zo2jpt-0"
  })(["height:35px;display:flex;justify-content:space-between;align-items:center;margin:30px 0;.select-box{height:100%;", "}", ""], ({
    theme
  }) => theme.mobile`
        select{
          width: 100px;
        }
      `, ({
    theme
  }) => theme.mobile`
      height: 25px;
      padding: 0 15px;
    `),
  ProductCount: styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "ProductSortMenu__ProductCount",
    componentId: "zo2jpt-1"
  })(["color:#222;font-weight:400;text-align:center;height:100%;display:flex;justify-content:space-between;align-items:center;strong{font-size:18px;width:100%;color:#000;&::after{content:'ITEMS';margin-left:5px;font-size:16px;color:#353535;}}"])
};
function ProductSortMenu({
  itemCount,
  setSort
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(S.ProductSortMenu, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(S.ProductCount, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
        children: itemCount
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "select-box",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_style_Select__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        width: "140",
        onChange: e => setSort(e.target.value),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
          value: "",
          children: "\uC0C1\uD488\uC815\uB82C"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
          value: "row",
          children: "\uB0AE\uC740\uAC00\uACA9"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
          value: "hight",
          children: "\uB192\uC740\uAC00\uACA9"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
          value: "new",
          children: "\uC2E0\uC0C1\uD488"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
          value: "best",
          children: "\uC778\uAE30\uC0C1\uD488"
        })]
      })
    })]
  });
}

/***/ }),

/***/ 4556:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useSort; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useSort(selectedItem) {
  const {
    0: sort,
    1: setSort
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: sortingData,
    1: setSortingData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (selectedItem.length > 0) {
      switch (sort) {
        case 'row':
          setSortingData(selectedItem.sort((a, b) => Number(b.consumer_price) - Number(a.consumer_price)).sort(x => x.qty ? -1 : 1));
          break;

        case 'hight':
          setSortingData(selectedItem.sort((a, b) => Number(a.consumer_price) - Number(b.consumer_price)).sort(x => x.qty ? -1 : 1));
          break;

        case 'new':
          setSortingData(selectedItem.sort(x => x.new_product ? 1 : -1).sort(x => x.qty ? -1 : 1));
          break;

        case 'best':
          setSortingData(selectedItem.sort(x => x.best_product ? 1 : -1).sort(x => x.qty ? -1 : 1));
          break;

        default:
          setSortingData(selectedItem.sort(x => x.qty >= 1 ? -1 : 1));
          break;
      }

      ;
    }
  }, [sort, selectedItem]);
  return {
    setSort,
    sortingData
  };
}

/***/ })

};
;