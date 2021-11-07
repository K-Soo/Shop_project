import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useScroll } from 'hooks/useScroll';
import Icon from 'components/Icon/Icon';
import Link from 'next/link';

interface IQuickScroll {
  className?: string;
}

const S = {
  Wrapper: styled.div<{ scrollActive: boolean }>`
    position: fixed;
    bottom: 5%;
    right: -10%;
    font-size: 0px;
    cursor: pointer;
    ${props => props.scrollActive && `
      right: 3%;
      transition: all .5s ease;
    `}
    ul{
      li{
        svg{
          width: 30px;
          height: 30px;
          &:hover{
            opacity: 0.7;
            color: rgb(59, 59, 59)
          }
        }
      }
    }
  `,
}

const QuickScroll: React.FC<IQuickScroll> = ({ className }) => {
  const [scrollActive, setScrollActive] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (scrollY > 100) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  }, [scrollY])


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <S.Wrapper className={className} scrollActive={scrollActive}>
      <ul>
        <li onClick={scrollToTop}>
          <Icon name='arrowTop' />
        </li>
      </ul>
    </S.Wrapper>
  )
};

export default QuickScroll;
