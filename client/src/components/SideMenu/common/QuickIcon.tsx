import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import Link from "next/link";
import { TQuickIconProps } from 'constants/sideMenu';
import { IconType } from 'components/Icon/Icon';
interface IQuickIcon {
  lists: TQuickIconProps[];
}

const S = {
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
     padding: 7px 0;
     border-radius: 5px;
     cursor: pointer;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     &:hover{
      background-color: #fafafa;
      border: 1px solid #999;
      color: #999;
      box-shadow: inset 0 0 5px #fafafa, 0 0 5px #999;
      transform: scale(1.01);
      transition: transform 0.1s ease;
     }
     &:nth-child(n + 5){
       margin-top: 4px;
     }
     .name{
       padding-top: 3px;
     }
     a{
       display:inline-block;
       width: 100%;
       font-size: 10px;
       color: #555;
       i{
         font-size: 0;
        svg{
         color: #444;
          width: 24px;
          height: 24px;
       }
       }
     }
  `,
}

export default function QuickIcon({lists}: IQuickIcon) {
  return (
    <S.QuickIcon>
      <S.List>
        {lists && lists.map((d) => (
          <S.Item key={d.url}>
            <Link href={d.url}>
              <a>
                <i>
                <Icon name={d.icon as IconType} />
                </i>
              </a>
            </Link>
            <Link href={d.url}>
              <a className='name'>
                {d.label}
              </a>
            </Link>
          </S.Item>
        ))}
      </S.List>
    </S.QuickIcon>
  )
};

