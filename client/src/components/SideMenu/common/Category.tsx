import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PRODUCT, CategoryEnum } from 'constants/product';
import { useAppContext } from 'context/AppProvider';
import { useRouter } from 'next/router';

const S = {
  Category: styled.div`
    .category-list{
      &__item{
        border-bottom: 1px solid #f5f5f5;
        width: 100%;
        color: #555;
        line-height: 30px;
        font-size: 11px;
        &--wrapper{
          cursor: pointer;
          .list-icon{
            display: inline-block;
            font-size: 14px;
            padding-right: 5px;
            pointer-events: none;
          }
          .name{
            pointer-events: none;
          }
        }
        .inner-list{
          margin: 0 10px;
          color: #333;
          display: none;
          &[data-active=true] {
            display: block;
            transition: all 1s ease;
          }
          &__detail-item{
            font-size: 11px;
            height: 30px;
            line-height: 30px;
            cursor: pointer;
            &:hover{
              background-color: #f9f9f9;
            }
            &::before{
              content:'・';
              padding-right: 10px;
            }
          }
        }
      }
    }
  `,
}
const initNameValue = { target: '', disable: false };

export default function Category() {
  const [nameValue, setNameValue] = useState<{ target: string, disable: boolean }>(initNameValue);
  const { action, state } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    setNameValue(initNameValue);
  }, [state.openSideMenu]);

  const handleCategory = (e: React.MouseEvent<HTMLDivElement>) => {
    const { category } = (e.target as HTMLDivElement).dataset;
    setNameValue(prev => ({
      ...prev,
      target: category,
      disable: prev.target === category ? !nameValue.disable : true,
    }));
  }

  const handleCategoryDetailTypes = (e: React.MouseEvent<HTMLLIElement>) => {
    action.setCategory(e);
    const { name } = (e.target as HTMLLIElement).dataset;
    router.push({
      pathname: `/product/${nameValue.target}`,
      query: { detail: name },
    });
  }

  return (
    <S.Category>
      <ul className='category-list'>
        {Object.entries(PRODUCT).map(d => (
          <li key={d[0]} className='category-list__item'>
            <div
              className='category-list__item--wrapper'
              data-category={d[0]}
              onClick={handleCategory}
            >
              {d[0] === nameValue.target ? <span className='list-icon'>+</span> : <span className='list-icon'>-</span>}
              <span className='name'>{CategoryEnum[d[0]]}</span>
            </div>

            <ul
              className='inner-list'
              data-active={d[0] === nameValue.target && nameValue.disable}
            >
              {d[1].map(d => (
                <li key={d.label}
                  onClick={handleCategoryDetailTypes}
                  data-name={d.label}
                  className='inner-list__detail-item'>
                  {d.label}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </S.Category>
  );
}
