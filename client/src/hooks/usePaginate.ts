import { useCallback, Dispatch, SetStateAction, useState, useEffect } from 'react';
import useDidMountEffect from 'hooks/useDidMountEffect';

export default function usePaginate(maxPages: number, page_size: number, turnPage: number) {
  const [array, setArray] = useState([]);

  useEffect(() => {
    const result = Array.from({ length: maxPages }, (v, i) => i + 1);
    const Arr = result.slice((turnPage - 1) * page_size, turnPage * page_size);
    setArray(Arr);

  }, [maxPages, turnPage, page_size]);

  return { array }
}