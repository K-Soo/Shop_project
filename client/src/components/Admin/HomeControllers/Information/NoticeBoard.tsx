import React from "react";
import styled from "styled-components";
import Title from 'components/style/Title';
import { NoticeProps } from 'interfaces/INotice';
import Link from 'next/link';
import Loading from 'components/Loading';
import Icon from 'components/Icon/Icon';
import {useRouter} from 'next/router';
interface INoticeBoard {
  noticeData: NoticeProps;
  noticeStatus: string;
}

const S = {
  NoticeBoard: styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    .header{
      margin-bottom: 20px;
      &__wrapper{
        display: inline-block;
        align-items: flex-start;
        cursor: pointer;
      }
      ${Title}{
        font-size: 18px;
        text-align: left;
        display: inline-block;
        cursor: pointer;
      }
      i{
        font-size: 0;
        margin-left: 5px;
        svg{
        color: #555;
        }
      }
    }
    .content{
      .item{
        display: flex;
        justify-content: space-between;
        padding: 15px 0;
        font-size: 14px;
        color: #333;
        cursor: pointer;
        &:hover{
          color: #999;
        }
        &__title{
          display: flex;
          span{
            padding-right:5px;
            ::after{
              content: '*';
              color: red;
            }
          }
        }
      }
    }
  `,
}

export default function NoticeBoard({ noticeData, noticeStatus }: INoticeBoard) {
  const router = useRouter();

  if (noticeStatus === 'error') {
    return <div>error</div>
  }

  return (
    <S.NoticeBoard>
      <div className='header'>
        <div className='header__wrapper' onClick={() => router.push('admin/notice')}>
          <Title level={2}>공지사항</Title>
          <i><Icon name='arrowRight2' /></i>
        </div>
      </div>
      {noticeStatus === 'loading' && (
        <Loading
          height={120}
          text=''
          isLoading={true} />
      )}
      {noticeStatus === 'success' && (
        <div className='content'>
          <ul className='items'>
            {noticeData.items.map(d => (
              <li key={d._id}>
                <Link href={`/board/notice/${d._id}`}>
                  <a className='item'>
                    <div className='item__title'>
                      <span>[공지]</span>
                      <p>{d.title}</p>
                    </div>
                    <p>{d.createdAt}</p>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </S.NoticeBoard>
  );
}
