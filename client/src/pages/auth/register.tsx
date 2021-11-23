import React from "react";
import Head from "next/head";
import RegisterProvider from 'context/RegisterProvider';
import MainContainer from 'containers/MainContainer';
import Register from "components/Auth/Register";
import PAGE from "constants/path";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";
interface IRegister {
  className?: string;
}

export default function register(props:any) {
  return (
    <>
      <Head>
        <title>쥬얼리 | 회원가입</title>
      </Head>
      <RegisterProvider value={props}>
        <MainContainer>
        <Breadcrumb>
          {[PAGE.MAIN,PAGE.REGISTER].map(({ path, tag }) => (
            <Link key={path} href={path}>
              {tag}
            </Link>
          ))}
        </Breadcrumb>
          <Register />
        </MainContainer>
      </RegisterProvider>
    </>
  );
}
