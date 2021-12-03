import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import PageTitle from 'components/Common/PageTitle';
import FormFieldset from 'components/Forms/FormFieldset';
import List from 'components/Point/List';
import Pagination from 'components/Pagination';
import { queryKeys } from 'constants/queryKeys';
import { useQuery, UseQueryResult, useQueryClient } from 'react-query';
import { useAppContext } from 'context/AppProvider';
import { PriceComma } from 'utils';
import { Get } from "api";
import IPoint, { IPointList } from 'interfaces/IPoint';

const S = {
  Point: styled.section`
  `,
}


export default function Point() {
  const App = useAppContext();
  const { state: { userInfo: { idx } } } = useAppContext();
  const queryClient = useQueryClient();
  const currentPage  = Number(App.state.pagination.currentPage);
  const limit = 4;

  const selectFc = useCallback((data) => {
      const filtered = data.pointInfo.map((d: any) => d.usedPoint > 0 ? { ...d, point: `-${PriceComma(d.usedPoint)}`, account: '사용 적립금' } :  { ...d, point: PriceComma(d.savedPoint), account: '상품구매 적립금' });
      return { ...data, pointInfo: filtered }
  }, []);

  const { data, isLoading, isSuccess, isError,isFetching } = useQuery<IPoint>([queryKeys.POINT_DETAIL, idx, currentPage, limit], async () => await Get.getPointList(idx, currentPage, limit), {
    retry: 0,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: 2000,
    enabled: !!idx,
    select: selectFc,
  });
  
  useEffect(() => {
    if(isSuccess){
      if (currentPage < data.maxPages) {
        let nextValue = currentPage;
        const nextPreFetchPage = nextValue += 1;
        queryClient.prefetchQuery([queryKeys.POINT_DETAIL, idx, nextPreFetchPage,limit], () => Get.getPointList(idx, currentPage,limit));
      }
    }
  }, [App.state.pagination.currentPage, queryClient, idx, isSuccess, currentPage]);
  
  return (
    <S.Point>
      <PageTitle TitleText='적립금' />
      <FormFieldset title='적립금 내역'>
        <List
          data={data}
          isSuccess={isSuccess}
          isLoading={isLoading}
          isError={isError}
        />
      </FormFieldset>
      {data?.pointInfo?.length && (<Pagination maxPages={data.maxPages} isFetching={isFetching}/>)}
    </S.Point>
  );
}
