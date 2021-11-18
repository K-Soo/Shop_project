import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Select from 'components/style/Select';

interface IProductSortMenu {
  itemCount?: number;
  setSort?: Dispatch<SetStateAction<string>>;
}

const S = {
  ProductSortMenu: styled.article`
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;
    .select-box{
      height: 100%;
      ${({ theme }) => theme.mobile`
        select{
          width: 100px;
        }
      `}
    }
    ${({ theme }) => theme.mobile`
      height: 25px;
      padding: 0 15px;
    `}
  `,
  ProductCount: styled.div`
    color: #222;
    font-weight: 400;
    text-align: center;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    strong{
      font-size: 18px;
      width: 100%;
      color: #000;
      &::after{
        content: 'ITEMS';
        margin-left: 5px;
        font-size: 16px;
        color: #353535;
      }
    }
  `,
}

export default function ProductSortMenu({ itemCount, setSort }: IProductSortMenu) {
  return (
    <S.ProductSortMenu>
      <S.ProductCount>
        <strong>
          {itemCount}
        </strong>
      </S.ProductCount>

      <div className='select-box'>
        <Select width='140' onChange={(e) => setSort(e.target.value)}>
          <option value="">상품정렬</option>
          <option value="row">낮은가격</option>
          <option value="hight">높은가격</option>
          <option value="new">신상품</option>
          <option value="best">인기상품</option>
        </Select>
      </div>
    </S.ProductSortMenu>
  );
}
