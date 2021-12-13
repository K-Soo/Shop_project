exports.id = 3803;
exports.ids = [3803];
exports.modules = {

/***/ 128:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": function() { return /* binding */ PriceComma; }
/* harmony export */ });
const PriceComma = x => {
  if (x > 0) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return x;
  }
};

/***/ }),

/***/ 3803:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "xX": function() { return /* reexport */ CurrentDate; },
  "OB": function() { return /* reexport */ PriceComma/* PriceComma */.O; },
  "NP": function() { return /* reexport */ charConvert; },
  "m3": function() { return /* reexport */ currencyConvert; },
  "S1": function() { return /* reexport */ customCookie; },
  "lk": function() { return /* reexport */ onlyNum; },
  "Gu": function() { return /* reexport */ validate; }
});

// UNUSED EXPORTS: Days, ErrorMsg, pageNumber

// EXTERNAL MODULE: ./src/utils/PriceComma.ts
var PriceComma = __webpack_require__(128);
;// CONCATENATED MODULE: ./src/utils/onlyNum.ts
const onlyNum = (e, action) => {
  const regExp = /[a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g;
  const valid = regExp.test(e.nativeEvent.data);

  if (e.nativeEvent.data && valid) {
    e.preventDefault();
    return null;
  } else {
    action(e);
  }
};
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
;// CONCATENATED MODULE: ./src/utils/customCookie.ts

const customCookie = {
  get: name => {
    return external_js_cookie_default().get(name);
  },
  set: (name, token, days) => {
    let time = new Date(new Date().getTime() + 60 * 60 * 1000);
    return external_js_cookie_default().set(name, token, {
      expires: time
    }); // const prevCookie = document.cookie ?? "path=/";
    // const ck = cookie.parse(prevCookie);
    // ck[name] = value;
    // const expires = new Date(Date.now() + (days * 24 * 60 * 60 * 1000)).toUTCString();
    // document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  },
  remove: name => {
    return external_js_cookie_default().remove(name);
  }
};
;// CONCATENATED MODULE: ./src/utils/currencyConvert.ts
const currencyConvert = KRW => {
  const result = Math.ceil(KRW / 1178.50);
  return String(result);
};
;// CONCATENATED MODULE: ./src/utils/charConvert.ts
const charConvert = str => {
  let firstChar = str.charAt(0);
  const nextChar = '*'.repeat(str.length - 1);
  const hiddenChar = firstChar + nextChar;
  return hiddenChar;
};
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
;// CONCATENATED MODULE: ./src/utils/ErrorMsg.ts

const ErrorMsg = ({
  error,
  text = 'api'
}) => {
  console.error('error: ', error);

  if (axios.isAxiosError(error)) {
    console.error(`---${text}-error---`, error.response.data.message);
  }
};
;// CONCATENATED MODULE: ./src/utils/CurrentDate.ts
function CurrentDate() {
  const CurrentDate = new Date();
  const year = CurrentDate.getFullYear();
  const month = CurrentDate.getMonth() + 1;
  const date = CurrentDate.getDate();
  const hours = CurrentDate.getHours().toString();
  const getHours = hours.length === 1 ? "0" + hours : hours;
  const minutes = CurrentDate.getMinutes();
  const getTimes = `${year}.${month}.${date} ${getHours}:${minutes} 기준`;
  return getTimes;
}
;// CONCATENATED MODULE: ./src/utils/validate.ts
const validate = {
  /**
  * 아이디체크
  * 영소문자, 숫자 6~20자리
  */
  id: arg => {
    const idExp = /^[a-z0-9]{6,20}$/;
    if (idExp.test(arg)) return true;else return false;
  },

  /**
  * 이름체크 
  * 완전한글자만허용 2글자이상 5글자이하
  */
  name: arg => {
    const nameExp = /^[가-힣]{2,5}$/g;
    if (nameExp.test(arg)) return true;else return false;
  },
  emailCheck: email => {
    const emailExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (emailExp.test(email)) return true;else return false;
  },
  phoneNumValidation: newPhone => {
    const phoneExp = /^\d{3}\d{3,4}\d{4}$/;
    if (phoneExp.test(newPhone)) return true;else return false;
  },

  /**
  * 이름체크 
  * 최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자
  */
  password: arg => {
    const passwordExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    if (passwordExp.test(arg)) return true;else return false;
  },
  MixedPassword: arg => {
    const checkNumber = arg.search(/[0-9]/g);
    const checkEnglish = arg.search(/[a-z]/ig);

    if (checkNumber < 0 || checkEnglish < 0) {
      return false;
    } else return true;
  }
};
;// CONCATENATED MODULE: ./src/utils/index.ts











/***/ })

};
;