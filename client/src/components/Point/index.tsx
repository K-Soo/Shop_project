import React from "react";
import styled from "styled-components";
import PageTitle from 'components/Common/PageTitle';
import FormFieldset from 'components/Forms/FormFieldset';
import List from 'components/Point/List';

const S = {
  Point: styled.div`
  `,
}

export default function Point() {
  return (
    <S.Point>
      <PageTitle TitleText='적립금' />
      <FormFieldset title='사용 가능한 적립금'>
        <List/>
      </FormFieldset>
    </S.Point>
  );
}
