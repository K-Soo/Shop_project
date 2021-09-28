import React, { useContext, useEffect} from "react";
import Footer from "components/Layout/Footer";
import Header from "components/Layout/Header";
import { useAppContext } from 'context/AppProvider';
import { NextRouter, useRouter } from 'next/router';
import styled from "styled-components";

interface ILayout {
  children?: React.ReactNode;
  className?: string;
}

const S = {
  Layout: styled.div`
  `,
}

export default function Layout(props: ILayout) {
  const router: NextRouter = useRouter();
  const { action, state } = useAppContext();
  const { isFooter, isHeader } = state.layout;

  useEffect(() => {
    const result = router.asPath.includes('admin');
    console.log('result: ', result);
    if (result) {
      action.setIsHeader(false);
      action.setIsFooter(false);
    }
  }, [router,action]);

  return (
    <S.Layout>
      {state.layout.isHeader && <Header />}
      {props.children}
      {state.layout.isFooter && <Footer />}
    </S.Layout>
  );
};

