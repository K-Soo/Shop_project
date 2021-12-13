exports.id = 6155;
exports.ids = [6155];
exports.modules = {

/***/ 1160:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ AdminProvider; },
  "O": function() { return /* binding */ useAdminContext; }
});

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
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(3803);
;// CONCATENATED MODULE: ./src/hooks/useAdmin.ts





const adminDefaultValue = {
  props: null,
  action: null,
  state: {
    status: {
      loading: false
    },
    sideOpen: false,
    isWhite: true,
    user: {
      id: '',
      password: ''
    },
    filter: {
      product_type: 'necklace',
      category: 'all'
    },
    create: {
      new_product: false,
      best_product: false,
      product_type: '',
      category: '',
      name: '',
      consumer_price: '',
      product_price: '',
      summary_description: '',
      description: '',
      product_colors: [],
      imageUrl: []
    }
  }
};

const initializer = props => {
  const state = {
    status: {
      loading: false
    },
    sideOpen: false,
    isWhite: true,
    user: {
      id: '',
      password: ''
    },
    filter: {
      product_type: 'necklace',
      category: 'all'
    },
    create: {
      new_product: false,
      best_product: false,
      product_type: '',
      category: '',
      name: '',
      consumer_price: '',
      product_price: '',
      summary_description: '',
      description: '',
      product_colors: [],
      imageUrl: []
    }
  };
  return state;
};

const generateAction = update => {
  const sideOpen = () => update(draft => {
    draft.sideOpen = !draft.sideOpen;
  });

  const setIsNav = status => update(draft => {
    draft.status.loading = status;
  });

  const setRemoveColor = colors => update(draft => {
    draft.create.product_colors = colors;
  });

  const setFormData = e => update(draft => {
    var _e$nativeEvent$target;

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
    let label = (_e$nativeEvent$target = e.nativeEvent.target[selectedIndex]) === null || _e$nativeEvent$target === void 0 ? void 0 : _e$nativeEvent$target.text;

    if (type === 'checkbox') {
      if (keyArray.length === 1) draft[keyArray[0]] = checked;else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = checked;
    } else {
      if (keyArray.length === 1) draft[keyArray[0]] = replaceValue;else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = replaceValue;
    }
  });

  const setData = (stateName, value) => update(draft => {
    const keyArray = stateName.split('.');
    if (keyArray.length === 1) draft[keyArray[0]] = value;else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = value;else if (keyArray.length === 3) draft[keyArray[0]][keyArray[1]][keyArray[2]] = value;
  });

  const setColorArray = result => update(draft => {
    draft.create.product_colors.push(result);
  });

  return {
    setIsNav,
    sideOpen,
    setFormData,
    setColorArray,
    setRemoveColor,
    setData
  };
};

const useAdmin = props => {
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
  (0,useDidMountEffect/* default */.Z)(() => {
    const path = router.asPath.split('/');

    if (path[1] === 'admin') {
      const exist = utils/* customCookie.get */.S1.get("access_token_a");

      if (!exist) {
        router.push('/admin/login');
      }
    }
  }, [router.asPath]);
  (0,useDidMountEffect/* default */.Z)(() => {
    if (app.state.filter.product_type) {
      action.setData('filter.category', 'all');
    }
  }, [app.state.filter.product_type]);
  return app;
};

/* harmony default export */ var hooks_useAdmin = (useAdmin);
;// CONCATENATED MODULE: ./src/context/AdminProvider.tsx



const AdminContext = /*#__PURE__*/(0,external_react_.createContext)(adminDefaultValue);
const useAdminContext = () => (0,external_react_.useContext)(AdminContext);
function AdminProvider(props) {
  const value = hooks_useAdmin(props.AdminProps);
  return /*#__PURE__*/jsx_runtime_.jsx(AdminContext.Provider, {
    value: value,
    children: props.children
  });
}

/***/ })

};
;