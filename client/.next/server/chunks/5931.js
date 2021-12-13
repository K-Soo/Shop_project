exports.id = 5931;
exports.ids = [5931];
exports.modules = {

/***/ 5931:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ AdminContainer; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/context/AdminProvider.tsx + 1 modules
var AdminProvider = __webpack_require__(1160);
;// CONCATENATED MODULE: ./src/components/Admin/Section/index.tsx




function Section({
  children
}) {
  const {
    state
  } = (0,AdminProvider/* useAdminContext */.O)();
  return /*#__PURE__*/jsx_runtime_.jsx(SectionStyle, {
    isWhite: state.isWhite,
    children: children
  });
}

Section.Header = function Header({
  children
}) {
  const {
    state
  } = (0,AdminProvider/* useAdminContext */.O)();
  return /*#__PURE__*/jsx_runtime_.jsx(HeaderStyle, {
    isWhite: state.isWhite,
    children: children
  });
};

Section.Side = function Side({
  children
}) {
  const {
    state
  } = (0,AdminProvider/* useAdminContext */.O)();
  return /*#__PURE__*/jsx_runtime_.jsx(SideStyle, {
    isWhite: state.isWhite,
    children: children
  });
};

Section.Main = function Main({
  children
}) {
  const {
    state
  } = (0,AdminProvider/* useAdminContext */.O)();
  return /*#__PURE__*/jsx_runtime_.jsx(MainStyle, {
    isWhite: state.isWhite,
    children: children
  });
};

const SectionStyle = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "Section__SectionStyle",
  componentId: "bfegq-0"
})(["height:calc(100vh - 40px);", ""], ({
  isWhite
}) => !isWhite && (0,external_styled_components_.css)(["*{color:#fff !important;transition:color 0.3s ease;}"]));
const HeaderStyle = /*#__PURE__*/external_styled_components_default().header.withConfig({
  displayName: "Section__HeaderStyle",
  componentId: "bfegq-1"
})(["position:fixed;top:0;width:100%;height:40px;background-color:", ";transition:background-color 0.3s ease;box-shadow:0 2px 5px rgb(0 0 0 / 5%);"], props => props.isWhite ? '#fff' : '#1F2A40');
const MainStyle = /*#__PURE__*/external_styled_components_default().main.withConfig({
  displayName: "Section__MainStyle",
  componentId: "bfegq-2"
})(["width:calc(100% - 250px);margin-left:250px;height:100%;padding:20px;background-color:", ";transition:background-color 0.3s ease;"], props => props.isWhite ? '#F0F3F7' : '#131C2D');
const SideStyle = /*#__PURE__*/external_styled_components_default().aside.withConfig({
  displayName: "Section__SideStyle",
  componentId: "bfegq-3"
})(["position:fixed;width:250px;height:100%;background-color:", ";transition:background-color 0.3s ease;z-index:9999;border:solid #dee2e6;border-width:1px 1px 0 0;", ""], props => props.isWhite ? '#fff' : '#1F2A40', ({
  isWhite
}) => !isWhite && (0,external_styled_components_.css)(["border:none;*{color:#fff !important;transition:color 0.3s ease;border:none;}"]));
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__(3595);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./src/components/Admin/Aside/index.tsx








const category = [{
  CategoryIcon: 'home',
  '홈': []
}, {
  CategoryIcon: 'plus',
  '상품정보': [{
    label: '상품추가',
    url: '/admin/products/create',
    target: '상품정보'
  }]
}, {
  CategoryIcon: 'cartAdd',
  '판매관리': [{
    label: '상품리스트',
    url: '/admin/products/list',
    target: '판매관리'
  }]
}, {
  CategoryIcon: 'menu2',
  '공지사항': [{
    label: '공지사항 관리',
    url: '/admin/notice',
    target: '공지사항'
  }]
}];
const S = {
  Aside: external_styled_components_default().div.withConfig({
    displayName: "Aside",
    componentId: "sc-7tniga-0"
  })(["height:100%;width:100%;i{font-size:0;}.item{min-height:50px;display:flex;padding:15px 10px 15px 15px;white-space:nowrap;cursor:pointer;&__main-icon{font-size:0;svg{color:#475669;}}.lists-category{margin-left:20px;flex:1;flex-direction:column;display:flex;pointer-events:none;&__title{display:flex;align-items:flex-end;font-size:14px;justify-content:space-between;cursor:pointer;height:20px;color:#475669;font-weight:600;&--icon{transform:rotate(180deg);min-height:22px;svg{width:14px;height:14px;font-size:0;}&[data-active=true]{transform:rotate(0deg);transition:all 0.3s ease;}}}&__inner-list{visibility:hidden;opacity:0;pointer-events:all;height:0px;li{width:100%;margin-bottom:5px;border-radius:5px;font-size:13px;color:#444;a{padding:5px 0;padding-left:5px;display:inline-block;width:100%;}&:hover{background-color:", ";color:#000;opacity:1;}}&[data-active=true]{margin-top:10px;visibility:visible;height:100%;opacity:1;transition:all 0.3s ease;}}}}"], props => props.isWhite ? '#eff1f3' : '#131C2D')
};
function Aside() {
  const {
    0: nameValue,
    1: setNameValue
  } = (0,external_react_.useState)('');
  const router = (0,router_.useRouter)();
  const {
    state
  } = (0,AdminProvider/* useAdminContext */.O)();

  const handleList = e => {
    const {
      name
    } = e.target.dataset;

    if (router.asPath !== '/admin' && name === '홈') {
      router.push('/admin');
    }

    if (name !== '홈') setNameValue(name);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(S.Aside, {
    isWhite: state.isWhite,
    children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
      children: category.map(d => {
        var _Object$entries, _Object$entries$, _Object$entries2, _Object$entries2$, _Object$entries3, _Object$entries3$, _Object$entries4, _Object$entries4$, _Object$entries5, _Object$entries5$, _Object$entries6, _Object$entries6$, _Object$entries7, _Object$entries7$;

        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          className: "item",
          "data-name": (_Object$entries = Object.entries(d)) === null || _Object$entries === void 0 ? void 0 : (_Object$entries$ = _Object$entries[1]) === null || _Object$entries$ === void 0 ? void 0 : _Object$entries$[0],
          onClick: handleList,
          children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "item__main-icon",
            children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
              name: d.CategoryIcon
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "lists-category",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "lists-category__title",
              children: [(_Object$entries2 = Object.entries(d)) === null || _Object$entries2 === void 0 ? void 0 : (_Object$entries2$ = _Object$entries2[1]) === null || _Object$entries2$ === void 0 ? void 0 : _Object$entries2$[0], ((_Object$entries3 = Object.entries(d)) === null || _Object$entries3 === void 0 ? void 0 : (_Object$entries3$ = _Object$entries3[1]) === null || _Object$entries3$ === void 0 ? void 0 : _Object$entries3$[0]) !== '홈' && /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "lists-category__title--icon",
                "data-active": ((_Object$entries4 = Object.entries(d)) === null || _Object$entries4 === void 0 ? void 0 : (_Object$entries4$ = _Object$entries4[1]) === null || _Object$entries4$ === void 0 ? void 0 : _Object$entries4$[0]) === nameValue,
                children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
                  name: "arrowNoTailBottom"
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
              className: "lists-category__inner-list",
              "data-active": ((_Object$entries5 = Object.entries(d)) === null || _Object$entries5 === void 0 ? void 0 : (_Object$entries5$ = _Object$entries5[1]) === null || _Object$entries5$ === void 0 ? void 0 : _Object$entries5$[0]) === nameValue,
              children: ((_Object$entries6 = Object.entries(d)) === null || _Object$entries6 === void 0 ? void 0 : (_Object$entries6$ = _Object$entries6[1]) === null || _Object$entries6$ === void 0 ? void 0 : _Object$entries6$[1].length) && ((_Object$entries7 = Object.entries(d)) === null || _Object$entries7 === void 0 ? void 0 : (_Object$entries7$ = _Object$entries7[1]) === null || _Object$entries7$ === void 0 ? void 0 : _Object$entries7$[1].map(d => /*#__PURE__*/jsx_runtime_.jsx("li", {
                "data-name": d.target,
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: d.url,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: d.label
                  })
                })
              }, d.url)))
            })]
          })]
        }, d.CategoryIcon);
      })
    })
  });
}
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/constants/path.ts
var path = __webpack_require__(643);
// EXTERNAL MODULE: ./src/components/style/Title.tsx
var Title = __webpack_require__(6930);
;// CONCATENATED MODULE: ./src/components/Admin/AdminNav/UserModal.tsx






const UserModal_S = {
  UserModal: external_styled_components_default().div.withConfig({
    displayName: "UserModal",
    componentId: "sc-1j4ta8s-0"
  })(["position:absolute;display:", ";background:#fff;top:40px;right:20px;height:100px;width:240px;padding:20px;box-shadow:0 1px 5px 0 rgb(0 0 0 / 13%);.title-box{", "{font-size:16px;}}.content-box{font-size:14px;color:crimson;cursor:pointer;.list{&__item{padding:5px 0;:hover{background-color:#eff1f3;}}}}", ""], props => props.openUserModal ? 'block' : 'none', Title/* default */.Z, ({
    isWhite
  }) => isWhite ? (0,external_styled_components_.css)([""]) : (0,external_styled_components_.css)(["color:#fff;background-color:#1F2A40;border:1px solid #131C2D;.content-box{font-size:14px;cursor:pointer;.list{&__item{padding:5px 0;color:#999 !important;:hover{background-color:#131C2D;}}}}"]))
};
function UserModal({
  openUserModal,
  handleLogout
}) {
  const {
    state
  } = (0,AdminProvider/* useAdminContext */.O)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(UserModal_S.UserModal, {
    openUserModal: openUserModal,
    isWhite: state.isWhite,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "title-box",
      children: /*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
        level: 3,
        children: "\uACC4\uC815\uC815\uBCF4"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "content-box",
      children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: "list",
        children: /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "list__item",
          onClick: handleLogout,
          children: "\uB85C\uADF8\uC544\uC6C3"
        })
      })
    })]
  });
}
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(3803);
;// CONCATENATED MODULE: ./src/components/Admin/AdminNav/index.tsx












const AdminNav_S = {
  AdminNav: external_styled_components_default().div.withConfig({
    displayName: "AdminNav",
    componentId: "nfpvci-0"
  })(["height:100%;display:flex;justify-content:space-between;align-items:center;padding:0 20px;", ""], props => props.theme.mobile`
      padding: 0 10px 0 15px;
    `),
  UserInfo: external_styled_components_default().div.withConfig({
    displayName: "AdminNav__UserInfo",
    componentId: "nfpvci-1"
  })(["display:flex;align-items:center;height:100%;li{display:flex;align-items:center;justify-content:center;height:100%;cursor:pointer;&:hover{background:#eff1f3;background:", ";transition:background 0.3s ease;}}.user{padding:0 10px;position:relative;min-width:200px;display:flex;justify-content:space-between;&__text{flex:1;text-align:center;pointer-events:none;}svg{margin-left:5px;width:14px;height:14px;transform:", ";transition:transform 0.1s ease;}}.config{width:40px;border:solid #eff1f3;border:", ";transition:border 0.3s ease;border-width:0 1px 0 1px;}svg{color:rgb(112,112,112);pointer-events:none;}"], props => props.isWhite ? '#eff1f3' : '#131C2D', props => props.openUserModal ? 'rotate(0deg)' : 'rotate(180deg)', props => props.isWhite ? 'solid #eff1f3' : 'solid #131C2D'),
  Logo: external_styled_components_default().ul.withConfig({
    displayName: "AdminNav__Logo",
    componentId: "nfpvci-2"
  })(["font-size:0;height:100%;img{height:auto;object-fit:contain;}"])
};
function AdminNav() {
  const {
    state,
    action
  } = (0,AdminProvider/* useAdminContext */.O)();
  const userName = 'admin';
  const {
    0: openUserModal,
    1: setOpenUserModal
  } = (0,external_react_.useState)(false);
  const {
    0: openConfigModal,
    1: setOpenConfigModal
  } = (0,external_react_.useState)(false);
  const router = (0,router_.useRouter)();

  const handleUserModal = () => {
    if (openConfigModal) setOpenConfigModal(!openConfigModal);
    setOpenUserModal(!openUserModal);
  };

  const handleConfigModal = () => {
    if (openUserModal) setOpenUserModal(!openUserModal);
    setOpenConfigModal(!openConfigModal);
    ;
  };

  const handleLogout = () => {
    utils/* customCookie.remove */.S1.remove('access_token_a');
    router.push('/admin/login');
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(AdminNav_S.AdminNav, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(AdminNav_S.Logo, {
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
    }), /*#__PURE__*/jsx_runtime_.jsx(AdminNav_S.UserInfo, {
      openUserModal: openUserModal,
      isWhite: state.isWhite,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        className: "user",
        onClick: handleUserModal,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "user__text",
          children: userName
        }), /*#__PURE__*/jsx_runtime_.jsx("i", {
          children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
            name: "arrowNoTailBottom"
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(UserModal, {
      openUserModal: openUserModal,
      handleLogout: handleLogout
    })]
  });
}
// EXTERNAL MODULE: ./src/context/AppProvider.tsx + 1 modules
var AppProvider = __webpack_require__(693);
;// CONCATENATED MODULE: ./src/containers/AdminContainer.tsx









const AdminContainer_S = {
  AdminContainer: external_styled_components_default().div.withConfig({
    displayName: "AdminContainer",
    componentId: "sc-8r3qb1-0"
  })(["margin:0 auto;"])
};
function AdminContainer({
  children
}) {
  const router = (0,router_.useRouter)();
  const {
    state: {
      userInfo
    }
  } = (0,AppProvider/* useAppContext */.bp)();
  return /*#__PURE__*/jsx_runtime_.jsx(AdminContainer_S.AdminContainer, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Section, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Section.Header, {
        children: /*#__PURE__*/jsx_runtime_.jsx(AdminNav, {})
      }), /*#__PURE__*/jsx_runtime_.jsx(Section.Side, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Aside, {})
      }), /*#__PURE__*/jsx_runtime_.jsx(Section.Main, {
        children: children
      })]
    })
  });
}
;

/***/ })

};
;