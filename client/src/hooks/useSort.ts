import { useCallback, Dispatch, SetStateAction, useState } from 'react';
import { IProduct } from 'interfaces/IProduct';
import { useEffect } from 'react';
import useDidMountEffect from 'hooks/useDidMountEffect';

export function useSort(items: IProduct[]) {
  const [sort, setSort] = useState<string>('');
  const [sortingData,setSortingData] = useState([]);

  useEffect(() => {
  const copyObj = [...items];
    const sortingFc = (sort: string) => {
      switch (sort) {
        case 'row':
          setSortingData(copyObj.sort((a, b) => Number(b.consumer_price) - Number(a.consumer_price)).sort(x => x.qty ? -1 : 1))
          break;
        case 'hight':
          setSortingData(copyObj.sort((a, b) => Number(a.consumer_price) - Number(b.consumer_price)).sort(x => x.qty ? -1 : 1))
          break;
        case 'new':
          setSortingData(copyObj.sort((x) => x.new_product ? 1 : -1).sort(x => x.qty ? -1 : 1));
          break;
        case 'best':
          setSortingData(copyObj.sort((x) => x.best_product ? 1 : -1).sort(x => x.qty ? -1 : 1));
          break;
        default:
          return setSortingData(copyObj.sort(x => x.qty >= 1 ? -1 : 1))
      };
    };
    sortingFc(sort);
  }, [sort,items]);

  return {
    setSort,
    sortingData
  };
}