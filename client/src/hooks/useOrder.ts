import { useState, useEffect } from "react";
import produce from "immer";
import { IBasketItem } from 'interfaces/IProduct';

type TOrderAction = typeof generateAction extends (...args: any[]) => infer R ? R : never;

export interface IApp {
  props: null;
  action: TOrderAction;
  state: IOrderState;
}

export interface IOrderState {
  directText: boolean,
  TemporaryArray: IBasketItem[],
  orderForm: {
    Products: IBasketItem[],
    recipient: string,
    addr: {
      zoneCode: string,
      addr1: string,
      addr2: string,
    },
    phone: string,
    eMail: string,
    deliveryMessage: string,
  }
}

export const orderDefaultValue: IApp = {
  props: null,
  action: null,
  state: {
    directText: false,
    TemporaryArray: [],

    orderForm: {
      Products: [],
      recipient: '',
      addr: {
        zoneCode: '',
        addr1: '',
        addr2: '',
      },
      phone: '',
      eMail: '',
      deliveryMessage: '',
    }
  },
};

const initializer = (props: any) => {
  const state: IOrderState = {
    directText: false,
    TemporaryArray: [],
    orderForm: {
      Products: [],
      recipient: '',
      addr: {
        zoneCode: '',
        addr1: '',
        addr2: '',
      },
      phone: '',
      eMail: '',
      deliveryMessage: '',
    }
  };

  return state;
};

const generateAction = (update: (recipe: (draft: IOrderState) => void) => void) => {

  const setProducts = (data: IBasketItem) =>
    update((draft) => {
      draft.orderForm.Products.push(data);
    });

  const setEntireProducts = (items: IBasketItem[]) =>
    update((draft) => {
      draft.orderForm.Products = items
    });

  const setRemoveCheckedItem = (value: string,user:boolean) =>
    update((draft) => {
      if(user){
        draft.orderForm.Products = draft.orderForm.Products.filter(({ _id }) => _id !== value);
      }else{
        draft.orderForm.Products = draft.orderForm.Products.filter(({ date }) => date !== value);
      }
    });

  const setInitOrderForm = () =>
    update((draft) => {
      draft.orderForm = orderDefaultValue.state.orderForm;
    });

    const setTemporaryArray = (data:IBasketItem) =>
    update((draft) => {
      draft.TemporaryArray.push(data)
    });

    const setRemoveOrderItems = () =>
    update((draft) => {
      const result = draft.orderForm.Products.filter(({ _id: orderFormId}) => !draft.TemporaryArray.some(({ _id: TemporaryId }) => orderFormId== TemporaryId));
     
      draft.TemporaryArray = [];
      draft.orderForm.Products = result;
    });

  const setFormData = (e: any) =>
    update(draft => {
      const { name, type, checked, value, maxLength, selectedIndex } = e.target;
      let replaceValue = value.replace(/,/g, '');
      const keyArray = name.split('.');
      let label = e.nativeEvent.target[selectedIndex]?.text;

      if (type === 'select-one') {
        if (label === '직접입력') {
          draft.directText = true;
        }
        else {
          draft.directText = false;
        }
      }

      if (type === 'checkbox') {
        if (keyArray.length === 1) draft[keyArray[0]] = checked;
        else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = checked;
      } else {
        if (keyArray.length === 1) draft[keyArray[0]] = replaceValue;
        else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = replaceValue;
      }
    });

  return {
    setProducts,
    setFormData,
    setInitOrderForm,
    setRemoveCheckedItem,
    setEntireProducts,
    setTemporaryArray,
    setRemoveOrderItems
  };
};

const useOrder = (props: any) => {
  const [state, setAppState] = useState(() => initializer(props));
  console.log('useOrder: ', state);

  const update = (recipe: (draft: IOrderState) => void) =>
    setAppState((prev) => produce(prev, recipe));

  const action = generateAction(update);

  const app = { props, state, action };

  return app;
};

export default useOrder;