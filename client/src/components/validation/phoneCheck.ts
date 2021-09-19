import {IOrderState} from 'hooks/useOrder';

export const phoneCheck = (state:IOrderState) => {
  const {TemporaryPhone1,TemporaryPhone2,TemporaryPhone3} = state;
  if ([TemporaryPhone1.trim(),TemporaryPhone2.trim(),TemporaryPhone3.trim()].includes('')) {
    alert('휴대폰번호를 입력해주세요');
    return false;
  }
  return true;
};