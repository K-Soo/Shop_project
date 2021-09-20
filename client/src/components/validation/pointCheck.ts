import {IRegisterState} from 'hooks/useRegister';
import {IOrderState} from 'hooks/useOrder';

export const pointCheck = (state:IOrderState) => {
  if (Number(state.currentPoint) < Number(state.orderForm.pointInfo.totalUsed)) {
    console.log('Number(state.orderForm.pointInfo.totalUsed): ', Number(state.orderForm.pointInfo.totalUsed));
    alert('사용가능한 적립금내에서 입력해주세요');
    return false;
  }
  return true;
};