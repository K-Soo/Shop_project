import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NAV_MENU } from "constants/header";
import { NextRouter, useRouter } from 'next/router';
import Link from "next/link";

const S = {
  CategoryGroup: styled.ul<{ pathname: string }>`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    ${({ theme }) => theme.mobile`
      display: ${(props: any) => props.pathname === '/' ? 'flex' : 'none'};
      flex-wrap: wrap;
    `}
  `,
  Item: styled.li`
    flex-grow: 1;
    display: inline-block;
    text-align: center;
    font-size: 13px;
    height: 100%;
    a {
      display: inline-block;
      padding: 0 5px;
      width: 100%;
      line-height: 48px;
      height: 100%;
      vertical-align: bottom;
      &[data-active=true] {
        color: #000;
        border-bottom: solid 2px #000;
      }
      &:hover {
        color: #000;
      }
      ${({ theme }) => theme.mobile`
        line-height: normal;
          &[data-active=true] {
            color: #000;
            border: none;
          };
      `};
    }
    ${({ theme }) => theme.mobile`
      flex-basis:40%;
      padding: 5px;
      border: 1px solid #e8e8e8;
    `};
  `,
}

export default function CategoryGroup() {
  const router: NextRouter = useRouter();
  const [dataSetName, setDatasetName] = useState<string>('');

  const handleItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { name } = (e.target as HTMLAnchorElement).dataset;
    setDatasetName(name);
  };

  useEffect(() => {
    if (!(router.pathname === "/product/[category]")) setDatasetName('');
  }, [router.pathname]);


  return (
    <S.CategoryGroup pathname={router.pathname}>
      {NAV_MENU.map(d => (
        <S.Item key={d.label} >
          <Link href={d.url} >
            <a onClick={handleItem} data-name={d.label} data-active={d.label === dataSetName}>{d.label}</a>
          </Link>
        </S.Item>
      ))}
    </S.CategoryGroup>
  );
}
