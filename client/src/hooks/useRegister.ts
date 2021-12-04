import { useState, useEffect } from "react";
import produce from "immer";
import useDidMountEffect from 'hooks/useDidMountEffect';
import { useRouter, NextRouter } from 'next/router';

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
  TemporaryPhone1: string,
  TemporaryPhone2: string,
  TemporaryPhone3: string,
  TemporaryEmail1: string,
  TemporaryEmail2: string,
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
    TemporaryPhone1: '',
    TemporaryPhone2: '',
    TemporaryPhone3: '',
    TemporaryEmail1: '',
    TemporaryEmail2: '',
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
    TemporaryPhone1: '',
    TemporaryPhone2: '',
    TemporaryPhone3: '',
    TemporaryEmail1: '',
    TemporaryEmail2: '',
    form: {
      userId: props?.userDetail?.userId ?? '',
      password: '',
      passwordConfirm: '',
      userName: props?.userDetail?.userName ?? '',
      phone: '',
      email: '',
      addr1: props?.userDetail?.addr1 ?? '',
      addr2: props?.userDetail?.addr2 ?? '',
      zonecode: props?.userDetail?.zonecode ?? '',
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

  const InitData = (stateName: string, initValue?: any) =>
    update(draft => {
      const keyArray = stateName.split('.');
      let valueDefault = '';
      if (initValue) valueDefault = initValue;

      if (keyArray.length === 1) draft[keyArray[0]] = valueDefault;
      else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = valueDefault;
      else if (keyArray.length === 3) draft[keyArray[0]][keyArray[1]][keyArray[2]] = valueDefault;
    });

  const setIsNav = (status: boolean) =>
    update((draft) => {
      draft.status.loading = status;
    });

  const setCheckBox = (e: any) =>
    update((draft) => {
      const { name, checked } = e.target;
      if (name === 'TermsOfService') draft.TermsOfService = checked;
      if (name === 'PersonalInfo') draft.PersonalInfo = checked;

      if (name === 'allCheck') {
        draft.TermsOfService = checked;
        draft.PersonalInfo = checked;
      }
    });

  return {
    setIsNav,
    setFormData,
    setData,
    InitData,
    setCheckBox
  };
};

const useRegister = (props: any) => {
  const [state, setAppState] = useState(() => initializer(props));
  const router: NextRouter = useRouter()

  const update = (recipe: (draft: IRegisterState) => void) =>
    setAppState((prev) => produce(prev, recipe));

  const action = generateAction(update);

  const app = { props, state, action };

  useEffect(() => {
    // 회원가입 수정 초기값
    if (router.asPath === '/users/modify') {
      const result = props?.userDetail;
      if (result.email) {
        const emailArray = result.email.split('@');
        app.action.InitData('TemporaryEmail1', emailArray[0]);
        app.action.InitData('TemporaryEmail2', emailArray[1]);
      }
      if (result.phone) {
        const phoneArray = result.phone.split('-');
        app.action.InitData('TemporaryPhone1', phoneArray[0]);
        app.action.InitData('TemporaryPhone2', phoneArray[1]);
        app.action.InitData('TemporaryPhone3', phoneArray[2]);
      }
    }
  }, []);

  useDidMountEffect(() => {
    app.action.InitData('form.addr2');
  }, [app.state.form.addr1])

  useEffect(() => {
    app.action.setData('isDuplicateId', true);
  }, [app.state.form.userId])

  useDidMountEffect(() => {
    const result = app.state.TemporaryPhone1.concat('-', app.state.TemporaryPhone2, '-', app.state.TemporaryPhone3);
    action.setData('form.phone', result);
  }, [app.state.TemporaryPhone1, app.state.TemporaryPhone2, app.state.TemporaryPhone3]);

  useDidMountEffect(() => {
    const result = app.state.TemporaryEmail1.concat('@', app.state.TemporaryEmail2);
    app.action.setData('form.email', result);
  }, [app.state.TemporaryEmail1, app.state.TemporaryEmail2]);

  return app;
};

export default useRegister;