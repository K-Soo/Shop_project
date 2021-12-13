(function() {
var exports = {};
exports.id = 6964;
exports.ids = [6964];
exports.modules = {

/***/ 208:
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
  componentId: "sc-13kuzqi-0"
})(["display:none;height:", ";width:100%;", " .loading__overlay{background-color:#fff;}.loading__content{color:#000;};.loading__spinner{svg circle{stroke:rgba(10,10,10,0.5);}}"], props => props.height ? `${props.height}px` : '0px', props => props.isLoading && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["display:block;"]));
function Loading({
  text,
  isLoading,
  height
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledLoader, {
    active: true,
    spinner: true,
    text: text,
    classNamePrefix: "loading__",
    isLoading: isLoading,
    height: height
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

/***/ }),

/***/ 4410:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ AdminPage; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/containers/AdminContainer.tsx + 4 modules
var AdminContainer = __webpack_require__(5931);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/components/style/Title.tsx
var Title = __webpack_require__(6930);
// EXTERNAL MODULE: ./src/components/style/Button.tsx
var Button = __webpack_require__(8761);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(3803);
// EXTERNAL MODULE: ./src/context/AdminProvider.tsx + 1 modules
var AdminProvider = __webpack_require__(1160);
;// CONCATENATED MODULE: ./src/components/Admin/HomeControllers/Status/SalesBoard.tsx









const S = {
  SalesBoard: external_styled_components_default().div.withConfig({
    displayName: "SalesBoard",
    componentId: "sc-5orn3c-0"
  })(["background-color:", ";transition:background-color 0.3s ease;margin-bottom:15px;padding:20px;border-radius:5px;.header{display:flex;justify-content:space-between;margin-bottom:15px;&__title-box{display:flex;align-items:center;", "{font-size:18px;}}&__button-box{display:flex;button{font-size:12px;height:30px;}}}.board{display:flex;background-color:", ";transition:background-color 0.3s ease;justify-content:space-between;flex:1;padding:20px;", "{font-size:16px;font-weight:normal;margin-bottom:5px;}li{text-align:center;color:#354052;}}"], props => props.isWhite ? '#fff' : '#1F2A40', Title/* default */.Z, props => props.isWhite ? '#f8f8f8' : '#131C2D', Title/* default */.Z)
};
function SalesBoard({
  salesData,
  salesStatus
}) {
  const router = (0,router_.useRouter)();
  const {
    state
  } = (0,AdminProvider/* useAdminContext */.O)();

  if (salesStatus === 'loading') {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: "loading"
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.SalesBoard, {
    isWhite: state.isWhite,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "header",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "header__title-box",
        children: /*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
          level: 2,
          children: "\uC624\uB298 \uD310\uB9E4\uD604\uD669"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "header__button-box",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          margin: "0 10px 0 0",
          black: true,
          onClick: () => router.push('admin/products/list'),
          children: "\uD310\uB9E4\uC124\uC815"
        }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          black: true,
          onClick: () => router.push('admin/products/create'),
          children: "\uC0C1\uD488\uCD94\uAC00"
        })]
      })]
    }), salesStatus === 'success' && /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: "board",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        className: "board__payment-complete",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
          level: 3,
          children: "\uACB0\uC81C\uC644\uB8CC"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
          children: [salesData.paymentComplete, "\uAC74"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        className: "board__Amount",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
          level: 3,
          children: "\uD310\uB9E4\uC561"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
          children: [(0,utils/* PriceComma */.OB)(salesData.totalAmount), "\uC6D0"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        className: "board__asd",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
          level: 3,
          children: "\uD310\uB9E4 \uC218\uB7C9"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
          children: [salesData.ProductCnt, "\uAC1C"]
        })]
      })]
    })]
  });
}
;// CONCATENATED MODULE: external "react-chartjs-2"
var external_react_chartjs_2_namespaceObject = require("react-chartjs-2");;
;// CONCATENATED MODULE: ./src/components/Admin/HomeControllers/Status/LineCartBoard.tsx







const LineCartBoard_S = {
  LineCartBoard: external_styled_components_default().div.withConfig({
    displayName: "LineCartBoard",
    componentId: "sc-1yt7qmu-0"
  })(["background-color:", ";transition:background-color 0.3s ease;padding:20px;border-radius:5px;margin-bottom:15px;.header{", "{font-size:20px;}p{color:#757575;padding-left:10px;font-size:14px;}display:flex;align-items:center;}"], props => props.isWhite ? '#fff' : '#1F2A40', Title/* default */.Z),
  FilterChart: external_styled_components_default().div.withConfig({
    displayName: "LineCartBoard__FilterChart",
    componentId: "sc-1yt7qmu-1"
  })(["border-bottom:1px solid #bdbdbd;margin:30px 15px;.lists{display:flex;color:#999;font-weight:600;cursor:pointer;li{padding:10px 20px;position:relative;&:hover{background-color:", ";}}.cnt{", "}.amount{", "}}"], props => props.isWhite ? '#f5f5f5' : '#131C2D', ({
    filtered
  }) => filtered === 'cnt' && (0,external_styled_components_.css)(["color:#475669;&::after{content:'';position:absolute;width:100%;height:3px;background:#475669;left:0;bottom:-1px;}"]), ({
    filtered
  }) => filtered === 'amount' && (0,external_styled_components_.css)(["color:#475669;&::after{content:'';position:absolute;width:100%;height:3px;background:#475669;left:0;bottom:-1px;}"]))
};
const options = {
  responsive: true,
  legend: {
    labels: {
      fontSize: 2
    }
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      intersect: false
    }
  },
  scales: {
    y: {
      ticks: {
        beginAtZero: true,
        display: true
      }
    },
    x: {
      display: true,
      ticks: {
        beginAtZero: true,
        display: true
      }
    }
  }
};
var labelText;

(function (labelText) {
  labelText["cnt"] = "\uD310\uB9E4\uC218";
  labelText["amount"] = "\uD310\uB9E4\uC561";
})(labelText || (labelText = {}));

function LineCartBoard({
  lineCartData,
  lineCartStatus,
  handleFilter,
  filtered
}) {
  const {
    0: chartDate,
    1: setChartDate
  } = (0,external_react_.useState)([]);
  const {
    0: chartValue,
    1: setChartValue
  } = (0,external_react_.useState)([]);
  const {
    state
  } = (0,AdminProvider/* useAdminContext */.O)();
  (0,external_react_.useEffect)(() => {
    if (lineCartStatus === 'success') {
      setChartDate(lineCartData.map(d => d.date));
      setChartValue(lineCartData.map(d => d.value));
    }
  }, [lineCartData, lineCartStatus]);
  const data = {
    labels: chartDate,
    datasets: [{
      label: labelText[filtered],
      data: chartValue,
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      tension: 0.5
    }]
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(LineCartBoard_S.LineCartBoard, {
    isWhite: state.isWhite,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "header",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
        level: 2,
        children: "\uC0C1\uD488 \uD1B5\uACC4"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\uC9C0\uB09C 7\uC77C"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(LineCartBoard_S.FilterChart, {
      filtered: filtered,
      isWhite: state.isWhite,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "lists",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "cnt",
          onClick: handleFilter,
          children: "\uD310\uB9E4\uC218"
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "amount",
          onClick: handleFilter,
          children: "\uD310\uB9E4\uC561"
        })]
      })
    }), lineCartStatus === 'success' && /*#__PURE__*/jsx_runtime_.jsx(external_react_chartjs_2_namespaceObject.Line, {
      data: data,
      height: 100,
      options: options
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/Admin/HomeControllers/Status/index.tsx







const Status_S = {
  Status: external_styled_components_default().div.withConfig({
    displayName: "Status",
    componentId: "sc-1n6386x-0"
  })(["flex:1 1 65%;margin-right:15px;background-color:", ";transition:background-color 0.3s ease;"], props => props.isWhite ? '#F0F3F7' : '#131C2D')
};
function Status({
  salesData,
  salesStatus,
  lineCartData,
  lineCartStatus,
  handleFilter,
  filtered
}) {
  const {
    state
  } = (0,AdminProvider/* useAdminContext */.O)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Status_S.Status, {
    isWhite: state.isWhite,
    children: [/*#__PURE__*/jsx_runtime_.jsx(SalesBoard, {
      salesData: salesData,
      salesStatus: salesStatus
    }), /*#__PURE__*/jsx_runtime_.jsx(LineCartBoard, {
      lineCartData: lineCartData,
      lineCartStatus: lineCartStatus,
      handleFilter: handleFilter,
      filtered: filtered
    })]
  });
}
// EXTERNAL MODULE: ./src/components/Loading/index.tsx
var Loading = __webpack_require__(208);
;// CONCATENATED MODULE: ./src/components/Admin/HomeControllers/Information/PointBoard.tsx









const PointBoard_S = {
  PointBoard: external_styled_components_default().div.withConfig({
    displayName: "PointBoard",
    componentId: "pe8dik-0"
  })(["background-color:", ";transition:background-color 0.3s ease;padding:20px;border-radius:5px;margin-bottom:15px;.header{margin-bottom:20px;", "{font-size:18px;text-align:left;}}"], props => props.isWhite ? '#fff' : '#1F2A40', Title/* default */.Z),
  CurrentDate: external_styled_components_default().p.withConfig({
    displayName: "PointBoard__CurrentDate",
    componentId: "pe8dik-1"
  })(["margin-top:20px;font-size:14px;color:#354052;font-weight:400;"]),
  CurrentProductsInfo: external_styled_components_default().ul.withConfig({
    displayName: "PointBoard__CurrentProductsInfo",
    componentId: "pe8dik-2"
  })(["li:first-child{margin-bottom:10px;}dl{dt{margin-bottom:5px;font-size:14px;color:#707070;}dd{font-size:20px;color:#354052;}}"])
};
function PointBoard({
  pointData,
  PointStatus
}) {
  const {
    state
  } = (0,AdminProvider/* useAdminContext */.O)();

  if (PointStatus === 'error') {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: "error"
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(PointBoard_S.PointBoard, {
    isWhite: state.isWhite,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "header",
      children: /*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
        level: 2,
        children: "\uD3EC\uC778\uD2B8"
      })
    }), PointStatus === 'loading' && /*#__PURE__*/jsx_runtime_.jsx(Loading/* default */.Z, {
      height: 100,
      text: "",
      isLoading: true
    }), PointStatus === 'success' && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(PointBoard_S.CurrentProductsInfo, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("dl", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("dt", {
              children: "\uD310\uB9E4\uC218 / \uD310\uB9E4\uC561"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("dd", {
              children: [pointData.ProductCnt, "\uAC1C / ", (0,utils/* PriceComma */.OB)(pointData.totalAmount), "\uC6D0"]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("dl", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("dt", {
              children: "\uC0AC\uC6A9\uB41C \uD3EC\uC778\uD2B8"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("dd", {
              children: [(0,utils/* PriceComma */.OB)(pointData.totalPoints), "\uC6D0"]
            })]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(PointBoard_S.CurrentDate, {
        children: (0,utils/* CurrentDate */.xX)()
      })]
    })]
  });
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__(3595);
;// CONCATENATED MODULE: ./src/components/Admin/HomeControllers/Information/NoticeBoard.tsx










const NoticeBoard_S = {
  NoticeBoard: external_styled_components_default().div.withConfig({
    displayName: "NoticeBoard",
    componentId: "xgkmzw-0"
  })(["background-color:", ";transition:background-color 0.3s ease;padding:20px;border-radius:5px;.header{margin-bottom:20px;&__wrapper{display:inline-block;align-items:flex-start;cursor:pointer;}", "{font-size:18px;text-align:left;display:inline-block;cursor:pointer;}i{font-size:0;margin-left:5px;svg{color:#555;}}}.content{.item{display:flex;justify-content:space-between;padding:15px 0;font-size:14px;color:#333;cursor:pointer;&:hover{color:#999;}&__title{display:flex;span{padding-right:5px;::after{content:'*';color:red;}}}}}"], props => props.isWhite ? '#fff' : '#1F2A40', Title/* default */.Z)
};
function NoticeBoard({
  noticeData,
  noticeStatus
}) {
  const router = (0,router_.useRouter)();
  const {
    state
  } = (0,AdminProvider/* useAdminContext */.O)();

  if (noticeStatus === 'error') {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: "error"
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(NoticeBoard_S.NoticeBoard, {
    isWhite: state.isWhite,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "header",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "header__wrapper",
        onClick: () => router.push('admin/notice'),
        children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
          level: 2,
          children: "\uACF5\uC9C0\uC0AC\uD56D"
        }), /*#__PURE__*/jsx_runtime_.jsx("i", {
          children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
            name: "arrowRight2"
          })
        })]
      })
    }), noticeStatus === 'loading' && /*#__PURE__*/jsx_runtime_.jsx(Loading/* default */.Z, {
      height: 120,
      text: "",
      isLoading: true
    }), noticeStatus === 'success' && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "content",
      children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: "items",
        children: noticeData.items.map(d => /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: `/board/notice/${d._id}`,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: "item",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "item__title",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "[\uACF5\uC9C0]"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: d.title
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: d.createdAt
              })]
            })
          })
        }, d._id))
      })
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/Admin/HomeControllers/Information/index.tsx






const Information_S = {
  Information: external_styled_components_default().div.withConfig({
    displayName: "Information",
    componentId: "sc-1shd8lm-0"
  })(["flex:1 1 35%;"])
};
function Information({
  pointData,
  PointStatus,
  noticeData,
  noticeStatus
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Information_S.Information, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PointBoard, {
      pointData: pointData,
      PointStatus: PointStatus
    }), /*#__PURE__*/jsx_runtime_.jsx(NoticeBoard, {
      noticeData: noticeData,
      noticeStatus: noticeStatus
    })]
  });
}
// EXTERNAL MODULE: ./src/api/index.ts
var api = __webpack_require__(8740);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
// EXTERNAL MODULE: ./src/constants/queryKeys.ts
var queryKeys = __webpack_require__(7834);
;// CONCATENATED MODULE: ./src/components/Admin/HomeControllers/index.tsx









const HomeControllers_S = {
  HomeControllers: external_styled_components_default().div.withConfig({
    displayName: "HomeControllers",
    componentId: "sc-1t13ez6-0"
  })(["height:100%;width:100%;display:flex;"])
};
function HomeControllers({
  children
}) {
  const {
    0: filtered,
    1: setFiltered
  } = (0,external_react_.useState)('cnt');
  const currentPage = 1;
  const items = (0,external_react_query_.useQueries)([{
    queryKey: [queryKeys/* queryKeys.ADMIN.sales */.a.ADMIN.sales],
    queryFn: async () => await api/* Get.getAdminSales */.dX.getAdminSales(),
    keepPreviousData: true,
    refetchOnWindowFocus: false
  }, {
    queryKey: [queryKeys/* queryKeys.ADMIN.usedPoint */.a.ADMIN.usedPoint],
    queryFn: async () => await api/* Get.getAdminPoint */.dX.getAdminPoint(),
    keepPreviousData: true,
    refetchOnWindowFocus: false
  }, {
    queryKey: [queryKeys/* queryKeys.ADMIN.notice */.a.ADMIN.notice],
    queryFn: async () => await api/* Get.getNoticeList */.dX.getNoticeList(currentPage, 5),
    keepPreviousData: true,
    refetchOnWindowFocus: false
  }, {
    queryKey: [queryKeys/* queryKeys.ADMIN.statistics */.a.ADMIN.statistics, filtered],
    queryFn: async () => await api/* Get.getAdminStatistics */.dX.getAdminStatistics(filtered),
    keepPreviousData: true,
    refetchOnWindowFocus: false
  }]);
  const handleFilter = (0,external_react_.useCallback)(e => {
    const {
      className
    } = e.target;
    setFiltered(className);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(HomeControllers_S.HomeControllers, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Status, {
      salesData: items[0].data,
      salesStatus: items[0].status,
      lineCartData: items[3].data,
      lineCartStatus: items[3].status,
      handleFilter: handleFilter,
      filtered: filtered
    }), /*#__PURE__*/jsx_runtime_.jsx(Information, {
      pointData: items[1].data,
      PointStatus: items[1].status,
      noticeData: items[2].data,
      noticeStatus: items[2].status
    })]
  });
}
// EXTERNAL MODULE: ./src/context/AppProvider.tsx + 1 modules
var AppProvider = __webpack_require__(693);
;// CONCATENATED MODULE: ./src/pages/admin/index.tsx









function AdminPage() {
  const router = (0,router_.useRouter)();
  const {
    state: {
      userInfo
    }
  } = (0,AppProvider/* useAppContext */.bp)(); // useEffect(() => {
  //   if (userInfo.userId !== 'admin') {
  //     router.push('/admin/login')
  //   }
  // }, [userInfo.userId, router]);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\uAD00\uB9AC\uC790 | \uBA54\uC778"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(AdminContainer/* default */.Z, {
      children: /*#__PURE__*/jsx_runtime_.jsx(HomeControllers, {})
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

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5513:
/***/ (function(module) {

"use strict";
module.exports = require("react-loading-overlay-ts");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5675,8703,6930,3803,643,8740,8761,693,6155,5931], function() { return __webpack_exec__(4410); });
module.exports = __webpack_exports__;

})();