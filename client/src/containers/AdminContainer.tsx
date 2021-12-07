import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Breadcrumb from "components/Common/Breadcrumb";
import PAGE from "constants/path";
import AdminProvider from 'context/AdminProvider';
import Section from 'components/Admin/Section';
import Aside from 'components/Admin/Aside';
import AdminNav from 'components/Admin/AdminNav';
import { NextRouter, useRouter } from 'next/router';
import { useAppContext } from 'context/AppProvider';


interface IAdminContainer {
  children?: React.ReactNode;
}

const S = {
  AdminContainer: styled.div`
    margin: 0 auto;
  `,
}

export default function AdminContainer({ children }: IAdminContainer) {
  const router: NextRouter = useRouter();
  const { state: { userInfo } } = useAppContext();

  return (
    <S.AdminContainer >
      <Section>
        <Section.Header>
          <AdminNav />
        </Section.Header>

        <Section.Side>
          <Aside />
        </Section.Side>

        <Section.Main>
          {children}
        </Section.Main>
      </Section>
    </S.AdminContainer>
  );
};

