/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import FormFieldset from 'components/Forms/FormFieldset';
import Link from 'next/link';
import { Get } from "api";
import { queryKeys } from 'constants/queryKeys';
import { useQuery } from 'react-query';
import PAGE from 'constants/path';
import { NoticeProps } from 'interfaces/INotice';

const S = {
  MultiBanner: styled.div`
    margin-top: 30px;
    display:flex;
    flex-wrap: wrap;
    .block-1{
        flex: 1 33%;
        padding:0px;
        .content{
          padding: 0px;
        }
        &__notice{
          ul{
            padding-right: 10px;
            .item{
              margin-bottom: 10px;
              &:last-child{
              margin-bottom: 0px;
              }
              a{
                display: flex;
                justify-content: space-between;
                color: #888;
                &:hover{
                  color: #000;
                }
              }
              &__title{
                font-size: 14px;
              }
              &__date{
                font-size: 12px;
              }
            }
          }
        }
      }
      .block-2{
        font-size: 0;
        flex: 1 1 33%;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .block-3{
        font-size: 0;
        flex: 1 1 33%;
        img{
          width: 100%;
          height: 100%;
        }
      }
      ${props => props.theme.mobile`
        flex-direction: column;
      `}
  `,
}

export default function MultiBanner() {
  const currentPage = 1;
  const { data, isLoading, isSuccess, isError, isFetching } = useQuery<NoticeProps>([queryKeys.NOTICE_LIST.name, currentPage, queryKeys.NOTICE_LIST.limit], async () => await Get.getNoticeList(currentPage, queryKeys.NOTICE_LIST.limit), {
    retry: 0,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: 2000,
    // select: selectFc,
  });
  console.log('items: ', data);

  return (
    <S.MultiBanner>
      <FormFieldset title='뉴스 & 이벤트' className='block-1' LinkBtn={true}>
        <div className='block-1__notice'>
          {isLoading && <div>loading</div>}
          {isSuccess && (
            <ul>
              {data.items.map(d => (
                <li className='item' key={d._id}>
                  <Link href={`/board/notice/${d._id}`}>
                    <a>
                      <div className='item__title'>
                        {d.title}
                      </div>
                      <div className='item__date'>
                        {d.createdAt}
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </FormFieldset>

      <div className='block-2'>
        <img src="/images/main/02.jpeg" alt="banner-1" />
      </div>

      <div className='block-3'>
        <img src="/images/main/dangil.jpg" alt="banner-2" />
      </div>
    </S.MultiBanner>
  );
}