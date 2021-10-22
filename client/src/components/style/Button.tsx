import React from "react";
import styled, { css } from "styled-components";


interface IButton {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onKeyPress?: React.KeyboardEventHandler<HTMLButtonElement>;
  className?: string;
  login?: boolean;
  kakao?: boolean;
  pageNum?: boolean;
  width?: string;
  height?: string;
  margin?: string;
  fontSize?: string;
  fontWeight?: string;
  name?: string;
  black?: boolean;
  white?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  dataColor?: any;
  disabled?: boolean;
  value?:string;
  color?:string;
}

const Button: React.FC<IButton> = ({ className, children, onClick, type, name,dataColor,disabled,onKeyPress,value,color }) => {
  return (
    <button 
      className={className} 
      onClick={onClick} 
      type={type ?? 'button'} 
      data-color={dataColor} 
      name={name}
      disabled={disabled}
      onKeyPress={onKeyPress}
      value={value}
    >
      {children}
    </button>
  );
};

export default styled(Button)`
  width: ${({ width }) => width ?? "100%"};
  height: ${({ height }) => height ?? "50px"};
  margin: ${({ margin }) => margin ?? "0px"};
  font-size: ${({ fontSize }) => fontSize ?? "16px"};
  font-weight: ${({ fontWeight }) => fontWeight ?? "500"};
  cursor: pointer;
  text-align: center;
  background: ${({ color }) => color ?? "#152a69"};
  color: #ffffff;
  border: none;
  letter-spacing: 2px;
  white-space: nowrap;
  ${props =>
    props.pageNum &&
    css`
      all: unset;
  `}
  ${props =>
    props.login &&
    css`
      background: #333;
      &:hover {
        background: #2a2b2d;
      }
    `}
  ${props =>
    props.kakao &&
    css`
      background: #feed35;
      color: #222;
      &:hover {
        background: #ffff6e;
      }
    `}
  ${props =>
    props.black &&
    css`
      color: #fff;
      padding: 0 10px;
      border: 1px solid #222;
      border-bottom-color: #222;
      box-shadow: 0 2px 2px rgb(0 0 0 / 4%);
      text-shadow: 0 0 2px rgb(0 0 0 / 20%);
      background: #333;
    &:hover {
      background: #2a2b2d;
      transition: all 0.3s ease-in-out;
    }
  `}
  ${props =>
    props.white &&
    css`
      background: linear-gradient(to bottom,#ffffff 40%,  #f6f6f6 100%);
      padding: 0 10px;
      color: #333;
      border: 1px solid #ebebeb;
      border-bottom-color: #c6c6c6;
      box-shadow: 0 2px 2px rgb(0 0 0 / 4%);
      text-shadow: 0 0 2px rgb(255 255 255);
      &:hover {
         background: #fff;
      }
  `}
  ${props => props.disabled && css`
     background: #999;
     border: none;
     text-shadow: none;
     color: #fff;
     cursor: default;
     &:hover {
      background-color: #999;
    }
  `}
`;
