import React from "react";
import styled from "styled-components";

interface ITitle {
  className?: string;
  fontSize?: string;
  color?: string;
  margin?: string;
  textAlign?: string;
}

const Title: React.FC<ITitle> = ({ className, children }) => {
  return <h2 className={className}>{children}</h2>;
};

export default styled(Title)`
  font-size: ${({ fontSize }) => `${fontSize}px` ?? "30px"};
  color: ${({ color }) => color ?? "#2e2e2e"};
  margin: ${({ margin }) => `${margin}` ?? "0px"};
  text-align: ${({ textAlign }) => textAlign ?? "center"};
`;
