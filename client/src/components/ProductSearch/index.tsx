import React, { useEffect } from "react";
import styled from "styled-components";
import PageTitle from 'components/Common/PageTitle';
import SearchBox from 'components/ProductSearch/SearchBox';
import ProductSortMenu from 'components/Common/ProductSortMenu';
import useSearch from 'hooks/useSearch';
import { useAppContext } from 'context/AppProvider';
import { NextRouter, useRouter } from 'next/router';

interface IProductSearch {
  
}

const S = {
  ProductSearch: styled.section`
  `,
}

export default function ProductSearch({}:IProductSearch) {
  const router: NextRouter = useRouter();
  const { action, state } = useAppContext();

  // useEffect(() => {
  //   const { keyword } = router.query;
  //   action.InitData('keyword', keyword);
  //   console.log('---------------------------');
  // }, [router.query]);

  return (
    <S.ProductSearch>
      <PageTitle TitleText='상품검색'/>
      <SearchBox />
      <ProductSortMenu itemCount={3}/>
    </S.ProductSearch>
  );
}
