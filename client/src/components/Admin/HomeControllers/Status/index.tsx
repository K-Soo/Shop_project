import React from "react";
import styled from "styled-components";
import SalesBoard from 'components/Admin/HomeControllers/Status/SalesBoard';
import LineCartBoard from 'components/Admin/HomeControllers/Status/LineCartBoard';
import PieCartBoard from 'components/Admin/HomeControllers/Status/PieCartBoard';
import { ISalesData } from 'interfaces/IAdmin';

interface IStatus {
  salesData?: ISalesData;
  salesStatus?: any;
}

const S = {
  Status: styled.div`
    flex: 1 1 65%;
    margin-right: 15px;
    background-color: #F0F3F7;
    /* border: 1px solid red; */
  `,
}

export default function Status({ salesData, salesStatus }: IStatus) {
  return (
    <S.Status>
      <SalesBoard salesData={salesData} salesStatus={salesStatus} />
      <LineCartBoard />
      <PieCartBoard />
    </S.Status>
  );
}