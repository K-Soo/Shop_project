import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios, { AxiosResponse } from "axios";
import Product from "components/Product";
import { PostType } from "models/post.interface"; //add
import { Post, Get } from "api";
interface IMainContainer {
  className?: string;
  children: React.ReactNode;
  arry?: number[]
}
interface IProduct {
  id: number;
  floor: string;
  name: string;
  roomType: string;
  // roomType2: string;
}

function MainContainer({ className, children }: IMainContainer) {
  const [items, setItems] = useState<IProduct[] | null>(null);
  const [posts, setPosts] = useState<PostType[]>();

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
    <main className={className}>
      {/* {items && items.map((d) => (
        <Product key={d.id}/>
      ))} */}
      {/* <Product items={items} /> */}
      {children}
    </main>
  );
};

export default styled(MainContainer)`
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
  border: 1px solid #000;
  height: 700px;
  ${({ theme }) => theme.mobile`
    padding: 0;
  `}
`;
