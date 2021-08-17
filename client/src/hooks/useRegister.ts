import { useState,useEffect } from "react";
import produce from "immer";
import useDidMountEffect from 'hooks/useDidMountEffect';

type TAppAction = typeof generateAction extends (...args: any[]) => infer R ? R : never;

export interface IApp {
  props: null;
  action: TAppAction;
  state: IAppState;
}

export interface IAppState {
  status: { loading: boolean };
  userId: string;
  password: string;
  passwordConfirm: string;
  userName: string;
  phone: string;
  email: string;
  addr1: string;
  addr2: string;
  zonecode: string;
  birth: string;
  solarCalendar: boolean;
  lunarCalendar: boolean;
}

export const appDefaultValue: IApp = {
  props: null,
  action: null,
  state: {
    status: { loading: false },
    userId: '',
    password: '',
    passwordConfirm: '',
    userName: '',
    phone: '',
    email: '',
    addr1: '',
    addr2: '',
    zonecode: '',
    birth: '',
    solarCalendar: true,
    lunarCalendar: false,
  },
};

const initializer = (props: any) => {
  const state: IAppState = {
    status: { loading: false },
    userId: '',
    password: '',
    passwordConfirm: '',
    userName: '',
    phone: '',
    email: '',
    addr1: '',
    addr2: '',
    zonecode: '',
    birth: '',
    solarCalendar: true,
    lunarCalendar: false,
  };
  return state;
};

const generateAction = (update: (recipe: (draft: IAppState) => void) => void) => {
  const setFormData = (e: { target: { name: string, value: any } }) =>
    update((draft) => {
      const { name, value } = e.target;
      draft[name] = value;
    });

  const setData = (stateName: string, value: any) =>
    update(draft => {
      const keyArray = stateName.split('.');

      if (keyArray.length === 1) draft[keyArray[0]] = value;
      else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = value;
      else if (keyArray.length === 3) draft[keyArray[0]][keyArray[1]][keyArray[2]] = value;
    });

    const InitData = (stateName: string, initValue?: any) =>
    update(draft => {
      let valueDefault = '';
      if (initValue) valueDefault = initValue;
      draft[stateName] = valueDefault;
    });

  const setIsNav = (status: boolean) =>
    update((draft) => {
      draft.status.loading = status;
    });

  return {
    setIsNav,
    setFormData,
    setData,
    InitData
  };
};

const useRegister = (props: any) => {
  const [state, setAppState] = useState(() => initializer(props));
  console.log('state: ', state);

  const update = (recipe: (draft: IAppState) => void) =>
    setAppState((prev) => produce(prev, recipe));

  const action = generateAction(update);

  const app = { props, state, action };

  useEffect(() => {
    app.action.InitData('addr2');
  },[app.state.addr1])

  return app;
};

export default useRegister;