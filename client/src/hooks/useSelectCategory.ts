import { useCallback,useState,useEffect } from "react";
import { useAppContext } from 'context/AppProvider';
import {IProduct} from 'interfaces/IProduct';

export function useSelectCategory(item:IProduct[]) {
  const { state } = useAppContext();
  const [filtered,setFiltered] = useState<IProduct[]>([]);

  useEffect(() => {
    if (state.targetCategory === 'all') {
      setFiltered(item);
    }else{
      setFiltered(item.filter(d => d.category === state.targetCategory))
    }
  }, [state.targetCategory,item]);
  
  return filtered
}