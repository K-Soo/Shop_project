import React, { useState } from "react";
import styled from "styled-components";
import { category, categoryType } from 'components/Product';
import Title from 'components/style/Title';
import { PRODUCT } from '../../../utils/constants/product';
import HamburgerIcon from 'components/Product/Common/HamburgerIcon';
import HamburgerMenuList from 'components/Product/Common/HamburgerMenuList';

interface IProductCategory {
  currentProduct: categoryType
  keyName: keyof typeof category;
}

const S = {
  ProductCategory: styled.article`
    margin-bottom: 15px;
  `,
  SubTitle: styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 2px solid #e8e8e8;
    margin-bottom: 10px;
    height: 35px;
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
    ${({ theme }) => theme.mobile`
        justify-content: center;
        height: 60px;
        align-items: center;
        border-bottom: none;
        margin-bottom: 0px;
        ${Title}{
          font-size: 20px;
          &::after{
            content: none;
          }
        }
    `}
  `,
  CategorySubList: styled.div`
    border: solid #e8e8e8;
    border-width: 1px 0px;
    padding: 15px 5px;
    display: none;
    color: #777;
    .list{
      /* border: 2px solid orange; */
      display: flex;
      flex-wrap: wrap;
      &__item{
        flex: 1 30%;
        padding: 5px;
        border: 1px solid #333;
        font-size: 12px;
        border-radius: 15px;
        text-align: center;
      }
    }
  ${({ theme }) => theme.mobile`
        display: block;
    `}
  `,
}

export default function ProductCategory({ currentProduct, keyName }: IProductCategory) {
  const [toggleSubMenu, setToggleSubMenu] = useState<boolean>(false);
  console.log('toggleSubMenu: ', toggleSubMenu);

  return (
    <S.ProductCategory>
      <S.SubTitle>
        <Title level={3} size='24' textAlign='left'>{currentProduct}</Title>
        <HamburgerIcon onClick={() => setToggleSubMenu(!toggleSubMenu)} toggleSubMenu={toggleSubMenu}/>
        <HamburgerMenuList productSubList={PRODUCT[keyName]} toggleSubMenu={toggleSubMenu}/>
      </S.SubTitle>
      <S.CategorySubList>
        <ul className='list'>
          <li className='list__item'>ALL</li>
          {PRODUCT[keyName].map(d => (
            <li key={d.label} className='list__item'>
              {d.label}
            </li>
          ))}
        </ul>
      </S.CategorySubList>
    </S.ProductCategory>
  );
}
