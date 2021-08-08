import React, { useContext, useState } from "react";
import styled, { css } from 'styled-components';
import { AppContext } from 'pages/_app';
import Image from "next/image";
import DarkBackground from 'components/Common/DarkBackground';
import CloseButton from 'components/style/CloseButton';
import Button from 'components/style/Button';
import Icon from 'components/Icon/Icon';
import {ACCOUNT_INFO} from '../../../utils/constants/footer';
interface ILeftSide {
  className?: string;
  directionSwap: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const S = {
  LeftSide: styled.nav<{ openSideMenu: boolean, directionSwap: boolean }>`
    border: 2px solid #000;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 70%;
    padding: 20px;
    visibility: ${props => props.openSideMenu && props.directionSwap ? 'visible' : 'hidden'};
    background-color: #fff;
    ${(props) => props.openSideMenu && props.directionSwap ? css`
      transform: translateX(0%);
      transition: all 0.5s ease;` : css`
      transform: translateX(-100%);
      transition: all 0.5s ease;
    `}
  `,
  Container: styled.div`
    height: 100%;
  `,
  Panel: styled.div`
    font-size: 0;
    border: 1px solid red;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
    .swap{
      position: relative;
      border: 1px solid #eaeaea;
      border-radius: 10px;
      font-size: 11px;
      padding: 3px;
      span{
        position: absolute;
        top: 0;
        top: 50%;
        transform: translateY(-50%);
        /* left: 50%; */
        right: 50%;
        display: inline-block;
        border: 1px solid #000;
        width: 50px;
        height: 15px;
        border-radius: 10px;
        /* transform: translateX(100%) */
      }
      button{
        color: #fff;
        all: unset;
        width: 50px;
        height: 15px;
        line-height: 17px;
        text-align: center;
      }
    }
  `,
  Banner: styled.div`
  img{
  }
  `,
  Top: styled.div`
    display: flex;
    justify-content: space-between;
    button{
      width: 48%;
    }
  `,
  Nav: styled.nav`
    border: 1px solid red;
    margin: 10px 0;
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        flex-basis: 25%;
        border: 2px solid #000;
        text-align: center;
        padding: 10px 0;
        span{
          display:inline-block;
          width: 100%;
          font-size: 12px;
          border: 1px solid red;
        }
      }
    }
  
  `,
  Bottom: styled.div`
    border: 1px solid red;
  `,
  Info: styled.div<{ text: string }>`
    margin: 20px 0;
  .info-category{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    li{
      text-align: center;
      flex-basis: 50%;
      font-size: 14px;
      padding: 5px 0;
      font-size: 13px;
    }
    .customer{
      border: solid #666;
      border-width: ${props => props.text === 'customer' ? '1px 1px 0 1px' : '0 0 1px 0'};
    }
    .account{
      border: solid #666;
      border-width: ${props => props.text === 'account' ? '1px 1px 0 1px' : '0 0 1px 0'};
    }
  }
  .info-desc{
    font-size: 12px;
    color: #444;
    p{
      margin-bottom: 5px;
    }
    p:last-child{
      margin-bottom: 0px;
    }
  }
  `,
  Copyright: styled.div`
    font-size: 11px;
  `,
}
const Category = [
  { label: '상품문의', value: '1', icon: 'bed' },
  { label: '상품후기', value: 's2am' },
  { label: '공지사항', value: 'sa3m' },
  { label: '고객센터', value: 'sam4' },
  { label: '마이쇼핑', value: 'sam5' },
  { label: '키작남 어플', value: 'sam6' },
  { label: '장바구니', value: 'sam7' },
  { label: '배송조회', value: 'sdam7' },
]

const LeftSide: React.FC<ILeftSide> = ({ className, directionSwap, onClick }) => {
  console.log('onClick: ', onClick);
  const [text, setText] = useState<string>('customer')
  console.log('text: ', text);
  const global = useContext(AppContext);

  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  const handleText = (e:any) => {
    const { className } = e.target;
    setText(className);
  }

  return (
    <S.LeftSide className={className} openSideMenu={global.state.openSideMenu} directionSwap={directionSwap}>
      <S.Container>
        <S.Panel>
          <div className='swap'>
            <span className='swap-slider'/>
            <button onClick={onClick}>SHOP</button>
            <button onClick={onClick}>CART</button>
          </div>
          <CloseButton onClick={global.action.setToggle} />
        </S.Panel>
        <S.Banner>
          {/* <img src="http://placehold.it/250x100" alt='1' /> */}
          {/* <Image src="http://placehold.it" width={100} height={200}/> */}
        </S.Banner>
        <S.Top>
          <Button login height='35px' fontSize='12px'>로그인</Button>
          <Button height='25' fontSize='12px'>회원가입</Button>
        </S.Top>
        <S.Nav>
          <ul>
            {Category.map((d) => (
              <li key={d.value}>
                <Icon name='bed' />
                <span>{d.label}</span>
              </li>
            ))}
          </ul>
        </S.Nav>
        <S.Bottom>
          bottom
        </S.Bottom>
        <S.Info text={text}>
          <ul className='info-category'>
            <li onClick={handleText} className='customer'>고객센터</li>
            <li onClick={handleText} className='account'>계좌정보</li>
          </ul>
          <div className='info-desc'>
            {text === 'customer' ? (
              <div>
                <p>월요일 - 금요일 10:00 - 17:00</p>
                <p>점심시간 13:00 - 14:00</p>
                <p>[주말/공휴일휴무]</p>
              </div>
            ) : (
              <div>
                {ACCOUNT_INFO.map(d => (
                  <p key={d.label}>{d.label} : {d.value}</p>
                ))}
              </div>
            )}
          </div>
        </S.Info>
        <S.Copyright>
          <p>
            Copyright &copy; <span>{thisYear()}</span> Shop Co. All rights reserved.
          </p>
        </S.Copyright>
      </S.Container>
    </S.LeftSide>
  )
};

export default styled(LeftSide)`

`;