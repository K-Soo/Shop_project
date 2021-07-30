import React from "react";
import styled from "styled-components";

interface IHamburgerList {
  className?: string;
}

const HamburgerList: React.FC<IHamburgerList> = ({ className }) => {
  return <div className={className}></div>;
};

export default styled(HamburgerList)``;
