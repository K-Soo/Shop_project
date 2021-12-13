(function() {
var exports = {};
exports.id = 8620;
exports.ids = [8620];
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

/***/ 7174:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ TextIcon; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const S = {
  TextIcon: styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
    displayName: "TextIcon",
    componentId: "sc-1b8wiug-0"
  })(["background-color:#999;display:block;align-items:center;border-radius:5%;padding:1px 5px;color:#fff;font-size:12px;margin:", ";", " ", ""], ({
    margin
  }) => margin !== null && margin !== void 0 ? margin : "0px", props => props.text === 'best' && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["color:#505050;background-color:#fff;border:1px solid #eee;"]), props => props.text === 'new' && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["color:#718FC5;background-color:#FFEF36;"]))
};
function TextIcon({
  text,
  margin
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(S.TextIcon, {
    text: text,
    margin: margin,
    children: text
  });
}

/***/ }),

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

/***/ 2530:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ProductDetailPage; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/containers/MainContainer.tsx
var MainContainer = __webpack_require__(9490);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/ProductDetail/Tap/index.tsx




const S = {
  Tap: external_styled_components_default().article.withConfig({
    displayName: "Tap",
    componentId: "sc-1d4r3kq-0"
  })([""]),
  Categories: external_styled_components_default().ul.withConfig({
    displayName: "Tap__Categories",
    componentId: "sc-1d4r3kq-1"
  })(["display:flex;align-items:center;height:30px;font-size:14px;margin-bottom:30px;li{flex:1;display:flex;align-items:center;justify-content:center;height:100%;border:solid #dee2e6;background-color:#f9f9f9;color:#777;cursor:pointer;}li:nth-child(1){border-width:", ";border-top:", ";background-color:", ";color:", ";}li:nth-child(2){position:relative;&::after{content:", ";font-size:13px;text-align:center;position:absolute;top:0;right:5%;transform:translateY(-50%);width:40px;background-color:#333;border-radius:10px;padding:1px 0;color:#fff;}border-width:", ";border-top:", ";background-color:", ";color:", ";}li:nth-child(3){border-width:", ";border-top:", ";background-color:", ";color:", ";}", ""], props => props.selectTap === 1 ? '2px 1px 0 0' : '0 0 1px 0', props => props.selectTap === 1 ? '2px solid #000' : '2px solid #fff', props => props.selectTap === 1 ? '#fff' : '#F8F9FA', props => props.selectTap === 1 ? '#111' : '#999', ({
    reviewCnt
  }) => reviewCnt ? `'${reviewCnt}'` : '0', props => props.selectTap === 2 ? '2px 0 0 1px' : '0 0 1px 1px', props => props.selectTap === 2 ? '2px solid #000' : '2px solid #fff', props => props.selectTap === 2 ? '#fff' : '#F8F9FA', props => props.selectTap === 2 ? '#111' : '#999', props => props.selectTap === 3 ? '2px 1px 0 1px' : '0 0 1px 1px', props => props.selectTap === 3 ? '2px solid #000' : '2px solid #fff', props => props.selectTap === 3 ? '#fff' : '#F8F9FA', props => props.selectTap === 3 ? '#111' : '#999', ({
    theme
  }) => theme.mobile`
      font-size: 12px;
    `)
};
function Tap({
  children,
  text,
  reviewCnt
}) {
  console.log('reviewCnt: ', reviewCnt);
  const {
    0: selectTap,
    1: setSelectTap
  } = (0,external_react_.useState)(1);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.Tap, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(S.Categories, {
      selectTap: selectTap,
      reviewCnt: String(reviewCnt),
      children: text.map((d, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
        onClick: () => setSelectTap(index + 1),
        children: d
      }, d))
    }), external_react_default().Children.map(children, (child, index) => {
      if (index + 1 === selectTap) return child;
    })]
  });
}
// EXTERNAL MODULE: ./src/components/style/Title.tsx
var Title = __webpack_require__(6930);
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__(3595);
// EXTERNAL MODULE: ./src/components/style/Button.tsx
var Button = __webpack_require__(8761);
;// CONCATENATED MODULE: ./src/components/style/CheckBoxColor.tsx




const CheckBoxColor_S = {
  CheckBoxColor: external_styled_components_default().label.withConfig({
    displayName: "CheckBoxColor",
    componentId: "yvpi4t-0"
  })(["box-sizing:border-box;input[type='checkbox']{display:none;}input[type='checkbox'] + span{min-width:", ";height:", ";display:inline-flex;justify-content:center;align-items:center;text-align:center;padding:0 14px;margin:5px;border-radius:5px;background:transparent;font-size:13px;letter-spacing:1px;cursor:pointer;border:dashed 1px #999;}input[type='checkbox']:checked + span{border:dashed 1px #142a69;color:#142a69;}"], ({
    minWidth
  }) => minWidth !== null && minWidth !== void 0 ? minWidth : '92px', ({
    height
  }) => height !== null && height !== void 0 ? height : '30px')
};
function CheckBoxColor({
  className,
  name,
  title,
  value,
  checked,
  height,
  minWidth,
  required,
  onChange,
  dataColorName
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(CheckBoxColor_S.CheckBoxColor, {
    className: className,
    minWidth: minWidth,
    height: height,
    children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
      required: required,
      type: "checkbox",
      name: name,
      value: value,
      checked: checked,
      onChange: onChange,
      "data-color-name": dataColorName
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      dangerouslySetInnerHTML: {
        __html: title === null || title === void 0 ? void 0 : title.replace('/n', '<br />')
      }
    })]
  });
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/utils/PriceComma.ts
var PriceComma = __webpack_require__(128);
// EXTERNAL MODULE: ./src/context/AppProvider.tsx + 1 modules
var AppProvider = __webpack_require__(693);
// EXTERNAL MODULE: ./src/context/OrderProvider.tsx + 1 modules
var OrderProvider = __webpack_require__(1098);
;// CONCATENATED MODULE: ./src/components/ProductDetail/BasketModal.tsx



/* eslint-disable @next/next/no-img-element */










const BasketModal_S = {
  BasketModal: external_styled_components_default().article.withConfig({
    displayName: "BasketModal",
    componentId: "sc-1b14mq3-0"
  })(["display:", ";z-index:99;position:fixed;top:0;right:0;left:0;background-color:rgba(0,0,0,0.6);width:100%;height:100%;"], props => props.open ? 'block' : 'none'),
  Containers: external_styled_components_default().div.withConfig({
    displayName: "BasketModal__Containers",
    componentId: "sc-1b14mq3-1"
  })(["z-index:999;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;width:500px;height:600px;display:flex;flex-flow:column nowrap;justify-content:space-between;border:1px solid #333;", ""], ({
    theme
  }) => theme.mobile`
      width: 95%;
      height: 550px;
      .header{
        padding: 10px 15px;
      }
      .content{
        padding: 10px 15px;
      }
      .pagination{
        padding: 0 15px;
      }
      .footer{
        padding: 0 15px;
      }
    `),
  Header: external_styled_components_default().div.withConfig({
    displayName: "BasketModal__Header",
    componentId: "sc-1b14mq3-2"
  })(["padding:10px 25px;height:40px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #f0f0f0;font-size:14px;.close-btn{font-size:0;cursor:pointer;}"]),
  Content: external_styled_components_default().div.withConfig({
    displayName: "BasketModal__Content",
    componentId: "sc-1b14mq3-3"
  })(["padding:10px 25px;flex-basis:100%;.total-cnt{margin-bottom:10px;font-size:14px;}table{width:100%;height:auto;border-collapse:collapse;font-size:13px;caption{display:none;}thead{tr{th{border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0;padding:10px 0;}}}tbody{.row{td{padding:10px 0;border-bottom:1px solid #f0f0f0;text-align:center;vertical-align:middle;}.image{font-size:0;padding:0;img{height:100%;width:100%;object-fit:cover;}}.option-info{text-align:left;padding-left:10px;p{margin-bottom:5px;display:flex;align-items:flex-end;.name{margin-right:5px;}}}.price{del{font-size:12px;}p{color:#333;font-weight:600;}}}}}"]),
  Pagination: external_styled_components_default().div.withConfig({
    displayName: "BasketModal__Pagination",
    componentId: "sc-1b14mq3-4"
  })(["flex-basis:70px;width:100%;display:flex;justify-content:center;align-items:center;margin:0 auto;padding:0 25px;.wrapper{display:flex;align-items:center;.cnt{display:inline-block;height:100%;width:30px;text-align:center;line-height:25px;margin:0 15px;padding:3px 8px;border-radius:8px;background-color:#333;color:#fff;}button{all:unset;font-size:0;cursor:pointer;svg{color:#333;&:hover{color:red;}}}}"]),
  Footer: external_styled_components_default().div.withConfig({
    displayName: "BasketModal__Footer",
    componentId: "sc-1b14mq3-5"
  })(["display:flex;justify-content:space-between;align-items:center;border-top:1px solid #f0f0f0;flex-basis:70px;padding:0 25px;button{font-size:13px;font-weight:400;height:40px;", "}.button-group{display:flex;font-size:0;svg{width:10px;height:10px;margin-right:5px;}}"], ({
    theme
  }) => theme.mobile`
        font-size: 12px;
        height: 30px;
      `)
};
function BasketModal() {
  var _basketItems$length;

  const {
    0: basketItems,
    1: setBasketItems
  } = (0,external_react_.useState)([]);
  const {
    0: currentPage,
    1: setCurrentPage
  } = (0,external_react_.useState)(1);
  const {
    state,
    action
  } = (0,AppProvider/* useAppContext */.bp)();
  const Order = (0,OrderProvider/* useOrderContext */.m)();
  const router = (0,router_.useRouter)();
  const LIMIT = 5;
  const nextPage = currentPage * LIMIT;
  const skip = LIMIT * (currentPage - 1);
  const {
    userId
  } = state.userInfo;
  const maxPages = Math.ceil(basketItems.length / LIMIT);
  (0,external_react_.useEffect)(() => {
    if (userId) {
      setBasketItems(state.basket.basketList);
    } else {
      setBasketItems(state.basket.nonMemberBasket);
    }
  }, [userId, state.basket]);

  const handleSubmit = () => {
    // 전체상품 주문
    if (userId) {
      Order.action.setEntireProducts(state.basket.basketList);
      router.push('/order/orderform');
    } else {
      Order.action.setEntireProducts(state.basket.nonMemberBasket);
      router.push('/order/orderform');
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(BasketModal_S.BasketModal, {
    open: state.openBasketModal,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(BasketModal_S.Containers, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(BasketModal_S.Header, {
        className: "header",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
          level: 3,
          size: "16",
          children: "\uC7A5\uBC14\uAD6C\uB2C8 \uB2F4\uAE30"
        }), /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "close-btn",
          "data-name": "openBasketModal",
          onClick: action.setGlobalToggle,
          children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
            name: "closeSmall"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(BasketModal_S.Content, {
        className: "content",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "total-cnt",
          children: ["\uCD1D ", (_basketItems$length = basketItems.length) !== null && _basketItems$length !== void 0 ? _basketItems$length : 0, "\uAC1C\uC758 \uC0C1\uD488\uC774 \uC788\uC2B5\uB2C8\uB2E4."]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("caption", {
            children: "\uC7A5\uBC14\uAD6C\uB2C8 \uBAA9\uB85D \uD655\uC778"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("colgroup", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("col", {
              width: "15%"
            }), /*#__PURE__*/jsx_runtime_.jsx("col", {
              width: "60%"
            }), /*#__PURE__*/jsx_runtime_.jsx("col", {
              width: "35%"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("thead", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "\uC774\uBBF8\uC9C0"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "\uC635\uC158\uC815\uBCF4"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "\uAC00\uACA9"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
            children: basketItems.length > 0 && basketItems.slice(skip, nextPage).map((d, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
              className: "row",
              children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                className: "image",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: d.imageUrl[0].url,
                  alt: d.name
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
                className: "option-info",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "name",
                    children: d.name
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                    children: ["(", d.qty, "\uAC1C)"]
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  children: ["[\uC635\uC158:", d.selectColor[0].colorName, "]"]
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
                className: "price",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("del", {
                  children: [(0,PriceComma/* PriceComma */.O)(d.product_price), "\uC6D0"]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  children: [(0,PriceComma/* PriceComma */.O)(d.consumer_price), "\uC6D0"]
                })]
              })]
            }, i))
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(BasketModal_S.Pagination, {
        className: "pagination",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "wrapper",
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            disabled: currentPage === 1,
            onClick: () => setCurrentPage(prev => prev - 1),
            children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
              name: "arrowLeft2"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "cnt",
            children: currentPage
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            disabled: currentPage === maxPages,
            onClick: () => setCurrentPage(prev => prev + 1),
            children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
              name: "arrowRight"
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(BasketModal_S.Footer, {
        className: "footer",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "button-group",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Button/* default */.Z, {
            onClick: action.setBasketModal,
            width: "80px",
            white: true,
            margin: "0 15px 0 0",
            children: [/*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
              name: "close"
            }), "\uB2EB\uAE30"]
          }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
            width: "auto",
            white: true,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/order/basket",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "\uC7A5\uBC14\uAD6C\uB2C8 \uC774\uB3D9"
              })
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          margin: "0 0 0 20px",
          black: true,
          onClick: handleSubmit,
          children: "\uC804\uCCB4\uC0C1\uD488 \uC8FC\uBB38"
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(3803);
// EXTERNAL MODULE: ./src/api/index.ts
var api = __webpack_require__(8740);
// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(4584);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
;// CONCATENATED MODULE: ./src/hooks/useBasket.ts


const basketDefaultValue = {
  props: null,
  action: null,
  state: {
    openModal: false,
    basket: {
      selectItems: [],
      localStorageItem: null,
      CurrentSelectedOrder: null
    }
  }
};

const initializer = props => {
  const state = {
    openModal: false,
    basket: {
      selectItems: [],
      localStorageItem: null,
      CurrentSelectedOrder: null
    }
  };
  return state;
};

const generateAction = update => {
  const setOpenModal = () => update(draft => {
    draft.openModal = !draft.openModal;
  });

  const setLocalItems = data => update(draft => {
    draft.basket.localStorageItem = data;
  });

  const setCurrentOrder = data => update(draft => {
    draft.basket.CurrentSelectedOrder = data;
  });

  return {
    setOpenModal,
    setLocalItems,
    setCurrentOrder
  };
};

const useBasket = props => {
  const {
    0: state,
    1: setAppState
  } = (0,external_react_.useState)(() => initializer(props));

  const update = recipe => setAppState(prev => external_immer_default()(prev, recipe));

  const action = generateAction(update);
  const app = {
    props,
    state,
    action
  };
  return app;
};

/* harmony default export */ var hooks_useBasket = (useBasket);
;// CONCATENATED MODULE: ./src/context/BasketProvider.tsx



const BasketContext = /*#__PURE__*/(0,external_react_.createContext)(basketDefaultValue);
const useBasketContext = () => (0,external_react_.useContext)(BasketContext);
function BasketProvider(props) {
  const providerValue = hooks_useBasket(props.value);
  return /*#__PURE__*/jsx_runtime_.jsx(BasketContext.Provider, {
    value: providerValue,
    children: props.children
  });
}
;// CONCATENATED MODULE: ./src/hooks/useCheckDuplicate.ts



const useCheckDuplicate = (target, selectItems) => {
  const {
    0: state,
    1: setState
  } = (0,external_react_.useState)(false);
  const App = (0,AppProvider/* useAppContext */.bp)();
  (0,external_react_.useEffect)(() => {
    if (target.length) {
      const result = target.filter(({
        name: localName,
        selectColor: color1
      }) => selectItems.some(({
        name: selectName,
        selectColor: color2
      }) => color2[0].colorName == color1[0].colorName && localName === selectName));

      if (result.length) {
        setState(true);
      } else {
        setState(false);
      }
    }
  }, [selectItems, target]);
  return [state];
};

/* harmony default export */ var hooks_useCheckDuplicate = (useCheckDuplicate);
// EXTERNAL MODULE: ./src/components/Common/EmptyItem.tsx
var EmptyItem = __webpack_require__(8358);
// EXTERNAL MODULE: ./src/components/Common/TextIcon.tsx
var TextIcon = __webpack_require__(7174);
// EXTERNAL MODULE: ./src/constants/path.ts
var path = __webpack_require__(643);
// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__(3308);
;// CONCATENATED MODULE: ./src/components/ProductDetail/ProductInfo.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @next/next/no-img-element */


















const ProductInfo_S = {
  ProductInfo: external_styled_components_default().article.withConfig({
    displayName: "ProductInfo",
    componentId: "sc-1a3ye8f-0"
  })(["height:100%;margin:0 auto;"]),
  Card: external_styled_components_default().article.withConfig({
    displayName: "ProductInfo__Card",
    componentId: "sc-1a3ye8f-1"
  })(["display:flex;justify-content:space-between;flex-wrap:wrap;.top{flex:1;position:relative;font-size:0;min-width:300px;border:1px solid #eee;max-height:480px;.sold-out{position:absolute;width:100%;text-align:center;height:100%;background-color:rgb(255,255,255,0.6);display:", ";justify-content:center;align-items:center;p{color:#666;font-size:24px;}}img{width:100%;height:100%;object-fit:cover;}}.bottom{flex:1;min-width:320px;padding:0 20px;.order-button{}}", ""], props => props.isSoldOut ? 'flex' : 'none', ({
    theme
  }) => theme.mobile`
      flex-direction: column;
      .top{
        width: 100%;
        min-width: 100%;
        margin-bottom: 20px;
      }
      .bottom{
        width: 100%;
        min-width: 100%;
        padding: 0;
      }
    }
  `),
  IconBox: external_styled_components_default().p.withConfig({
    displayName: "ProductInfo__IconBox",
    componentId: "sc-1a3ye8f-2"
  })(["display:flex;"]),
  TitleBox: external_styled_components_default().div.withConfig({
    displayName: "ProductInfo__TitleBox",
    componentId: "sc-1a3ye8f-3"
  })(["display:flex;align-items:center;margin-bottom:5px;", "{font-size:26px;}.categoryName{margin-left:10px;}"], Title/* default */.Z),
  PriceBox: external_styled_components_default().div.withConfig({
    displayName: "ProductInfo__PriceBox",
    componentId: "sc-1a3ye8f-4"
  })(["del{color:#999;margin-right:10px;}b{font-size:18px;}"]),
  SummaryDesc: external_styled_components_default().p.withConfig({
    displayName: "ProductInfo__SummaryDesc",
    componentId: "sc-1a3ye8f-5"
  })(["margin:10px 0;color:#707070;"]),
  Spec: external_styled_components_default().div.withConfig({
    displayName: "ProductInfo__Spec",
    componentId: "sc-1a3ye8f-6"
  })([".title{cursor:pointer;height:50px;border-top:1px solid #999;border-bottom:", ";display:flex;align-items:center;justify-content:space-between;span{font-size:16px;color:#333;}svg{color:#333;width:16px;height:16px;}}.area{display:", ";border-bottom:1px solid #999;padding:10px 0;&__info{li{margin-bottom:5px;font-size:14px;}li:last-child{margin-bottom:0px;}li::before{display:inline-block;width:100px;color:#999;}li:nth-child(1){color:#555;&::before{content:'- \uD310\uB9E4\uAC00';}}li:nth-child(2){color:#333;&::before{content:'- \uC18C\uBE44\uC790\uAC00';}}li:nth-child(3){&::before{content:'- \uC0C1\uD488\uC124\uBA85';}}}}"], props => props.showSpec ? '1px dashed #999' : '1px solid #999', props => props.showSpec ? 'block' : 'none'),
  ColorListShow: external_styled_components_default().p.withConfig({
    displayName: "ProductInfo__ColorListShow",
    componentId: "sc-1a3ye8f-7"
  })(["display:", ";text-align:left;margin-bottom:5px;"], props => props.productColors >= 1 ? 'block' : 'none'),
  ColorIcon: external_styled_components_default().span.withConfig({
    displayName: "ProductInfo__ColorIcon",
    componentId: "sc-1a3ye8f-8"
  })(["display:inline-block;width:10px;height:10px;border-radius:50%;margin:0 5px;background-color:", ";"], props => props.color ? `${props.color};` : 'none'),
  ProductColorSelect: external_styled_components_default().div.withConfig({
    displayName: "ProductInfo__ProductColorSelect",
    componentId: "sc-1a3ye8f-9"
  })(["margin:20px 0;display:flex;align-items:center;.title-box{color:#333;width:80px;font-size:14px;.required-check{margin-left:3px;}}.radio-box{flex:1;display:flex;flex-wrap:wrap;.color-item{}}"]),
  Guide: external_styled_components_default().div.withConfig({
    displayName: "ProductInfo__Guide",
    componentId: "sc-1a3ye8f-10"
  })(["font-size:12px;margin-top:10px;p{font-size:10px;display:flex;align-items:center;margin-bottom:5px;}p:last-child{margin-bottom:0px;}.qty-name{font-size:13px;color:#000;&--qty{padding-left:3px;color:#8c4153;}}.cnt::after{content:'\uCD5C\uC18C\uC8FC\uBB38\uC218\uB7C9 1\uAC1C \uC774\uC0C1';font-size:10px;}.box-select::after{content:'\uC635\uC158\uC120\uD0DD \uBC15\uC2A4\uB97C \uC120\uD0DD\uD558\uC2DC\uBA74 \uC544\uB798\uC5D0 \uC0C1\uD488\uC774 \uCD94\uAC00\uB429\uB2C8\uB2E4.';font-size:10px;}svg{width:20px;}"]),
  TotalPrice: external_styled_components_default().div.withConfig({
    displayName: "ProductInfo__TotalPrice",
    componentId: "sc-1a3ye8f-11"
  })(["margin:20px 0;display:flex;justify-content:space-between;align-items:flex-end;em{font-style:normal;font-size:14px;&::before{content:'\uCD1D \uC0C1\uD488\uAE08\uC561';color:#999;}}strong{font-size:24px;}"]),
  CurrentProducts: external_styled_components_default().div.withConfig({
    displayName: "ProductInfo__CurrentProducts",
    componentId: "sc-1a3ye8f-12"
  })(["max-height:200px;overflow:auto;.selected-item{display:flex;justify-content:space-between;align-items:center;height:65px;margin-top:5px;border:1px solid #e5e5e5;&:first-child{margin-top:0px;}background-color:#F9F9F9;font-size:13px;padding:10px 15px;.current-title{flex-basis:50%;display:flex;flex-direction:column;height:100%;justify-content:center;&__name{color:#999;padding-bottom:2px;}}.current-quantity{height:100%;flex-basis:20%;input{appearance:none;width:65px;height:100%;padding-left:15px;border:1px solid #dee2e6;margin:0}input[type=number]::-webkit-inner-spin-button{opacity:1;position:absolute;top:0;right:0;height:110%;cursor:pointer;}}.current-price{white-space:nowrap;}button{all:unset;height:auto;cursor:pointer;font-size:0;border-radius:50%;padding:5px;border:1px solid transparent;&:hover{border:1px solid #e5e5e5;background:#f5f5f5;}svg{color:#000;width:16px;height:16px;}}}"]),
  EtcBox: external_styled_components_default().div.withConfig({
    displayName: "ProductInfo__EtcBox",
    componentId: "sc-1a3ye8f-13"
  })(["margin-top:15px;display:flex;justify-content:flex-end;span{border-bottom:2px solid #333;cursor:pointer;&:hover{color:#707070;}}.basket-add{&::before{content:'+';margin-right:5px;}}.wishlist{margin-left:15px;&::before{content:'+';margin-right:5px;}}"]),
  SoldOut: external_styled_components_default().div.withConfig({
    displayName: "ProductInfo__SoldOut",
    componentId: "sc-1a3ye8f-14"
  })(["display:flex;justify-content:center;align-items:center;min-height:300px;"])
};
function ProductInfo({
  item
}) {
  const {
    0: showSpec,
    1: setShowSpec
  } = (0,external_react_.useState)(false);
  const {
    0: isSoldOut,
    1: setIsSoldOut
  } = (0,external_react_.useState)(false);
  const {
    0: selectItems,
    1: setSelectItems
  } = (0,external_react_.useState)([]);
  const {
    0: interestProduct,
    1: setInterestProduct
  } = (0,external_react_.useState)('');
  const {
    action
  } = useBasketContext();
  const router = (0,router_.useRouter)();
  const App = (0,AppProvider/* useAppContext */.bp)();
  const Order = (0,OrderProvider/* useOrderContext */.m)();
  const [duplicate] = hooks_useCheckDuplicate(App.state.basket.basketList, selectItems);
  const [nonMemDuplicate] = hooks_useCheckDuplicate(App.state.basket.nonMemberBasket, selectItems);
  const {
    enqueueSnackbar,
    closeSnackbar
  } = (0,external_notistack_.useSnackbar)();
  (0,external_react_.useEffect)(() => {
    setInterestProduct(item[0].name);
    if (Number(item[0].qty) <= 0) setIsSoldOut(true);
  }, [item]);

  const handleAddInterestProduct = async () => {
    try {
      if (App.state.userInfo.userId) {
        const res = await api/* Put.updateInterestProduct */.qb.updateInterestProduct({
          userId: App.state.userInfo.userId,
          name: interestProduct
        });
        if (res.duplicate) return alert('이미 등록되었습니다.');
        if (res.success) return alert('관심상품으로 등록되었습니다.');
      } else {
        alert('로그인후 이용가능합니다.');
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const handleOrderToProduct = async () => {
    // 구매하기
    if (!selectItems.length) {
      return enqueueSnackbar('필수 옵션을 선택해주세요.', {
        variant: 'info'
      });
    }

    if (duplicate || nonMemDuplicate) {
      alert("이미동일한 상품이 장바구니에 있습니다.\n장바구니에서 확인 후 다시 추가해주세요.");
      return App.action.setBasketModal();
    }

    if (App.state.userInfo.userId) {
      try {
        const res = await api/* Put.updateBasket */.qb.updateBasket({
          userId: App.state.userInfo.userId,
          items: selectItems
        });
        App.action.setLocalItems(res.items);
        const resItems = res.items;
        const result = resItems.filter(({
          name: localName,
          selectColor: color1
        }) => selectItems.some(({
          name: selectName,
          selectColor: color2
        }) => color2[0].colorName == color1[0].colorName && localName === selectName));
        Order.action.setEntireProducts(result);
        router.push(path/* default.ORDER.path */.Z.ORDER.path);
      } catch (error) {
        console.error('error: ', error);
        return enqueueSnackbar('잠시후 다시시도해주세요.', {
          variant: 'error'
        });
      }
    } else {
      Order.action.setEntireProducts(selectItems);

      if (!App.state.status.guest) {
        router.push({
          pathname: '/auth/login',
          query: {
            type: 'order'
          }
        });
      } else {
        router.push(path/* default.ORDER.path */.Z.ORDER.path);
      }
    }
  };

  const handleAddToBasket = async () => {
    // 장바구니 추가
    if (!selectItems.length) {
      return enqueueSnackbar('필수 옵션을 선택해주세요.', {
        variant: 'info'
      });
    }

    if (duplicate || nonMemDuplicate) {
      alert("이미동일한 상품이 장바구니에 있습니다.\n장바구니에서 확인 후 다시 추가해주세요.");
      setSelectItems([]);
      return App.action.setBasketModal();
    } else {
      if (App.state.userInfo.userId) {
        try {
          const res = await api/* Put.updateBasket */.qb.updateBasket({
            userId: App.state.userInfo.userId,
            items: selectItems
          });
          App.action.setLocalItems(res.items);
          return App.action.setBasketModal();
        } catch (error) {
          console.error('error: ', error);
        }
      } else {
        App.action.setNonMemberBasketPush(selectItems);
        return App.action.setBasketModal();
      }
    }
  };

  const handleSelectItem = (e, currentItem) => {
    const {
      value
    } = e.target;
    const {
      colorName
    } = e.target.dataset;
    const rest = Object.assign({}, currentItem[0]);
    rest.date = new Date().toLocaleString();
    rest.selectColor = [{
      colorName: colorName,
      hexValue: value
    }];
    rest.point = +currentItem[0].consumer_price * 0.1;
    rest.totalConsumerPrice = currentItem[0].consumer_price;
    rest.totalProductPrice = currentItem[0].product_price;
    delete rest._id;
    const exist = selectItems.filter(x => x.selectColor[0].colorName == rest.selectColor[0].colorName);

    if (exist.length) {
      return alert('이미 선택하셨습니다. 아래에서 삭제후 다시 이용해주세요');
    } else {
      setSelectItems(prev => {
        return [...prev, _objectSpread(_objectSpread({}, rest), {}, {
          qty: 1
        })];
      });
    }
  };

  const ProductAllPriceCalc = (0,external_react_.useMemo)(() => {
    return selectItems.reduce((acc, cur) => {
      const result = cur.qty * Number(cur.consumer_price) + acc;
      return result;
    }, 0);
  }, [selectItems]);

  const handleCount = (e, targetItem) => {
    const cnt = +e.target.value;
    if (!cnt) return alert('최소 주문수량은 1개 입니다.');
    if (cnt > 10) return alert('최대 주문수량은 10개 입니다.');
    if (cnt > item[0].qty) return alert(`최대 주문수량은 ${item[0].qty}개 입니다.`);
    targetItem.qty = cnt;
    targetItem.totalConsumerPrice = String(+targetItem.consumer_price * cnt);
    targetItem.totalProductPrice = String(+targetItem.product_price * cnt);
    setSelectItems([...selectItems]);
  };

  const TotalCnt = (0,external_react_.useMemo)(() => {
    const cnt = selectItems.reduce((pre, cur) => {
      return pre + cur.qty;
    }, 0);
    return cnt;
  }, [selectItems]);

  const handleRemoveItem = currentItem => {
    const filterItem = selectItems.filter(d => d.selectColor !== currentItem.selectColor);
    setSelectItems(filterItem);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(ProductInfo_S.ProductInfo, {
    children: item && item.map(d => {
      var _d$product_colors;

      return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProductInfo_S.Card, {
        isSoldOut: isSoldOut,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "top",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "sold-out",
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "SOLD OUT"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: d.imageUrl[0].url,
            alt: d.name
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "bottom",
          children: [/*#__PURE__*/jsx_runtime_.jsx(ProductInfo_S.ColorListShow, {
            productColors: d.product_colors.length,
            children: (_d$product_colors = d.product_colors) === null || _d$product_colors === void 0 ? void 0 : _d$product_colors.map(d => /*#__PURE__*/jsx_runtime_.jsx(ProductInfo_S.ColorIcon, {
              className: "color-icon",
              color: d.hex_value
            }, d.hex_value))
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProductInfo_S.IconBox, {
            children: [d.new_product && /*#__PURE__*/jsx_runtime_.jsx(TextIcon/* default */.Z, {
              text: "new",
              margin: "0 3px 0 0"
            }), d.best_product && /*#__PURE__*/jsx_runtime_.jsx(TextIcon/* default */.Z, {
              text: "best"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProductInfo_S.TitleBox, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
              level: 3,
              textAlign: "left",
              children: d.name
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "categoryName",
              children: d.category
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProductInfo_S.PriceBox, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("del", {
                children: [(0,utils/* PriceComma */.OB)(d.product_price), "\uC6D0"]
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
              children: [(0,utils/* PriceComma */.OB)(d.consumer_price), "\uC6D0"]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(ProductInfo_S.SummaryDesc, {
            children: d.summary_description
          }), d.qty > 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ProductInfo_S.Spec, {
              showSpec: showSpec,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "title",
                onClick: () => setShowSpec(!showSpec),
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "\uC0C1\uD488\uC815\uBCF4"
                }), showSpec ? /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
                  name: "minus"
                }) : /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
                  name: "plus"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "area",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  className: "area__info",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("del", {
                      children: [(0,utils/* PriceComma */.OB)(d.product_price), "\uC6D0"]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    children: [(0,utils/* PriceComma */.OB)(d.consumer_price), "\uC6D0"]
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: d.description
                  })]
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProductInfo_S.ProductColorSelect, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "title-box",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "\uC0C9\uC0C1"
                }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
                  className: "required-check",
                  children: "[\uD544\uC218]"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "radio-box",
                children: d.product_colors.length && d.product_colors.map((d, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(CheckBoxColor, {
                    className: "color-item",
                    name: "checkbox-color",
                    checked: selectItems.find(f => f.selectColor[0].hexValue === d.hex_value) || false,
                    dataColorName: d.color_name,
                    value: d.hex_value,
                    title: d.color_name,
                    onChange: e => handleSelectItem(e, item)
                  })
                }, d.hex_value))
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(ProductInfo_S.CurrentProducts, {
              children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
                children: selectItems.map(d => /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  className: "selected-item",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "current-title",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "current-title__name",
                      children: d.name
                    }), /*#__PURE__*/jsx_runtime_.jsx("b", {
                      className: "current-title__color",
                      children: d.selectColor[0].colorName
                    })]
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "current-quantity",
                    children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                      type: "number",
                      value: d.qty,
                      name: "qtyCount",
                      onChange: e => handleCount(e, d)
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                    className: "current-price",
                    children: [(0,utils/* PriceComma */.OB)(Number(d.consumer_price)), "\uC6D0"]
                  }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                    name: "close",
                    onClick: () => handleRemoveItem(d),
                    children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
                      name: "closeSmall"
                    })
                  })]
                }, d.selectColor[0].hexValue))
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProductInfo_S.Guide, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                className: "qty-name",
                children: [/*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
                  name: "info"
                }), "\uB0A8\uC740\uC218\uB7C9", /*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
                  className: "qty-name--qty",
                  children: [d.qty, "\uAC1C"]
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "cnt",
                children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
                  name: "info"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "box-select",
                children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
                  name: "info"
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProductInfo_S.TotalPrice, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("em", {
                children: [" ", TotalCnt, "\uAC1C"]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
                children: [(0,utils/* PriceComma */.OB)(ProductAllPriceCalc), "\uC6D0"]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
              black: true,
              className: "order-button",
              onClick: handleOrderToProduct,
              children: "\uAD6C\uB9E4\uD558\uAE30"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProductInfo_S.EtcBox, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "basket-add",
                onClick: handleAddToBasket,
                children: "\uC7A5\uBC14\uAD6C\uB2C8 \uB2F4\uAE30"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "wishlist",
                onClick: handleAddInterestProduct,
                children: "\uAD00\uC2EC\uC0C1\uD488 \uCD94\uAC00"
              })]
            })]
          }) : /*#__PURE__*/jsx_runtime_.jsx(ProductInfo_S.SoldOut, {
            children: /*#__PURE__*/jsx_runtime_.jsx(EmptyItem/* default */.Z, {
              text: d.qty === 0 ? '품절된 상품입니다.' : '판매종료된 상품입니다.'
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(BasketModal, {})]
        })]
      }, d.seq);
    })
  });
}
;// CONCATENATED MODULE: external "rc-rate"
var external_rc_rate_namespaceObject = require("rc-rate");;
var external_rc_rate_default = /*#__PURE__*/__webpack_require__.n(external_rc_rate_namespaceObject);
// EXTERNAL MODULE: ./src/components/Loading/index.tsx
var Loading = __webpack_require__(208);
;// CONCATENATED MODULE: ./src/components/ProductDetail/ReviewBanner.tsx







const ReviewBanner_S = {
  Review: external_styled_components_default().div.withConfig({
    displayName: "ReviewBanner__Review",
    componentId: "hqqmaz-0"
  })(["margin:20px 0;height:70px;padding:15px;border:1px solid #e0e0e0;border-radius:5px;cursor:default;ul{height:100%;display:flex;justify-content:space-between;align-items:center;color:#505050;font-size:14px;li{flex:1;display:flex;align-items:center;justify-content:center;height:100%;}.cont{flex-basis:25%;border-right:1px solid #e0e0e0;text-align:center;font-weight:600;p{display:block;}}.star{flex-basis:40%;border-right:1px solid #e0e0e0;}.desc{text-align:center;flex-basis:35%;}}", ""], ({
    theme
  }) => theme.mobile`
      padding: 10px 5px;
      ul{
        font-size: 14px;
        .star{
          font-size: 12px;
        }
        .desc{
          font-size: 12px;
        }
      }
    }`)
};
const StyledRate = /*#__PURE__*/external_styled_components_default()((external_rc_rate_default())).withConfig({
  displayName: "ReviewBanner__StyledRate",
  componentId: "hqqmaz-1"
})(["&.rc-rate{font-size:30px;color:#000;", "}"], ({
  theme
}) => theme.mobile`
      font-size: 14px;
      .rc-rate-star{
        margin-right: 3px;
      }
    }`);
function ReviewBanner({
  reviewCnt,
  userRate,
  percentage,
  isSuccess,
  isLoading
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ReviewBanner_S.Review, {
    children: [isLoading && /*#__PURE__*/jsx_runtime_.jsx(Loading/* default */.Z, {
      isLoading: true,
      text: ""
    }), isSuccess && /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "cont",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            style: {
              fontSize: '16px'
            },
            children: reviewCnt
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "review"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "star",
        children: userRate ? /*#__PURE__*/jsx_runtime_.jsx(StyledRate, {
          defaultValue: userRate,
          disabled: true
        }) : /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "\uC544\uC9C1 \uD3C9\uC810\uC774 \uC5C6\uC2B5\uB2C8\uB2E4"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "desc",
        children: percentage ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: ["\uAD6C\uB9E4\uC790\uC758 \uC57D ", percentage, "%\uAC00", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "\uC774\uC81C\uD488\uC744 \uCD94\uCC9C\uD569\uB2C8\uB2E4."]
        }) : /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "\uC544\uC9C1 \uB9AC\uBDF0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4"
        })
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/ProductDetail/Tap/InfoTap.tsx



const InfoTap_S = {
  InfoTap: external_styled_components_default().div.withConfig({
    displayName: "InfoTap",
    componentId: "sc-1nx8xtg-0"
  })([""])
};
function InfoTap({}) {
  return /*#__PURE__*/jsx_runtime_.jsx(InfoTap_S.InfoTap, {
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus labore nam accusamus totam magnam quis aspernatur. Omnis quos eaque earum? In cum culpa consequatur omnis minus eius dolores obcaecati quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati molestias, rem quaerat neque suscipit quasi illo sint architecto aspernatur facere? Necessitatibus fugit aut ullam neque velit error rem mollitia deleniti eaque totam labore dolor, ab molestias expedita dolores, iure minima sapiente numquam incidunt temporibus. Voluptas explicabo id dicta ipsum officiis quae laboriosam ad saepe? Laudantium eveniet temporibus libero quos accusantium, dolorum, error quod aliquid quas, officia sequi delectus cupiditate? Inventore corrupti et natus eos itaque totam similique quia obcaecati iste, a, facilis aut ullam expedita tempora. Quis neque ipsa mollitia corrupti culpa. Perspiciatis voluptas minima vel quia beatae quaerat nesciunt ipsum dolorem consectetur sed ab tempore assumenda in quas, obcaecati numquam! Aliquid, ipsum? Saepe odit qui, laborum odio facere necessitatibus labore sapiente esse nulla ipsa nam itaque illum atque optio libero fuga nihil? Fuga maiores reprehenderit magnam placeat, quod nihil consequatur neque repudiandae fugiat facilis a, dicta temporibus ea iusto officiis, autem vitae adipisci magni? Harum ut laborum nam nisi aspernatur accusantium, sint, beatae dolorem pariatur quia, dolore nostrum! Aperiam veniam voluptatibus beatae alias aspernatur, magnam id odio distinctio. Saepe dignissimos, at, corporis repellat asperiores earum accusamus voluptatibus cum qui ipsam, id distinctio mollitia quam vitae facilis non quidem ea accusantium iste. Ex unde exercitationem illum totam accusantium enim id rerum provident voluptatum! Praesentium minima, repellat eius, autem, corrupti repellendus labore facilis soluta nisi quibusdam quos quas. Provident exercitationem earum debitis dignissimos nihil officia, sint corrupti aliquam. Minus a mollitia minima quis, temporibus sequi. Quos aut consequuntur, praesentium provident sequi dolorum repudiandae ipsum quis placeat et unde officia maiores, facere omnis labore ipsam illum necessitatibus qui ullam blanditiis, libero iste sunt similique. Inventore placeat quod quas aliquid cum aperiam repellendus totam, tenetur suscipit culpa tempora maxime est in unde iste vero, facere qui facilis delectus odio! At, et. Odit impedit itaque harum asperiores velit tempora dolores? Voluptates excepturi neque explicabo praesentium consequatur fugiat, doloremque harum porro necessitatibus, aliquam labore blanditiis, delectus eveniet vero deleniti nulla velit. Possimus vitae, voluptate iure unde officia ad odit hic accusamus provident quia molestias omnis quod molestiae quis sint magnam odio impedit. Animi vel magni quisquam provident distinctio et debitis nostrum, dolorem sunt, vitae omnis ipsum expedita asperiores eveniet reprehenderit cum. Dolorem repudiandae, commodi cum distinctio libero assumenda necessitatibus aliquid totam, nostrum doloremque sit repellat ea expedita maiores odit debitis, animi alias velit qui? Officiis ratione tempore minima quidem nulla facere accusantium repellat omnis quo provident reprehenderit ex, aspernatur porro quis tempora odit modi natus voluptatum adipisci incidunt quasi velit in delectus. Corrupti et eum omnis perspiciatis ab debitis esse est error sapiente nam aut vitae deserunt possimus repellendus beatae exercitationem id impedit modi praesentium aperiam eaque, consequuntur dolorem! Ratione est, consequuntur laborum doloribus expedita voluptates accusamus exercitationem soluta eligendi quasi dolorum facere eius quisquam quae inventore tempore. Fuga eligendi consequatur dolorum eaque iste id vero, quisquam pariatur ab maiores laudantium ipsam eveniet doloribus, tenetur aliquam in dolore impedit fugit quibusdam corrupti est asperiores. Rem similique quos molestiae nulla odio accusamus aperiam quaerat distinctio alias!"
  });
}
// EXTERNAL MODULE: ./src/context/ReviewProvider.tsx + 1 modules
var ReviewProvider = __webpack_require__(6172);
;// CONCATENATED MODULE: external "fslightbox-react"
var external_fslightbox_react_namespaceObject = require("fslightbox-react");;
var external_fslightbox_react_default = /*#__PURE__*/__webpack_require__.n(external_fslightbox_react_namespaceObject);
// EXTERNAL MODULE: ./src/components/Pagination/index.tsx + 3 modules
var Pagination = __webpack_require__(9973);
;// CONCATENATED MODULE: ./src/components/ProductDetail/Tap/ReviewListTap/index.tsx




function ReviewListTap_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ReviewListTap_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ReviewListTap_ownKeys(Object(source), true).forEach(function (key) { ReviewListTap_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ReviewListTap_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ReviewListTap_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @next/next/no-img-element */













const ReviewListTap_S = {
  ReviewListTap: external_styled_components_default().div.withConfig({
    displayName: "ReviewListTap",
    componentId: "sc-1ukykr1-0"
  })([""]),
  ButtonBox: external_styled_components_default().div.withConfig({
    displayName: "ReviewListTap__ButtonBox",
    componentId: "sc-1ukykr1-1"
  })(["display:flex;button{height:35px;font-size:13px;width:140px;display:flex;align-items:center;justify-content:center;span{margin-left:5px;}svg{width:18px;height:18px;}}", ""], ({
    theme
  }) => theme.mobile`
      button{
        height: 30px;
        font-size: 12px;
        svg{
          width: 15px;
          height: 15px;
        }
      }
    }
  `),
  List: external_styled_components_default().div.withConfig({
    displayName: "ReviewListTap__List",
    componentId: "sc-1ukykr1-2"
  })(["border-top:1px solid rgb(144,144,144);.item{cursor:pointer;display:flex;justify-content:space-between;padding:15px 20px;color:#505050;font-size:14px;border-bottom:1px solid #eee;.desc-box{pointer-events:none;flex:1;&__user-info{display:flex;justify-content:flex-start;align-items:center;padding-bottom:10px;p{font-size:12px;color:#999;}}&__text{display:block;max-width:400px;max-height:40px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;p{overflow:hidden;display:block;text-align:left !important;text-overflow:ellipsis;white-space:nowrap;}}}.image-box{cursor:pointer;border:1px solid #eee;margin-left:15px;font-size:0;width:120px;height:120px;font-size:0;img{width:100%;height:100%;object-fit:cover;}}&[data-active=true]{min-height:150px;flex-direction:column;.desc-box{margin-bottom:15px;&__text{max-width:100%;max-height:100%;p{overflow:hidden;text-overflow:clip;white-space:pre-wrap;}}}.image-box{margin:0;}}}", ""], ({
    theme
  }) => theme.mobile`
    .item{
      height: 100px;
      border: solid rgb(248, 248, 248);
      border-width: 0 0 6px 0;
      padding: 10px 20px;
      .desc-box{
        &__user-info{
          justify-content: space-between;
        }
        &__text{
        max-width: 200px;
        }
      }
      .image-box{
        height: 80px;
        width: 80px;
      }
    }
  `)
};
const ReviewListTap_StyledRate = /*#__PURE__*/external_styled_components_default()((external_rc_rate_default())).withConfig({
  displayName: "ReviewListTap__StyledRate",
  componentId: "sc-1ukykr1-3"
})(["&.rc-rate{font-size:14px;color:#000;margin:0;.rc-rate-star{margin:0;}}"]);
function ReviewListTap({
  item,
  items,
  maxPages,
  isSuccess,
  isLoading,
  isFetching,
  children
}) {
  const {
    0: active,
    1: setActive
  } = (0,external_react_.useState)('');
  const {
    0: imageToggler,
    1: setImageToggler
  } = (0,external_react_.useState)({
    toggle: false,
    url: ''
  });
  const router = (0,router_.useRouter)();
  const App = (0,AppProvider/* useAppContext */.bp)();
  const Review = (0,ReviewProvider/* useReviewContext */.A)();
  const TextRef = (0,external_react_.useRef)(null);

  const handleRouter = () => {
    if (App.state.userInfo.idx) {
      Review.action.setProduct(item);
      router.push({
        pathname: '/product/review',
        query: {
          idx: App.state.userInfo.idx,
          productId: item[0]._id
        }
      });
    } else {
      alert('로그인후 이용가능합니다.');
    }
  };

  const handleItem = e => {
    const {
      id
    } = e.target;
    setActive(prev => prev === id ? 'false' : id);
  };

  const handleImage = e => {
    setImageToggler(ReviewListTap_objectSpread(ReviewListTap_objectSpread({}, imageToggler), {}, {
      toggle: !imageToggler.toggle,
      url: e.target.src
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ReviewListTap_S.ReviewListTap, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(ReviewListTap_S.ButtonBox, {
      className: "button-box",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Button/* default */.Z, {
        black: true,
        onClick: handleRouter,
        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
          children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
            name: "pencil"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\uC0C1\uD488\uD6C4\uAE30 \uC4F0\uAE30"
        })]
      })
    }), children, isSuccess && /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: items.length > 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ReviewListTap_S.List, {
          children: items.length && items.map(d => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "item",
            id: d._id,
            onClick: handleItem,
            "data-active": d._id === active,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "desc-box",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "desc-box__user-info",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx(ReviewListTap_StyledRate, {
                    defaultValue: Number(d.rate),
                    disabled: true
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    style: {
                      margin: '0 10px'
                    },
                    children: (0,utils/* charConvert */.NP)(d.commenter.userName)
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "date",
                  children: d.createdAt
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "target-height",
                className: "desc-box__text",
                ref: TextRef,
                dangerouslySetInnerHTML: {
                  __html: d.comment
                }
              })]
            }), d.url && /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "image-box",
              onClick: handleImage,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                className: "image-box__img",
                src: d.url,
                alt: "dd"
              })
            })]
          }, d._id))
        }), /*#__PURE__*/jsx_runtime_.jsx(Pagination/* default */.Z, {
          maxPages: maxPages,
          isFetching: isFetching,
          margin: "20px 0"
        })]
      }) : /*#__PURE__*/jsx_runtime_.jsx(EmptyItem/* default */.Z, {
        text: "\uB9AC\uBDF0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((external_fslightbox_react_default()), {
      toggler: imageToggler.toggle,
      sources: [imageToggler.url]
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/ProductDetail/Tap/BuyInfoTap.tsx



const BuyInfoTap_S = {
  BuyInfoTap: external_styled_components_default().div.withConfig({
    displayName: "BuyInfoTap",
    componentId: "sc-13r596w-0"
  })([""])
};
function BuyInfoTap() {
  return /*#__PURE__*/jsx_runtime_.jsx(BuyInfoTap_S.BuyInfoTap, {
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus labore nam accusamus totam magnam quis aspernatur. Omnis quos eaque earum? In cum culpa consequatur omnis minus eius dolores obcaecati quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit unde necessitatibus ad esse sit adipisci corporis quis cupiditate amet officia dolores, itaque quia! Repellendus amet harum ipsa eius quam rem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quaerat, deleniti aut debitis, nisi animi nostrum facilis cupiditate, reiciendis fugit voluptate numquam dicta unde suscipit quam cumque magnam libero. Iste repellat voluptatibus eveniet, atque quibusdam quis numquam dolorum consectetur ab corrupti pariatur debitis autem hic earum delectus ratione maiores modi, quo at corporis laboriosam itaque? Ex, voluptatum fuga cupiditate fugit rem animi, quae debitis ut dolorum, amet cum tempora obcaecati sed molestias consectetur sapiente possimus vel. Ipsa, nobis quam! Consequatur ratione vero dolore voluptatem blanditiis. Voluptatum in molestias quibusdam amet, omnis similique reiciendis ex saepe voluptate libero laboriosam quo hic ad dolorum necessitatibus odit repellat itaque distinctio velit, eaque, ipsum optio sint nobis fuga! Neque dicta eveniet odit repellendus eligendi soluta unde maiores ad dolores fuga, eaque, laudantium hic! Eaque deserunt praesentium eos consectetur delectus excepturi at est voluptatum blanditiis! Quasi labore fugiat architecto dolor mollitia amet beatae corporis laborum. Eligendi ad dicta, optio dolorum nobis ut, vel tenetur ab doloribus deserunt in tempora? Quae iusto ex rem quas sint odio illum recusandae doloremque. Dicta, ducimus numquam? Earum numquam vel deserunt aliquid similique voluptatum ipsam repudiandae at a excepturi odio autem aspernatur consequuntur, doloremque reprehenderit ullam. Iste, nemo mollitia a voluptatibus amet id alias officiis ipsam ab dicta qui, laudantium illo error repudiandae quidem eaque maxime ducimus magnam magni perferendis nostrum optio est. Error corporis, exercitationem dolorum quo magnam, illum dolore eveniet itaque quidem tempore optio dolor? Aut deleniti, laboriosam beatae magni excepturi odit quia omnis, totam eius, voluptate nihil iusto? Asperiores tempore neque nostrum atque, suscipit nisi incidunt fuga hic cupiditate, quae quisquam eos vero rerum mollitia, error qui placeat vitae? Libero temporibus natus, nihil dicta dolorem quis deserunt non accusantium totam similique fuga consequatur suscipit at commodi expedita aliquid placeat alias voluptas eaque est dolore. Voluptatibus illum accusamus, sint reprehenderit ut omnis numquam molestiae modi? Ab, non exercitationem? Libero, provident modi! Sed recusandae quia eligendi ipsam modi, quibusdam sint eos commodi dolores corporis aliquam, neque totam nesciunt error! Quo corporis vitae esse atque amet modi omnis illum laborum repudiandae magnam, quam maiores dolor officia aspernatur vel consequatur reprehenderit quia nihil. Perspiciatis minus incidunt tenetur laborum voluptatem, cumque aperiam saepe iusto perferendis totam consectetur labore odio eos ipsum facilis officiis quia sequi? Quo, quidem? Eaque saepe magnam facere adipisci est nobis quaerat autem tenetur distinctio expedita dolor laboriosam qui, repellat incidunt accusamus nam corporis ratione architecto asperiores delectus ex voluptatem nulla debitis! Id recusandae magni reprehenderit aliquam nihil. Laboriosam minima voluptatem vitae nam consectetur error possimus eaque nihil quasi dolorum ducimus iste quisquam, necessitatibus ab aut impedit aliquam quas. Quisquam temporibus, vero nulla obcaecati reprehenderit quaerat vel tenetur veniam natus odio fuga ex laudantium rerum maiores culpa maxime iusto asperiores sequi neque accusamus corrupti, quibusdam quae mollitia? Culpa a mollitia nobis tenetur ad expedita quod cum officia, consequatur, odio hic beatae omnis officiis recusandae veniam nulla nemo quidem suscipit quaerat? In accusantium quibusdam eius quod, alias, eum veritatis ipsum ex cum assumenda non iure corrupti voluptatem consectetur blanditiis repudiandae."
  });
}
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
// EXTERNAL MODULE: ./src/constants/queryKeys.ts
var queryKeys = __webpack_require__(7834);
// EXTERNAL MODULE: ./src/components/style/Select.tsx
var Select = __webpack_require__(8116);
;// CONCATENATED MODULE: ./src/components/ProductDetail/Tap/ReviewListTap/SelectFilter.tsx






const SelectFilter_S = {
  SelectFilter: external_styled_components_default().div.withConfig({
    displayName: "SelectFilter",
    componentId: "g4yj36-0"
  })(["display:flex;justify-content:space-between;align-items:center;margin:20px 0;color:#505050;font-size:14px;.review-filter{display:flex;align-items:center;p:first-child{margin-right:10px;}p{display:flex;align-items:flex-end;i{display:inline-block;padding-right:5px;svg{color:#505050;}}.cnt{padding-left:1px;color:#000;}span{color:#505050;}}}"])
};
function SelectFilter({
  reviewCnt,
  totalImageReview,
  handleFiltered
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(SelectFilter_S.SelectFilter, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "review-filter",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
          children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
            name: "menu2"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\uC804\uCCB4 \uB9AC\uBDF0"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
          className: "cnt",
          children: ["(", reviewCnt || 0, ")"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
          children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
            name: "image"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\uC0AC\uC9C4 \uB9AC\uBDF0"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
          className: "cnt",
          children: ["(", totalImageReview || 0, ")"]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Select/* default */.Z, {
      width: "140",
      height: "35",
      onChange: handleFiltered,
      children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
        value: -1,
        "data-name": "createdAt",
        children: "\uCD5C\uC2E0\uC21C"
      }), /*#__PURE__*/jsx_runtime_.jsx("option", {
        value: -1,
        "data-name": "rate",
        children: "\uD3C9\uC810 \uB192\uC740\uC21C"
      }), /*#__PURE__*/jsx_runtime_.jsx("option", {
        value: 1,
        "data-name": "rate",
        children: "\uD3C9\uC810 \uB0AE\uC740\uC21C"
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/ProductDetail/index.tsx















const ProductDetail_S = {
  ProductDetail: external_styled_components_default().section.withConfig({
    displayName: "ProductDetail",
    componentId: "o1itvw-0"
  })(["padding:10px;max-width:900px;margin:0 auto;"])
};
function ProductDetail({
  item
}) {
  const App = (0,AppProvider/* useAppContext */.bp)();
  const productId = item[0]._id;
  const currentPage = Number(App.state.pagination.currentPage);
  const {
    0: sortKey,
    1: setSortKey
  } = (0,external_react_.useState)('createdAt');
  const {
    0: sortValue,
    1: setSortValue
  } = (0,external_react_.useState)(-1);
  const {
    data: reviewData,
    isLoading,
    isSuccess,
    isError,
    isFetching
  } = (0,external_react_query_.useQuery)([queryKeys/* queryKeys.REVIEW.name */.a.REVIEW.name, productId, currentPage, queryKeys/* queryKeys.REVIEW.limit */.a.REVIEW.limit, sortKey, sortValue], async () => await api/* Get.getProductReview */.dX.getProductReview(productId, currentPage, queryKeys/* queryKeys.REVIEW.limit */.a.REVIEW.limit, sortKey, sortValue), {
    retry: 0,
    keepPreviousData: true
  });
  console.log('reviewData: ', reviewData);

  const handleFiltered = e => {
    const {
      value,
      selectedOptions
    } = e.target;
    const name = selectedOptions[0].getAttribute('data-name');
    setSortKey(name);
    setSortValue(Number(value));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProductDetail_S.ProductDetail, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(ProductInfo, {
      item: item
    }), /*#__PURE__*/jsx_runtime_.jsx(ReviewBanner, {
      isSuccess: isSuccess,
      isLoading: isLoading,
      reviewCnt: reviewData && reviewData.reviewCnt,
      userRate: reviewData && reviewData.totalRate,
      percentage: reviewData && reviewData.totalPercentage
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Tap, {
      text: ['상품정보', '상품 후기', '문의'],
      reviewCnt: reviewData && reviewData.reviewCnt,
      children: [/*#__PURE__*/jsx_runtime_.jsx(InfoTap, {}), /*#__PURE__*/jsx_runtime_.jsx(ReviewListTap, {
        isSuccess: isSuccess,
        isLoading: isLoading,
        isFetching: isFetching,
        item: item,
        items: reviewData && reviewData.items,
        maxPages: reviewData && reviewData.maxPages,
        children: /*#__PURE__*/jsx_runtime_.jsx(SelectFilter, {
          reviewCnt: reviewData && reviewData.reviewCnt,
          totalImageReview: reviewData && reviewData.totalImageReview,
          handleFiltered: handleFiltered
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(BuyInfoTap, {})]
    })]
  });
}
// EXTERNAL MODULE: external "next-cookies"
var external_next_cookies_ = __webpack_require__(2948);
var external_next_cookies_default = /*#__PURE__*/__webpack_require__.n(external_next_cookies_);
// EXTERNAL MODULE: ./src/components/Common/Breadcrumb.tsx
var Breadcrumb = __webpack_require__(7777);
// EXTERNAL MODULE: ./src/constants/product.ts
var product = __webpack_require__(9770);
;// CONCATENATED MODULE: ./src/pages/product/[category]/[id]/index.tsx















function ProductDetailPage(props) {
  const router = (0,router_.useRouter)();
  const {
    item
  } = props;
  const {
    category
  } = router.query;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: ["\uC96C\uC5BC\uB9AC | ", item.name]
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: item.description
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(BasketProvider, {
      value: props,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainContainer/* default */.Z, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Breadcrumb/* default */.Z, {
          children: [path/* default.MAIN */.Z.MAIN, {
            path: `/product/${category}`,
            tag: `${product/* CategoryEnum */.B[category]}`
          }].map(({
            path,
            tag
          }) => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: path,
            children: tag
          }, path))
        }), /*#__PURE__*/jsx_runtime_.jsx(ProductDetail, {
          item: [item]
        })]
      })
    })]
  });
}
const getServerSideProps = async context => {
  const {
    category,
    id
  } = context.query;
  const parse = context.req ? external_next_cookies_default()(context) : '';

  try {
    const res = await api/* Get.getProductDetail */.dX.getProductDetail(category, id);
    return {
      props: {
        item: res,
        cookies: parse
      }
    };
  } catch (error) {
    throw error;
  }
};

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

/***/ 2948:
/***/ (function(module) {

"use strict";
module.exports = require("next-cookies");;

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,8703,6930,3803,643,8740,8761,693,3493,1098,8116,7320,9770,6172], function() { return __webpack_exec__(2530); });
module.exports = __webpack_exports__;

})();