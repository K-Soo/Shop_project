import React from "react";
import styled from "styled-components";

interface IColorIcon {
  color:string
}

const S = {
  ColorIcon: styled.span<{color:string}>`
    display: inline-block;
    width:10px;
    height:10px;
    border-radius: 50%;
    margin-right: 5px;
    background-color: ${props => props.color ? `${props.color};` : 'none'};
    border: 1px solid #eee;
  `,
}

export default function ColorIcon({color}:IColorIcon) {
  return <S.ColorIcon color={color} />
}
