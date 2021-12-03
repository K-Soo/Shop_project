import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Icon, { IconType } from 'components/Icon/Icon';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAdminContext } from 'context/AdminProvider';

const category = [
  {
    CategoryIcon: 'home',
    '홈': [] as any[],
  },
  {
    CategoryIcon: 'plus',
    '상품정보': [
      { label: '상품추가', url: '/admin/products/create', target: '상품정보' },
    ]
  },
  {
    CategoryIcon: 'cartAdd',
    '판매관리': [
      { label: '상품리스트', url: '/admin/products/list', target: '판매관리' },
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
  Aside: styled.div<{ isWhite: boolean }>`
    height: 100%;
    width: 100%;
    i{font-size: 0;}
    .item{
      min-height: 50px;
      display: flex;
      padding: 15px 10px 15px 15px;
      white-space: nowrap;
      cursor: pointer;
      &__main-icon{
        font-size: 0;
        svg{
          color: #475669;
        }
      }
      .lists-category{
        margin-left: 20px;
        flex: 1;
        flex-direction: column;
        display: flex;
        pointer-events: none;
        &__title{
          display: flex;
          align-items: flex-end;
          font-size: 14px;
          justify-content: space-between;
          cursor: pointer;
          height: 20px;
          color: #475669;
          font-weight: 600;
          &--icon{
            transform: rotate(180deg);
            min-height: 22px;
            svg{
              width: 14px;
              height: 14px;
              font-size: 0;
            }
            &[data-active=true] {
              transform: rotate(0deg);
              transition: all 0.3s ease;
            }
          }
        }
        &__inner-list{
          visibility: hidden;
          opacity: 0;
          pointer-events: all;
          height: 0px;
          li{
            width: 100%;
            margin-bottom: 5px;
            border-radius: 5px;
            font-size: 13px;
            color: #444;
            a{
              padding: 5px 0;
              padding-left: 5px;
              display: inline-block;
              width: 100%;
            }
            &:hover{
              background-color: ${props => props.isWhite ? '#eff1f3' : '#131C2D'};
              color: #000;
              opacity: 1;
            }
          }
          &[data-active=true] {
            margin-top: 10px;
            visibility: visible;
            height: 100%;
            opacity: 1;
            transition: all 0.3s ease;
          }
        }
      }
    }

  `,
}

export default function Aside() {
  const [nameValue, setNameValue] = useState<string>('');
  const router = useRouter();
  const { state } = useAdminContext();

  const handleList = (e: React.MouseEvent<HTMLLIElement>) => {
    const { name } = (e.target as HTMLLIElement).dataset;
    if (name === '홈') router.push('/admin');
    if (name !== '홈') setNameValue(name);
  }

  return (
    <S.Aside isWhite={state.isWhite}>
      <ul>
        {category.map((d => (
          <li
            key={d.CategoryIcon}
            className='item'
            data-name={Object.entries(d)?.[1]?.[0]}
            onClick={handleList}
          >
            <i className='item__main-icon'>
              <Icon name={d.CategoryIcon as IconType} />
            </i>

            <div className='lists-category'>
              <div
                className='lists-category__title'
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
                {Object.entries(d)?.[1]?.[1].length && Object.entries(d)?.[1]?.[1].map((d:any) => (
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
