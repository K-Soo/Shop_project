import { useState, useEffect } from "react";
import produce from "immer";
import { ICartItem } from 'interfaces/IProduct';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';

type TUseCartAction = typeof generateAction extends (...args: any[]) => infer R ? R : never;

export interface IUseCart {
  props: InferGetServerSidePropsType<null>;
  action: TUseCartAction;
  state: IUseCartState;
}

export interface IUseCartState {
  status: { loading: boolean };
  cart: ICartItem[];
}

export const cartDefaultValue: IUseCart = {
  props: null,
  action: null,
  state: {
    status: { loading: false },
    cart: [],
  },
};

const initializer = (props: any) => {
  const state: IUseCartState = {
    status: { loading: false },
    cart: [],
  };

  return state;
};

const generateAction = (update: (recipe: (draft: IUseCartState) => void) => void) => {
  const setIsNav = (status: boolean) =>
    update((draft) => {
      draft.status.loading = status;
    });

    const setItem = (status: any) =>
    update((draft) => {
      draft.cart.push(...status);
    });


  return {
    setIsNav,
    setItem
  };
};

const useCart = (props: any) :IUseCart=> {
  const [state, setAppState] = useState(() => initializer(props));

  const update = (recipe: (draft: IUseCartState) => void) =>
    setAppState((prev) => produce(prev, recipe));

  const action = generateAction(update);

  const app = { props, state, action };

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("basket"));
    if(result) action.setItem(result);
  }, []);


  return app;
};

export default useCart;