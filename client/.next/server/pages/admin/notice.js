(function() {
var exports = {};
exports.id = 69;
exports.ids = [69];
exports.modules = {

/***/ 8531:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ NoticeControllers; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var context_AdminProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1160);




const S = {
  NoticeControllers: styled_components__WEBPACK_IMPORTED_MODULE_2___default().section.withConfig({
    displayName: "NoticeControllers",
    componentId: "q7outz-0"
  })(["height:100%;width:100%;background-color:", ";border-radius:5px;padding:20px;"], props => props.isWhite ? '#FFF' : '#1F2A40')
};
function NoticeControllers({
  children
}) {
  const {
    state
  } = (0,context_AdminProvider__WEBPACK_IMPORTED_MODULE_3__/* .useAdminContext */ .O)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(S.NoticeControllers, {
    isWhite: state.isWhite,
    children: children
  });
}

/***/ }),

/***/ 6530:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ noticePage; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/containers/AdminContainer.tsx + 4 modules
var AdminContainer = __webpack_require__(5931);
// EXTERNAL MODULE: ./src/components/Admin/NoticeControllers/index.tsx
var NoticeControllers = __webpack_require__(8531);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/components/Board/Notice/List.tsx
var List = __webpack_require__(7757);
// EXTERNAL MODULE: ./src/components/Pagination/index.tsx + 3 modules
var Pagination = __webpack_require__(9973);
// EXTERNAL MODULE: ./src/components/style/Button.tsx
var Button = __webpack_require__(8761);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/constants/path.ts
var path = __webpack_require__(643);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
// EXTERNAL MODULE: ./src/constants/queryKeys.ts
var constants_queryKeys = __webpack_require__(7834);
// EXTERNAL MODULE: ./src/context/AppProvider.tsx + 1 modules
var AppProvider = __webpack_require__(693);
// EXTERNAL MODULE: ./src/api/index.ts
var api = __webpack_require__(8740);
;// CONCATENATED MODULE: ./src/hooks/ReactQuery/useNotice.ts




function useNotice() {
  const App = (0,AppProvider/* useAppContext */.bp)();
  const currentPage = Number(App.state.pagination.currentPage);
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching
  } = (0,external_react_query_.useQuery)([constants_queryKeys/* queryKeys.NOTICE_LIST.name */.a.NOTICE_LIST.name, currentPage, constants_queryKeys/* queryKeys.NOTICE_LIST.limit */.a.NOTICE_LIST.limit], async () => await api/* Get.getNoticeList */.dX.getNoticeList(currentPage, constants_queryKeys/* queryKeys.NOTICE_LIST.limit */.a.NOTICE_LIST.limit), {
    retry: 0,
    keepPreviousData: false,
    refetchOnWindowFocus: false
  });
  return {
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching
  };
}
// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__(3308);
// EXTERNAL MODULE: ./src/context/AdminProvider.tsx + 1 modules
var AdminProvider = __webpack_require__(1160);
;// CONCATENATED MODULE: ./src/hooks/ReactQuery/mutations.ts





function useChangeQty() {
  const idx = '123';
  const queryClient = useQueryClient();
  const {
    state
  } = useAdminContext();
  const {
    mutate
  } = useMutation(async item => await Put.updateProductQty(idx, item), {
    onSuccess: () => {
      alert('변경이 완료되었습니다');
      queryClient.invalidateQueries([queryKeys.PRODUCT, state.filter.product_type]);
    }
  });
  return mutate;
}
function useSelectCloseProducts() {
  const queryClient = useQueryClient();
  const {
    state
  } = useAdminContext();
  const {
    mutate
  } = useMutation(async ids => await Put.updateProductClose(ids), {
    onSuccess: () => {
      alert('선택상품이 마감되었습니다');
      queryClient.invalidateQueries([queryKeys.PRODUCT_CLOSE, state.filter.product_type]);
    }
  });
  return mutate;
}
function useAllCloseProducts() {
  const queryClient = useQueryClient();
  const {
    state
  } = useAdminContext();
  const {
    mutate
  } = useMutation(async ids => await Put.updateProductClose(ids), {
    onSuccess: () => {
      alert('선택상품이 마감되었습니다');
      queryClient.invalidateQueries([queryKeys.PRODUCT_CLOSE, state.filter.product_type]);
    }
  });
  return mutate;
}
function useDeleteNotice() {
  const queryClient = (0,external_react_query_.useQueryClient)();
  const App = (0,AppProvider/* useAppContext */.bp)();
  const currentPage = Number(App.state.pagination.currentPage);
  const {
    mutate
  } = (0,external_react_query_.useMutation)(async checkedArray => await api/* Put.deleteManyNotice */.qb.deleteManyNotice(checkedArray), {
    onSuccess: () => {
      alert('선택된 공지가 삭제되었습니다');
      queryClient.invalidateQueries([constants_queryKeys/* queryKeys.NOTICE_LIST.name */.a.NOTICE_LIST.name, currentPage, constants_queryKeys/* queryKeys.NOTICE_LIST.limit */.a.NOTICE_LIST.limit]);
    }
  });
  return mutate;
}
;// CONCATENATED MODULE: ./src/components/Admin/NoticeControllers/NoticeList.tsx













const S = {
  NoticeList: external_styled_components_default().div.withConfig({
    displayName: "NoticeList",
    componentId: "sc-178wlt4-0"
  })(["", " height:100%;display:flex;flex-direction:column;justify-content:space-between;.page-nation{margin-top:25px;}"], ({
    isWhite
  }) => !isWhite && (0,external_styled_components_.css)(["*{color:#000 !important;transition:color 0.3s ease;}"])),
  ButtonBox: external_styled_components_default().div.withConfig({
    displayName: "NoticeList__ButtonBox",
    componentId: "sc-178wlt4-1"
  })(["display:flex;justify-content:space-between;button{height:30px;}"])
};
function NoticeList() {
  const router = (0,router_.useRouter)();
  const {
    0: checkedArray,
    1: setCheckedArray
  } = (0,external_react_.useState)([]);
  const {
    enqueueSnackbar,
    closeSnackbar
  } = (0,external_notistack_.useSnackbar)();
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching
  } = useNotice();
  const deleteNotice = useDeleteNotice();
  const {
    state,
    action
  } = (0,AdminProvider/* useAdminContext */.O)();
  const handleCheckBox = (0,external_react_.useCallback)(e => {
    const {
      value,
      checked
    } = e.target;

    if (checked) {
      setCheckedArray([...checkedArray, value]);
    } else {
      const result = checkedArray.filter(d => d !== value);
      setCheckedArray(result);
    }
  }, [checkedArray]);

  const handleDeletePost = async () => {
    closeSnackbar();

    if (!checkedArray.length) {
      return enqueueSnackbar('삭제할 항목을 선택해주세요.', {
        variant: 'info'
      });
    }

    deleteNotice(checkedArray);
  };

  if (isError) return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: "isError"
  });
  if (isLoading) return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: "loading"
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.NoticeList, {
    isWhite: state.isWhite,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(List/* default */.Z, {
        items: data.items,
        isLoading: isLoading,
        handleCheckBox: handleCheckBox,
        checkedArray: checkedArray
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(S.ButtonBox, {
        className: "button-box",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          white: true,
          type: "submit",
          width: "100",
          onClick: () => router.push(path/* default.CREATE_NOTICE.path */.Z.CREATE_NOTICE.path),
          children: "\uAE00\uC4F0\uAE30"
        }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          white: true,
          type: "button",
          width: "100",
          onClick: handleDeletePost,
          children: "\uC0AD\uC81C"
        })]
      }), isSuccess && /*#__PURE__*/jsx_runtime_.jsx(Pagination/* default */.Z, {
        className: "page-nation",
        maxPages: data.maxPages,
        isFetching: isFetching
      })]
    })]
  });
}
// EXTERNAL MODULE: ./src/components/style/Title.tsx
var Title = __webpack_require__(6930);
;// CONCATENATED MODULE: ./src/pages/admin/notice/index.tsx









function noticePage() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\uAD00\uB9AC\uC790 | \uACF5\uC9C0\uC0AC\uD56D"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(AdminContainer/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(NoticeControllers/* default */.Z, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
          level: 1,
          margin: "0 0 30px 0",
          children: "\uACF5\uC9C0\uC0AC\uD56D"
        }), /*#__PURE__*/jsx_runtime_.jsx(NoticeList, {})]
      })
    })]
  });
}

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 4584:
/***/ (function(module) {

"use strict";
module.exports = require("immer");;

/***/ }),

/***/ 6155:
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 3308:
/***/ (function(module) {

"use strict";
module.exports = require("notistack");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 2585:
/***/ (function(module) {

"use strict";
module.exports = require("react-query");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 9914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5675,8703,6930,3803,643,8740,8761,693,6155,9970,5931,7320,7757], function() { return __webpack_exec__(6530); });
module.exports = __webpack_exports__;

})();