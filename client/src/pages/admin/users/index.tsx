import React, { useEffect, useState } from "react";
import Head from "next/head";
import { NextRouter, useRouter } from 'next/router';
import AdminContainer from 'containers/AdminContainer';

export default function UsersPage() {
  const router: NextRouter = useRouter();

  return (
    <>
      <Head>
        <title>관리자</title>
        <meta name="description" content="??" />
      </Head>
      <AdminContainer>
      </AdminContainer>
    </>
  );
}

