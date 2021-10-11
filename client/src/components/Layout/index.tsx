import React, { useContext, useEffect,useState } from "react";
import Footer from "components/Layout/Footer";
import Header from "components/Layout/Header";
import { useAppContext } from 'context/AppProvider';
import { NextRouter, useRouter } from 'next/router';
import styled,{css} from "styled-components";

interface ILayout {
  children?: React.ReactNode;
  className?: string;
}

const S = {
  Layout: styled.div<{disable:boolean}>`
    height: calc(100vh - 40px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* border: 5px solid #000; */
    .layout-wrap{
      flex: 1;
      display: ${props => props.disable ? 'block' : 'flex'};
      flex-direction: column;
      /* border: 3px solid red; */
      main{
        flex: 1;
        /* border: 3px solid blue; */
      }
      }
    }
  `,
}

export default function Layout(props: ILayout) {
  const router: NextRouter = useRouter();
  const [disable,setDisable] = useState<boolean>(false);
  const { action, state } = useAppContext();
  const { isFooter, isHeader } = state.layout;

  useEffect(() => {
    const result = router.asPath.includes('admin');
    if (result) {
      setDisable(true);
      action.setIsHeader(false);
      action.setIsFooter(false);
    }
  }, [router, action]);

  return (
    <S.Layout disable={disable}>
      <div className='layout-wrap'>
        {isHeader && <Header />}
        {props.children}
      </div>
      {isFooter && <Footer className='footer' />}
    </S.Layout>
  );
};

