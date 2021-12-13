exports.id = 8356;
exports.ids = [8356];
exports.modules = {

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

/***/ 8356:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ProductList; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3595);
/* harmony import */ var components_ProductCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5613);








const S = {
  ProductList: styled_components__WEBPACK_IMPORTED_MODULE_2___default().article.withConfig({
    displayName: "ProductList",
    componentId: "sc-1re8grz-0"
  })(["display:flex;flex-wrap:wrap;"]),
  EmptyItems: styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "ProductList__EmptyItems",
    componentId: "sc-1re8grz-1"
  })(["margin:0 auto;padding:20px 0;font-size:12px;color:#999;i{display:block;margin:0 auto;text-align:center;font-size:0;}"])
};
function ProductList({
  items
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(S.ProductList, {
    children: items && items.length > 0 ? items.map((d, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ProductCard__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      product_type: d.product_type,
      seq: d.seq,
      name: d.name,
      description: d.description,
      summary_description: d.summary_description,
      product_price: d.product_price,
      consumer_price: d.consumer_price,
      imageUrl: d.imageUrl,
      product_colors: d.product_colors,
      best_product: d.best_product,
      new_product: d.new_product,
      qty: d.qty,
      isList: true
    }, d._id)) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(S.EmptyItems, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
          name: "menu",
          style: {
            color: '#000'
          }
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        style: {
          'marginTop': '10px'
        },
        children: "\uAC80\uC0C9\uB41C \uC0C1\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."
      })]
    })
  });
}

/***/ }),

/***/ 5613:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ProductCard; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/components/style/Title.tsx
var Title = __webpack_require__(6930);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(3803);
// EXTERNAL MODULE: ./src/components/Common/TextIcon.tsx
var TextIcon = __webpack_require__(7174);
;// CONCATENATED MODULE: ./src/components/style/ColorIcon.tsx



const S = {
  ColorIcon: external_styled_components_default().span.withConfig({
    displayName: "ColorIcon",
    componentId: "v0m6dz-0"
  })(["display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:5px;background-color:", ";border:1px solid #eee;"], props => props.color ? `${props.color};` : 'none')
};
function ColorIcon({
  color
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(S.ColorIcon, {
    color: color
  });
}
;// CONCATENATED MODULE: ./src/components/ProductCard/index.tsx



/* eslint-disable @next/next/no-img-element */









const ProductCard_S = {
  ProductCard: external_styled_components_default().div.withConfig({
    displayName: "ProductCard",
    componentId: "ohfgzu-0"
  })(["height:100%;padding:10px;", " .card-inner{margin:0 auto;max-width:260px;display:flex;flex-direction:column;&__top{position:relative;border:1px solid #eee;margin-bottom:15px;overflow:hidden;.img-box{height:300px;font-size:0;position:relative;img{width:100%;height:100%;object-fit:cover;z-index:-1;overflow:hidden;&:hover{transform:scale(1.02);transition:all .3s ease;}}&__sold-out{position:absolute;width:100%;text-align:center;height:100%;background-color:rgb(255,255,255,0.6);display:", ";justify-content:center;align-items:center;p{color:#666;font-size:24px;}}}}&__bottom{height:100px;display:flex;flex-direction:column;align-items:center;font-size:13px;", "{color:#333;font-size:16px;font-weight:400;}.desc{margin-bottom:5px;font-size:12px;color:#666;}&--product-price{font-size:12px;color:#999;}&--consumer-price{font-size:15px;color:#4d4d4d;}}", "}"], props => props.isList && (0,external_styled_components_.css)(["flex:1 25%;max-width:25%;img{max-height:300px;}", " ", " ", ""], ({
    theme
  }) => theme.laptop`
        flex: 1 33%;
        max-width: 33%;
      }`, ({
    theme
  }) => theme.tablet`
      flex: 1 50%;
      max-width: 50%;
      }`, ({
    theme
  }) => theme.mobile`
      flex: 1 50%;
      max-width: 50%;
      }`), props => props.isSoldOut ? 'flex' : 'none', Title/* default */.Z, ({
    theme
  }) => theme.mobile`
       .img-box{
        max-height: 200px;
        height: 280px;
       }
       .desc-box{
        font-size: 13px;
        ${Title/* default */.Z}{
          font-size: 14px;
        }
      }
      }`),
  IconBox: external_styled_components_default().p.withConfig({
    displayName: "ProductCard__IconBox",
    componentId: "ohfgzu-1"
  })(["display:flex;align-items:center;margin-bottom:5px;height:16px;"]),
  ColorBox: external_styled_components_default().p.withConfig({
    displayName: "ProductCard__ColorBox",
    componentId: "ohfgzu-2"
  })(["position:absolute;bottom:5px;left:5px;display:flex;align-items:center;"])
};
function ProductCard({
  product_type,
  seq,
  name,
  description,
  summary_description,
  product_price,
  consumer_price,
  imageUrl,
  product_colors,
  best_product,
  new_product,
  isList,
  qty
}) {
  const {
    0: isSoldOut,
    1: setIsSoldOut
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if (qty === 0) setIsSoldOut(true);
  }, [qty]);
  return /*#__PURE__*/jsx_runtime_.jsx(ProductCard_S.ProductCard, {
    isList: isList,
    isSoldOut: isSoldOut,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "card-inner",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: `/product/${product_type}/${seq}`,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          className: "card-inner__top",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "img-box",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "img-box__sold-out",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "SOLD OUT"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: imageUrl[0].url,
              alt: "Picture of the author"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(ProductCard_S.ColorBox, {
            children: product_colors === null || product_colors === void 0 ? void 0 : product_colors.map(d => /*#__PURE__*/jsx_runtime_.jsx(ColorIcon, {
              color: d.hex_value
            }, d.hex_value))
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "card-inner__bottom",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ProductCard_S.IconBox, {
          children: [best_product && /*#__PURE__*/jsx_runtime_.jsx(TextIcon/* default */.Z, {
            text: "best",
            margin: "0 5px 0 0"
          }), new_product && /*#__PURE__*/jsx_runtime_.jsx(TextIcon/* default */.Z, {
            text: "new"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
          level: 6,
          className: "title",
          children: name
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "desc",
          children: summary_description
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "card-inner__bottom--product-price",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("del", {
            children: [(0,utils/* PriceComma */.OB)(product_price), "\uC6D0"]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
          className: "card-inner__bottom--consumer-price",
          children: [(0,utils/* PriceComma */.OB)(consumer_price), "\uC6D0"]
        })]
      })]
    })
  });
}

/***/ })

};
;