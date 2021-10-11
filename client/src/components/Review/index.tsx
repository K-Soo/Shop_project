import React from "react";
import styled from "styled-components";
import PageTitle from 'components/Common/PageTitle';
import ProductInfo from 'components/Review/ProductInfo';
import { useReviewContext } from 'context/ReviewProvider';
import Form from 'components/Review/Form';


interface IReview {

}

const S = {
  Review: styled.div`
  `,
}

export default function Review({ }: IReview) {
  const Review = useReviewContext();
  
  return (
    <S.Review>
      <PageTitle TitleText='포토리뷰' />
      {Review.state.product.length > 0 && (
        <ProductInfo />
      )}
      <Form />
    </S.Review>
  );
}
