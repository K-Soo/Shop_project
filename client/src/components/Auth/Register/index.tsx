import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "components/style/Button";
import Input from "components/style/Input";
import Label from "components/style/Label";
import Select from "components/style/Select";
import DaumPost from 'components/Common/DaumPost';
import FieldsetTos from 'components/Auth/Register/FieldsetTos';
import useScrollFadeIn from 'hooks/useScrollFadeIn';
import { useRegisterContext } from 'context/RegisterProvider';
import { useAppContext } from 'context/AppProvider';
import { Post } from 'api';
import PageTitle from 'components/Common/PageTitle';
import Icon from 'components/Icon/Icon';
import { useRouter } from 'next/router';
import { idCheck, passwordCheck, allTermCheck } from 'components/validation';
import { PHONE_NUMBER } from 'constants/phone';

const S = {
  Register: styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    .container {
      margin: 0 auto;
      .form-box {
        legend {
          border-bottom: 1px solid #e7e7e7;
          color: #2e2e2e;
          width: 100%;
          padding: 10px 0;
          margin-bottom: 20px;
        }
      }
  }
  `,
  Group: styled.div<{ margin?: string, status?: boolean }>`
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    max-width: 400px;
    .id-box {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .address-box {
      display: flex;
      flex-direction: column;
      width: 100%;
      &__inner{
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
        button{
          display: flex;
          align-items: center;
        i{
          font-size: 0;
          svg{
            color: #000;
            width: 18px;
            height: 16px;
          }
        }
      }
    }
  }
  `,
  statusText: styled.p<{ status: boolean }>`
    font-size: 12px;
    padding-left: 80px;
    margin-top: -10px;
    margin-bottom: 5px;
    ${props => props.status ? css`
    color: green;
    ::after{
      content: '사용 가능한 ID입니다.';
    }
    ` : css`
    color: red;
    ::after{
      content: '이미 가입된 ID입니다.';
    }
    `};
  `,
}

export default function Register() {
  const [status, setStatus] = useState<boolean | null>(null);
  const { state, action } = useRegisterContext();
  const App = useAppContext();
  const router = useRouter();

  let formData = {
    ...state.form,
    phone: state.phone1.concat(state.phone2, state.phone3)
  }
  delete formData.passwordConfirm

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!allTermCheck(state)) return;
    if (!idCheck(state)) return;
    if (!passwordCheck(state)) return;
    try {
      const res = await Post.register(formData);
      alert('가입이 완료되었습니다.');
      router.push('/');
    } catch (error) {
      console.log('Register-error: ', error);
      alert(error.response.data.message);
    }
  };

  const DuplicateCheckId = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!state.form.userId) return alert('아이디를 입력해주세요.');
    try {
      const res = await Post.checkId({ userId: state.form.userId });
      if (res.success) {
        action.setData('isDuplicateId', false);
      } else {
        action.setData('isDuplicateId', true);
      }
      console.log('res: ', res);
      setStatus(res.success);
    } catch (error) {
      console.log('Register-error: ', error);
    }
  };

  return (
    <S.Register >
      <article className='container'>
        <PageTitle TitleText='회원가입' />
        <form className='form-box' onSubmit={handleSubmit}>
          <fieldset>
            <legend>기본정보</legend>
            <S.Group margin='0px' status={status}>
              <Label htmlFor='idFor' required>아이디</Label>
              <div className='id-box'>
                <Input
                  maxWidth='200'
                  placeholder='영문소문자/숫자, 4~16자'
                  name='form.userId'
                  id='idFor'
                  margin='0 20px 0 0'
                  onChange={action.setFormData}
                />
                <Button white width='80px' height='40px' fontSize='11px' onClick={DuplicateCheckId}>중복확인</Button>
              </div>
            </S.Group>

            {status !== null && (
              <S.statusText status={status} />
            )}

            <S.Group >
              <Label htmlFor='passwordFor' >비밀번호</Label>
              <Input type='password' placeholder='비밀번호' name='form.password' id='passwordFor' value={state.form.password} onChange={action.setFormData} />
            </S.Group>

            <S.Group>
              <Label htmlFor='passwordConfirmFor' required>비밀번호 확인</Label>
              <Input type='password' placeholder='비밀번호' name='form.passwordConfirm' id='passwordConfirmFor' value={state.form.passwordConfirm} onChange={action.setFormData} />
            </S.Group>

            <S.Group >
              <Label htmlFor='nameFor' required>이름</Label>
              <Input maxWidth='200' placeholder='이름' id='nameFor' name='form.userName' value={state.form.userName} onChange={action.setFormData} />
            </S.Group>

            <S.Group >
              <Label htmlFor='phoneFor' required>휴대전화</Label>
              <Select width='100' height='40' name='phone1' onChange={action.setPhone}>
                <option value=''>선택</option>
                {PHONE_NUMBER.map(d => (
                  <option key={d.value} value={d.value}>{d.label}</option>
                ))}
              </Select>
              <span style={{ width: '15px', textAlign: 'center' }}>-</span>
              <Input maxWidth='100' name='phone2' value={state.phone2} id='phoneFor' onChange={action.setPhone} />
              <span style={{ width: '15px', textAlign: 'center' }}>-</span>
              <Input maxWidth='100' name='phone3' value={state.phone3} onChange={action.setPhone} />
            </S.Group>

            <S.Group >
              <Label htmlFor='emailFor' required>이메일</Label>
              <Input placeholder='이메일' name='form.email' id='emailFor' value={state.form.email} onChange={action.setFormData} />
            </S.Group>

            <S.Group >
              <Label htmlFor='addrFor' required>
                주소
              </Label>
              <div className='form-box__input-wrap address-box'>
                <div className='address-box__inner'>
                  {App.state.openDaumPost && <DaumPost />}
                  <Input name='form.zoneCode' maxWidth='200' margin='0 20px 0 0' value={state.form.zonecode} readOnly />
                  <Button white width='90px' height='40px' fontSize='12px' onClick={App.action.setOpenDaumPost}>
                    <i><Icon name='location' /></i>
                    <span>우편번호</span>
                  </Button>
                </div>
                <Input placeholder='기본주소' name='form.addr1' value={state.form.addr1} readOnly margin="0 0 15px 0" />
                <Input placeholder='나머지 주소' name='form.addr2' id='addrFor' onChange={action.setFormData} value={state.form.addr2} />
              </div>
            </S.Group>
          </fieldset>

          <fieldset>
            <legend>이용약관</legend>
            <FieldsetTos />
          </fieldset>

          <Button login type='submit'>가입</Button>
        </form>
      </article>
    </S.Register>
  );
};


