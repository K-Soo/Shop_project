exports.id = 6015;
exports.ids = [6015];
exports.modules = {

/***/ 2063:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ DaumPost; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_daum_postcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3903);
/* harmony import */ var react_daum_postcode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_daum_postcode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var context_RegisterProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7858);
/* harmony import */ var components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3595);
/* harmony import */ var context_AppProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(693);
/* harmony import */ var context_OrderProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1098);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);










const S = {
  DaumPost: styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    displayName: "DaumPost",
    componentId: "a8ff5m-0"
  })(["position:fixed;top:10%;left:50%;width:50%;transform:translate(-50%);border:1px solid #222;background-color:#fff;", ""], ({
    theme
  }) => theme.mobile`
      width: auto;
    `),
  Header: styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    displayName: "DaumPost__Header",
    componentId: "a8ff5m-1"
  })(["display:flex;justify-content:flex-end;border-bottom:1px solid #999;height:50px;padding:0 15px;button{all:unset;padding:5px;cursor:pointer;font-size:0;svg{color:#333;}}"])
};
function DaumPost() {
  const {
    action
  } = (0,context_RegisterProvider__WEBPACK_IMPORTED_MODULE_4__/* .useRegisterContext */ .$2)();
  const App = (0,context_AppProvider__WEBPACK_IMPORTED_MODULE_6__/* .useAppContext */ .bp)();
  const Order = (0,context_OrderProvider__WEBPACK_IMPORTED_MODULE_7__/* .useOrderContext */ .m)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
  const postCodeStyle = {
    // top: "50px",
    height: "600px"
  };

  const handleComplete = data => {
    const {
      address,
      addressType,
      bname,
      buildingName,
      zonecode
    } = data;
    let fullAddress = address;
    let extraAddress = '';

    if (addressType === 'R') {
      if (bname !== '') {
        extraAddress += bname;
      }

      if (buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${buildingName}` : buildingName;
      }

      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    if (router.asPath === "/auth/register" || router.asPath === "/users/modify") {
      action.setData('form.zonecode', zonecode);
      action.setData('form.addr1', fullAddress);
    } else if (router.asPath === "/order/orderform") {
      Order.action.InitData('orderForm.addr.addr1', fullAddress);
      Order.action.InitData('orderForm.addr.addr2');
      Order.action.InitData('orderForm.addr.zoneCode', zonecode);
    }

    App.action.InitData('openDaumPost', false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(S.DaumPost, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(S.Header, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        name: "openDaumPost",
        onClick: App.action.setGlobalToggle,
        type: "button",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
          name: "close"
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_daum_postcode__WEBPACK_IMPORTED_MODULE_2___default()), {
      onComplete: handleComplete,
      autoClose: true,
      style: postCodeStyle,
      autoResize: true,
      animation: true
    })]
  });
}

/***/ }),

/***/ 6414:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": function() { return /* binding */ PHONE_NUMBER; }
/* harmony export */ });
const PHONE_NUMBER = [{
  label: '010',
  value: '010'
}, {
  label: '011',
  value: '011'
}, {
  label: '016',
  value: '016'
}, {
  label: '017',
  value: '017'
}, {
  label: '018',
  value: '018'
}, {
  label: '019',
  value: '019'
}];

/***/ }),

/***/ 7858:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": function() { return /* binding */ RegisterProvider; },
  "$2": function() { return /* binding */ useRegisterContext; }
});

// UNUSED EXPORTS: RegisterContext

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(4584);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
// EXTERNAL MODULE: ./src/hooks/useDidMountEffect.ts
var useDidMountEffect = __webpack_require__(9546);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./src/hooks/useRegister.ts




const registerDefaultValue = {
  props: null,
  action: null,
  state: {
    status: {
      loading: false
    },
    TermsOfService: false,
    PersonalInfo: false,
    isDuplicateId: true,
    TemporaryPhone1: '',
    TemporaryPhone2: '',
    TemporaryPhone3: '',
    TemporaryEmail1: '',
    TemporaryEmail2: '',
    form: {
      userId: '',
      password: '',
      passwordConfirm: '',
      userName: '',
      phone: '',
      email: '',
      addr1: '',
      addr2: '',
      zonecode: ''
    }
  }
};

const initializer = props => {
  var _props$userDetail$use, _props$userDetail, _props$userDetail$use2, _props$userDetail2, _props$userDetail$add, _props$userDetail3, _props$userDetail$add2, _props$userDetail4, _props$userDetail$zon, _props$userDetail5;

  const state = {
    status: {
      loading: false
    },
    TermsOfService: false,
    PersonalInfo: false,
    isDuplicateId: true,
    TemporaryPhone1: '',
    TemporaryPhone2: '',
    TemporaryPhone3: '',
    TemporaryEmail1: '',
    TemporaryEmail2: '',
    form: {
      userId: (_props$userDetail$use = props === null || props === void 0 ? void 0 : (_props$userDetail = props.userDetail) === null || _props$userDetail === void 0 ? void 0 : _props$userDetail.userId) !== null && _props$userDetail$use !== void 0 ? _props$userDetail$use : '',
      password: '',
      passwordConfirm: '',
      userName: (_props$userDetail$use2 = props === null || props === void 0 ? void 0 : (_props$userDetail2 = props.userDetail) === null || _props$userDetail2 === void 0 ? void 0 : _props$userDetail2.userName) !== null && _props$userDetail$use2 !== void 0 ? _props$userDetail$use2 : '',
      phone: '',
      email: '',
      addr1: (_props$userDetail$add = props === null || props === void 0 ? void 0 : (_props$userDetail3 = props.userDetail) === null || _props$userDetail3 === void 0 ? void 0 : _props$userDetail3.addr1) !== null && _props$userDetail$add !== void 0 ? _props$userDetail$add : '',
      addr2: (_props$userDetail$add2 = props === null || props === void 0 ? void 0 : (_props$userDetail4 = props.userDetail) === null || _props$userDetail4 === void 0 ? void 0 : _props$userDetail4.addr2) !== null && _props$userDetail$add2 !== void 0 ? _props$userDetail$add2 : '',
      zonecode: (_props$userDetail$zon = props === null || props === void 0 ? void 0 : (_props$userDetail5 = props.userDetail) === null || _props$userDetail5 === void 0 ? void 0 : _props$userDetail5.zonecode) !== null && _props$userDetail$zon !== void 0 ? _props$userDetail$zon : ''
    }
  };
  return state;
};

const generateAction = update => {
  const setFormData = e => update(draft => {
    const {
      name,
      value
    } = e.target;
    const keyArray = name.split('.');
    if (keyArray.length === 1) draft[keyArray[0]] = value;else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = value;else if (keyArray.length === 3) draft[keyArray[0]][keyArray[1]][keyArray[2]] = value;
  });

  const setData = (stateName, value) => update(draft => {
    const keyArray = stateName.split('.');
    if (keyArray.length === 1) draft[keyArray[0]] = value;else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = value;else if (keyArray.length === 3) draft[keyArray[0]][keyArray[1]][keyArray[2]] = value;
  });

  const InitData = (stateName, initValue) => update(draft => {
    const keyArray = stateName.split('.');
    let valueDefault = '';
    if (initValue) valueDefault = initValue;
    if (keyArray.length === 1) draft[keyArray[0]] = valueDefault;else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = valueDefault;else if (keyArray.length === 3) draft[keyArray[0]][keyArray[1]][keyArray[2]] = valueDefault;
  });

  const setIsNav = status => update(draft => {
    draft.status.loading = status;
  });

  const setCheckBox = e => update(draft => {
    const {
      name,
      checked
    } = e.target;
    if (name === 'TermsOfService') draft.TermsOfService = checked;
    if (name === 'PersonalInfo') draft.PersonalInfo = checked;

    if (name === 'allCheck') {
      draft.TermsOfService = checked;
      draft.PersonalInfo = checked;
    }
  });

  return {
    setIsNav,
    setFormData,
    setData,
    InitData,
    setCheckBox
  };
};

const useRegister = props => {
  const {
    0: state,
    1: setAppState
  } = (0,external_react_.useState)(() => initializer(props));
  const router = (0,router_.useRouter)();

  const update = recipe => setAppState(prev => external_immer_default()(prev, recipe));

  const action = generateAction(update);
  const app = {
    props,
    state,
    action
  };
  (0,external_react_.useEffect)(() => {
    // 회원가입 수정 초기값
    if (router.asPath === '/users/modify') {
      const result = props === null || props === void 0 ? void 0 : props.userDetail;

      if (result.email) {
        const emailArray = result.email.split('@');
        app.action.InitData('TemporaryEmail1', emailArray[0]);
        app.action.InitData('TemporaryEmail2', emailArray[1]);
      }

      if (result.phone) {
        const phoneArray = result.phone.split('-');
        app.action.InitData('TemporaryPhone1', phoneArray[0]);
        app.action.InitData('TemporaryPhone2', phoneArray[1]);
        app.action.InitData('TemporaryPhone3', phoneArray[2]);
      }
    }
  }, []);
  (0,useDidMountEffect/* default */.Z)(() => {
    app.action.InitData('form.addr2');
  }, [app.state.form.addr1]);
  (0,external_react_.useEffect)(() => {
    app.action.setData('isDuplicateId', true);
  }, [app.state.form.userId]);
  (0,useDidMountEffect/* default */.Z)(() => {
    const result = app.state.TemporaryPhone1.concat('-', app.state.TemporaryPhone2, '-', app.state.TemporaryPhone3);
    action.setData('form.phone', result);
  }, [app.state.TemporaryPhone1, app.state.TemporaryPhone2, app.state.TemporaryPhone3]);
  (0,useDidMountEffect/* default */.Z)(() => {
    const result = app.state.TemporaryEmail1.concat('@', app.state.TemporaryEmail2);
    app.action.setData('form.email', result);
  }, [app.state.TemporaryEmail1, app.state.TemporaryEmail2]);
  return app;
};

/* harmony default export */ var hooks_useRegister = (useRegister);
;// CONCATENATED MODULE: ./src/context/RegisterProvider.tsx



const RegisterContext = /*#__PURE__*/(0,external_react_.createContext)(registerDefaultValue);
const useRegisterContext = () => (0,external_react_.useContext)(RegisterContext);
function RegisterProvider(props) {
  const providerValue = hooks_useRegister(props.value);
  return /*#__PURE__*/jsx_runtime_.jsx(RegisterContext.Provider, {
    value: providerValue,
    children: props.children
  });
}

/***/ })

};
;