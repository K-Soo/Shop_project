import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Select from 'components/style/Select';
import Input from 'components/style/Input';
import Button from 'components/style/Button';
import { NextRouter, useRouter } from 'next/router';
import { IUseSearch } from 'hooks/useSearch';

type TSearchBox = Pick<IUseSearch, 'setFilter' | 'filter'>

const S = {
  SearchBox: styled.article`
    background-color: #f9f9f9;
    padding: 30px;
    display: flex;
    font-size: 14px;
    .select-box{
      flex: 1 40%;
      min-width: 270px;
      display: flex;
      select{
        margin-right: 10px;
      }
    }
    .search-box{
      flex: 1 60%;
      display: flex;
      input{
        flex: 1 70%;
        height: 40px;
        margin-right: 10px;
        font-size: 14px;
      }
      button{
        flex: 1 30%;
        font-size: 14px;
      }
    }
    ${({ theme }) => theme.mobile`
      padding: 15px;
      flex-direction: column;
      .select-box{
        margin-bottom: 15px;
        height: 40px;
        select:nth-child(2){
          margin-right: 0;
        }
        select{
          height: 30px;
        }
      }
      .search-box{
        input{
          height: 30px;
        }
      }
    }
  `}
  `,
}

export default function SearchBox({ setFilter }: TSearchBox) {
  const router: NextRouter = useRouter();
  const [text, setText] = useState<string>('');

  useEffect(() => {
    const { keyword } = router.query as any;
    setText(keyword);
  }, [router.query]);

  const handleClick = useCallback(() => {
    setFilter(text);
  }, [setFilter, text]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter') handleClick();
  }, [text, handleClick]);

  return (
    <S.SearchBox>
      <div className='select-box'>
        <Select height='40'>
          <option value="">상품 분류선택</option>
          <option value="">목걸이</option>
          <option value="">귀걸이</option>
          <option value="">반지</option>
          <option value="">팔찌</option>
          <option value="">순금</option>
          <option value="">다이아몬드</option>
          <option value="">커플링</option>
        </Select>
        <Select height='40'>
          <option value="">상품명</option>
        </Select>
      </div>
      <div className='search-box'>
        <Input value={text} onKeyPress={handleKeyPress} onChange={(e) => setText(e.target.value)} />
        <Button onClick={handleClick} height='40' black>검색</Button>
      </div>
    </S.SearchBox>
  );
}
