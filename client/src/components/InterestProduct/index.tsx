import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import Image from 'next/image';
import { useRouter, NextRouter } from 'next/router';
import { IBasketItem } from 'interfaces/IProduct';
import Button from 'components/style/Button';
import Icon from 'components/Icon/Icon';
import Title from 'components/style/Title';
import Input from 'components/style/Input';
import { useAppContext } from 'context/AppProvider';
import { PriceComma } from 'utils';
import CheckBox from 'components/style/CheckBox';
import TextIcon from 'components/Common/TextIcon';
import Link from 'next/link';
import PageTitle from 'components/Common/PageTitle';
import FormFieldset from 'components/Forms/FormFieldset';
import List from 'components/InterestProduct/List';
import { useQuery, UseQueryResult, useQueryClient } from 'react-query';
import { queryKeys } from 'constants/queryKeys';
import { Get,Delete } from "api";

const S = {
  ProductList: styled.section`
  `,
}

export default function InterestProduct() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { state: { userInfo:{idx} } } = useAppContext();
  console.log('idx: ', idx);
  const { data = [], isLoading, isSuccess, isError, error, isFetching } = useQuery([queryKeys.INTEREST_PRODUCT,idx, currentPage], async () => await Get.getInterestProductList(idx, currentPage), {
    retry: 0,
    // keepPreviousData: true,
    // refetchOnWindowFocus: false,
    // staleTime: Infinity,
    enabled: !!idx,                                      
  });
  
  const handleRemoveItem = useCallback(async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const { name } = e.target as HTMLButtonElement;
      if (idx) {
        try {
          const res = await Delete.deleteInterestProduct(idx, name);
          if(res.success) alert('삭제되었습니다.');
          // action.setLocalItems(res.items);
        } catch (error) {
          console.error('remove-error: ', error);
        }
      }
  }, [idx]);

return (
    <S.ProductList>
      <PageTitle TitleText='관심상품' />
      <FormFieldset title='위시리스트'>
        <List 
          items={data.item} 
          isSuccess={isSuccess} 
          isLoading={isLoading}
          handleRemoveItem={handleRemoveItem}
          />
      </FormFieldset>
    </S.ProductList>
  );
}
