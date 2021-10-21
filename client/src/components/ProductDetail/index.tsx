import React, { useEffect, useState } from 'react';
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
import Rate from 'rc-rate';

interface IProductDetail {
  item: IProduct[];
}

const S = {
  ProductDetail: styled.section`
    padding: 10px;
    /* max-width: 900px; */
    margin: 0 auto;
  `,
}

export default function ProductDetail({ item }: IProductDetail) {
  const [userRate, setUserRate] = useState<number>(0);
  console.log('userRate: ', userRate);
  const [percentage, setPercentage] = useState<number>(0);
  const fallback: Array<null> = [];
  const productId = item[0]._id;
  const { data: reviewData = fallback, isLoading, isSuccess, isError } = useQuery<IReview[]>([queryKeys.REVIEW, productId], async () => await Get.getProductReview(productId), {
    retry: 0,
    refetchOnWindowFocus: true,
    // staleTime: Infinity,
    // select: selectFc,
    // enabled: state.openSearch,
  });

  useEffect(() => {
    const startCalc = reviewData.reduce((acc, cur, index, array) => {
      return acc + Number(cur.rate) / array.length;
    }, 0);

    const percentageCalc = reviewData.reduce((acc, cur, index, array) => {
      return Math.ceil(startCalc * 100 / 5);
    }, 0);

    setUserRate(startCalc);
    setPercentage(percentageCalc);
  }, [reviewData]);
  
  return (
    <S.ProductDetail>
      <ProductInfo item={item} />
      <ReviewBanner 
        isSuccess={isSuccess}
        isLoading={isLoading}
        reviewCnt={reviewData.length} 
        userRate={userRate} 
        percentage={percentage} 
      />
      <Tap text={['상품정보', '상품 후기', '문의']} reviewCnt={reviewData.length}>
        <InfoTap />
        <ReviewListTap item={item} reviewData={reviewData} />
        <BuyInfoTap />
      </Tap>
    </S.ProductDetail>
  )
}
