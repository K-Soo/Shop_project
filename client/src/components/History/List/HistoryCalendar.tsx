import React from "react";
import styled from "styled-components";
import Title from 'components/style/Title';
import Button from 'components/style/Button';
import Select from 'components/style/Select';

interface IHistoryCalendar {
  maxPages:number;
}

const S = {
  HistoryCalendar: styled.article`
    ${Title}{
      position: relative;
      &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: -2px;
        left: 0;
        background: #333;
      }
    }
  `,
  FormBox: styled.form`
    margin-top: 10px;
    border: 5px solid #f5f5f5;
    padding: 20px;
    display: flex;
    select{
      color: #333;
      font-size: 13px;
    }
    button{
      height: 40px;
      color: #333;
      font-size: 13px;
      font-weight: normal;
    }
    .fieldset-title{
      display: none;
      font-size: 11px;
      padding: 0 10px;
    }
    .order-status{
      display: flex;
      align-items: center;
      &__select{
        flex: 1;
      }
    }
    .period{
      display: flex;
      align-items: center;
      &__buttons{
        display: flex;
        flex: 1;
        &--setting{
          display: none;
        }
        &__replace-calendar{
          border: 1px solid red;
        }
      }
      ${({ theme }) => theme.mobile`
        margin-top: 10px;
        &__buttons{
          &__replace-calendar{
             display: none;
          }
          &--setting{
            display: block;
          }
        }
      `}
    }
    ${({ theme }) => theme.mobile`
      margin-top: 0;
      border: none;
      display: block;
      padding: 10px;
      select{
        height: 30px;
      }
      button{
        height: 30px;
        padding:0 5px;
        font-size: 10px;
      }
      .fieldset-title{
        display: block;
      }
    `}
  `,
}

export default function HistoryCalendar({ maxPages}: IHistoryCalendar) {
  return (
    <S.HistoryCalendar>
      <Title level={3} size='16' textAlign='left'>주문내역조회 ({maxPages})</Title>

      <S.FormBox action="">
        <fieldset className='order-status'>
          <span className='fieldset-title'>상태</span>
          <div className='order-status__select'>
            <Select height='40'>
              <option value="">전체주문상태</option>
              <option value="">결제완료</option>
            </Select>
          </div>
        </fieldset>

        <fieldset className='period'>
          <span className='fieldset-title'>기간</span>
          <div className='period__buttons'>
            <Button white name='' onClick={() => { }}>오늘</Button>
            <Button white name='' onClick={() => { }}>1주일</Button>
            <Button white name='' onClick={() => { }}>1개월</Button>
            <Button white name='' onClick={() => { }}>3개월</Button>
            <Button className='period__buttons--setting' white name='' onClick={() => { }}>기간설정</Button>
            <div className='period__buttons__replace-calendar'>
              calendarasdasdasdasdasdas
            </div>
          </div>
        </fieldset>
      </S.FormBox>

    </S.HistoryCalendar>
  );
}
