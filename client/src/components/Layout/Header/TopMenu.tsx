import React from 'react';
import styled, { css } from "styled-components";
import Link from "next/link";
import PAGE from "../../../../utils/path";
import { MAIN_MENU } from "../../../../utils/constants/header";

interface ITopMenu {
  className?: string;
  children?: React.ReactNode;
}

const Div = styled.div`
  height: 40px;
  background-color: rgba(255, 255, 255, 0.95);
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
`;

export default function TopMenu({ className, children }: ITopMenu) {
  return (
    <Div className={className}>
      {children}
    </Div>
  )
};

const ItemBlock = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  color: #323232;
  font-size: 12px;
  letter-spacing: 0.5px;
  border: 1px solid red;
`;

export function Items({ children }: ITopMenu) {
  return <ItemBlock>{children}</ItemBlock>
}

export function Item({ children }: ITopMenu) {
  return (
    <>
         {MAIN_MENU.right.map(d => (
        <li key={d.url}>
          {d.label}
        </li>
      ))}
      {MAIN_MENU.left.map(d => (
        <li key={d.url}>
          {d.label}
        </li>
      ))}
    </>
  )
};

TopMenu.Items = Items;
TopMenu.Item = Item;