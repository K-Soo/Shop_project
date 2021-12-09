import React, { useEffect, useState, useCallback,SetStateAction } from 'react';
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
import { useAppContext } from 'context/AppProvider';
import SelectFilter from 'components/ProductDetail/Tap/ReviewListTap/SelectFilter';

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
  const App = useAppContext();
  const productId = item[0]._id;
  const currentPage = Number(App.state.pagination.currentPage);
  const [sortKey, setSortKey] = useState('createdAt');
  const [sortValue, setSortValue] = useState(-1);

  const { data: reviewData, isLoading, isSuccess, isError, isFetching } = useQuery<IReview>([queryKeys.REVIEW.name, productId, currentPage, queryKeys.REVIEW.limit, sortKey, sortValue],
    async () => await Get.getProductReview(productId, currentPage, queryKeys.REVIEW.limit, sortKey, sortValue),
    {
      retry: 0,
      keepPreviousData: true,
    });

  const handleFiltered = (e:React.ChangeEvent<HTMLSelectElement>) => {
    const { value, selectedOptions } = e.target
    const name = selectedOptions[0].getAttribute('data-name');
    setSortKey(name);
    setSortValue(Number(value));
  }

  return (
    <S.ProductDetail>
      <ProductInfo item={item} />
      <ReviewBanner
        isSuccess={isSuccess}
        isLoading={isLoading}
        reviewCnt={reviewData && reviewData.reviewCnt}
        userRate={reviewData && reviewData.totalRate}
        percentage={reviewData && reviewData.totalPercentage}
      />
      <Tap text={['상품정보', '상품 후기', '문의']} reviewCnt={reviewData && reviewData.reviewC1nt}>
        <InfoTap />
        <ReviewListTap
          isSuccess={isSuccess}
          isLoading={isLoading}
          isFetching={isFetching}
          item={item}
          items={reviewData && reviewData.items}
          maxPages={reviewData && reviewData.maxPages}
        >
          <SelectFilter
            reviewCnt={reviewData && reviewData.reviewCnt}
            totalImageReview={reviewData && reviewData.totalImageReview}
            handleFiltered={handleFiltered}
          />
        </ReviewListTap>
        <BuyInfoTap />
      </Tap>
    </S.ProductDetail>
  )
}
