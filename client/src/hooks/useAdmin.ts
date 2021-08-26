import { useState, useEffect } from "react";
import produce from "immer";

type TAppAction = typeof generateAction extends (...args: any[]) => infer R ? R : never;

export interface IApp {
  props: null;
  action: TAppAction;
  state: IAppState;
}

export interface IAppState {
  status: { loading: boolean };
  sideOpen: boolean;
  create : {
    product_type: string;
  }
}

export const adminDefaultValue: IApp = {
  props: null,
  action: null,
  state: {
    status: { loading: false },
    sideOpen:false,
    create : {
      product_type: '',
    }
  },
};

const initializer = (props: any) => {
  const state: IAppState = {
    status: { loading: false },
    sideOpen: false,
    create : {
      product_type: '',
    }
  };

  return state;
};

const generateAction = (update: (recipe: (draft: IAppState) => void) => void) => {

  const setIsNav = (status: boolean) =>
    update((draft) => {
      draft.status.loading = status;
    });
    const sideOpen = () =>
    update((draft) => {
      draft.sideOpen = !draft.sideOpen;
    });

    const setFormData = e =>
    update(draft => {
      const { name, type, checked,value, maxLength, selectedIndex } = e.target;
      console.log('selectedIndex: ', selectedIndex);
      console.log('name: ', name);
      let replaceValue = value.replace(/,/g, '');
      const keyArray = name.split('.');
      let label = e.nativeEvent.target[selectedIndex]?.text;

      if (keyArray.length === 1) draft[keyArray[0]] = replaceValue;
      else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = replaceValue;
      else if (keyArray.length === 3) draft[keyArray[0]][keyArray[1]][keyArray[2]] = replaceValue;
    });

  return {
    setIsNav,
    sideOpen,
    setFormData
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