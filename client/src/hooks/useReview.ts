import { useState, useEffect } from "react";
import produce from "immer";
import { IProduct } from 'interfaces/IProduct';
export interface IUseReview {
  props: null;
  action: TReviewAction;
  state: IReviewState;
}

export type TReviewAction = typeof generateAction extends (...args: any[]) => infer R ? R : never;

export interface IReviewState {
  product: IProduct[],
  form: {
    content: '',
    imageUrl: { url: string }[],
  }
}

export const reviewDefaultValue: IUseReview = {
  props: null,
  action: null,
  state: {
    product: [],
    form: {
      content: '',
      imageUrl: [],
    }
  },
};

const initializer = (props: any) => {
  const state: IReviewState = {
    product: [],
    form: {
      content: '',
      imageUrl: [],
    }
  };

  return state;
};

const generateAction = (update: (recipe: (draft: IReviewState) => void) => void) => {
  const setProduct = (item: IProduct[]) =>
    update(draft => {
      draft.product.push(...item);
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
    setProduct
  };
};

const useReview = (props: any) => {
  const [state, setAppState] = useState(() => initializer(props));
  console.log('useReview state: ', state);

  const update = (recipe: (draft: IReviewState) => void) =>
    setAppState((prev) => produce(prev, recipe));

  const action = generateAction(update);
  const app = { props, state, action };

  return app;
};

export default useReview;