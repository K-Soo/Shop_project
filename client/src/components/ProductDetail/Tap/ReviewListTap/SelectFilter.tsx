import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Icon from 'components/Icon/Icon';
import Select from 'components/style/Select';
interface ISelectFilter {
  reviewCnt: number;
  totalImageReview: number;
  handleFiltered?: React.ChangeEventHandler<HTMLSelectElement>
}

const S = {
  SelectFilter: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    color: #505050;
    font-size: 14px;
    .review-filter{
      display: flex;
      align-items: center;
      p:first-child{
        margin-right: 10px;
      }
      p{
        display: flex;
        align-items: flex-end;
        i{
          display: inline-block;
          font-size: 0;
          padding-right: 5px;
          svg{
            color: #505050;
            height: 16px;
          }
        }
        .cnt{
          padding-left: 1px;
          color: #000;
        }
        span{
          color: #505050;
        }
      }
    }
  `,
}

export default function SelectFilter({ reviewCnt, totalImageReview, handleFiltered }: ISelectFilter) {
  return (
    <S.SelectFilter>
      <div className='review-filter'>
        <p>
          <i><Icon name='menu2' /></i>
          <span>전체 리뷰</span>
          <strong className='cnt'>({reviewCnt || 0})</strong>
        </p>
        <p>
          <i><Icon name='image' /></i>
          <span>사진 리뷰</span>
          <strong className='cnt'>({totalImageReview || 0})</strong>
        </p>
      </div>
      <Select width='140' height='35' onChange={handleFiltered}>
        <option value={-1} data-name='createdAt'>최신순</option>
        <option value={-1} data-name='rate'>평점 높은순</option>
        <option value={1} data-name='rate'>평점 낮은순</option>
      </Select>
    </S.SelectFilter>
  );
}
