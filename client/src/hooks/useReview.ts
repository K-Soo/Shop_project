import { useState, useEffect } from "react";
import produce from "immer";
import { IProduct } from 'interfaces/IProduct';
import {NextRouter, useRouter} from 'next/router';
export interface IUseReview {
  props: null;
  action: TReviewAction;
  state: IReviewState;
}

export type TReviewAction = typeof generateAction extends (...args: any[]) => infer R ? R : never;

export interface IReviewState {
  product: IProduct[],
  form: {
    content: string,
    imageUrl: string | Blob,
    rate: string,
  }
}

export const reviewDefaultValue: IUseReview = {
  props: null,
  action: null,
  state: {
    product: [],
    form: {
      content: '',
      imageUrl: null,
      rate: '',
    }
  },
};

const initializer = (props: any) => {
  const state: IReviewState = {
    product: [],
    form: {
      content: '',
      imageUrl: null,
      rate: '',
    }
  };

  return state;
};

const generateAction = (update: (recipe: (draft: IReviewState) => void) => void) => {

  const setInit = () =>
  update(draft => {
    draft.product = reviewDefaultValue.state.product;
  });

  const setProduct = (item: IProduct[]) =>
    update(draft => {
      draft.product = item
    });

  const setFormData = (e: any) =>
    update(draft => {
      const { name, checked, value, } = e.target;
      let replaceValue = value.replace(/,/g, '');
      const keyArray = name.split('.');

      if (keyArray.length === 1) draft[keyArray[0]] = replaceValue;
      else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = replaceValue;
      else if (keyArray.length === 3) draft[keyArray[0]][keyArray[1]][keyArray[2]] = replaceValue;
    });

  const setData = (stateName: string, value: any) =>
    update(draft => {
      const keyArray = stateName.split('.');
      if (keyArray.length === 1) draft[keyArray[0]] = value;
      else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = value;
      else if (keyArray.length === 3) draft[keyArray[0]][keyArray[1]][keyArray[2]] = value;
    });

  return {
    setData,
    setProduct,
    setFormData,
    setInit
  };
};

const useReview = (props: any) => {
  const [state, setAppState] = useState(() => initializer(props));
  const router:NextRouter = useRouter();
      
  const update = (recipe: (draft: IReviewState) => void) =>
  setAppState((prev) => produce(prev, recipe));

  const action = generateAction(update);
  const app = { props, state, action };

  // useEffect(() => {
  //   if((router.pathname === '/product/review') || (router.pathname === "/product/[category]/[id]")){
  //     console.log('초기화 실행---------------------------');
  //     app.action.setInit();
  //   }
  // },[app.action,router]);

  return app;
};

export default useReview;