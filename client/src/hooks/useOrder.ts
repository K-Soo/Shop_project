import { useState, useEffect } from "react";
import produce from "immer";
import { IBasketItem } from 'interfaces/IProduct';
import useDidMountEffect from 'hooks/useDidMountEffect';
import { useRouter } from 'next/router';
import { useAppContext } from 'context/AppProvider';

type TOrderAction = typeof generateAction extends (...args: any[]) => infer R ? R : never;

export interface IApp {
  props: null;
  action: TOrderAction;
  state: IOrderState;
}

export interface IOrderState {
  OrderLocalStorage: IBasketItem[],
  directText: boolean,
  TemporaryArray: IBasketItem[],
  TemporaryEmail1: string,
  TemporaryEmail2: string,
  TemporaryPhone1: string,
  TemporaryPhone2: string,
  TemporaryPhone3: string,
  currentPoint: number,
  isUsePoints: boolean,
  deliveryTap: string,
  orderForm: {
    Products: IBasketItem[],
    pointInfo: {
      estimatedPoint: number,
      totalUsed: string,
    },
    amountInfo: {
      productAmount: number,
      consumerAmount: number,
      discountAmount: number,
      paymentAmount: number,
      deliveryAmount: number,
    },
    userName: string,
    phone: string,
    email: string,
    deliveryMessage: string,
    addr: {
      zoneCode: string,
      addr1: string,
      addr2: string,
    },

  }
}

export const orderDefaultValue: IApp = {
  props: null,
  action: null,
  state: {
    OrderLocalStorage: [],
    directText: false,
    TemporaryArray: [],
    TemporaryEmail1: '',
    TemporaryEmail2: '',
    TemporaryPhone1: '',
    TemporaryPhone2: '',
    TemporaryPhone3: '',
    currentPoint: undefined,
    isUsePoints: false,
    deliveryTap: 'recently',
    orderForm: {
      Products: [],
      pointInfo: {
        estimatedPoint: null,
        totalUsed: '',
      },
      amountInfo: {
        productAmount: null,
        consumerAmount: null,
        discountAmount: null,
        paymentAmount: null,
        deliveryAmount: 2500,
      },
      userName: '',
      phone: '',
      email: '',
      deliveryMessage: '',
      addr: {
        zoneCode: '',
        addr1: '',
        addr2: '',
      },
    }
  },
};

const initializer = (props: any) => {
  const state: IOrderState = {
    OrderLocalStorage: [],
    directText: false,
    TemporaryArray: [],
    TemporaryEmail1: '',
    TemporaryEmail2: '',
    TemporaryPhone1: '',
    TemporaryPhone2: '',
    TemporaryPhone3: '',
    currentPoint: null,
    isUsePoints: false,
    deliveryTap: 'recently',
    orderForm: {
      Products: [],
      pointInfo: {
        estimatedPoint: null,
        totalUsed: '',
      },
      amountInfo: {
        productAmount: null,
        consumerAmount: null,
        discountAmount: null,
        paymentAmount: null,
        deliveryAmount: 2500,
      },
      userName: '',
      phone: '',
      email: '',
      deliveryMessage: '',
      addr: {
        zoneCode: '',
        addr1: '',
        addr2: '',
      },

    }
  };

  return state;
};

const generateAction = (update: (recipe: (draft: IOrderState) => void) => void) => {

  const InitData = (stateName: string, initValue?: any) =>
    update(draft => {
      const keyArray = stateName.split('.');
      let valueDefault = initValue ?? '';

      if (keyArray.length === 1) draft[keyArray[0]] = valueDefault;
      else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = valueDefault;
      else if (keyArray.length === 3) draft[keyArray[0]][keyArray[1]][keyArray[2]] = valueDefault;
    });

  const setFormData = (e: any) =>
    update(draft => {
      const { name, type, checked, value, maxLength, selectedIndex } = e.target;
      let replaceValue = value.replace(/,/g, '');
      const keyArray = name.split('.');
      let label = e.nativeEvent.target[selectedIndex]?.text;

      if (type === 'select-one') {
        if (label === '직접입력') {
          draft.directText = true;
        }
        else {
          draft.directText = false;
        }
      }
      if (type === 'checkbox') {
        if (keyArray.length === 1) draft[keyArray[0]] = checked;
        else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = checked;
      } else {
        if (keyArray.length === 1) draft[keyArray[0]] = replaceValue;
        else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = replaceValue;
        else if (keyArray.length === 3) draft[keyArray[0]][keyArray[1]][keyArray[2]] = replaceValue;
      }
    });

  const setOrderLocalStorage = (data: IBasketItem) =>
    update((draft) => {
      draft.OrderLocalStorage.push(data);
    });

  const setProducts = (data: IBasketItem) =>
    update((draft) => {
      // 선택상품 주문
      draft.orderForm.Products.push(data);
    });

  const setEntireProducts = (items: IBasketItem[]) =>
    update((draft) => {
      // 전체상품 주문
      draft.orderForm.Products = items
    });

  const setRemoveCheckedItem = (value: string, user: boolean) =>
    update((draft) => {
      // 선택상품 삭제
      if (user) {
        draft.orderForm.Products = draft.orderForm.Products.filter(({ _id }) => _id !== value);
      } else {
        draft.orderForm.Products = draft.orderForm.Products.filter(({ date }) => date !== value);
      }
    });

  const setInitOrderForm = () =>
    update((draft) => {
      // 초기화
      draft.TemporaryArray = orderDefaultValue.state.TemporaryArray;
      draft.TemporaryEmail1 = orderDefaultValue.state.TemporaryEmail1;
      draft.TemporaryEmail2 = orderDefaultValue.state.TemporaryEmail2;
      draft.orderForm = orderDefaultValue.state.orderForm;
      draft.currentPoint = orderDefaultValue.state.currentPoint;
      draft.directText = orderDefaultValue.state.directText;
    });

  const setInitDelivery = () =>
    update((draft) => {
      // 주소 초기화 
      draft.TemporaryEmail1 = orderDefaultValue.state.TemporaryEmail1;
      draft.TemporaryEmail2 = orderDefaultValue.state.TemporaryEmail2;
      draft.TemporaryPhone1 = orderDefaultValue.state.TemporaryPhone1;
      draft.TemporaryPhone2 = orderDefaultValue.state.TemporaryPhone2;
      draft.TemporaryPhone3 = orderDefaultValue.state.TemporaryPhone3;
      draft.orderForm.userName = orderDefaultValue.state.orderForm.userName;
      draft.orderForm.addr = orderDefaultValue.state.orderForm.addr
    });


  const setCheckBox = (e: React.ChangeEvent<HTMLInputElement>, userId: string) =>
    update((draft) => {
      const { checked, value } = e.target;
      if (userId) {
        if (checked) draft.TemporaryArray.push(draft.orderForm.Products.find(d => d._id === value));
        else draft.TemporaryArray = draft.TemporaryArray.filter(d => d.date !== value);
      } else {
        if (checked) draft.TemporaryArray.push(draft.orderForm.Products.find(d => d.date === value));
        else draft.TemporaryArray = draft.TemporaryArray.filter(d => d.date !== value);
      }
    });

  const setRemoveOrderItems = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, userId: string) =>
    update((draft) => {
      if (!draft.TemporaryArray.length) return alert('상품을 선택해주세요.')

      if (userId) {
        const result = draft.orderForm.Products.filter(({ _id: orderFormId }) => !draft.TemporaryArray.some(({ _id: TemporaryId }) => orderFormId == TemporaryId));
        draft.orderForm.Products = result;
        draft.TemporaryArray = [];
      } else {
        const result = draft.orderForm.Products.filter(({ date: FormDate }) => !draft.TemporaryArray.some(({ date: TemporaryDate }) => FormDate == TemporaryDate));
        draft.orderForm.Products = result;
        draft.TemporaryArray = [];
      }
    });

  const setAmountInfo = () =>
    update((draft) => {
      // 결제예정금액 계산
      const calcProduct = draft.orderForm.Products.reduce((acc, cur) => acc + (+cur.totalProductPrice), 0);

      const calcConsumer = (draft.orderForm.Products.reduce((acc, cur) => acc + (+cur.totalConsumerPrice), 0));
      draft.orderForm.amountInfo.productAmount = calcProduct;
      draft.orderForm.amountInfo.consumerAmount = calcConsumer;
      draft.orderForm.amountInfo.discountAmount = calcProduct - calcConsumer;
      draft.orderForm.amountInfo.paymentAmount = calcConsumer + draft.orderForm.amountInfo.deliveryAmount;
    });


  const setOnBlurPoint = () =>
    update((draft) => {
      // 적립금사용
      if (!draft.isUsePoints) {
        draft.orderForm.amountInfo.discountAmount = draft.orderForm.amountInfo.discountAmount + Number(draft.orderForm.pointInfo.totalUsed);
        draft.orderForm.amountInfo.paymentAmount = draft.orderForm.amountInfo.paymentAmount - Number(draft.orderForm.pointInfo.totalUsed);
        draft.isUsePoints = true;
      }
    });

  const setFocusPoint = () =>
    update((draft) => {
      // 적립금사용 초기화
      if (draft.isUsePoints) {
        draft.orderForm.amountInfo.discountAmount = draft.orderForm.amountInfo.productAmount - draft.orderForm.amountInfo.consumerAmount;
        draft.orderForm.amountInfo.paymentAmount = draft.orderForm.amountInfo.consumerAmount + draft.orderForm.amountInfo.deliveryAmount;
        draft.orderForm.pointInfo.totalUsed = '';
        draft.isUsePoints = false;
      }
    });

  const setTotalPointUsed = () =>
    update((draft) => {
      // 적립금 전체사용 버튼
      if(!draft.currentPoint) return alert('사용가능한 적립금이 없습니다.')
      if(draft.orderForm.amountInfo.paymentAmount < draft.currentPoint){
        draft.orderForm.pointInfo.totalUsed = String(draft.orderForm.amountInfo.paymentAmount - 10000);
        draft.orderForm.amountInfo.discountAmount = draft.orderForm.amountInfo.discountAmount + Number(draft.orderForm.pointInfo.totalUsed);
        draft.orderForm.amountInfo.paymentAmount = draft.orderForm.amountInfo.paymentAmount - Number(draft.orderForm.pointInfo.totalUsed);

      }else{
        draft.orderForm.pointInfo.totalUsed = String(draft.currentPoint);
        draft.orderForm.amountInfo.discountAmount = draft.orderForm.amountInfo.discountAmount + Number(draft.orderForm.pointInfo.totalUsed);
        draft.orderForm.amountInfo.paymentAmount = draft.orderForm.amountInfo.paymentAmount - Number(draft.orderForm.pointInfo.totalUsed);
      }
      draft.isUsePoints = true;
    });

  return {
    setProducts,
    setFormData,
    setInitOrderForm,
    setRemoveCheckedItem,
    setEntireProducts,
    setRemoveOrderItems,
    InitData,
    setOrderLocalStorage,
    setCheckBox,
    setAmountInfo,
    setTotalPointUsed,
    setOnBlurPoint,
    setFocusPoint,
    setInitDelivery
  };
};

const useOrder = (props: any) => {
  const [state, setAppState] = useState(initializer(props));
  console.log('useOrder isUsePoints: ', state);
  const App = useAppContext();
  const router = useRouter();
  const update = (recipe: (draft: IOrderState) => void) =>
    setAppState((prev) => produce(prev, recipe));

  const action = generateAction(update);
  const app = { props, state, action };

  useDidMountEffect(() => {
    localStorage.setItem('order', JSON.stringify(app.state.orderForm.Products));
  }, [app.state.orderForm.Products]);

  useEffect(() => {
    if (router.asPath === '/order/orderform') {
      const result = JSON.parse(localStorage.getItem("order"));
      action.setEntireProducts(result);
    }
  }, []);


  // useEffect(() => {
  //   // localStorageItem가 변하면  Products에 저장
  //   const result = JSON.parse(localStorage.getItem("order"));
  //   if(result) action.setBasketList(result);
  // }, [app.state.OrderLocalStorage]);
  
  
  useEffect(() => {
    // 유저정보값
    const result = props?.pageProps?.userDetail;
    console.log('result: ', result);
    if (result) {
      if (app.state.deliveryTap === 'recently') {
        app.action.InitData('orderForm.addr.zoneCode', result.zonecode);
        app.action.InitData('orderForm.addr.addr1', result.addr1);
        app.action.InitData('orderForm.addr.addr2', result.addr2);
        app.action.InitData('orderForm.userName', result.userName);
        app.action.InitData('currentPoint', result.point);
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
          app.action.InitData('orderForm.phone', result.phone);
        }
      }
    }
  }, [props?.pageProps?.userDetail, router.asPath,app.state.deliveryTap]);

  useEffect(() => {
    if (app.state.orderForm.Products.length) {
      const calcProduct = app.state.orderForm.Products.reduce((acc, cur) => acc + (+cur.totalProductPrice), 0);
      const calcConsumer = (app.state.orderForm.Products.reduce((acc, cur) => acc + (+cur.totalConsumerPrice), 0));

      app.action.InitData('orderForm.amountInfo.productAmount', calcProduct);
      app.action.InitData('orderForm.amountInfo.consumerAmount', calcConsumer);
      // app.action.InitData('orderForm.amountInfo.discountAmount', (calcProduct - calcConsumer) + Number(app.state.orderForm.pointInfo.totalUsed));
      app.action.InitData('orderForm.amountInfo.discountAmount', (calcProduct - calcConsumer) );
      app.action.InitData('orderForm.amountInfo.paymentAmount', calcConsumer + app.state.orderForm.amountInfo.deliveryAmount);
    }
  }, [app.state.orderForm.Products, app.state.orderForm.amountInfo.deliveryAmount]);

  useDidMountEffect(() => {
    if(app.state.deliveryTap === 'direct'){
      app.action.setInitDelivery();
    }
  }, [app.state.deliveryTap]);

  useDidMountEffect(() => {
    // 결제예정금액보다 적립금사용금액이 더큰경우
    if(Number(app.state.orderForm.pointInfo.totalUsed) > app.state.orderForm.amountInfo.paymentAmount){
      app.action.InitData('orderForm.pointInfo.totalUsed');
      alert('결제예정금액보다 사용금액이 클수없습니다.');
    }
  }, [app.state.orderForm.pointInfo.totalUsed]);

  useDidMountEffect(() => {
    if(10000 > Number(app.state.orderForm.amountInfo.paymentAmount)){
      app.action.InitData('orderForm.pointInfo.totalUsed')
      app.action.InitData('orderForm.amountInfo.discountAmount',app.state.orderForm.amountInfo.productAmount - app.state.orderForm.amountInfo.consumerAmount)  
      app.action.InitData('orderForm.amountInfo.paymentAmount',app.state.orderForm.amountInfo.consumerAmount + app.state.orderForm.amountInfo.deliveryAmount);
      app.action.InitData('orderForm.pointInfo.totalUsed');
      app.action.InitData('isUsePoints',false);

      alert('최소 결제금액은 10,000원 입니다.');
    }
  }, [app.state.orderForm.amountInfo.paymentAmount]);

  useDidMountEffect(() => {
    // 사용가능 적립금보다 큰금액을 입력한경우
    if(Number(app.state.orderForm.pointInfo.totalUsed) > app.state.currentPoint){
      app.action.InitData('orderForm.pointInfo.totalUsed');
      alert('사용가능금액보다 큽니다.');
    }
  }, [app.state.orderForm.pointInfo.totalUsed]);


  useDidMountEffect(() => {
    // 이메일 concat
    const result = app.state.TemporaryEmail1.concat('@', app.state.TemporaryEmail2);
    app.action.InitData('orderForm.email', result);
  }, [app.state.TemporaryEmail1, app.state.TemporaryEmail2]);

  useDidMountEffect(() => {
    // 적립예정 금액
    if (App.state.userInfo.userId) {
      const result = app.state.orderForm.Products.reduce((acc, cur) => acc + (cur.point * cur.qty), 0);
      app.action.InitData('orderForm.pointInfo.estimatedPoint', result);
    }
  }, [app.state.orderForm.Products]);

  useDidMountEffect(() => {
    const result = app.state.TemporaryPhone1.concat('-', app.state.TemporaryPhone2, '-', app.state.TemporaryPhone3);
    action.InitData('orderForm.phone', result);
  }, [app.state.TemporaryPhone1, app.state.TemporaryPhone2, app.state.TemporaryPhone3]);

  return app;
};

export default useOrder;