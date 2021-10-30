import React from "react";
import styled from "styled-components";

interface IDetail {

}

const S = {
  Detail: styled.div`
  `,
}

export default function Detail(props: IDetail) {
  console.log('DetailDetail: ', props);
  return (
    <S.Detail>
      IDetail
    </S.Detail>
  );
}


