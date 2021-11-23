import React from "react";
import Head from "next/head";
import MainContainer from 'containers/MainContainer';
import { useRouter, NextRouter } from 'next/router';
import Login from "components/Auth/Login";
import PAGE from "constants/path";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";

export default function LoginPage() {
  const router: NextRouter = useRouter();
  const { type } = router.query as { type: string }

  return (
    <>
      <Head>
        <title>로그인</title>
      </Head>
      <MainContainer>
        <Breadcrumb>
          {[PAGE.MAIN,PAGE.LOGIN].map(({ path, tag }) => (
            <Link key={path} href={path}>
              {tag}
            </Link>
          ))}
        </Breadcrumb>
        <Login type={type} />
      </MainContainer>
    </>
  );
}
