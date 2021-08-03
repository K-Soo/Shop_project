import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useScroll } from 'hooks/useScroll';
import Icon from 'components/Icon/Icon';
interface IQuickScroll {
  className?: string;
}

const S = {
  Wrapper: styled.div<{ scrollActive: boolean }>`
    position: fixed;
    bottom: 5%;
    right: -10%;
    ${props => props.scrollActive &&`
      right: 1%;
      transition: all .5s ease;
    `}
    ul{
      li{
        font-size: 0;
        &:first-child{
          margin-bottom: 10px;
        }
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
    if (scrollY > 0) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  }, [scrollY])

  return (
    <S.Wrapper className={className} scrollActive={scrollActive}>
      <ul>
        <li>
          <Icon name='arrowTop' />
        </li>
        <li>
          <Icon name='arrowBottom' />
        </li>
      </ul>
    </S.Wrapper>
  )
};

export default QuickScroll;
