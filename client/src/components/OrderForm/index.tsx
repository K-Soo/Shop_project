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
import PointsInfo from 'components/Forms/PointsInfo';
import { useAppContext } from 'context/AppProvider';
interface IOrderForm {

}

const S = {
  OrderForm: styled.section`
  `,
}

export default function OrderForm({ }: IOrderForm) {
  const App = useAppContext();
  const Order = useOrderContext();
  const router = useRouter();
  const { userId } = App.state.userInfo;
  const {amountInfo} = Order.state.orderForm;
  
  const handleRouterBack = useCallback(() => {
    Order.action.setInitOrderForm();
    router.back();
  }, []);

  // useEffect(() => {
  //   if (Order.state.orderForm.Products.length) {
  //     Order.action.setAmountInfo();
  //   }
  // }, [Order.state.orderForm.Products]);


  return (
    <S.OrderForm>
      <UserInfo />
      <FormBox title='주문내역'>
        <OrderList
          item={Order.state.orderForm.Products}
          handleRouterBack={handleRouterBack}
          handleCheckbox={(e) => Order.action.setCheckBox(e, userId)}
          handleSelectProductRemove={(e) => Order.action.setRemoveOrderItems(e, userId)}
        />
      </FormBox>

      {Order.state.orderForm.Products.length > 0 && (
        <>
          <FormBox title='결제예정금액'>
            <FinalAmount
                productAmount={amountInfo.productAmount}
                discountAmount={amountInfo.discountAmount}
                deliveryAmount={amountInfo.deliveryAmount}
                consumerAmount={amountInfo.consumerAmount}
                paymentAmount={amountInfo.paymentAmount}
            />
            {userId && <PointsInfo />}
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