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
    .item{
      background-color: #fff;
      border: 1px solid #eee;
      border-radius: 5px;
      padding: 10px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .title{
        &__category{
          display: inline-block;
          width: 100px;
        }
        &__name{
          display: inline-block;
          min-width: 130px;
        }
      }
      .ctr-box{
        display: flex;
        align-items: center;
        &__edit-qty{
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
          margin-left: 100px;
          display: flex;
          align-items: center;
          label{
            font-size: 14px;
          }
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
          {items.map(d => (
            <li key={d._id} className='item'>

              <div className='title'>
                <span className='title__category'>
                  {d.category}
                </span>
                <span className='item__title__name'>
                  {d.name}
                </span>
              </div>

              <div className='ctr-box'>
                <div className='ctr-box__edit-qty'>
                  <label>
                    수량
                  </label>
                  <Input
                    type="number"
                    height='30'
                    width='70'
                    margin='0 15px 0 0'
                    value={d.quantity}
                  // onChange={action.setChangeQty}
                  // name={userId ? d._id : d.date}
                  />
                  <Button white height='30px' width='50px' name={d._id} onClick={() => { }}>변경</Button>
                </div>

                <div className='ctr-box__check-box'>
                  <CheckBox id='select-check' name='checkItem' value={d._id} onChange={() => { }} />
                </div>
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
