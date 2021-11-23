/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Button from 'components/style/Button';
import Icon from 'components/Icon/Icon';
import { NextRouter, useRouter } from 'next/router';
import { useAppContext } from 'context/AppProvider';
import { IProduct } from 'interfaces/IProduct';
import { IReview, TItems } from 'interfaces/IReview';
import { useReviewContext } from 'context/ReviewProvider';
import Select from 'components/style/Select';
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import { charConvert } from 'utils';
import FsLightbox from 'fslightbox-react';
import EmptyItem from 'components/Common/EmptyItem';
import Pagination from 'components/Pagination';

interface IReviewListTap {
  item: IProduct[];
  items: TItems[];
  maxPages: number;
  isSuccess: boolean;
  isLoading: boolean;
  isFetching: boolean;
  children?: React.ReactNode;
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
        display: block;
        max-width: 400px;
        max-height: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        p{
          overflow: hidden;
          display: block;
          text-align: left !important;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      }
      .image-box{
        cursor: pointer;
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
      &[data-active=true] {
        min-height: 150px;
        flex-direction: column;
        .desc-box{
          margin-bottom: 15px;
          &__text{
            max-width: 100%;
            max-height: 100%;
            p{
              overflow: hidden;
              text-overflow: clip;
              white-space: pre-wrap;
            }
          }
        }
        .image-box{
          margin: 0;
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

export default function ReviewListTap({ item, items, maxPages, isSuccess, isLoading, isFetching ,children}: IReviewListTap) {
  const [active, setActive] = useState('');
  const [imageToggler, setImageToggler] = useState({
    toggle: false,
    url: '',
  });
  const router: NextRouter = useRouter();
  const App = useAppContext();
  const Review = useReviewContext();
  const TextRef = useRef(null);

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

  const handleItem = (e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = e.target as HTMLDivElement;
    setActive(prev => prev === id ? 'false' : id);
  }

  const handleImage = (e: any) => {
    setImageToggler({
      ...imageToggler,
      toggle: !imageToggler.toggle,
      url: e.target.src,
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

      {children}

      {isSuccess && (
        <>
        {items.length > 0 ? (
          <>
          <S.List>
            {items.length && items.map(d => (
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
                  <div className='image-box' onClick={handleImage}>
                    <img className='image-box__img' src={d.url} alt="dd" />
                  </div>
                )}
              </div>
            ))}
          </S.List>
          <Pagination maxPages={maxPages} isFetching={isFetching} margin='20px 0'/>
          </>
        ) : (
          <EmptyItem text='리뷰가 없습니다' />
        )}
        </>
      )}

      <FsLightbox
        toggler={imageToggler.toggle}
        sources={[
          imageToggler.url
        ]}
      />
    </S.ReviewListTap>
  );
}
