import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from "next/image";
import PAGE from 'constants/path';

interface IMainLogo {
  className?: string;
}

const S = {
  MainLogo: styled.div`
    height: 80px;
    text-align: center;
    a{
      display: inline-block;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        object-fit: contain;
      }
    }
  `,
}

export default function MainLogo({ className }: IMainLogo) {

  return (
    <S.MainLogo className={className}>
      <Link href={PAGE.MAIN.path}>
        <a>
          <Image className='main-logo' src="/images/main_logo.png" width={300} height={70} alt='main_logo' />
        </a>
      </Link>
    </S.MainLogo>
  )
};
