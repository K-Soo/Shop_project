import React, { useContext, useEffect, useState } from "react";
import Footer from "components/Layout/Footer";
import Header from "components/Layout/Header";
import { useAppContext } from 'context/AppProvider';
import { NextRouter, useRouter } from 'next/router';
import styled, { css } from "styled-components";
import QuickScroll from 'components/Common/QuickScroll';

interface ILayout {
  children?: React.ReactNode;
  className?: string;
}

const S = {
  Layout: styled.div<{ disable: boolean }>`
    height: calc(100vh - 40px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .layout-wrap{
      flex: 1;
      display: ${props => props.disable ? 'block' : 'flex'};
      flex-direction: column;
      main{
        flex: 1;
      }
    }
  `,
}

export default function Layout(props: ILayout) {
  const router: NextRouter = useRouter();
  const [disable, setDisable] = useState<boolean>(false);
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
  const env = process.env.NODE_ENV
  const name = process.env.NEXT_PUBLIC_NAME

  return (
    <S.Layout disable={disable}>
      <div className='layout-wrap' id='soo'>
        {isHeader && <Header />}
        {props.children}
      </div>
      {isFooter && <Footer className='footer' />}
      <QuickScroll />
    </S.Layout>
  );
};

