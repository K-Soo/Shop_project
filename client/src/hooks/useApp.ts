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
  openSideMenu: boolean;
  targetCategory: string;
}

export const appDefaultValue: IApp = {
  props: null,
  action: null,
  state: {
    status: { loading: false },
    openSideMenu: false,
    targetCategory: 'all'
  },
};

const initializer = (props: any) => {
  const state: IAppState = {
    status: { loading: false },
    openSideMenu: false,
    targetCategory: 'all'
  };

  return state;
};

const generateAction = (update: (recipe: (draft: IAppState) => void) => void) => {
  const setIsNav = (status: boolean) =>
    update((draft) => {
      draft.status.loading = status;
    });

  const setToggleSideMenu = () => {
    update((draft) => {
      draft.openSideMenu = !draft.openSideMenu;
    })
  }
  const setCategory = (name: string) => {
    update((draft) => {
      draft.targetCategory = name;
    });
  }

    return {
      setIsNav,
      setToggleSideMenu,
      setCategory
    };
  };

  const useApp = (props: any) => {
    const [state, setAppState] = useState(() => initializer(props));
    console.log('useApp state: ', state);
    const update = (recipe: (draft: IAppState) => void) =>
      setAppState((prev) => produce(prev, recipe));

    const action = generateAction(update);

    const app = { props, state, action };

    return app;
  };

  export default useApp;