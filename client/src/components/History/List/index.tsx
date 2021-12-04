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
  const currentPage = Number(App.state.pagination.currentPage);
  const fallback: Array<null> = [];
  const queryClient = useQueryClient();
  const limit = 2;

  const { data : responseData = [], isLoading, isSuccess, isError, isFetching } = useQuery([queryKeys.HISTORY, idx, currentPage, limit], async () => await Get.getHistory(idx, currentPage, limit), {
    retry: 0,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: 2000,
    enabled: !!idx,
  });
  
  useEffect(() => {
    if (currentPage < responseData.total) {
      const nextPreFetchPage = currentPage + 1;
      queryClient.prefetchQuery([queryKeys.HISTORY, idx, nextPreFetchPage], () => Get.getHistory(idx, currentPage, limit));
    }
  }, [currentPage, queryClient, idx, responseData.total]);

  if(isError){
    return <div>error</div>
  }
  
  return (
    <S.List>
      <PageTitle TitleText='주문내역 리스트' />
      <Guide />
      <FormFieldset title={isSuccess && `주문 상품 정보 (${responseData.total})`}>
        <Content items={responseData} isLoading={isLoading} isSuccess={isSuccess} />
        {isSuccess && responseData.data.length > 0 && (
          <>
          <Pagination maxPages={responseData.maxPages} isFetching={isFetching} />
          </>
        )}
      </FormFieldset>
    </S.List>
  );
}
