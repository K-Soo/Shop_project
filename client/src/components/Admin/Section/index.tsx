import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { useAdminContext } from 'context/AdminProvider';

interface ISection {
  children: ReactNode
}

export default function Section({ children }: ISection) {
  const { state } = useAdminContext();

  return (
    <SectionStyle isWhite={state.isWhite}>
      {children}
    </SectionStyle>
  );
}

Section.Header = function Header({ children }: ISection) {
  const { state } = useAdminContext();

  return (
    <HeaderStyle isWhite={state.isWhite}>
      {children}
    </HeaderStyle>
  );
}

Section.Side = function Side({ children }: ISection) {
  const { state } = useAdminContext();
  return (
    <SideStyle isWhite={state.isWhite}>
      {children}
    </SideStyle>
  );
}

Section.Main = function Main({ children }: ISection) {
  const { state } = useAdminContext();
  return (
    <MainStyle isWhite={state.isWhite}>
      {children}
    </MainStyle>
  );
}

const SectionStyle = styled.div<{ isWhite: boolean }>`
  height: calc(100vh - 40px);
  ${({ isWhite }) => !isWhite && css`
    *{
      color: #fff !important;
      transition: color 0.3s ease;
    }
  `}
`;

const HeaderStyle = styled.header<{ isWhite: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
  background-color: ${props => props.isWhite ? '#fff' : '#1F2A40'};
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 5px rgb(0 0 0 / 5%);
`;

const MainStyle = styled.main<{ isWhite: boolean }>`
  width: calc(100% - 250px);
  margin-left: 250px;
  height: 100%;
  padding: 20px;
  background-color: ${props => props.isWhite ? '#F0F3F7' : '#131C2D'};
  transition: background-color 0.3s ease;
`;

const SideStyle = styled.aside<{ isWhite: boolean }>`
  position: fixed;
  width: 250px;
  height: 100%;
  background-color: ${props => props.isWhite ? '#fff' : '#1F2A40'};
  transition: background-color 0.3s ease;
  z-index: 9999;
  border:solid #dee2e6;
  border-width: 1px 1px 0 0;
  ${({ isWhite }) => !isWhite && css`
    border: none;
    *{
      color: #fff !important;
      transition: color 0.3s ease;
      border: none;
    }
  `}
`;
