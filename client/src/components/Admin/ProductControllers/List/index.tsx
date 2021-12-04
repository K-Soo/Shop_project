import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { IProduct } from 'interfaces/IProduct';
import Input from 'components/style/Input';
import Button from 'components/style/Button';
import CheckBox from 'components/style/CheckBox';
import EmptyItem from 'components/Common/EmptyItem';
interface IList {
  items: IProduct[];
  className?: string;
  handleCount?: React.ChangeEventHandler<HTMLInputElement>;
  handleQty?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleChecked?: React.ChangeEventHandler<HTMLInputElement>;
  checkedItem: string[];
}

const S = {
  List: styled.div`
    border: 1px solid #eee;
    padding: 15px;
    background-color: #F0F3F7;
    font-size: 14px;
    overflow-y: auto;
    .header{
      display: flex;
      align-items: center;
      background-color: #f8f8f8;
      height: 35px;
      color: #333;
      padding: 10px;
      margin-bottom: 15px;
      p:nth-child(1){
        flex-basis:100px;
      }
      p:nth-child(2){
        flex-basis:120px;
      }
      p:nth-child(3){
        flex-basis:200px;

      }
      p:nth-child(4){
        flex: 1;
      }
    }
    .item{
      background-color: #fff;
      border: 1px solid #eee;
      border-radius: 5px;
      padding: 10px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &__status{
        flex-basis:100px;
        display: inline-block;
        span{
          display: inline-block;
          height: 100%;
          color: #fff;
          font-size: 13px;
          padding: 3px 5px;
          border-radius: 5px;
        }
      }
      &__category{
        flex-basis:120px;
        display: inline-block;
      }
      &__name{
        flex-basis:200px;
        display: inline-block;
        min-width: 130px;
      }
      &__edit-qty{
        flex: 1;
        input[type=number]::-webkit-inner-spin-button {
          opacity: 1;
          position: absolute;
          top: 0;
          right: 0;
          height: 110%;
          cursor: pointer;
        }
        button{
          font-size: 14px;
        }
      }
      &__check-box{
        font-size: 0;
        display: flex;
        align-items: center;
        label{
          font-size: 14px;
        }
      }
    }
  `,
}

export default function List({ className, items, handleCount, handleQty, handleChecked, checkedItem }: IList) {

  return (
    <S.List className={className}>
      {items.length > 0 ? (
        <ul>
          <li className='header'>
            <p>상태</p>
            <p>카테고리</p>
            <p>상품이름</p>
            <p>현재수량</p>
            <p>선택</p>
          </li>
          {items.map(d => (
            <li key={d._id} className='item'>
              <p className='item__status'>
                {d.qty > 0 ? <span style={{ backgroundColor: 'green' }}>판매중</span> : d.qty === 0 ? <span style={{ backgroundColor: 'crimson' }}>품절</span>: <span style={{ backgroundColor: '#999' }}>마감</span>}
              </p>
              <p className='item__category'>
                {d.category}
              </p>
              <p className='item__name'>
                {d.name}
              </p>

              <div className='item__edit-qty'>
                <Input
                  type="number"
                  height='30'
                  width='70'
                  margin='0 15px 0 0'
                  value={d.qty}
                  min={0}
                  onChange={handleCount}
                  name={d._id}
                />
                <Button
                  white
                  height='30px'
                  width='50px'
                  name={d._id}
                  onClick={handleQty}
                >
                  변경
                </Button>
              </div>

              <div className='item__check-box'>
                <CheckBox 
                id='select-check' 
                name={d._id} 
                checked={checkedItem.includes(d._id)} 
                value={d._id} 
                onChange={handleChecked} />
              </div>

            </li>
          ))}
        </ul>
      ) : (
        <EmptyItem text='상품이 없습니다' />
      )}
    </S.List>
  );
}
