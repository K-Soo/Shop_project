import {IOrderState} from 'hooks/useOrder';

export const recipientCheck = (state:IOrderState) => {
  if (state.orderForm.userName.trim() === '') {
    alert('수취인을 입력해주세요');
    return false;
  }
  return true;
};