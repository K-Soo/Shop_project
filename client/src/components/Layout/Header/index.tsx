import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Nav from 'components/Layout/Header/Nav';
import ImageBox from 'components/Layout/Header/ImageBox';
import Menu from 'components/Layout/Header/Menu';

interface IHeader {
  className?: string;
}

const StyledHeader = styled.header<{ ScrollActive: boolean }>`
  /* border: 1px solid #000; */
  /* position: relative; */
  height: auto;
  ${props => props.ScrollActive && css`
    margin-bottom:50px;
  `}
`;

const Header: React.FC<IHeader> = ({ className }) => {
  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = useState(false);

  function handleScroll() {
    if (ScrollY >= 80) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }

  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });

  return (
    <StyledHeader className={className} ScrollActive={ScrollActive}>
      <Menu ScrollActive={ScrollActive}/>
      <ImageBox />
      <Nav ScrollActive={ScrollActive} />
    </StyledHeader>
  )
};

export default Header;