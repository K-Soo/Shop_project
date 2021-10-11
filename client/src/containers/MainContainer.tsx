import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Breadcrumb from "components/Common/Breadcrumb";
import PAGE from "constants/path";

interface IMainContainer {
  className?: string;
  children?: React.ReactNode;
  global?: any;
}

const S = {
  MainContainer: styled.main`
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
    margin: 0 auto;
    /* border: 1px solid red; */
    /* height: 100%; */
    ${({ theme }) => theme.mobile`
      padding: 0;
    `}
  `,
}

export default function MainContainer(props: IMainContainer) {
  return (
    <S.MainContainer >
      <Breadcrumb>
        {[PAGE.MAIN].map(({ path, tag }) => (
          <Link key={path} href={path}>
            {tag}
          </Link>
        ))}
      </Breadcrumb>
      {props.children}
    </S.MainContainer>
  );
};

