import React from "react";
import styled from "styled-components";

interface IBreadcrumb {
  className?: string;
}

const BreadcrumbBlock = styled.ol`
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
      padding: 0 15px;
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
      acc.push(child, ">");
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
  max-width: 1200px;
  margin: 15px auto;
  display: flex;
  justify-content: flex-end;
`;
