(function() {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
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

/***/ }),

/***/ 3234:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/containers/MainContainer.tsx
var MainContainer = __webpack_require__(9490);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Main/Banner.tsx


/* eslint-disable @next/next/no-img-element */




const S = {
  Banner: external_styled_components_default().article.withConfig({
    displayName: "Banner",
    componentId: "ap28s0-0"
  })(["font-size:0;img{width:100%;}"])
};
const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  focusOnSelect: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: true
    }
  }]
};
function Banner({}) {
  return /*#__PURE__*/jsx_runtime_.jsx(S.Banner, {
    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
      className: "main-logo",
      src: "/images/single-first.jpeg",
      alt: "side_left_main_logo"
    })
  });
}
// EXTERNAL MODULE: ./src/components/Forms/FormFieldset.tsx
var FormFieldset = __webpack_require__(8608);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/api/index.ts
var api = __webpack_require__(8740);
// EXTERNAL MODULE: ./src/constants/queryKeys.ts
var queryKeys = __webpack_require__(7834);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
;// CONCATENATED MODULE: ./src/components/Main/MultiBanner.tsx



/* eslint-disable @next/next/no-img-element */







const MultiBanner_S = {
  MultiBanner: external_styled_components_default().div.withConfig({
    displayName: "MultiBanner",
    componentId: "sc-1q6v9tz-0"
  })(["margin-top:30px;display:flex;flex-wrap:wrap;.block-1{flex:1 55%;padding:0px;margin-right:30px;.content{padding:0px;}&__notice{ul{.item{margin-bottom:10px;&:last-child{margin-bottom:0px;}a{display:flex;justify-content:space-between;color:#888;&:hover{color:#000;}}&__title{font-size:14px;}&__date{font-size:12px;}}}}}.block-2{font-size:0;display:flex;flex:1 40%;height:155px;img{width:100%;height:100%;object-fit:fill;}}", ";"], ({
    theme
  }) => theme.mobile`
        flex-direction: column;
        padding: 0 10px;
        .block-1{
          margin-right: 0px;
        }
        .block-2{
          margin-top: 15px;
        }
      `)
};
function MultiBanner() {
  const currentPage = 1;
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching
  } = (0,external_react_query_.useQuery)([queryKeys/* queryKeys.NOTICE_LIST.name */.a.NOTICE_LIST.name, currentPage, queryKeys/* queryKeys.NOTICE_LIST.limit */.a.NOTICE_LIST.limit], async () => await api/* Get.getNoticeList */.dX.getNoticeList(currentPage, queryKeys/* queryKeys.NOTICE_LIST.limit */.a.NOTICE_LIST.limit), {
    retry: 0,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: 2000
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(MultiBanner_S.MultiBanner, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(FormFieldset/* default */.Z, {
      title: "\uB274\uC2A4 & \uC774\uBCA4\uD2B8",
      className: "block-1",
      LinkBtn: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "block-1__notice",
        children: [isLoading && /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: "loading"
        }), isSuccess && /*#__PURE__*/jsx_runtime_.jsx("ul", {
          children: data.items.slice(0, 5).map(d => /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "item",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: `/board/notice/${d._id}`,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "item__title",
                  children: d.title
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "item__date",
                  children: d.createdAt
                })]
              })
            })
          }, d._id))
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "block-2",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/main/02.jpeg",
        alt: "banner-1"
      })
    })]
  });
}
// EXTERNAL MODULE: ./src/components/style/Title.tsx
var Title = __webpack_require__(6930);
;// CONCATENATED MODULE: ./src/constants/main.ts
const COLLECTION = [{
  label: '링',
  src: '/images/best_pick/pick_1.jpeg',
  url: '/product/ring',
  title: 'Ring Collection',
  desc: '감각적인 디자인과 다양한 디자인의 링'
}, {
  label: '다이아몬드',
  src: '/images/best_pick/pick_2.jpeg',
  url: '/product/diamond',
  title: 'Diamond Collection',
  desc: '영원한 사랑을 약속하는 보석'
}, {
  label: '귀걸이',
  src: '/images/best_pick/pick_3.jpeg',
  url: '/product/earring',
  title: 'Earrings Collection',
  desc: '매순간 빛나게하주는 악세사리'
}, {
  label: '목걸이',
  src: '/images/best_pick/pick_4.jpeg',
  url: '/product/necklace',
  title: 'Necklace Collection',
  desc: '감정을 자극하는 감각적인 디자인의 악세사리'
}];
;// CONCATENATED MODULE: ./src/components/Main/BestPick.tsx



/* eslint-disable @next/next/no-img-element */







const BestPick_S = {
  BestPick: external_styled_components_default().div.withConfig({
    displayName: "BestPick",
    componentId: "sc-1xsiwy8-0"
  })(["margin:30px 0;font-size:0;", "{font-size:50px;height:60px;color:#61499a;}.image-box{.list{display:flex;flex-wrap:wrap;&__item{flex:1 1 20%;position:relative;margin:10px;min-width:150px;border:1px solid #999;cursor:pointer;overflow:hidden;dl{position:absolute;width:100%;font-size:14px;text-align:center;bottom:0;color:#333;background-color:#f5f5f5;opacity:0.7;padding:10px;dt{margin-bottom:3px;font-size:16px;font-weight:500;}}img{width:100%;height:100%;&:hover{transform:scale(1.1);transition:all 0.3s ease;}}", ";", ";}}}.slider{max-width:350px;min-width:300px;border:1px solid red;", "}"], Title/* default */.Z, props => props.theme.tablet`
              flex: 1 1 35%;
            `, ({
    theme
  }) => theme.mobile`
              flex: 1 1 35%;
              dl{
                font-size: 12px;
                dt{
                  font-size: 14px;
                }
              }
            `, props => props.theme.mobile`
        // display: none;
      `)
};
function BestPick() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(BestPick_S.BestPick, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
      level: 1,
      textAlign: "left",
      children: "BEST PICK"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "image-box",
      children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: "list",
        children: COLLECTION.map(d => /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "list__item",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: d.url,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                className: "diamond",
                src: d.src,
                alt: ""
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("dl", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("dt", {
                  children: d.title
                }), /*#__PURE__*/jsx_runtime_.jsx("dd", {
                  children: d.desc
                })]
              })]
            })
          })
        }, d.label))
      })
    })]
  });
}
// EXTERNAL MODULE: ./src/components/Product/ProductList.tsx
var ProductList = __webpack_require__(8356);
// EXTERNAL MODULE: ./src/components/Loading/index.tsx
var Loading = __webpack_require__(208);
;// CONCATENATED MODULE: ./src/components/Main/SectionLayout.tsx







const SectionLayout_S = {
  SectionLayout: external_styled_components_default().article.withConfig({
    displayName: "SectionLayout",
    componentId: "sc-1egtel3-0"
  })([".title-box{padding:100px 0 70px 0;text-align:center;em{font-size:27px;font-weight:900;color:#2840fa;font-style:normal;}p{font-size:13px;font-weight:normal;color:#999;padding:5px 0 0 0;}}.nextBtn{margin-top:15px;align-items:center;display:flex;justify-content:center;button{cursor:pointer;width:100px;border:1px solid #000;background-color:#fff;display:flex;align-items:center;justify-content:center;span{display:inline-block;pointer-events:none;font-size:16px;color:#333;&::after{content:'+';font-size:24px;padding-left:3px;vertical-align:middle;}}}}"])
};
function SectionLayout({
  name,
  title,
  text,
  data,
  isLoading,
  isSuccess,
  isFetching,
  handlePages
}) {
  const {
    0: disable,
    1: setDisable
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if (data) {
      var _data$items;

      if ((data === null || data === void 0 ? void 0 : (_data$items = data.items) === null || _data$items === void 0 ? void 0 : _data$items.length) >= (data === null || data === void 0 ? void 0 : data.total)) {
        setDisable(true);
      }
    }
  }, [data === null || data === void 0 ? void 0 : data.items, data === null || data === void 0 ? void 0 : data.total, data]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(SectionLayout_S.SectionLayout, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "title-box",
      children: [/*#__PURE__*/jsx_runtime_.jsx("em", {
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: text
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(ProductList/* default */.Z, {
      items: data === null || data === void 0 ? void 0 : data.items,
      isLoading: isLoading,
      isSuccess: isSuccess
    }), isFetching ? /*#__PURE__*/jsx_runtime_.jsx(Loading/* default */.Z, {
      isLoading: true,
      height: 100,
      text: ""
    }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: disable || /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "nextBtn",
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          name: name,
          id: name,
          onClick: handlePages,
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "\uB354\uBCF4\uAE30"
          })
        })
      })
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/Main/index.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Main_S = {
  Main: external_styled_components_default().section.withConfig({
    displayName: "Main",
    componentId: "sc-6ugv3s-0"
  })([""])
};
function Main() {
  const {
    0: queryString,
    1: setQueryString
  } = (0,external_react_.useState)({
    best: 1,
    new: 1
  });
  const results = (0,external_react_query_.useQueries)([{
    queryKey: ['products', 'best', queryString.best],
    queryFn: async () => await api/* Get.getAllProduct */.dX.getAllProduct('best', queryString.best),
    keepPreviousData: true,
    refetchOnWindowFocus: false
  }, {
    queryKey: ['products', 'new', queryString.new],
    queryFn: async () => await api/* Get.getAllProduct */.dX.getAllProduct('new', queryString.new),
    keepPreviousData: true,
    refetchOnWindowFocus: false
  }]);
  const handlePages = (0,external_react_.useCallback)(e => {
    const {
      name,
      id
    } = e.target;
    setQueryString(_objectSpread(_objectSpread({}, queryString), {}, {
      [name]: queryString[name] + 1
    }));
    let buttonHeight = document.getElementById(id);
    let topPos = buttonHeight.offsetTop;
    setTimeout(() => {
      window.scrollTo({
        top: topPos,
        behavior: 'smooth'
      });
    }, 500);
  }, [queryString]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Main_S.Main, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Banner, {}), /*#__PURE__*/jsx_runtime_.jsx(MultiBanner, {}), /*#__PURE__*/jsx_runtime_.jsx(BestPick, {}), /*#__PURE__*/jsx_runtime_.jsx(SectionLayout, {
      name: "best",
      title: "BEST ITEM",
      text: "\uD604\uC7AC \uAC00\uC7A5 \uB9CE\uC740 \uD310\uB9E4\uB97C \uAE30\uB85D\uC911\uC778 \uC544\uC774\uD15C",
      isLoading: results[0].isLoading,
      isSuccess: results[0].isSuccess,
      isFetching: results[0].isFetching,
      data: results[0].data,
      handlePages: handlePages
    }), /*#__PURE__*/jsx_runtime_.jsx(SectionLayout, {
      name: "new",
      title: "NEW ARRIVALS",
      text: "\uD56B\uD558\uAC8C \uC5C5\uB383\uB41C \uC2E0\uC0C1\uD488!!",
      isLoading: results[1].isLoading,
      isSuccess: results[1].isSuccess,
      isFetching: results[1].isFetching,
      data: results[1].data,
      handlePages: handlePages
    })]
  });
}
;// CONCATENATED MODULE: ./src/pages/index.tsx






function Home() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\uC96C\uC5BC\uB9AC | \uBA54\uC778"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "\uBA54\uC778 \uD398\uC774\uC9C0"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(MainContainer/* default */.Z, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Main, {})
    })]
  });
}

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 6155:
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,8703,6930,3803,8740,8608,8356], function() { return __webpack_exec__(3234); });
module.exports = __webpack_exports__;

})();