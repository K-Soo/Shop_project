exports.id = 7320;
exports.ids = [7320];
exports.modules = {

/***/ 9973:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Pagination; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/hooks/usePaginate.ts

function usePaginate(maxPages, pageSize, turnPage) {
  const {
    0: array,
    1: setArray
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    const result = Array.from({
      length: maxPages
    }, (v, i) => i + 1);
    const Arr = result.slice((turnPage - 1) * pageSize, turnPage * pageSize);
    setArray(Arr);
  }, [maxPages, turnPage, pageSize]);
  return {
    array
  };
}
// EXTERNAL MODULE: ./src/context/AppProvider.tsx + 1 modules
var AppProvider = __webpack_require__(693);
// EXTERNAL MODULE: ./src/hooks/useDidMountEffect.ts
var useDidMountEffect = __webpack_require__(9546);
;// CONCATENATED MODULE: ./src/components/Pagination/NumBtn.tsx



const S = {
  NumBtn: external_styled_components_default().button.withConfig({
    displayName: "NumBtn",
    componentId: "sc-79nueo-0"
  })(["display:flex;align-items:center;justify-content:center;text-align:center;cursor:pointer;margin:0 5px;border-radius:50%;width:30px;height:30px;line-height:30px;background-color:#fff;border:1px solid #fff;font-size:13px;&:hover{text-decoration:underline;}&[data-active=true]{border:1px solid #999;background-color:#f9f9f9;cursor:default;text-decoration:none;};"])
};
function NumBtn({
  onClick,
  value,
  name,
  children,
  active,
  disabled
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(S.NumBtn, {
    onClick: onClick,
    name: name,
    value: value,
    "data-active": active,
    disabled: disabled,
    children: children
  });
}
;// CONCATENATED MODULE: ./src/components/Pagination/TurnBtn.tsx



const TurnBtn_S = {
  TurnBtn: external_styled_components_default().button.withConfig({
    displayName: "TurnBtn",
    componentId: "sc-1qcsiyw-0"
  })(["margin:0 3px;background-color:#fff;cursor:", ";font-size:12px;&:hover{text-decoration:", ";}"], props => props.disabled ? 'default' : 'pointer', props => props.disabled ? 'none' : 'underline')
};
function TurnBtn({
  onClick,
  value,
  children,
  disabled
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(TurnBtn_S.TurnBtn, {
    disabled: disabled,
    onClick: onClick,
    value: value,
    children: children
  });
}
;// CONCATENATED MODULE: ./src/components/Pagination/index.tsx









const Pagination_S = {
  Pagination: external_styled_components_default().div.withConfig({
    displayName: "Pagination",
    componentId: "sc-4qhqf7-0"
  })(["margin:", ";.wrapper{display:flex;justify-content:center;align-items:center;}"], props => props.margin ? props.margin : '0')
};
function Pagination({
  maxPages,
  className,
  isFetching,
  margin,
  pageSize = 3
}) {
  const {
    state,
    action
  } = (0,AppProvider/* useAppContext */.bp)();
  const {
    0: turnPage,
    1: setTurnPage
  } = (0,external_react_.useState)(1);
  const {
    0: checkLast,
    1: setCheckLast
  } = (0,external_react_.useState)(false);
  const maxT = Math.ceil(maxPages / pageSize);
  const maxTurn = Array.from({
    length: maxT
  }, (v, i) => i + 1);
  const {
    array
  } = usePaginate(maxPages, pageSize, turnPage);
  (0,useDidMountEffect/* default */.Z)(() => {
    if (array.length) {
      if (!checkLast) {
        action.InitData('pagination.currentPage', String(array[0]));
      } else {
        action.InitData('pagination.currentPage', String(array[array.length - 1]));
      }
    }
  }, [turnPage, array]);

  const handleFirstPage = () => {
    // 처음
    setCheckLast(false);
    setTurnPage(maxTurn[0]);
  };

  const handleLastPage = () => {
    // 마지막
    setCheckLast(true);
    setTurnPage(maxTurn[maxTurn.length - 1]);
  };

  const handlePevPage = () => {
    // 이전
    if (turnPage > 1) {
      setCheckLast(false);
      setTurnPage(prev => prev - 1);
    }
  };

  const handleNextPage = () => {
    // 다음
    setCheckLast(false);
    setTurnPage(prev => prev + 1);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(Pagination_S.Pagination, {
    margin: margin,
    className: className,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "wrapper",
      children: [/*#__PURE__*/jsx_runtime_.jsx(TurnBtn, {
        onClick: handleFirstPage,
        disabled: isFetching || turnPage === 1,
        children: "\uCC98\uC74C"
      }), /*#__PURE__*/jsx_runtime_.jsx(TurnBtn, {
        onClick: handlePevPage,
        disabled: isFetching || turnPage == 1,
        children: "\uC774\uC804"
      }), array && array.map(d => /*#__PURE__*/jsx_runtime_.jsx(NumBtn, {
        name: "pagination.currentPage",
        active: String(d) === state.pagination.currentPage,
        value: d,
        onClick: action.setFormData,
        disabled: isFetching,
        children: d
      }, d)), /*#__PURE__*/jsx_runtime_.jsx(TurnBtn, {
        onClick: handleNextPage,
        disabled: isFetching || turnPage === maxTurn[maxTurn.length - 1],
        children: "\uB2E4\uC74C"
      }), /*#__PURE__*/jsx_runtime_.jsx(TurnBtn, {
        onClick: handleLastPage,
        disabled: isFetching || turnPage === maxTurn[maxTurn.length - 1],
        children: "\uB9C8\uC9C0\uB9C9"
      })]
    })
  });
}

/***/ }),

/***/ 7834:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ queryKeys; }
/* harmony export */ });
const queryKeys = {
  PRODUCT: 'product',
  PRODUCT_CLOSE: 'product-close',
  HISTORY: 'history',
  SEARCH: 'search',
  REVIEW: {
    name: 'review',
    limit: 4
  },
  INTEREST_PRODUCT: 'interestProduct',
  POINT: 'point',
  POINT_DETAIL: 'pointDetail',
  NOTICE_LIST: {
    name: 'notice-list',
    limit: 15
  },
  ADMIN: {
    sales: 'admin-sales',
    usedPoint: 'admin-usedPoint',
    notice: 'admin-notice',
    statistics: 'admin-statistics'
  }
};

/***/ })

};
;