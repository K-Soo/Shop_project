import { useState, useEffect } from "react";
import produce from "immer";
import useDidMountEffect from 'hooks/useDidMountEffect';

type TAppAction = typeof generateAction extends (...args: any[]) => infer R ? R : never;

export interface IApp {
  props: null;
  action: TAppAction;
  state: IRegisterState;
}

export interface IRegisterState {
  status: { loading: boolean };
  TermsOfService: boolean,
  PersonalInfo: boolean,
  isDuplicateId: boolean;
  phone1: string;
  phone2: string;
  phone3: string;
  form: {
    userId: string;
    password: string;
    passwordConfirm: string;
    userName: string;
    phone: string;
    email: string;
    addr1: string;
    addr2: string;
    zonecode: string;
  }
}

export const registerDefaultValue: IApp = {
  props: null,
  action: null,
  state: {
    status: { loading: false },
    TermsOfService: false,
    PersonalInfo: false,
    isDuplicateId: true,
    phone1: '',
    phone2: '',
    phone3: '',
    form: {
      userId: '',
      password: '',
      passwordConfirm: '',
      userName: '',
      phone: '',
      email: '',
      addr1: '',
      addr2: '',
      zonecode: '',
    }
  },
};

const initializer = (props: any) => {
  const state: IRegisterState = {
    status: { loading: false },
    TermsOfService: false,
    PersonalInfo: false,
    isDuplicateId: true,
    phone1: '',
    phone2: '',
    phone3: '',
    form: {
      userId: '',
      password: '',
      passwordConfirm: '',
      userName: '',
      phone: '',
      email: '',
      addr1: '',
      addr2: '',
      zonecode: '',
    }
  };
  return state;
};

const generateAction = (update: (recipe: (draft: IRegisterState) => void) => void) => {
  const setFormData = (e: { target: { name: string, value: any } }) =>
    update((draft) => {
      const { name, value } = e.target;
      const keyArray = name.split('.');
      if (keyArray.length === 1) draft[keyArray[0]] = value;
      else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = value;
      else if (keyArray.length === 3) draft[keyArray[0]][keyArray[1]][keyArray[2]] = value;
    });

  const setData = (stateName: string, value: any) =>
    update(draft => {
      const keyArray = stateName.split('.');
      if (keyArray.length === 1) draft[keyArray[0]] = value;
      else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = value;
      else if (keyArray.length === 3) draft[keyArray[0]][keyArray[1]][keyArray[2]] = value;
    });

  const setPhone = (e:any) =>
    update(draft => {
      const { name, value } = e.target;
      draft[name] = value;
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

  const setCheckBox = (e) =>
    update((draft) => {
      const {name ,checked} = e.target;
      console.log('checked: ', checked);
      console.log('name: ', name);
      if(name === 'TermsOfService') draft.TermsOfService = checked;
      if(name === 'PersonalInfo') draft.PersonalInfo = checked;

      if(name === 'allCheck'){
        draft.TermsOfService = checked;
        draft.PersonalInfo = checked;
      }

  });

  return {
    setIsNav,
    setFormData,
    setData,
    InitData,
    setPhone,
    setCheckBox
  };
};

const useRegister = (props: any) => {
  const [state, setAppState] = useState(() => initializer(props));
  console.log('useRegister state: ', state);

  const update = (recipe: (draft: IRegisterState) => void) =>
    setAppState((prev) => produce(prev, recipe));

  const action = generateAction(update);

  const app = { props, state, action };

  useEffect(() => {
    app.action.InitData('form.addr2');
  }, [app.state.form.addr1])

  useEffect(() => {
    app.action.setData('isDuplicateId',true);
  },[app.state.form.userId])

  return app;
};

export default useRegister;