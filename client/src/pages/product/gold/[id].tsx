import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import MainContainer from 'containers/MainContainer';

export default function Gold() {
  const router = useRouter();
  const {id} = router.query;

  return (
    <>
      <Head>
        <title>순금</title>
      </Head>
      <MainContainer >
      <div>
        {id}
      </div>
      </MainContainer>
    </>
  );
}