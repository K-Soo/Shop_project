import React,{useEffect,useState} from "react";
import Head from "next/head";
import MainContainer from 'container/MainContainer';
import Product from 'components/Product';
import axios from 'axios';


export default function GoldPage() {
  const [item,setItem] = useState<null | any>(null);
  const URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'

  const GetItem = async () => {
    try {
      const res = await axios.get(URL);
      setItem(res.data);
    } catch (error) {
    }
  }


  useEffect(() => {
    GetItem();
  },[])

  return (
    <>
      <Head>
        <title>쥬얼리 | 순금</title>
      </Head>
      <MainContainer >
        <Product item={item && item.slice(0,9)}/>
      </MainContainer>
    </>
  );
}
