import { IOrderState } from 'hooks/useOrder';
import { IRegisterState } from 'hooks/useRegister';
import {useRouter} from 'next/router';


export const addrCheck = (state: IOrderState) => {
  
  const { addr } = state.orderForm;

  if ([addr.zoneCode.trim(), addr.addr1.trim(), addr.addr2.trim()].includes('')) {
    alert('주소정보를 입력해주세요');
    return false;
  }
  return true;
};