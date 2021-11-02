import React, { useState } from "react";
import { NextRouter, useRouter } from 'next/router';
import styled,{css} from "styled-components";
import { categoryType } from 'components/Product';
import Title from 'components/style/Title';
import { PRODUCT ,CategoryEnum } from '../../constants/product';
import HamburgerMenuList from 'components/Product/Common/HamburgerMenuList';
import HamburgerIcon from 'components/Common/HamburgerIcon';
import { useAppContext } from 'context/AppProvider';
import Icon from 'components/Icon/Icon';


interface IProductCategory {
  currentProduct: categoryType
  keyName: keyof typeof CategoryEnum;
}
const ItemCommon = css`
  margin: 2px;
  padding: 5px;
  font-size: 12px;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #fff;
  &[data-active=true] {
    color: #fff;
    border: solid 1px #222529;
    background-color: #333;
  }
`;
const S = {
  ProductCategory: styled.article`
    margin-bottom: 15px;
    width: 100%;
  `,
  SubTitle: styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 2px solid #e8e8e8;
    margin-bottom: 10px;
    height: 35px;
    width: 100%;
    margin: 0 auto;
    .redirect-icon{
      display: none;
      position: absolute;
      font-size: 0;
      left: 10px;
    }
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
      .redirect-icon{
        display: block;
      }
      ${Title}{
        font-size: 20px;
        &::after{
          content: none;
        }
      }
      .hamburger-icon{
        display: none;
      }
    `}
  `,
  CategorySubList: styled.div<{ category: string }>`
    border: solid #e8e8e8;
    border-width: 1px 0px;
    padding: 15px 5px;
    display: none;
    color: #777;
    .list{
      display: flex;
      flex-wrap: wrap;
      &__item{
        flex: 1 30%;
        ${ItemCommon}
      }
      &__all{
        flex: 1 100%;
        ${ItemCommon}
      }
    }
    ${({ theme }) => theme.mobile`
      display: block;
    `}
  `,
}

export default function ProductCategory({ currentProduct, keyName }: IProductCategory) {
  const { action, state } = useAppContext();
  const router: NextRouter = useRouter();

  return (
    <S.ProductCategory>
      <S.SubTitle>
        <i className='redirect-icon' onClick={() => router.back()}>
          <Icon name='BigArrowLeft' />
        </i>
        <Title level={3} size='24' textAlign='left'>{currentProduct}</Title>
        <HamburgerIcon className='hamburger-icon' toggle={state.openSubMenu} dataName='openSubMenu' onClick={action.setGlobalToggle}/>
        <HamburgerMenuList productSubList={PRODUCT[keyName]} />
      </S.SubTitle>

      <S.CategorySubList category={state.targetCategory}>
        <ul className='list'>
          <li 
            className='list__all'
            data-name='all' 
            data-active={'all' === state.targetCategory} 
            onClick={action.setCategory} 
          >
            ALL
          </li>
          {keyName && PRODUCT[keyName].map(d => (
            <li 
              key={d.label} 
              className='list__item' 
              data-name={d.label} 
              data-active={d.label === state.targetCategory} 
              onClick={action.setCategory}
             >
              {d.label}
            </li>
          ))}
        </ul>
      </S.CategorySubList>
    </S.ProductCategory>
  );
}
