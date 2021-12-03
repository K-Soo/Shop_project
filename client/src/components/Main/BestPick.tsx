/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled, { css } from 'styled-components';
import Title from 'components/style/Title';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import {COLLECTION} from 'constants/main';
import BestPickSlider from 'components/Main/BestPickSlider';

const S = {
  BestPick: styled.div`
    margin: 30px 0;
    font-size: 0;
    ${Title}{
      font-size: 50px;
      height: 60px;
      color: #61499a;
    }
      .image-box{
        .list{
          display: flex;
          flex-wrap: wrap;
          &__item{
            flex: 1 1 20%;
            position: relative;
            margin: 10px;
            min-width: 150px;
            border: 1px solid #999;
            cursor: pointer;
            overflow: hidden;
            dl{
              position: absolute;
              width: 100%;
              font-size: 14px;
              text-align: center;
              bottom: 0;
              color: #333;
              background-color: #f5f5f5;
              opacity: 0.7;
              padding: 10px;
              dt{
                margin-bottom: 3px;
                font-size: 16px;
                font-weight: 500;
              }
            }
            img{
              width: 100%;
              height: 100%;
              &:hover{
                transform: scale(1.1);
                transition: all 0.3s ease;
              }
            }
            ${props => props.theme.tablet`
              flex: 1 1 35%;
            `};
            ${({theme}) => theme.mobile`
              flex: 1 1 35%;
              dl{
                font-size: 12px;
                dt{
                  font-size: 14px;
                }
              }
            `};
        }
      }
    }
    .slider{
      max-width: 350px;
      min-width: 300px;
      border: 1px solid red;
      /* display: block; */
      ${props => props.theme.mobile`
        // display: none;
      `}
    }
  `,
}

export default function BestPick() {
  return (
    <S.BestPick>
      <Title level={1} textAlign='left'>BEST PICK</Title>
      <div className='image-box'>
        <ul className='list'>
          {COLLECTION.map(d => (
            <li className='list__item' key={d.label}>
              <Link href={d.url}>
                <a>
                  <img className='diamond' src={d.src} alt='' />
                  <dl>
                    <dt>{d.title}</dt>
                    <dd>{d.desc}</dd>
                  </dl>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className='slider'>
        <BestPickSlider />
      </div> */}
    </S.BestPick>
  );
}
