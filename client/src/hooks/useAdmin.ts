import { useState } from "react";
import produce from "immer";
import useDidMountEffect from 'hooks/useDidMountEffect';
import { NextRouter, useRouter } from 'next/router';
import { customCookie } from 'utils';

export type TAppAction = typeof generateAction extends (...args: any[]) => infer R ? R : never;

export interface IUseAdmin {
  props: null;
  action: TAppAction;
  state: IAdminState;
}

export interface IAdminState {
  status: { loading: boolean };
  sideOpen: boolean;
  isWhite: boolean,
  user:{
    id: string,
    password: string,
  },
  filter: {
    product_type: string;
    category: string,
  }
  create: {
    new_product: boolean,
    best_product: boolean,
    product_type: string;
    category: string,
    name: string,
    consumer_price: string,
    product_price: string,
    summary_description: string,
    description: string,
    product_colors: { hex_value: string, color_name: string }[],
    imageUrl: { url: string }[],
  },


}

export const adminDefaultValue: IUseAdmin = {
  props: null,
  action: null,
  state: {
    status: { loading: false },
    sideOpen: false,
    isWhite: true,
    user:{
      id:'',
      password:'',
    },
    filter: {
      product_type: 'necklace',
      category: 'all',
    },
    create: {
      new_product: false,
      best_product: false,
      product_type: '',
      category: '',
      name: '',
      consumer_price: '',
      product_price: '',
      summary_description: '',
      description: '',
      product_colors: [],
      imageUrl: [],
    }
  },
};

const initializer = (props: any) => {
  const state: IAdminState = {
    status: { loading: false },
    sideOpen: false,
    isWhite: true,
    user:{
      id:'',
      password:'',
    },
    filter: {
      product_type: 'necklace',
      category: 'all',
    },
    create: {
      new_product: false,
      best_product: false,
      product_type: '',
      category: '',
      name: '',
      consumer_price: '',
      product_price: '',
      summary_description: '',
      description: '',
      product_colors: [],
      imageUrl: [],
    }
  };

  return state;
};

const generateAction = (update: (recipe: (draft: IAdminState) => void) => void) => {

  const sideOpen = () =>
    update((draft) => {
      draft.sideOpen = !draft.sideOpen;
    });

  const setIsNav = (status: boolean) =>
    update((draft) => {
      draft.status.loading = status;
    });

  const setRemoveColor = (colors: any) =>
    update((draft) => {
      draft.create.product_colors = colors;
    });

  const setFormData = (e: any) =>
    update(draft => {
      const { name, type, checked, value, maxLength, selectedIndex } = e.target;
      let replaceValue = value.replace(/,/g, '');
      const keyArray = name.split('.');
      let label = e.nativeEvent.target[selectedIndex]?.text;
      if (type === 'checkbox') {
        if (keyArray.length === 1) draft[keyArray[0]] = checked;
        else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = checked;
      } else {
        if (keyArray.length === 1) draft[keyArray[0]] = replaceValue;
        else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = replaceValue;
      }
    });

  const setData = (stateName: string, value: any) =>
    update(draft => {
      const keyArray = stateName.split('.');
      if (keyArray.length === 1) draft[keyArray[0]] = value;
      else if (keyArray.length === 2) draft[keyArray[0]][keyArray[1]] = value;
      else if (keyArray.length === 3) draft[keyArray[0]][keyArray[1]][keyArray[2]] = value;
    });

  const setColorArray = (result: { hex_value: string, color_name: string }) => update(draft => {
    draft.create.product_colors.push(result);
  })

  return {
    setIsNav,
    sideOpen,
    setFormData,
    setColorArray,
    setRemoveColor,
    setData
  };
};

const useAdmin = (props: any) => {
  const [state, setAppState] = useState(() => initializer(props));
  console.log('state useAdmin: ', state);
  const router: NextRouter = useRouter();

  const update = (recipe: (draft: IAdminState) => void) =>
    setAppState((prev) => produce(prev, recipe));


  const action = generateAction(update);

  const app = { props, state, action };

  useDidMountEffect(() => {
    const path = router.asPath.split('/');
    if(path[1] === 'admin'){
      const exist = customCookie.get("access_token_a");
      if(!exist){
        router.push('/admin/login');
      }
    }
  },[router.asPath]);

  useDidMountEffect(() => {
    if(app.state.filter.product_type){
      action.setData('filter.category', 'all');
    }
  }, [app.state.filter.product_type])

  return app;
};

export default useAdmin;