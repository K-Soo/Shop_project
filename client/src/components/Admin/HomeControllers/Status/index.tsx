import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import SalesBoard from 'components/Admin/HomeControllers/Status/SalesBoard';
import LineCartBoard from 'components/Admin/HomeControllers/Status/LineCartBoard';
import { ISalesData, IIineCartData, TFiltered } from 'interfaces/IAdmin';
import { useAdminContext } from 'context/AdminProvider';

interface IStatus {
  salesData: ISalesData;
  lineCartData: IIineCartData[];
  salesStatus?: any;
  lineCartStatus?: string;
  handleFilter: React.MouseEventHandler<HTMLLIElement>;
  filtered: TFiltered;
}

const S = {
  Status: styled.div<{ isWhite: boolean }>`
    flex: 1 1 65%;
    margin-right: 15px;
    background-color: ${props => props.isWhite ? '#F0F3F7' : '#131C2D'};
    transition: background-color 0.3s ease;
  `,
}

export default function Status({
  salesData,
  salesStatus,
  lineCartData,
  lineCartStatus,
  handleFilter,
  filtered
}: IStatus) {
  const { state } = useAdminContext();

  return (
    <S.Status isWhite={state.isWhite}>
      <SalesBoard
        salesData={salesData}
        salesStatus={salesStatus}
      />
      <LineCartBoard
        lineCartData={lineCartData}
        lineCartStatus={lineCartStatus}
        handleFilter={handleFilter}
        filtered={filtered}
      />
    </S.Status>
  );
}