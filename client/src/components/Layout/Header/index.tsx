import React, { useState } from "react";
import styled, { css } from "styled-components";
import MainLogo from "components/Layout/Header/MainLogo";
import { useScroll } from 'hooks/useScroll';
import useDidMountEffect from 'hooks/useDidMountEffect';
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSRMenu = dynamic(
  () => import('components/Layout/Header/Menu'),
  { ssr: false }
)
const DynamicComponentWithNoSSRMainLogo = dynamic(
  () => import('components/Layout/Header/MainLogo'),
  { ssr: false }
)

const DynamicComponentWithNoSSRNav = dynamic(
  () => import('components/Layout/Header/Nav'),
  { ssr: false }
)
const DynamicComponentWithNoSSRSideMenu = dynamic(
  () => import('components/SideMenu'),
  { ssr: false }
)
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

  useDidMountEffect(() => {
    if (scrollY > 80) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  }, [scrollY])

  return (
    <S.Header ScrollActive={scrollActive} >
      <DynamicComponentWithNoSSRMenu ScrollActive={scrollActive}/>
      <DynamicComponentWithNoSSRMainLogo />
      <DynamicComponentWithNoSSRNav ScrollActive={scrollActive} />
      <DynamicComponentWithNoSSRSideMenu />
    </S.Header>
  );
};

