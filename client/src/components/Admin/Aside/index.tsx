import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Icon, { IconType } from 'components/Icon/Icon';
import Link from 'next/link';
import { useRouter } from 'next/router';

const category = [
  {
    CategoryIcon: 'home',
    '홈': [] as any[],
  },
  {
    CategoryIcon: 'plus',
    '상품정보': [
      { label: '상품리스트', url: '/admin/products/list', target: '상품정보' },
      { label: '상품추가', url: '/admin/products/create', target: '상품정보' },
    ]
  },
  {
    CategoryIcon: 'cartAdd',
    '판매관리': [
      { label: '상품리스트', url: '/admin/products/list', target: '판매관리' },
      { label: '상품추가', url: '/admin/products/create', target: '판매관리' },
    ]
  },
  {
    CategoryIcon: 'menu2',
    '공지사항': [
      { label: '공지사항 관리', url: '/admin/notice', target: '공지사항' },
    ]
  },
]

const S = {
  Aside: styled.div`
    height: 100%;
    width: 250px;
    border:solid #dee2e6;
    border-width: 1px 1px 0 0;
    background-color: #fff;
    i{font-size: 0;}
    .item{
      min-height: 50px;
      display: flex;
      padding: 15px 10px 15px 15px;
      border-bottom: 1px solid #999;
      white-space: nowrap;
      .lists-category{
        margin-left: 20px;
        flex: 1;
        flex-direction: column;
        display: flex;
        &__title{
          display: flex;
          align-items: flex-end;
          font-size: 14px;
          justify-content: space-between;
          cursor: pointer;
          height: 20px;
          &--icon{
            transform: rotate(180deg);
            &[data-active=true] {
              transform: rotate(0deg);
              /* transition: all 0.3s ease; */
            }
          }
        }
        &__inner-list{
          display: none;
          li{
            width: 100%;
            margin-bottom: 5px;
            border-radius: 5px;
            font-size: 12px;
            color: #444;
            a{
              padding: 5px 0;
              padding-left: 5px;
              display: inline-block;
              height: 100%;
              width: 100%;
            }
            &:hover{
              background-color: #eff1f3;
              opacity: 1;
            }
          }
          &[data-active=true] {
            margin-top: 10px;
            display: block;
            transition: all 1s ease;
          }
        }
      }
    }

  `,
}

export default function Aside() {
  const [nameValue, setNameValue] = useState<string>('');
  const router = useRouter();

  const handleList = (e: React.MouseEvent<HTMLDivElement>) => {
    const { name } = (e.target as HTMLDivElement).dataset;
    if (name === '홈') router.push('/admin');
    if (name !== '홈') setNameValue(name);
  }

  return (
    <S.Aside>
      <ul>
        {category.map((d => (
          <li key={d.CategoryIcon} className='item'>
            <i>
              <Icon name={d.CategoryIcon as IconType} />
            </i>

            <div className='lists-category'>
              <div
                className='lists-category__title'
                data-name={Object.entries(d)?.[1]?.[0]}
                onClick={handleList}
              >
                {Object.entries(d)?.[1]?.[0]}
                {Object.entries(d)?.[1]?.[0] !== '홈' && (
                  <i className='lists-category__title--icon'
                    data-active={Object.entries(d)?.[1]?.[0] === nameValue}
                  >
                    <Icon name='arrowNoTailBottom' />
                  </i>
                )}
              </div>

              <ul
                className='lists-category__inner-list'
                data-active={Object.entries(d)?.[1]?.[0] === nameValue}
              >
                {Object.entries(d)?.[1]?.[1].length && Object.entries(d)?.[1]?.[1].map((d) => (
                  <li key={d.url} data-name={d.target}>
                    <Link href={d.url}>
                      <a >
                        {d.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        )))}
      </ul>
    </S.Aside>
  );
}
