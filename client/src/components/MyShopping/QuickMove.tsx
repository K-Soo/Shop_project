import React from "react";
import styled from "styled-components";
import { MY_SHOP_MENU } from 'constants/myshop';
import Icon, { IconType } from 'components/Icon/Icon';
import Link from 'next/link';

interface IQuickMove {

}

const S = {
  QuickMove: styled.div`
    border: 5px solid #f5f5f5;
  `,
  titleBox: styled.h3`
    padding: 25px 0;
    text-align: center;
    color: #444;
    font-size: 14px;
    border-bottom: 2px solid #f5f5f5;
  `,
  Lists: styled.ul`
  .item{
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #f0f0f0;
    &:hover{
      svg{
        color: #555;
      }
    }
    .icon{
      margin-right: 15px;
    }
    .desc{
      flex: 1;
      color: #555;
      &--title{
        font-weight: 600;
        font-size: 14px;
      }
      &--explanation{
        font-weight: 400;
        font-size: 12px;
      }
    }
    .arrow{
      font-size: 0;
      margin-left: 10px;
    }

  }
  `,
}

export default function QuickMove({ }: IQuickMove) {
  return (
    <S.QuickMove>
      <S.titleBox>
        마이쇼핑 빠른메뉴
      </S.titleBox>
      <S.Lists>
        {MY_SHOP_MENU.map(d => (
          <li key={d.label} >
            <Link href={d.url}>
              <a className='item'>
                <div className='icon'>
                  <i><Icon name={d.icon as IconType} /></i>
                </div>
                <div className='desc'>
                  <span className='desc--title'>{d.label}</span>
                  <p className='desc--explanation'>{d.value}</p>
                </div>
                <div className='arrow'>
                  <i><Icon name='arrowRight' /></i>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </S.Lists>
    </S.QuickMove>
  );
}
