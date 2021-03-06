import React from "react";
import styled from "styled-components";
import dynamic from 'next/dynamic'

interface IBreadcrumb {
  className?: string;
  children: React.ReactNode;
}

const S = {
  Breadcrumb: styled.nav`
    max-width: 1200px;
    margin: 15px auto;
    display: flex;
    justify-content: flex-end;
    ${({ theme }) => theme.mobile`
      display: none;
    `};
  `,
  BreadcrumbLists: styled.ol`
    display: flex;
    font-size: 11px;
    color: #666666;
    li {
      padding: 0 5px;
      a {
        display: inline-block;
      }
      &:last-child {
        font-weight: 600;
        color: #000;
      }
    }
  `,
}
function Breadcrumb (props:IBreadcrumb) {

  const BreadcrumbItem: React.FC = props => (
    <li className='breadcrumb-item'>{props.children}</li>
  );

  let children: any[] = React.Children.toArray(props.children);

  children = children.map((child, index) => (
    <BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
  ));

  const lastIndex: number = children.length - 1;

  children = children.reduce((acc, child, index) => {
    const notLast: boolean = index < lastIndex;
    if (notLast) {
      acc.push(child, ">");
    } else {
      acc.push(child);
    }
    return acc;
  }, []);

  return (
    <S.Breadcrumb className={props.className}>
      <S.BreadcrumbLists>{children}</S.BreadcrumbLists>
    </S.Breadcrumb>
  );
};


export default dynamic(() => Promise.resolve(Breadcrumb), {
  ssr: false
})