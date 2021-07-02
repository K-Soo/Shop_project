import React from 'react';
import styled from 'styled-components';
import * as svg from './svg';

interface IIcon {
  className?: string;
}

export type IconType = keyof typeof svg
export type IconProps = {
  name: IconType
  className?:string
  style?:React.CSSProperties
}

function Gicon ({ name,className,style }:IconProps)  {
  return (
   React.createElement(svg[name],{
    className,
    style,
   })
  )
};

export default Gicon;