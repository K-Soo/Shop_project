import React, { useContext, useState, useCallback,useEffect } from "react";
import LeftSide from 'components/SideMenu/LeftSide';
import RightSide from 'components/SideMenu/RightSide';
import DarkBackground from 'components/Common/DarkBackground';
import {useAppContext} from 'context/AppProvider';


interface ISideMenu {
  className?: string;
}

const SideMenu: React.FC<ISideMenu> = ({ className }) => {
  const [directionSwap, setDirectionSwap] = useState<boolean>(true);
  const {action, state} = useAppContext();



  const handler = useCallback(() => {
    setDirectionSwap(!directionSwap);
  },[directionSwap])

  useEffect(() => {
    if(!state.openSideMenu){
      setDirectionSwap(true);
    }
  },[state.openSideMenu])

  return (
    <>
      <DarkBackground active={state.openSideMenu}>
        <LeftSide onClick={handler} directionSwap={directionSwap}/>
        <RightSide onClick={handler} directionSwap={directionSwap}/>
      </DarkBackground >
    </>
  );
};

export default SideMenu;
