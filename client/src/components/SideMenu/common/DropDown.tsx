import React, { useState } from 'react';
import styled from 'styled-components';
import Link from "next/link";
import Icon from 'components/Icon/Icon';
import { CSSTransition } from 'react-transition-group';
import {DROPDOWN_CATEGORY} from '../../../../utils/constants/dropdown';
import Title from 'components/style/Title';

interface IDropDownItem {
  leftIcon?: any;
  rightIcon?: any;
  goToMenu?: string;
  children?: React.ReactNode;
}

const S = {
  DropDown: styled.div<{ menuHeight: string | null }>`
  color: #fff;
  height: ${props => props.menuHeight};
  transition: height 0.5s, transform 0.5s ease;
  overflow: hidden;
  //Main
  .menu-primary-enter{
    transform: translateX(-110%);
  }
  .menu-primary-enter-active{
    transform: translateX(0%);
    transition: all .5s ease;
  }
  .menu-primary-exit{
    position: absolute;
  }
  .menu-primary-exit-active{
    overflow: hidden;
    transform: translateX(-110%);
    transition: all .5s ease;
  }

  //secondary
  .menu-secondary-enter{
    transform: translateX(110%);
  }
  .menu-secondary-enter-active{
    transform: translateX(0%);
    transition: all .5s ease;
  }
  .menu-secondary-exit{
  }
  .menu-secondary-exit-active{
    transform: translateX(110%);
    transition: all .5s ease;
  }
  `,
  DropDownItem: styled.li`
    height: 30px;
    font-size: 12px;
    display: flex;
    align-items: center;
    padding:0 10px;
    cursor: pointer;
    border-bottom: 1px solid #e8e8e8;
    color: #555;
    &:hover{
      background-color: #fafafa;
    }
    .icon-right {
      margin-left: auto;
      svg{
        width: 18px;
        height: 18px;
        &:hover{
          color: crimson;
          transform: scale(1.1);
          transition: transform 0.1s ease;
        }
      }
    }
    .icon-left {
      margin-right: 5px;
      font-size: 0;
      svg{
        width: 18px;
        height: 18px;
      }
    }
  `,
}
export default function DropDown () {
  const [activeMenu, setActiveMenu] = useState<string>('main');
  const [menuHeight, setMenuHeight] = useState<string | null>(null);

  function calcHeight(el: any) {
    const height = `${el.offsetHeight}px`;
    setMenuHeight(height);
  }

  function DropDownItem({ leftIcon, rightIcon, goToMenu, children }: IDropDownItem) {
    return (
      <S.DropDownItem onClick={() => goToMenu && setActiveMenu(goToMenu)}>
        {leftIcon && <span className='icon-left'>{leftIcon}</span>}
        {children}
        {rightIcon && <span className='icon-right'>{rightIcon}</span>}
      </S.DropDownItem>
    )
  }

  return (
    <S.DropDown menuHeight={menuHeight}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        unmountOnExit
        classNames='menu-primary'
        onEnter={calcHeight}
      >
        <ul className='menu'>
          <Title level={6} size='14'  color='#555'>
            카테고리
          </Title>
          {DROPDOWN_CATEGORY.map((d) => (
          <>
            <DropDownItem 
              key={d.label}
              leftIcon={<Icon name={d.leftIcon} />} 
              rightIcon={<Icon name={d.rightIcon} />} 
              goToMenu={d.goToMenu}
            >
                {d.label}
              </DropDownItem>
          </>
          ))}
        </ul>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'necklace'}
        timeout={500}
        unmountOnExit
        classNames='menu-secondary'
        onEnter={calcHeight}>
        <ul className='menu'>
          <DropDownItem goToMenu='main' leftIcon={<Icon name='arrowLeft' />}>메인으로</DropDownItem>
          <DropDownItem >necklace</DropDownItem>
          <DropDownItem >necklace</DropDownItem>
        </ul>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'earring'}
        timeout={500}
        unmountOnExit
        classNames='menu-secondary'
        onEnter={calcHeight}>
        <ul className='menu'>
          <DropDownItem goToMenu='main' leftIcon={<Icon name='arrowLeft' />}>메인으로</DropDownItem>
          <DropDownItem >earring</DropDownItem>
          <DropDownItem >earring</DropDownItem>
        </ul>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'ring'}
        timeout={500}
        unmountOnExit
        classNames='menu-secondary'
        onEnter={calcHeight}>
        <ul className='menu'>
          <DropDownItem goToMenu='main' leftIcon={<Icon name='arrowLeft' />}>메인으로</DropDownItem>
          <DropDownItem >ring</DropDownItem>
          <DropDownItem >ring</DropDownItem>
        </ul>
      </CSSTransition>
    </S.DropDown>
  )
};



