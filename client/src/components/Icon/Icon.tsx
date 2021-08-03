import React from 'react';
import styled, { css } from "styled-components";
import * as svg from './svg';



export type IconType = keyof typeof svg

export type IconProps = {
  name: IconType
  className?: string
  TosIcon?:boolean;
  style?: React.CSSProperties | undefined;
}

function Icon({ name, className, style }: IconProps) {
  return (
    React.createElement(svg[name], {
      className,
      style,
    })
  )
};

export default styled(Icon)`
cursor: pointer;
/* color: #152a69; */
color: #BDBDBD;
overflow: hidden;
${props =>
    props.TosIcon &&
    css`
    color: #BDBDBD;
      &:hover {
        background: #2a2b2d;
      }
    `}
`;