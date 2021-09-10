import { IRegisterState } from 'hooks/useRegister';

export const idCheck = (state: IRegisterState) => {
  if (state.isDuplicateId) {
    alert('아이디 중복확인해주세요.');
    return false;
  }
  return true;
};