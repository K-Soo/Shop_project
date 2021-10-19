import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PageTitle from 'components/Common/PageTitle';
import Guide from 'components/History/List/Guide';
import Content from 'components/History/List/Content';
import Pagination from 'components/History/List/Pagination';
import FormFieldset from 'components/Forms/FormFieldset';
import { useQuery, useQueryClient } from 'react-query';
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
  const limit = 1;

  const { data = fallback, isLoading, isSuccess, isError, error, isFetching } = useQuery([queryKeys.HISTORY, idx, currentPage,limit], async () => await Get.getHistory(idx, currentPage,limit), {
    retry: 0,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: 2000,
    enabled: !!idx,                                      
  });
  
  useEffect(() => {
    if (currentPage < data.maxPages) {
      const nextPreFetchPage = currentPage + 1;
      queryClient.prefetchQuery([queryKeys.HISTORY, idx, nextPreFetchPage], () => Get.getHistory(idx, currentPage,limit));
    }
  }, [currentPage, queryClient, idx, data.maxPages]);
  

  return (
    <S.List>
      <PageTitle TitleText='주문내역 리스트' />
      <Guide />
      <FormFieldset title={`주문 상품 정보 (${data.maxPages})`}>
        <Content items={data} isLoading={isLoading} isSuccess={isSuccess}/>
        <Pagination
          currentPage={currentPage}
          prevPage={() => setCurrentPage(prev => prev - 1)}
          nextPage={() => setCurrentPage(prev => prev + 1)}
          maxPages={data.maxPages}
          isFetching={isFetching}
        />
      </FormFieldset>
    </S.List>
  );
}
