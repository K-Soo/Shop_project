export const NAV_MENU: { label: string; value: string; url: string }[] = [
  { label: "목걸이", value: "login", url: "/shop-info/company" },
  { label: "귀걸이", value: "register", url: "/shop-info/agreement" },
  { label: "반지", value: "개인정보", url: "/shop-info/privacy" },
  { label: "팔찌", value: "이용안내", url: "/shop-info/guide" },
  { label: "발찌", value: "이용안내", url: "/shop-info/guide" },
  { label: "플래티늄", value: "이용안내", url: "/shop-info/guide" },
  { label: "커플링", value: "이용안내", url: "/shop-info/guide" },
  { label: "세트", value: "이용안내", url: "/shop-info/guide" },
];


interface IMAIN{
  readonly [name: string]:{
    label:string;
    value:string;
    url:string;
  }[]
}

export const MAIN_MENU :IMAIN= {
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

