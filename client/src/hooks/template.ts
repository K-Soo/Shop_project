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
}

export const appDefaultValue: IApp = {
  props: null,
  action: null,
  state: {
    status: { loading: false },
  },
};

const initializer = (props: any) => {
  const state: IAppState = {
    status: { loading: false },
  };

  return state;
};

const generateAction = (update: (recipe: (draft: IAppState) => void) => void) => {
  const setIsNav = (status: boolean) =>
    update((draft) => {
      draft.status.loading = status;
    });

  return {
    setIsNav,
  };
};

const useApp = (props: any) => {
  const [state, setAppState] = useState(() => initializer(props));

  const update = (recipe: (draft: IAppState) => void) =>
    setAppState((prev) => produce(prev, recipe));

  const action = generateAction(update);

  const app = { props, state, action };

  return app;
};

export default useApp;