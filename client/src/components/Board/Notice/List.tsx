import React from "react";
import styled from "styled-components";
import { NoticeProps, TItems } from 'interfaces/INotice';
import Link from 'next/link';

interface IList {
  items: TItems[];
  isLoading: boolean;
}

const S = {
  List: styled.article`
    table{
      width: 100%;
      border-collapse: collapse;
      font-size: 12px;
      padding: 0 15px;
      border-top: 1px solid #f0f0f0;
      caption{
        display: none;
      }
      thead{
        tr{
          th{
            padding: 10px 15px;
            font-weight: normal;
            border-bottom: 1px solid #f0f0f0;
            background-color: #f9f9f9;
          }
        }
      }
      tbody{
        tr{
          td{
            a{
              display: block;
              height: 100%;
            }
            padding: 10px 15px;
          }
          .index{
            white-space: nowrap;
            font-size: 11px;
            color: #939393;
            text-align: center;
            padding: 10px;
          }
          .title{
            cursor: pointer;
            color: #000;
          }
          .date{
            white-space: nowrap;
          }
        }
      }
    }
  `,
}

export default function List({ items }: IList) {
  return (
    <S.List>
      <table>
        <caption>공지사항 리스트</caption>
        <colgroup>
          <col width="5%" />
          <col width="85%" />
          <col width="10%" />
        </colgroup>
        <thead>
          <tr>
            <th colSpan={3}>제목</th>
          </tr>
        </thead>
        <tbody>
          {items.map((d) => (
            <tr key={d._id} className='notice-tr'>
              <td className='index'>공지</td>
              <td className='title'>
                <Link href={`/board/notice/${d._id}`}>
                  <a>{d.title}</a>
                </Link>
              </td>
              <td className='date'>{d.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.List>
  );
}
