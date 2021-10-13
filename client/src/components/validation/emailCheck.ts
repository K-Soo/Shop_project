import { IOrderState } from 'hooks/useOrder';

export const emailCheck = (state: IOrderState) => {
  const { TemporaryEmail1, TemporaryEmail2 } = state;
  if ([TemporaryEmail1.trim(), TemporaryEmail2.trim()].includes('')) {
    alert('이메일정보를 입력해주세요.');
    return false;
  }
  return true;
};