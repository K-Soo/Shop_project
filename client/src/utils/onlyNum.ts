import { TAppAction } from 'hooks/useAdmin';

export const onlyNum = (e, action) => {
  const regExp = /[a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g;
  const valid = regExp.test(e.nativeEvent.data);
  if (e.nativeEvent.data && valid) {
    e.preventDefault();
    return null;
  } else {
    action(e);
  }
};