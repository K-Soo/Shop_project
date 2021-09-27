import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRouter } from 'next/router';
import { useAppContext } from 'context/AppProvider';
import { useOrderContext } from 'context/OrderProvider';
import Button from 'components/style/Button';
import Radio from 'components/style/Radio';
import Title from 'components/style/Title';
import { PriceComma, currencyConvert } from 'utils';
import LoadingOverlay from 'react-loading-overlay-ts';
import { Post } from 'api';
import { recipientCheck, addrCheck, phoneCheck, pointCheck } from 'components/validation';

import { CreateOrderActions, OnApproveActions, OnApproveData, UnknownObject, OnClickActions, OnCancelledActions } from "@paypal/paypal-js/types/components/buttons";
import { DISPATCH_ACTION, FUNDING, PayPalButtons, SCRIPT_LOADING_STATE, usePayPalScriptReducer } from "@paypal/react-paypal-js";


interface IPayment {

}
interface TPaypalStyles {
  color?: "gold" | "blue" | "silver" | "white" | "black";
  shape?: "rect" | "pill";
  label?:
  | "paypal"
  | "checkout"
  | "buynow"
  | "pay"
  | "installment"
  | "subscribe"
  | "donate";
  height?: number;
  layout?: "vertical" | "horizontal";
}

const S = {
  Payment: styled.div`
    /* border: 3px solid red; */
    margin: 0 auto;
    display: flex;
    ${({ theme }) => theme.mobile`
      display: block;
    `}
  `,
  PaymentMethod: styled.div`
    flex: 1;
    border: 1px solid #000;
    ${Title}{
      background-color: #eff1f4;
      color: #333;
      padding: 10px;
      border-bottom: 1px solid #bbc9de;
    }
    .payment-select{
      padding: 10px;
    }
    .payment-guide{
      padding: 0 10px;
      font-size: 12px;
      color: #777;
    }
    ${({ theme }) => theme.mobile`
      border: 1px solid #508bed;
      margin-bottom: 10px;
    `}
  `,

  PaymentButtonBox: styled.div`
    flex-basis: 30%;
    border:solid #333;
    border-width: 1px 1px 1px 0;
    padding: 10px;
    ${({ theme }) => theme.mobile`
      border-width: 1px;
    `}
    .amount-info{
      text-align: right;
      &__title{
        margin-bottom: 10px;
        font-size: 14px;
      }
      &__price{
        font-size: 26px;
        &::after{
          content: '원';
          font-size: 14px;
        }
      }
    }
    .button-box{
      height: 50px;
      &__submit{

      }
      &__paypal{
       .paypal-buttons {
       }
     }
    }

  `,
}

// 1. 유저 콜렉션에 history 필드안에 간단한 결제정보

// 2. payment collection 안에 자세한 결제정보 입력.

// 3. product collection 안에있는 sold 필드 업데이트.

const paypalStyles: TPaypalStyles = {
  color: "blue",
  shape: "pill",
  label: "checkout",
  height: 40,
  layout: "horizontal"
}

export default function Payment({ }: IPayment) {
  const router = useRouter();
  const { state } = useOrderContext();
  const App = useAppContext();
  const [{ isInitial, isPending, isRejected, isResolved }, Dispatch] = usePayPalScriptReducer();
  console.group('before');
  console.log('isResolved: ', isResolved);
  console.log('isRejected: ', isRejected);
  console.log('isPending: ', isPending);
  console.log('isInitial: ', isInitial);
  console.groupEnd();

  currencyConvert(state.orderForm.amountInfo.paymentAmount);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!pointCheck(state)) return;
    if (!recipientCheck(state)) return;
    if (!addrCheck(state)) return;
    if (!phoneCheck(state)) return;
    Dispatch({ type: DISPATCH_ACTION.LOADING_STATUS, value: SCRIPT_LOADING_STATE.PENDING });
  }

  const createOrder = (data: UnknownObject, actions: CreateOrderActions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: currencyConvert(state.orderForm.amountInfo.paymentAmount),
          },
        },
      ]
    })
  };

  const onApprove = async (data: OnApproveData, actions: OnApproveActions) => {
    try {
      const details = await actions.order.capture();
      console.log('details: ', details);
      if (!App.state.status.guest) {
        const res = await Post.checkout(App.state.userInfo.userId, state.orderForm);
        App.action.setLocalItems(res.items);
        Dispatch({ type: DISPATCH_ACTION.LOADING_STATUS, value: SCRIPT_LOADING_STATE.INITIAL });
        alert('결제완료');

        console.log('res: ', res);
      } else {

      }
    } catch (error) {
      console.log('error-checkout: ', error);

    }
  }

  const onError = (error: UnknownObject) => {
    alert('결제 오류');
    Dispatch({ type: DISPATCH_ACTION.LOADING_STATUS, value: SCRIPT_LOADING_STATE.INITIAL });
    console.error('paypal-error', error);
  }

  const onCancel = (data: UnknownObject, actions: OnCancelledActions) => {
    Dispatch({ type: DISPATCH_ACTION.LOADING_STATUS, value: SCRIPT_LOADING_STATE.INITIAL });
  }

  return (
    <S.Payment>
      <S.PaymentMethod>
        <Title level={6} textAlign='left' size='14'>결제수단 선택</Title>
        <div className='payment-select'>
          <input type='radio' id='paypalFor' />
          <label htmlFor='paypalFor'>페이팔</label>
        </div>
        <ul className='payment-guide'>
          <li>- 페이팔 결제시 USD 달러로 결제됩니다.</li>
        </ul>
      </S.PaymentMethod>

      <S.PaymentButtonBox>
        <div className='amount-info'>
          <p className='amount-info__title'>최종결제 금액</p>
          <strong className='amount-info__price'>
            {PriceComma(state.orderForm.amountInfo.paymentAmount)}
          </strong>
        </div>
        <div className='button-box'>
          {isInitial && (
            <Button
              className='button-box__submit'
              black
              onClick={handleSubmit}
              type='submit'
            >결제하기</Button>
          )}
          {isPending && (
            <LoadingOverlay
              active={true}
              spinner
              styles={{
                spinner: (base) => ({
                  ...base,
                  '& svg circle': {
                    stroke: 'rgba(55, 0, 255, 0.5)'
                  }
                })
              }} />
          )}
          {isResolved && (
            <PayPalButtons
              style={paypalStyles}
              createOrder={createOrder}
              onApprove={onApprove}
              onError={onError}
              onCancel={onCancel}
              className='button-box__paypal'
              fundingSource={FUNDING.PAYPAL}
            />
          )}

        </div>
      </S.PaymentButtonBox>
    </S.Payment>
  );
}
