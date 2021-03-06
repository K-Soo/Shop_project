export const AUTH_QUICK_LIST: readonly { label: string, url: string, value: string }[] = [
  { label: '회원가입', url: '/auth/register', value: 'register' },
  { label: '아이디 찾기', url: '/auth/login/find-id', value: 'findId' },
  { label: '비밀번호 찾기', url: '/auth/login/find-password', value: 'findPassword' },
]