import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import { useAppContext } from 'context/AppProvider';
import useDidMountEffect from 'hooks/useDidMountEffect';
import Icon from 'components/Icon/Icon';
import { SEARCH_KEYWORD } from 'constants/keyword';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import useSearch from 'hooks/useSearch';

const InputStyle = css`
  all: unset;
  box-sizing: border-box;
  width:100%;
  padding-left: 20px;
  background-color: #636363;
  outline: none;
  border-radius: 20px;
  height: 30px;
  color: #fff;
  font-weight: normal;
  font-size: 14px;
  letter-spacing: 1px;
  opacity:0;
`;

const S = {
  NavSearchBar: styled.div<{ toggle: boolean }>`
    z-index: 10;
    position: absolute;
    visibility: hidden;
    border: 1px solid #e8e8e8;
    border-width: 0px 1px 1px 1px;
    width: 500px;
    height: 0px;
    top: 48px;
    right: 0;
    padding: 20px;
    background-color: #fff;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px; 
    ${props => props.toggle && css`
      visibility: visible;
      height: 200px;
      transition: all 0.5s ease;
    `}
    ${({ theme }) => theme.mobile`
      width: 0px;
      height: 80px;
      padding: 5px 10px 10px;
      left: 0;
      top: 0;
      ${(props: any) => props.toggle && css`
        width: 100%;
        height: 200px;
        transition: all 0.5s cubic-bezier(.32,2,.55,.27);
      `}
    `}
  `,
  form: styled.form<{ toggle: boolean }>`
    width: 100%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    .search-field{
      width: 100%;
      position: relative;
      display: flex;
      align-items : center;
      .search-area{
        ${InputStyle}
        ${props => props.toggle && css`
          opacity:1;
          transition: all 0.5s ease;
        `}
      }
      .search-btn{
        all: unset;
        position: absolute;
        right: 2%;
        font-size: 0;
        padding: 4px;
        border-radius: 50%;
        cursor: pointer;
        &:hover{
          svg{
            color: #fff;
          }
        }
      }
    }
    .search-data{
      box-sizing:border-box;
      height: 100%;
      width: 100%;
      color: #222;
      display: flex;
      flex-direction: column;
      &__keyword{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
        span{
          color: #444;
          letter-spacing: 0.5px;
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
        }
        ul{
          display: flex;
          white-space: nowrap;
          li{
            background-color: #f5f5f5;
            color: #666;
            font-size: 12px;
            padding: 5px 10px;
            border-radius: 10px;
            margin-left: 10px;
            cursor: pointer;
            &:hover{
              background-color: #636363;
              color: #f5f5f5;
            }
          }
        }
      }
      &--filtering{
        height: 100%;
        padding-left: 20px;
        a{
          display: block;
          padding: 5px 0;
          cursor: pointer;
          font-size: 12px;
          color: #666;
          &:hover{
            color: #000;
          }
        }

      }

    }
    .bottom-field{
      display: none;
      font-size: 0;
      ${({ theme }) => theme.mobile`
        display: block;
      `}
      .close-btn{ 
        all: unset;
        height: 18px;
        width: 18px;
        font-size: 0;
        cursor: pointer;
        svg{
          height: 18px;
          width: 18px;
          pointer-events: none;
          &:hover{
            color: #222;
          }
        }
      }
    }
  `,
}

export default function NavSearchBar() {
  const InputFocus = useRef<HTMLInputElement | null>(null);
  const { action, state } = useAppContext();
  const router: NextRouter = useRouter();

  const { FilteredData, isSuccess, isLoading, setFilter, filter } = useSearch();

  useDidMountEffect(() => {
    setFilter('');
    if (state.openSearch) {
      setTimeout(() => InputFocus.current?.focus(), 500);
    };
  }, [state.openSearch]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!filter.trim()) return
    setFilter('');
    router.push({
      pathname: '/product/search/',
      query: { keyword: filter },
    });
  };

  return (
    <S.NavSearchBar toggle={state.openSearch}>
      {isLoading && <div>Loading...</div>}
      {isSuccess && (
        <S.form toggle={state.openSearch} onSubmit={handleSubmit}>
          <fieldset className='search-field'>
            <input className='search-area' autoComplete='off' ref={InputFocus} name='keyword' value={filter} onChange={(e) => setFilter(e.target.value)} />
            <button className='search-btn' type='submit'>
              <Icon name='search' />
            </button>
          </fieldset>

          <fieldset className='search-data'>
            <div className='search-data__keyword'>
              <span>KEYWORD</span>
              <ul>
                {SEARCH_KEYWORD.map(d => (
                  <Link key={d.value} href={`/product/search?keyword=${d.value}`}>
                    <a >
                      <li key={d.value}>{d.label}</li>
                    </a>
                  </Link>
                ))}
              </ul>
            </div>
            <ul className='search-data--filtering'>
              {FilteredData.map(d => (
                <Link key={d._id} href={`/product/search?keyword=${d.name.trim()}`}>
                  <a >
                    <li >{d.name}</li>
                  </a>
                </Link>
              ))}
            </ul>
          </fieldset>

          <fieldset className='bottom-field'>
            <button className='close-btn' type='button' name='openSearch' onClick={action.setGlobalToggle}>
              <Icon name='close' />
            </button>
          </fieldset>
        </S.form>
      )}
    </S.NavSearchBar>
  )
};
