import React from 'react';
import styled from 'styled-components';
import Nav from 'components/Layout/Header/Nav';
import ImageBox from 'components/Layout/Header/ImageBox';
import Menu from 'components/Layout/Header/Menu';

interface IHeader {
  className?: string;
}

const Header: React.FC<IHeader> = ({ className }) => {
  return (
    <header className={className}>
      <Menu/>
      <ImageBox />
      <Nav />
    </header>
  )
};


export default styled(Header)`
  /* border: 1px solid #000; */
  height: auto;
`;