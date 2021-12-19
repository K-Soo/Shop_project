import React, { useEffect, useState} from "react";
import styled from "styled-components";
import PageTitle from 'components/Common/PageTitle';
import SearchBox from 'components/ProductSearch/SearchBox';
import ProductSortMenu from 'components/Common/ProductSortMenu';
import useSearch from 'hooks/useSearch';
import { NextRouter, useRouter } from 'next/router';
import ProductList from 'components/Product/ProductList';
import { useSort } from 'hooks/useSort';

const S = {
  ProductSearch: styled.section`
  `,
}

export default function ProductSearch() {
  const router: NextRouter = useRouter();
  const [sort, setSort] = useState('row');
  const { FilteredData, isSuccess, setFilter, filter, isLoading } = useSearch();

  useEffect(() => {
    const { keyword } = router.query as any;
    setFilter(keyword);
  }, [router.query,setFilter]);

  return (
    <S.ProductSearch>
      <PageTitle TitleText='상품검색' />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ProductSortMenu itemCount={FilteredData.length} setSort={setSort} />
      {isSuccess && <ProductList items={FilteredData}  sort={sort}  isLoading={isLoading} isSuccess={isSuccess} />}
    </S.ProductSearch>
  );
}
