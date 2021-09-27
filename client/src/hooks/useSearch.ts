import { useCallback, Dispatch, SetStateAction, useState } from 'react';
import { IProduct } from 'interfaces/IProduct';
import { queryKeys } from 'constants/queryKeys';
import { Get } from "api";
import { useQuery } from 'react-query';

export interface IUseSearch {
  FilteredData: IProduct[]
  setFilter: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  filter: string;
}

export default function useSearch(): IUseSearch {
  const [filter, setFilter] = useState('');
  const fallback: Array<null> = [];

  const selectFc = useCallback((data) => {
    if (filter) return data.filter((d: IProduct) => d.name.trim().includes(filter))
  }, [filter]);

  const { data: FilteredData = fallback, isLoading, isSuccess, isError } = useQuery<IProduct[]>([queryKeys.SEARCH], async () => await Get.getAllProduct(), {
    retry: 0,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    select: selectFc,
    // enabled: state.openSearch,
  });

  return { FilteredData, isLoading, isSuccess, isError, setFilter, filter }
}
