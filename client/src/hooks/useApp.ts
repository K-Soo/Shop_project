import { useState, useEffect } from "react";
import produce from "immer";
import { useRouter } from 'next/router';
import useDidMountEffect from 'hooks/useDidMountEffect';

type TAppAction = typeof generateAction extends (...args: any[]) => infer R ? R : never;

export interface IApp {
  props: null;
  action: TAppAction;
  state: IAppState;
}

export interface IAppState {
  status: { loading: boolean };
  openSideMenu: boolean;
  openSubMenu: boolean,
  targetCategory: string;
}

export const appDefaultValue: IApp = {
  props: null,
  action: null,
  state: {
    status: { loading: false },
    openSideMenu: false,
    openSubMenu: false,
    targetCategory: 'all'
  },
};

const initializer = (props: any) => {
  const state: IAppState = {
    status: { loading: false },
    openSideMenu: false,
    openSubMenu: false,
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

  const setToggleSubMenu = () => {
    update((draft) => {
      draft.openSubMenu = !draft.openSubMenu;
    })
  }

  const setCategory = (e: React.MouseEvent<HTMLLIElement>) => {
    update((draft) => {
      const { name } = (e.target as HTMLLIElement).dataset;
      console.log('name: ', name);
      draft.targetCategory = name;
    });
  }

  const InitData = (stateName: string, initValue?: any) =>
    update(draft => {
      let valueDefault = '';
      if (initValue) valueDefault = initValue;
      draft[stateName] = valueDefault;
    });


  return {
    setIsNav,
    setToggleSideMenu,
    setCategory,
    setToggleSubMenu,
    InitData
  };
};

const useApp = (props: any) => {
  const [state, setAppState] = useState(() => initializer(props));
  console.log('state: ', state);
  const update = (recipe: (draft: IAppState) => void) =>
    setAppState((prev) => produce(prev, recipe));
  const router = useRouter();
  console.log('router: ', router);
  const action = generateAction(update);
  const app = { props, state, action };

  useEffect(() => {
    app.action.InitData('openSubMenu', false);
  }, [app.state.targetCategory])

  useDidMountEffect(() => {
    app.action.InitData('targetCategory', 'all');
  }, [router.asPath])

  return app;
};

export default useApp;