exports.id = 685;
exports.ids = [685];
exports.modules = {

/***/ 7210:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ MY_SHOP_MENU; }
/* harmony export */ });
const MY_SHOP_MENU = [{
  label: '홈',
  value: '홈으로 이동합니다.',
  url: '/',
  icon: 'home'
}, {
  label: '주문내역조회',
  value: '주문내역을 조회하실수있습니다.',
  url: '/users/history/list',
  icon: 'note'
}, {
  label: '개인정보수정',
  value: '고객님의 개인정보를 관리하는공간입니다.',
  url: '/users/modify',
  icon: 'user'
}, {
  label: '장바구니',
  value: '장바구니로 이동합니다.',
  url: '/order/basket',
  icon: 'cart'
}, {
  label: '위시리스트',
  value: '고객님의 관심상품으로 등록하신 상품의 목록을 보여드립니다.',
  url: '/users/interest-products',
  icon: 'heart'
}, {
  label: '적립금',
  value: '적립금은 상품구매시 사용가능합니다.',
  url: '/users/point',
  icon: 'coin'
}];

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

/***/ }),

/***/ 8675:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ usePoint; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var constants_queryKeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7834);
/* harmony import */ var context_AppProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(693);
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8740);





function usePoint() {
  const {
    0: totalUsedPoint,
    1: setTotalUsedPoint
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: totalAccPoint,
    1: setTotalAccPoint
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    state: {
      userInfo: {
        idx
      }
    }
  } = (0,context_AppProvider__WEBPACK_IMPORTED_MODULE_3__/* .useAppContext */ .bp)();
  const {
    data,
    isLoading,
    isSuccess,
    isError
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)([constants_queryKeys__WEBPACK_IMPORTED_MODULE_2__/* .queryKeys.POINT */ .a.POINT, idx], async () => await api__WEBPACK_IMPORTED_MODULE_4__/* .Get.getPointInfo */ .dX.getPointInfo(idx), {
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    enabled: !!idx,
    staleTime: 2000
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (data) {
      const usedValue = data.pointInfo.reduce((acc, cur) => acc + Number(cur.usedPoint), 0);
      setTotalUsedPoint(usedValue);
      const accValue = data.pointInfo.reduce((acc, cur) => acc + cur.savedPoint, 0);
      setTotalAccPoint(accValue);
    }
  }, [data]);
  return {
    totalUsedPoint,
    totalAccPoint,
    isSuccess,
    isLoading,
    totalAmount: data === null || data === void 0 ? void 0 : data.totalAmount,
    totalLength: data === null || data === void 0 ? void 0 : data.totalLength,
    currentPoint: data === null || data === void 0 ? void 0 : data.currentPoint
  };
}

/***/ })

};
;