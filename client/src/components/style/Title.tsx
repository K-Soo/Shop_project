import React from "react";
import styled from "styled-components";

interface ITitle {
  className?: string;
  level: number;
  size?: string;
  color?: string;
  margin?: string;
  textAlign?: string;
  marginT?:string;
  marginL?:string;
  marginR?:string;
  marginB?:string;
}

const Title: React.FC<ITitle> = ({ className, children, level }) => {
  switch(level){
    case 1: return <h1 className={className}>{children}</h1>
    case 2: return <h2 className={className}>{children}</h2>
    case 3: return <h3 className={className}>{children}</h3>
    case 4: return <h4 className={className}>{children}</h4>
    case 5: return <h5 className={className}>{children}</h5>
    case 6: return <h6 className={className}>{children}</h6>
    default: return <h1 className={className}>{children}</h1>;
  }
};

export default styled(Title)`
  cursor: default;
  font-size: ${({ size }) => size ? `${size}px` : "30px"};
  color: ${({ color }) => color ?? "#2e2e2e"};
  margin: ${({ margin }) => `${margin}` ?? "0px"};
  margin-top: ${({ marginT }) => `${marginT}px` ?? "0px"};
  margin-left: ${({ marginL }) => `${marginL}px` ?? "0px"};
  margin-right: ${({ marginR }) => `${marginR}px` ?? "0px"};
  margin-bottom: ${({ marginB }) => `${marginB}px` ?? "0px"};
  text-align: ${({ textAlign }) => textAlign ?? "center"};
`;
