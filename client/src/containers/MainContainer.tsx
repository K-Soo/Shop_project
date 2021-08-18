import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Breadcrumb from "components/Common/Breadcrumb";
import PAGE from "constants/path";

interface IMainContainer {
  className?: string;
  children?: React.ReactNode;
}

const S = {
  MainContainer: styled.main`
    max-width: 1200px;
    padding: 0 20px;
    margin: 0 auto;
    ${({ theme }) => theme.mobile`
      padding: 0;
    `}
  `,
}

export default function MainContainer({ className, children }: IMainContainer) {
  return (
    <S.MainContainer className={className}>
      <Breadcrumb>
        {[PAGE.MAIN].map(({ path, tag }) => (
          <Link key={path} href={path}>
            {tag}
          </Link>
        ))}
      </Breadcrumb>
      {children}
    </S.MainContainer>
  );
};

