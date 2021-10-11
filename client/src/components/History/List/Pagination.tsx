import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from 'components/style/Button';

interface IPagination {
  prevPage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  nextPage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  currentPage: number;
  maxPages: number;
  isFetching:boolean;
}

const S = {
  Pagination: styled.div<{isHidden:boolean}>`
    margin-top: 20px;
    display: flex;
    .wrapper{
      margin: 0 auto;
      display: flex;
      align-items: center;
      ${Button}{
        height: 20px;
        width: 60px;
        font-size: 12px;
        border-radius: 10px;
      }
      .prev-btn{
        visibility: ${props => props.isHidden ? 'hidden' : 'visible'};
      }
      .page-number{
        display: inline-block;
        background-color: #636363;
        color: #fff;
        height: 30px;
        line-height: 2;
        width: 30px;
        border-radius: 50%;
        text-align: center;
        margin: 0 10px;
      }
    }
  `,
}

export default function Pagination({ currentPage, prevPage, nextPage, maxPages,isFetching }: IPagination) {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  useEffect(() => {
    if(currentPage <= 1){
      setIsHidden(true);
    }else{
      setIsHidden(false);
    }

  },[currentPage]);

  return (
    <S.Pagination isHidden={isHidden}>
      <div className='wrapper'>
        <Button white onClick={prevPage} className='prev-btn' disabled={isHidden || isFetching}>이전</Button>
        <span className='page-number'>{currentPage}</span>
        <Button white onClick={nextPage} disabled={maxPages <= currentPage || isFetching}>{maxPages <= currentPage ? '마지막' : '다음'}</Button>
      </div>
    </S.Pagination>
  );
}
