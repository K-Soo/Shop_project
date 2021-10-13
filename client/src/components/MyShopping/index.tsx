import React from "react";
import styled from "styled-components";
import PageTitle from 'components/Common/PageTitle';
import PointMenu from 'components/MyShopping/PointMenu';
import UserBanner from 'components/MyShopping/UserBanner';
import OrderStatus from 'components/MyShopping/OrderStatus';
import QuickMove from 'components/MyShopping/QuickMove';

interface IMyShopping {
  
}

const S = {
  MyShopping: styled.section`
  `,
}

export default function MyShopping({}:IMyShopping) {
  return (
    <S.MyShopping>
       <PageTitle TitleText='마이쇼핑' />
       <UserBanner />
       <PointMenu />
       <OrderStatus />
       <QuickMove />
    </S.MyShopping>
  );
}
