import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import Button from 'components/style/Button';
import { MY_SHOP_MENU } from 'constants/myshop';
import Icon, { IconType } from 'components/Icon/Icon';
import Link from 'next/link';
import { useAppContext } from 'context/AppProvider';
interface IMyShopMenuBar {

}

const S = {
  MyShopMenuBar: styled.div<{ toggle: boolean }>`
    background-color: #fff;
    position: fixed;
    visibility: hidden;
    opacity: 0;
    top: 40px;
    width: 450px;
    height: auto;
    padding: 15px;
    border: solid #f0f0f0;
    border-width: 0 1px 1px 1px;
    z-index: 99999;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px; 
    ${(props: any) => props.toggle && css`
      visibility: visible;
      opacity: 1;
      transition: all 0.3s ease;
    `}
    .top-box{
      display: none;
      justify-content: flex-end;
      font-size: 0;
      margin-bottom: 10px;
    }
    .auth-box{
      display: none;
      &__users{
        display: flex;
        margin-bottom: 10px;
      }
      button{
        height: 30px;
        font-size: 12px;
      }
    }
    .myshop__list{
      margin-top: 10px;
      overflow-y: scroll;
      max-height: 200px;
      &--item{
        &:hover{
          svg{
            color: #555;
          }
        }
        display: flex;
        align-items: center;
        padding: 15px;
        border-bottom: 1px solid #f0f0f0;
        .icon{
          margin-right: 10px;
        }
        .desc{
          flex: 1;
          color: #555;
          &--title{
            font-weight: 600;
            font-size: 14px;
          }
          &--explanation{
            font-weight: 400;
          }
        }
        .arrow{
          font-size: 0;
          margin-left: 10px;
        }
      }
    }
    .button-box{
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      i{
        display: block;
        font-size: 0;
        cursor:pointer;
        svg{
          color: #555555;
        }
      }
    }
    ${({ theme }) => theme.mobile`
      margin: 0 auto;
      width: 100%;
      height: 100vh;
      .top-box{
        display: flex;
      }
      .auth-box{
        display: block;
      }
      .myshop__list{
        max-height: none;
        overflow-y: hidden;
        &--item{
        padding: 20px 15px;
        .desc{
          &--title{
            font-size: 12px;
          }
        &--explanation{
            font-size: 11px;
          }
        }
        .arrow{
          display: none;
        }
      }
        }
      .button-box{
        display: none;
      }
    `}
  `,
}

export default function MyShopMenuBar({ }: IMyShopMenuBar) {
  const { action, state } = useAppContext();

  return (
    <S.MyShopMenuBar toggle={state.openMyShop}>
      <div className='top-box'>
        <i data-name='openMyShop' onClick={action.setGlobalToggle}><Icon name='close' /></i>
      </div>


      <div className='auth-box'>
        <div className='auth-box__users'>
          <Button black>
            <Link href='/auth/login'>
              <a>
                로그인
              </a>
            </Link>
          </Button>
          <Button white>
            <Link href='/auth/register'>
              <a>
                회원가입
              </a>
            </Link>
          </Button>
        </div>
        <Button black>마이쇼핑 바로가기</Button>
      </div>

      <ul className='myshop__list'>
        {MY_SHOP_MENU.map(d => (
          <li key={d.label} >
            <Link href={d.url}>
              <a className='myshop__list--item'>
                <div className='icon'>
                  <i><Icon name={d.icon as IconType} /></i>
                </div>
                <div className='desc'>
                  <span className='desc--title'>{d.label}</span>
                  <p className='desc--explanation'>{d.value}</p>
                </div>
                <div className='arrow'>
                  <i><Icon name='arrowRight' /></i>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <div className='button-box'>
        <i data-name='openMyShop' onClick={action.setGlobalToggle}><Icon name='close' /></i>
        <Button black height='30px' fontSize='14' width='200'>마이쇼핑 전체보기</Button>
      </div>
    </S.MyShopMenuBar>
  );
}
