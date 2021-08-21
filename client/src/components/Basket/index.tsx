import React from "react";
import styled from "styled-components";
import NonLogin from 'components/Basket/NonLogin';
import Title from 'components/style/Title';

interface IBasket {

}

const S = {
  Basket: styled.div`
  `,
  SubTitle: styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #e8e8e8;
    margin-bottom: 10px;
    height: 35px;
    width: 100%;
    margin: 0 auto;
    ${Title}{
      position: relative;
      &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: -2px;
        left: 0;
        background: #333;
      }
    }
  `,
  Content: styled.table`
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
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
        /* padding: 10px 0; */
        border-bottom: 1px solid #f0f0f0;
        text-align: center;
      }
      tbody{
      }
    }
  `,
}

export default function Basket({ }: IBasket) {
  return (
    <S.Basket>
      <NonLogin />
      <S.SubTitle>
        <Title level={3} size='24' textAlign='left'>일반상품</Title>
      </S.SubTitle>
      <S.Content>
        <table>
          <caption>장바구니 목록 기본배송</caption>
          <colgroup>
            <col width="10%" />
            <col width="10%" />
            <col width="10%" />
            <col width="10%" />
            <col width="10%" />
            <col width="10%" />
            <col width="10%" />
            <col width="10%" />
            <col width="10%" />
            <col width="10%" />
          </colgroup>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>이미지</th>
              <th>상품정보</th>
              <th>판매가</th>
              <th>수량</th>
              <th>적립금</th>
              <th>배송구분</th>
              <th>배송비</th>
              <th>합계</th>
              <th>선택</th>
            </tr>
          </thead>
          <tbody>
            <tr className='record'>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <img />
              </td>
              <td>
                <strong>name</strong>
                <i>icon</i>
                <span>옵션</span>
              </td>
              <td>
                <b>판매가</b>
                <b>판매가</b>
              </td>
              <td>
                <input type="number" />
                <button type='button'>변경</button>
              </td>
              <td>
                <p>-</p>
              </td>
              <td>
                <span>기본배송</span>
              </td>
              <td>
                <span>2500원</span>
              </td>
              <td>
                <strong>합계금</strong>
              </td>
              <td>
                <div>
                  <button>주문하기</button>
                  <button>주문하기</button>
                  <button>주문하기</button>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                ddd
              </td>
            </tr>
          </tfoot>
        </table>
      </S.Content>
    </S.Basket>
  );
}
