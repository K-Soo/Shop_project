(function() {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 5000:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useSearch; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7834);
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8740);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);




function useSearch() {
  const {
    0: filter,
    1: setFilter
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const fallback = [];
  const selectFc = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(data => {
    if (filter) return data.filter(d => d.name.trim().includes(filter));
  }, [filter]);
  const {
    data: FilteredData = fallback,
    isLoading,
    isSuccess,
    isError
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__/* .queryKeys.SEARCH */ .a.SEARCH], async () => await api__WEBPACK_IMPORTED_MODULE_2__/* .Get.getAllProduct */ .dX.getAllProduct(), {
    retry: 0,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    select: selectFc // enabled: state.openSearch,

  });
  return {
    FilteredData,
    isLoading,
    isSuccess,
    isError,
    setFilter,
    filter
  };
}

/***/ }),

/***/ 9598:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ App; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/constants/footer.ts
const COMPANY_INFO = {
  COMPANY: "주식회사 포폴",
  OWNER: "주상복합",
  "BUSINESS LICENSE": "228-33-333333",
  ADDRESS: "경기도 남양주시 별내동",
  TEL: "010-6479-7825",
  FAX: "133-3333",
  "CONTACT US": "kanabun102@naver.com"
};
const CUSTOMER_CENTER = {
  number: "1600-3000",
  open: "월-금 pm1:00-5:00",
  close: "토,일,공휴일 휴무"
};
const ACCOUNT_INFO = [{
  label: "국민",
  value: "103001-04-333333"
}, {
  label: "신한",
  value: "103001-04-111111"
}, {
  label: "농협",
  value: "103001-04-444444"
}, {
  label: "예금주",
  value: "(주)포폴"
}];
const FAVORITE_MENU = (/* unused pure expression or super */ null && (["로그인 / 회원가입", "관심상품", "장바구니", "주문조회", "마이페이지"]));
const RETURN_EXCHANGE = (/* unused pure expression or super */ null && (["부산시 금정구 부산대학로62-1 4층", "지번: 부산시 금정구 장전동 400-31번지 4층", "자세한 교환·반품절차 안내는 문의란 및 공지사항을 참고해주세요"]));
const SUB_TOP_LISTS = [{
  label: '이용약관',
  value: 'register',
  url: '/shop-info/agreement'
}, {
  label: '개인정보 취급 방침',
  value: '개인정보',
  url: '/shop-info/privacy'
}];
;// CONCATENATED MODULE: ./src/components/Layout/Footer/SubTop.tsx






const SubTop = ({
  className
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: className,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: "container__lists",
        children: SUB_TOP_LISTS.map(d => /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: d.url,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: d.label
            })
          })
        }, d.value))
      })
    })
  });
};

/* harmony default export */ var Footer_SubTop = (external_styled_components_default()(SubTop).withConfig({
  displayName: "SubTop",
  componentId: "sc-1rnjm7m-0"
})(["padding:12px 0;.container{height:100%;max-width:1200px;padding:0 20px;margin:0 auto;&__lists{display:flex;box-sizing:border-box;li{font-size:12px;border-right:1px solid #ddd;padding:0 10px;&:last-child{border-right:none;}a{display:inline-block;}}}}"]));
;// CONCATENATED MODULE: ./src/components/Layout/Footer/Bottom.tsx






const Bottom = ({
  className
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: className,
    children: /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: "container__lists",
        children: Object.entries(COMPANY_INFO).map(d => /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          className: "container__lists--item",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: d[0]
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: d[1]
          })]
        }, d[1]))
      })
    })
  });
};

/* harmony default export */ var Footer_Bottom = (external_styled_components_default()(Bottom).withConfig({
  displayName: "Bottom",
  componentId: "t7h1jt-0"
})(["background-color:#fafafa;width:100%;padding:35px 0 45px;font-size:12px;.container{max-width:1200px;margin:0 auto;padding:0 20px;&__lists{display:flex;flex-wrap:wrap;max-width:600px;&--item{margin:0 10px 20px 0;span:first-child{color:#888;::after{content:\" : \";}}span:last-child{color:#555;margin-left:1px;}}}}", ""], ({
  theme
}) => theme.mobile`
    padding: 10px 0;
  `));
;// CONCATENATED MODULE: ./src/components/Layout/Footer/index.tsx







const Footer = ({
  className
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    className: className,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Footer_SubTop, {}), /*#__PURE__*/jsx_runtime_.jsx(Footer_Bottom, {})]
  });
};

/* harmony default export */ var Layout_Footer = (external_styled_components_default()(Footer).withConfig({
  displayName: "Footer",
  componentId: "sc-12c5v5i-0"
})(["width:100%;bottom:0;border-top:1px solid #555;margin-top:50px;", ""], ({
  theme
}) => theme.mobile`
      display: none;
  `));
// EXTERNAL MODULE: ./src/components/Common/HamburgerIcon.tsx
var HamburgerIcon = __webpack_require__(4633);
// EXTERNAL MODULE: ./src/context/AppProvider.tsx + 1 modules
var AppProvider = __webpack_require__(693);
// EXTERNAL MODULE: ./src/hooks/useDidMountEffect.ts
var useDidMountEffect = __webpack_require__(9546);
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__(3595);
;// CONCATENATED MODULE: ./src/constants/keyword.ts
const SEARCH_KEYWORD = [{
  label: '#목걸이',
  value: '목걸이'
}, {
  label: '#귀걸이',
  value: '귀걸이'
}, {
  label: '#팬던트',
  value: '팬던트'
}, {
  label: '#반지',
  value: '반지'
}];
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/hooks/useSearch.ts
var useSearch = __webpack_require__(5000);
;// CONCATENATED MODULE: ./src/components/Layout/Header/NavSearchBar.tsx











const InputStyle = /*#__PURE__*/(0,external_styled_components_.css)(["all:unset;box-sizing:border-box;width:100%;padding-left:20px;background-color:#636363;outline:none;border-radius:20px;height:30px;color:#fff;font-weight:normal;font-size:14px;letter-spacing:1px;opacity:0;"]);
const S = {
  NavSearchBar: external_styled_components_default().div.withConfig({
    displayName: "NavSearchBar",
    componentId: "sc-12lswas-0"
  })(["z-index:10;position:absolute;visibility:hidden;border:1px solid #e8e8e8;border-width:0px 1px 1px 1px;width:500px;height:0px;top:49px;right:0;padding:20px;background-color:#fff;border-bottom-right-radius:10px;border-bottom-left-radius:10px;", " ", ""], props => props.toggle && (0,external_styled_components_.css)(["visibility:visible;height:200px;transition:all 0.5s ease;"]), ({
    theme
  }) => theme.mobile`
      width: 0px;
      height: 80px;
      padding: 5px 10px 10px;
      left: 0;
      top: 0;
      ${props => props.toggle && (0,external_styled_components_.css)(["width:100%;height:200px;transition:all 0.5s cubic-bezier(.32,2,.55,.27);"])}
    `),
  form: external_styled_components_default().form.withConfig({
    displayName: "NavSearchBar__form",
    componentId: "sc-12lswas-1"
  })(["width:100%;margin:0 auto;height:100%;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-end;.search-field{width:100%;position:relative;display:flex;align-items:center;.search-area{", " ", "}.search-btn{all:unset;position:absolute;right:2%;font-size:0;padding:4px;border-radius:50%;cursor:pointer;&:hover{svg{color:#fff;}}}}.search-data{box-sizing:border-box;height:100%;width:100%;color:#222;display:flex;flex-direction:column;&__keyword{display:flex;justify-content:space-between;align-items:center;padding:8px 0;span{color:#444;letter-spacing:0.5px;font-size:13px;font-weight:600;white-space:nowrap;}ul{display:flex;white-space:nowrap;li{background-color:#f5f5f5;color:#666;font-size:12px;padding:5px 10px;border-radius:10px;margin-left:10px;cursor:pointer;&:hover{background-color:#636363;color:#f5f5f5;}}}}&--filtering{height:89px;padding-left:15px;width:100%;overflow-y:auto;a{display:block;padding:5px 0;cursor:pointer;font-size:12px;color:#666;&:hover{color:#000;background-color:#f5f5f5;}}}}.bottom-field{display:none;font-size:0;", " .close-btn{all:unset;height:18px;width:18px;font-size:0;cursor:pointer;svg{height:18px;width:18px;pointer-events:none;&:hover{color:#222;}}}}"], InputStyle, props => props.toggle && (0,external_styled_components_.css)(["opacity:1;transition:all 0.5s ease;"]), ({
    theme
  }) => theme.mobile`
        display: block;
      `)
};
function NavSearchBar() {
  const InputFocus = (0,external_react_.useRef)(null);
  const {
    action,
    state
  } = (0,AppProvider/* useAppContext */.bp)();
  const router = (0,router_.useRouter)();
  const {
    FilteredData,
    isSuccess,
    isLoading,
    setFilter,
    filter
  } = (0,useSearch/* default */.Z)();
  (0,useDidMountEffect/* default */.Z)(() => {
    setFilter('');

    if (state.openSearch) {
      setTimeout(() => {
        var _InputFocus$current;

        return (_InputFocus$current = InputFocus.current) === null || _InputFocus$current === void 0 ? void 0 : _InputFocus$current.focus();
      }, 500);
    }

    ;
  }, [state.openSearch]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!filter.trim()) return;
    setFilter('');
    router.push({
      pathname: '/product/search/',
      query: {
        keyword: filter
      }
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.NavSearchBar, {
    toggle: state.openSearch,
    children: [isLoading && /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: "Loading..."
    }), isSuccess && /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.form, {
      toggle: state.openSearch,
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("fieldset", {
        className: "search-field",
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          className: "search-area",
          autoComplete: "off",
          ref: InputFocus,
          name: "keyword",
          value: filter,
          onChange: e => setFilter(e.target.value)
        }), "i", /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "search-btn",
          type: "submit",
          children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
            name: "search"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("fieldset", {
        className: "search-data",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "search-data__keyword",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "KEYWORD"
          }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
            children: SEARCH_KEYWORD.map(d => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: `/product/search?keyword=${d.value}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: d.label
                }, d.value)
              })
            }, d.value))
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: "search-data--filtering",
          children: FilteredData.map(d => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: `/product/search?keyword=${d.name.trim()}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: d.name
              })
            })
          }, d._id))
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("fieldset", {
        className: "bottom-field",
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "close-btn",
          type: "button",
          name: "openSearch",
          onClick: action.setGlobalToggle,
          children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
            name: "close"
          })
        })
      })]
    })]
  });
}
;
;// CONCATENATED MODULE: ./src/components/Common/CartIcon.tsx







const CartIcon_S = {
  CartIcon: external_styled_components_default().li.withConfig({
    displayName: "CartIcon",
    componentId: "sc-1ufmwx4-0"
  })(["box-sizing:border-box;position:relative;display:flex;justify-content:center;align-items:center;height:100%;width:50px;font-size:0;border:solid #e8e8e8;border-width:0px 0px 0px 1px;svg{width:30px;height:30px;color:#222;}.qty-text{background-color:crimson;color:#fff;font-size:14px;text-align:center;position:absolute;display:flex;justify-content:center;align-items:center;top:8px;left:50%;transform:translateX(-80%);width:20px;height:20px;line-height:20px;border-radius:50%;", ";}", ";"], ({
    theme
  }) => theme.mobile`
        top: 5px;
        width: 18px;
        height: 18px;
        font-size: 12px;
      `, ({
    theme
  }) => theme.mobile`
      width: 40px;
    `)
};
function CartIcon({
  className
}) {
  var _state$basket$basketL, _state$basket$nonMemb;

  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)();
  const {
    state
  } = (0,AppProvider/* useAppContext */.bp)();
  const {
    userId
  } = state.userInfo;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(CartIcon_S.CartIcon, {
    className: className,
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/order/basket",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "qty-text",
        children: userId ? ((_state$basket$basketL = state.basket.basketList) === null || _state$basket$basketL === void 0 ? void 0 : _state$basket$basketL.length) || 0 : ((_state$basket$nonMemb = state.basket.nonMemberBasket) === null || _state$basket$nonMemb === void 0 ? void 0 : _state$basket$nonMemb.length) || 0
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/order/basket",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
          name: "cart"
        })
      })
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/Layout/Header/Nav/SearchGroup.tsx









const SearchGroup_S = {
  SearchGroup: external_styled_components_default().ul.withConfig({
    displayName: "SearchGroup",
    componentId: "sc-1vflt1j-0"
  })(["height:100%;display:flex;align-items:center;justify-content:space-between;", " ", " .hamburger-btn{display:none;width:40px;height:100%;border:solid #e8e8e8;border-width:0px 1px 0px 0px;align-items:center;justify-content:center;", "}.inner-group{height:100%;display:flex;align-items:center;.cartIcon{", ";}}.search-btn{display:flex;justify-content:center;align-items:center;height:100%;width:50px;span{display:flex;justify-content:center;align-items:center;height:40px;width:40px;border-radius:50%;cursor:pointer;&:hover{background-color:#e8e8e8;}svg{color:#222;pointer-events:none;}}", "}"], props => props.toggle && (0,external_styled_components_.css)(["justify-content:flex-end;"]), ({
    theme
  }) => theme.mobile`
      flex-grow: 1;
      height: auto;
      width:100%;
      height: 40px;
    `, ({
    theme
  }) => theme.mobile`
        display: ${({
    toggle
  }) => toggle ? 'none' : 'flex'}
      `, ({
    theme
  }) => theme.mobile`
          display: none;
        `, ({
    theme
  }) => theme.mobile`
        width: 40px;
        border: solid #e8e8e8;
        border-width: 0px 0px 0px 1px;
        ${props => props.toggle && (0,external_styled_components_.css)(["display:none;"])}
        span{
          height: 32px;
          width: 32px;
        }
        svg{
          width: 15px;
        }
      `)
};
function SearchGroup() {
  const {
    action,
    state
  } = (0,AppProvider/* useAppContext */.bp)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(SearchGroup_S.SearchGroup, {
    toggle: state.openSearch,
    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
      className: "hamburger-btn",
      onClick: action.setToggleSideMenu,
      children: /*#__PURE__*/jsx_runtime_.jsx(HamburgerIcon/* default */.Z, {
        toggle: state.openSideMenu
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(NavSearchBar, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "inner-group",
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "search-btn",
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          "data-name": "openSearch",
          onClick: action.setGlobalToggle,
          children: state.openSearch ? /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
            name: "close"
          }) : /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
            name: "search"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(CartIcon, {
        className: "cartIcon"
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./src/constants/header.ts
const NAV_MENU = [{
  label: "목걸이",
  value: "login",
  url: "/product/necklace"
}, {
  label: "귀걸이",
  value: "register",
  url: "/product/earring"
}, {
  label: "반지",
  value: "개인정보",
  url: "/product/ring"
}, {
  label: "팔찌",
  value: "이용안내",
  url: "/product/bracelet"
}, {
  label: "발찌",
  value: "이용안내",
  url: "/product/anklet"
}, {
  label: "순금",
  value: "이용안내",
  url: "/product/gold"
}, {
  label: "다이아몬드",
  value: "이용안내",
  url: "/product/diamond"
}, {
  label: "커플링",
  value: "이용안내",
  url: "/product/coupling"
}];
const MAIN_MENU = {
  left: [{
    label: "관리자",
    value: "admin",
    url: "/admin"
  }],
  right: [{
    label: "로그인",
    value: "login",
    url: "/auth/login"
  }, {
    label: "회원가입",
    value: "register",
    url: "/auth/register"
  }, {
    label: "주문조회",
    value: "개인정보",
    url: "/shop-info/privacy"
  }, {
    label: "마이쇼핑",
    value: "개인2정보",
    url: "/shop-info/privacy"
  }]
};
const QUICK_ICON_MENU = [{
  label: '장바구니',
  url: '/order/basket',
  icon: 'cart'
}, {
  label: '상품후기',
  url: '/2',
  icon: 'bed'
}, {
  label: '고객센터',
  url: '/4',
  icon: 'bed'
}, {
  label: '마이쇼핑',
  url: '/5',
  icon: 'bed'
}];
;// CONCATENATED MODULE: ./src/components/Layout/Header/Nav/CategoryGroup.tsx






const StyledBorder = /*#__PURE__*/(0,external_styled_components_.css)(["&:nth-child(1){border:solid #e8e8e8;border-width:1px 1px 1px 0;}&:nth-child(2){border:solid #e8e8e8;border-width:1px 0 1px 0;}&:nth-child(3){border:solid #e8e8e8;border-width:0 1px 1px 0;}&:nth-child(4){border:solid #e8e8e8;border-width:0 0 1px 0;}&:nth-child(5){border:solid #e8e8e8;border-width:0 1px 1px 0;}&:nth-child(6){border:solid #e8e8e8;border-width:0 0 1px 0;}&:nth-child(7){border:solid #e8e8e8;border-width:0 1px 0 0;}"]);
const CategoryGroup_S = {
  CategoryGroup: external_styled_components_default().ul.withConfig({
    displayName: "CategoryGroup",
    componentId: "sc-1ogbvj3-0"
  })(["height:100%;display:flex;align-items:center;justify-content:space-between;flex-grow:1;", ""], ({
    theme
  }) => theme.mobile`
      display: ${props => props.pathname === '/' ? 'flex' : 'none'};
      flex-wrap: wrap;
    `),
  Item: external_styled_components_default().li.withConfig({
    displayName: "CategoryGroup__Item",
    componentId: "sc-1ogbvj3-1"
  })(["flex-grow:1;display:inline-block;text-align:center;font-size:13px;height:100%;a{display:inline-block;padding:0 5px;width:100%;line-height:48px;height:100%;vertical-align:bottom;&[data-active=true]{color:#000;border-bottom:solid 2px #333;}&:hover{color:#000;}}", ";"], ({
    theme
  }) => theme.mobile`
      flex-basis:50%;
      padding: 5px;
      ${StyledBorder}
      a{
        line-height: normal;
        &[data-active=true] {
          border: none;
        };
      }
    `)
};
function CategoryGroup() {
  const router = (0,router_.useRouter)();
  const {
    0: dataSetName,
    1: setDatasetName
  } = (0,external_react_.useState)('');

  const handleItem = e => {
    const {
      name
    } = e.target.dataset;
    setDatasetName(name);
  };

  (0,external_react_.useEffect)(() => {
    if (!(router.pathname === "/product/[category]")) setDatasetName('');
  }, [router.pathname]);
  return /*#__PURE__*/jsx_runtime_.jsx(CategoryGroup_S.CategoryGroup, {
    pathname: router.pathname,
    children: NAV_MENU.map(d => /*#__PURE__*/jsx_runtime_.jsx(CategoryGroup_S.Item, {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: d.url,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          onClick: handleItem,
          "data-name": d.label,
          "data-active": d.label === dataSetName,
          children: d.label
        })
      })
    }, d.label))
  });
}
;// CONCATENATED MODULE: ./src/components/Layout/Header/Nav/index.tsx






const Nav_S = {
  Nav: external_styled_components_default().nav.withConfig({
    displayName: "Nav",
    componentId: "sc-1k5zrn6-0"
  })(["height:50px;color:#222;width:100%;background-color:#fff;border-top:1px solid #4c4c4c;border-top-color:rgba(0,0,0,0.7);border-bottom:1px solid #e8e8e8;border-bottom-color:rgba(0,0,0,0.09);z-index:10;", " ", ""], props => props.ScrollActive && (0,external_styled_components_.css)(["position:fixed;z-index:9;top:40px;border-top:none;"]), ({
    theme
  }) => theme.mobile`
      height: auto;
    `),
  container: external_styled_components_default().div.withConfig({
    displayName: "Nav__container",
    componentId: "sc-1k5zrn6-1"
  })(["position:relative;height:100%;max-width:1200px;margin:0 auto;"]),
  ItemBox: external_styled_components_default().div.withConfig({
    displayName: "Nav__ItemBox",
    componentId: "sc-1k5zrn6-2"
  })(["display:flex;justify-content:space-between;height:100%;align-items:center;", ""], ({
    theme
  }) => theme.mobile`
      height: auto;
      flex-wrap: wrap;
      ul:first-child{
        order: 2;
      }
    `)
};
function Nav({
  ScrollActive
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Nav_S.Nav, {
    ScrollActive: ScrollActive,
    children: /*#__PURE__*/jsx_runtime_.jsx(Nav_S.container, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Nav_S.ItemBox, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(CategoryGroup, {}), /*#__PURE__*/jsx_runtime_.jsx(SearchGroup, {})]
      })
    })
  });
}
;
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/constants/path.ts
var path = __webpack_require__(643);
;// CONCATENATED MODULE: ./src/components/Layout/Header/MainLogo.tsx






const MainLogo_S = {
  MainLogo: external_styled_components_default().div.withConfig({
    displayName: "MainLogo",
    componentId: "sc-12gsgar-0"
  })(["height:80px;text-align:center;a{display:inline-block;height:100%;display:flex;align-items:center;justify-content:center;img{object-fit:contain;}}"])
};
function MainLogo({
  className
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(MainLogo_S.MainLogo, {
    className: className,
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: path/* default.MAIN.path */.Z.MAIN.path,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          className: "main-logo",
          src: "/images/main_logo.png",
          width: 300,
          height: 70,
          alt: "main_logo"
        })
      })
    })
  });
}
;
;// CONCATENATED MODULE: ./src/components/Layout/Header/Menu/MenuLeft.tsx



/* eslint-disable @next/next/no-img-element */





const MenuLeft_S = {
  MenuLeft: external_styled_components_default().ul.withConfig({
    displayName: "MenuLeft",
    componentId: "sc-1oipdn6-0"
  })(["flex:1;display:flex;justify-content:flex-start;align-items:center;font-size:12px;letter-spacing:0.5px;.item{width:70px;border-right:1px solid #999;text-align:center;padding:0 5px;color:#323232;cursor:pointer;display:flex;align-items:center;justify-content:center;", " img{margin-right:5px;}&:last-child{border:none;}}"], ({
    theme
  }) => theme.mobile`
        display: none;
      `),
  Home: external_styled_components_default().li.withConfig({
    displayName: "MenuLeft__Home",
    componentId: "sc-1oipdn6-1"
  })(["opacity:0;width:0;display:flex;align-items:center;justify-content:center;box-sizing:border-box;", ""], ({
    ScrollActive
  }) => ScrollActive && (0,external_styled_components_.css)(["color:#fff;width:40px;background-color:rgba(55,55,55,0.9);transition:width 0.5s ease;opacity:1;height:100%;"]))
};
function MenuLeft({
  ScrollActive
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(MenuLeft_S.MenuLeft, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(MenuLeft_S.Home, {
      ScrollActive: ScrollActive,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: path/* default.MAIN.path */.Z.MAIN.path,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: "\uD648"
        })
      })
    }), MAIN_MENU.left.map(d => /*#__PURE__*/jsx_runtime_.jsx("li", {
      className: "item",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: d.url,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: d.label
        })
      })
    }, d.value)), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
      className: "item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/main/ko.png",
        alt: "kor-img"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "\uD55C\uAD6D\uC5B4"
      })]
    })]
  });
}
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(3803);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
// EXTERNAL MODULE: ./src/components/style/Button.tsx
var Button = __webpack_require__(8761);
// EXTERNAL MODULE: ./src/constants/myshop.ts
var myshop = __webpack_require__(7210);
;// CONCATENATED MODULE: ./src/components/Common/MyShopMenuBar.tsx









const MyShopMenuBar_S = {
  MyShopMenuBar: external_styled_components_default().div.withConfig({
    displayName: "MyShopMenuBar",
    componentId: "dft73m-0"
  })(["background-color:#fff;position:fixed;visibility:hidden;opacity:0;top:40px;width:450px;height:auto;padding:15px;border:solid #f0f0f0;border-width:0 1px 1px 1px;z-index:99999;border-bottom-right-radius:10px;border-bottom-left-radius:10px;", " .top-box{display:none;justify-content:flex-end;font-size:0;margin-bottom:10px;}.auth-box{display:none;&__users{display:flex;margin-bottom:10px;}button{height:30px;font-size:12px;padding:0;a{display:inline-block;line-height:30px;width:100%;height:100%;}}}.myshop__list{margin-top:10px;overflow-y:scroll;max-height:200px;&--item{&:hover{svg{color:#555;}}display:flex;align-items:center;padding:15px;border-bottom:1px solid #f0f0f0;.icon{margin-right:10px;}.desc{flex:1;color:#555;&--title{font-weight:600;font-size:14px;}&--explanation{font-weight:400;}}.arrow{font-size:0;margin-left:10px;}}}.button-box{margin-top:10px;display:flex;align-items:center;justify-content:space-between;button{padding:0;}a{display:inline-block;width:100%;height:100%;line-height:30px;padding:0 5px;}i{display:block;font-size:0;cursor:pointer;svg{color:#555555;}}}", ""], props => props.toggle && (0,external_styled_components_.css)(["visibility:visible;opacity:1;transition:all 0.3s ease;"]), ({
    theme
  }) => theme.mobile`
      margin: 0 auto;
      width: 100%;
      height: 100vh;
      .top-box{
        display: flex;
      }
      .auth-box{
        display: block;
      }
      .myshop__list{
        max-height: none;
        overflow-y: hidden;
        &--item{
        padding: 20px 15px;
        .desc{
          &--title{
            font-size: 12px;
          }
        &--explanation{
            font-size: 11px;
          }
        }
        .arrow{
          display: none;
        }
      }
        }
      .button-box{
        display: none;
      }
    `)
};
function MyShopMenuBar({}) {
  const {
    action,
    state
  } = (0,AppProvider/* useAppContext */.bp)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(MyShopMenuBar_S.MyShopMenuBar, {
    toggle: state.openMyShop,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "top-box",
      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
        "data-name": "openMyShop",
        onClick: action.setGlobalToggle,
        children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
          name: "close"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "auth-box",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "auth-box__users",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          black: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/auth/login",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "\uB85C\uADF8\uC778"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          white: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/auth/register",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "\uD68C\uC6D0\uAC00\uC785"
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        black: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/users",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "\uB9C8\uC774\uC1FC\uD551 \uBC14\uB85C\uAC00\uAE30"
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "myshop__list",
      children: myshop/* MY_SHOP_MENU.map */.$.map(d => /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: d.url,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: "myshop__list--item",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "icon",
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
                  name: d.icon
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "desc",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "desc--title",
                children: d.label
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "desc--explanation",
                children: d.value
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "arrow",
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
                  name: "arrowRight"
                })
              })
            })]
          })
        })
      }, d.label))
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "button-box",
      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
        "data-name": "openMyShop",
        onClick: action.setGlobalToggle,
        children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
          name: "close"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        black: true,
        height: "30px",
        fontSize: "14",
        width: "200",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/users",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "\uB9C8\uC774\uC1FC\uD551 \uC804\uCCB4\uBCF4\uAE30"
          })
        })
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/Layout/Header/Menu/MenuRight.tsx











 // import ReactTooltip from 'react-tooltip';



const ReactTooltip = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 1067, 23)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1067)],
    modules: ["../components/Layout/Header/Menu/MenuRight.tsx -> " + "react-tooltip"]
  }
});
const MenuRight_S = {
  MenuRight: external_styled_components_default().div.withConfig({
    displayName: "MenuRight",
    componentId: "sc-60oc2i-0"
  })(["display:flex;align-items:center;justify-content:flex-end;font-size:12px;letter-spacing:0.5px;flex:1;.inner{display:flex;.item{min-width:60px;border-right:1px solid #999;text-align:center;padding:0 5px;color:#323232;cursor:pointer;&:last-child{border:none;}a{display:inline-block;width:100%;}", "}}.cart{transform:translateY(-200%);width:0px;font-size:0;", "}"], ({
    theme
  }) => theme.mobile`
          display: none;    
        `, ({
    theme
  }) => theme.mobile`
      transform: translateY(0%);
      transition: transform 0.5s ease;
      height: 40px;
      width: 40px;
      svg{
        color: #222;
        width: 24px;
        height: 24px;
      }
    `)
};
const MyShop = /*#__PURE__*/external_styled_components_default().i.withConfig({
  displayName: "MenuRight__MyShop",
  componentId: "sc-60oc2i-1"
})(["height:40px;width:40px;border-left:1px solid #e8e8e8;border-right:none;display:flex;align-items:center;justify-content:center;cursor:pointer;", " a{pointer-events:none;}svg{color:#222;pointer-events:none;}.Tool{font-size:12px;padding:5px 10px;}"], ({
  theme
}) => theme.mobile`
      border-right: none;
    `);
function MenuRight() {
  const router = (0,router_.useRouter)();
  const {
    state: {
      userInfo
    }
  } = (0,AppProvider/* useAppContext */.bp)();
  const App = (0,AppProvider/* useAppContext */.bp)();

  const handleLogOut = () => {
    if (confirm('로그아웃 하시겠습니까?')) {
      utils/* customCookie.remove */.S1.remove('access_token');
      localStorage.removeItem('basket');
      localStorage.removeItem('guest');
      localStorage.removeItem('order');
      return router.push(path/* default.MAIN.path */.Z.MAIN.path);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(MenuRight_S.MenuRight, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: "inner",
      children: [userInfo.userId ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "item",
          children: `${userInfo.userId}님`
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "item",
          onClick: handleLogOut,
          children: "\uB85C\uADF8\uC544\uC6C3"
        })]
      }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "item",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/auth/login",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "\uB85C\uADF8\uC778"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          className: "item",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/auth/register",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              "data-tip": true,
              "data-for": "ddd",
              "data-border": true,
              children: "\uD68C\uC6D0\uAC00\uC785"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(ReactTooltip, {
            id: "ddd",
            type: "light",
            place: "bottom",
            effect: "solid",
            className: "Tool",
            children: "\uB9C8\uC774\uC1FC\uD551"
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "item",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/users/history/list",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "\uC8FC\uBB38\uC870\uD68C"
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MyShop, {
      "data-name": "openMyShop",
      onClick: App.action.setGlobalToggle,
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        "data-tip": true,
        "data-for": "happyFace",
        "data-border": true,
        children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
          name: "human"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(ReactTooltip, {
        id: "happyFace",
        type: "light",
        place: "bottom",
        effect: "solid",
        className: "Tool",
        children: "\uB9C8\uC774\uC1FC\uD551"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(CartIcon, {
      className: "cart"
    }), /*#__PURE__*/jsx_runtime_.jsx(MyShopMenuBar, {})]
  });
}
;// CONCATENATED MODULE: ./src/components/Layout/Header/Menu/Banner.tsx






const Banner_S = {
  Banner: external_styled_components_default().div.withConfig({
    displayName: "Banner",
    componentId: "k0dct0-0"
  })(["display:flex;justify-content:center;align-items:center;opacity:0;", ""], props => props.ScrollActive && (0,external_styled_components_.css)(["opacity:1;transition:opacity 1s ease;"]))
};
function Banner({
  ScrollActive
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Banner_S.Banner, {
    ScrollActive: ScrollActive,
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: path/* default.MAIN.path */.Z.MAIN.path,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          className: "main-logo",
          src: "/images/main_logo.png",
          width: 100,
          height: 35,
          alt: "main_logo"
        })
      })
    })
  });
}
;// CONCATENATED MODULE: ./src/components/Layout/Header/Menu/index.tsx







const Menu_S = {
  Menu: external_styled_components_default().nav.withConfig({
    displayName: "Menu",
    componentId: "sc-1p1ui2s-0"
  })(["z-index:10;height:40px;position:fixed;top:0;width:100%;border-bottom:1px solid #e8e8e8;background-color:rgba(255,255,255,0.95);.container{display:flex;justify-content:space-between;max-width:1200px;height:100%;margin:0 auto;}"])
};
function Menu({
  ScrollActive
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Menu_S.Menu, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx(MenuLeft, {
        ScrollActive: ScrollActive
      }), /*#__PURE__*/jsx_runtime_.jsx(Banner, {
        ScrollActive: ScrollActive
      }), /*#__PURE__*/jsx_runtime_.jsx(MenuRight, {})]
    })
  });
}
;
;// CONCATENATED MODULE: external "lodash/debounce"
var debounce_namespaceObject = require("lodash/debounce");;
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_namespaceObject);
;// CONCATENATED MODULE: ./src/hooks/useScroll.tsx


function useScroll() {
  const {
    0: scrollY,
    1: setScrollY
  } = (0,external_react_.useState)(0);
  const listener = (0,external_react_.useCallback)(() => {
    setScrollY(window.pageYOffset);
  }, []);
  const delay = 15;
  (0,external_react_.useEffect)(() => {
    let mounted = true;

    if (mounted) {
      window.addEventListener("scroll", debounce_default()(listener, delay));
    }

    return () => {
      window.removeEventListener("scroll", listener);
      mounted = false;
    };
  });
  return {
    scrollY
  };
}
;// CONCATENATED MODULE: ./src/components/SideMenu/common/Info.tsx





const Info_S = {
  Info: external_styled_components_default().div.withConfig({
    displayName: "Info",
    componentId: "sc-13mfn7i-0"
  })([".info-category{display:flex;justify-content:space-between;align-items:center;margin-bottom:30px;li{text-align:center;flex-basis:50%;font-size:14px;padding:5px 0;font-size:13px;cursor:pointer;}.customer{border:solid #666;border-width:", ";}.account{border:solid #666;border-width:", ";}}.info-desc{font-size:12px;color:#444;p{margin-bottom:5px;}p:last-child{margin-bottom:0px;}}"], props => props.text === 'customer' ? '1px 1px 0 1px' : '0 0 1px 0', props => props.text === 'account' ? '1px 1px 0 1px' : '0 0 1px 0')
};

const Info = ({
  className
}) => {
  const {
    0: text,
    1: setText
  } = (0,external_react_.useState)('customer');

  const handleText = e => {
    const {
      className
    } = e.target;
    setText(className);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Info_S.Info, {
    text: text,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: "info-category",
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        onClick: handleText,
        className: "customer",
        children: "\uACE0\uAC1D\uC13C\uD130"
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        onClick: handleText,
        className: "account",
        children: "\uACC4\uC88C\uC815\uBCF4"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "info-desc",
      children: text === 'customer' ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "\uC6D4\uC694\uC77C - \uAE08\uC694\uC77C 10:00 - 17:00"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "\uC810\uC2EC\uC2DC\uAC04 13:00 - 14:00"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "[\uC8FC\uB9D0/\uACF5\uD734\uC77C\uD734\uBB34]"
        })]
      }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: ACCOUNT_INFO.map(d => /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: [d.label, " : ", d.value]
        }, d.label))
      })
    })]
  });
};

/* harmony default export */ var common_Info = (Info);
;// CONCATENATED MODULE: ./src/components/SideMenu/common/Copyright.tsx




const Copyright_S = {
  Copyright: external_styled_components_default().div.withConfig({
    displayName: "Copyright",
    componentId: "sc-1clu1mi-0"
  })(["margin-top:30px;padding:30px 0 20px 0;border-top:1px solid #f2f2f2;font-size:11px;"])
};
function Copyright({}) {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return /*#__PURE__*/jsx_runtime_.jsx(Copyright_S.Copyright, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: ["Copyright \xA9 ", /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: thisYear()
      }), " Shop Co. All rights reserved."]
    })
  });
}
;
;// CONCATENATED MODULE: ./src/components/SideMenu/common/QuickIcon.tsx






const QuickIcon_S = {
  QuickIcon: external_styled_components_default().div.withConfig({
    displayName: "QuickIcon",
    componentId: "sc-1wly5ji-0"
  })(["margin-bottom:15px;"]),
  List: external_styled_components_default().ul.withConfig({
    displayName: "QuickIcon__List",
    componentId: "sc-1wly5ji-1"
  })(["display:flex;flex-wrap:wrap;justify-content:space-between;"]),
  Item: external_styled_components_default().li.withConfig({
    displayName: "QuickIcon__Item",
    componentId: "sc-1wly5ji-2"
  })(["flex-basis:24%;border:1px solid #e8e8e8;text-align:center;padding:7px 0;border-radius:5px;cursor:pointer;display:flex;flex-direction:column;justify-content:space-between;&:hover{background-color:#fafafa;border:1px solid #999;color:#999;box-shadow:inset 0 0 5px #fafafa,0 0 5px #999;transform:scale(1.01);transition:transform 0.1s ease;}&:nth-child(n + 5){margin-top:4px;}.name{padding-top:3px;}a{display:inline-block;width:100%;font-size:10px;color:#555;i{font-size:0;svg{color:#444;width:24px;height:24px;}}}"])
};
function QuickIcon({
  lists
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(QuickIcon_S.QuickIcon, {
    children: /*#__PURE__*/jsx_runtime_.jsx(QuickIcon_S.List, {
      children: lists && lists.map(d => /*#__PURE__*/(0,jsx_runtime_.jsxs)(QuickIcon_S.Item, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: d.url,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
                name: d.icon
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: d.url,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "name",
            children: d.label
          })
        })]
      }, d.url))
    })
  });
}
;
// EXTERNAL MODULE: ./src/constants/product.ts
var product = __webpack_require__(9770);
;// CONCATENATED MODULE: ./src/components/SideMenu/common/Category.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Category_S = {
  Category: external_styled_components_default().div.withConfig({
    displayName: "Category",
    componentId: "sc-2ppz45-0"
  })([".category-list{&__item{border-bottom:1px solid #f5f5f5;width:100%;color:#555;line-height:30px;font-size:11px;&--wrapper{cursor:pointer;.list-icon{display:inline-block;font-size:14px;padding-right:5px;pointer-events:none;}.name{pointer-events:none;}}.inner-list{margin:0 10px;color:#333;display:none;&[data-active=true]{display:block;transition:all 1s ease;}&__detail-item{font-size:11px;height:30px;line-height:30px;cursor:pointer;&:hover{background-color:#f9f9f9;}&::before{content:'\u30FB';padding-right:10px;}}}}}"])
};
const initNameValue = {
  target: '',
  disable: false
};
function Category() {
  const {
    0: nameValue,
    1: setNameValue
  } = (0,external_react_.useState)(initNameValue);
  const {
    action,
    state
  } = (0,AppProvider/* useAppContext */.bp)();
  (0,external_react_.useEffect)(() => {
    setNameValue(initNameValue);
  }, [state.openSideMenu]);

  const handleCategory = e => {
    const {
      category
    } = e.target.dataset;
    setNameValue(prev => _objectSpread(_objectSpread({}, prev), {}, {
      target: category,
      disable: prev.target === category ? !nameValue.disable : true
    }));
  };

  const handleListItem = e => {
    action.setCategory(e);
    action.setToggleSideMenu();
  };

  return /*#__PURE__*/jsx_runtime_.jsx(Category_S.Category, {
    children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "category-list",
      children: Object.entries(product/* PRODUCT */.c).map(d => /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        className: "category-list__item",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "category-list__item--wrapper",
          "data-category": d[0],
          onClick: handleCategory,
          children: [d[0] === nameValue.target ? /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "list-icon",
            children: "+"
          }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "list-icon",
            children: "-"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "name",
            children: product/* CategoryEnum */.B[d[0]]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: "inner-list",
          "data-active": d[0] === nameValue.target && nameValue.disable,
          children: d[1].map(d => /*#__PURE__*/jsx_runtime_.jsx("li", {
            onClick: handleListItem,
            "data-name": d.label,
            className: "inner-list__detail-item",
            children: d.label
          }, d.label))
        })]
      }, d[0]))
    })
  });
}
;// CONCATENATED MODULE: ./src/constants/sideMenu.ts
const QUICK_ICON_LEFT = [{
  label: '장바구니',
  url: '/order/basket',
  icon: 'cart'
}, {
  label: '상품후기',
  url: '/2',
  icon: 'bed'
}, {
  label: '공지사항',
  url: '/board/notice',
  icon: 'warning'
}, {
  label: '마이쇼핑',
  url: '/users',
  icon: 'user'
}];
const QUICK_ICON_RIGHT = [{
  label: '관심상품',
  url: '/users/interest-products',
  icon: 'heart'
}, {
  label: '장바구니',
  url: '/order/basket',
  icon: 'cart'
}, {
  label: '상품후기',
  url: '/2',
  icon: 'bed'
}, {
  label: '주문내역',
  url: '/users/history/list',
  icon: 'note'
}];
;// CONCATENATED MODULE: ./src/components/SideMenu/common/TitleLine.tsx



const TitleLine_S = {
  TitleLine: external_styled_components_default().div.withConfig({
    displayName: "TitleLine",
    componentId: "sc-1k29l5b-0"
  })(["position:relative;z-index:2;span{font-size:9px;font-weight:bold;letter-spacing:0.05em;margin:15px 0 10px 0;background:#444;color:#fff;line-height:20px;border-radius:10px;padding:0 10px 0 10px;display:inline-block;}&::before{content:'';position:absolute;width:100%;height:1px;background:#444;bottom:19px;left:0;right:0;z-index:-1;}"])
};
function TitleLine({
  text
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(TitleLine_S.TitleLine, {
    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: text
    })
  });
}
;// CONCATENATED MODULE: ./src/components/SideMenu/LeftSide.tsx




/* eslint-disable @next/next/no-img-element */













const LeftSide_S = {
  LeftSide: external_styled_components_default().nav.withConfig({
    displayName: "LeftSide",
    componentId: "u0init-0"
  })(["background-color:#fff;position:fixed;top:0;left:0;height:100vh;width:260px;padding:20px;visibility:", ";z-index:9999;overflow-y:auto;", ""], props => props.openSideMenu && props.directionSwap ? 'visible' : 'hidden', props => props.openSideMenu && props.directionSwap ? (0,external_styled_components_.css)(["transform:translateX(0%);transition:all 0.5s ease;"]) : (0,external_styled_components_.css)(["transform:translateX(-100%);transition:all 0.5s ease;"])),
  Container: external_styled_components_default().div.withConfig({
    displayName: "LeftSide__Container",
    componentId: "u0init-1"
  })(["height:100%;display:flex;flex-direction:column;justify-content:space-between;.side-footer{margin-top:15px;}"]),
  ImageBanner: external_styled_components_default().div.withConfig({
    displayName: "LeftSide__ImageBanner",
    componentId: "u0init-2"
  })(["font-size:0;img{width:100%;object-fit:cover;}"]),
  Top: external_styled_components_default().div.withConfig({
    displayName: "LeftSide__Top",
    componentId: "u0init-3"
  })(["display:flex;justify-content:space-between;margin-top:15px;button{width:48%;padding:0;height:35px;font-size:12px;font-weight:normal;}a{display:inline-block;height:100%;line-height:35px;width:100%;flex:1;}"]),
  Panel: external_styled_components_default().div.withConfig({
    displayName: "LeftSide__Panel",
    componentId: "u0init-4"
  })(["margin-bottom:15px;.wrapper{border:1px solid #eaeaea;display:flex;justify-content:space-between;align-items:center;border-radius:10px;padding:3px;position:relative;width:100px;li{text-align:center;width:50px;color:#555;font-size:14px;}li:nth-child(3){cursor:pointer;}span{position:absolute;background-color:#444;border-radius:10px;padding:2px 0;top:2px;right:3px;width:46px;text-align:center;display:flex;align-items:center;justify-content:center;font-size:13px;color:#fff;cursor:default;", ";transition:all 0.7s ease-in;}}"], ({
    openSideMenu,
    directionSwap
  }) => openSideMenu && directionSwap && (0,external_styled_components_.css)(["transform:translateX(-100%);"])),
  Tap: external_styled_components_default().div.withConfig({
    displayName: "LeftSide__Tap",
    componentId: "u0init-5"
  })(["margin-top:15px;"])
};
function LeftSide({
  directionSwap,
  onClick
}) {
  const {
    action,
    state
  } = (0,AppProvider/* useAppContext */.bp)();
  const router = (0,router_.useRouter)();

  const handleRouter = e => {
    const {
      name
    } = e.currentTarget;
    action.setToggleSideMenu();
    router.push(`/auth/${name}`);
  };

  const handleLogOut = () => {
    utils/* customCookie.remove */.S1.remove('access_token');
    localStorage.removeItem('basket');
    localStorage.removeItem('guest');
    localStorage.removeItem('order');
    return router.push(path/* default.MAIN.path */.Z.MAIN.path);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(LeftSide_S.LeftSide, {
    openSideMenu: state.openSideMenu,
    directionSwap: directionSwap,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(LeftSide_S.Container, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(LeftSide_S.Panel, {
          directionSwap: directionSwap,
          openSideMenu: state.openSideMenu,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "wrapper",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "SHOP"
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: "SHOP"
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              onClick: onClick,
              children: "CART"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(LeftSide_S.ImageBanner, {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "main-logo",
            src: "/images/single-first.jpeg",
            alt: "side_left_main_logo"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(LeftSide_S.Top, {
          children: state.userInfo.idx ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
              black: true,
              name: "login",
              onClick: () => router.push('/users'),
              children: "\uB9C8\uC774\uC1FC\uD551"
            }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
              white: true,
              name: "register",
              onClick: handleLogOut,
              children: "\uB85C\uADF8\uC544\uC6C3"
            })]
          }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
              black: true,
              name: "login",
              onClick: handleRouter,
              children: "\uB85C\uADF8\uC778"
            }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
              white: true,
              name: "register",
              onClick: handleRouter,
              children: "\uD68C\uC6D0\uAC00\uC785"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(TitleLine, {
          text: "MY SHOPPING"
        }), /*#__PURE__*/jsx_runtime_.jsx(QuickIcon, {
          lists: QUICK_ICON_LEFT
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(LeftSide_S.Tap, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(TitleLine, {
            text: "PRODUCT"
          }), /*#__PURE__*/jsx_runtime_.jsx(Category, {})]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "side-footer",
        children: [/*#__PURE__*/jsx_runtime_.jsx(common_Info, {}), /*#__PURE__*/jsx_runtime_.jsx(Copyright, {})]
      })]
    })
  });
}
;
// EXTERNAL MODULE: ./src/hooks/ReactQuery/usePoint.ts
var usePoint = __webpack_require__(8675);
;// CONCATENATED MODULE: ./src/components/SideMenu/common/PointAndCoupon.tsx






const PointAndCoupon_S = {
  PointAndCoupon: external_styled_components_default().div.withConfig({
    displayName: "PointAndCoupon",
    componentId: "sc-93031a-0"
  })(["font-size:13px;margin-bottom:15px;.item{display:flex;align-items:center;justify-content:space-between;padding-bottom:15px;padding-left:5px;&:last-child{padding-bottom:0px;}&__title{color:#333;}&__value{background:#f5f5f5;padding:3px 10px;border-radius:5px;color:#323232;&::after{content:'\uC6D0';}}.coupon{&::after{content:'\uAC1C';}}}"])
};
function PointAndCoupon() {
  const {
    totalUsedPoint,
    totalAccPoint,
    currentPoint
  } = (0,usePoint/* default */.Z)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(PointAndCoupon_S.PointAndCoupon, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
      className: "item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "item__title",
        children: "\uAC00\uC6A9 \uC801\uB9BD\uAE08"
      }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
        className: "item__value",
        children: (0,utils/* PriceComma */.OB)(currentPoint !== null && currentPoint !== void 0 ? currentPoint : 0)
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
      className: "item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "item__title",
        children: "\uC0AC\uC6A9\uB41C \uC801\uB9BD\uAE08"
      }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
        className: "item__value",
        children: (0,utils/* PriceComma */.OB)(totalUsedPoint !== null && totalUsedPoint !== void 0 ? totalUsedPoint : 0)
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
      className: "item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "item__title",
        children: "\uB204\uC801 \uC801\uB9BD\uAE08"
      }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
        className: "item__value",
        children: (0,utils/* PriceComma */.OB)(totalAccPoint !== null && totalAccPoint !== void 0 ? totalAccPoint : 0)
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
      className: "item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "item__title",
        children: "\uCFE0\uD3F0"
      }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
        className: "item__value coupon",
        children: (0,utils/* PriceComma */.OB)(totalAccPoint !== null && totalAccPoint !== void 0 ? totalAccPoint : 0)
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/SideMenu/RightSide.tsx




/* eslint-disable @next/next/no-img-element */









const RightSide_S = {
  RightSide: external_styled_components_default().nav.withConfig({
    displayName: "RightSide",
    componentId: "sc-20ahlm-0"
  })(["position:fixed;height:100vh;top:0;right:0;width:260px;z-index:9999;overflow-y:scroll;visibility:", ";background-color:#fff;padding:20px;", ""], props => props.openSideMenu && props.directionSwap === false ? 'visible' : 'hidden', props => props.openSideMenu && props.directionSwap === false ? (0,external_styled_components_.css)(["transform:translateX(0%);transition:all 0.5s ease;"]) : (0,external_styled_components_.css)(["transform:translateX(200%);transition:all 0.5s ease;"])),
  Container: external_styled_components_default().div.withConfig({
    displayName: "RightSide__Container",
    componentId: "sc-20ahlm-1"
  })(["height:100%;display:flex;flex-direction:column;justify-content:space-between;.side-footer{margin-top:15px;}"]),
  directionSwap: external_styled_components_default().div.withConfig({
    displayName: "RightSide__directionSwap",
    componentId: "sc-20ahlm-2"
  })(["width:100px;border:1px solid red;height:30px;border-radius:10px;"]),
  Panel: external_styled_components_default().div.withConfig({
    displayName: "RightSide__Panel",
    componentId: "sc-20ahlm-3"
  })(["margin-bottom:15px;.wrapper{border:1px solid #eaeaea;display:flex;justify-content:space-between;align-items:center;border-radius:10px;padding:3px;position:relative;width:100px;li{text-align:center;width:50px;color:#555;font-size:14px;}li:nth-child(2){cursor:pointer;}span{position:absolute;background-color:#444;border-radius:10px;padding:2px 0;top:2px;right:3px;width:46px;text-align:center;display:flex;align-items:center;justify-content:center;font-size:13px;color:#fff;cursor:default;", ";transition:all 0.7s ease-in;}}"], ({
    openSideMenu,
    directionSwap
  }) => openSideMenu && directionSwap && (0,external_styled_components_.css)(["transform:translateX(-100%);"])),
  ImageBanner: external_styled_components_default().div.withConfig({
    displayName: "RightSide__ImageBanner",
    componentId: "sc-20ahlm-4"
  })(["font-size:0;margin-bottom:15px;img{width:100%;object-fit:cover;}"]),
  PointList: external_styled_components_default().ul.withConfig({
    displayName: "RightSide__PointList",
    componentId: "sc-20ahlm-5"
  })(["font-size:13px;.item{display:flex;align-items:center;justify-content:space-between;padding-bottom:15px;&:last-child{padding-bottom:0px;}&__title{color:#333;}&__value{background:#f5f5f5;padding:3px 10px;border-radius:5px;color:#323232;&::after{content:'\uC6D0';}}.coupon{&::after{content:'\uAC1C';}}}"])
};
function RightSide({
  directionSwap,
  onClick
}) {
  const {
    state
  } = (0,AppProvider/* useAppContext */.bp)();
  return /*#__PURE__*/jsx_runtime_.jsx(RightSide_S.RightSide, {
    openSideMenu: state.openSideMenu,
    directionSwap: directionSwap,
    children: !directionSwap && /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(RightSide_S.Container, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(RightSide_S.Panel, {
            directionSwap: directionSwap,
            openSideMenu: state.openSideMenu,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "wrapper",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "SHOP"
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                onClick: onClick,
                children: "SHOP"
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: "CART"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(RightSide_S.ImageBanner, {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "main-logo",
              src: "/images/41p61tShGfL._AC_.jpg",
              alt: "side_left_main_logo"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(TitleLine, {
            text: "MY SHOPPING"
          }), /*#__PURE__*/jsx_runtime_.jsx(QuickIcon, {
            lists: QUICK_ICON_RIGHT
          }), /*#__PURE__*/jsx_runtime_.jsx(TitleLine, {
            text: "POINT / COUPON"
          }), /*#__PURE__*/jsx_runtime_.jsx(PointAndCoupon, {})]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "side-footer",
          children: [/*#__PURE__*/jsx_runtime_.jsx(common_Info, {}), /*#__PURE__*/jsx_runtime_.jsx(Copyright, {})]
        })]
      })
    })
  });
}
;
;// CONCATENATED MODULE: ./src/components/Common/DarkBackground.tsx






const DarkBackground_S = {
  DarkBackground: external_styled_components_default().div.withConfig({
    displayName: "DarkBackground",
    componentId: "sc-1rrsiqu-0"
  })(["visibility:hidden;position:fixed;top:0;right:0;left:0;width:100%;height:100%;overflow:hidden;background-color:rgba(0,0,0,0.6);z-index:99;", ""], props => props.active && (0,external_styled_components_.css)(["visibility:visible;"])),
  Close: external_styled_components_default().i.withConfig({
    displayName: "DarkBackground__Close",
    componentId: "sc-1rrsiqu-1"
  })(["display:block;position:fixed;z-index:999999;font-size:0;cursor:pointer;top:15px;", " ", " ", " visibility:", ";svg{color:#fff;width:35px;height:35px;}"], props => props.openSideMenu === false && props.directionSwap && (0,external_styled_components_.css)(["right:-100px;"]), props => props.openSideMenu && props.directionSwap && (0,external_styled_components_.css)(["right:5px;transform:translateX(-50%);transition:all 0.5s ease;"]), props => props.openSideMenu && props.directionSwap === false && (0,external_styled_components_.css)(["left:5px;transform:translateX(50%);transition:all 0.5s ease;"]), props => props.openSideMenu ? 'visible' : 'hidden')
};
function DarkBackground({
  children,
  directionSwap
}) {
  const {
    action,
    state
  } = (0,AppProvider/* useAppContext */.bp)();

  const handleClose = e => {
    const {
      className
    } = e.target;
    const str = className.split('-');

    if (str[0] === 'DarkBackground') {
      action.setToggleSideMenu();
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(DarkBackground_S.DarkBackground, {
    className: "dark-background",
    active: state.openSideMenu,
    onClick: handleClose,
    children: [/*#__PURE__*/jsx_runtime_.jsx(DarkBackground_S.Close, {
      onClick: action.setToggleSideMenu,
      directionSwap: directionSwap,
      openSideMenu: state.openSideMenu,
      children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
        name: "close"
      })
    }), children]
  });
}
;// CONCATENATED MODULE: ./src/components/SideMenu/index.tsx








function SideMenu() {
  const {
    0: directionSwap,
    1: setDirectionSwap
  } = (0,external_react_.useState)(true);
  const {
    state
  } = (0,AppProvider/* useAppContext */.bp)();
  const handler = (0,external_react_.useCallback)(() => {
    setDirectionSwap(!directionSwap);
  }, [directionSwap]);
  (0,external_react_.useEffect)(() => {
    if (!state.openSideMenu) {
      setDirectionSwap(true);
    }
  }, [state.openSideMenu]);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(DarkBackground, {
      directionSwap: directionSwap,
      children: [/*#__PURE__*/jsx_runtime_.jsx(LeftSide, {
        onClick: handler,
        directionSwap: directionSwap
      }), /*#__PURE__*/jsx_runtime_.jsx(RightSide, {
        onClick: handler,
        directionSwap: directionSwap
      })]
    })
  });
}
;
;// CONCATENATED MODULE: ./src/components/Layout/Header/index.tsx









const Header_S = {
  Header: external_styled_components_default().header.withConfig({
    displayName: "Header",
    componentId: "i7dlrs-0"
  })(["", ""], props => props.ScrollActive && (0,external_styled_components_.css)(["margin-bottom:50px;"]))
};
function Header() {
  const {
    0: scrollActive,
    1: setScrollActive
  } = (0,external_react_.useState)(false);
  const {
    scrollY
  } = useScroll();
  (0,external_react_.useEffect)(() => {
    if (scrollY > 80) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  }, [scrollY]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Header_S.Header, {
    ScrollActive: scrollActive,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Menu, {
      ScrollActive: scrollActive
    }), /*#__PURE__*/jsx_runtime_.jsx(MainLogo, {}), /*#__PURE__*/jsx_runtime_.jsx(Nav, {
      ScrollActive: scrollActive
    }), /*#__PURE__*/jsx_runtime_.jsx(SideMenu, {})]
  });
}
;
;// CONCATENATED MODULE: ./src/components/Common/QuickScroll.tsx





const QuickScroll_S = {
  Wrapper: external_styled_components_default().div.withConfig({
    displayName: "QuickScroll__Wrapper",
    componentId: "sc-1cxbw9d-0"
  })(["position:fixed;bottom:5%;right:-10%;font-size:0px;cursor:pointer;", " ul{li{svg{width:30px;height:30px;&:hover{opacity:0.7;color:rgb(59,59,59)}}}}"], props => props.scrollActive && `
      right: 3%;
      transition: all .5s ease;
    `)
};

const QuickScroll = ({
  className
}) => {
  const {
    0: scrollActive,
    1: setScrollActive
  } = (0,external_react_.useState)(false);
  const {
    scrollY
  } = useScroll();
  (0,external_react_.useEffect)(() => {
    if (scrollY > 100) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx(QuickScroll_S.Wrapper, {
    className: className,
    scrollActive: scrollActive,
    children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
      children: /*#__PURE__*/jsx_runtime_.jsx("li", {
        onClick: scrollToTop,
        children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
          name: "arrowTop"
        })
      })
    })
  });
};

/* harmony default export */ var Common_QuickScroll = (QuickScroll);
;// CONCATENATED MODULE: ./src/components/Layout/index.tsx









const Layout_S = {
  Layout: external_styled_components_default().div.withConfig({
    displayName: "Layout",
    componentId: "nova0-0"
  })(["height:calc(100vh - 40px);display:flex;flex-direction:column;justify-content:space-between;.layout-wrap{flex:1;display:", ";flex-direction:column;main{flex:1;}}"], props => props.disable ? 'block' : 'flex')
};
function Layout(props) {
  const router = (0,router_.useRouter)();
  const {
    0: disable,
    1: setDisable
  } = (0,external_react_.useState)(false);
  const {
    action,
    state
  } = (0,AppProvider/* useAppContext */.bp)();
  const {
    isFooter,
    isHeader
  } = state.layout;
  (0,external_react_.useEffect)(() => {
    const result = router.asPath.includes('admin');

    if (result) {
      setDisable(true);
      action.setIsHeader(false);
      action.setIsFooter(false);
    }
  }, [router, action]);
  const env = "production";
  const name = "production";
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout_S.Layout, {
    disable: disable,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "layout-wrap",
      id: "soo",
      children: [isHeader && /*#__PURE__*/jsx_runtime_.jsx(Header, {}), props.children]
    }), isFooter && /*#__PURE__*/jsx_runtime_.jsx(Layout_Footer, {
      className: "footer"
    }), /*#__PURE__*/jsx_runtime_.jsx(Common_QuickScroll, {})]
  });
}
;
;// CONCATENATED MODULE: external "styled-normalize"
var external_styled_normalize_namespaceObject = require("styled-normalize");;
;// CONCATENATED MODULE: ./src/styles/global-styles.ts.ts


const GlobalStyle = /*#__PURE__*/external_styled_components_.createGlobalStyle`
  ${external_styled_normalize_namespaceObject.normalize}
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    border: 0;
    vertical-align: baseline;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', 'sans-serif' ;
  }

  ol,
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  i{
    font-size: 0;
  }
  input:focus {
    outline: none;
  }
  textarea:focus {
    outline: none;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  button {
    border: 0;
  }

  blockquote,
  q {
    quotes: none;
  }

  * {
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  }

  body{
    padding-top: 40px;
  }
`;
;// CONCATENATED MODULE: ./src/styles/Media.ts

const sizes = {
  desktop: 1200,
  laptop: 1000,
  tablet: 768,
  mobile: 580
};
/* harmony default export */ var Media = (Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => (0,external_styled_components_.css)(["@media (max-width:", "px){", ";}"], sizes[label], (0,external_styled_components_.css)(...args));

  return acc;
}, {}));
;// CONCATENATED MODULE: ./src/styles/Theme.tsx


function Theme_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Theme_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Theme_ownKeys(Object(source), true).forEach(function (key) { Theme_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Theme_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Theme_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Theme = ({
  children
}) => /*#__PURE__*/jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
  theme: Theme_objectSpread({}, Media),
  children: children
});

/* harmony default export */ var styles_Theme = (Theme);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
;// CONCATENATED MODULE: external "react-query/devtools"
var devtools_namespaceObject = require("react-query/devtools");;
// EXTERNAL MODULE: external "next-cookies"
var external_next_cookies_ = __webpack_require__(2948);
var external_next_cookies_default = /*#__PURE__*/__webpack_require__.n(external_next_cookies_);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9722);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
// EXTERNAL MODULE: ./src/context/ReviewProvider.tsx + 1 modules
var ReviewProvider = __webpack_require__(6172);
// EXTERNAL MODULE: ./src/context/OrderProvider.tsx + 1 modules
var OrderProvider = __webpack_require__(1098);
// EXTERNAL MODULE: ./src/context/AdminProvider.tsx + 1 modules
var AdminProvider = __webpack_require__(1160);
// EXTERNAL MODULE: external "@paypal/react-paypal-js"
var react_paypal_js_ = __webpack_require__(6674);
// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__(3308);
;// CONCATENATED MODULE: ./src/pages/_app.tsx




function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














// import Slide from '@material-ui/core/Slide';
function App(props) {
  function queryErrorHandler(error) {
    alert('잠시후 다시 시도해주세요');
  }

  const queryClient = new external_react_query_.QueryClient({
    defaultOptions: {
      mutations: {
        onError: queryErrorHandler
      }
    }
  }); // useApp(props.pageProps.userId);

  const initialOptions = {
    "client-id": "ATUX9jNutWx5jTCGb4C8V4B8MUgKvTJ-ZadgjUqbNLDbcxM4S0cDT98Sqjd_z0mJTmIqES_erq3MSROr",
    currency: "USD",
    intent: "capture"
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(GlobalStyle, {}), /*#__PURE__*/jsx_runtime_.jsx(external_notistack_.SnackbarProvider, {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center'
      },
      autoHideDuration: 1500,
      children: /*#__PURE__*/jsx_runtime_.jsx(AppProvider/* default */.ZP, {
        AppProps: props,
        children: /*#__PURE__*/jsx_runtime_.jsx(AdminProvider/* default */.Z, {
          children: /*#__PURE__*/jsx_runtime_.jsx(OrderProvider/* default */.ZP, {
            value: props,
            children: /*#__PURE__*/jsx_runtime_.jsx(ReviewProvider/* default */.Z, {
              value: props,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_query_.QueryClientProvider, {
                client: queryClient,
                children: [/*#__PURE__*/jsx_runtime_.jsx(styles_Theme, {
                  children: /*#__PURE__*/jsx_runtime_.jsx(Layout, {
                    children: /*#__PURE__*/jsx_runtime_.jsx(react_paypal_js_.PayPalScriptProvider, {
                      options: initialOptions,
                      deferLoading: true,
                      children: /*#__PURE__*/jsx_runtime_.jsx(props.Component, _app_objectSpread({}, props.pageProps))
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(devtools_namespaceObject.ReactQueryDevtools, {
                  initialIsOpen: false
                })]
              })
            })
          })
        })
      })
    })]
  });
}

App.getInitialProps = async context => {
  const {
    ctx,
    Component
  } = context;

  if (ctx.req) {} else {}

  const {
    access_token
  } = external_next_cookies_default()(ctx);
  const strToken = access_token && access_token.split('Bearer ')[1];
  const decodedJwt = external_jsonwebtoken_default().decode(strToken);
  const userId = decodedJwt ? decodedJwt.userId : '';
  const idx = decodedJwt ? decodedJwt.id : '';
  const userInfo = {
    userId,
    idx
  };
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps = _app_objectSpread(_app_objectSpread({}, pageProps), {}, {
    userInfo
  }); //  if(access_token){
  //   ctx.res.writeHead(307, { Location: '/auth/register' })
  //   ctx.res.end()
  // }
  // axios.defaults.headers['ㅁㄴㅇㅁㄴㅇ'] = access_token;
  // if(access_token){
  //   ctx.res.writeHead(307, { Location: '/' })
  //   ctx.res.end()
  // }
  // console.log('scr', document?.cookie);
  //  console.log(Object.keys(ctx));
  // _app에서 props 추가 (모든 컴포넌트에서 공통적으로 사용할 값 추가)
  // const cookie = ctx.isServer ? ctx.req.headers.cookie : '';
  // if (ctx.isServer && cookie) { 
  //   Axios.defaults.headers.Cookie = cookie;
  // }

  return {
    userInfo
  };
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

/***/ 9639:
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

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

/***/ 2585:
/***/ (function(module) {

"use strict";
module.exports = require("react-query");;

/***/ }),

/***/ 1067:
/***/ (function(module) {

"use strict";
module.exports = require("react-tooltip");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5675,8703,3803,643,8740,8761,693,6155,1098,9770,6172,685,4633], function() { return __webpack_exec__(9598); });
module.exports = __webpack_exports__;

})();