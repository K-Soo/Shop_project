import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Icon, { IconType } from 'components/Icon/Icon';
import Link from 'next/link';

interface IAside {

}

const S = {
  Aside: styled.div`
    height: 100%;
    width: 56px;
    &:hover{
      width: 240px;
      transition: all 0.5s ease;
      .category{
        font-size: 14px;
        transition: all 0.5s ease;
      }
    }
  `,
  Item: styled.li`
    min-height: 50px;
    padding: 15px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    cursor: pointer;
    &:hover{
      background-color: #F9F9F9;
    }
    .category{
      font-size: 0;
    }
  `,
}
const category = [
  {
    iconName: 'home',
    listName: '홈',
  },
  {
    iconName: 'plus',
    listName: '상품정보',
  },
  {
    iconName: 'cartAdd',
    listName: '고객정보',
  },
]

export default function Aside({ }: IAside) {
  const [showList, setShowList] = useState<boolean>(false);
  const [activeValue, setActiveValue] = useState<string>('');

  useEffect(() => {
    setShowList(true);
  }, [activeValue])

  const handleList = (e: React.MouseEvent<HTMLDivElement>) => {
    const { list } = (e.target as HTMLDivElement).dataset;
    setActiveValue(list);
    setShowList(!showList)
  }

  return (
    <S.Aside>
      <ul>
        {category.map((d) => (
          <S.Item key={d.iconName}>
            <Icon name={d.iconName as IconType} />
            <div className='wrapper'>
              <span className='category'>{d.listName}</span>
            </div>
          </S.Item>
        ))}
      </ul>
    </S.Aside>
  );
}
