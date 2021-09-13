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
import { Delete } from 'api';

const S = {
  Basket: styled.div`
  `,
}

export default function Basket() {
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const [paymentPrice, setPaymentPrice] = useState<number | null>(null);
  const { state, action } = useAppContext();
  const { userId } = state.userInfo;
  const Order = useOrderContext();
  const router: NextRouter = useRouter();

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

  const handleOrderToOneProduct = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const { name } = e.target as HTMLButtonElement;
    const userExistItem = Order.state.orderForm.Products.find(d => d._id === name);
    console.log('userExistItem: ', userExistItem);
    // const nonUserExistItem = Order.state.orderForm.Products.find(d => d.date === name);
    if (userExistItem) {
      return alert('아래에 선택상품 주문버튼을 눌러주세요');
    } else {
      const findOne = state.basket.basketList.find(d => d._id === name);
      Order.action.setProducts(findOne);
      router.push('/order/orderform');
    }
  }, [Order.state.orderForm.Products, state.basket.basketList]);

  const handleCheckbox = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target as HTMLInputElement;
    if (userId) {
      if (checked) {
        if (state.basket.basketList) {
          const result = state.basket.basketList.find(d => d._id === value);
          Order.action.setProducts(result);
        }
      } else {
        Order.action.setRemoveCheckedItem(value, true);
      }
    } else {
      if (checked) {
        const result = state.basket.nonMemberBasket.find(d => d.date === value);
        Order.action.setProducts(result);
      } else {
        Order.action.setRemoveCheckedItem(value, false);
      }
    }

  }, [state.basket.basketList])

  const handleSelectedProduct = useCallback(() => {
    if (!Order.state.orderForm.Products.length) return alert('상품선택후 다시 시도해주세요.')
    router.push('/order/orderform');
  }, [Order.state.orderForm.Products])

  const handleEntireProducts = () => {
    if (!state.basket.basketList.length) return alert('장바구니에 상품이없습니다.');
    Order.action.setEntireProducts(state.basket.basketList);
    router.push('/order/orderform');
  }

  useEffect(() => {
    if (state.basket.basketList.length) {
      const CalcProduct = state.basket.basketList.reduce((acc, cur) => acc + (+cur.totalProductPrice), 0);
      setTotalPrice(CalcProduct)
      const CalcPayment = CalcProduct - (state.basket.basketList.reduce((acc, cur) => acc + (+cur.totalConsumerPrice), 0));
      setPaymentPrice(CalcPayment);
    }
  }, [state.basket.basketList])

  return (
    <S.Basket>
      <PageTitle TitleText='장바구니' />

      {state.userInfo.userId ? (
        <>
          <UserInfo />
          <FormFieldset title='장바구니 목록'>
            <OrderList
              handleRemoveItem={handleRemoveItem}
              handleOrderToOneProduct={handleOrderToOneProduct}
              handleCheckbox={handleCheckbox}
              item={state.basket.basketList}
            />
          </FormFieldset>

          {state.basket.basketList.length > 0 && (
            <FormFieldset title='결제예정금액'>
              <FinalAmount
                handleSelectedProduct={handleSelectedProduct}
                handleEntireProducts={handleEntireProducts}
                totalPrice={totalPrice}
                paymentPrice={paymentPrice}
              />
            </FormFieldset>
          )}
        </>
      ) : (
        <>
          <UserInfo />
          <FormFieldset title='장바구니 목록'>
            <OrderList
              handleRemoveItem={handleRemoveItem}
              handleOrderToOneProduct={handleOrderToOneProduct}
              handleCheckbox={handleCheckbox}
              item={state.basket.nonMemberBasket}
            />
          </FormFieldset>

          {state.basket.nonMemberBasket.length > 0 && (
            <FormFieldset title='결제예정금액'>
              <FinalAmount
                handleSelectedProduct={handleSelectedProduct}
                handleEntireProducts={handleEntireProducts}
                totalPrice={totalPrice}
                paymentPrice={paymentPrice}
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
