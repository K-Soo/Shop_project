import { useCallback, Dispatch, SetStateAction, useState } from 'react';
import { IProduct } from 'interfaces/IProduct';
import { useEffect } from 'react';

export function useSort(sortingData: IProduct[]) {
  const [sort, setSort] = useState<string>('');
  console.log('sort: ', sort);

  useEffect(() => {
    const sortingFc = (sort: any) => {
      switch (sort) {
        case 'row':
          (sortingData.sort((a, b) => Number(b.product_price) - Number(a.product_price)));
          break;
        case 'hight':
          (
            sortingData.sort((a, b) => Number(a.product_price) - Number(b.product_price)));
          break;
        case 'new':
          (sortingData.sort((x) => x.new_product ? -1 : 1));
          break;
        case 'best':
          (sortingData.sort((x) => x.best_product ? -1 : 1));
          break;
        default:
          return sortingData;
      }
    };
    sortingFc(sort);
  }, [sort,sortingData])

  return {
    setSort,
    sortingData
  };
}