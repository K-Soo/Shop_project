import React from "react";
import styled from "styled-components";
import FinalAmount from 'components/Forms/FinalAmount';
import FormBox from 'components/Forms/FormBox';
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
  return (
    <S.OrderForm>
      <UserInfo />
      <FormBox title='주문내역'>
        <OrderList caption='주문내역 목록' />
      </FormBox>

      <FormBox title='결제예정금액'>
        <FinalAmount />
      </FormBox>
      <FormBox title='배송정보'>
        <DeliveryInfo />
      </FormBox>

      <FormBox title='결제'>
        <Payment />
      </FormBox>

    </S.OrderForm>
  );
}