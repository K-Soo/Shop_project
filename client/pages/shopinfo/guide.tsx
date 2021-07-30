import React from "react";
import Guide from "components/ShopInfo/Guide";
import Head from "next/head";

interface IGuide {
  className?: string;
}

export default function guide(props: IGuide) {
  return (
    <>
      <Head>
        <title>A | 이용안내</title>
      </Head>
      <Guide />
    </>
  );
}
