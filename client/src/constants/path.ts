export interface IPage {
  [index:string]:{
    path: string;
    tag: string;
  }
}

const PAGE: IPage= {
  MAIN: {
    path: "/",
    tag: "메인",
  },
  LOGIN: {
    path: "/auth/login",
    tag: "로그인",
  },
  REGISTER: {
    path: "/auth/register",
    tag: "회원가입",              
  },
  COMPANY: {
    path: "/shop-info/company",
    tag: "회사소개",
  },
  AGREEMENT: {
    path: "/shop-info/agreement",
    tag: "이용약관",
  },
  PRIVACY: {
    path: "/shop-info/privacy",
    tag: "개인정보취급방침",
  },
  GUIDE: {
    path: "/shop-info/guide",
    tag: "이용안내",
  },
  ADMIN_MAIN: {
    path: "/admin",
    tag: "관리자 메인",
  },
}

export default PAGE;
