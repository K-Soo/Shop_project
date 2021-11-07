import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Banner from 'components/Main/Banner';
import MultiBanner from 'components/Main/MultiBanner';
import MainTitle from 'components/Main/MainTitle';
import SectionLayout from 'components/Main/SectionLayout';
import PageTitle from 'components/Common/PageTitle';
import List from 'components/Board/Notice/List';
import { Get } from "api";
import { queryKeys } from 'constants/queryKeys';
import Pagination from 'components/Pagination';
import { useQuery, UseQueryResult, useQueryClient, useQueries } from 'react-query';
import { useAppContext } from 'context/AppProvider';
import Button from 'components/style/Button';
import { useRouter, NextRouter } from 'next/router';
import PAGE from 'constants/path';
import { NoticeProps } from 'interfaces/INotice';
import { IProduct } from 'interfaces/IProduct';
import ProductList from 'components/Product/ProductList';

interface IMain {

}

const S = {
  Main: styled.section`
  `,
}

export default function Main({ }: IMain) {
  const [queryString, setQueryString] = useState({
    best: 1,
    new: 1,
  });

  const results = useQueries([
    { queryKey: ['products', 'best', queryString.best], queryFn: async () => await Get.getAllProduct('best', queryString.best), keepPreviousData: true, refetchOnWindowFocus: false },
    { queryKey: ['products', 'new', queryString.new], queryFn: async () => await Get.getAllProduct('new', queryString.new), keepPreviousData: true, refetchOnWindowFocus: false },
  ])
  const handlePages = useCallback((e) => {
    const { name,id } = e.target;
    console.log('id: ', id);
    setQueryString({ ...queryString, [name]: queryString[name] + 1 });
    let buttonHeight = document.getElementById(id);
    let topPos = buttonHeight.offsetTop;

    setTimeout(() => {
      window.scrollTo({
        top: topPos,
        behavior: 'smooth',
      })
    },500);
  }, [queryString]);

  return (
    <S.Main>
      <Banner />
      <MultiBanner />
      <SectionLayout
        name='best'
        title='BEST ITEM'
        text='현재 가장 많은 판매를 기록중인 아이템'
        isLoading={results[0].isLoading}
        isSuccess={results[0].isSuccess}
        isFetching={results[0].isFetching}
        data={results[0].data}
        handlePages={handlePages}
      />
      <SectionLayout
        name='new'
        title='NEW ARRIVALS'
        text='핫하게 업뎃된 신상품!!'
        isLoading={results[1].isLoading}
        isSuccess={results[1].isSuccess}
        isFetching={results[1].isFetching}
        data={results[1].data}
        handlePages={handlePages}
      />
    </S.Main>
  );
}
