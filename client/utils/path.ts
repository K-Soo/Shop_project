const PAGE: { [index: string]: { path: string; tag: string } } = {
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
} as const;

export default PAGE;
