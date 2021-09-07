import { useState, useEffect } from "react";
import produce from "immer";

export type TAppAction = typeof generateAction extends (...args: any[]) => infer R ? R : never;

export interface IUseAdmin {
  props: null;
  action: TAppAction;
  state: IAppState;
}


export interface IAppState {
  status: { loading: boolean };
  sideOpen: boolean;
  create: {
    new_product: boolean,
    best_product: boolean,
    product_type: string;
    category: string,
    name: string,
    consumer_price: string,
    product_price: string,
    summary_description: string,
    description: string,
    product_colors: { hex_value: string, color_name: string }[],
    imageUrl: { url: string }[],
  }
}

export const adminDefaultValue: IUseAdmin = {
  props: null,
  action: null,
  state: {
    status: { loading: false },
    sideOpen: false,
    create: {
      new_product: false,
      best_product: false,
      product_type: '',
      category: '',
      name: '',
      consumer_price: '',
      product_price: '',
      summary_description: '',
      description: '',
      product_colors: [],
      imageUrl: [],
    }
  },
};

const initializer = (props: any) => {
  const state: IAppState = {
    status: { loading: false },
    sideOpen: false,
    create: {
      new_product: false,
      best_product: false,
      product_type: '',
      category: '',
      name: '',
      consumer_price: '',
      product_price: '',
      summary_description: '',
      description: '',
      product_colors: [],
      imageUrl: [],
    }
  };

  return state;
};

const generateAction = (update: (recipe: (draft: IAppState) => void) => void) => {

  const sideOpen = () =>
    update((draft) => {
      draft.sideOpen = !draft.sideOpen;
    });

  const setIsNav = (status: boolean) =>
    update((draft) => {
      draft.status.loading = status;
    });

  const setRemoveColor = (colors: any) =>
    update((draft) => {
      draft.create.product_colors = colors;
    });

  const setFormData = (e: any) =>
    update(draft => {
      const { name, type, checked, value, maxLength, selectedIndex } = e.target;
      let replaceValue = value.replace(/,/g, '');
      const keyArray = name.split('.');
      let label = e.nativeEvent.target[selectedIndex]?.text;
      if (type === 'checkbox') {
        if (keyArray.length === 1) draft[keyArray[0]] = checked;
        else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = checked;
      } else {
        if (keyArray.length === 1) draft[keyArray[0]] = replaceValue;
        else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = replaceValue;
      }
    });

  const setData = (stateName: string, value: any) =>
    update(draft => {
      const keyArray = stateName.split('.');

      if (keyArray.length === 1) draft[keyArray[0]] = value;
      else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = value;
      else if (keyArray.length === 3) draft[keyArray[0]][keyArray[1]][keyArray[2]] = value;
    });

  const setColorArray = (result: { hex_value: string, color_name: string }) => update(draft => {
    draft.create.product_colors.push(result);
  })

  return {
    setIsNav,
    sideOpen,
    setFormData,
    setColorArray,
    setRemoveColor,
    setData
  };
};

const useAdmin = (props: any) => {
  const [state, setAppState] = useState(() => initializer(props));
  console.log('state: ', state);

  const update = (recipe: (draft: IAppState) => void) =>
    setAppState((prev) => produce(prev, recipe));

  const action = generateAction(update);

  const app = { props, state, action };

  return app;
};

export default useAdmin;