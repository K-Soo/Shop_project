import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from "styled-components";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Title from 'components/style/Title';
import { TColor, IProduct } from 'interfaces/IProduct';
import { PriceComma } from 'utils';

interface IProductList {
  item?: any;
}

const S = {
  ProductList: styled.article`
    display: flex;
    border: 1px solid red;
    flex-wrap: wrap;
  `,
  Card: styled.div`
    padding: 30px;
    border: 1px solid red;
    flex: 1 25%;
    .card-inner{
      margin: 0 auto;
      max-width: 350px;
      .img-box{
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          :hover{
            transform: scale(1.1);
            transition: all .5s ease;
          }
        }
      }
      .desc-box{
        display: flex;
        flex-direction: column;
        align-items: center;
        ${Title}{
          display: block;
          font-size: 16px;
        }
        &__short-desc{
          margin: 10px 0;
        }
        &__discount-percentage{
          font-size: 12px;
        }
        &__product-price{
          color: #999;
        }
        &__consumer-price{
          margin-top: 2px;
          color: #4d4d4d;
        }
      }
    }
  `,
  IconBox: styled.p`
  margin-top: 5px;
  i{
    margin: 0 5px;
    border-radius: 3px;
  }
  .new-icon{
    padding: 1px 5px;
    color: #718FC5;
    font-size: 14px;
    background-color: #FFEF36;
    letter-spacing: 1px;
  }
  .best-icon{
    padding: 1px 5px;
    color: #fff;
    font-size: 14px;
    background-color: #1B5DF6;
    letter-spacing: 1px;
  }
`,
  ColorBox: styled.p<{ productColors: number }>`
    display: ${props => props.productColors > 1 ? 'block' : 'none'};
    text-align: center;
    margin-bottom: 10px;
`,
  ColorIcon: styled.span<{ color: string }>`
    display: inline-block;
    width:10px;
    height:10px;
    border-radius: 50%;
    margin: 0 5px;
    background-color: ${props => props.color ? `${props.color};` : 'none'};
`,
}

export default function ProductList({ item }: IProductList) {
  console.log('ProductList -> item: ', item);
  const router = useRouter();
  // const { category } = router.query;

  return (
    <S.ProductList>
      {item && item.map((d: IProduct) => (
        <S.Card key={d.seq}>
          <div className='card-inner'>
            <Link href="">
              <a>
                <div className='img-box'>
                  <Image
                    src='https://via.placeholder.com/150'
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </div>
              </a>
            </Link>
            <div className='desc-box'>
              <S.ColorBox productColors={d.product_colors.length}>
                {d.product_colors?.map((d: TColor) => (
                  <S.ColorIcon key={d.hex_value} className='color-icon' color={d.hex_value} />
                ))}
              </S.ColorBox>
              <Title level={5}>{d.name.slice(0, 20)}</Title>
              <span>{d.category}</span>
              <p className='desc-box__short-desc'>{d.description.slice(0, 30)}</p>
              <span className='desc-box__product-price'><del>{PriceComma(d.product_price)}원</del></span>
              <span className='desc-box__consumer-price'>{PriceComma(d.consumer_price)}원</span>
              <span className='desc-box__discount-percentage'>(29%할인)</span>
              <S.IconBox >
                {d.new_product && <i className='new-icon' >new</i>}
                {d.best_product && <i className='best-icon' >best</i>}
              </S.IconBox>
            </div>
          </div>
        </S.Card>
      ))}

    </S.ProductList>
  );
}
