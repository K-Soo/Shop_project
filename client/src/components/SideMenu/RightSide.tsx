import React from "react";
import styled, { css } from 'styled-components';
import { useAppContext } from 'context/AppProvider';
import DarkBackground from 'components/Common/DarkBackground';
import CloseButton from 'components/style/CloseButton';

interface IRightSide {
  className?: string;
  directionSwap: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
const S = {
  RightSide: styled.nav<{ openSideMenu: boolean, directionSwap: boolean }>`
    border: 2px solid #000;
    position: fixed;
    height: 100vh;
    top: 0;
    right: 0;
    width: 70%;
    visibility: ${props => props.openSideMenu && props.directionSwap === false  ? 'visible' : 'hidden'};
    background-color: #fff;
    /* transform: translateX(-100%); */
    padding: 20px;
    ${props => props.openSideMenu && props.directionSwap === false  ? css`
      transform: translateX(0%);
      transition: all 0.5s ease;` : css`
      transform: translateX(200%);
      transition: all 0.5s ease;
      opacity
    `}
  `,
  Container: styled.div`
    border: 1px solid red;
    height: 100%;
  `,
  directionSwap: styled.div`
    width: 100px;
    border: 1px solid red;
    height:30px;
    border-radius: 10px;
  `,
}
const RightSide: React.FC<IRightSide> = ({ className, directionSwap, onClick }) => {
  const {action, state} = useAppContext();

  return (
    <S.RightSide className={className} openSideMenu={state.openSideMenu} directionSwap={directionSwap}>
      <S.Container>
        <CloseButton onClick={action.setToggleSideMenu} />
        <button onClick={onClick}>
          asd
        </button>
        <div>
          RightSide
        </div>
        {/* <S.swap onClick={onClick}>
            asd
          </S.swap> */}
      </S.Container>
    </S.RightSide>
  )
};


export default styled(RightSide)`

`;