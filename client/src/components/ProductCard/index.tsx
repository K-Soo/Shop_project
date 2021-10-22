/* eslint-disable @next/next/no-img-element */
import React from "react";
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
import {TColor ,TUrl} from 'interfaces/IProduct';

interface IProductCard {
  product_type: string;
  seq: number;
  name: string;
  description: string;
  product_price: string;
  consumer_price: string;
  imageUrl:TUrl[];
  product_colors:TColor[];
  new_product:boolean;
  best_product:boolean;
  isList?:boolean;
}

const S = {
  ProductCard: styled.div<{isList:boolean}>`
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
      .img-box{
        height: 300px;
        margin-bottom: 15px;
        font-size: 0;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
          &:hover{
            transform: scale(1.01);
            transition: all .5s ease;
          }
        }
      }
      .desc-box{
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 13px;
        ${Title}{
          display: block;
          font-size: 16px;
          width: 100%;
          text-align: left;
        }
        .desc{
          margin-bottom: 5px;
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
  `,

}

export default function ProductCard({ 
  product_type, 
  seq, 
  name, 
  description, 
  product_price, 
  consumer_price,
  imageUrl,
  product_colors,
  best_product,
  new_product,
  isList
}: IProductCard) {
  return (
    <S.ProductCard isList={isList}>
      <div className='card-inner'>
        <Link href={product_type + "/" + seq}>
          <a>
            <div className='img-box'>
              <img
                src={imageUrl[0].url}
                alt="Picture of the author"
              />
            </div>
          </a>
        </Link>

        <div className='desc-box'>
          <S.ColorBox >
            {product_colors?.map((d: TColor) => (
              <ColorIcon key={d.hex_value} color={d.hex_value} />
            ))}
          </S.ColorBox>

          <S.IconBox >
            {best_product && <TextIcon text='best' margin='0 5px 0 0' />}
            {new_product && <TextIcon text='new' />}
          </S.IconBox>

          <Title level={6} className='title'>{name}</Title>

          <p className='desc'>{description.slice(0, 30)}</p>
          <span style={{ color: '#999' }}><del>{PriceComma(product_price)}원</del></span>
          <b style={{ color: '#4d4d4d' }}>{PriceComma(consumer_price)}원</b>
        </div>
      </div>
    </S.ProductCard>
  );
}
