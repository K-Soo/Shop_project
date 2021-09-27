import { useCallback } from 'react';
import { IProduct } from 'interfaces/IProduct';
import { useAppContext } from 'context/AppProvider';
import { queryKeys } from 'constants/queryKeys';
import { Get } from "api";
import { useQuery } from 'react-query';

interface IUseSearch {
  FilteredData: IProduct[]
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}



export default function useSearch(): IUseSearch {
  const { state } = useAppContext();
  const fallback: Array<null> = [];

  const selectFc = useCallback((data) => {
    if (state.keyword) return data.filter((d: IProduct) => d.name.trim().includes(state.keyword))
  }, [state.keyword]);

  const { data: FilteredData = fallback, isLoading, isSuccess, isError } = useQuery<IProduct[]>([queryKeys.SEARCH], async () => await Get.getAllProduct(), {
    retry: 0,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    select: selectFc,
    enabled: state.openSearch,
  });

  return { FilteredData, isLoading, isSuccess, isError }
}
