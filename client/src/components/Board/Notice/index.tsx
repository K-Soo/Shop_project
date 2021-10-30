import React from "react";
import styled from "styled-components";
import PageTitle from 'components/Common/PageTitle';
import List from 'components/Board/Notice/List';
import { Get } from "api";
import { queryKeys } from 'constants/queryKeys';
import Pagination from 'components/Pagination';
import { useQuery, UseQueryResult, useQueryClient } from 'react-query';
import { useAppContext } from 'context/AppProvider';
import Button from 'components/style/Button';
import { useRouter, NextRouter } from 'next/router';
import PAGE from 'constants/path';
import {NoticeProps} from 'interfaces/INotice';
interface INotice {

}

const S = {
  Notice: styled.div`
  `,
  ButtonBox: styled.div`
   button{
     height: 25px;
   }
 `,
}

export default function Notice({ }: INotice) {
  const App = useAppContext();
  const currentPage = Number(App.state.pagination.currentPage);
  const router:NextRouter = useRouter();

  const { data: items = [], isLoading, isSuccess, isError, isFetching } = useQuery<NoticeProps[]>([queryKeys.NOTICE_LIST.name, currentPage, queryKeys.NOTICE_LIST.limit], async () => await Get.getNoticeList(currentPage, queryKeys.NOTICE_LIST.limit), {
    retry: 0,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: 2000,
    // select: selectFc,
  });
  console.log('items: ', items);

  return (
    <S.Notice>
      <PageTitle TitleText='공지사항' />
      <List items={items} />
      <S.ButtonBox className='button-box'>
        <Button 
          white 
          type='submit' 
          width='100'
          onClick={() => router.push(PAGE.CREATE_NOTICE.path)}
        >
          등록
        </Button>
      </S.ButtonBox>
    </S.Notice>
  );
}
