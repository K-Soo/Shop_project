/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled, { css } from 'styled-components';
import Title from 'components/style/Title';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Icon from 'components/Icon/Icon';
import BestPickSlider from 'components/Main/BestPickSlider';

interface IBestPick {
  
}

const S = {
  BestPick: styled.div`
    margin: 30px 0;
    font-size: 0;
    display: flex;
    img{
      /* width: 100%;
      height: auto;
      object-fit: contain; */
    }
    .categories{
      flex: 1 1 60%;
      margin-right: 15px;
      ${Title}{
        font-size: 50px;
        height: 60px;
        color: #61499a;
      }
      &__image-box{
        .top-box{
          display: flex;
          justify-content: flex-start;
          .diamond{
            /* width: 100%; */
            height: 200px;
            object-fit: contain;
          }
        }
        .bottom-box{
          margin-top: 15px;
          height: 200px;
          img{
            height: 100%;
            width: 100%;
          }
        }
      }
    }
    .slider{
      width: 300px;
    }
  `,
}

export default function BestPick({ }: IBestPick) {
  return (
    <S.BestPick>
      <div className='categories'>
        <Title level={1} textAlign='left'>BEST PICK</Title>
        <div className='categories__image-box'>
          <div className='top-box'>
            <img className='diamond' src="/images/best_pick/pick1.jpeg" alt='' />
          </div>
          <div className='bottom-box'>
            <img className='ring' src="/images/best_pick/pick3.jpeg" alt='' />
          </div>
        </div>
      </div>

      <div className='slider'>
        <BestPickSlider />
      </div>
    </S.BestPick>
  );
}
