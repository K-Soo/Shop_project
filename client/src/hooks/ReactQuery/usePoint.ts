import { useState, useEffect } from "react";
import { IPointInfo } from 'interfaces/IPoint';
import { useQuery } from 'react-query';
import { queryKeys } from 'constants/queryKeys';
import { useAppContext } from 'context/AppProvider';
import { Get } from "api";

export default function usePoint(){
  const [totalUsedPoint, setTotalUsedPoint] = useState<number | null>(null);
  const [totalAccPoint, setTotalAccPoint] = useState<number | null>(null);
  const { state: { userInfo: { idx } } } = useAppContext();

  const { data, isLoading, isSuccess, isError } = useQuery<IPointInfo>([queryKeys.POINT, idx], async () => await Get.getPointInfo(idx), {
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    enabled: !!idx,
    staleTime: 2000,
  });

  useEffect(() => {
    if (data) {
      const usedValue = data.pointInfo.reduce((acc, cur) => acc + (Number(cur.usedPoint)), 0);
      setTotalUsedPoint(usedValue);
      const accValue = data.pointInfo.reduce((acc, cur) => acc + (cur.savedPoint), 0);
      setTotalAccPoint(accValue);
    }
  }, [data]);

  return {
    totalUsedPoint,
    totalAccPoint,
    isSuccess,
    isLoading,
    totalAmount: data?.totalAmount,
    totalLength: data?.totalLength,
    currentPoint: data?.currentPoint,
  }
}