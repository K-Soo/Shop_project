import { useCallback, useState, useEffect } from "react";
import { useAppContext } from 'context/AppProvider';
import { IProduct } from 'interfaces/IProduct';
import useDidMountEffect from 'hooks/useDidMountEffect';

export function useSelectCategory(item: IProduct[]) {
  const { state } = useAppContext();
  const [filtered, setFiltered] = useState<IProduct[]>([]);
  
  useDidMountEffect(() => {
    if(item.length > 0){
      if (state.targetCategory === 'all') {
        setFiltered(item);
      } else {
        setFiltered(item.filter(d => d.category === state.targetCategory));
      }
    }
  }, [state.targetCategory, item]);

  return filtered
}