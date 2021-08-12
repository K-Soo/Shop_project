import React from 'react';
import styled from 'styled-components';
import { useRouter } from "next/router";
import Link from 'next/link';
import Image from "next/image";
import PAGE  from 'constants/path';



interface IImageBox {
  className?: string;
}

const ImageBox: React.FC<IImageBox> = ({ className }) => {
  const router = useRouter();

  return (
    <div className={className}>
      <Link href={PAGE.MAIN.path}>
        <a>
          <Image src="/images/main_logo.jpeg" width={100} height={100}/>
        </a>
      </Link>
    </div>
  )
};


export default styled(ImageBox)`
  height: 80px;
  /* border: 1px solid red; */
  text-align: center;
`;