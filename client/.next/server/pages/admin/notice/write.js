(function() {
var exports = {};
exports.id = 9039;
exports.ids = [9039];
exports.modules = {

/***/ 8531:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ NoticeControllers; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var context_AdminProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1160);




const S = {
  NoticeControllers: styled_components__WEBPACK_IMPORTED_MODULE_2___default().section.withConfig({
    displayName: "NoticeControllers",
    componentId: "q7outz-0"
  })(["height:100%;width:100%;background-color:", ";border-radius:5px;padding:20px;"], props => props.isWhite ? '#FFF' : '#1F2A40')
};
function NoticeControllers({
  children
}) {
  const {
    state
  } = (0,context_AdminProvider__WEBPACK_IMPORTED_MODULE_3__/* .useAdminContext */ .O)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(S.NoticeControllers, {
    isWhite: state.isWhite,
    children: children
  });
}

/***/ }),

/***/ 4193:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ NoticeWritePage; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "draft-js"
var external_draft_js_ = __webpack_require__(9379);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
// EXTERNAL MODULE: external "draftjs-to-html"
var external_draftjs_to_html_ = __webpack_require__(8439);
var external_draftjs_to_html_default = /*#__PURE__*/__webpack_require__.n(external_draftjs_to_html_);
// EXTERNAL MODULE: ./src/components/style/Input.tsx
var Input = __webpack_require__(8847);
// EXTERNAL MODULE: ./src/components/style/Button.tsx
var Button = __webpack_require__(8761);
// EXTERNAL MODULE: ./src/api/index.ts
var api = __webpack_require__(8740);
// EXTERNAL MODULE: ./src/constants/path.ts
var path = __webpack_require__(643);
;// CONCATENATED MODULE: ./src/components/Admin/NoticeControllers/Write.tsx













const Editor = dynamic_default()(async () => {
  const mod = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6441, 23));
  return mod.Editor;
}, {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6441)],
    modules: ["../components/Admin/NoticeControllers/Write.tsx -> " + "react-draft-wysiwyg"]
  }
});
const S = {
  Write: external_styled_components_default().div.withConfig({
    displayName: "Write",
    componentId: "sc-5mbvmd-0"
  })(["display:flex;flex-direction:column;form{display:flex;flex-direction:column;justify-content:space-between;flex:1;}height:100%;.editor{height:500px;border:1px solid #f1f1f1 !important;padding:5px !important;border-radius:2px !important;}"]),
  Title: external_styled_components_default().div.withConfig({
    displayName: "Write__Title",
    componentId: "sc-5mbvmd-1"
  })(["display:flex;margin-bottom:15px;align-items:center;label{min-width:50px;}input{height:30px;}"]),
  NoticeType: external_styled_components_default().div.withConfig({
    displayName: "Write__NoticeType",
    componentId: "sc-5mbvmd-2"
  })(["margin-bottom:15px;p{min-width:50px;}input{margin:0 9px 0 3px;}display:flex;"]),
  ButtonBox: external_styled_components_default().div.withConfig({
    displayName: "Write__ButtonBox",
    componentId: "sc-5mbvmd-3"
  })(["margin-top:15px;display:flex;justify-content:center;button{height:40px;width:400px;}"])
};
function Write() {
  const {
    0: editorState,
    1: setEditorState
  } = (0,external_react_.useState)(external_draft_js_.EditorState.createEmpty());
  const {
    0: titleText,
    1: setTitleText
  } = (0,external_react_.useState)('');
  const {
    0: textLength,
    1: setTextLength
  } = (0,external_react_.useState)(0);
  const {
    0: noticeType,
    1: setNoticeType
  } = (0,external_react_.useState)('notice');
  const titleRef = (0,external_react_.useRef)(null);
  const router = (0,router_.useRouter)();
  const editorToHtml = external_draftjs_to_html_default()((0,external_draft_js_.convertToRaw)(editorState.getCurrentContent()));
  (0,external_react_.useEffect)(() => {
    const target = (0,external_draft_js_.convertToRaw)(editorState.getCurrentContent()).blocks; // 문자열 길이

    const result = target.reduce((acc, cur) => acc + cur.text.length, 0);
    setTextLength(result);
  }, [editorState]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (titleText.length < 10 || titleText.length > 30) {
      alert('제목은 10글자이상 30글자이내 입력해주세요.');
      return titleRef.current.focus();
    }

    if (textLength < 10) return alert('내용을 10글자 이상 입력해주세요.');

    if (!confirm("등록하시겠습니까?")) {
      return;
    } else {
      try {
        const obj = {
          title: titleText,
          type: noticeType,
          content: editorToHtml
        };
        const res = await api/* Post.createNotice */.SO.createNotice(obj);

        if (res.success) {
          alert('등록이 완료되었습니다.');
          router.push(path/* default.ADMIN_NOTICE.path */.Z.ADMIN_NOTICE.path);
        }
      } catch (error) {
        console.log('error: ', error);
        alert('잠시후 다시시도해주세요');
      }
    }
  };

  const handleChange = e => {
    const {
      value
    } = e.target;
    setTitleText(value);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.Write, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(S.Title, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: "notice-title",
        children: "\uC81C\uBAA9"
      }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
        id: "notice-title",
        onChange: handleChange,
        refValue: titleRef
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.NoticeType, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\uD0C0\uC785"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "notice-title",
          children: "\uACF5\uC9C0"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "radio",
          name: "radio",
          value: "notice",
          onChange: e => setNoticeType(e.target.value),
          defaultChecked: true
        }), /*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "notice-title",
          children: "\uC77C\uBC18"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "radio",
          name: "radio",
          value: "normal",
          onChange: e => setNoticeType(e.target.value)
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Editor, {
        wrapperClassName: "wrapper-class",
        editorClassName: "editor",
        toolbarClassName: "toolbar-class",
        toolbar: {
          inline: {
            inDropdown: false
          },
          list: {
            inDropdown: false
          },
          textAlign: {
            inDropdown: false
          },
          link: {
            inDropdown: false
          },
          history: {
            inDropdown: false
          }
        },
        placeholder: "\uB0B4\uC6A9\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694.",
        localization: {
          locale: 'ko'
        },
        editorState: editorState,
        onEditorStateChange: editorState => setEditorState(editorState)
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.ButtonBox, {
        className: "button-box",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          white: true,
          type: "submit",
          children: "\uB4F1\uB85D"
        }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          black: true,
          onClick: () => router.back(),
          children: "\uCDE8\uC18C"
        })]
      })]
    })]
  });
}
// EXTERNAL MODULE: ./src/components/Admin/NoticeControllers/index.tsx
var NoticeControllers = __webpack_require__(8531);
// EXTERNAL MODULE: ./src/containers/AdminContainer.tsx + 4 modules
var AdminContainer = __webpack_require__(5931);
;// CONCATENATED MODULE: ./src/pages/admin/notice/write.tsx








function NoticeWritePage() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\uACF5\uC9C0\uC0AC\uD56D | \uAE00\uC4F0\uAE30"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "\uACF5\uC9C0\uC0AC\uD56D \uAE00\uC4F0\uAE30"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(AdminContainer/* default */.Z, {
      children: /*#__PURE__*/jsx_runtime_.jsx(NoticeControllers/* default */.Z, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Write, {})
      })
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

/***/ 9379:
/***/ (function(module) {

"use strict";
module.exports = require("draft-js");;

/***/ }),

/***/ 8439:
/***/ (function(module) {

"use strict";
module.exports = require("draftjs-to-html");;

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

/***/ 9639:
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

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

/***/ 6441:
/***/ (function(module) {

"use strict";
module.exports = require("react-draft-wysiwyg");;

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5675,8703,6930,3803,643,8740,8761,693,8847,6155,5931], function() { return __webpack_exec__(4193); });
module.exports = __webpack_exports__;

})();