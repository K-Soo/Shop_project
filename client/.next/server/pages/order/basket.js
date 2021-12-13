(function() {
var exports = {};
exports.id = 5783;
exports.ids = [5783];
exports.modules = {

/***/ 5005:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ BasketPage; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/containers/MainContainer.tsx
var MainContainer = __webpack_require__(9490);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/components/Forms/FinalAmount.tsx
var FinalAmount = __webpack_require__(8341);
// EXTERNAL MODULE: ./src/components/Forms/FormFieldset.tsx
var FormFieldset = __webpack_require__(8608);
// EXTERNAL MODULE: ./src/components/Forms/OrderList.tsx
var OrderList = __webpack_require__(6199);
// EXTERNAL MODULE: ./src/components/style/Title.tsx
var Title = __webpack_require__(6930);
;// CONCATENATED MODULE: ./src/components/Forms/Guide.tsx





const S = {
  Guide: external_styled_components_default().div.withConfig({
    displayName: "Guide",
    componentId: "p8bepb-0"
  })([""]),
  GuideLists: external_styled_components_default().ul.withConfig({
    displayName: "Guide__GuideLists",
    componentId: "p8bepb-1"
  })(["", "{font-weight:400;margin-bottom:5px;}li{padding-bottom:5px;font-size:12px;color:#999;:last-child{padding:0;}}"], Title/* default */.Z)
};
const Category = [{
  label: '해외배송 상품과 국내배송 상품은 함께 결제하실 수 없으니 장바구니 별로 따로 결제해 주시기 바랍니다.'
}, {
  label: '선택하신 상품의 수량을 변경하시려면 수량변경 후 [변경] 버튼을 누르시면 됩니다.'
}, {
  label: '장바구니와 관심상품을 이용하여 원하시는 상품만 주문하거나 관심상품으로 등록하실 수 있습니다.'
}];
function Guide({}) {
  return /*#__PURE__*/jsx_runtime_.jsx(S.Guide, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.GuideLists, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
        size: "13",
        color: "#404040",
        level: 6,
        textAlign: "left",
        children: "\uC7A5\uBC14\uAD6C\uB2C8 \uC774\uC6A9\uC548\uB0B4"
      }), Category.map((d, i) => /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: ["- ", d.label]
        })
      }, i))]
    })
  });
}
// EXTERNAL MODULE: ./src/components/Common/PageTitle.tsx
var PageTitle = __webpack_require__(6908);
// EXTERNAL MODULE: ./src/context/AppProvider.tsx + 1 modules
var AppProvider = __webpack_require__(693);
// EXTERNAL MODULE: ./src/context/OrderProvider.tsx + 1 modules
var OrderProvider = __webpack_require__(1098);
// EXTERNAL MODULE: ./src/api/index.ts
var api = __webpack_require__(8740);
// EXTERNAL MODULE: ./src/constants/path.ts
var path = __webpack_require__(643);
;// CONCATENATED MODULE: ./src/components/Basket/index.tsx















const Basket_S = {
  Basket: external_styled_components_default().section.withConfig({
    displayName: "Basket",
    componentId: "d3dgn7-0"
  })([""])
};
function Basket() {
  const {
    0: basketProduct,
    1: setBasketProduct
  } = (0,external_react_.useState)(null);
  const {
    0: basketConsumer,
    1: setBasketConsumer
  } = (0,external_react_.useState)(null);
  const {
    state,
    action
  } = (0,AppProvider/* useAppContext */.bp)();
  const {
    userId
  } = state.userInfo;
  const Order = (0,OrderProvider/* useOrderContext */.m)();
  const router = (0,router_.useRouter)();
  const handleChangeQty = (0,external_react_.useCallback)(async e => {
    const {
      name
    } = e.target;
    const target = state.basket.basketList.find(d => d._id === name);
    console.log('target: ', target.qty);

    if (state.userInfo.userId) {
      try {
        const res = await api/* Put.updateUserBasketQty */.qb.updateUserBasketQty(state.userInfo.idx, name, {
          qty: target.qty
        });
        action.setLocalItems(res.items);
        alert('변경되었습니다.');
      } catch (error) {
        console.log('error: ', error);
      }
    } else {}
  }, [state.basket.basketList, state.userInfo.idx, state.userInfo.userId]);
  const initBasket = (0,external_react_.useCallback)(async () => {
    if (state.userInfo.idx) {
      // action.InitData('basket.basketList', []);
      const name = 'all';

      try {
        const res = await api/* Delete.deleteBasket */.HG.deleteBasket(state.userInfo.idx, name);
        action.setLocalItems(res.items);
      } catch (error) {
        console.error('error: ', error);
      }
    } else {
      action.InitData('basket.nonMemberBasket', []);
    }
  }, [userId]);
  const handleRemoveItem = (0,external_react_.useCallback)(async e => {
    if (confirm('선택하신 상품을 삭제하시겠습니까?')) {
      const {
        name
      } = e.target;

      if (userId) {
        try {
          const res = await api/* Delete.deleteBasket */.HG.deleteBasket(state.userInfo.idx, name);
          action.setLocalItems(res.items);
        } catch (error) {
          console.error('remove-error: ', error);
        }
      } else {
        const exist = state.basket.nonMemberBasket.filter(d => d.date !== name);
        action.setNonMemberBasket(exist);
      }
    }
  }, [state.userInfo.idx, userId, state.basket.nonMemberBasket]);
  const handleAddInterestProduct = (0,external_react_.useCallback)(async e => {
    const {
      name
    } = e.target;

    try {
      if (state.userInfo.userId) {
        const res = await api/* Put.updateInterestProduct */.qb.updateInterestProduct({
          userId: state.userInfo.userId,
          name
        });
        if (res.success) return alert('관심상품으로 등록되었습니다.');
        if (res.duplicate) return alert('이미 등록되었습니다.');
      } else {
        alert('로그인후 이용가능합니다.');
      }
    } catch (error) {
      console.log('error: ', error);
    }
  }, [state.userInfo.userId]);
  const handleCheckbox = (0,external_react_.useCallback)(e => {
    const {
      checked,
      value
    } = e.target;

    if (userId) {
      if (checked) {
        if (state.basket.basketList) {
          const result = state.basket.basketList.find(d => d._id === value);
          Order.action.setProducts(result); // Order.action.setOrderLocalStorage(result);
        }
      } else {
        Order.action.setRemoveCheckedItem(value, true);
      }
    } else {
      if (checked) {
        const result = state.basket.nonMemberBasket.find(d => d.date === value);
        Order.action.setProducts(result); // Order.action.setOrderLocalStorage(result);
      } else {
        Order.action.setRemoveCheckedItem(value, false);
      }
    }
  }, [state.basket.basketList]);
  const handleSelectedProduct = (0,external_react_.useCallback)(() => {
    // 선택상품 주문
    if (!Order.state.orderForm.Products.length) return alert('상품선택후 다시 시도해주세요.');
    router.push('/order/orderform');
  }, [Order.state.orderForm.Products]);

  const handleEntireProducts = () => {
    // 전체상품 주문
    if (userId) {
      if (!state.basket.basketList.length) return alert('장바구니에 상품이없습니다.');
      Order.action.setEntireProducts(state.basket.basketList);
      router.push(path/* default.ORDER.path */.Z.ORDER.path);
    } else {
      if (!state.basket.nonMemberBasket.length) return alert('장바구니에 상품이없습니다.');
      Order.action.setEntireProducts(state.basket.nonMemberBasket);
      router.push(path/* default.ORDER.path */.Z.ORDER.path);
    }
  };

  (0,external_react_.useEffect)(() => {
    if (userId) {
      if (state.basket.basketList.length) {
        const CalcProduct = state.basket.basketList.reduce((acc, cur) => acc + +cur.totalProductPrice, 0);
        setBasketProduct(CalcProduct);
        const CalcPayment = state.basket.basketList.reduce((acc, cur) => acc + +cur.totalConsumerPrice, 0);
        setBasketConsumer(CalcPayment);
      }
    } else {
      const CalcProduct = state.basket.nonMemberBasket.reduce((acc, cur) => acc + +cur.totalProductPrice, 0);
      setBasketProduct(CalcProduct);
      const CalcPayment = state.basket.nonMemberBasket.reduce((acc, cur) => acc + +cur.totalConsumerPrice, 0);
      setBasketConsumer(CalcPayment);
    }
  }, [state.basket.basketList, state.basket.nonMemberBasket, userId]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Basket_S.Basket, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PageTitle/* default */.Z, {
      TitleText: "\uC7A5\uBC14\uAD6C\uB2C8"
    }), userId ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(FormFieldset/* default */.Z, {
        title: "\uC7A5\uBC14\uAD6C\uB2C8 \uBAA9\uB85D",
        children: /*#__PURE__*/jsx_runtime_.jsx(OrderList/* default */.Z, {
          handleRemoveItem: handleRemoveItem,
          handleCheckbox: handleCheckbox,
          handleChangeQty: handleChangeQty,
          handleAddInterestProduct: handleAddInterestProduct,
          item: state.basket.basketList
        })
      }), state.basket.basketList.length > 0 && /*#__PURE__*/jsx_runtime_.jsx(FormFieldset/* default */.Z, {
        title: "\uACB0\uC81C\uC608\uC815\uAE08\uC561",
        children: /*#__PURE__*/jsx_runtime_.jsx(FinalAmount/* default */.Z, {
          handleSelectedProduct: handleSelectedProduct,
          handleEntireProducts: handleEntireProducts,
          initBasket: initBasket,
          productAmount: basketProduct,
          discountAmount: basketProduct - basketConsumer,
          deliveryAmount: 2500,
          consumerAmount: basketConsumer,
          paymentAmount: 2500 + basketConsumer
        })
      })]
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(FormFieldset/* default */.Z, {
        title: "\uC7A5\uBC14\uAD6C\uB2C8 \uBAA9\uB85D",
        children: /*#__PURE__*/jsx_runtime_.jsx(OrderList/* default */.Z, {
          handleRemoveItem: handleRemoveItem,
          handleCheckbox: handleCheckbox,
          item: state.basket.nonMemberBasket
        })
      }), state.basket.nonMemberBasket.length > 0 && /*#__PURE__*/jsx_runtime_.jsx(FormFieldset/* default */.Z, {
        title: "\uACB0\uC81C\uC608\uC815\uAE08\uC561",
        children: /*#__PURE__*/jsx_runtime_.jsx(FinalAmount/* default */.Z, {
          handleSelectedProduct: handleSelectedProduct,
          handleEntireProducts: handleEntireProducts,
          initBasket: initBasket,
          productAmount: basketProduct,
          discountAmount: basketProduct - basketConsumer,
          deliveryAmount: 2500,
          consumerAmount: basketProduct - basketConsumer,
          paymentAmount: 2500 + basketConsumer
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(FormFieldset/* default */.Z, {
      title: "\uC774\uC6A9 \uC548\uB0B4",
      children: /*#__PURE__*/jsx_runtime_.jsx(Guide, {})
    })]
  });
}
// EXTERNAL MODULE: ./src/components/Common/Breadcrumb.tsx
var Breadcrumb = __webpack_require__(7777);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/pages/order/basket.tsx










function BasketPage(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\uC96C\uC5BC\uB9AC | \uC7A5\uBC14\uAD6C\uB2C8"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "\uC7A5\uBC14\uAD6C\uB2C8 \uC815\uBCF4"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainContainer/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Breadcrumb/* default */.Z, {
        children: [path/* default.MAIN */.Z.MAIN, path/* default.BASKET */.Z.BASKET].map(({
          path,
          tag
        }) => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: path,
          children: tag
        }, path))
      }), /*#__PURE__*/jsx_runtime_.jsx(Basket, {})]
    })]
  });
}
;

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5675,8703,6930,3803,643,8740,8761,693,3493,6908,8847,1098,8608,9970,7663], function() { return __webpack_exec__(5005); });
module.exports = __webpack_exports__;

})();