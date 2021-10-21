/* eslint-disable @next/next/no-img-element */
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
    font-size: 14px;
    .review-filter{
      display: flex;
      align-items: center;
      p:first-child{
        border: 1px solid red;
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
        span{
          color: #505050;
        }
      }
    }
  `,
  List: styled.div`
    border-top: 1px solid rgb(144, 144, 144);
    .item{
      cursor:pointer;
      display:flex;
      justify-content: space-between;
      padding: 15px 20px;
      color: #505050;
      font-size: 14px;
      border-bottom: 1px solid #eee;
      &[data-active=true] {
        min-height: 150px;
        flex-direction: column;
        .desc-box{
          &__text{
            max-width: 500px;
            p{
              overflow: visible;
              text-overflow: clip;
              white-space: normal;
            }
          }
        }
        .image-box{
          margin: 0;
        }
      }
      .desc-box{
        pointer-events: none;
        flex: 1;
        &__user-info{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-bottom: 10px;
        p{
          font-size: 12px;
          color: #999;
        }
      }
      &__text{
        max-width: 400px;
        p{
          overflow: hidden;
          display: block;
          text-align: left !important;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      &__text *{
          /* display: flex; */
          /* text-align: left; */
        }
      }
      .image-box{
        pointer-events: none;
        border: 1px solid #eee;
        margin-left: 15px;
        font-size: 0;
          width: 120px;
          height: 120px;
          font-size: 0;
          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
      }
    }
    ${({ theme }) => theme.mobile`
    .item{
      height: 100px;
      border: solid rgb(248, 248, 248);
      border-width: 0 0 6px 0;
      padding: 10px 20px;
      .desc-box{
        &__user-info{
          justify-content: space-between;
        }
        &__text{
        max-width: 200px;
        }
      }
      .image-box{
        height: 80px;
        width: 80px;
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
  }
`

export default function ReviewListTap({ item, reviewData }: IReviewListTap) {
  console.log('item: ', item);
  console.log('reviewData: ', reviewData);
  const [active,setActive] = useState('');
  const router: NextRouter = useRouter();
  const App = useAppContext();
  const Review = useReviewContext();
  const TextRef = useRef(null);

  
  useEffect(() => {
    const cntImage = reviewData.reduce((acc,cur) => acc + Number(cur.url),0)
    console.log('cntImage: ', cntImage);
  },[])


  const handleRouter = () => {
    if (App.state.userInfo.idx) {
      Review.action.setProduct(item);
      router.push({
        pathname: '/product/review',
        query: { idx: App.state.userInfo.idx, productId: item[0]._id },
      });
    } else {
      alert('로그인후 이용가능합니다.');
    }
  }

  const handleItem = (e) => {
    const { id } = e.target;
    setActive(id);
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
          <div key={d._id} className='item' id={d._id} onClick={handleItem} data-active={d._id === active}>
            <div className='desc-box'>
              <div className='desc-box__user-info'>
                <div>
                  <StyledRate
                    defaultValue={Number(d.rate)}
                    disabled={true}
                  />
                  <span style={{ margin: '0 10px' }}>{charConvert(d.commenter.userName)}</span>
                </div>
                <p className='date'>{d.createdAt}</p>
              </div>
              <div id='target-height' className='desc-box__text' ref={TextRef} dangerouslySetInnerHTML={{ __html: d.comment }} />
            </div>

            {d.url && (
              <div className='image-box'>
                <img className='image-box__img' src={d.url} alt="dd" />
              </div>
            )}
          </div>
        ))}
      </S.List>
    </S.ReviewListTap>
  );
}
