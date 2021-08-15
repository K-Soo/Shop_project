import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import styled from "styled-components";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Title from 'components/style/Title';

interface IImageSlider {
  item?: any;
}

const S = {
  ImageSlider: styled.div`
  border: 1px solid red;
  `,
  Card: styled.div`
    padding: 0 15px;
    /* height: 600px; */
    .card-inner{
      margin: 0 auto;
      max-width: 350px;
      .img-box{
        /* max-height: 300px; */
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
        /* max-height: 300px; */
        align-items: center;
        ${Title}{
          display: block;
          font-size: 16px;
        }
        &__short-desc{
          margin: 10px 0;
          border: 1px solid red;
        }
        &__consumer-price{
        }
      }
    }
  `,
  NewIcon: styled.span`
  `,
  ColorBox: styled.p<{ productColors: any }>`
    display: ${props => props.productColors.length > 1 ? 'block' : 'none'};
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


const settings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
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
  const {pathname} = router;

  return (
    <S.ImageSlider>
      <Slider {...settings}>
        {item && item.map((d:any) => (
          <S.Card key={d.id}>
            <div className='card-inner'>
              <Link href={`${pathname}/${d.id}`}>
              <a>
              <div className='img-box'>
                <Image
                  src={d.image_link}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
                {/* <img src={d.image_link} alt="" /> */}
              </div>
              </a>
              </Link>
              <div className='desc-box'>
                <S.ColorBox productColors={d.product_colors}>
                  {d.product_colors.map((val: any) => (
                    <S.ColorIcon className='color-icon' key={val.hex_value} color={val.hex_value} />
                  ))}
                </S.ColorBox>
                <Title level={5}>{d.name.slice(0, 20)}</Title>
                <p className='desc-box__short-desc'>{d.description.slice(0, 30)}</p>
                <span className='desc-box__consumer-price'>소비자 가격</span>
                <span className='desc-box__sale-price'>{d.price}</span>
                <span className='desc-box__discount'>할인 가격</span>
                <S.NewIcon >new</S.NewIcon>
              </div>
            </div>
          </S.Card>
        ))}
      </Slider>
    </S.ImageSlider>
  );
}
