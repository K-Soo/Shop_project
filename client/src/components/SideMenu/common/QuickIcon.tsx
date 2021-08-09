import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import Link from "next/link";
import {QUICK_ICON_MENU} from '../../../../utils/constants/header';
interface IQuickIcon {
  className?: string;
}

const S ={
  QuickIcon: styled.div`
  margin: 10px 0;
  ul{
    display: flex;
    flex-wrap: wrap;
    li{
      flex-basis: 25%;
      border: 1px solid #e8e8e8;
      border-collapse: collapse;
      text-align: center;
      padding: 10px 0;
      margin-top: -1px;
      margin-left: -1px;
      a{
        display:inline-block;
        width: 100%;
        font-size: 10px;
        color: #555;
      }
      svg{
        border: 1px solid red;
      }
    }
  }
`,
}

const QuickIcon: React.FC<IQuickIcon> = (props) => {
  return (
    <S.QuickIcon>
    <ul>
      {QUICK_ICON_MENU.map((d) => (
        <li key={d.url}>
        <Icon name='bed' />
         <Link href={d.url}>
           <a>
           {d.label}
           </a>
          </Link>
        </li>
      ))}
    </ul>
  </S.QuickIcon>
  )
};


export default QuickIcon;