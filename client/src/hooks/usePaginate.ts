import { useState, useEffect } from 'react';

export default function usePaginate(maxPages: number, pageSize: number, turnPage: number) {
  const [array, setArray] = useState([]);

  useEffect(() => {
    const result = Array.from({ length: maxPages }, (v, i) => i + 1);
    const Arr = result.slice((turnPage - 1) * pageSize, turnPage * pageSize);
    setArray(Arr);

  }, [maxPages, turnPage, pageSize]);

  return { array }
}