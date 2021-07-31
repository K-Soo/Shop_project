import React from "react";
import Company from "components/ShopInfo/Company";
import Head from "next/head";

interface ICompany {
  className?: string;
}

export default function company(props: ICompany) {
  return (
    <>
      <Head>
        <title>A | 회사소개</title>
      </Head>
      <Company />
    </>
  );
}
