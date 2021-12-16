import React from "react";
import styled, { css } from "styled-components";
import Link from 'next/link';
import { useAppContext } from 'context/AppProvider';
import {useRouter} from 'next/router';

interface IHamburgerMenuList {
  productSubList: any;
}

const S = {
  HamburgerMenuList: styled.div<{ toggleSubMenu: boolean }>`
    z-index: 10;
    position: absolute;
    border:1px solid #f0f0f0;
    top: 35px;
    left: 0;
    height: auto;
    width: 100%;
    background-color: #fff;
    padding: 30px;
    box-shadow: 0 30px 30px -50px rgb(0 0 0);
 
    ${props => props.toggleSubMenu ? css`
      visibility: visible;
      opacity: 1;
      transition: all 0.3s ease;
    ` : css`
    visibility: hidden;
    opacity: 0;
    `}
    .sub-category-box{
      font-size: 14px;
      &__item{
        cursor: pointer;
        padding: 10px 0 10px 10px;
        border-top: 1px solid #f0f0f0;
        :hover{
          background-color: #F9F9F9;
        }
      }
      .all{
        border: none;
      }
    }
    ${({ theme }) => theme.mobile`
        display: none;
    `}
  `,
}

export default function HamburgerMenuList({ productSubList }: IHamburgerMenuList) {
  const { action,state } = useAppContext();
  const router = useRouter();

  const handleCategoryDetailTypes = (e:React.MouseEvent<HTMLLIElement>) => {
    action.setCategory(e);
    const { name } = (e.target as HTMLLIElement).dataset;
    router.push({
      pathname: `/product/${router.query.category}`,
      query: { detail: name },
    });
  }

  
  return (
    <S.HamburgerMenuList toggleSubMenu={state.openSubMenu}>
      <ul className='sub-category-box'>
        <li className='sub-category-box__item all' data-name='all' onClick={handleCategoryDetailTypes}>전체</li>
        {productSubList && productSubList.map((d:any) => (
          <li key={d.label} data-name={d.label} className='sub-category-box__item' onClick={handleCategoryDetailTypes}>
            {d.label}
          </li>
        ))}
      </ul>
    </S.HamburgerMenuList>
  );
}
