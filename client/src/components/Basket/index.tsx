import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter, NextRouter } from 'next/router';
import FinalAmount from 'components/Forms/FinalAmount';
import FormFieldset from 'components/Forms/FormFieldset';
import DeliveryInfo from 'components/Forms/DeliveryInfo';
import OrderList from 'components/Forms/OrderList';
import UserInfo from 'components/Forms/UserInfo';
import Guide from 'components/Forms/Guide';
import PageTitle from 'components/Common/PageTitle';
import { IBasketItem } from 'interfaces/IProduct';
import { useAppContext } from 'context/AppProvider';
import { useOrderContext } from 'context/OrderProvider';
import Button from 'components/style/Button';
import { Delete, Put } from 'api';

const S = {
  Basket: styled.section`
  `,
}

export default function Basket() {
  const [basketProduct, setBasketProduct] = useState<number | null>(null);
  const [basketConsumer, setBasketConsumer] = useState<number | null>(null);
  const { state, action } = useAppContext();
  const { userId } = state.userInfo;
  const Order = useOrderContext();
  const router: NextRouter = useRouter();

  const handleChangeQty = useCallback(async (e) => {
    const { name } = e.target as HTMLButtonElement;
    const target = state.basket.basketList.find(d => d._id === name);
    console.log('target: ', target.qty);
    if (state.userInfo.userId) {
      try {
        const res = await Put.updateUserBasketQty(state.userInfo.idx, name, { qty: target.qty });
        action.setLocalItems(res.items);
        alert('변경되었습니다.');
      } catch (error) {
        console.log('error: ', error);
      }
    } else {

    }
  }, [state.basket.basketList, state.userInfo.idx, state.userInfo.userId])

  const initBasket = useCallback(async() => {
    if (state.userInfo.idx) {
      // action.InitData('basket.basketList', []);
      const name = 'all'
      try {
        const res = await Delete.deleteBasket(state.userInfo.idx, name);
        action.setLocalItems(res.items);
      } catch (error) {
        console.error('error: ', error);
      }
    } else {
      action.InitData('basket.nonMemberBasket', []);
    }
  }, [userId])

  const handleRemoveItem = useCallback(async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (confirm('선택하신 상품을 삭제하시겠습니까?')) {
      const { name } = e.target as HTMLButtonElement;
      if (userId) {
        try {
          const res = await Delete.deleteBasket(state.userInfo.idx, name);
          action.setLocalItems(res.items);
        } catch (error) {
          console.error('remove-error: ', error);
        }
      }
      else {
        const exist = state.basket.nonMemberBasket.filter((d) => d.date !== name);
        action.setNonMemberBasket(exist);
      }
    }
  }, [state.userInfo.idx, userId, state.basket.nonMemberBasket]);

  const handleAddInterestProduct = useCallback(async (e) => {
    const { name } = e.target as HTMLButtonElement;
    try {
      if (state.userInfo.userId) {
        const res = await Put.updateInterestProduct({ userId: state.userInfo.userId, name });
        if(res.success) return alert('관심상품으로 등록되었습니다.');
        if(res.duplicate) return alert('이미 등록되었습니다.');
      } else {
        alert('로그인후 이용가능합니다.');
      }
    } catch (error) {
      console.log('error: ', error);
    }
  },[state.userInfo.userId])


  const handleCheckbox = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target as HTMLInputElement;
    if (userId) {
      if (checked) {
        if (state.basket.basketList) {
          const result = state.basket.basketList.find(d => d._id === value);
          Order.action.setProducts(result);
          // Order.action.setOrderLocalStorage(result);
        }
      } else {
        Order.action.setRemoveCheckedItem(value, true);
      }
    } else {
      if (checked) {
        const result = state.basket.nonMemberBasket.find(d => d.date === value);
        Order.action.setProducts(result);
        // Order.action.setOrderLocalStorage(result);
      } else {
        Order.action.setRemoveCheckedItem(value, false);
      }
    }

  }, [state.basket.basketList])

  const handleSelectedProduct = useCallback(() => {
    // 선택상품 주문
    if (!Order.state.orderForm.Products.length) return alert('상품선택후 다시 시도해주세요.')
    router.push('/order/orderform');
  }, [Order.state.orderForm.Products])

  const handleEntireProducts = () => {
    // 전체상품 주문
    if (userId) {
      if (!state.basket.basketList.length) return alert('장바구니에 상품이없습니다.');
      Order.action.setEntireProducts(state.basket.basketList);
      router.push('/order/orderform');
    } else {
      if (!state.basket.nonMemberBasket.length) return alert('장바구니에 상품이없습니다.');
      Order.action.setEntireProducts(state.basket.nonMemberBasket);
      router.push('/order/orderform');
    }
  }

  useEffect(() => {
    if (userId) {
      if (state.basket.basketList.length) {
        const CalcProduct = state.basket.basketList.reduce((acc, cur) => acc + (+cur.totalProductPrice), 0);
        setBasketProduct(CalcProduct)
        const CalcPayment = (state.basket.basketList.reduce((acc, cur) => acc + (+cur.totalConsumerPrice), 0));
        setBasketConsumer(CalcPayment);
      }
    } else {
      const CalcProduct = state.basket.nonMemberBasket.reduce((acc, cur) => acc + (+cur.totalProductPrice), 0);
      setBasketProduct(CalcProduct)
      const CalcPayment = (state.basket.nonMemberBasket.reduce((acc, cur) => acc + (+cur.totalConsumerPrice), 0));
      setBasketConsumer(CalcPayment);
    }
  }, [state.basket.basketList,state.basket.nonMemberBasket,userId])

  return (
    <S.Basket>
      <PageTitle TitleText='장바구니' />
      {userId ? (
        <>
          <FormFieldset title='장바구니 목록'>
            <OrderList
              handleRemoveItem={handleRemoveItem}
              handleCheckbox={handleCheckbox}
              handleChangeQty={handleChangeQty}
              handleAddInterestProduct={handleAddInterestProduct}
              item={state.basket.basketList}
            />
          </FormFieldset>

          {state.basket.basketList.length > 0 && (
            <FormFieldset title='결제예정금액'>
              <FinalAmount
                handleSelectedProduct={handleSelectedProduct}
                handleEntireProducts={handleEntireProducts}
                initBasket={initBasket}
                productAmount={basketProduct}
                discountAmount={basketProduct - basketConsumer}
                deliveryAmount={2500}
                consumerAmount={basketConsumer}
                paymentAmount={2500 + basketConsumer}
              />
            </FormFieldset>
          )}
        </>
      ) : (
        <>
          <FormFieldset title='장바구니 목록'>
            <OrderList
              handleRemoveItem={handleRemoveItem}
              handleCheckbox={handleCheckbox}
              item={state.basket.nonMemberBasket}
            />
          </FormFieldset>

          {state.basket.nonMemberBasket.length > 0 && (
            <FormFieldset title='결제예정금액'>
              <FinalAmount
                handleSelectedProduct={handleSelectedProduct}
                handleEntireProducts={handleEntireProducts}
                initBasket={initBasket}
                productAmount={basketProduct}
                discountAmount={basketProduct - basketConsumer}
                deliveryAmount={2500}
                consumerAmount={basketProduct - basketConsumer}
                paymentAmount={2500 + basketConsumer}
              />
            </FormFieldset>
          )}
        </>
      )}
      <FormFieldset title='이용 안내'>
        <Guide />
      </FormFieldset>
    </S.Basket>
  );
}
