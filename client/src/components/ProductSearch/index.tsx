import React, { useEffect } from "react";
import styled from "styled-components";
import PageTitle from 'components/Common/PageTitle';
import SearchBox from 'components/ProductSearch/SearchBox';
import ProductSortMenu from 'components/Common/ProductSortMenu';
import useSearch from 'hooks/useSearch';
import { NextRouter, useRouter } from 'next/router';
import ProductList from 'components/Product/ProductList';

const S = {
  ProductSearch: styled.section`
  `,
}

export default function ProductSearch() {
  const router: NextRouter = useRouter();
  const { FilteredData, isSuccess, setFilter, filter } = useSearch();

  useEffect(() => {
    const { keyword } = router.query as any;
    setFilter(keyword);
  }, [router.query]);

  return (
    <S.ProductSearch>
      <PageTitle TitleText='상품검색'/>
      <SearchBox filter={filter} setFilter={setFilter}/>
      <ProductSortMenu itemCount={FilteredData.length}/>
      {isSuccess && <ProductList item={FilteredData}/>}
    </S.ProductSearch>
  );
}
