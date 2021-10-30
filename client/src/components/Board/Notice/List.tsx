import React from "react";
import styled from "styled-components";
import { NoticeProps } from 'interfaces/INotice';
import Link from 'next/link';

interface IList {
  items: NoticeProps[];
}

const S = {
  List: styled.div`
    table{
      border: 1px solid red;
      width: 100%;
      border-collapse: collapse;
      font-size: 12px;
      padding: 0 15px;
      thead{
        tr{
          th{
            padding: 10px 15px;
            font-weight: normal;
          }
        }
      }
      tbody{
        tr{
          td{
          }
          .index{
            font-size: 11px;
            color: #939393;
          }
          .title{
            cursor: pointer;
            border: 1px solid red;
            color: #000;
          }
        }
      }
      caption{
        display: none;
      }
    }
  `,
}

export default function List({ items }: IList) {
  return (
    <S.List>
      <table>
        <caption>총 주문금액</caption>
        <colgroup>
          <col width="5%" />
          <col width="80%" />
          <col width="15%" />
        </colgroup>
        <thead>
          <tr>
            <th colSpan={3}>제목</th>
          </tr>
        </thead>
        <tbody>
          {items.map((d, i) => (
            <tr key={d._id}>
              <td className='index'>{i}</td>

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
