import React, { useContext } from "react";
import styled from 'styled-components';
import { AppContext } from 'pages/_app';
import DarkBackground from 'components/Common/DarkBackground';
import CloseButton from 'components/style/CloseButton';

interface ILeftSide {
  className?: string;
  swap: boolean;
}

const S = {
  wrapper: styled.nav<{ openSideMenu: boolean }>`
    /* display: ${props => props.openSideMenu ? 'block' : 'none'}; */
    height: 100vh;
    width: 70%;
    background-color: #fff;
    border: 1px solid red;
  `,
  container: styled.div`
    border: 1px solid red;
  `,
  swap: styled.div`
    width: 100px;
    border: 1px solid red;
    height:30px;
    border-radius: 10px;
  `,
}

const LeftSide: React.FC<ILeftSide> = ({ className,swap }) => {
  const global = useContext(AppContext);

  return (
    <S.wrapper className={className} openSideMenu={global.state.toggleSideMenu}>
      <S.container>
        <CloseButton onClick={global.action.setToggle} />
        <S.swap>

        </S.swap>
      </S.container>
    </S.wrapper>
  )
};

export default styled(LeftSide)`

`;