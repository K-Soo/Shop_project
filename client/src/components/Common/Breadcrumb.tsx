import React from "react";
import styled from "styled-components";

interface IBreadcrumb {
  className?: string;
}

const BreadcrumbBlock = styled.ol`
  display: flex;
  border: 1px solid red;
  padding: 10px 0;
  font-size: 12px;
  color: #666666;
  li:last-child {
    border: 1px solid red;
    cursor: none;
  }
  li {
    padding: 0 10px;
    /* border: 1px solid red; */
    &:last-child {
      font-weight: 600;
      color: #000;
    }
  }
`;

const Breadcrumb: React.FC<IBreadcrumb> = props => {
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
      acc.push(child, "/");
    } else {
      acc.push(child);
    }
    return acc;
  }, []);

  return (
    <div className={props.className}>
      <BreadcrumbBlock>{children}</BreadcrumbBlock>
    </div>
  );
};

export default styled(Breadcrumb)`
  border: 1px solid red;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`;
