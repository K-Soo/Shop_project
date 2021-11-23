/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled, { css } from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Icon from 'components/Icon/Icon';
interface IBestPickSlider {

}

const S = {
  BestPickSlider: styled.div`
    position: relative;
    &:hover {
      background: rgba(21, 13, 12, 0.6);
      .arrow{
        visibility: visible;
        opacity: 1;
        transition: all .3s ease;
      }
    }
    .item-card{
     height: 100%;
     img{
       width: 100%;
       height: 475px;
      }
    }
  `,
  Arrow: styled.div<{ prev?: boolean, next?: boolean }>`
    ${props =>
      props.prev &&
      css`
      left: 10px;
    `}
    ${props =>
      props.next &&
      css`
      right: 10px;
    `}
    position: absolute;
    top: 50%;
    visibility: hidden;
    opacity: 0;
    cursor: pointer;
    /* font-size: 60px; */
    height: 60px;
    width: 40px;
    border-radius: 5px;
    line-height: 85px;
    vertical-align: middle;
    transform: translateY(-50%);
    color: #fff;
    background: rgba(21, 13, 12, 0.6);
    z-index: 3;
    i{
      display: inline-block;
      height: 100%;
      width: 100%;
      font-size: 0;
      text-align: center;
    }
  `,
}



const NextArrow = (props: any) => {
  const { onClick } = props;

  return (
    <S.Arrow className='arrow' next onClick={onClick}>
      <i><Icon name='arrowRight' /></i>
    </S.Arrow>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <S.Arrow className='arrow' prev onClick={onClick}>
        <i><Icon name='arrowLeft2' /></i>
    </S.Arrow>
  );
};

const settings = {
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  cssEase: 'linear',
};

export default function BestPickSlider({ }: IBestPickSlider) {

  return (
    <S.BestPickSlider>
      <Slider {...settings}>
        <div className='item-card'>
          <img src="/images/best_pick/slider/item1.jpeg" alt='best_pick1' />
        </div>
        <div className='item-card'>
          <img src="/images/best_pick/slider/item2.jpeg" alt='best_pick2' />
        </div>
        <div className='item-card'>
          <img src="/images/best_pick/slider/item3.jpeg" alt='best_pick3' />
        </div>
        <div className='item-card'>
          <img src="/images/best_pick/slider/item4.jpeg" alt='best_pick4' />
        </div>
      </Slider>
    </S.BestPickSlider>
  );
}
