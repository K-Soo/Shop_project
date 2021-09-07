import React from "react";
import styled from "styled-components";
import FinalAmount from 'components/Forms/FinalAmount';
import FormFieldset from 'components/Forms/FormFieldset';
import DeliveryInfo from 'components/Forms/DeliveryInfo';
import OrderList from 'components/Forms/OrderList';
import UserInfo from 'components/Forms/UserInfo';
import Guide from 'components/Forms/Guide';
import PageTitle from 'components/Common/PageTitle';
import { IBasketItem } from 'interfaces/IProduct';
import { useAppContext } from 'context/AppProvider';
import Button from 'components/style/Button';

interface IBasket {
}

const S = {
  Basket: styled.div`
  `,
}

export default function Basket() {
  const { state } = useAppContext();

  return (
    <S.Basket>
      <PageTitle TitleText='장바구니' />
      <UserInfo />

      <form action="">
        <FormFieldset title='장바구니 목록'>
          <OrderList />
        </FormFieldset>

        {state.basket.basketList.length > 0 && (
          <FormFieldset title='결제예정금액'>
            <FinalAmount />
          </FormFieldset>
        )}

        <FormFieldset title='이용 안내'>
          <Guide />
        </FormFieldset>

      </form>
    </S.Basket>
  );
}
