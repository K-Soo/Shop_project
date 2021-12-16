import { useState, useEffect, useCallback } from "react";
import debounce from 'lodash/debounce';

export function useScroll() {
  const [scrollY, setScrollY] = useState<number>(0);

  const listener = useCallback(() => {
    setScrollY(window.pageYOffset);
  }, []);

  const delay = 30;
  useEffect(() => {
    let mounted = true;
    if(mounted){
      window.addEventListener("scroll", debounce(listener, delay));
    }
    return () => {
      window.removeEventListener("scroll", listener);
      mounted = false;
    };
  });

  return {
    scrollY
  };
}