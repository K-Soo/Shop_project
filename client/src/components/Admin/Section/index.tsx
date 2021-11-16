import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { useAdminContext } from 'context/AdminProvider';
interface ISection {
  children: ReactNode
}

export default function Section({ children }: ISection) {
  return (
    <SectionStyle>
      {children}
    </SectionStyle>
  );
}

Section.Header = function Header({ children }: ISection) {
  return (
    <HeaderStyle>
      {children}
    </HeaderStyle>
  );
}

Section.Side = function Side({ children }: ISection) {
  const { state, action } = useAdminContext();
  return (
    <SideStyle toggle={state.sideOpen}>
      {children}
    </SideStyle>
  );
}

Section.Main = function Main({ children }: ISection) {
  return (
    <MainStyle>
      {children}
    </MainStyle>
  );
}

const SectionStyle = styled.div`
  height: calc(100vh - 40px);
`;

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
  box-shadow: 0 2px 5px rgb(0 0 0 / 5%);
`;

const MainStyle = styled.main`
  width: calc(100% - 250px);
  margin-left: 250px;
  height: 100%;
  padding: 20px;
  background-color: #F0F3F7;
`;

const SideStyle = styled.aside<{ toggle: boolean }>`
  position: fixed;
  width: 250px;
  height: 100%;
  background-color: #fff;
  z-index: 9999;
`;
