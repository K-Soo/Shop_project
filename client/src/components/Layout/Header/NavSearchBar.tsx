import React, { useRef, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Icon from 'components/Icon/Icon';
import JSON_SEARCH from 'mock/MOCK_SEARCH.json';

interface INavSearchBar {
  className?: string;
  toggle: boolean;
  handleToggle: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

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
  wrapper: styled.div<{ toggle: boolean }>`
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
      // border-radius: 0px;
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
        right: 4%;
        font-size: 0;
        svg{
          width: 18px;
          height: 18px;
          &:hover{
          color: #EAEAEA;
        }
        }
      }
    }
    .search-data{
      border: 1px solid red;
      height: 200px;
      width: 100%;
      color: #222;
      overflow-y: scroll;
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
        svg{
          height: 18px;
          width: 18px;
        &:hover{
          color: #222;
        }
      }
    }
    }
  `,
}

const NavSearchBar: React.FC<INavSearchBar> = ({ className, handleToggle, toggle }) => {
  const InputFocus = useRef<HTMLInputElement | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  console.log('searchTerm: ', searchTerm);

  useEffect(() => {
    if (toggle) setTimeout(() => InputFocus.current?.focus(), 1000);
  }, [toggle]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('hh');
  };

  const data = JSON_SEARCH.filter((d) => {
    if(searchTerm === ""){
      return;
    }else if(d.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
      return d;
    }
  })
  return (
    <S.wrapper className={className} toggle={toggle}>
      <S.form toggle={toggle} onSubmit={handleSubmit}>
        <fieldset className='search-field'>
          <input className='search-area' ref={InputFocus} type='text' placeholder='...' onChange={(e) => setSearchTerm(e.target.value)} />
          <button className='search-btn' type='submit'>
            <Icon name='search' />
          </button>
        </fieldset>
        <fieldset className='search-data'>
          <div>
            {data && data.map(d => (
              <p key={d.id}>
                {d.first_name}
              </p>
            ))}
          </div>
        </fieldset>
        <fieldset className='bottom-field'>
          <button className='close-btn' type='button' onClick={handleToggle}>
            <Icon name='close' />
          </button>
        </fieldset>
      </S.form>
    </S.wrapper>
  )
};

export default NavSearchBar;
