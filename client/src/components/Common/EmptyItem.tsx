import React from "react";
import styled from "styled-components";
import Icon from 'components/Icon/Icon';

interface IEmptyItem {
  text: string
}

const S = {
  EmptyItem: styled.div`
    padding: 60px 0;
    .wrapper{
      margin: 0 auto;
      text-align: center;
      color: #999;
      i{
        display: block;
        font-size: 0;
        svg{
          color: #000;
        }
      }
      p{
        padding-top: 10px;
        font-size: 13px;
      }
    }
  `,
}

export default function EmptyItem({text}:IEmptyItem) {
  return (
    <S.EmptyItem>
      <div className='wrapper'>
        <i><Icon name='warning' /></i>
        <p>{text}</p>
      </div>
    </S.EmptyItem>
  );
}
