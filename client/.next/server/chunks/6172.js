exports.id = 6172;
exports.ids = [6172];
exports.modules = {

/***/ 6172:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ReviewProvider; },
  "A": function() { return /* binding */ useReviewContext; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(4584);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./src/hooks/useReview.ts



const reviewDefaultValue = {
  props: null,
  action: null,
  state: {
    product: [],
    form: {
      content: '',
      imageUrl: null,
      rate: ''
    }
  }
};

const initializer = props => {
  const state = {
    product: [],
    form: {
      content: '',
      imageUrl: null,
      rate: ''
    }
  };
  return state;
};

const generateAction = update => {
  const setInit = () => update(draft => {
    draft.product = reviewDefaultValue.state.product;
  });

  const setProduct = item => update(draft => {
    draft.product = item;
  });

  const setFormData = e => update(draft => {
    const {
      name,
      checked,
      value
    } = e.target;
    let replaceValue = value.replace(/,/g, '');
    const keyArray = name.split('.');
    if (keyArray.length === 1) draft[keyArray[0]] = replaceValue;else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = replaceValue;else if (keyArray.length === 3) draft[keyArray[0]][keyArray[1]][keyArray[2]] = replaceValue;
  });

  const setData = (stateName, value) => update(draft => {
    const keyArray = stateName.split('.');
    if (keyArray.length === 1) draft[keyArray[0]] = value;else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = value;else if (keyArray.length === 3) draft[keyArray[0]][keyArray[1]][keyArray[2]] = value;
  });

  return {
    setData,
    setProduct,
    setFormData,
    setInit
  };
};

const useReview = props => {
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
  }; // useEffect(() => {
  //   if((router.pathname === '/product/review') || (router.pathname === "/product/[category]/[id]")){
  //     console.log('초기화 실행---------------------------');
  //     app.action.setInit();
  //   }
  // },[app.action,router]);

  return app;
};

/* harmony default export */ var hooks_useReview = (useReview);
;// CONCATENATED MODULE: ./src/context/ReviewProvider.tsx



const reviewContext = /*#__PURE__*/(0,external_react_.createContext)(reviewDefaultValue);
const useReviewContext = () => (0,external_react_.useContext)(reviewContext);
function ReviewProvider(props) {
  const app = hooks_useReview(props.value);
  return /*#__PURE__*/jsx_runtime_.jsx(reviewContext.Provider, {
    value: app,
    children: props.children
  });
}

/***/ })

};
;