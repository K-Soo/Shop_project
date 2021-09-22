import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import PageTitle from 'components/Common/PageTitle';
import HistoryCalendar from 'components/History/List/HistoryCalendar';
import Guide from 'components/History/List/Guide';
import Content from 'components/History/List/Content';
import Pagination from 'components/History/List/Pagination';
import FormFieldset from 'components/Forms/FormFieldset';
import { NextRouter, useRouter } from 'next/router';
import { useQuery, UseQueryResult, useQueryClient } from 'react-query';
import { Get } from "api";
import { queryKeys } from 'constants/queryKeys';


interface IList {
  idx: string;
}

const S = {
  List: styled.section`
  `,
}

export default function List({ idx }: IList) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const fallback: Array<null> = [];
  const queryClient = useQueryClient();

  const { data = fallback, isLoading, isSuccess, isError, status, error, refetch } = useQuery([queryKeys.HISTORY, idx, currentPage], async () => await Get.getHistory(idx, currentPage), {
    retry: 0,
    keepPreviousData: true,
  });
  
  useEffect(() => {
    if (currentPage < data.maxPages) {
      const nextPreFetchPage = currentPage + 1;
      queryClient.prefetchQuery([queryKeys.HISTORY, idx, nextPreFetchPage], () => Get.getHistory(idx, currentPage));
    }
  }, [currentPage, queryClient, idx, data.maxPages]);


  return (
    <S.List>
      <PageTitle TitleText='주문내역 리스트' />
      <HistoryCalendar maxPages={data.maxPages}/>
      <Guide />
      <FormFieldset title='주문 상품 정보'>
        <Content items={data} isLoading={isLoading} />
        <Pagination
          currentPage={currentPage}
          prevPage={() => setCurrentPage(prev => prev - 1)}
          nextPage={() => setCurrentPage(prev => prev + 1)}
          maxPages={data.maxPages}
        />
      </FormFieldset>
    </S.List>
  );
}
