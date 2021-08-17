import React, { useState } from "react";
import styled from "styled-components";
import { category, categoryType } from 'components/Product';
import Title from 'components/style/Title';
import { PRODUCT } from '../../constants/product';
import HamburgerMenuList from 'components/Product/Common/HamburgerMenuList';
import HamburgerIcon from 'components/Common/HamburgerIcon';
import { useAppContext } from 'context/AppProvider';


interface IProductCategory {
  currentProduct: categoryType
  keyName: keyof typeof category;
}

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
    /* padding: 0 5px; */
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
        margin: 2px;
        flex: 1 30%;
        padding: 5px;
        font-size: 10px;
        border-radius: 15px;
        text-align: center;
        cursor: pointer;
        border: 1px solid #fff;
        &[data-active=true] {
          color: #212529;
          border: solid 1px #222529;
          background-color: #F9F9F9;
        }
        /* :hover{
          background-color: #F9F9F9;
          border: 1px solid #dde1e5;
        } */
      }
    }
  ${({ theme }) => theme.mobile`
        display: block;
    `}
  `,
}

export default function ProductCategory({ currentProduct, keyName }: IProductCategory) {
  const [toggleSubMenu, setToggleSubMenu] = useState<boolean>(false);
  const [category, setCategory] = useState('all');
  const { action } = useAppContext();


  const handleCategory = (e:React.MouseEvent<HTMLLIElement>) => {
    const { name } = (e.target as HTMLLIElement).dataset;
    setCategory(name);
    action.setCategory(name);
  }

  return (
    <S.ProductCategory>
      <S.SubTitle>
        <Title level={3} size='24' textAlign='left'>{currentProduct}</Title>
        <HamburgerIcon onClick={() => setToggleSubMenu(!toggleSubMenu)} toggle={toggleSubMenu} className='hamburger-icon' />
        <HamburgerMenuList productSubList={PRODUCT[keyName]} toggleSubMenu={toggleSubMenu} />
      </S.SubTitle>
      <S.CategorySubList category={category}>
        <ul className='list'>
          <li className='list__item' data-name='all' data-active={'all' === category} onClick={handleCategory} >ALL</li>
          {keyName && PRODUCT[keyName].map(d => (
            <li key={d.label} className='list__item' data-name={d.label} data-active={d.label === category} onClick={handleCategory} >
              {d.label}
            </li>
          ))}
        </ul>
      </S.CategorySubList>
    </S.ProductCategory>
  );
}
