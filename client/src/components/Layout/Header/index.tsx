import React, { useState, useEffect,useRef,useCallback } from "react";
import styled, { css } from "styled-components";
import Nav from "components/Layout/Header/Nav";
import ImageBox from "components/Layout/Header/ImageBox";
import Menu from "components/Layout/Header/Menu";
import TopMenu from "components/Layout/Header/TopMenu";
import {useScroll} from 'hooks/useScroll';
import SideMenu from 'components/SideMenu';

interface IHeader {
  className?: string;
}

const S = {
  wrapper: styled.header<{ ScrollActive: boolean }>`
  ${props =>
    props.ScrollActive &&
    css`
      margin-bottom: 50px;
    `}
`,
}


const Header: React.FC<IHeader> = ({ className }) => {
  const [scrollActive, setScrollActive] = useState(false);
  const {scrollY} = useScroll();

  useEffect(() => {
    if (scrollY > 80) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  },[scrollY])

  return (
    <S.wrapper className={className} ScrollActive={scrollActive}>
      <Menu ScrollActive={scrollActive} />
      <ImageBox />
      <Nav ScrollActive={scrollActive} />
      <SideMenu />
    </S.wrapper>
  );
};

export default Header;
