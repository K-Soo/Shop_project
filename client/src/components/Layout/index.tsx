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

export default function Layout({ children, className }: ILayout) {
  const router: NextRouter = useRouter();
  const { action, state } = useAppContext();
  const { isFooter, isHeader } = state.layout;

  useEffect(() => {
    const result = router.asPath.split('/')
    if (result[1] === 'admin') {
      action.setIsHeader(false);
      action.setIsFooter(false);
    }
  }, [router]);

  return (
    <S.Layout className={className}>
      {state.layout.isHeader && <Header />}
      {children}
      {state.layout.isFooter && <Footer />}
    </S.Layout>
  );
};

