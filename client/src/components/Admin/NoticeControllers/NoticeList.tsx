import React, { useState, useCallback } from "react";
import styled,{css} from "styled-components";
import List from 'components/Board/Notice/List';
import Pagination from 'components/Pagination';
import { useAppContext } from 'context/AppProvider';
import Button from 'components/style/Button';
import { useRouter, NextRouter } from 'next/router';
import PAGE from 'constants/path';
import useNotice from 'hooks/ReactQuery/useNotice';
import {Put} from 'api';
import { useSnackbar } from 'notistack';
import { useDeleteNotice } from 'hooks/ReactQuery/mutations';
import { useAdminContext } from 'context/AdminProvider';

const S = {
  NoticeList: styled.div<{isWhite:boolean}>`
    ${({ isWhite }) => !isWhite && css`
      *{
       color: #000 !important;
       transition: color 0.3s ease;
      }
    `}
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .page-nation{
      margin-top: 25px;
    }
  `,
  ButtonBox: styled.div`
    display: flex;
    justify-content: space-between;
    button{
      height: 30px;
    }
  `,
}

export default function NoticeList() {
  const router: NextRouter = useRouter();
  const [checkedArray, setCheckedArray] = useState([]);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { data, isLoading, isSuccess, isError, isFetching } = useNotice();
  const deleteNotice = useDeleteNotice();
  const { state, action } = useAdminContext();

  const handleCheckBox = useCallback((e) => {
    const { value, checked } = e.target
    if (checked) {
      setCheckedArray([...checkedArray, value]);
    } else {
      const result = checkedArray.filter(d => d !== value);
      setCheckedArray(result);
    }
  }, [checkedArray]);

  const handleDeletePost = async() => {
    closeSnackbar();
    if(!checkedArray.length){
      return enqueueSnackbar('삭제할 항목을 선택해주세요.', { variant: 'info' });
    }
    deleteNotice(checkedArray);
  }

  if (isError) return <div>isError</div>

  if (isLoading) return <div>loading</div>

  return (
    <S.NoticeList isWhite={state.isWhite}>
      <div>
        <List items={data.items} isLoading={isLoading} handleCheckBox={handleCheckBox} checkedArray={checkedArray} />
      </div>
      <div>
        <S.ButtonBox className='button-box'>
          <Button
            white
            type='submit'
            width='100'
            onClick={() => router.push(PAGE.CREATE_NOTICE.path)}
          >
            글쓰기
          </Button>

          <Button
            white
            type='button'
            width='100'
            onClick={handleDeletePost}
          >
            삭제
          </Button>
        </S.ButtonBox>
        {isSuccess && (<Pagination className='page-nation' maxPages={data.maxPages} isFetching={isFetching} />)}
      </div>
    </S.NoticeList>
  );
}
