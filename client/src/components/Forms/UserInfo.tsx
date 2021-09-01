import React from "react";
import styled from "styled-components";
import Button from 'components/style/Button';
import Icon from 'components/Icon/Icon';
interface IUserInfo {

}

const S = {
  UserInfo: styled.div`
    border: 5px solid #f5f5f5;
    padding: 30px;
    font-size: 13px;
    .wrapper{
      display: flex;
      .icon-box{
        i{
          svg{
        border: 1px solid red;
          height: 100%;
          width: 50px;
        }
        }
      }
      .info{
        border-left: 1px solid red;
        padding: 0 30px;
        p:first-child{
          margin-bottom:3px;
        }
          .button-group{
          display: flex;
          margin-top: 5px;
          button{
            height: 30px;;
            font-size: 13px;
          }
        }
      }
    }
  `,
}

export default function UserInfo({ }: IUserInfo) {
  return (
    <S.UserInfo>
      <div className='wrapper'>
        <div className='icon-box'>
          <i><Icon name='user' /></i>
        </div>
        <div className='info'>
          <p>저희 쇼핑몰을 이용해주셔서 대단히 감사합니다.</p>
          <p>회원가입을 하시면 각종 다양한 혜택들을 받으실 수 있습니다.</p>
          <div className='button-group'>
            <Button width='60px'>로그인</Button>
            <Button width='60px'>로그인</Button>
          </div>
        </div>
      </div>
    </S.UserInfo>
  );
}
