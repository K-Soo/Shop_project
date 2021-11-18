import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Status from 'components/Admin/HomeControllers/Status';
import Information from 'components/Admin/HomeControllers/Information';
import { Get } from "api";
import { useQueries } from 'react-query';
import { queryKeys } from 'constants/queryKeys';
import { TFiltered, } from 'interfaces/IAdmin';
interface IHomeControllers {
  children: React.ReactNode;
}

const S = {
  HomeControllers: styled.div`
    height: 100%;
    width: 100%;
    display: flex;
  `,
}

export default function HomeControllers({ children }: IHomeControllers) {
  const [filtered, setFiltered] = useState<TFiltered>('cnt');
  const currentPage = 1;

  const items = useQueries([
    {
      queryKey: [queryKeys.ADMIN.sales],
      queryFn: async () => await Get.getAdminSales(),
      keepPreviousData: true,
      refetchOnWindowFocus: false
    },
    {
      queryKey: [queryKeys.ADMIN.usedPoint],
      queryFn: async () => await Get.getAdminPoint(),
      keepPreviousData: true,
      refetchOnWindowFocus: false
    },
    {
      queryKey: [queryKeys.ADMIN.notice],
      queryFn: async () => await Get.getNoticeList(currentPage, 5),
      keepPreviousData: true,
      refetchOnWindowFocus: false
    },
    {
      queryKey: [queryKeys.ADMIN.statistics,filtered],
      queryFn: async () => await Get.getAdminStatistics(filtered),
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    },
  ]);

  const handleFilter = useCallback((e) => {
    const { className } = e.target;
    setFiltered(className);
  }, []);

  return (
    <S.HomeControllers>
      <Status
        salesData={items[0].data}
        salesStatus={items[0].status}
        lineCartData={items[3].data}
        lineCartStatus={items[3].status}
        handleFilter={handleFilter}
        filtered={filtered}
      />
      <Information
        pointData={items[1].data}
        PointStatus={items[1].status}
        noticeData={items[2].data}
        noticeStatus={items[2].status}
      />
    </S.HomeControllers>
  );
}
