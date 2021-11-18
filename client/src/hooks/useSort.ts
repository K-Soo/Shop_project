import { useCallback, Dispatch, SetStateAction, useState } from 'react';
import { IProduct } from 'interfaces/IProduct';
import { useEffect } from 'react';
import useDidMountEffect from 'hooks/useDidMountEffect';

export function useSort(sortingData: IProduct[]) {
  console.log('sortingData: ', sortingData);
  const [sort, setSort] = useState<string>('');

  useEffect(() => {
    const sortingFc = (sort: string) => {
      switch (sort) {
        case 'row':
          sortingData.sort((a, b) => Number(b.product_price) - Number(a.product_price)).sort(x => x.qty ? -1 : 1);
          break;
        case 'hight':
          sortingData.sort((a, b) => Number(a.product_price) - Number(b.product_price)).sort(x => x.qty ? -1 : 1);
          break;
        // case 'new':
        //   sortingData.sort((x) => x.new_product ? -1 : 1).sort(x => x.qty ? -1 : 1);
        //   break;
        // case 'best':
        //   sortingData.sort((x) => x.best_product ? -1 : 1).sort(x => x.qty ? -1 : 1);
        //   break;
        case '':
          return sortingData.sort(x => x.qty >= 1 ? -1 : 1);
          break;
        default:
          return sortingData.sort(x => x.qty >= 1 ? -1 : 1);
      }
    };
    sortingFc(sort);
  }, [sort, sortingData])

  return {
    setSort,
    sortingData
  };
}