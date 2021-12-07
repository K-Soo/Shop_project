import { IProduct } from 'interfaces/IProduct';
import { useMutation, useQueryClient, UseMutateFunction } from 'react-query';
import { queryKeys } from 'constants/queryKeys';
import { useAdminContext } from 'context/AdminProvider';
import { Put,Delete } from "api";
import { useAppContext } from 'context/AppProvider';

export function useChangeQty(): UseMutateFunction<
  void,
  unknown,
  IProduct[],
  unknown
> {
  const idx = '123';
  const queryClient = useQueryClient();
  const { state } = useAdminContext();

  const { mutate } = useMutation(async (item: IProduct[]) => await Put.updateProductQty(idx, item), {
    onSuccess: () => {
      alert('변경이 완료되었습니다');
      queryClient.invalidateQueries([queryKeys.PRODUCT, state.filter.product_type])
    }
  });
  return mutate;
}

export function useSelectCloseProducts(): UseMutateFunction<
  void,
  unknown,
  string[],
  unknown
> {
  const queryClient = useQueryClient();
  const { state } = useAdminContext();

  const { mutate } = useMutation(async (ids: string[]) => await Put.updateProductClose(ids), {
    onSuccess: () => {
      alert('선택상품이 마감되었습니다');
      queryClient.invalidateQueries([queryKeys.PRODUCT_CLOSE, state.filter.product_type])
    }
  });
  return mutate;
}

export function useAllCloseProducts(): UseMutateFunction<
  void,
  unknown,
  string[],
  unknown
> {
  const queryClient = useQueryClient();
  const { state } = useAdminContext();

  const { mutate } = useMutation(async (ids: string[]) => await Put.updateProductClose(ids), {
    onSuccess: () => {
      alert('선택상품이 마감되었습니다');
      queryClient.invalidateQueries([queryKeys.PRODUCT_CLOSE, state.filter.product_type])
    }
  });
  return mutate;
}

export function useDeleteNotice(): UseMutateFunction<
  void,
  unknown,
  string[],
  unknown
> {
  const queryClient = useQueryClient();
  const App = useAppContext();
  const currentPage = Number(App.state.pagination.currentPage);

  const { mutate } = useMutation(async (checkedArray: string[]) => await Put.deleteManyNotice(checkedArray), {
    onSuccess: () => {
      alert('선택된 공지가 삭제되었습니다');
      queryClient.invalidateQueries([queryKeys.NOTICE_LIST.name, currentPage, queryKeys.NOTICE_LIST.limit])
    }
  });
  return mutate;
}
type Tparams = {idx:string,name: string};
