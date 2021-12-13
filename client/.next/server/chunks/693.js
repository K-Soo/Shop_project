exports.id = 693;
exports.ids = [693];
exports.modules = {

/***/ 693:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": function() { return /* binding */ AppProvider; },
  "bp": function() { return /* binding */ useAppContext; }
});

// UNUSED EXPORTS: AppContext

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(4584);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/hooks/useDidMountEffect.ts
var useDidMountEffect = __webpack_require__(9546);
;// CONCATENATED MODULE: ./src/hooks/useApp.ts




const appDefaultValue = {
  props: null,
  action: null,
  state: {
    pagination: {
      currentPage: '1',
      arrNumbers: []
    },
    status: {
      guest: false
    },
    openBasketModal: false,
    openSideMenu: false,
    openSubMenu: false,
    openSearch: false,
    openDaumPost: false,
    openMyShop: false,
    testValue: '',
    targetCategory: 'all',
    keyword: '',
    layout: {
      isHeader: true,
      isFooter: true
    },
    userInfo: {
      userId: '',
      idx: ''
    },
    basket: {
      localStorageItem: null,
      guestLocalStorageItem: [],
      basketList: [],
      nonMemberBasket: []
    },
    currentOrderItem: []
  }
};

const initializer = props => {
  const state = {
    pagination: {
      currentPage: '1',
      arrNumbers: []
    },
    status: {
      guest: false
    },
    openBasketModal: false,
    openSideMenu: false,
    openSubMenu: false,
    openSearch: false,
    openDaumPost: false,
    openMyShop: false,
    testValue: '',
    targetCategory: 'all',
    keyword: '',
    layout: {
      isHeader: true,
      isFooter: true
    },
    userInfo: {
      userId: props.userInfo.userId,
      idx: props.userInfo.idx
    },
    basket: {
      localStorageItem: null,
      guestLocalStorageItem: [],
      basketList: [],
      nonMemberBasket: []
    },
    currentOrderItem: []
  };
  return state;
};

const generateAction = update => {
  const setGlobalToggle = e => {
    update(draft => {
      var _e$target, _e$target$dataset, _e$target2;

      const dataSetName = (_e$target = e.target) === null || _e$target === void 0 ? void 0 : (_e$target$dataset = _e$target.dataset) === null || _e$target$dataset === void 0 ? void 0 : _e$target$dataset.name;
      const tagName = (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.name;

      if (dataSetName) {
        const keyArray = dataSetName.split('.');

        if (keyArray[0] === 'openMyShop' || keyArray[1] === 'openMyShop') {
          draft.openSearch = false;
          draft.openSubMenu = false;
        }

        if (keyArray[0] === 'openSearch' || keyArray[1] === 'openSearch') {
          draft.openMyShop = false;
          draft.openSubMenu = false;
        }

        if (keyArray.length === 1) draft[keyArray[0]] = !draft[dataSetName];else if (keyArray.length === 2) draft[keyArray[1]] = !draft[dataSetName];
      } else if (tagName) {
        const keyArray = tagName.split('.');
        if (keyArray.length === 1) draft[keyArray[0]] = !draft[tagName];else if (keyArray.length === 2) draft[keyArray[1]] = !draft[tagName];
      }
    });
  };

  const setFormData = e => update(draft => {
    const {
      name,
      type,
      checked,
      value,
      maxLength,
      selectedIndex
    } = e.target;
    let replaceValue = value.replace(/,/g, '');
    const keyArray = name.split('.');
    if (keyArray.length === 1) draft[keyArray[0]] = replaceValue;else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = replaceValue;else if (keyArray.length === 3) draft[keyArray[0]][keyArray[1]][keyArray[2]] = replaceValue;
  });

  const setToggleSideMenu = () => {
    update(draft => {
      draft.openSideMenu = !draft.openSideMenu;
    });
  };

  const setBasketModal = () => {
    update(draft => {
      draft.openBasketModal = !draft.openBasketModal;
    });
  };

  const setIsHeader = status => update(draft => {
    draft.layout.isHeader = status;
  });

  const setIsFooter = status => update(draft => {
    draft.layout.isFooter = status;
  });

  const setCategory = e => {
    update(draft => {
      const {
        name
      } = e.target.dataset;
      draft.targetCategory = name;
    });
  };

  const InitData = (stateName, initValue) => update(draft => {
    const keyArray = stateName.split('.');
    let valueDefault = initValue || '';
    if (keyArray.length === 1) draft[keyArray[0]] = valueDefault;else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = valueDefault;
  });

  const setLocalItems = data => update(draft => {
    draft.basket.localStorageItem = data;
  });

  const setGuestLocalItem = data => update(draft => {
    draft.basket.guestLocalStorageItem.push(...data);
  }); // 회원 장바구니


  const setBasketList = data => update(draft => {
    draft.basket.basketList = data;
  }); // 비회원 장바구니


  const setNonMemberBasket = data => update(draft => {
    draft.basket.nonMemberBasket = data;
  });

  const setNonMemberBasketPush = data => update(draft => {
    draft.basket.nonMemberBasket.push(...data);
  });

  const setChangeQty = e => update(draft => {
    const {
      name,
      value
    } = e.target;
    let cnt = +value;
    if (!cnt) return alert('최소 주문수량은 1개 입니다.');
    if (cnt > 10) return alert('최대 주문수량은 10개 입니다.');

    if (draft.userInfo.userId) {
      const result = draft.basket.basketList.find(d => d._id === name);
      result.qty = cnt;
    } else {
      const result = draft.basket.nonMemberBasket.find(d => d.date === name);
      result.qty = cnt;
    }
  });

  return {
    setToggleSideMenu,
    setCategory,
    InitData,
    setIsHeader,
    setIsFooter,
    setLocalItems,
    setBasketList,
    setChangeQty,
    setNonMemberBasketPush,
    setNonMemberBasket,
    setGuestLocalItem,
    setGlobalToggle,
    setFormData,
    setBasketModal
  };
};

const useApp = props => {
  const {
    0: state,
    1: setAppState
  } = (0,external_react_.useState)(initializer(props));
  console.log('useApp state: ', state);

  const update = recipe => setAppState(prev => external_immer_default()(prev, recipe));

  const router = (0,router_.useRouter)();
  const action = generateAction(update);
  const app = {
    props,
    state,
    action
  };
  (0,external_react_.useEffect)(() => {
    setAppState(() => initializer(props));
  }, [props]);
  (0,external_react_.useEffect)(() => {
    if (router.asPath !== '/auth/login/find-password') {
      sessionStorage.removeItem('permanent_id');
    }
  }, [router.asPath]);
  (0,external_react_.useEffect)(() => {
    app.action.InitData('openSubMenu', false);
  }, [app.state.targetCategory]);
  (0,useDidMountEffect/* default */.Z)(() => {
    app.action.InitData('targetCategory', 'all');
  }, [router.asPath]); // ------------------------------------- //

  (0,external_react_.useEffect)(() => {
    // 회원 장바구니
    if (app.state.basket.localStorageItem) {
      localStorage.setItem('basket', JSON.stringify(app.state.basket.localStorageItem));
    }
  }, [app.state.basket.localStorageItem]);
  (0,external_react_.useEffect)(() => {
    const result = JSON.parse(localStorage.getItem("basket"));
    if (result) action.setBasketList(result);
  }, [app.state.basket.localStorageItem]);
  (0,external_react_.useEffect)(() => {
    const member = JSON.parse(localStorage.getItem("basket"));
    if (member) action.setBasketList(member);
  }, [props]); // -----------------------------------------//

  (0,external_react_.useEffect)(() => {
    // 비회원 장바구니
    if (app.state.basket.guestLocalStorageItem.length) {
      localStorage.setItem('unknown-basket', JSON.stringify(app.state.basket.guestLocalStorageItem));
    }
  }, [app.state.basket.guestLocalStorageItem]);
  (0,external_react_.useEffect)(() => {
    if (app.state.basket.nonMemberBasket.length) {
      localStorage.setItem('unknown-basket', JSON.stringify(app.state.basket.nonMemberBasket));
    }
  }, [app.state.basket.nonMemberBasket]);
  (0,useDidMountEffect/* default */.Z)(() => {
    // 비회원
    if (router.asPath === '/order/basket') {
      localStorage.setItem('unknown-basket', JSON.stringify(app.state.basket.nonMemberBasket));
    }
  }, [app.state.basket.nonMemberBasket]);
  (0,external_react_.useEffect)(() => {
    const nonMember = JSON.parse(localStorage.getItem("unknown-basket"));
    if (nonMember) action.setNonMemberBasket(nonMember);
  }, [props]);
  (0,external_react_.useEffect)(() => {
    const result = localStorage.getItem("guest");
    if (result) app.action.InitData('status.guest', true);
  }, [router.asPath]);
  (0,external_react_.useEffect)(() => {
    const {
      keyword
    } = router.query;
    app.action.InitData('keyword', keyword);
  }, []);
  return app;
};

/* harmony default export */ var hooks_useApp = (useApp);
;// CONCATENATED MODULE: ./src/context/AppProvider.tsx



const AppContext = /*#__PURE__*/(0,external_react_.createContext)(appDefaultValue);
const useAppContext = () => (0,external_react_.useContext)(AppContext);
function AppProvider(props) {
  const providerValue = hooks_useApp(props.AppProps);
  return /*#__PURE__*/jsx_runtime_.jsx(AppContext.Provider, {
    value: providerValue,
    children: props.children
  });
}

/***/ }),

/***/ 9546:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useDidMountEffect = (func, deps) => {
  const didMount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (didMount.current) func();else didMount.current = true;
  }, deps);
};

/* harmony default export */ __webpack_exports__["Z"] = (useDidMountEffect);

/***/ })

};
;