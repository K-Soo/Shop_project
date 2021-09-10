import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from 'next/router';
import { useOrderContext } from 'context/OrderProvider';
import FinalAmount from 'components/Forms/FinalAmount';
import FormBox from 'components/Forms/FormFieldset';
import DeliveryInfo from 'components/Forms/DeliveryInfo';
import OrderList from 'components/Forms/OrderList';
import UserInfo from 'components/Forms/UserInfo';
import Payment from 'components/Forms/Payment';

interface IOrderForm {

}

const S = {
  OrderForm: styled.div`
  `,
}

export default function OrderForm({ }: IOrderForm) {
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const [paymentPrice, setPaymentPrice] = useState<number | null>(null);
  const Order = useOrderContext();
  const router = useRouter();

  const handleRouterBack = useCallback(() => {
    Order.action.setInitOrderForm();
    router.back();
  }, [])

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement
    const result = Order.state.orderForm.Products.find(({ _id }) => _id === value);
    Order.action.setTemporaryArray(result);
  }

  const handleSelectProductRemove = () => {
    if(!Order.state.TemporaryArray.length) return alert('상품을 선택해주세요.')
    Order.action.setRemoveOrderItems();
  }

  useEffect(() => {
    if (Order.state.orderForm.Products.length) {
      const CalcProduct = Order.state.orderForm.Products.reduce((acc, cur) => acc + (+cur.totalProductPrice), 0);
      setTotalPrice(CalcProduct)
      const CalcPayment = CalcProduct - (Order.state.orderForm.Products.reduce((acc, cur) => acc + (+cur.totalConsumerPrice), 0));
      setPaymentPrice(CalcPayment);
    }
  }, [Order.state.orderForm.Products])

  return (
    <S.OrderForm>
      <UserInfo />
      <FormBox title='주문내역'>
        <OrderList 
          item={Order.state.orderForm.Products} 
          handleRouterBack={handleRouterBack} 
          handleCheckbox={handleCheckbox} 
          handleSelectProductRemove={handleSelectProductRemove}
        />
      </FormBox>

      {Order.state.orderForm.Products.length > 0 && (
        <>
          <FormBox title='결제예정금액'>
            <FinalAmount 
              totalPrice={totalPrice} 
              paymentPrice={paymentPrice} 
            />
          </FormBox>

          <FormBox title='배송정보'>
            <DeliveryInfo />
          </FormBox>

          <FormBox title='결제'>
            <Payment />
          </FormBox>
        </>
      )}

    </S.OrderForm>
  );
}