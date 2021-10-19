import React,{useState,useEffect} from "react";
import styled from "styled-components";
import PageTitle from 'components/Common/PageTitle';
import PointMenu from 'components/MyShopping/PointMenu';
import UserBanner from 'components/MyShopping/UserBanner';
import OrderStatus from 'components/MyShopping/OrderStatus';
import QuickMove from 'components/MyShopping/QuickMove';
import UserInfo from 'components/Forms/UserInfo';
import { queryKeys } from 'constants/queryKeys';
import { Get } from "api";
import { useQuery, UseQueryResult, useQueryClient } from 'react-query';
import { useAppContext } from 'context/AppProvider';
import {IPointInfo} from 'interfaces/IPoint';

interface IMyShopping {

}

const S = {
  MyShopping: styled.section`
  `,
}

export default function MyShopping({ }: IMyShopping) {
  const [totalUsedPoint, setTotalUsedPoint] = useState<number | null>(null);
  const [totalAccPoint, setTotalAccPoint] = useState<number | null>(null);
  const { state: { userInfo: { idx } } } = useAppContext();
  
  const { data, isLoading, isSuccess, isError, error, isFetching } = useQuery<IPointInfo>([queryKeys.POINT, idx], async () => await Get.getPointInfo(idx), {
    retry: 0,
    refetchOnWindowFocus: false,
    enabled: !!idx,
    staleTime: 2000,
  });
  
  console.log('data: ', data);
  useEffect(() => {
    if(data){
      const usedValue = data.pointInfo.reduce((acc,cur) => acc + (Number(cur.usedPoint)),0);
      setTotalUsedPoint(usedValue);
      const accValue = data.pointInfo.reduce((acc,cur) => acc + (cur.savedPoint),0);
      setTotalAccPoint(accValue);
    }
  },[data]);

  return (
    <S.MyShopping>
      <PageTitle TitleText='마이쇼핑' />
      {isSuccess && (
        <>
          <UserBanner />
          <UserInfo currentPoint={data.currentPoint}/>
          <PointMenu 
            currentPoint={data.currentPoint} 
            totalUsedPoint={totalUsedPoint}
            totalAccPoint={totalAccPoint}
            totalAmount={data.totalAmount}
            totalLength={data.totalLength}
            />
          <OrderStatus />
        </>
      )}
      <QuickMove />

    </S.MyShopping>
  );
}
