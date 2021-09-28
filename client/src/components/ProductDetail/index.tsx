import React from 'react';
import styled from 'styled-components';
import Tap from 'components/ProductDetail/Tap';
import { IProduct } from 'interfaces/IProduct';
import { IReview } from 'interfaces/IReview';
import ProductInfo from 'components/ProductDetail/ProductInfo';
import ReviewBanner from 'components/ProductDetail/ReviewBanner';
import InfoTap from 'components/ProductDetail/Tap/InfoTap';
import ReviewListTap from 'components/ProductDetail/Tap/ReviewListTap';
import BuyInfoTap from 'components/ProductDetail/Tap/BuyInfoTap';
import { useQuery } from 'react-query';
import { queryKeys } from 'constants/queryKeys';
import { Get } from 'api';

interface IProductDetail {
  item: IProduct[];
}

const S = {
  ProductDetail: styled.section`
    padding: 10px;
    max-width: 900px;
    margin: 0 auto;
  `,
}

export default function ProductDetail({ item }: IProductDetail) {
  const fallback: Array<null> = [];
  const productId = item[0]._id;
  const { data: reviewData = fallback, isLoading, isSuccess, isError } = useQuery<IReview[]>([queryKeys.SEARCH, productId], async () => await Get.getProductReview(productId), {
    retry: 0,
    refetchOnWindowFocus: true,
    // staleTime: Infinity,
    // select: selectFc,
    // enabled: state.openSearch,
  });

  console.log('--------------: ', reviewData);
  return (
    <S.ProductDetail>
      <ProductInfo item={item} />
      <ReviewBanner reviewData={reviewData} />
      <Tap text={['상품정보', '상품 후기', '문의']} reviewCnt={reviewData.length}>
        <InfoTap />
        <ReviewListTap item={item} reviewData={reviewData}/>
        <BuyInfoTap />
      </Tap>
    </S.ProductDetail>
  )
}
