import React from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import Link from 'next/link';
import PAGE from 'constants/path';

interface IBanner {
  ScrollActive: boolean;
}

const S = {
  Banner: styled.div<{ ScrollActive: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    ${props => props.ScrollActive && css`
      opacity: 1;
      transition: opacity 1s ease;
    `}
  `,
}

export default function Banner({ ScrollActive }: IBanner) {
  return (
    <S.Banner ScrollActive={ScrollActive}>
      <Link href={PAGE.MAIN.path}>
        <a>
          <Image className='main-logo' src="/images/main_logo.png" width={100} height={35} alt='main_logo' />
        </a>
      </Link>
    </S.Banner>
  );
}
