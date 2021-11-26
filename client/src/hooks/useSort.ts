import { useEffect, useState } from 'react';
import { IProduct } from 'interfaces/IProduct';

export function useSort(items: IProduct[]) {
  const [sort, setSort] = useState<string>('');
  const [sortingData, setSortingData] = useState([]);

  useEffect(() => {
    switch (sort) {
      case 'row':
        setSortingData(items.sort((a, b) => Number(b.consumer_price) - Number(a.consumer_price)).sort(x => x.qty ? -1 : 1))
        break;
      case 'hight':
        setSortingData(items.sort((a, b) => Number(a.consumer_price) - Number(b.consumer_price)).sort(x => x.qty ? -1 : 1))
        break;
      case 'new':
        setSortingData(items.sort((x) => x.new_product ? 1 : -1).sort(x => x.qty ? -1 : 1));
        break;
      case 'best':
        setSortingData(items.sort((x) => x.best_product ? 1 : -1).sort(x => x.qty ? -1 : 1));
        break;
      default:
        setSortingData(items.sort(x => x.qty >= 1 ? -1 : 1))
        break;
    };
  }, [sort, items]);

  return {
    setSort,
    sortingData
  };
}