import { createContext,useContext } from "react";
import useBasket, { basketDefaultValue } from 'hooks/useBasket';
import { AppProps } from "next/app";
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';

interface IApp {
  children: React.ReactNode;
  value: (InferGetServerSidePropsType<null>);
}

export const BasketContext = createContext(basketDefaultValue);
export const useBasketContext = () =>  useContext(BasketContext);

export default function BasketProvider(props: IApp) {
  const providerValue = useBasket(props.value);

  return (
    <BasketContext.Provider value={providerValue}>
      {props.children}
    </BasketContext.Provider>
  );
}
