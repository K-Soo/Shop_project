import React, { useEffect, useState, useRef } from "react";
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
import { useReviewContext } from 'context/ReviewProvider';
import Select from 'components/style/Select';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import { charConvert } from 'utils';

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
  filterTap: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    color: #505050;
    .review-filter{
      display: flex;
      p{
        display: flex;
        align-items: flex-end;
        i{
          display: inline-block;
          font-size: 0;
          padding-right: 5px;
          svg{
          color: #505050;
          }
        }
        span{
          color: #505050;
        }
      }
    }
  `,
  List: styled.div`
    border-top: 1px solid rgb(144, 144, 144);
    .item{
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      /* height: 100px; */
      padding: 16px 20px;
      color: #505050;
      font-size: 14px;
      border-bottom: 1px solid rgb(144, 144, 144);
      &__user-info{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid red;
        padding-bottom: 10px;
      }
      &__desc{
        border: 1px solid red;
        display: flex;
        justify-content: space-between;
        max-height: 120px;
        &--text{
          border: 3px solid red;
          display: block; 
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          /* width: calc(80%); */
        }
        &--img{
          border: 3px solid #000;
          width: 120px;
          /* height: 120px; */
        }
        /* text-align: left; */
        /* height: 60px; */
        /* width: 300px; */
        /* overflow: hidden; */
        /* white-space: nowrap; */
        /* text-overflow: ellipsis; */
      }
    }
    ${({ theme }) => theme.mobile`
    .item{
      height: 85px;
      border: solid rgb(248, 248, 248);
      border-width: 0 0 6px 0;
      &__user-info{
        justify-content: space-between;
      }
    }
  `}
  `,

}
const StyledRate = styled(Rate)`
  &.rc-rate {
    font-size: 14px;
    color: #000;
    margin: 0;
    .rc-rate-star{
      margin: 0;
    }
    ${({ theme }) => theme.mobile`
      font-size: 14px;
    }`}
  }
`

export default function ReviewListTap({ item, reviewData }: IReviewListTap) {
  const router: NextRouter = useRouter();
  const App = useAppContext();
  const Review = useReviewContext();
  const TextRef = useRef(null);


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

      <S.filterTap>
        <div className='review-filter'>
          <p>
            <i><Icon name='menu2' /></i>
            <span>전체 리뷰 ({reviewData.length})</span>
          </p>
          <p>
            <i><Icon name='menu2' /></i>
            <span>사진 리뷰</span>
          </p>
        </div>
        <Select width='140' height='35'>
          <option value="">aasd</option>
          <option value="">aasd</option>
          <option value="">aasd</option>
        </Select>
      </S.filterTap>


      <S.List>
        {reviewData.map(d => (
          <div key={d._id} className='item'>
            <div className='item__user-info'>
              <div>
                <StyledRate
                  defaultValue={Number(d.rate)}
                  disabled={true}
                />
                <span style={{ margin: '0 10px' }}>{charConvert(d.commenter.userName)}</span>
              </div>
              <p>{d.createdAt}</p>
            </div>
            <div className='item__desc'>
              <div id='target-height' ref={TextRef} className='item__desc--text' dangerouslySetInnerHTML={{ __html: d.comment }} />

              <div className='item__desc--img'>
                d
              </div>
            </div>

          </div>
        ))}
      </S.List>
    </S.ReviewListTap>
  );
}
