import { IRegisterState } from 'hooks/useRegister';

export const allTermCheck = (state: IRegisterState) => {
  if (state.PersonalInfo === false || state.TermsOfService === false) {
    alert('이용약관을 확인해 주세요.');
    return false;
  }
  return true;
};