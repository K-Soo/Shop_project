import { useState, useEffect } from "react";
import produce from "immer";
import { useRouter } from 'next/router';
import useDidMountEffect from 'hooks/useDidMountEffect';
import NextApp, { AppProps, AppContext as NextAppContext } from "next/app";
import { IBasketItem } from 'interfaces/IProduct';

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
  openDaumPost: boolean,
  testValue: string,
  targetCategory: string;
  layout: {
    isHeader: boolean,
    isFooter: boolean,
  },
  userInfo: {
    userId: string,
    idx: string,
  }
  basket: {
    localStorageItem: IBasketItem[],
    basketList: IBasketItem[],
  }
  currentOrderItem: IBasketItem[],
}

export const appDefaultValue: IApp = {
  props: null,
  action: null,
  state: {
    status: { loading: false },
    openSideMenu: false,
    openSubMenu: false,
    openSearch: false,
    openDaumPost: false,
    testValue: '',
    targetCategory: 'all',
    layout: {
      isHeader: true,
      isFooter: true,
    },
    userInfo: {
      userId: '',
      idx: '',
    },
    basket: {
      localStorageItem: null,
      basketList: [],
    },
    currentOrderItem: [],
  },
};

const initializer = (props) => {
  const state: IAppState = {
    status: { loading: false },
    openSideMenu: false,
    openSubMenu: false,
    openSearch: false,
    openDaumPost: false,
    testValue: '',
    targetCategory: 'all',
    layout: {
      isHeader: true,
      isFooter: true,
    },
    userInfo: {
      userId: props.userInfo.userId,
      idx: '',
    },
    basket: {
      localStorageItem: null,
      basketList: [],
    },
    currentOrderItem: [],
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

  const setOpenDaumPost = () =>
    update((draft) => {
      draft.openDaumPost = !draft.openDaumPost;;
  });

  const setIsFooter = (status: boolean) =>
    update((draft) => {
      draft.layout.isFooter = status;
    });

  const setCategory = (e: React.MouseEvent<HTMLLIElement>) => {
    update((draft) => {
      const { name } = (e.target as HTMLLIElement).dataset;
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

  const setLocalItems = (data: IBasketItem[]) =>
    update((draft) => {
      draft.basket.localStorageItem = data;
    });

  const setBasketList = (data: IBasketItem[]) =>
    update((draft) => {
      draft.basket.basketList = data;
    });

  // const setCurrentOrderItem = (data: IBasketItem) =>
  //   update((draft) => {
  //     draft.currentOrderItem.push(data);
  //   });

  const setChangeQty = (e: React.ChangeEvent<HTMLInputElement>) =>
    update((draft) => {
      const { name, value } = e.target as HTMLInputElement;
      const cnt = +value
      console.log('cnt: ', cnt);
      if (!cnt) return alert('최소 주문수량은 1개 입니다.');
      if (cnt > 10) return alert('최대 주문수량은 10개 입니다.');
      draft.basket.basketList.find(d => d._id === name).qty = cnt;
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
    setLocalItems,
    setBasketList,
    // setCurrentOrderItem,
    setChangeQty,
    setOpenDaumPost
  };
};

const useApp = (props) => {
  const [state, setAppState] = useState(initializer(props));
  console.log('useApp state: ', state);
  const update = (recipe: (draft: IAppState) => void) =>
    setAppState((prev) => produce(prev, recipe));
  const router = useRouter();
  const action = generateAction(update);
  const app = { props, state, action };

  // useEffect(() => {
  //   setAppState(() => initializer(props));
  // },[props]);

  useEffect(() => {
    if (app.state.basket.localStorageItem) {
      localStorage.setItem('basket', JSON.stringify(app.state.basket.localStorageItem));
    }
  }, [app.state.basket.localStorageItem])

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("basket"));
    action.setBasketList(result);
  }, [app.state.basket.localStorageItem]);

  useEffect(() => {
    app.action.InitData('userInfo.userId', props.userInfo.userId);
    app.action.InitData('userInfo.idx', props.userInfo.idx);
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