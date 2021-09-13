import React from "react";
import styled from "styled-components";
import Button from "components/style/Button";
import Icon from 'components/Icon/Icon';

const S = {
  NonMemBox: styled.div`
    margin-top: 15px;
    display: flex;
    font-size: 13px;
    p{
      flex-basis: 60%;
      color: #999;
      display: flex;
      align-items: center;
    }
    ${Button}{
      flex-basis: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      span{
        margin-left: 5px;
      }
      i{
        font-size: 0;
        height: 16px;
        svg{
        color: #333;
        height: 100%;
      }
      }
    }
  `,
}

export default function NonMemBox() {
  return (
    <S.NonMemBox>
      <p>
        비회원으로도 상품구매가 가능하나
        다양한 회원혜택에서 제외될 수 있습니다.
      </p>
      <Button white height='40px' >
        <i>
        <Icon name='userNot' />
        </i>
        <span>
          비회원 구매
        </span>
      </Button>
    </S.NonMemBox>
  );
}
