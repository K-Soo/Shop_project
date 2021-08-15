import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import axios, { AxiosResponse } from "axios";
import Product from "components/Product";
import { PostType } from "models/post.interface"; //add
import { Post, Get } from "api";
import Breadcrumb from "components/Common/Breadcrumb";
import { useRouter } from 'next/router';
import PAGE from "constants/path";

interface IMainContainer {
  className?: string;
  children?: React.ReactNode;
}
interface IProduct {
  id: number;
  floor: string;
  name: string;
  roomType: string;
  // roomType2: string;
}

const S = {
  MainContainer: styled.section`
    max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
  height: 700px;
  ${({ theme }) => theme.mobile`
    padding: 0;
  `}
  `,
}

export default function MainContainer({ className, children }: IMainContainer) {
  const [items, setItems] = useState<IProduct[] | null>(null);
  const [posts, setPosts] = useState<PostType[]>();
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    Get.products()
      .then(data => {
        console.log('data: ', data);
        setItems(data);
      })
      .catch(err => {
        // setIsError(true);
      });
  }, []);

  // useEffect(() => {
  //   async function getData(){
  //     const res:IProduct[] = await axios.get(URL).then(res => res.data);
  //     setItems(res);
  //   }
  //   getData();
  // },[]);

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

