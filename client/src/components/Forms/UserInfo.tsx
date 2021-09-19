import React from "react";
import styled from "styled-components";
import Button from 'components/style/Button';
import Icon from 'components/Icon/Icon';
import { useAppContext } from 'context/AppProvider';
import { useOrderContext } from 'context/OrderProvider';
import Link from 'next/link';
import { PriceComma } from 'utils';
interface IUserInfo {

}

const S = {
  UserInfo: styled.div`
    border: 5px solid #f5f5f5;
    height: 100px;
    padding: 15px;
    display: flex;
    .user-icon{
      padding-right: 20px;
      width: 70px;
      border-right: 1px solid #f0f0f0;
      display: flex;
      align-items: center;
      justify-content: center;
      i{
        display: inline-block;
        font-size: 0;
      }
    }
  `,
  MemberInfo: styled.div`
    flex: 1;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 14px;
    color: #404040;
    .name{
      flex: 1;
      display: flex;
      align-items: center
    }
    .point{
      flex: 1;
      display: flex;
      align-items: center;
      i{
        font-size: 0;
        margin-right: 5px;
        svg{
          color: #000;
          height: 17px;
          width: 18px;
        }
      }
      a {
        border-bottom: 1px solid #999;
        &:hover{
          border-bottom: 1px solid #000;
        }
      }
    }
  `,
  NonMemberInfo: styled.div`
    flex: 1;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 12px;
    color: #404040;
    .text{
      flex: 1;
    }
    .link-box{
      flex: 1;
      display: flex;
      ${Button}{
        height: auto;
        font-size: 12px;
        padding: 0;
        width: 80px;
        height: 25px;
        a{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }
      }
    }
  `,

}

export default function UserInfo({ }: IUserInfo) {
  const { state: { userInfo: { userId } } } = useAppContext();
  const Order = useOrderContext();
  return (
    <S.UserInfo>
      <div className='user-icon'>
        <i>
          {userId ? <Icon name='user' /> : <Icon name='userNot' />}
        </i>
      </div>
      {userId ? (
        <S.MemberInfo>
          <p className='name'><b>{userId}</b>님 안녕하세요.</p>
          <p className='point'>
            <i><Icon name='coin' /></i>
            <Link href='/users/point'>
              <a>가용적립금: <b>{PriceComma(Order.state.currentPoint)}원</b></a>
            </Link>
          </p>
        </S.MemberInfo>
      ) : (
        <S.NonMemberInfo>
          <p className='text'>
            저희 쇼핑몰을 이용해주셔서 대단히 감사합니다.<br />
            회원가입을 하시면 각종 다양한 혜택들을 받으실 수 있습니다.
          </p>
          <p className='link-box'>
            <Button black >
              <Link href='/auth/login'>
                <a>로그인</a>
              </Link>
            </Button>
            <Button white >
              <Link href='/auth/register'>
                <a>회원가입</a>
              </Link>
            </Button>
          </p>
        </S.NonMemberInfo>
      )}
    </S.UserInfo>
  );
}
