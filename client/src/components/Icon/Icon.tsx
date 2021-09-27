import React from 'react';
import styled, { css } from "styled-components";
import * as svg from './svg';



export type IconType = keyof typeof svg

export type IconProps = {
  name: IconType
  className?: string
  TosIcon?:boolean;
  style?: React.CSSProperties | undefined;
  onClick?: any;
  data?: any;
}

function Icon({ name, className, style,onClick }: IconProps) {
  return (
    React.createElement(svg[name], {
      className,
      style,
      onClick,
    })
  )
};

export default styled(Icon)`
cursor: pointer;
pointer-events: none;
color: #BDBDBD;
${props =>
    props.TosIcon &&
    css`
    color: #BDBDBD;
      &:hover {
        background: #2a2b2d;
      }
    `}
`;