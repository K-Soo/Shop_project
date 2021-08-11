import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import Link from "next/link";
import {QUICK_ICON_MENU} from '../../../../utils/constants/header';

const S ={
  QuickIcon: styled.div`
    /* margin: 30px 0; */
  `,
  List: styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `,
  Item: styled.li`
     flex-basis: 24%;
     border: 1px solid #e8e8e8;
     text-align: center;
     padding: 10px 0;
     border-radius: 5px;
     cursor: pointer;
     display: flex;
     flex-direction: column;
     &:hover{
      background-color: #fafafa;
      border: 1px solid #999;
      color: #999;
      box-shadow: inset 0 0 5px #fafafa, 0 0 5px #999;
      transform: scale(1.1);
      transition: transform 0.1s ease;
     }
     &:nth-child(n + 5){
       margin-top: 4px;
     }
     a{
       display:inline-block;
       width: 100%;
       font-size: 10px;
       color: #555;
     }
  `,
}

export default function QuickIcon() {
  return (
    <S.QuickIcon>
    <S.List>
      {QUICK_ICON_MENU.map((d) => (
        <S.Item key={d.url}>
        <Link href={d.url}>
           <a>
           <Icon name='bed' />
           </a>
          </Link>

         <Link href={d.url}>
           <a>
           {d.label}
           </a>
          </Link>
        </S.Item>
      ))}
    </S.List>
  </S.QuickIcon>
  )
};

