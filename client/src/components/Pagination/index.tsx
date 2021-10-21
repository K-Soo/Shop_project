import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import styled from "styled-components";
import usePaginate from 'hooks/usePaginate';
import { pageNumber } from 'utils';
import { useAppContext } from 'context/AppProvider';
import useDidMountEffect from 'hooks/useDidMountEffect';
import NumBtn from 'components/Pagination/NumBtn';
import TurnBtn from 'components/Pagination/TurnBtn';

interface IPagination {
  maxPages: number;
  isFetching:boolean;
}

const S = {
  Pagination: styled.div`
    .wrapper{
      display:flex;
      justify-content: center;
      align-items: center;
    }
  `,
}

export default function Pagination({ maxPages,isFetching }: IPagination) {
  const { state, action } = useAppContext();
  const [turnPage, setTurnPage] = useState<number>(1);
  const [checkLast, setCheckLast] = useState(false);
  console.log('----------turnPage: ', turnPage);
  const pageSize = 3;
  const maxT = Math.ceil(maxPages / pageSize);
  const maxTurn = Array.from({ length: maxT }, (v, i) => i + 1);
  console.log('maxTurn: ', maxTurn);
  const { array } = usePaginate(maxPages, pageSize, turnPage);
  console.log('array: ', array);

  console.log('maxPages: ', maxPages);
  useDidMountEffect(() => {
    if (array.length) {
      if (!checkLast) {
        action.InitData('pagination.currentPage', String(array[0]));
      } else {
        action.InitData('pagination.currentPage', String(array[array.length - 1]));
      }
    }
  }, [turnPage, array]);

  // maxPages : Math.ceil(total.pointInfo.length / limit),

  const handleFirstPage = () => {
    // 처음
    setCheckLast(false);
    setTurnPage(maxTurn[0]);
  }

  const handleLastPage = () => {
    // 마지막
    setCheckLast(true);
    setTurnPage(maxTurn[maxTurn.length - 1])
  }
  const handlePevPage = () => {
    // 이전
    if (turnPage > 1) {
      setCheckLast(false);
      setTurnPage(prev => prev - 1);
    }
  }
  const handleNextPage = () => {
    // 다음
    setCheckLast(false);
    setTurnPage(prev => prev + 1);
  }

  return (
    <S.Pagination >
      <div className='wrapper'>
        <TurnBtn onClick={handleFirstPage} disabled={isFetching || turnPage === 1}>처음</TurnBtn>
        <TurnBtn
          onClick={handlePevPage}
          disabled={isFetching || turnPage == 1}
        >이전
        </TurnBtn>
        {array && array.map(d => (
          <NumBtn 
            key={d}
            name='pagination.currentPage' 
            active={String(d) === state.pagination.currentPage} 
            value={d} onClick={action.setFormData} 
            disabled={isFetching}
            >{d}</NumBtn>
        ))}
        <TurnBtn
          onClick={handleNextPage}
          disabled={isFetching || turnPage === maxTurn[maxTurn.length - 1]}
        >다음
        </TurnBtn>
        <TurnBtn
          onClick={handleLastPage}
          disabled={isFetching || turnPage === maxTurn[maxTurn.length - 1]}
        >마지막
        </TurnBtn>
      </div>
    </S.Pagination>
  );
}
