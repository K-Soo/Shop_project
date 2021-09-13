import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { AUTH_QUICK_LIST } from "constants/auth";

const S = {
  QuickBox: styled.div`
    margin-top: 30px;
    padding: 15px 0;
    border-top: 1px solid #dee2e6;
    font-size: 14px;
    .lists{
      display: flex;
      justify-content: space-between;
      color: #444;
      li{
        flex: 1;
        text-align: center;
        border-right: 1px solid #dee2e6;
        &:hover{
          color: #000;
        }
        &:first-child{
          a{
            border-bottom: 2px solid #333;
          }
        }
        &:last-child{
          border: none;
        }
      }
    }
  `,
}

export default function QuickBox() {
  return (
    <S.QuickBox>
      <ul className='lists'>
        {AUTH_QUICK_LIST.map((d => (
          <li key={d.value}>
            <Link href={d.url}>
              <a>{d.label}</a>
            </Link>
          </li>
        )))}
      </ul>
    </S.QuickBox>
  );
}
