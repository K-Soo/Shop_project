import React from "react";
import styled from "styled-components";
import { IReview } from 'interfaces/IReview';

interface IReviewBanner {
  reviewData: IReview[];
}
const S = {
  Review: styled.div`
    margin: 20px 0;
    height: 70px;
    padding: 15px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    cursor: default;
    ul{
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #505050;
      font-size: 14px;
      li{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
      .cont{
        flex-basis: 25%;
        border-right: 1px solid #e0e0e0;
        text-align: center;
        font-weight: 600;
        p{
          display: block;
        }
      }
      .star{
        flex-basis: 40%;
        border-right: 1px solid #e0e0e0;
      }
      .desc{
        text-align: center;
        flex-basis: 35%;
      }
    }
    ${({ theme }) => theme.mobile`
      height: 60px;
      ul{
        font-size: 12px;
      }
      }
    `}
  `,
}

export default function ReviewBanner({ reviewData }: IReviewBanner) {
  console.log('reviewData: ', reviewData);
  return (
    <S.Review>
      <ul>
        <li className='cont'>
          <div>
            <span style={{ fontSize: '16px' }}>{reviewData && reviewData.length}</span>
            <p>review</p>
          </div>
        </li>
        <li className='star'>
          star
        </li>
        <li className='desc'>
          <p>
            구매자의 약 100%가<br />
            이제품을 추천합니다.
          </p>
        </li>
      </ul>
    </S.Review>
  );
}
