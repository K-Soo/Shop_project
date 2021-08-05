import React, { useContext,useState,useEffect } from "react";
import { AppContext } from 'pages/_app';
import SideMenuIcon from 'components/SideMenu/SideMenuIcon';
import LeftSide from 'components/SideMenu/LeftSide';
import RightSide from 'components/SideMenu/RightSide';
import DarkBackground from 'components/Common/DarkBackground';


interface ISideMenu {
  className?: string;
}

const SideMenu: React.FC<ISideMenu> = ({ className }) => {
  const [swap ,setSwap] = useState<boolean>(false);
  const global = useContext(AppContext);

  return (
    <>
    <DarkBackground active={global.state.toggleSideMenu}>
      <LeftSide swap={swap}/>
      {/* <RightSide /> */}
    </DarkBackground >
</>
  );
};

export default SideMenu;
