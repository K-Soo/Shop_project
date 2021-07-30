import React from "react";
import Head from "next/head";
import Privacy from "components/ShopInfo/Privacy";

interface IPrivacy {
  className?: string;
}

export default function privacy(props: IPrivacy) {
  return (
    <>
      <Head>
        <title>A | 이용약관</title>
      </Head>
      <Privacy />
    </>
  );
}
