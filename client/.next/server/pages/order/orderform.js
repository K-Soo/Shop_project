(function() {
var exports = {};
exports.id = 1871;
exports.ids = [1871];
exports.modules = {

/***/ 1105:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ OrderFormPage; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
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
// EXTERNAL MODULE: ./src/context/OrderProvider.tsx + 1 modules
var OrderProvider = __webpack_require__(1098);
// EXTERNAL MODULE: ./src/components/Forms/FinalAmount.tsx
var FinalAmount = __webpack_require__(8341);
// EXTERNAL MODULE: ./src/components/Forms/FormFieldset.tsx
var FormFieldset = __webpack_require__(8608);
// EXTERNAL MODULE: ./src/components/style/Label.tsx
var Label = __webpack_require__(6257);
// EXTERNAL MODULE: ./src/components/style/Select.tsx
var Select = __webpack_require__(8116);
// EXTERNAL MODULE: ./src/components/style/TextArea.tsx
var TextArea = __webpack_require__(4558);
// EXTERNAL MODULE: ./src/components/Common/DaumPost.tsx
var DaumPost = __webpack_require__(2063);
// EXTERNAL MODULE: ./src/components/style/Input.tsx
var Input = __webpack_require__(8847);
// EXTERNAL MODULE: ./src/components/style/Button.tsx
var Button = __webpack_require__(8761);
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__(3595);
;// CONCATENATED MODULE: ./src/constants/ordrform.ts
const TAP_CATEGORY = [{
  label: '회원정보와 동일',
  value: 'recently'
}, {
  label: '직접입력',
  value: 'direct'
}];
const DELIVERY_MESSAGE_LIST = [{
  label: '메세지 선택 (선택사항)',
  value: ''
}, {
  label: '배송전에 미리연락바랍니다.',
  value: '배송전에 미리연락바랍니다.'
}, {
  label: '부재시 경비실에 맡겨주세요.',
  value: '부재시 경비실에 맡겨주세요.'
}, {
  label: '빠른 배송 부탁드립니다.',
  value: '빠른 배송 부탁드립니다.'
}, {
  label: '택배함에 보관해주세요.',
  value: '택배함에 보관해주세요.'
}, {
  label: '직접입력',
  value: ''
}];
const EMAIL_LIST = [{
  label: '메세지 선택 (선택사항)',
  value: ''
}, {
  label: '배송전에 미리연락바랍니다.',
  value: '배송전에 미리연락바랍니다.'
}, {
  label: '부재시 경비실에 맡겨주세요.',
  value: '부재시 경비실에 맡겨주세요.'
}, {
  label: '빠른 배송 부탁드립니다.',
  value: '빠른 배송 부탁드립니다.'
}, {
  label: '택배함에 보관해주세요.',
  value: '택배함에 보관해주세요.'
}, {
  label: '직접입력',
  value: ''
}];
// EXTERNAL MODULE: ./src/context/AppProvider.tsx + 1 modules
var AppProvider = __webpack_require__(693);
// EXTERNAL MODULE: ./src/constants/phone.ts
var phone = __webpack_require__(6414);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(3803);
;// CONCATENATED MODULE: ./src/components/Forms/DeliveryInfo.tsx

















const S = {
  DeliveryInfo: external_styled_components_default().div.withConfig({
    displayName: "DeliveryInfo",
    componentId: "obcwvw-0"
  })([".tap-box{height:40px;display:flex;margin-bottom:15px;font-size:14px;li{flex:1;display:flex;border:solid #dee2e6;align-items:center;justify-content:center;cursor:pointer;}.recently{border-width:", ";background-color:", ";color:", ";}.direct{border-width:", ";background-color:", ";color:", ";}", "}"], props => props.toggleText === 'recently' ? '1px 1px 0 0' : '0 0 1px 0', props => props.toggleText === 'recently' ? '#fff' : '#F8F9FA', props => props.toggleText === 'recently' ? '#111' : '#999', props => props.toggleText === 'direct' ? '1px 1px 0 1px' : '0 0 1px 0', props => props.toggleText === 'direct' ? '#fff' : '#F8F9FA', props => props.toggleText === 'direct' ? '#111' : '#999', ({
    theme
  }) => theme.mobile`
        font-size: 12px;
      `),
  Group: external_styled_components_default().div.withConfig({
    displayName: "DeliveryInfo__Group",
    componentId: "obcwvw-1"
  })(["display:flex;margin-bottom:15px;align-items:center;.delivery{display:flex;flex-direction:column;width:100%;max-width:300px;}label{min-width:60px;width:60px;}.addr{display:flex;flex-direction:column;width:100%;.addr-button{display:flex;max-width:200px;justify-content:space-between;margin-bottom:15px;button{display:flex;align-items:center;span{pointer-events:none;}i{font-size:0;pointer-events:none;svg{color:#000;width:18px;height:16px;}}}}}"])
};
function DeliveryInfo() {
  const {
    state,
    action
  } = (0,OrderProvider/* useOrderContext */.m)();
  const App = (0,AppProvider/* useAppContext */.bp)();

  const handleToggle = e => {
    const {
      className
    } = e.target;
    action.InitData('deliveryTap', className);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.DeliveryInfo, {
    toggleText: state.deliveryTap,
    children: [!App.state.status.guest && /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: "tap-box",
        children: TAP_CATEGORY.map(d => /*#__PURE__*/jsx_runtime_.jsx("li", {
          onClick: handleToggle,
          className: d.value,
          children: d.label
        }, d.value))
      })
    }), App.state.status.guest && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(S.Group, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Label/* default */.Z, {
          htmlFor: "orderPasswordFor",
          required: true,
          children: ["\uC8FC\uBB38\uC870\uD68C", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "\uBE44\uBC00\uBC88\uD638"]
        }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
          name: "orderForm.orderPassword",
          type: "password",
          id: "orderPasswordFor",
          maxWidth: "200",
          maxLength: 12,
          onChange: action.setFormData,
          value: state.orderForm.orderPassword
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.Group, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Label/* default */.Z, {
          htmlFor: "orderPasswordConfirmFor",
          required: true,
          children: ["\uBE44\uBC00\uBC88\uD638", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "\uD655\uC778"]
        }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
          name: "orderForm.orderPasswordConfirm",
          type: "password",
          id: "orderPasswordConfirmFor",
          maxWidth: "200",
          maxLength: 12,
          onChange: action.setFormData,
          value: state.orderForm.orderPasswordConfirm
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.Group, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Label/* default */.Z, {
        htmlFor: "userNameFor",
        required: true,
        children: "\uBC1B\uB294\uBD84"
      }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
        name: "orderForm.userName",
        id: "userNameFor",
        maxWidth: "200",
        maxLength: 6,
        onChange: action.setFormData,
        value: state.orderForm.userName
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.Group, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Label/* default */.Z, {
        htmlFor: "addr2For",
        required: true,
        children: "\uC8FC\uC18C"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "addr",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "addr-button",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
            name: "zoneCode",
            maxWidth: "80",
            readOnly: true,
            value: state.orderForm.addr.zoneCode
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Button/* default */.Z, {
            white: true,
            name: "openDaumPost",
            height: "40",
            fontSize: "12px",
            width: "40",
            onClick: App.action.setGlobalToggle,
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
              children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
                name: "location"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "\uC6B0\uD3B8\uBC88\uD638"
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
          name: "zoneCode",
          maxWidth: "300",
          margin: "0 0 15px 0",
          readOnly: true,
          value: state.orderForm.addr.addr1
        }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
          name: "orderForm.addr.addr2",
          id: "addr2For",
          placeholder: "\uB098\uBBF8\uC9C0 \uC8FC\uC18C",
          maxWidth: "300",
          maxLength: 30,
          onChange: action.setFormData,
          value: state.orderForm.addr.addr2
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.Group, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Label/* default */.Z, {
        htmlFor: "phoneFor",
        required: true,
        children: "\uD734\uB300\uC804\uD654"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Select/* default */.Z, {
        name: "TemporaryPhone1",
        id: "phoneFor",
        maxWidth: "90",
        height: "40",
        value: state.TemporaryPhone1,
        onChange: action.setFormData,
        required: true,
        children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "",
          children: "\uC120\uD0DD"
        }), phone/* PHONE_NUMBER.map */.U.map(d => /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: d.value,
          children: d.label
        }, d.value))]
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        style: {
          width: '15px',
          textAlign: 'center'
        },
        children: "-"
      }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
        name: "TemporaryPhone2",
        maxWidth: "90",
        minLength: 3,
        maxLength: 4,
        value: state.TemporaryPhone2,
        onChange: e => (0,utils/* onlyNum */.lk)(e, action.setFormData),
        required: true
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        style: {
          width: '15px',
          textAlign: 'center'
        },
        children: "-"
      }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
        name: "TemporaryPhone3",
        maxWidth: "90",
        minLength: 4,
        maxLength: 4,
        value: state.TemporaryPhone3,
        onChange: e => (0,utils/* onlyNum */.lk)(e, action.setFormData),
        required: true
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.Group, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Label/* default */.Z, {
        htmlFor: "TemporaryEmail1For",
        required: true,
        children: "\uC774\uBA54\uC77C"
      }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
        id: "TemporaryEmail1For",
        name: "TemporaryEmail1",
        maxWidth: "140",
        value: state.TemporaryEmail1,
        onChange: action.setFormData
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        style: {
          width: '20px',
          textAlign: 'center'
        },
        children: "@"
      }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
        name: "TemporaryEmail2",
        maxWidth: "140",
        value: state.TemporaryEmail2,
        onChange: action.setFormData
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.Group, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Label/* default */.Z, {
        htmlFor: "deliveryFor",
        children: "\uBC30\uC1A1\uBA54\uC138\uC9C0"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "delivery",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Select/* default */.Z, {
          height: "40",
          maxWidth: "300",
          name: "orderForm.deliveryMessage",
          onChange: action.setFormData,
          id: "deliveryFor",
          children: DELIVERY_MESSAGE_LIST.map(d => /*#__PURE__*/jsx_runtime_.jsx("option", {
            value: d.value,
            children: d.label
          }, d.label))
        }), state.directText && /*#__PURE__*/jsx_runtime_.jsx(TextArea/* default */.Z, {
          name: "orderForm.deliveryMessage",
          maxWidth: "300",
          margin: "5px 0 0 0",
          onChange: action.setFormData,
          value: state.orderForm.deliveryMessage
        })]
      })]
    }), App.state.openDaumPost && /*#__PURE__*/jsx_runtime_.jsx(DaumPost/* default */.Z, {})]
  });
}
// EXTERNAL MODULE: ./src/components/Forms/OrderList.tsx
var OrderList = __webpack_require__(6199);
// EXTERNAL MODULE: ./src/components/Forms/UserInfo.tsx
var UserInfo = __webpack_require__(5878);
// EXTERNAL MODULE: ./src/components/style/Title.tsx
var Title = __webpack_require__(6930);
// EXTERNAL MODULE: external "react-loading-overlay-ts"
var external_react_loading_overlay_ts_ = __webpack_require__(5513);
var external_react_loading_overlay_ts_default = /*#__PURE__*/__webpack_require__.n(external_react_loading_overlay_ts_);
// EXTERNAL MODULE: ./src/api/index.ts
var api = __webpack_require__(8740);
;// CONCATENATED MODULE: ./src/components/validation/pointCheck.ts
const pointCheck = state => {
  if (Number(state.currentPoint) < Number(state.orderForm.pointInfo.totalUsed)) {
    alert('사용가능한 적립금내에서 입력해주세요');
    return false;
  }

  return true;
};
;// CONCATENATED MODULE: ./src/components/validation/recipientCheck.ts
const recipientCheck = state => {
  if (state.orderForm.userName.trim() === '') {
    alert('수취인을 입력해주세요');
    return false;
  }

  return true;
};
;// CONCATENATED MODULE: ./src/components/validation/addrCheck.ts
const addrCheck = state => {
  const {
    addr
  } = state.orderForm;

  if ([addr.zoneCode.trim(), addr.addr1.trim(), addr.addr2.trim()].includes('')) {
    alert('주소정보를 입력해주세요');
    return false;
  }

  return true;
};
;// CONCATENATED MODULE: ./src/components/validation/phoneCheck.ts
const phoneCheck = state => {
  const {
    TemporaryPhone1,
    TemporaryPhone2,
    TemporaryPhone3
  } = state;

  if ([TemporaryPhone1.trim(), TemporaryPhone2.trim(), TemporaryPhone3.trim()].includes('')) {
    alert('휴대폰번호를 입력해주세요');
    return false;
  }

  return true;
};
// EXTERNAL MODULE: external "@paypal/react-paypal-js"
var react_paypal_js_ = __webpack_require__(6674);
;// CONCATENATED MODULE: ./src/components/Forms/Payment.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const Payment_S = {
  Payment: external_styled_components_default().div.withConfig({
    displayName: "Payment",
    componentId: "sc-6ge0f6-0"
  })(["margin:0 auto;display:flex;", ""], ({
    theme
  }) => theme.mobile`
      display: block;
    `),
  PaymentMethod: external_styled_components_default().div.withConfig({
    displayName: "Payment__PaymentMethod",
    componentId: "sc-6ge0f6-1"
  })(["flex:1;border:1px solid #000;", "{background-color:#eff1f4;color:#333;padding:10px;border-bottom:1px solid #bbc9de;}.payment-select{padding:10px;font-size:13px;display:flex;}.payment-guide{padding:0 10px;font-size:12px;color:#777;}", ""], Title/* default */.Z, ({
    theme
  }) => theme.mobile`
      border: 1px solid #508bed;
      margin-bottom: 10px;
      padding-bottom: 10px;
    `),
  PaymentButtonBox: external_styled_components_default().div.withConfig({
    displayName: "Payment__PaymentButtonBox",
    componentId: "sc-6ge0f6-2"
  })(["flex-basis:30%;border:solid #333;border-width:1px 1px 1px 0;padding:10px;", " .amount-info{text-align:right;&__title{margin-bottom:10px;font-size:14px;}&__price{font-size:26px;&::after{content:'\uC6D0';font-size:14px;}}}.button-box{height:50px;&__submit{}&__paypal{.paypal-buttons{}}}"], ({
    theme
  }) => theme.mobile`
      border-width: 1px;
    `)
};
const paypalStyles = {
  color: "blue",
  shape: "pill",
  label: "checkout",
  height: 40,
  layout: "horizontal"
};
function Payment() {
  const {
    state
  } = (0,OrderProvider/* useOrderContext */.m)();
  const App = (0,AppProvider/* useAppContext */.bp)();
  const router = (0,router_.useRouter)();
  const [{
    isInitial,
    isPending,
    isRejected,
    isResolved
  }, Dispatch] = (0,react_paypal_js_.usePayPalScriptReducer)();
  const {
    userInfo: {
      idx
    }
  } = App.state; // console.group('before');
  // console.log('isResolved: ', isResolved);
  // console.log('isRejected: ', isRejected);
  // console.log('isPending: ', isPending);
  // console.log('isInitial: ', isInitial);
  // console.groupEnd();

  const handleSubmit = e => {
    e.preventDefault();
    if (!pointCheck(state)) return;
    if (!recipientCheck(state)) return;
    if (!addrCheck(state)) return;
    if (!phoneCheck(state)) return;

    if (App.state.status.guest) {
      if (state.orderForm.orderPassword !== state.orderForm.orderPasswordConfirm) {
        return alert('비밀번호가 일치하지않습니다.');
      }
    }

    Dispatch({
      type: react_paypal_js_.DISPATCH_ACTION.LOADING_STATUS,
      value: react_paypal_js_.SCRIPT_LOADING_STATE.PENDING
    });
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: (0,utils/* currencyConvert */.m3)(state.orderForm.amountInfo.paymentAmount)
        }
      }]
    });
  };

  const onApprove = async (data, actions) => {
    try {
      const details = await actions.order.capture();

      if (!App.state.status.guest) {
        const res = await api/* Post.checkout */.SO.checkout(App.state.userInfo.userId, state.orderForm);
        Dispatch({
          type: react_paypal_js_.DISPATCH_ACTION.LOADING_STATUS,
          value: react_paypal_js_.SCRIPT_LOADING_STATE.INITIAL
        });

        if (res.success) {
          App.action.setLocalItems(res.updatedBasket.items);
          alert('결제완료\n주문상세페이지로 이동합니다');
          localStorage.removeItem('order');
          return router.push(`/users/history/details/${idx}/${res.orderNum}`);
        }
      } else {
        const res = await api/* Post.guestCheckout */.SO.guestCheckout(state.orderForm);

        if (res.success) {
          alert('결제완료');
          const result = App.state.basket.nonMemberBasket.filter(({
            date: date1
          }) => !state.orderForm.Products.some(({
            date: date2
          }) => date1 === date2));
          App.action.setNonMemberBasket(result);
          localStorage.removeItem('order');
          Dispatch({
            type: react_paypal_js_.DISPATCH_ACTION.LOADING_STATUS,
            value: react_paypal_js_.SCRIPT_LOADING_STATE.INITIAL
          });
          return router.push(`/users/history/guest-detail/${res.guestOrder._id}`);
        }
      }
    } catch (error) {
      console.error('error: ', error);
      console.error('paypal-error: ', error.response.data.message);
      alert('결제 실패\n잠시후 다시시도해주세요');
    }
  };

  const onError = error => {
    alert('결제 오류');
    Dispatch({
      type: react_paypal_js_.DISPATCH_ACTION.LOADING_STATUS,
      value: react_paypal_js_.SCRIPT_LOADING_STATE.INITIAL
    });
    console.error('paypal-error', error);
  };

  const onCancel = (data, actions) => {
    Dispatch({
      type: react_paypal_js_.DISPATCH_ACTION.LOADING_STATUS,
      value: react_paypal_js_.SCRIPT_LOADING_STATE.INITIAL
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Payment_S.Payment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Payment_S.PaymentMethod, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
        level: 6,
        textAlign: "left",
        size: "14",
        children: "\uACB0\uC81C\uC218\uB2E8 \uC120\uD0DD"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "payment-select",
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "radio",
          id: "paypalFor",
          defaultChecked: true,
          style: {
            marginRight: '5px'
          }
        }), /*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "paypalFor",
          children: "\uD398\uC774\uD314"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: "payment-guide",
        children: /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: "- \uD398\uC774\uD314 \uACB0\uC81C\uC2DC USD \uB2EC\uB7EC\uB85C \uACB0\uC81C\uB429\uB2C8\uB2E4."
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Payment_S.PaymentButtonBox, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "amount-info",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "amount-info__title",
          children: "\uCD5C\uC885\uACB0\uC81C \uAE08\uC561"
        }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
          className: "amount-info__price",
          children: (0,utils/* PriceComma */.OB)(state.orderForm.amountInfo.paymentAmount)
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "button-box",
        children: [isInitial && /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          className: "button-box__submit",
          black: true,
          onClick: handleSubmit,
          type: "submit",
          children: "\uACB0\uC81C\uD558\uAE30"
        }), isPending && /*#__PURE__*/jsx_runtime_.jsx((external_react_loading_overlay_ts_default()), {
          active: true,
          spinner: true,
          styles: {
            spinner: base => _objectSpread(_objectSpread({}, base), {}, {
              '& svg circle': {
                stroke: 'rgba(55, 0, 255, 0.5)'
              }
            })
          }
        }), isResolved && /*#__PURE__*/jsx_runtime_.jsx(react_paypal_js_.PayPalButtons, {
          style: paypalStyles,
          createOrder: createOrder,
          onApprove: onApprove,
          onError: onError,
          onCancel: onCancel,
          className: "button-box__paypal",
          fundingSource: react_paypal_js_.FUNDING.PAYPAL
        })]
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/Forms/PointsInfo.tsx








const PointsInfo_S = {
  PointsInfo: external_styled_components_default().div.withConfig({
    displayName: "PointsInfo",
    componentId: "fqonw5-0"
  })(["border:solid #f0f0f0;border-width:0 1px 1px 1px;ul{border:solid #f0f0f0;border-width:0 0 1px 0;}ul:last-child{border:none;}"]),
  Lists: external_styled_components_default().ul.withConfig({
    displayName: "PointsInfo__Lists",
    componentId: "fqonw5-1"
  })(["display:flex;flex-direction:row;font-size:14px;li{padding:10px;height:45px;}.title{width:25%;display:flex;align-items:center;border:solid #f0f0f0;border-width:0 1px 0 0;background-color:#fbfafa;&__points{margin-right:5px;}&__price{color:#777;strong{font-weight:normal;color:#508bed;}}}.desc{display:flex;align-items:center;input[type=\"number\"]::-webkit-outer-spin-button,input[type=\"number\"]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}input{height:100%;font-size:14px;}button{height:100%;font-size:12px;}}", ""], ({
    theme
  }) => theme.mobile`
      flex-direction: column;
      font-size: 13px;
      .title{
        width: 100%;
        border: none;
      }
      .desc{
        width: 100%;
      }
    `)
};
function PointsInfo() {
  const {
    state,
    action
  } = (0,OrderProvider/* useOrderContext */.m)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(PointsInfo_S.PointsInfo, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(PointsInfo_S.Lists, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "title",
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\uC801\uB9BD\uC608\uC815\uAE08\uC561"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "desc",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: [(0,utils/* PriceComma */.OB)(state.orderForm.pointInfo.estimatedPoint), "\uC6D0"]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(PointsInfo_S.Lists, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "title",
        children: "\uCD1D \uBD80\uAC00\uACB0\uC81C\uAE08\uC561"
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "desc",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: [(0,utils/* PriceComma */.OB)(state.orderForm.pointInfo.totalUsed || 0), "\uC6D0"]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(PointsInfo_S.Lists, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        className: "title",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "title__points",
          children: "\uC801\uB9BD\uAE08"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "title__price",
          children: ["(\uC0AC\uC6A9\uAC00\uB2A5 : ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
            children: [(0,utils/* PriceComma */.OB)(state.currentPoint), "\uC6D0"]
          }), ")"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        className: "desc",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
          height: "35",
          maxLength: String(state.currentPoint).length,
          name: "orderForm.pointInfo.totalUsed",
          onFocus: action.setFocusPoint,
          onBlur: action.setOnBlurPoint,
          onChange: e => (0,utils/* onlyNum */.lk)(e, action.setFormData),
          value: state.orderForm.pointInfo.totalUsed
        }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          white: true,
          width: "50",
          margin: "0 0 0 15px",
          onClick: action.setTotalPointUsed,
          children: "\uC804\uC561\uC0AC\uC6A9"
        })]
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/OrderForm/index.tsx















const OrderForm_S = {
  OrderForm: external_styled_components_default().section.withConfig({
    displayName: "OrderForm",
    componentId: "sc-15eexh8-0"
  })([""])
};
function OrderForm() {
  const App = (0,AppProvider/* useAppContext */.bp)();
  const Order = (0,OrderProvider/* useOrderContext */.m)();
  const router = (0,router_.useRouter)();
  const {
    userId
  } = App.state.userInfo;
  const {
    amountInfo
  } = Order.state.orderForm;
  const OrderState = Order.state;
  const handleRouterBack = (0,external_react_.useCallback)(() => {
    Order.action.setInitOrderForm();
    router.back();
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(OrderForm_S.OrderForm, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(UserInfo/* default */.Z, {
      currentPoint: OrderState.currentPoint
    }), /*#__PURE__*/jsx_runtime_.jsx(FormFieldset/* default */.Z, {
      title: "\uC8FC\uBB38\uB0B4\uC5ED",
      children: /*#__PURE__*/jsx_runtime_.jsx(OrderList/* default */.Z, {
        item: Order.state.orderForm.Products,
        handleRouterBack: handleRouterBack,
        handleCheckbox: e => Order.action.setCheckBox(e, userId),
        handleSelectProductRemove: e => Order.action.setRemoveOrderItems(e, userId)
      })
    }), Order.state.orderForm.Products.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(FormFieldset/* default */.Z, {
        title: "\uACB0\uC81C\uC608\uC815\uAE08\uC561",
        children: [/*#__PURE__*/jsx_runtime_.jsx(FinalAmount/* default */.Z, {
          productAmount: amountInfo.productAmount,
          discountAmount: amountInfo.discountAmount,
          deliveryAmount: amountInfo.deliveryAmount,
          consumerAmount: amountInfo.consumerAmount,
          paymentAmount: amountInfo.paymentAmount
        }), userId && /*#__PURE__*/jsx_runtime_.jsx(PointsInfo, {})]
      }), /*#__PURE__*/jsx_runtime_.jsx(FormFieldset/* default */.Z, {
        title: "\uBC30\uC1A1\uC815\uBCF4",
        children: /*#__PURE__*/jsx_runtime_.jsx(DeliveryInfo, {})
      }), /*#__PURE__*/jsx_runtime_.jsx(FormFieldset/* default */.Z, {
        title: "\uACB0\uC81C",
        children: /*#__PURE__*/jsx_runtime_.jsx(Payment, {})
      })]
    })]
  });
}
// EXTERNAL MODULE: external "next-cookies"
var external_next_cookies_ = __webpack_require__(2948);
var external_next_cookies_default = /*#__PURE__*/__webpack_require__.n(external_next_cookies_);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9722);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
// EXTERNAL MODULE: ./src/constants/path.ts
var path = __webpack_require__(643);
// EXTERNAL MODULE: ./src/components/Common/Breadcrumb.tsx
var Breadcrumb = __webpack_require__(7777);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/pages/order/orderform.tsx















function OrderFormPage(props) {
  const router = (0,router_.useRouter)();
  const App = (0,AppProvider/* useAppContext */.bp)();
  const {
    userDetail
  } = props;
  (0,external_react_.useEffect)(() => {
    if (!userDetail) {
      if (!App.state.status.guest) {
        router.push({
          pathname: '/auth/login',
          query: {
            type: 'order'
          }
        });
      }
    }
  }, [App.state.status.guest, userDetail, router]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\uC96C\uC5BC\uB9AC | \uC0C1\uD488\uC8FC\uBB38"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "\uC0C1\uD488 \uC8FC\uBB38\uD398\uC774\uC9C0"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainContainer/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Breadcrumb/* default */.Z, {
        children: [path/* default.MAIN */.Z.MAIN, path/* default.ORDER_FORM */.Z.ORDER_FORM].map(({
          path,
          tag
        }) => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: path,
          children: tag
        }, path))
      }), /*#__PURE__*/jsx_runtime_.jsx(OrderForm, {})]
    })]
  });
}
const getServerSideProps = async context => {
  const {
    access_token
  } = external_next_cookies_default()(context);
  const strToken = access_token && access_token.split('Bearer ')[1];
  const decodedJwt = access_token && external_jsonwebtoken_default().decode(strToken); // if (!access_token) {
  //   return {
  //     redirect: {
  //       destination: '/auth/login?type=order',
  //       permanent: false,
  //     }
  //   }
  // }

  if (access_token) {
    try {
      const userDetail = await api/* Get.UserInfo */.dX.UserInfo(decodedJwt.id);
      return {
        props: {
          userDetail
        }
      };
    } catch (error) {
      throw error;
    }
  } else {
    return {
      props: {}
    };
  }
};

/***/ }),

/***/ 6674:
/***/ (function(module) {

"use strict";
module.exports = require("@paypal/react-paypal-js");;

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

/***/ 9722:
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ 2948:
/***/ (function(module) {

"use strict";
module.exports = require("next-cookies");;

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

/***/ 3903:
/***/ (function(module) {

"use strict";
module.exports = require("react-daum-postcode");;

/***/ }),

/***/ 5513:
/***/ (function(module) {

"use strict";
module.exports = require("react-loading-overlay-ts");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5675,8703,6930,3803,643,8740,8761,693,3493,8847,1098,8608,9970,8116,9468,6015,7663,5878], function() { return __webpack_exec__(1105); });
module.exports = __webpack_exports__;

})();