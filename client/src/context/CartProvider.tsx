import { createContext,useContext } from "react";
import useCart, { cartDefaultValue } from 'hooks/useCart';
import { AppProps } from "next/app";
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';

interface IApp {
  children: React.ReactNode;
  value: (InferGetServerSidePropsType<null>);
}

export const CartContext = createContext(cartDefaultValue);
export const useCartContext = () =>  useContext(CartContext);

export default function AppProvider(props: IApp) {
  const providerValue = useCart(props.value);

  return (
    <CartContext.Provider value={providerValue}>
      {props.children}
    </CartContext.Provider>
  );
}

