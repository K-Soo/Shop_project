import { useState, useEffect } from "react";
import produce from "immer";
import { IBasketItem } from 'interfaces/IProduct';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';

type TUseBasketAction = typeof generateAction extends (...args: any[]) => infer R ? R : never;

export interface IUseBasket {
  props: InferGetServerSidePropsType<null>;
  action: TUseBasketAction;
  state: IUseBasketState;
}

export interface IUseBasketState {
  openModal: boolean,
  basket: {
    selectItems: IBasketItem[];
    localStorageItem: IBasketItem[]
    CurrentSelectedOrder: IBasketItem[]
  }
}

export const basketDefaultValue: IUseBasket = {
  props: null,
  action: null,
  state: {
    openModal: false,
    basket: {
      selectItems: [],
      localStorageItem: null,
      CurrentSelectedOrder: null
    },
  },
};

const initializer = (props: any) => {
  const state: IUseBasketState = {
    openModal: false,
    basket: {
      selectItems: [],
      localStorageItem: null,
      CurrentSelectedOrder: null
    },
  };

  return state;
};

const generateAction = (update: (recipe: (draft: IUseBasketState) => void) => void) => {

  const setOpenModal = () =>
    update((draft) => {
      draft.openModal = !draft.openModal;
    });

  const setLocalItems = (data: IBasketItem[]) =>
    update((draft) => {
      draft.basket.localStorageItem = data;
    });
  
    const setCurrentOrder = (data: IBasketItem[]) =>
    update((draft) => {
      draft.basket.CurrentSelectedOrder = data;
    });

  return {
    setOpenModal,
    setLocalItems,
    setCurrentOrder
  };
};

const useBasket = (props: any): IUseBasket => {
  const [state, setAppState] = useState(() => initializer(props));
  // console.log('useBasket state: ', state.basket);
  const update = (recipe: (draft: IUseBasketState) => void) =>
    setAppState((prev) => produce(prev, recipe));
  const action = generateAction(update);
  const app = { props, state, action };

  return app;
};

export default useBasket;