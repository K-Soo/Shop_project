export const NAV_MENU: readonly { label: string; value: string; url: string }[] = [
  { label: "목걸이", value: "login", url: "/product/necklace" },
  { label: "귀걸이", value: "register", url: "/product/earring" },
  { label: "반지", value: "개인정보", url: "/product/ring" },
  { label: "팔찌", value: "이용안내", url: "/product/bracelet" },
  { label: "발찌", value: "이용안내", url: "/product/anklet" },
  { label: "순금", value: "이용안내", url: "/product/gold" },
  { label: "다이아몬드", value: "이용안내", url: "/product/diamond" },
  { label: "커플링", value: "이용안내", url: "/product/coupling" },
];

interface IMAIN {
  readonly [name: string]: {
    label: string;
    value: string;
    url: string;
  }[]
}

export const MAIN_MENU: IMAIN = {
  left: [
    { label: "고객센터", value: "register", url: "/shop-info/agreement" },
    { label: "즐겨찾기", value: "개인정보", url: "/shop-info/privacy" },
  ],
  right: [
    { label: "로그인", value: "login", url: "/shop-info/company" },
    { label: "회원가입", value: "register", url: "/auth/register" },
    { label: "주문조회", value: "개인정보", url: "/shop-info/privacy" },
    { label: "마이쇼핑", value: "개인2정보", url: "/shop-info/privacy" },
  ]
}

export const QUICK_ICON_MENU: readonly { label: string, url: string, icon: string }[] = [
  { label: '상품문의', url: '/', icon: 'bed' },
  { label: '상품후기', url: '/2', icon: 'bed' },
  { label: '공지사항', url: '/3', icon: 'bed' },
  { label: '고객센터', url: '/4', icon: 'bed' },
  { label: '마이쇼핑', url: '/5', icon: 'bed' },
  { label: '키작남 어플', url: '/6', icon: 'bed' },
  { label: '장바구니', url: '/7', icon: 'bed' },
  { label: '배송조회', url: '/8', icon: 'bed' },
]

