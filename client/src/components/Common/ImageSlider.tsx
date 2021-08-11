import React from "react";
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
  Color: styled.p<{productColors:any}>`
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


  return (
    <S.ImageSlider>
      <Slider {...settings}>
        {/* <S.Card> 원본
          <div className='card-inner'>
            <div className='img-box'>
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
            <div className='desc-box'>
              <Title level={5}>제목</Title>
              <span className='desc-box__color-chip'>색상</span>
              <p className='desc-box'>상품 요약설명</p>
              <span className='desc-box__consumer-price'>소비자 가격</span>
              <span className='desc-box__sale-price'>판매 가격</span>
              <span className='desc-box__discount'>할인 가격</span>
              <span className='desc-box__icon'>new</span>
            </div>
          </div>
        </S.Card> */}

        {item && item.map((d) => (
          <S.Card key={d.id}>
            <div className='card-inner'>
              <div className='img-box'>
                <img src={d.image_link} alt="" />
              </div>

              <div className='desc-box'>
                <S.Color productColors={d.product_colors}>
                  {d.product_colors.map((val: any) => (
                    <S.ColorIcon className='color-icon' key={val.hex_value} color={val.hex_value} />
                  ))}
                </S.Color>
                <Title level={5}>{d.name}</Title>
                <p className='desc-box__short-desc'>{d.description.slice(0, 30)}</p>
                <span className='desc-box__consumer-price'>소비자 가격</span>
                <span className='desc-box__sale-price'>{d.price}</span>
                <span className='desc-box__discount'>할인 가격</span>
                <span className='desc-box__icon'>new</span>
              </div>
            </div>
          </S.Card>

        ))}
      </Slider>
    </S.ImageSlider>
  );
}
