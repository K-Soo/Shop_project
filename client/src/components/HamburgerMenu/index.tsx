import React from "react";
import styled from "styled-components";

interface IHamburgerMenu {
  className?: string;
}

const HamburgerMenu: React.FC<IHamburgerMenu> = ({ className }) => {
  return <div className={className}>HamburgerMenu</div>;
};

export default styled(HamburgerMenu)``;
