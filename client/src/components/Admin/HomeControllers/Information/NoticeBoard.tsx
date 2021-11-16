import React from "react";
import styled from "styled-components";
import Title from 'components/style/Title';
import { NoticeProps } from 'interfaces/INotice';
import Link from 'next/link';

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
      ${Title}{
        font-size: 18px;
        text-align: left;
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
  return (
    <S.NoticeBoard>
      <div className='header'>
        <Title level={2}>공지사항</Title>
      </div>

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
