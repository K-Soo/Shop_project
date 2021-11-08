import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PageTitle from 'components/Common/PageTitle';
import Guide from 'components/History/List/Guide';
import Content from 'components/History/List/Content';
import FormFieldset from 'components/Forms/FormFieldset';
import { useQuery, useQueryClient } from 'react-query';
import { Get } from "api";
import { queryKeys } from 'constants/queryKeys';
import Pagination from 'components/Pagination';
import { useAppContext } from 'context/AppProvider';


interface IList {
  idx: string;
}

const S = {
  List: styled.section`
  `,
}

export default function List({ idx }: IList) {
  const App = useAppContext();
  const currentPage  = Number(App.state.pagination.currentPage);
  const fallback: Array<null> = [];
  const queryClient = useQueryClient();
  const limit = 2;

  const { data = fallback, isLoading, isSuccess, isError, error, isFetching } = useQuery([queryKeys.HISTORY, idx, currentPage,limit], async () => await Get.getHistory(idx, currentPage,limit), {
    retry: 0,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: 2000,
    enabled: !!idx,                                      
  });
  
  useEffect(() => {
    if (currentPage < data.total) {
      const nextPreFetchPage = currentPage + 1;
      queryClient.prefetchQuery([queryKeys.HISTORY, idx, nextPreFetchPage], () => Get.getHistory(idx, currentPage,limit));
    }
  }, [currentPage, queryClient, idx, data.total]);
  
  return (
    <S.List>
      <PageTitle TitleText='주문내역 리스트' />
      <Guide />
      <FormFieldset title={isSuccess && `주문 상품 정보 (${data.total})`}>
        <Content items={data} isLoading={isLoading} isSuccess={isSuccess}/>
        {isSuccess && (<Pagination maxPages={data.maxPages} isFetching={isFetching}/>)}
      </FormFieldset>
    </S.List>
  );
}
