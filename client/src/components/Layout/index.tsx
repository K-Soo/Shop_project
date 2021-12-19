import React, { useContext, useEffect, useState } from "react";
import Footer from "components/Layout/Footer";
import Header from "components/Layout/Header";
import { useAppContext } from 'context/AppProvider';
import { NextRouter, useRouter } from 'next/router';
import styled, { css } from "styled-components";
import QuickScroll from 'components/Common/QuickScroll';
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSRFooter = dynamic(
  () => import('components/Layout/Footer'),
  { ssr: false }
)
interface ILayout {
  children?: React.ReactNode;
  className?: string;
}

const S = {
  Layout: styled.div<{ isAdminPage: boolean }>`
    height: calc(100vh - 40px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .layout-wrap{
      flex: 1;
      display: ${props => props.isAdminPage ? 'block' : 'flex'};
      flex-direction: column;
      main{
        flex: 1;
      }
    }
  `,
}

export default function Layout(props: ILayout) {
  const router: NextRouter = useRouter();
  const [isAdminPage, setIsAdminPage] = useState<boolean>(false);
  const { action, state } = useAppContext();
  const { isFooter, isHeader } = state.layout


  useEffect(() => {
    const result = router.asPath.includes('admin');
    if (result) {
      setIsAdminPage(true);
      action.setIsHeader(false);
      action.setIsFooter(false);
    }
  }, [router, action]);

  return (
    <S.Layout isAdminPage={isAdminPage}>
      <div className='layout-wrap' id='soo'>
        {isHeader && <Header />}
        {props.children}
      </div>
      {isFooter && <DynamicComponentWithNoSSRFooter className='footer' />}
      <QuickScroll />
    </S.Layout>
  );
};

