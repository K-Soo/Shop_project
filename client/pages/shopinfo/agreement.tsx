import React from "react";
import Head from "next/head";
import Agreement from "components/ShopInfo/Agreement";

interface IAgreement {
  className?: string;
}

export default function agreement(props: IAgreement) {
  return (
    <>
      <Head>
        <title>A | 이용약관</title>
      </Head>
      <Agreement />
    </>
  );
}
