import React from "react";
import styled from "styled-components";
import Title from 'components/style/Title';
import Icon from 'components/Icon/Icon';
import Button from 'components/style/Button';
import Link from 'next/link';
import DarkBackground from 'components/Common/DarkBackground';

interface IBasketModal {
  open: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const S = {
  BasketModal: styled.article<{ open: boolean }>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    width: 500px;
    height: 600px;
    display: ${props => props.open ? 'flex' : 'none'};
    flex-flow: column nowrap;
    justify-content: space-between;
    border: 1px solid #333;
    ${({ theme }) => theme.mobile`
        width: 100%;
    `}
  `,
  Header: styled.div`
    padding: 0 25px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
  `,
  Content: styled.div`
    padding: 25px;
    flex-basis: 100%;
    .total-cnt{
      margin-bottom : 15px;
    }
    table{
      width: 100%;
      height: auto;
      border-collapse: collapse;
      font-size: 13px;
      caption{
        display: none;
      }
      th{
      border-top: 1px solid #f0f0f0;
      border-bottom: 1px solid #f0f0f0;
      padding: 10px 0;
      }
      td{
        padding: 10px 0;
        border-bottom: 1px solid #f0f0f0;
        text-align: center;
      }
      tbody{
      }
    }
  `,
  Pagination: styled.div`
    height: 55px;
    margin: 0 auto;
  `,
  Footer: styled.div`
    border-top: 1px solid #f0f0f0;
    flex-basis:70px;
    padding: 15px 25px;
    display: flex;
    justify-content: space-between;
    .button-group{
      display: flex;
      font-size: 0;
      svg{
        width: 10px;
        height: 10px;
        margin-right: 5px;
      }
    }
  `,

}

export default function BasketModal({ open, onClick }: IBasketModal) {
  return (
    <DarkBackground active={open}>
      <S.BasketModal open={open} >
        <S.Header>
          <Title level={3} size="18">장바구니 담기</Title>
          <i onClick={onClick}>
            <Icon name='closeSmall' />
          </i>
        </S.Header>
        <S.Content>
          <p className='total-cnt'>총 3개의 상품이 있습니다.</p>
          <table>
            <caption>장바구니 목록 확인</caption>
            <colgroup>
              <col width="15%" />
              <col width="70%" />
              <col width="15%" />
            </colgroup>
            <thead>
              <tr>
                <th>이미지</th>
                <th>옵션정보</th>
                <th>가격</th>
              </tr>
            </thead>
            <tbody>
              <tr className='record'>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr className='record'>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr className='record'>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr className='record'>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
          <S.Pagination>페이지</S.Pagination>
        </S.Content>
        <S.Footer>
          <div className='button-group'>
            <Button onClick={onClick} fontSize='13px' width='80px' white height='40px' margin='0 15px 0 0'><Icon name='close' />닫기</Button>
            <Button fontSize='13px' width='auto' white height='40px'>
              <Link href='/order/basket'><a >장바구니 이동</a></Link></Button>
          </div>
          <Button margin='0 0 0 20px' fontSize='13px' login height='40px'>바로구매 하기</Button>
        </S.Footer>
      </S.BasketModal>
    </DarkBackground>
  );
}
