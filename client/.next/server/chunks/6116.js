exports.id = 6116;
exports.ids = [6116];
exports.modules = {

/***/ 6116:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Register; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/components/style/Button.tsx
var Button = __webpack_require__(8761);
// EXTERNAL MODULE: ./src/components/style/Input.tsx
var Input = __webpack_require__(8847);
// EXTERNAL MODULE: ./src/components/style/Label.tsx
var Label = __webpack_require__(6257);
// EXTERNAL MODULE: ./src/components/style/Select.tsx
var Select = __webpack_require__(8116);
// EXTERNAL MODULE: ./src/components/Common/DaumPost.tsx
var DaumPost = __webpack_require__(2063);
// EXTERNAL MODULE: ./src/components/style/TextArea.tsx
var TextArea = __webpack_require__(4558);
;// CONCATENATED MODULE: ./src/constants/register.ts
const Text = {
  TOS: ['제1조(목적)\r이 약관은 회사(전자상거래 사업자)가 운영하는 자뎅 사이버 몰(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리․의무 및 책임사항을 규정함을 목적으로 합니다.\r※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.', '\r\r제2조(정의)\r① “몰”이란 자뎅 회사가 재화 또는 용역(이하 “재화 등”이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.\r② “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.\r③ ‘회원’이라 함은 “몰”에 (삭제) 회원등록을 한 자로서, 계속적으로 “몰”이 제공하는 서비스를 이용할 수 있는 자를 말합니다.<br>④ ‘비회원’이라 함은 회원에 가입하지 않고 “몰”이 제공하는 서비스를 이용하는 자를 말합니다.', '\r\r제3조 (약관 등의 명시와 설명 및 개정)\r① “몰”은 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호․모사전송번호․전자우편주소, 사업자등록번호, 통신판매업 신고번호, 개인정보관리책임자등을 이용자가 쉽게 알 수 있도록 00 사이버몰의 초기 서비스화면(전면)에 게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.\r② “몰은 이용자가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회․배송책임․환불조건 등과 같은 중요한 내용을 이용자가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 이용자의 확인을 구하여야 합니다.\r③ “몰”은 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」, 「전자금융거래법」, 「전자서명법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「방문판매 등에 관한 법률」, 「소비자기본법」 등 관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.\r④ “몰”이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 몰의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 "몰“은 개정 전 내용과 개정 후 내용을 명확하게 비교하여 이용자가 알기 쉽도록 표시합니다. \r⑤ “몰”이 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정 전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의 공지기간 내에 “몰”에 송신하여 “몰”의 동의를 받은 경우에는 개정약관 조항이 적용됩니다.<br>⑥ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자 보호지침 및 관계법령 또는 상관례에 따릅니다.'],
  AOS: ['<p>제1조(목적)<br>이 약관은&nbsp;자뎅 회사(전자상거래 사업자)가 운영하는 자뎅 사이버 몰(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리․의무 및 책임사항을 규정함을 목적으로 합니다.<br>※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.」</p>', 'AOS 2']
};
// EXTERNAL MODULE: ./src/components/style/Title.tsx
var Title = __webpack_require__(6930);
// EXTERNAL MODULE: ./src/components/style/CheckBox.tsx
var CheckBox = __webpack_require__(9970);
// EXTERNAL MODULE: ./src/context/RegisterProvider.tsx + 1 modules
var RegisterProvider = __webpack_require__(7858);
;// CONCATENATED MODULE: ./src/components/Auth/Register/FieldsetTos.tsx










const TextAreaBlock = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "FieldsetTos__TextAreaBlock",
  componentId: "atr4ao-0"
})(["width:100%;padding:20px 15px;border:1px solid #e7e7e7e7;background-color:#fafafa;"]);
const CheckBlock = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "FieldsetTos__CheckBlock",
  componentId: "atr4ao-1"
})(["margin-top:10px;font-size:14px;color:#333;display:flex;align-items:center;", ""], ({
  theme
}) => theme.mobile`
    font-size: 12px;
  `);
const TotalCheck = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "FieldsetTos__TotalCheck",
  componentId: "atr4ao-2"
})(["border:1px solid #e7e7e7e7;background-color:#fafafa;height:40px;padding:0 10px;display:flex;align-items:center;justify-content:flex-end;&::after{margin:0 15px 0 0;height:40px;line-height:42px;content:'\uC774\uC6A9\uC57D\uAD00 \uBC0F \uAC1C\uC778\uC815\uBCF4\uC218\uC9D1 \uBC0F \uC774\uC6A9\uC5D0 \uBAA8\uB450 \uB3D9\uC758\uD569\uB2C8\uB2E4.'}", ""], ({
  theme
}) => theme.mobile`
    font-size: 12px;
  `);
function FieldsetTos() {
  const {
    state,
    action
  } = (0,RegisterProvider/* useRegisterContext */.$2)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "form-box__input-wrap",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(TextAreaBlock, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
          level: 3,
          size: "12",
          textAlign: "left",
          marginB: "10",
          children: "[\uD544\uC218] \uC774\uC6A9\uC57D\uAD00 \uB3D9\uC758"
        }), /*#__PURE__*/jsx_runtime_.jsx(TextArea/* default */.Z, {
          value: Text.TOS,
          readOnly: true
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CheckBlock, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "\uC774\uC6A9\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC2ED\uB2C8\uAE4C?"
          }), /*#__PURE__*/jsx_runtime_.jsx(CheckBox/* default */.Z, {
            marginL: "10",
            name: "TermsOfService",
            onChange: action.setCheckBox,
            checked: state.TermsOfService
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "form-box__input-wrap",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(TextAreaBlock, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
          level: 3,
          size: "12",
          textAlign: "left",
          marginB: "10",
          children: "[\uD544\uC218] \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9 \uB3D9\uC758"
        }), /*#__PURE__*/jsx_runtime_.jsx(TextArea/* default */.Z, {
          value: Text.TOS,
          readOnly: true
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CheckBlock, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9\uC5D0 \uB3D9\uC758\uD558\uC2ED\uB2C8\uAE4C?"
          }), /*#__PURE__*/jsx_runtime_.jsx(CheckBox/* default */.Z, {
            marginL: "10",
            name: "PersonalInfo",
            onChange: action.setCheckBox,
            checked: state.PersonalInfo
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(TotalCheck, {
      children: /*#__PURE__*/jsx_runtime_.jsx(CheckBox/* default */.Z, {
        marginR: "10",
        name: "allCheck",
        onChange: action.setCheckBox,
        checked: state.PersonalInfo && state.TermsOfService
      })
    })]
  });
}
;
// EXTERNAL MODULE: ./src/context/AppProvider.tsx + 1 modules
var AppProvider = __webpack_require__(693);
// EXTERNAL MODULE: ./src/api/index.ts
var api = __webpack_require__(8740);
// EXTERNAL MODULE: ./src/components/Common/PageTitle.tsx
var PageTitle = __webpack_require__(6908);
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__(3595);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./src/components/validation/idCheck.ts
const idCheck = state => {
  if (state.isDuplicateId) {
    alert('아이디 중복확인해주세요.');
    return false;
  }

  return true;
};
;// CONCATENATED MODULE: ./src/components/validation/passwordCheck.ts
const passwordCheck = state => {
  if (state.form.password !== state.form.passwordConfirm) {
    alert('비밀번호가 일치하지않습니다.');
    return false;
  }

  return true;
};
;// CONCATENATED MODULE: ./src/components/validation/allTermCheck.ts
const allTermCheck = state => {
  if (state.PersonalInfo === false || state.TermsOfService === false) {
    alert('이용약관을 확인해 주세요.');
    return false;
  }

  return true;
};
// EXTERNAL MODULE: ./src/constants/phone.ts
var phone = __webpack_require__(6414);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(3803);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./src/constants/path.ts
var path = __webpack_require__(643);
;// CONCATENATED MODULE: ./src/components/Auth/Register/index.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















const S = {
  Register: external_styled_components_default().section.withConfig({
    displayName: "Register",
    componentId: "e28198-0"
  })(["max-width:1200px;margin:0 auto;padding:0 20px;.container{margin:0 auto;.form-box{legend{border-bottom:1px solid #e7e7e7;color:#2e2e2e;width:100%;padding:10px 0;margin-bottom:20px;}}}"]),
  Group: external_styled_components_default().div.withConfig({
    displayName: "Register__Group",
    componentId: "e28198-1"
  })(["margin-bottom:15px;display:flex;align-items:center;max-width:400px;label{min-width:70px;width:70px;}.id-box{display:flex;justify-content:space-between;width:100%;}.address-box{display:flex;flex-direction:column;width:100%;&__inner{margin-bottom:15px;display:flex;justify-content:space-between;button{display:flex;align-items:center;span{pointer-events:none;}i{font-size:0;pointer-events:none;svg{color:#000;width:18px;height:16px;}}}}}"]),
  statusText: external_styled_components_default().p.withConfig({
    displayName: "Register__statusText",
    componentId: "e28198-2"
  })(["font-size:12px;padding-left:80px;margin-top:-10px;margin-bottom:5px;", ";"], props => props.status ? (0,external_styled_components_.css)(["color:green;::after{content:'\uC0AC\uC6A9 \uAC00\uB2A5\uD55C ID\uC785\uB2C8\uB2E4.';}"]) : (0,external_styled_components_.css)(["color:red;::after{content:'\uC774\uBBF8 \uAC00\uC785\uB41C ID\uC785\uB2C8\uB2E4.';}"])),
  ButtonBox: external_styled_components_default().div.withConfig({
    displayName: "Register__ButtonBox",
    componentId: "e28198-3"
  })(["display:flex;max-width:350px;margin:50px auto;button{height:40px;font-size:14px;}"])
};
function Register() {
  const {
    0: status,
    1: setStatus
  } = (0,external_react_.useState)(null);
  const {
    state,
    action
  } = (0,RegisterProvider/* useRegisterContext */.$2)();
  const App = (0,AppProvider/* useAppContext */.bp)();
  const router = (0,router_.useRouter)();
  const userIdRef = (0,external_react_.useRef)(null);
  const passwordRef = (0,external_react_.useRef)(null);
  const userNameRef = (0,external_react_.useRef)(null);
  const addrDetailRef = (0,external_react_.useRef)(null);
  const {
    0: isNotModify,
    1: setIsNotModify
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if (router.asPath === '/auth/register') setIsNotModify(true);
  }, [router.asPath]);
  (0,external_react_.useEffect)(() => {
    if (state.isDuplicateId) setStatus(null);
  }, [state.form.userId, state.isDuplicateId]);

  let formData = _objectSpread({}, state.form);

  delete formData.passwordConfirm;

  const handleSubmit = async e => {
    e.preventDefault();

    if ([state.TemporaryPhone1.trim(), state.TemporaryPhone2.trim(), state.TemporaryPhone3.trim()].includes('')) {
      return alert('휴대폰 번호를 입력해주세요.');
    }

    if ([state.form.userName.trim()].includes('')) {
      alert('이름을 입력해주세요.');
      return userNameRef.current.focus();
    }

    if ([state.form.zonecode.trim(), state.form.addr1.trim()].includes('')) {
      return alert('주소정보를 입력해주세요');
    }

    if ([state.form.addr2.trim()].includes('')) {
      alert('나머지 주소를 입력해주세요.');
      return addrDetailRef.current.focus();
    }

    if (isNotModify) {
      // 회원가입 폼
      if (status === false) {
        alert('이미 가입된 아이디입니다.');
        return userIdRef.current.focus();
      }

      if (!idCheck(state)) return;

      if (!utils/* validate.password */.Gu.password(state.form.password)) {
        return alert('숫자,영문자,특수문자 조합 8자리이상 입력해주세요.');
      }

      if (!utils/* validate.MixedPassword */.Gu.MixedPassword(state.form.password)) {
        return alert("숫자와 영문자를 혼용하여야 합니다.");
      }

      if (!passwordCheck(state)) {
        action.InitData('form.password');
        action.InitData('form.passwordConfirm');
        return passwordRef.current.focus();
      }

      if (!utils/* validate.name */.Gu.name(state.form.userName)) {
        alert('한글단어만 입력가능합니다.');
        return userNameRef.current.focus();
      }

      if (!allTermCheck(state)) return;

      try {
        const res = await api/* Post.register */.SO.register(formData);
        if (res.success) alert('가입이 완료되었습니다.');
        router.push(path/* default.MAIN.path */.Z.MAIN.path);
      } catch (error) {
        if (external_axios_default().isAxiosError(error)) {
          console.error('Register-error: ', error);
          alert(error.response.data.message);
        }
      }
    } else {
      try {
        const res = await api/* Put.updateUserInfo */.qb.updateUserInfo(App.state.userInfo.idx, {
          phone: state.form.phone,
          email: state.form.email,
          zonecode: state.form.zonecode,
          addr1: state.form.addr1,
          addr2: state.form.addr2
        });

        if (res.success) {
          alert('정보가 변경되었습니다.');
          router.push(path/* default.MAIN.path */.Z.MAIN.path);
        }
      } catch (error) {
        if (external_axios_default().isAxiosError(error)) {
          console.error('Register-error: ', error);
          alert(error.response.data.message);
        }
      }
    }
  };

  const DuplicateCheckId = async e => {
    e.preventDefault();

    if (!utils/* validate.id */.Gu.id(state.form.userId)) {
      alert("아이디는 영소문자, 숫자 6~20자리로 입력해주세요.");
      return userIdRef.current.focus();
    }

    if (!state.form.userId) return alert('아이디를 입력해주세요.');

    try {
      const res = await api/* Post.checkId */.SO.checkId({
        userId: state.form.userId
      });

      if (res.success) {
        action.setData('isDuplicateId', false);
      } else {
        action.setData('isDuplicateId', true);
      }

      setStatus(res.success);
    } catch (error) {
      console.error('Register-error: ', error);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(S.Register, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx(PageTitle/* default */.Z, {
        TitleText: isNotModify ? '회원가입' : '회원정보 수정'
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        className: "form-box",
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("fieldset", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("legend", {
            children: "\uAE30\uBCF8\uC815\uBCF4"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.Group, {
            margin: "0px",
            status: status,
            children: [/*#__PURE__*/jsx_runtime_.jsx(Label/* default */.Z, {
              htmlFor: "idFor",
              required: true,
              children: "\uC544\uC774\uB514"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "id-box",
              children: [/*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
                maxWidth: "200",
                placeholder: "\uC601\uBB38\uC18C\uBB38\uC790/\uC22B\uC790, 4~16\uC790",
                name: "form.userId",
                id: "idFor",
                margin: "0 20px 0 0",
                maxLength: 16,
                onChange: action.setFormData,
                value: state.form.userId,
                refValue: userIdRef,
                readOnly: !isNotModify
              }), isNotModify && /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
                white: true,
                width: "80px",
                height: "40px",
                fontSize: "11px",
                onClick: DuplicateCheckId,
                children: "\uC911\uBCF5\uD655\uC778"
              })]
            })]
          }), status !== null && /*#__PURE__*/jsx_runtime_.jsx(S.statusText, {
            status: status
          }), isNotModify && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(S.Group, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(Label/* default */.Z, {
                htmlFor: "passwordFor",
                required: true,
                children: "\uBE44\uBC00\uBC88\uD638"
              }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
                type: "password",
                refValue: passwordRef,
                placeholder: "\uC22B\uC790,\uC601\uBB38\uC790,\uD2B9\uC218\uBB38\uC790 \uC870\uD5698\uC790\uB9AC \uC774\uC0C1",
                name: "form.password",
                id: "passwordFor",
                value: state.form.password,
                onChange: action.setFormData
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.Group, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(Label/* default */.Z, {
                htmlFor: "passwordConfirmFor",
                required: true,
                children: "\uBE44\uBC00\uBC88\uD638\uD655\uC778"
              }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
                type: "password",
                placeholder: "\uC22B\uC790,\uC601\uBB38\uC790,\uD2B9\uC218\uBB38\uC790 \uC870\uD5698\uC790\uB9AC \uC774\uC0C1",
                name: "form.passwordConfirm",
                id: "passwordConfirmFor",
                value: state.form.passwordConfirm,
                onChange: action.setFormData
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.Group, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(Label/* default */.Z, {
              htmlFor: "nameFor",
              required: true,
              children: "\uC774\uB984"
            }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
              readOnly: !isNotModify,
              minLength: 2,
              refValue: userNameRef,
              maxWidth: "200",
              placeholder: "\uD55C\uAE00 2~5\uC790",
              id: "nameFor",
              name: "form.userName",
              value: state.form.userName,
              onChange: action.setFormData
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.Group, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(Label/* default */.Z, {
              htmlFor: "phoneFor",
              required: true,
              children: "\uD734\uB300\uC804\uD654"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Select/* default */.Z, {
              width: "100",
              height: "40",
              name: "TemporaryPhone1",
              value: state.TemporaryPhone1,
              onChange: action.setFormData,
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
              required: true,
              maxWidth: "100",
              name: "TemporaryPhone2",
              maxLength: 4,
              minLength: 3,
              value: state.TemporaryPhone2,
              id: "phoneFor",
              onChange: e => (0,utils/* onlyNum */.lk)(e, action.setFormData)
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              style: {
                width: '15px',
                textAlign: 'center'
              },
              children: "-"
            }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
              required: true,
              maxWidth: "100",
              maxLength: 4,
              minLength: 4,
              name: "TemporaryPhone3",
              value: state.TemporaryPhone3,
              onChange: e => (0,utils/* onlyNum */.lk)(e, action.setFormData)
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.Group, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(Label/* default */.Z, {
              htmlFor: "emailFor",
              required: true,
              children: "\uC774\uBA54\uC77C"
            }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
              placeholder: "\uC774\uBA54\uC77C",
              name: "TemporaryEmail1",
              id: "emailFor",
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
              value: state.TemporaryEmail2,
              onChange: action.setFormData
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.Group, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(Label/* default */.Z, {
              htmlFor: "addrFor",
              required: true,
              children: "\uC8FC\uC18C"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "form-box__input-wrap address-box",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "address-box__inner",
                children: [App.state.openDaumPost && /*#__PURE__*/jsx_runtime_.jsx(DaumPost/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
                  name: "form.zoneCode",
                  maxWidth: "200",
                  margin: "0 20px 0 0",
                  value: state.form.zonecode,
                  readOnly: true
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                  white: true,
                  width: "90px",
                  height: "40px",
                  fontSize: "12px",
                  name: "openDaumPost",
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
                placeholder: "\uAE30\uBCF8\uC8FC\uC18C",
                name: "form.addr1",
                value: state.form.addr1,
                readOnly: true,
                margin: "0 0 15px 0"
              }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
                placeholder: "\uB098\uBA38\uC9C0 \uC8FC\uC18C",
                refValue: addrDetailRef,
                name: "form.addr2",
                id: "addrFor",
                onChange: action.setFormData,
                value: state.form.addr2
              })]
            })]
          })]
        }), isNotModify && /*#__PURE__*/(0,jsx_runtime_.jsxs)("fieldset", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("legend", {
            children: "\uC774\uC6A9\uC57D\uAD00"
          }), /*#__PURE__*/jsx_runtime_.jsx(FieldsetTos, {})]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(S.ButtonBox, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
            black: true,
            type: "submit",
            children: isNotModify ? '가입' : '수정하기'
          }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
            white: true,
            type: "button",
            width: "200px",
            onClick: () => router.push('/'),
            children: "\uCDE8\uC18C"
          })]
        })]
      })]
    })
  });
}
;

/***/ })

};
;