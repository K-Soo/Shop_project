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
  pagination:{
    currentPage:string,
    arrNumbers:[],
  },
  status: { guest: false },
  openSideMenu: boolean;
  openSubMenu: boolean,
  openSearch: boolean,
  openDaumPost: boolean,
  openMyShop: boolean,
  testValue: string,
  targetCategory: string;
  keyword: string;
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
    guestLocalStorageItem: IBasketItem[],
    basketList: IBasketItem[],
    nonMemberBasket: IBasketItem[],
  }
  currentOrderItem: IBasketItem[],
}

export const appDefaultValue: IApp = {
  props: null,
  action: null,
  state: {
    pagination:{
      currentPage: '1',
      arrNumbers:[],
    },
    status: { guest: false },
    openSideMenu: false,
    openSubMenu: false,
    openSearch: false,
    openDaumPost: false,
    openMyShop: false,
    testValue: '',
    targetCategory: 'all',
    keyword: '',
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
      guestLocalStorageItem: [],
      basketList: [],
      nonMemberBasket: [],
    },
    currentOrderItem: [],
  },
};

const initializer = (props:any) => {
  const state: IAppState = {
    pagination:{
      currentPage: '1',
      arrNumbers:[],
    },
    status: { guest: false },
    openSideMenu: false,
    openSubMenu: false,
    openSearch: false,
    openDaumPost: false,
    openMyShop: false,
    testValue: '',
    targetCategory: 'all',
    keyword: '',
    layout: {
      isHeader: true,
      isFooter: true,
    },
    userInfo: {
      userId: props.userInfo.userId,
      idx: props.userInfo.idx,
    },
    basket: {
      localStorageItem: null,
      guestLocalStorageItem: [],
      basketList: [],
      nonMemberBasket: [],
    },
    currentOrderItem: [],
  };
  return state;
};

const generateAction = (update: (recipe: (draft: IAppState) => void) => void) => {
  const setGlobalToggle = (e:any) => {
    update((draft) => {
      const dataSetName = e.target?.dataset?.name;
      const tagName = e.target?.name;
      if (dataSetName) {
        const keyArray = dataSetName.split('.');
        if (keyArray.length === 1) draft[keyArray[0]] = !draft[dataSetName];
        else if (keyArray.length === 2) draft[keyArray[1]] = !draft[dataSetName];
      } else if (tagName) {
        const keyArray = tagName.split('.');
        if (keyArray.length === 1) draft[keyArray[0]] = !draft[tagName];
        else if (keyArray.length === 2) draft[keyArray[1]] = !draft[tagName];
      }
    })
  }
  const setFormData = (e: any) =>
    update(draft => {
      const { name, type, checked, value, maxLength, selectedIndex } = e.target;
      let replaceValue = value.replace(/,/g, '');
      const keyArray = name.split('.');

      if (keyArray.length === 1) draft[keyArray[0]] = replaceValue;
      else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = replaceValue;
      else if (keyArray.length === 3) draft[keyArray[0]][keyArray[1]][keyArray[2]] = replaceValue;
    });
    
  const setToggleSideMenu = () => {
    update((draft) => {
      draft.openSideMenu = !draft.openSideMenu;
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
      draft.targetCategory = name;
    });
  }

  const InitData = (stateName: string, initValue?: any) =>
  update(draft => {
    const keyArray = stateName.split('.');
      let valueDefault = initValue || '';

      if (keyArray.length === 1) draft[keyArray[0]] = valueDefault;
      else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = valueDefault;
    });

  const setLocalItems = (data: IBasketItem[]) =>
    update((draft) => {
      draft.basket.localStorageItem = data;
    });

  const setGuestLocalItem = (data: IBasketItem[]) =>
    update((draft) => {
      draft.basket.guestLocalStorageItem.push(...data);
    });

  // 회원 장바구니
  const setBasketList = (data: IBasketItem[]) =>
    update((draft) => {
      draft.basket.basketList = data;
    });

  // 비회원 장바구니
  const setNonMemberBasket = (data: IBasketItem[]) =>
    update((draft) => {
      draft.basket.nonMemberBasket = data;
    });

  const setNonMemberBasketPush = (data: IBasketItem[]) =>
    update((draft) => {
      draft.basket.nonMemberBasket.push(...data);
    });


  // const setCurrentOrderItem = (data: IBasketItem) =>
  //   update((draft) => {
  //     draft.currentOrderItem.push(data);
  //   });

  const setChangeQty = (e: React.ChangeEvent<HTMLInputElement>) =>
    update((draft) => {
      const { name, value } = e.target as HTMLInputElement;
      let cnt = +value
      console.log('cnt: ', cnt);
      if (!cnt) return alert('최소 주문수량은 1개 입니다.');
      if (cnt > 10) return alert('최대 주문수량은 10개 입니다.');
      if (draft.userInfo.userId) {
        const result = draft.basket.basketList.find(d => d._id === name);
        result.qty = cnt;

      } else {
        const result = draft.basket.nonMemberBasket.find(d => d.date === name);
        result.qty = cnt;
      }

    });

  return {
    setToggleSideMenu,
    setCategory,
    InitData,
    setIsHeader,
    setIsFooter,
    setLocalItems,
    setBasketList,
    // setCurrentOrderItem,
    setChangeQty,
    setNonMemberBasketPush,
    setNonMemberBasket,
    setGuestLocalItem,
    setGlobalToggle,
    setFormData
  };
};

const useApp = (props:any) => {
  const [state, setAppState] = useState(initializer(props));
  console.log('useApp state: ', state);
  const update = (recipe: (draft: IAppState) => void) =>
    setAppState((prev) => produce(prev, recipe));
  const router = useRouter();
  const action = generateAction(update);
  const app = { props, state, action };

  useEffect(() => {
    setAppState(() => initializer(props));
  }, [props]);

  useEffect(() => {
    // app.action.InitData('userInfo.userId', props.userInfo.userId);
    // app.action.InitData('userInfo.idx', props.userInfo.idx);
  }, [props])

  useEffect(() => {
    app.action.InitData('openSubMenu', false);
  }, [app.state.targetCategory])

  useDidMountEffect(() => {
    app.action.InitData('targetCategory', 'all');
  }, [router.asPath])


  // ------------------------------------- //
  useEffect(() => {
    // 회원 장바구니
    if (app.state.basket.localStorageItem) {
      localStorage.setItem('basket', JSON.stringify(app.state.basket.localStorageItem));
    }
  }, [app.state.basket.localStorageItem]);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("basket"));
    if (result) action.setBasketList(result);
  }, [app.state.basket.localStorageItem]);

  useEffect(() => {
    const member = JSON.parse(localStorage.getItem("basket"));
    if (member) action.setBasketList(member);
  }, [props]);

  // -----------------------------------------//

  useEffect(() => {
    // 비회원 장바구니
    if (app.state.basket.guestLocalStorageItem.length) {
      localStorage.setItem('unknown-basket', JSON.stringify(app.state.basket.guestLocalStorageItem));
    }
  }, [app.state.basket.guestLocalStorageItem]);

  useEffect(() => {
    if (app.state.basket.nonMemberBasket.length) {
      localStorage.setItem('unknown-basket', JSON.stringify(app.state.basket.nonMemberBasket));
    }
  }, [app.state.basket.nonMemberBasket]);

  // useEffect(() => {
  //   // 비회원
  //   const result = JSON.parse(localStorage.getItem("unknown-basket"));
  //   if (result) action.setNonMemberBasket(result);
  // }, []);

  useDidMountEffect(() => {
    // 비회원
    if (router.asPath === '/order/basket') {
      localStorage.setItem('unknown-basket', JSON.stringify(app.state.basket.nonMemberBasket));
    }
  }, [app.state.basket.nonMemberBasket]);

  useEffect(() => {
    const nonMember = JSON.parse(localStorage.getItem("unknown-basket"));
    if (nonMember) action.setNonMemberBasket(nonMember);
  }, [props]);

  useEffect(() => {
    const result = localStorage.getItem("guest");
    if (result) app.action.InitData('status.guest', true);
  }, [router.asPath]);

  useEffect(() => {
    const { keyword } = router.query;
    app.action.InitData('keyword', keyword);
  }, []);

  return app;
};

export default useApp;