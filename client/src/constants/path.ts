export interface IPage {
  [index: string]: {
    path: string;
    tag: string;
  }
}

const PAGE: IPage = {
  MAIN: {
    path: "/",
    tag: "메인",
  },
  LOGIN: {
    path: "/auth/login",
    tag: "로그인",
  },
  FIND_ID: {
    path: "/auth/login/find-id",
    tag: "아이디 찾기",
  },
  FIND_PASSWORD: {
    path: "/auth/login/find-password",
    tag: "비밀번호 찾기",
  },
  REGISTER: {
    path: "/auth/register",
    tag: "회원가입",
  },
  BASKET: {
    path: "/order/basket",
    tag: "장바구니",
  },
  ORDER_FORM: {
    path: "/order/orderform",
    tag: "상품주문",
  },
  AGREEMENT: {
    path: "/shop-info/agreement",
    tag: "이용약관",
  },
  PRIVACY: {
    path: "/shop-info/privacy",
    tag: "개인정보취급방침",
  },
  ADMIN_MAIN: {
    path: "/admin",
    tag: "관리자 메인",
  },
  ORDER: {
    path: '/order/orderform',
    tag: "상품주문",
  },
  NOTICE: {
    path: '/board/notice',
    tag: '공지사항'
  },
  SEARCH: {
    path: '/product/search?keyword=',
    tag: '상품검색'
  },
  REVIEW: {
    path: '/product/review?idx=',
    tag: '상품 리뷰'
  },
  HISTORY: {
    path: '/users/history/list',
    tag: '주문내역'
  },
  HISTORY_DETAIL: {
    path: '/users/history/details',
    tag: '주문상세'
  },
  MY_SHOP: {
    path: '/users',
    tag: '마이쇼핑'
  },
  INTEREST: {
    path: '/users/interest-products',
    tag: '관심상품'
  },
  USERS_MODIFY: {
    path: '/users/modify',
    tag: '회원정보 수정'
  },
  POINT: {
    path: '/users/point',
    tag: '적립금'
  },
  ADMIN_NOTICE: {
    path: '/admin/notice',
    tag: '공지사항 리스트'
  },
  CREATE_NOTICE: {
    path: '/admin/notice/write',
    tag: '공지사항 포스트작성'
  }
} as const

export default PAGE;
