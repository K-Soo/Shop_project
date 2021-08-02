import React from "react";
import styled from "styled-components";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";
import PAGE from "../../../../utils/path";
import { Text } from "../../../../utils/constants/register";
import Button from "components/style/Button";
import Input from "components/style/Input";
import Title from "components/style/Title";
import Label from "components/style/Label";
import Select from "components/style/Select";
import DaumPost from 'components/Common/DaumPost';
import FieldsetTos from 'components/Auth/Register/FieldsetTos';
interface IRegister {
  className?: string;
  isModal: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Register: React.FC<IRegister> = ({ className, onClick, isModal }) => {

  return (
    <main className={className}>
      <Breadcrumb>
        {[PAGE.MAIN, PAGE.REGISTER].map(({ path, tag }) => (
          <Link key={path} href={path}>
            {tag}
          </Link>
        ))}
      </Breadcrumb>
      <article className='container'>
        <Title level={2} textAlign='left'>회원가입</Title>
        <form className='form-box'>
          <fieldset>
            <legend>기본정보</legend>
            <div className='form-box__input-wrap'>
              <Label htmlFor='loginId' required>아이디</Label>
              <div className='id-box'>
                <Input width='150' placeholder='영문소문자/숫자, 4~16자' name='' required={true} id='loginId' handleChange={() => { }} />
                <Button width='80px' height='40px' fontSize='11px'>중복확인</Button>
              </div>
            </div>
            <div className='form-box__input-wrap'>
              <Label htmlFor='password' required>비밀번호</Label>
              <Input type='password' width='250' placeholder='비밀번호' name='' id='password' value='' handleChange={() => { }} />
            </div>

            <div className='form-box__input-wrap'>
              <Label htmlFor='loginId' required>비밀번호 확인</Label>
              <Input type='password' width='250' placeholder='비밀번호' name='' value='' handleChange={() => { }} />
            </div>

            <div className='form-box__input-wrap'>
              <Label htmlFor='loginId' required>이름</Label>
              <Input width='150' placeholder='이름' name='' value='' handleChange={() => { }} />
            </div>

            <div className='form-box__input-wrap'>
              <Label htmlFor='loginId' required>휴대전화</Label>
              <Select width='70'>
                <option>010</option>
              </Select>
              <span className='tests'>-</span>
              <Input width='80' placeholder='휴대전화' name='' value='' handleChange={() => { }} />
              <span className='tests'>-</span>
              <Input width='80' placeholder='휴대전화' name='' value='' handleChange={() => { }} />
            </div>

            <div className='form-box__input-wrap'>
              <Label htmlFor='loginId' required>이메일</Label>
              <Input width='250' placeholder='이메일' name='' value='' handleChange={() => { }} />
            </div>

            <div className='form-box__input-wrap'>
              <Label htmlFor='loginId' required>
                주소
              </Label>
              <div className='form-box__input-wrap address-box'>
                <div className='address-box__inner'>
                  <DaumPost isModal={isModal} />
                  <Input width='150' name='' value='' handleChange={() => { }} />
                  <Button type='button' width='80px' height='40px' fontSize='12px' onClick={onClick}>우편번호</Button>
                </div>
                <Input width='250' placeholder='기본주소' name='' value='' handleChange={() => { }} margin="0 0 15px 0" />
                <Input width='250' placeholder='나머지 주소' name='' value='' handleChange={() => { }} />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>추가정보</legend>
            <div className='form-box__input-wrap'>
              <Label htmlFor='loginId' required>
                생년월일
              </Label>
              <Input width='250' placeholder='주소' name='' value='' handleChange={() => { }} />
            </div>

            <div className='form-box__input-wrap'>
              <Label htmlFor='loginId' >
                지역
              </Label>
              <Select width='250'>
                <option>as</option>
              </Select>
            </div>
          </fieldset>

          <fieldset>
            <legend>이용약관</legend>
            <FieldsetTos />
          </fieldset>
        </form>
      </article>
    </main>
  );
};


export default styled(Register)`
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
      &__input-wrap {
        margin-bottom: 15px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .id-box {
          display: flex;
          justify-content: space-between;
          width: 250px;
        }
        .address-box {
          display: flex;
          flex-direction: column;
          &__inner{
            margin-bottom: 15px;
            display: flex;
            width: 100%;
            justify-content: space-between;
          }
        }
      }
    }
  }
`;
