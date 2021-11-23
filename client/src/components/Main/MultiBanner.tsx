/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import FormFieldset from 'components/Forms/FormFieldset';
import Link from 'next/link';
import { Get } from "api";
import { queryKeys } from 'constants/queryKeys';
import { useQuery } from 'react-query';
import { NoticeProps } from 'interfaces/INotice';

const S = {
  MultiBanner: styled.div`
    margin-top: 30px;
    display:flex;
    flex-wrap: wrap;
    .block-1{
        flex: 1 55%;
        padding:0px;
        margin-right: 30px;
        .content{
          padding: 0px;
        }
        &__notice{
          ul{
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
        display: flex;
        flex: 1 40%;
        height: 155px;
        img{
          width: 100%;
          height: 100%;
          object-fit: fill;
        }
      }
      ${props => props.theme.mobile`
        flex-direction: column;
        padding: 0 10px;
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
  });

  return (
    <S.MultiBanner>
      <FormFieldset title='뉴스 & 이벤트' className='block-1' LinkBtn={true}>
        <div className='block-1__notice'>
          {isLoading && <div>loading</div>}
          {isSuccess && (
            <ul>
              {data.items.slice(0, 5).map(d => (
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

    </S.MultiBanner>
  );
}
