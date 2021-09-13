import { useRef, useEffect, useCallback, useState } from 'react';
import { useAppContext } from 'context/AppProvider';
import { TColor, IProduct, IBasketItem } from 'interfaces/IProduct';

const useCheckDuplicate = (target: IBasketItem[], selectItems: IBasketItem[]) => {
  const [state, setState] = useState<boolean>(false);
  const App = useAppContext();

  useEffect(() => {
    if (target.length) {
      const result = target.filter(({ name: localName, selectColor: color1 }) => selectItems.some(({ name: selectName, selectColor: color2 }) => color2[0].colorName == color1[0].colorName && localName === selectName));
      if (result.length) {
        setState(true);
      } else {
        setState(false);
      }
    }
  }, [selectItems, target]);

  return [state];
}

export default useCheckDuplicate;