import { useCallback, Dispatch, SetStateAction, useState } from 'react';
import { IProduct } from 'interfaces/IProduct';
import { useEffect } from 'react';
import useDidMountEffect from 'hooks/useDidMountEffect';

export function useSort(items: IProduct[]) {
  console.log('items: ', items);
  const [sort, setSort] = useState<string>('');
  const [init,setInit] = useState([]);
  const [sortingData, setSortingData] = useState([]);

  useEffect(() => {
    setInit(items);
  },[items])

  useEffect(() => {
    switch (sort) {
      case 'row':
        setSortingData(init.sort((a, b) => Number(b.consumer_price) - Number(a.consumer_price)).sort(x => x.qty ? -1 : 1))
        break;
      case 'hight':
        setSortingData(init.sort((a, b) => Number(a.consumer_price) - Number(b.consumer_price)).sort(x => x.qty ? -1 : 1))
        break;
      case 'new':
        setSortingData(init.sort((x) => x.new_product ? 1 : -1).sort(x => x.qty ? -1 : 1));
        break;
      case 'best':
        setSortingData(init.sort((x) => x.best_product ? 1 : -1).sort(x => x.qty ? -1 : 1));
        break;
      default:
        setSortingData(init.sort(x => x.qty >= 1 ? -1 : 1))
        break;
    };
  }, [sort,init]);

  return {
    setSort,
    sortingData
  };
}