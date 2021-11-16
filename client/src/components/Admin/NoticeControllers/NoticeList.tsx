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

interface INoticeList {
  
}

const S = {
  NoticeList: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  ButtonBox: styled.div`
    button{
      height: 25px;
    }
  `,
}

export default function NoticeList({}:INoticeList) {
  const App = useAppContext();
  const currentPage = Number(App.state.pagination.currentPage);
  const router: NextRouter = useRouter();

  const { data, isLoading, isSuccess, isError, isFetching } = useQuery<NoticeProps>([queryKeys.NOTICE_LIST.name, currentPage, queryKeys.NOTICE_LIST.limit], async () => await Get.getNoticeList(currentPage, queryKeys.NOTICE_LIST.limit), {
    retry: 0,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: 2000,
    // select: selectFc,
  });
  if (isError) return <div>isError</div>

  if (isLoading) return <div>loading</div>

  return (
    <S.NoticeList>
      <div>
      <PageTitle TitleText='공지사항' />
      <List items={data.items} isLoading={isLoading} />
      </div>
      <div>
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
      {isSuccess && (<Pagination maxPages={data.maxPages} isFetching={isFetching}/>)}
      </div>
    </S.NoticeList>
  );
}
