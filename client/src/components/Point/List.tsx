import React from "react";
import styled from "styled-components";
import { useAppContext } from 'context/AppProvider';
import Link from 'next/link';
import Loading from 'components/Common/Loading';
import {IPointList} from 'interfaces/IPoint';
import EmptyItem from 'components/Common/EmptyItem';

interface IList {
  data: IPointList;
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
}

const S = {
  List: styled.div`
  `,
  Tap: styled.div`
    border-bottom: 1px solid #000;
  .list{
    display: flex;
    .all{
      border-bottom: 3px solid #000;
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
    min-height: 150px;
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

export default function List({ data, isSuccess, isLoading, isError }: IList) {
  const { state: { userInfo: { idx } } } = useAppContext();

  if (isError) return <div>Error</div>

  return (
    <S.List>
      <S.Tap >
        <ul className='list'>
          <li className='list__item all'>
            <span>전체</span>
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

          {isLoading && <Loading isLoading={true} text='' />}

          {isSuccess ? (
            <>
              {data.pointInfo.length > 0 && data.pointInfo.map((d: any) => {
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
          ):(
            <EmptyItem text='내역이 없습니다'/>
          )}
        </ul>
      </S.Content>
    </S.List>
  );
}
