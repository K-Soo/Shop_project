import { useCallback } from "react";
import { useAppContext } from 'context/AppProvider';
import {IProduct} from 'interfaces/IProduct';

export function useSelectCategory(item:IProduct[]) {
  const { state } = useAppContext();

  const handleFiltering = useCallback((item:IProduct[]) => {
    if (state.targetCategory === 'all') return item;
    return item?.filter(d => d.category === state.targetCategory);
  }, [state.targetCategory]);
  
  return handleFiltering(item);
}