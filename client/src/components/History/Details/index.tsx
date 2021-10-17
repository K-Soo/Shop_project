import React, { useRef } from 'react';
import styled from "styled-components";
import PageTitle from 'components/Common/PageTitle';
import FormFieldset from 'components/Forms/FormFieldset';
import { IOrderDetail } from 'interfaces/IOrder';
import OrderInfo from 'components/History/Details/OrderInfo';
import PaymentInfo from 'components/History/Details/PaymentInfo';
import DeliveryInfo from 'components/History/Details/DeliveryInfo';
import ProductInfo from 'components/History/Details/ProductInfo';
import { useReactToPrint } from 'react-to-print';

interface IDetails {
  items: IOrderDetail[]
}

const S = {
  Details: styled.div`
  table{
    width: 100%;
  }
  `,
}

export default function Details({ items }: IDetails) {
  const PrintRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => PrintRef.current,
  });
  return (
    <S.Details  ref={PrintRef}>
      <PageTitle TitleText='주문상세 조회' />
      <FormFieldset title='주문정보'>
        <OrderInfo items={items} />
      </FormFieldset>
      <FormFieldset title='결제정보'>
        <PaymentInfo items={items} />
      </FormFieldset>
      <FormFieldset title='주문상품 정보'>
        <ProductInfo items={items} />
      </FormFieldset>
      <FormFieldset title='배송지정보'>
        <DeliveryInfo items={items} handlePrint={handlePrint}/>
      </FormFieldset>
    </S.Details>
  );
}
