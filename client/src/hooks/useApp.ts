import { useState, useEffect } from "react";
import produce from "immer";
import { useRouter } from 'next/router';
import useDidMountEffect from 'hooks/useDidMountEffect';
import NextApp, { AppProps, AppContext as NextAppContext } from "next/app";

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
  openSearch: boolean,
  testValue: string,
  targetCategory: string;
  layout: {
    isHeader: boolean,
    isFooter: boolean,
  },
  userInfo: {
    userId: string,
  }
}

export const appDefaultValue: IApp = {
  props: null,
  action: null,
  state: {
    status: { loading: false },
    openSideMenu: false,
    openSubMenu: false,
    openSearch: false,
    testValue: '',
    targetCategory: 'all',
    layout: {
      isHeader: true,
      isFooter: true,
    },
    userInfo: {
      userId: '',
    },
  },
};

const initializer = (props) => {
  console.log('initializer: ', props);

  const state: IAppState = {
    status: { loading: false },
    openSideMenu: false,
    openSubMenu: false,
    openSearch: false,
    testValue: '',
    targetCategory: 'all',
    layout: {
      isHeader: true,
      isFooter: true,
    },
    userInfo: {
      userId: props.userInfo.userId ?? '',
    }
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
  const setToggleSearch = () => {
    update((draft) => {
      draft.openSearch = !draft.openSearch;
    })
  }
  const setIsHeader = (status: boolean) =>
    update((draft) => {
      draft.layout.isHeader = status;
    });

  const setIsFooter = (status: boolean) =>
    update((draft) => {
      draft.layout.isFooter = status;
    });

  const setCategory = (e: React.MouseEvent<HTMLLIElement>) => {
    update((draft) => {
      const { name } = (e.target as HTMLLIElement).dataset;
      console.log('name: ', name);
      draft.targetCategory = name;
    });
  }

  const InitData = (stateName: string, initValue?: any) =>
    update(draft => {
      const keyArray = stateName.split('.');
      let valueDefault = '';
      if (initValue) valueDefault = initValue;

      if (keyArray.length === 1) draft[keyArray[0]] = valueDefault;
      else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = valueDefault;
    });


  return {
    setIsNav,
    setToggleSideMenu,
    setCategory,
    setToggleSubMenu,
    setToggleSearch,
    InitData,
    setIsHeader,
    setIsFooter,
  };
};

const useApp = (props) => {
  console.log('useApp props: ', props);
  const [state, setAppState] = useState(initializer(props));
  console.log('useApp state: ', state);
  const update = (recipe: (draft: IAppState) => void) =>
    setAppState((prev) => produce(prev, recipe));
  const router = useRouter();
  const action = generateAction(update);
  const app = { props, state, action };

  useEffect(() => {
    app.action.InitData('userInfo.userId', props.userInfo.userId);
  }, [props])

  useEffect(() => {
    app.action.InitData('openSubMenu', false);
  }, [app.state.targetCategory])

  useDidMountEffect(() => {
    app.action.InitData('targetCategory', 'all');
  }, [router.asPath])



  return app;
};

export default useApp;