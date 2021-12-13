(function() {
var exports = {};
exports.id = 4819;
exports.ids = [4819];
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

/***/ 7531:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ProductType; }
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
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
// EXTERNAL MODULE: ./src/containers/MainContainer.tsx
var MainContainer = __webpack_require__(9490);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/components/Product/ProductList.tsx
var ProductList = __webpack_require__(8356);
// EXTERNAL MODULE: ./src/components/Common/ProductSortMenu.tsx
var ProductSortMenu = __webpack_require__(7501);
// EXTERNAL MODULE: ./src/context/AppProvider.tsx + 1 modules
var AppProvider = __webpack_require__(693);
// EXTERNAL MODULE: ./src/hooks/useDidMountEffect.ts
var useDidMountEffect = __webpack_require__(9546);
;// CONCATENATED MODULE: ./src/hooks/useSelectCategory.ts



function useSelectCategory(item) {
  const {
    state
  } = (0,AppProvider/* useAppContext */.bp)();
  const {
    0: filtered,
    1: setFiltered
  } = (0,external_react_.useState)([]);
  (0,useDidMountEffect/* default */.Z)(() => {
    if (item.length > 0) {
      if (state.targetCategory === 'all') {
        setFiltered(item);
      } else {
        setFiltered(item.filter(d => d.category === state.targetCategory));
      }
    }
  }, [state.targetCategory, item]);
  return filtered;
}
// EXTERNAL MODULE: ./src/hooks/useSort.ts
var useSort = __webpack_require__(4556);
// EXTERNAL MODULE: ./src/components/Loading/index.tsx
var Loading = __webpack_require__(208);
;// CONCATENATED MODULE: ./src/components/Product/index.tsx













const S = {
  Product: external_styled_components_default().section.withConfig({
    displayName: "Product",
    componentId: "sc-1uuyc3e-0"
  })(["width:100%;"])
};
function Product({
  item,
  isLoading,
  isSuccess
}) {
  const router = (0,router_.useRouter)();
  const {
    state
  } = (0,AppProvider/* useAppContext */.bp)();
  const selectedItem = useSelectCategory(item);
  const {
    0: filtered,
    1: setFiltered
  } = (0,external_react_.useState)([]);
  const {
    setSort,
    sortingData
  } = (0,useSort/* useSort */.Z)(selectedItem); // useDidMountEffect(() => {
  //   if(item){
  //     if (state.targetCategory === 'all') {
  //       setFiltered(item);
  //     } else {
  //       setFiltered(item.filter(d => d.category === state.targetCategory));
  //     }
  //   }
  // }, [state.targetCategory, item]);

  (0,useDidMountEffect/* default */.Z)(() => {
    if (item) {
      if (state.targetCategory === 'all') {
        setFiltered(item);
      } else {
        setFiltered(item.filter(d => d.category === state.targetCategory));
      }
    }
  }, [state.targetCategory, item]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.Product, {
    children: [isLoading && /*#__PURE__*/jsx_runtime_.jsx(Loading/* default */.Z, {
      isLoading: isLoading,
      height: 300,
      text: ""
    }), isSuccess && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(ProductSortMenu/* default */.Z, {
        itemCount: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.length,
        setSort: setSort
      }), /*#__PURE__*/jsx_runtime_.jsx(ProductList/* default */.Z, {
        items: sortingData
      })]
    })]
  });
}
;
// EXTERNAL MODULE: ./src/api/index.ts
var api = __webpack_require__(8740);
// EXTERNAL MODULE: ./src/constants/product.ts
var product = __webpack_require__(9770);
// EXTERNAL MODULE: ./src/constants/path.ts
var path = __webpack_require__(643);
// EXTERNAL MODULE: ./src/components/Common/Breadcrumb.tsx
var Breadcrumb = __webpack_require__(7777);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "react-slick"
var external_react_slick_namespaceObject = require("react-slick");;
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
// EXTERNAL MODULE: ./src/components/ProductCard/index.tsx + 1 modules
var ProductCard = __webpack_require__(5613);
;// CONCATENATED MODULE: ./src/components/Common/ImageSlider.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const ImageSlider_S = {
  ImageSlider: external_styled_components_default().div.withConfig({
    displayName: "ImageSlider",
    componentId: "z54wwh-0"
  })(["margin:0 auto;"])
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
function ImageSlider({
  item
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(ImageSlider_S.ImageSlider, {
    children: /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({}, settings), {}, {
      children: item.map(d => /*#__PURE__*/jsx_runtime_.jsx(ProductCard/* default */.Z, {
        product_type: d.product_type,
        seq: d.seq,
        name: d.name,
        description: d.description,
        product_price: d.product_price,
        consumer_price: d.consumer_price,
        imageUrl: d.imageUrl,
        product_colors: d.product_colors,
        best_product: d.best_product,
        new_product: d.new_product,
        isList: false
      }, d._id))
    }))
  });
}
;// CONCATENATED MODULE: ./src/components/Product/BestProducts.tsx






const BestProducts_S = {
  BestProducts: external_styled_components_default().article.withConfig({
    displayName: "BestProducts",
    componentId: "oulvf-0"
  })(["width:100%;margin:0 auto;overflow:hidden;"])
};
function BestProducts({
  item,
  isLoading,
  isSuccess
}) {
  const bestItems = (0,external_react_.useCallback)(() => {
    return item === null || item === void 0 ? void 0 : item.filter(d => d.best_product && d.qty >= 1);
  }, [item]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(BestProducts_S.BestProducts, {
    children: [isLoading && /*#__PURE__*/jsx_runtime_.jsx(Loading/* default */.Z, {
      isLoading: isLoading,
      height: 300,
      text: ""
    }), isSuccess && /*#__PURE__*/jsx_runtime_.jsx(ImageSlider, {
      item: bestItems()
    })]
  });
}
// EXTERNAL MODULE: ./src/components/style/Title.tsx
var Title = __webpack_require__(6930);
;// CONCATENATED MODULE: ./src/components/Product/Common/HamburgerMenuList.tsx





const HamburgerMenuList_S = {
  HamburgerMenuList: external_styled_components_default().div.withConfig({
    displayName: "HamburgerMenuList",
    componentId: "cmwkc3-0"
  })(["z-index:10;position:absolute;border:1px solid #f0f0f0;top:35px;left:0;height:auto;width:100%;background-color:#fff;padding:30px;box-shadow:0 30px 30px -50px rgb(0 0 0);", " .sub-category-box{font-size:14px;&__item{cursor:pointer;padding:10px 0 10px 10px;border-top:1px solid #f0f0f0;:hover{background-color:#F9F9F9;}}.all{border:none;}}", ""], props => props.toggleSubMenu ? (0,external_styled_components_.css)(["visibility:visible;opacity:1;transition:all 0.3s ease;"]) : (0,external_styled_components_.css)(["visibility:hidden;opacity:0;"]), ({
    theme
  }) => theme.mobile`
        display: none;
    `)
};
function HamburgerMenuList({
  productSubList
}) {
  const {
    action,
    state
  } = (0,AppProvider/* useAppContext */.bp)();
  return /*#__PURE__*/jsx_runtime_.jsx(HamburgerMenuList_S.HamburgerMenuList, {
    toggleSubMenu: state.openSubMenu,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: "sub-category-box",
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "sub-category-box__item all",
        "data-name": "all",
        onClick: action.setCategory,
        children: "\uC804\uCCB4"
      }), productSubList && productSubList.map(d => /*#__PURE__*/jsx_runtime_.jsx("li", {
        "data-name": d.label,
        className: "sub-category-box__item",
        onClick: action.setCategory,
        children: d.label
      }, d.label))]
    })
  });
}
// EXTERNAL MODULE: ./src/components/Common/HamburgerIcon.tsx
var HamburgerIcon = __webpack_require__(4633);
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__(3595);
;// CONCATENATED MODULE: ./src/components/Product/ProductCategory.tsx











const ItemCommon = /*#__PURE__*/(0,external_styled_components_.css)(["margin:2px;padding:5px;font-size:12px;border-radius:15px;text-align:center;cursor:pointer;border:1px solid #fff;&[data-active=true]{color:#fff;border:solid 1px #222529;background-color:#333;}"]);
const ProductCategory_S = {
  ProductCategory: external_styled_components_default().article.withConfig({
    displayName: "ProductCategory",
    componentId: "sc-9v5ww3-0"
  })(["margin-bottom:15px;width:100%;"]),
  SubTitle: external_styled_components_default().div.withConfig({
    displayName: "ProductCategory__SubTitle",
    componentId: "sc-9v5ww3-1"
  })(["position:relative;display:flex;justify-content:space-between;align-items:flex-end;border-bottom:2px solid #e8e8e8;margin-bottom:10px;height:35px;width:100%;margin:0 auto;.redirect-icon{display:none;position:absolute;font-size:0;left:10px;}", "{position:relative;&::after{content:'';position:absolute;width:100%;height:3px;bottom:-2px;left:0;background:#333;}}", ""], Title/* default */.Z, ({
    theme
  }) => theme.mobile`
      justify-content: center;
      height: 60px;
      align-items: center;
      border-bottom: none;
      margin-bottom: 0px;
      .redirect-icon{
        display: block;
      }
      ${Title/* default */.Z}{
        font-size: 20px;
        &::after{
          content: none;
        }
      }
      .hamburger-icon{
        display: none;
      }
    `),
  CategorySubList: external_styled_components_default().div.withConfig({
    displayName: "ProductCategory__CategorySubList",
    componentId: "sc-9v5ww3-2"
  })(["border:solid #e8e8e8;border-width:1px 0px;padding:15px 5px;display:none;color:#777;.list{display:flex;flex-wrap:wrap;&__item{flex:1 30%;", "}&__all{flex:1 100%;", "}}", ""], ItemCommon, ItemCommon, ({
    theme
  }) => theme.mobile`
      display: block;
    `)
};
function ProductCategory({
  currentProduct,
  keyName
}) {
  const {
    action,
    state
  } = (0,AppProvider/* useAppContext */.bp)();
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProductCategory_S.ProductCategory, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ProductCategory_S.SubTitle, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
        className: "redirect-icon",
        onClick: () => router.back(),
        children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
          name: "BigArrowLeft"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
        level: 3,
        size: "24",
        textAlign: "left",
        children: currentProduct
      }), /*#__PURE__*/jsx_runtime_.jsx(HamburgerIcon/* default */.Z, {
        className: "hamburger-icon",
        toggle: state.openSubMenu,
        dataName: "openSubMenu",
        onClick: action.setGlobalToggle
      }), /*#__PURE__*/jsx_runtime_.jsx(HamburgerMenuList, {
        productSubList: product/* PRODUCT */.c[keyName]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(ProductCategory_S.CategorySubList, {
      category: state.targetCategory,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "list",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "list__all",
          "data-name": "all",
          "data-active": 'all' === state.targetCategory,
          onClick: action.setCategory,
          children: "ALL"
        }), keyName && product/* PRODUCT */.c[keyName].map(d => /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "list__item",
          "data-name": d.label,
          "data-active": d.label === state.targetCategory,
          onClick: action.setCategory,
          children: d.label
        }, d.label))]
      })
    })]
  });
}
;// CONCATENATED MODULE: ./src/pages/product/[category]/index.tsx
















function ProductType() {
  const router = (0,router_.useRouter)();
  const {
    category
  } = router.query;
  const keyName = router.query.category;
  const currentProduct = product/* CategoryEnum */.B[keyName];
  const fallback = [];
  const {
    data: productData = fallback,
    isLoading,
    isSuccess,
    isError
  } = (0,external_react_query_.useQuery)(['product', category], async () => await api/* Get.products */.dX.products(category), {
    retry: 0 // keepPreviousData: true,
    // refetchOnWindowFocus: false,
    // refetchOnMount: false,

  });

  if (isError) {
    return /*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "error.."
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: ["\uC96C\uC5BC\uB9AC | ", product/* CategoryEnum */.B[category]]
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: `${product/* CategoryEnum */.B[category]} 카테고리 리스트`
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainContainer/* default */.Z, {
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
      }), /*#__PURE__*/jsx_runtime_.jsx(ProductCategory, {
        currentProduct: currentProduct,
        keyName: keyName
      }), /*#__PURE__*/jsx_runtime_.jsx(BestProducts, {
        item: productData,
        isLoading: isLoading,
        isSuccess: isSuccess
      }), /*#__PURE__*/jsx_runtime_.jsx(Product, {
        item: productData.length > 0 && productData,
        isLoading: isLoading,
        isSuccess: isSuccess
      })]
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,8703,6930,3803,643,8740,693,3493,8116,9770,8356,4808,4633], function() { return __webpack_exec__(7531); });
module.exports = __webpack_exports__;

})();