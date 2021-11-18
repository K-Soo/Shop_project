/* eslint-disable @next/next/no-img-element */
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled, { css } from "styled-components";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Title from 'components/style/Title';
import { PriceComma } from 'utils';
import TextIcon from 'components/Common/TextIcon';
import ColorIcon from 'components/style/ColorIcon';
import { TColor, TUrl } from 'interfaces/IProduct';

interface IProductCard {
  product_type: string;
  seq: number;
  name: string;
  description: string;
  summary_description: string;
  product_price: string;
  consumer_price: string;
  imageUrl: TUrl[];
  product_colors: TColor[];
  new_product: boolean;
  best_product: boolean;
  isList?: boolean;
  qty: number;
}

const S = {
  ProductCard: styled.div<{ isList: boolean, isSoldOut: boolean }>`
    height: 100%;
    padding: 10px;
    ${props => props.isList && css`
      flex: 1 25%;
      max-width: 25%;
      img{
        max-height: 300px;
      }
      ${({ theme }) => theme.laptop`
        flex: 1 33%;
        max-width: 33%;
      }`}
      ${({ theme }) => theme.tablet`
      flex: 1 50%;
      max-width: 50%;
      }`}
      ${({ theme }) => theme.mobile`
      flex: 1 50%;
      max-width: 50%;
      }`}
    `}
    .card-inner{
      margin: 0 auto;
      max-width: 260px;
      display: flex;
      flex-direction: column;
      &__top{
        position: relative;
        border: 1px solid #eee;
        margin-bottom: 15px;
        overflow: hidden;
        .img-box{
          height: 300px;
          font-size: 0;
          position: relative;
          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
            overflow: hidden;
            &:hover{
              transform: scale(1.02);
              transition: all .3s ease;
            }
          }
          &__sold-out{
            position: absolute;
            width: 100%;
            text-align: center;
            height: 100%;
            background-color: rgb(255,255,255,0.6);
            display: ${props => props.isSoldOut ? 'flex' : 'none'};
            justify-content: center;
            align-items: center;
            p{
              color: #666;
              font-size: 24px;
            }
          }
        }
      }
      &__bottom{
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 13px;
        ${Title}{
          color: #333;
          font-size: 16px;
          font-weight: 400;
        }
        .desc{
          margin-bottom: 5px;
          font-size: 12px;
          color: #666;
        }
        &--product-price{
          font-size: 12px;
          color: #999;
        }
        &--consumer-price{
          font-size: 15px;
          color: #4d4d4d;
        }
      }
      ${({ theme }) => theme.mobile`
       .img-box{
        max-height: 200px;
        height: 280px;
       }
       .desc-box{
        font-size: 13px;
        ${Title}{
          font-size: 14px;
        }
      }
      }`}
    }
  `,
  IconBox: styled.p`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    height: 16px;
  `,
  ColorBox: styled.p`
    z-index: 9999;
    position: absolute;
    bottom: 5px;
    left: 5px;
    display: flex;
    align-items: center;
  `,
}

export default function ProductCard({
  product_type,
  seq,
  name,
  description,
  summary_description,
  product_price,
  consumer_price,
  imageUrl,
  product_colors,
  best_product,
  new_product,
  isList,
  qty
}: IProductCard) {
  const [isSoldOut, setIsSoldOut] = useState<boolean>(false);

  useEffect(() => {
    if (qty === 0) setIsSoldOut(true);
  }, [qty]);

  return (
    <S.ProductCard isList={isList} isSoldOut={isSoldOut}>
      <div className='card-inner'>
        <Link href={`/product/${product_type}/${seq}`}>
          <a className='card-inner__top'>
            <div className='img-box'>
              <div className='img-box__sold-out'>
                <p>SOLD OUT</p>
              </div>
              <img
                src={imageUrl[0].url}
                alt="Picture of the author"
              />
            </div>
            <S.ColorBox >
              {product_colors?.map((d: TColor) => (
                <ColorIcon key={d.hex_value} color={d.hex_value} />
              ))}
            </S.ColorBox>
          </a>
        </Link>

        <div className='card-inner__bottom'>
          <S.IconBox >
            {best_product && <TextIcon text='best' margin='0 5px 0 0' />}
            {new_product && <TextIcon text='new' />}
          </S.IconBox>

          <Title level={6} className='title'>{name}</Title>

          <p className='desc'>{summary_description}</p>
          <span className='card-inner__bottom--product-price'><del>{PriceComma(product_price)}원</del></span>
          <b className='card-inner__bottom--consumer-price'>{PriceComma(consumer_price)}원</b>
        </div>
      </div>
    </S.ProductCard>
  );
}
