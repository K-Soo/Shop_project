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
  currentOrderItem: IBasketItem[],
  directText: boolean,
  orderForm: {
    recipient: string,
    addr:{
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
    currentOrderItem: [],
    directText: false,
    orderForm: {
      recipient: '',
      addr:{
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
    currentOrderItem: [],
    directText: false,
    orderForm: {
      recipient: '',
      addr:{
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
  const setCurrentOrderItem = (data: IBasketItem) =>
    update((draft) => {
      draft.currentOrderItem.push(data);
    });

    const setFormData = (e: any) =>
    update(draft => {
      const { name, type, checked, value, maxLength, selectedIndex } = e.target;
      console.log('type: ', type);
      console.log('value: ', value);
      console.log('name: ', name);
      let replaceValue = value.replace(/,/g, '');
      const keyArray = name.split('.');
      let label = e.nativeEvent.target[selectedIndex]?.text;
      console.log('label: ', label);

      if(type === 'select-one'){
        if(label === '직접입력') {
          draft.directText = true;
        }
        else{
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
    setCurrentOrderItem,
    setFormData
  };
};

const useOrder = (props: any) => {
  const [state, setAppState] = useState(() => initializer(props));
  console.log('useOrder state: ', state);

  const update = (recipe: (draft: IOrderState) => void) =>
    setAppState((prev) => produce(prev, recipe));

  const action = generateAction(update);

  const app = { props, state, action };

  return app;
};

export default useOrder;