import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SubTop from "components/Layout/Footer/SubTop";
import Top from "components/Layout/Footer/Top";
import Bottom from "components/Layout/Footer/Bottom";
import QuickScroll from 'components/Common/QuickScroll';

interface IFooter {
  className?: string;
}

const Footer: React.FC<IFooter> = ({ className }) => {
  return (
    <footer className={className}>
      <SubTop />
      {/* <Top /> */}
      <Bottom />
      <QuickScroll />
    </footer>
  );
};

export default styled(Footer)`
  border-top: 1px solid #555;
  margin-top: 50px;
`;
