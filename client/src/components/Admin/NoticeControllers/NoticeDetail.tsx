import React from "react";
import styled from "styled-components";
import { TItems } from 'interfaces/INotice';
import Button from 'components/style/Button'
import { useRouter, NextRouter } from 'next/router';
interface INoticeDetail {
  item: TItems
}

const S = {
  NoticeDetail: styled.div`
  `,
    Content: styled.article`
    .title-box{
      display:flex;
      margin-bottom: 15px;
      p{
        padding: 5px 0;
      }
      p:first-child{
        flex: 1 10%;
        border: 1px solid #f0f0f0;
        padding-left: 10px;
        background-color: #f9f9f9;
        font-size: 14px;
        min-width: 50px;
      }
      p:nth-child(2){
        flex: 1 90%;
        border: solid #f0f0f0;
        border-width: 1px 1px 1px 0;
        padding-left: 10px;
        color: #353535;
        font-size: 14px;
      }
    }
    .text{
      border: 1px solid #f0f0f0;
      padding: 30px;
      min-height: 300px;
      ${({ theme }) => theme.mobile`
        padding: 10px;
      }
    `}
    }
    ${({ theme }) => theme.mobile`
        padding: 0 15px;
      }
    `}
    `,
}

export default function NoticeDetail({item}:INoticeDetail) {
  const router: NextRouter = useRouter();

  return (
    <S.NoticeDetail>
      <S.Content>
        <div className='title-box'>
          <p>제목</p>
          <p>{item.title}</p>
        </div>
        <div className='text' dangerouslySetInnerHTML={{ __html: item.content }} />
        <Button
          white
          margin='15px 0 0 0'
          width='100' 
          height='30px'
          onClick={() => router.back()}
        >
        목록으로
      </Button>
      </S.Content>
    </S.NoticeDetail>
  );
}
