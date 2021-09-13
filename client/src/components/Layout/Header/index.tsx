import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Nav from "components/Layout/Header/Nav";
import MainLogo from "components/Layout/Header/MainLogo";
import Menu from "components/Layout/Header/Menu";
import { useScroll } from 'hooks/useScroll';
import SideMenu from 'components/SideMenu';

const S = {
  Header: styled.header<{ ScrollActive: boolean }>`
  ${props =>
      props.ScrollActive &&
      css`
      margin-bottom: 50px;
    `}
`,
}

export default function Header() {
  const [scrollActive, setScrollActive] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (scrollY > 80) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  }, [scrollY])

  return (
    <S.Header ScrollActive={scrollActive}>
      <Menu ScrollActive={scrollActive} />
      <MainLogo />
      <Nav ScrollActive={scrollActive} />
      <SideMenu />
    </S.Header>
  );
};

