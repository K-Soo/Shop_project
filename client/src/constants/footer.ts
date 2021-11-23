export const COMPANY_INFO = {
  COMPANY: "주식회사 포폴",
  OWNER: "주상복합",
  "BUSINESS LICENSE": "228-33-333333",
  ADDRESS: "경기도 남양주시 별내동",
  TEL: "010-6479-7825",
  FAX: "133-3333",
  "CONTACT US": "kanabun102@naver.com",
} as const;

export const CUSTOMER_CENTER = {
  number: "1600-3000",
  open: "월-금 pm1:00-5:00",
  close: "토,일,공휴일 휴무",
} as const;

export const ACCOUNT_INFO = [
  { label: "국민", value: "103001-04-333333" },
  { label: "신한", value: "103001-04-111111" },
  { label: "농협", value: "103001-04-444444" },
  { label: "예금주", value: "(주)포폴" },
] as const;

export const FAVORITE_MENU = [
  "로그인 / 회원가입",
  "관심상품",
  "장바구니",
  "주문조회",
  "마이페이지",
] as const;

export const RETURN_EXCHANGE = [
  "부산시 금정구 부산대학로62-1 4층",
  "지번: 부산시 금정구 장전동 400-31번지 4층",
  "자세한 교환·반품절차 안내는 문의란 및 공지사항을 참고해주세요",
] as const;

export const SUB_TOP_LISTS = [
  { label: '이용약관', value: 'register', url: '/shop-info/agreement' },
  { label: '개인정보 취급 방침', value: '개인정보', url: '/shop-info/privacy' },
] as const