import React from "react";
import styled from "styled-components";
import Button from 'components/style/Button';

interface IPagination {
  prevPage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  nextPage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  currentPage: number;
  maxPages: number;
}

const S = {
  Pagination: styled.div`
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

export default function pagination({ currentPage,prevPage, nextPage,maxPages }: IPagination) {
  console.log('maxPages: ', maxPages);
  return (
    <S.Pagination>
      <div className='wrapper'>
        <Button white onClick={prevPage} disabled={currentPage <= 1}>이전</Button>
        <span className='page-number'>{currentPage}</span>
        <Button white onClick={nextPage} disabled={maxPages <= currentPage}>{ maxPages <= currentPage ? '마지막':'다음'}</Button>
      </div>
    </S.Pagination>
  );
}
