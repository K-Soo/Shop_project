import { IRegisterState } from 'hooks/useRegister';

export const userNameCheck = (state: IRegisterState) => {
  if (!state.form.userName) {
    alert('이름을 입력해주세요.');
    return false;
  }
  return true;
};