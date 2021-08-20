import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled, { css } from "styled-components";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Title from 'components/style/Title';
import { TColor, IProduct } from 'interfaces/IProduct';
import { PriceComma } from 'utils';
import Icon from 'components/Icon/Icon';

interface IImageSlider {
  item?: IProduct[]
}

const CommonIcon = css`
  padding: 1px 5px;
  color: #718FC5;
  font-size: 14px;
  letter-spacing: 1px;
`;

const S = {
  ImageSlider: styled.div`
    overflow: hidden;
  `,
  Card: styled.div`
    padding: 0 15px;
    .card-inner{
      margin: 0 auto;
      max-width: 350px;
      .img-box{
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          &:hover{
            transform: scale(1.1);
            transition: all .5s ease;
          }
        }
      }
      .desc-box{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 12px;
        ${Title}{
          display: block;
          font-size: 13px;
          width: 100%;
          text-align: left;
          /* border-bottom: 1px solid #f0f0f0; */
        }
        &__short-desc{
        }
        &__product-price{
          color: #999;
        }
        &__consumer-price{
          margin-top: 2px;
          color: #4d4d4d;
        }
      }
      &:hover{
        S.Line{
          background: #000;
          transition: all 0.5s ease;
        }
      }
    }
  `,
  Line: styled.hr`
    border: 0;
    color: #f0f0f0;
    width: 100%;
    height: 1px;
    background: #f0f0f0;
    S.Card{
      border: 1px solid red;
    }
  `,
  IconBox: styled.p`
    margin-top: 5px;
    i{
      border-radius: 3px;
      :first-child{
        margin-right: 5px;
      }
    }
    .new-icon{
      ${CommonIcon}
      background-color: #FFEF36;
    }
    .best-icon{
      ${CommonIcon}
      background-color: #1B5DF6;
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
};

const settings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 500,
  cssEase: 'linear',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
      },
    },
  ],
};

export default function ImageSlider({ item }: IImageSlider) {
  const router = useRouter();
  const { category } = router.query;

  return (
    <S.ImageSlider>
      <Slider {...settings}>
        {item && item.map((d: IProduct) => (
          <S.Card key={d.seq}>
            <div className='card-inner'>
              <Link href={category + "/" + d.seq}>
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
                    <S.ColorIcon className='color-icon' key={d.hex_value} color={d.hex_value} />
                  ))}
                </S.ColorBox>
                <Title level={6} className='title'>{d.name.slice(0, 20)}</Title>
                <S.Line />
                <p className='desc-box__short-desc'>{d.description.slice(0, 30)}</p>
                <span className='desc-box__product-price'><del>{PriceComma(d.product_price)}원</del></span>
                <b className='desc-box__consumer-price'>{PriceComma(d.consumer_price)}원</b>
                <S.IconBox >
                  {d.new_product && <i className='new-icon' >new</i>}
                  {d.best_product && <i className='best-icon' >best</i>}
                </S.IconBox>
                <i className='cart-icon'>
                  <Icon name='cartAdd' />
                </i>
              </div>

            </div>
          </S.Card>
        ))}
      </Slider>
    </S.ImageSlider>
  );
}
