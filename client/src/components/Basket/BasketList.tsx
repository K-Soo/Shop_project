import React from "react";
import styled from "styled-components";
import Button from 'components/style/Button';

interface IBasketList {

}

const S = {
  BasketList: styled.div`
    table{
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    caption{
      display: none;
    }
    th{
      background-color: #F9F9F9;
      border: 1px solid #f0f0f0;
      padding: 10px 0;
      color: #353535;
      font-weight: 400;
    }
    td{
      border: 1px solid #f0f0f0;
      text-align: center;
      vertical-align: middle;
      padding: 10px;
    }
    tbody{
    }
    }
  `,
}

export default function BasketList({ }: IBasketList) {
  return (
    <S.BasketList>
      <table>
        <caption>장바구니 목록 기본배송</caption>
        <colgroup>
          <col width="5%" />
          <col width="10%" />
          <col width="20%" />
          <col width="10%" />
          <col width="5%" />
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
              {/* <input type="number" /> */}
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
                <Button login height='28px' fontSize='11'>주문하기</Button>
                <Button white height='28px' fontSize='11'>관심상품등록</Button>
                <Button white height='28px' fontSize='11'>삭제</Button>
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              ddd
            </td>
            <td>
              ddd
            </td>
            <td>
              ddd
            </td>
            <td>
              ddd
            </td>
            <td>
              ddd
            </td>
          </tr>
        </tfoot>
      </table>
    </S.BasketList>
  );
}
