import React, { useContext, useState, useCallback,useEffect } from "react";
import { AppContext } from 'pages/_app';
import LeftSide from 'components/SideMenu/LeftSide';
import RightSide from 'components/SideMenu/RightSide';
import DarkBackground from 'components/Common/DarkBackground';


interface ISideMenu {
  className?: string;
}

const SideMenu: React.FC<ISideMenu> = ({ className }) => {
  const [directionSwap, setDirectionSwap] = useState<boolean>(true);
  const global = useContext(AppContext);
  console.log('global: ', global.state.openSideMenu);

  const handler = useCallback(() => {
    setDirectionSwap(!directionSwap);
  },[directionSwap])

  useEffect(() => {
    if(!global.state.openSideMenu){
      setDirectionSwap(true);
    }

  },[global.state.openSideMenu])

  return (
    <>
      <DarkBackground active={global.state.openSideMenu}>
        <LeftSide onClick={handler} directionSwap={directionSwap}/>
        <RightSide onClick={handler} directionSwap={directionSwap}/>
      </DarkBackground >
    </>
  );
};

export default SideMenu;
