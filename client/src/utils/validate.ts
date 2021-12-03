
export const validate = {
  /**
  * 아이디체크
  * 영소문자, 숫자 6~20자리
  */
  id: (arg: string): boolean => {
    const idExp = /^[a-z0-9]{6,20}$/;
    if (idExp.test(arg)) return true;
    else return false;
  },
  /**
  * 이름체크 
  * 완전한글자만허용 2글자이상 5글자이하
  */
  name: (arg: string): boolean => {
    const nameExp = /^[가-힣]{2,5}$/g;
    if (nameExp.test(arg)) return true;
    else return false;
  },
  emailCheck: (email: any) => {
    const emailExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (emailExp.test(email)) return true;
    else return false;
  },
  phoneNumValidation: (newPhone: any) => {
    const phoneExp = /^\d{3}\d{3,4}\d{4}$/;
    if (phoneExp.test(newPhone)) return true;
    else return false;
  },
  /**
  * 이름체크 
  * 최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자
  */
  password: (arg: any) => {
    const passwordExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    if (passwordExp.test(arg)) return true;
    else return false;
  },
  MixedPassword: (arg: any) => {
    const checkNumber = arg.search(/[0-9]/g);
    const checkEnglish = arg.search(/[a-z]/ig);
    if (checkNumber < 0 || checkEnglish < 0) {
      return false;
    }
    else return true;
  },
}