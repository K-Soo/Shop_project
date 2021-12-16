import React, { useState, useCallback, useEffect } from "react";
import LeftSide from 'components/SideMenu/LeftSide';
import RightSide from 'components/SideMenu/RightSide';
import DarkBackground from 'components/Common/DarkBackground';
import { useAppContext } from 'context/AppProvider';
import useDidMountEffect from 'hooks/useDidMountEffect';
import styled, { css } from 'styled-components';

const S = {
  SideMenu: styled.aside`
    display: none;
    ${({ theme }) => theme.mobile`
      display: block;
      }
    `}
  `
}

export default function SideMenu() {
  const [directionSwap, setDirectionSwap] = useState(true);
  const { state } = useAppContext();

  const handler = useCallback(() => {
    setDirectionSwap(!directionSwap);
  }, [directionSwap])

  useDidMountEffect(() => {
    if (!state.openSideMenu) {
      setDirectionSwap(true);
    }
  }, [state.openSideMenu]);

  return (
    <S.SideMenu>
      <DarkBackground directionSwap={directionSwap} >
        <LeftSide
          onClick={handler}
          directionSwap={directionSwap}
        />
        <RightSide
          onClick={handler}
          directionSwap={directionSwap}
        />
      </DarkBackground >
    </S.SideMenu>
  );
};

