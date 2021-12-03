import React from "react";
import styled from "styled-components";
import PageTitle from 'components/Common/PageTitle';
import PointMenu from 'components/MyShopping/PointMenu';
import QuickMove from 'components/MyShopping/QuickMove';
import UserInfo from 'components/Forms/UserInfo';
import usePoint from 'hooks/ReactQuery/usePoint';

const S = {
  MyShopping: styled.section`
  `,
}

export default function MyShopping() {
  const { totalUsedPoint, totalAccPoint, isSuccess, totalAmount, totalLength, currentPoint } = usePoint();

  return (
    <S.MyShopping>
      <PageTitle TitleText='마이쇼핑' />
      <UserInfo currentPoint={currentPoint} />

      <PointMenu
        currentPoint={currentPoint}
        totalUsedPoint={totalUsedPoint}
        totalAccPoint={totalAccPoint}
        totalAmount={totalAmount}
        totalLength={totalLength}
        isSuccess={isSuccess}
      />
      <QuickMove />
    </S.MyShopping>
  );
}
