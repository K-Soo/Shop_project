import React from "react";
import styled from "styled-components";
import { IProduct } from 'interfaces/IProduct';
import Input from 'components/style/Input';
import Button from 'components/style/Button';
import CheckBox from 'components/style/CheckBox';
import EmptyItem from 'components/Common/EmptyItem';
interface IList {
  items: IProduct[];
  className?: string;
}

const S = {
  List: styled.div`
    border: 1px solid #eee;
    padding: 15px;
    background-color: #F0F3F7;
    font-size: 14px;
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

export default function List({ className, items }: IList) {
  console.log('items: ', items);
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
                판매중
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
                // onChange={action.setChangeQty}
                // name={userId ? d._id : d.date}
                />
                <Button white height='30px' width='50px' name={d._id} onClick={() => { }}>변경</Button>
              </div>

              <div className='item__check-box'>
                <CheckBox id='select-check' name='checkItem' value={d._id} onChange={() => { }} />
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
