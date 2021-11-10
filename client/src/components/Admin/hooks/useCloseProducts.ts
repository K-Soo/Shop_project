import { IProduct } from 'interfaces/IProduct';
import { useQuery, useMutation, useQueryClient,UseMutateFunction } from 'react-query';
import { queryKeys } from 'constants/queryKeys';
import { useAdminContext } from 'context/AdminProvider';
import { Get, Put } from "api";

export function useCloseProducts():UseMutateFunction<
  void,
  unknown,
  IProduct[],
  unknown
>{
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