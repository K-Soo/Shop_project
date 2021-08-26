import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import Aside from 'components/Admin/Aside';
interface IAdmin {
  children?: ReactNode
}

const S = {
  Admin: styled.div`
    border: 6px solid #000;
    height: 100vh;
  `,
  Content: styled.div`
    margin: 0 auto;
    height: 100%;
    width: 800px;
    /* border: 6px solid red; */
  `,
}

export default function Admin({ children }: IAdmin) {
  const [openSide, setOpenSide] = useState<boolean>(false);

  return (
    <S.Admin>
      {/* <Aside openSide={openSide} onClick={() => setOpenSide(!openSide)}>
        <Aside.AsideItem />
      </Aside> */}
      <S.Content onClick={() => setOpenSide(false)}>
        {children}
      </S.Content>
    </S.Admin>
  );
}
