import { useEffect, useState } from 'react';
import { IProduct } from 'interfaces/IProduct';
import useDidMountEffect from 'hooks/useDidMountEffect';

export function useSort(selectedItem: IProduct[]) {
  const [sort, setSort] = useState<string>('');
  const [sortingData, setSortingData] = useState([]);

  useEffect(() => {
    if(selectedItem.length > 0 ){
      switch (sort) {
        case 'row':
          setSortingData(selectedItem.sort((a, b) => Number(b.consumer_price) - Number(a.consumer_price)).sort(x => x.qty ? -1 : 1))
          break;
        case 'hight':
          setSortingData(selectedItem.sort((a, b) => Number(a.consumer_price) - Number(b.consumer_price)).sort(x => x.qty ? -1 : 1))
          break;
        case 'new':
          setSortingData(selectedItem.sort((x) => x.new_product ? 1 : -1).sort(x => x.qty ? -1 : 1));
          break;
        case 'best':
          setSortingData(selectedItem.sort((x) => x.best_product ? 1 : -1).sort(x => x.qty ? -1 : 1));
          break;
        default:
          setSortingData(selectedItem.sort(x => x.qty >= 1 ? -1 : 1));
          break;
      };
    }
  }, [sort, selectedItem]);

  return {
    setSort,
    sortingData
  };
}