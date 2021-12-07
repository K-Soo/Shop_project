import React from "react";
import styled, { css } from "styled-components";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IProduct } from 'interfaces/IProduct';
import ProductCard from 'components/ProductCard';

interface IImageSlider {
  item: IProduct[]
}

const S = {
  ImageSlider: styled.div`
    margin: 0 auto;
  `,
};

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

export default function ImageSlider({ item }: IImageSlider) {

  return (
    <S.ImageSlider>
      <Slider {...settings}>
        {item.map((d: IProduct) => (
          <ProductCard 
            key={d._id}
            product_type={d.product_type}
            seq={d.seq}
            name={d.name} 
            description={d.description}
            product_price={d.product_price}
            consumer_price={d.consumer_price}
            imageUrl={d.imageUrl}
            product_colors={d.product_colors}
            best_product={d.best_product}
            new_product={d.new_product}
            isList={false}
          />
        ))}
      </Slider>
    </S.ImageSlider>
  );
}
