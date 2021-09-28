import React from "react";
import styled from "styled-components";
import Button from 'components/style/Button';
import ReviewBanner from 'components/ProductDetail/ReviewBanner';
import Icon from 'components/Icon/Icon';
import { NextRouter, useRouter } from 'next/router';
import { useAppContext } from 'context/AppProvider';
import Link from 'next/link';
import { Post, Put } from 'api';
import { IProduct } from 'interfaces/IProduct';
import { IReview } from 'interfaces/IReview';
import {useReviewContext} from 'context/ReviewProvider';

interface IReviewListTap {
  item: IProduct[];
  reviewData: IReview[];
}

const S = {
  ReviewListTap: styled.div`
  `,
  ButtonBox: styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    button{
      height: 35px;
      font-size: 13px;
      width: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
      span{
        margin-left: 5px;
      }
      svg{
        width: 18px;
        height: 18px;
      }
    }
    ${({ theme }) => theme.mobile`
      button{
        height: 30px;
        font-size: 12px;
        svg{
          width: 15px;
          height: 15px;
        }
      }
    }
  `}
  `,
  List: styled.ul`
  
  `,
}

export default function ReviewListTap({ item,reviewData }: IReviewListTap) {
  const router: NextRouter = useRouter();
  const App = useAppContext();
  const Review = useReviewContext();

  const handleRouter = () => {
    Review.action.setProduct(item);
    router.push({
      pathname: '/product/review',
      query: { idx: App.state.userInfo.idx, productId: item[0]._id },
    });
  }

  return (
    <S.ReviewListTap>
      <S.ButtonBox className='button-box'>
        <Button black margin='0 20px 0 0' onClick={handleRouter}>
          <i><Icon name='pencil' /></i>
          <span>상품후기 쓰기</span>
        </Button>
        <Button white>
          <i><Icon name='menu2' style={{ color: '#333' }} /></i>
          <span>전체보기</span>
        </Button>
      </S.ButtonBox>

      <ReviewBanner reviewData={reviewData}/>

      <S.List>
        {reviewData.map(d => (
          <li key={d._id}>{d.comment}</li>
        ))}

      </S.List>

    </S.ReviewListTap>
  );
}
