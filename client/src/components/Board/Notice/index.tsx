import React from "react";
import styled from "styled-components";
import PageTitle from 'components/Common/PageTitle';
import List from 'components/Board/Notice/List';
import { Get } from "api";
import { queryKeys } from 'constants/queryKeys';
import Pagination from 'components/Pagination';
import { useQuery } from 'react-query';
import { useAppContext } from 'context/AppProvider';
import Button from 'components/style/Button';
import { useRouter, NextRouter } from 'next/router';
import PAGE from 'constants/path';
import { NoticeProps } from 'interfaces/INotice';

const S = {
  Notice: styled.section`
  .page-nation{
    margin-top: 25px;
  }
  `,
}

export default function Notice() {
  const App = useAppContext();
  const currentPage = Number(App.state.pagination.currentPage);
  const router: NextRouter = useRouter();

  const { data, isLoading, isSuccess, isError, isFetching } = useQuery<NoticeProps>([queryKeys.NOTICE_LIST.name, currentPage, queryKeys.NOTICE_LIST.limit], async () => await Get.getNoticeList(currentPage, queryKeys.NOTICE_LIST.limit), {
    retry: 0,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: 2000,
  });
  if (isError) return <div>isError</div>

  if (isLoading) return <div>loading</div>

  return (
    <S.Notice>
      <PageTitle TitleText='공지사항' />
      <List items={data.items} isLoading={isLoading} />
      {isSuccess && (<Pagination className='page-nation' maxPages={data.maxPages} isFetching={isFetching}/>)}
    </S.Notice>
  );
}
