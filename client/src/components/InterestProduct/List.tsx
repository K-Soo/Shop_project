import React from "react";
import styled from "styled-components";
import Image from 'next/image';
import { useRouter, NextRouter } from 'next/router';
import { IBasketItem, IProduct } from 'interfaces/IProduct';
import Button from 'components/style/Button';
import Icon from 'components/Icon/Icon';
import Title from 'components/style/Title';
import Input from 'components/style/Input';
import { useAppContext } from 'context/AppProvider';
import { PriceComma } from 'utils';
import CheckBox from 'components/style/CheckBox';
import TextIcon from 'components/Common/TextIcon';
import Link from 'next/link';
import EmptyItem from 'components/Common/EmptyItem';

interface IList {
  items: IProduct[];
  isLoading: boolean;
  isSuccess: boolean;
  handleRemoveItem?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const S = {
  List: styled.div`
  `,
  Item: styled.div`
    border-bottom: 1px dashed #ccc;
    display: flex;
    flex-direction: column;
    padding: 10px;
    font-size: 12px;
    button{
      font-size: 12px;
    }
  `,
  MainContent: styled.div`
    height: 90px;
    display: flex;
    flex-direction: column;
    .product-info{
      display: flex;
      &__left{
        margin-right: 10px;
        font-size: 0;
        a{
          display: inline-block;
          height: 100%;
        }
      }
      &__right{
        flex: 1;
        height: 120px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        &--desc{
          flex: 1;
          width: 100%;
          align-items: center;
          .category{
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .title{
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            &__name{
              display: flex;
              align-items: center;
              a{
                &:hover{
                  text-decoration: underline;
                }
              }
            }
          }
          .consumer-price{
            font-size: 14px;
            font-weight: 600;
            &::after{
              content: '원';
            }
          }
          .product-price{
            color: #333;
            &::after{
              content: '원';
            }
          }
        }
      }
    }
  `,
  ColorBox: styled.div`
    margin-bottom: 3px;
    display: flex;
    span{
      padding: 0 2px;
    }
  `,
}

export default function List({ items, isLoading, isSuccess, handleRemoveItem }: IList) {
  const { action, state } = useAppContext();

  return (
    <S.List>
      {isSuccess && items.length > 0 && items.map(d => (
          <S.Item key={d._id}>
            <S.MainContent>
              <div className='product-info'>
                <div className='product-info__left'>
                  <Link href={'/product/' + d.product_type + '/' + d.seq}>
                    <a>
                      <Image
                        className='img'
                        src={d.imageUrl[0].url}
                        alt="Picture of the author"
                        width={80}
                        height={90}
                      />
                    </a>
                  </Link>
                </div>
                <div className='product-info__right'>
                  <div className='product-info__right--desc'>
                    <div className='category'>
                    <p>{d.category}</p>
                    <Button white name={d._id} height='25px' width='50px' onClick={handleRemoveItem}>삭제</Button>
                    </div>
                    <div className='product-info__right--desc title'>
                      <div className='title__name'>
                        <Link href={'/product/' + d.product_type + '/' + d.seq}>
                          <a>
                            <Title level={6} size='13' >{d.name}</Title>
                          </a>
                        </Link>
                        {d.best_product && <TextIcon text='best' margin='0 0 0 5px' />}
                        {d.new_product && <TextIcon text='new' margin='0 0 0 5px' />}
                      </div>
                    </div>
                    <S.ColorBox>
                      <p>[색상]: </p>
                      {d.product_colors.map(c => (
                        <span key={c.hex_value}>{c.color_name}</span>
                      ))}
                    </S.ColorBox>
                    <p className='product-price'><del>{PriceComma(d.product_price)}</del></p>
                    <p className='consumer-price'>{PriceComma(d.consumer_price)}</p>
                  </div>
                </div>
              </div>
            </S.MainContent>
          </S.Item>
      ))}
      {!items?.length && <EmptyItem text='관심상품이 없습니다.' />}
    </S.List>
  );
}
