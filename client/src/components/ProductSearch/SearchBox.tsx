import React from "react";
import styled from "styled-components";
import Select from 'components/style/Select';
import Input from 'components/style/Input';
import Button from 'components/style/Button';
import { useAppContext } from 'context/AppProvider';

interface ISearchBox {

}

const S = {
  SearchBox: styled.div`
    background-color: #f9f9f9;
    padding: 30px;
    display: flex;
  `,
}

export default function SearchBox({ }: ISearchBox) {
  const { action, state } = useAppContext();
  console.log('SearchBox: ', state.keyword);

  return (
    <S.SearchBox>
      <Select height='40'>
        <option value="">전체주문상태</option>
        <option value="">결제완료</option>
      </Select>
      <Select height='40'>
        <option value="">상품명</option>
      </Select>
      <Input name='keyword' value={state.keyword} onChange={action.setFormData} />
      <Button height='40' black>검색</Button>
    </S.SearchBox>
  );
}
