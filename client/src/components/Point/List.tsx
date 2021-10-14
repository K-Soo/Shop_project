import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useAppContext } from 'context/AppProvider';
import { useQuery, UseQueryResult, useQueryClient } from 'react-query';
import { Get } from "api";
import { queryKeys } from 'constants/queryKeys';
import IPoint from 'interfaces/IPoint';
import Link from 'next/link';
import {PriceComma} from 'utils';
import Loading from 'components/Common/Loading';

interface IList {

}

const S = {
  List: styled.div`
  `,
  Tap: styled.div<{text:string}>`
    border-bottom: 1px solid #000;
  .list{
    display: flex;
    .usedPoint{
      border-bottom: ${props => props.text === 'usedPoint' ? '3px solid #000;' : 'none' }
    }
    .currentPoint{
      border-bottom: ${props => props.text === 'currentPoint' ? '3px solid #000;' : 'none' };
    }
    &__item{
      color: #AAA;
      padding: 10px 0;
      cursor: pointer;
      font-size: 12px;
      &:first-child{
        span{
          border-right: 1px solid #f0f0f0
        }
      }
      span{
        padding: 0 15px;
        pointer-events: none;
      }
    }
  }
  `,
  Content: styled.div`
    margin-top: 15px;
    .item{
      display: flex;
      &__detail{
        flex: 1;
        text-align: center;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #f0f0f0;
        font-size: 12px;
        padding: 10px;
        color: #353535;
        &:nth-child(1){
          flex-basis: 20%;
        }
        &:nth-child(2){
          flex-basis: 20%;
        }
        &:nth-child(3){
          flex-basis: 20%;
        }
        &:nth-child(4){
          flex-basis: 40%;
        }
        ${({ theme }) => theme.mobile`
          font-size: 10px;
          padding: 10px 5px;
        }`}
      }
    }
  `,
  ContentHeader: styled.li`
    display: flex;
    background-color: #f9f9f9;
    text-align: center;
    .item{
      flex: 1;
      text-align: center;
      justify-content: center;
      padding: 14px 0;
      font-size: 12px;
      &:nth-child(1){
        flex-basis: 20%;
      }
      &:nth-child(2){
        flex-basis: 20%;
      }
      &:nth-child(3){
        flex-basis: 20%;
      }
      &:nth-child(4){
        flex-basis: 40%;
      }
    }
  `,
}
type TText = 'usedPoint' | 'currentPoint'

export default function List({ }: IList) {
  const [text, setText] = useState<TText>('usedPoint');
  const { state: { userInfo: { idx } } } = useAppContext();

  const selectFc = useCallback((data) => {
    if (text === 'usedPoint') {
      return data.pointInfo.map((d: any) => d.usedPoint > 0 ? { ...d, point: d.usedPoint * -1, account: '사용 적립금' } : null);
      // return  data;
    } else {
      return data.pointInfo.map((d: any) => d.savedPoint ? { ...d, point: d.savedPoint, account: '상품구매 적립금' } : null);
    }
  }, [text]);

  const { data, isLoading, isSuccess, isError, error, isFetching } = useQuery([queryKeys.POINT_DETAIL, idx], async () => await Get.getPoint(idx), {
    retry: 0,
    refetchOnWindowFocus: false,
    enabled: !!idx,
    staleTime: 2000,
    select: selectFc,
  });


  const handleTap = (e:React.MouseEvent<HTMLLIElement>) => {
    const { name } = (e.target as HTMLLIElement).dataset
    setText(name as TText);
  }

  if(isError) return <div>Error</div>

  return (
    <S.List>
      <S.Tap text={text}>
        <ul className='list'>
          <li 
            onClick={handleTap}
            data-name='usedPoint' 
            className='list__item usedPoint'
           >
            <span>사용된 적립금</span>
           </li>
          <li 
            onClick={handleTap}
            data-name='currentPoint' 
            className='list__item currentPoint'
            >
            <span>가용 적립금</span>
          </li>
        </ul>
      </S.Tap>

      <S.Content>
        <ul>
          <S.ContentHeader >
            <div className='item'>주문날짜</div>
            <div className='item'>적립금</div>
            <div className='item'>관련주문</div>
            <div className='item'>내용</div>
          </S.ContentHeader>

          {isLoading && <Loading isLoading={true} text=''/>}
          
          {isSuccess && (
            <>
              {data.length > 0 && data.map((d:any) => {
                if (d) {
                  return (
                    <li key={d._id} className='item'>
                      <div className='item__detail'>
                        {d.createdAt}
                      </div>
                      <div className='item__detail'>
                        {d.point}
                      </div>
                      <div className='item__detail'>
                      <Link href={`/users/history/details/${idx}/${d.orderNum}`}>
                          <a>
                            {d.orderNum}
                          </a>
                        </Link>
                      </div>
                      <div className='item__detail'>
                        {d.account}
                      </div>
                    </li>
                  )
                }
              })}
            </>
          )}
        </ul>
      </S.Content>
    </S.List>
  );
}
