import React from 'react';
import styled from 'styled-components';
import { useRouter } from "next/router";
import Link from 'next/link';
import PAGE  from '../../../../utils/path';



interface IImageBox {
  className?: string;
}

const ImageBox: React.FC<IImageBox> = ({ className }) => {
  const router = useRouter();

  return (
    <div className={className}>
      <Link href={PAGE.MAIN.path}>
        <a>
          ImageBox
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