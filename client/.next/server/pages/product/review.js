(function() {
var exports = {};
exports.id = 1295;
exports.ids = [1295];
exports.modules = {

/***/ 9855:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ReviewPage; }
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
// EXTERNAL MODULE: ./src/containers/MainContainer.tsx
var MainContainer = __webpack_require__(9490);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/components/Common/PageTitle.tsx
var PageTitle = __webpack_require__(6908);
// EXTERNAL MODULE: ./src/context/ReviewProvider.tsx + 1 modules
var ReviewProvider = __webpack_require__(6172);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/components/style/Button.tsx
var Button = __webpack_require__(8761);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(3803);
;// CONCATENATED MODULE: ./src/components/Review/ProductInfo.tsx









const S = {
  ProductInfo: external_styled_components_default().div.withConfig({
    displayName: "ProductInfo",
    componentId: "sc-1vmdwc8-0"
  })(["border:3px solid #f5f5f5;padding:10px;font-size:12px;.item{display:flex;.img-box{font-size:0;}.info{flex:1;display:flex;flex-direction:column;justify-content:space-between;padding-left:15px;&__desc{p:nth-child(1){color:#666;}p:nth-child(2){padding-top:1px;font-size:14px;}p:nth-child(3){padding-top:5px;color:#912b45;font-weight:600;}}&__button-box{display:flex;button{height:25px;font-size:12px;max-width:80px}}}}"])
};
function ProductInfo({}) {
  const {
    state: {
      product
    }
  } = (0,ReviewProvider/* useReviewContext */.A)();
  return /*#__PURE__*/jsx_runtime_.jsx(S.ProductInfo, {
    children: product.map(d => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "img-box",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: d.product_type + "/" + d.seq,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "img-box",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                src: d.imageUrl[0].url,
                alt: "Picture of the author",
                width: 65,
                height: 80
              })
            })
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "info",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "info__desc",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: d.category
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: d.name
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [(0,utils/* PriceComma */.OB)(d.consumer_price), "\uC6D0"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "info__button-box",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
            white: true,
            children: "\uC0C1\uD488\uC815\uBCF4"
          }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
            white: true,
            children: "\uC0C1\uD488\uC815\uBCF4"
          }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
            white: true,
            children: "\uC0C1\uD488\uC815\uBCF4"
          })]
        })]
      })]
    }, d._id))
  });
}
// EXTERNAL MODULE: external "draft-js"
var external_draft_js_ = __webpack_require__(9379);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
// EXTERNAL MODULE: external "draftjs-to-html"
var external_draftjs_to_html_ = __webpack_require__(8439);
var external_draftjs_to_html_default = /*#__PURE__*/__webpack_require__.n(external_draftjs_to_html_);
// EXTERNAL MODULE: ./src/context/AppProvider.tsx + 1 modules
var AppProvider = __webpack_require__(693);
// EXTERNAL MODULE: ./src/api/index.ts
var api = __webpack_require__(8740);
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__(3595);
;// CONCATENATED MODULE: ./src/components/style/Rate.tsx





const Rate_S = {
  Rate: external_styled_components_default().label.withConfig({
    displayName: "Rate",
    componentId: "sc-1p52yz2-0"
  })(["display:flex;align-items:flex-end;&::after{content:", ";padding-left:5px;}i{display:inline-block;font-size:0;}input[type='radio']{display:none;}"], ({
    text
  }) => `'${text}'`)
};
function Rate({
  name,
  onClick,
  checked,
  value,
  text,
  defaultChecked,
  defaultValue
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Rate_S.Rate, {
    text: text,
    children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
      type: "radio",
      name: name,
      onClick: onClick,
      value: value,
      defaultChecked: defaultChecked,
      defaultValue: defaultValue
    }), checked ? /*#__PURE__*/jsx_runtime_.jsx("i", {
      className: "check",
      children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
        name: "circleCheck",
        style: {
          color: '#8c4153'
        }
      })
    }) : /*#__PURE__*/jsx_runtime_.jsx("i", {
      className: "plus",
      children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
        name: "circlePlus"
      })
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/Review/Form.tsx


 // import { Editor } from 'react-draft-wysiwyg';












const Editor = dynamic_default()(async () => {
  const mod = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6441, 23));
  return mod.Editor;
}, {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6441)],
    modules: ["../components/Review/Form.tsx -> " + "react-draft-wysiwyg"]
  }
}); // const Editor = dynamic(() => import('react-draft-wysiwyg').then(mod => mod.Editor)) as Editor;

const Form_S = {
  Form: external_styled_components_default().div.withConfig({
    displayName: "Form",
    componentId: "sc-1rvpkhh-0"
  })(["margin:30px auto 0;.editor{height:300px !important;border:1px solid #f1f1f1 !important;padding:5px !important;border-radius:2px !important;}"]),
  RateBox: external_styled_components_default().div.withConfig({
    displayName: "Form__RateBox",
    componentId: "sc-1rvpkhh-1"
  })(["display:flex;align-items:center;border:solid #f1f1f1;border-width:1px 0;padding:20px 0;margin-bottom:15px;p{margin-right:50px;}label{margin-right:20px;}label:last-child{margin:0;}"]),
  ImagBox: external_styled_components_default().div.withConfig({
    displayName: "Form__ImagBox",
    componentId: "sc-1rvpkhh-2"
  })([""]),
  ButtonBox: external_styled_components_default().div.withConfig({
    displayName: "Form__ButtonBox",
    componentId: "sc-1rvpkhh-3"
  })(["display:flex;button{height:40px;}"])
};
const IntroduceContent = /*#__PURE__*/(/* unused pure expression or super */ null && (styled.div.withConfig({
  displayName: "Form__IntroduceContent",
  componentId: "sc-1rvpkhh-4"
})(["position:relative;border:0.0625rem solid #d7e2eb;border-radius:0.75rem;overflow:hidden;padding:1.5rem;width:50%;margin:0 auto;margin-bottom:4rem;"])));
const starArray = ['★', '★★', '★★★', '★★★★', '★★★★★'];
function Form({}) {
  var _App$state, _App$state$userInfo, _Review$state, _Review$state$product;

  const {
    0: editorState,
    1: setEditorState
  } = (0,external_react_.useState)(external_draft_js_.EditorState.createEmpty());
  const {
    0: textLength,
    1: setTextLength
  } = (0,external_react_.useState)(0);
  const strCnt = (0,external_draft_js_.convertToRaw)(editorState.getCurrentContent()).blocks[0].text.length; // 문자열 길이

  const test = (0,external_draft_js_.convertToRaw)(editorState.getCurrentContent()).blocks; // 문자열 길이

  const App = (0,AppProvider/* useAppContext */.bp)();
  const Review = (0,ReviewProvider/* useReviewContext */.A)();
  const idx = (_App$state = App.state) === null || _App$state === void 0 ? void 0 : (_App$state$userInfo = _App$state.userInfo) === null || _App$state$userInfo === void 0 ? void 0 : _App$state$userInfo.idx;
  const ProductId = (_Review$state = Review.state) === null || _Review$state === void 0 ? void 0 : (_Review$state$product = _Review$state.product[0]) === null || _Review$state$product === void 0 ? void 0 : _Review$state$product._id;
  const router = (0,router_.useRouter)();
  const editorToHtml = external_draftjs_to_html_default()((0,external_draft_js_.convertToRaw)(editorState.getCurrentContent()));
  const rendered = (0,external_react_.useRef)(false);
  (0,external_react_.useEffect)(() => {
    const target = (0,external_draft_js_.convertToRaw)(editorState.getCurrentContent()).blocks; // 문자열 길이

    const result = target.reduce((acc, cur) => acc + cur.text.length, 0);
    setTextLength(result);
  }, [editorState]);
  (0,external_react_.useEffect)(() => {
    Review.action.setData('form.content', editorToHtml);
  }, [Review.action, editorToHtml]); // useEffect(() => {
  //   if (rendered.current) return;
  //   rendered.current = true;
  //   const htmlToEditor = `<p style="text-align:center;"><strong>ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇ
  //   </strong></p>`;
  //   const blocksFromHtml = htmlToDraft(htmlToEditor);
  //   if (blocksFromHtml) {
  //     const { contentBlocks, entityMap } = blocksFromHtml;
  //     const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
  //     const editorState = EditorState.createWithContent(contentState);
  //     setEditorState(editorState);
  //   }
  // }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (textLength < 10) return alert('10글자 이상 입력해주세요.');

    if (!confirm("등록하시겠습니까?")) {
      return;
    } else {
      if (!Review.state.form.rate) return alert('평점을 선택해주세요.');

      (async () => {
        try {
          let formData = new FormData();
          formData.append('image', Review.state.form.imageUrl);
          formData.append('content', Review.state.form.content);
          formData.append('rate', Review.state.form.rate);
          const res = await api/* Post.createReview */.SO.createReview(idx, ProductId, formData);

          if (res.success) {
            alert('등록이 완료되었습니다.');
            router.back();
          }
        } catch (error) {
          var _error$response, _error$response$data;

          alert(error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message);
        }
      })();
    }
  };

  const handleImage = e => {
    Review.action.setData('form.imageUrl', e.target.files[0]);
  };

  (0,external_react_.useEffect)(() => {
    Review.action.setData('form.rate', '5');
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Form_S.Form, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Form_S.RateBox, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\uD3C9\uC810"
      }), starArray.map((d, i) => /*#__PURE__*/jsx_runtime_.jsx(Rate, {
        name: "form.rate",
        onClick: Review.action.setFormData,
        checked: Review.state.form.rate === String(i + 1),
        value: i + 1,
        text: d
      }, d))]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      encType: "multipart/form-data",
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Editor, {
        wrapperClassName: "wrapper-class" // 에디터 주변에 적용된 클래스
        ,
        editorClassName: "editor" // 툴바 주위에 적용된 클래스
        ,
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
        } // 초기값 설정
        ,
        editorState: editorState // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
        ,
        onEditorStateChange: editorState => setEditorState(editorState)
      }), /*#__PURE__*/jsx_runtime_.jsx(Form_S.ImagBox, {
        children: /*#__PURE__*/jsx_runtime_.jsx("label", {
          children: /*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "file",
            onChange: handleImage
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Form_S.ButtonBox, {
        className: "button-box",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          white: true,
          type: "submit",
          children: "\uB4F1\uB85D"
        }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          black: true,
          children: "\uCDE8\uC18C"
        })]
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/Review/index.tsx








const Review_S = {
  Review: external_styled_components_default().div.withConfig({
    displayName: "Review",
    componentId: "iy4xgi-0"
  })([""])
};
function Review() {
  const Review = (0,ReviewProvider/* useReviewContext */.A)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Review_S.Review, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PageTitle/* default */.Z, {
      TitleText: "\uD3EC\uD1A0\uB9AC\uBDF0"
    }), Review.state.product.length > 0 && /*#__PURE__*/jsx_runtime_.jsx(ProductInfo, {}), /*#__PURE__*/jsx_runtime_.jsx(Form, {})]
  });
}
// EXTERNAL MODULE: ./src/constants/path.ts
var path = __webpack_require__(643);
// EXTERNAL MODULE: ./src/components/Common/Breadcrumb.tsx
var Breadcrumb = __webpack_require__(7777);
;// CONCATENATED MODULE: ./src/pages/product/review.tsx











function ReviewPage(props) {
  const router = (0,router_.useRouter)();
  const {
    idx,
    productId
  } = router.query;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\uC96C\uC5BC\uB9AC | \uC0C1\uD488\uB9AC\uBDF0"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "\uC0C1\uD488 \uB9AC\uBDF0"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainContainer/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Breadcrumb/* default */.Z, {
        children: [path/* default.MAIN */.Z.MAIN, {
          path: `${path/* default.REVIEW.path */.Z.REVIEW.path}${idx}&productId=${productId}`,
          tag: `${path/* default.REVIEW.tag */.Z.REVIEW.tag}`
        }].map(({
          path,
          tag
        }) => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: path,
          children: tag
        }, path))
      }), /*#__PURE__*/jsx_runtime_.jsx(Review, {})]
    })]
  });
}

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5675,8703,6930,3803,643,8740,8761,693,3493,6908,6172], function() { return __webpack_exec__(9855); });
module.exports = __webpack_exports__;

})();