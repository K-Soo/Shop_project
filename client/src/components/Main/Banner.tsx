/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const S = {
  Banner: styled.article`
    font-size: 0;
    img{
      width: 100%;
    }
  `,
}

const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 3000,
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

export default function Banner() {
  return (
    <S.Banner>
      <img className='main-logo' src="/images/single-first.jpeg" alt='side_left_main_logo' />
    </S.Banner>
  );
}
