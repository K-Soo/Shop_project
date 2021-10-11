import { IRegisterState } from 'hooks/useRegister';

export const passwordCheck = (state: IRegisterState) => {
  if (state.form.password !== state.form.passwordConfirm) {
    alert('비밀번호가 일치하지않습니다.');
    return false;
  }
  return true;
};