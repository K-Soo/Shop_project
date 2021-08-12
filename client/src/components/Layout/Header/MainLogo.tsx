import React from 'react';
import styled from 'styled-components';
import { useRouter } from "next/router";
import Link from 'next/link';
import Image from "next/image";
import PAGE from 'constants/path';



interface IMainLogo {
  className?: string;
}

const S ={
  MainLogo: styled.div`
    height: 80px;
    text-align: center;
    a{
      display: inline-block;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img{
      object-fit: contain;
      border: 1px solid red;
      width: 300px;
      max-height: 70px;
    }
  `,
}

const MainLogo: React.FC<IMainLogo> = ({ className }) => {
  const router = useRouter();

  return (
    <S.MainLogo className={className}>
      <Link href={PAGE.MAIN.path}>
        <a>
          <Image className='main-logo' src="/images/main_logo.jpeg" width={100} height={80} alt='main_logo' />
        </a>
      </Link>
    </S.MainLogo>
  )
};


export default styled(MainLogo)`

`;