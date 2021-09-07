import { createContext,useContext } from "react";
import useOrder,{orderDefaultValue} from 'hooks/useOrder';
import { AppProps } from "next/app";
import { InferGetServerSidePropsType, GetServerSideProps, GetServerSidePropsContext } from 'next';

interface IApp {
  children: React.ReactNode;
  value: any;
}

export const OrderContext = createContext(orderDefaultValue);
export const useOrderContext = () =>  useContext(OrderContext);

export default function OrderProvider(props: IApp) {
  const providerValue = useOrder(props.value);

  return (
    <OrderContext.Provider value={providerValue}>
      {props.children}
    </OrderContext.Provider>
  );
}

