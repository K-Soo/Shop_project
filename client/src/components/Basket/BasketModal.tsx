import React from "react";
import styled from "styled-components";

interface IBasketModal {
  
}

const S = {
  BasketModal: styled.div`
  border: 1px solid red;
  height: 500px;
  width: 500px;
  `,
}

export default function BasketModal({}:IBasketModal) {
  return (
    <S.BasketModal>

    </S.BasketModal>
  );
}
