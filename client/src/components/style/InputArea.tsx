import React from "react";
import styled from "styled-components";

interface IInputArea {
  className?: string;
}

const InputArea: React.FC<IInputArea> = ({ className }) => {
  return <input className={className}>InputArea</input>;
};

export default styled(InputArea)``;
