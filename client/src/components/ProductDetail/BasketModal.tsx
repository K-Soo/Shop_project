/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Title from 'components/style/Title';
import Icon from 'components/Icon/Icon';
import Button from 'components/style/Button';
import Link from 'next/link';
import DarkBackground from 'components/Common/DarkBackground';
import { PriceComma } from 'utils/PriceComma';
import { useAppContext } from 'context/AppProvider';
import Image from 'next/image'
import { TColor, IProduct, IBasketItem } from 'interfaces/IProduct';
import { useRouter } from "next/router";

const CommonIcon = css`
  padding: 1px 5px;
  font-size: 12px;
  letter-spacing: 1px;
`;


const S = {
  BasketModal: styled.article<{ open: boolean }>`
  display: ${props => props.open ? 'block' : 'none'};
  z-index: 99;
  position: fixed; 
  top: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6); 
  width: 100%; 
  height: 100%;
  `,
  Containers: styled.div`
    z-index: 999;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    width: 500px;
    height: 600px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    border: 1px solid #333;
    ${({ theme }) => theme.mobile`
      width: 95%;
      height: 550px;
      .header{
        padding: 0 15px;
      }
      .content{
        padding: 10px 15px;
      }
      .footer{
        padding: 0 15px;
      }
    `}
  `,
  Header: styled.div`
    padding: 0 25px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
    .close-btn{
      font-size: 0;
      cursor: pointer;
    }
  `,
  Content: styled.div`
    padding: 10px 25px;
    flex-basis: 100%;
    .total-cnt{
      margin-bottom : 10px;
      font-size: 14px;
    }
    table{
      width: 100%;
      height: auto;
      border-collapse: collapse;
      font-size: 13px;
      caption{
        display: none;
      }
      thead{
        tr{
          th{
            border-top: 1px solid #f0f0f0;
            border-bottom: 1px solid #f0f0f0;
            padding: 10px 0;
          }
        }
      }
      tbody{
        .row{
          td{
            padding: 10px 0;
            border-bottom: 1px solid #f0f0f0;
            text-align: center;
            vertical-align: middle;
          }
          .image{
            font-size: 0;
            padding: 0;
            img{
              height: 100%;
              width: 100%;
              object-fit: cover;
            }
          }
          .option-info{
            text-align: left;
            padding-left: 10px;
            p{
              margin-bottom:5px;
              display: flex;
              align-items: flex-end;
              .name{margin-right: 5px;}
            }
          }
          .price{
            border: 1px solid red;
          }
        }
      }
    }
  `,
  Pagination: styled.div`
    flex-basis: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  `,
  Footer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #f0f0f0;
    flex-basis:70px;
    padding: 0 25px;
    button{
      font-size: 13px;
      height: 40px;
    }
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

export default function BasketModal() {
  const [basket, setBasket] = useState<IBasketItem[]>([]);
  const App = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (App.state.userInfo.userId) {
      setBasket(App.state.basket.basketList);
    } else {
      setBasket(App.state.basket.nonMemberBasket);
    }
  }, [App.state.userInfo.userId, App.state.basket]);

  const handleSubmit = (e) => {
  }

  return (
    <S.BasketModal open={App.state.openBasketModal} >
      <S.Containers >
        <S.Header className='header'>
          <Title level={3} size="18">장바구니 담기</Title>
          <i className='close-btn' data-name='openBasketModal' onClick={App.action.setGlobalToggle}>
            <Icon name='closeSmall' />
          </i>
        </S.Header>

        <S.Content className='content'>
          <p className='total-cnt'>총 {basket?.length ?? 0}개의 상품이 있습니다.</p>
          <table>
            <caption>장바구니 목록 확인</caption>
            <colgroup>
              <col width="15%" />
              <col width="60%" />
              <col width="35%" />
            </colgroup>
            <thead>
              <tr>
                <th>이미지</th>
                <th>옵션정보</th>
                <th>가격</th>
              </tr>
            </thead>
            <tbody>
              {basket.length > 0 && basket.map((d, i) =>
                <tr className='row' key={i}>
                  <td className='image'>
                    <img
                      src={d.imageUrl[0].url}
                      alt={d.name}
                    />
                  </td>

                  <td className='option-info'>
                    <p>
                      <span className='name'>{d.name}</span>
                      <span>({d.qty}개)</span>
                    </p>
                    <span>[옵션:{d.selectColor[0].colorName}]</span>
                  </td>

                  <td className='price'>
                    <del>{PriceComma(d.product_price)}원</del>
                    <p>{PriceComma(d.consumer_price)}원</p>
                  </td>

                </tr>
              )}
            </tbody>
          </table>

        </S.Content>

        <S.Pagination>페이지</S.Pagination>

        <S.Footer className='footer'>
          <div className='button-group'>
            <Button
              onClick={App.action.setBasketModal}
              width='80px'
              white
              margin='0 15px 0 0'
            >
              <Icon name='close' />닫기</Button>
            <Button
              width='auto'
              white
            >
              <Link href='/order/basket'><a >장바구니 이동</a></Link>
            </Button>
          </div>

          <Button margin='0 0 0 20px' login onClick={handleSubmit}>바로구매 하기</Button>
        </S.Footer>
      </S.Containers>
    </S.BasketModal>
  );
}
