import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SubTop from "components/Layout/Footer/SubTop";
import Top from "components/Layout/Footer/Top";
import Bottom from "components/Layout/Footer/Bottom";

interface IFooter {
  className?: string;
}

const Footer: React.FC<IFooter> = ({ className }) => {
  return (
    <footer className={className}>
      <SubTop />
      <Top />
      <Bottom />
    </footer>
  );
};

export default styled(Footer)`
  width: 100%;
  bottom: 0;
  border-top: 1px solid #555;
  margin-top: 50px;
  ${({ theme }) => theme.mobile`
      display: none;
  `}
`;
