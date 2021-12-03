import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useAppContext } from 'context/AppProvider';
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
  const { data = [], isLoading, isSuccess, isError, error, isFetching } = useQuery([queryKeys.INTEREST_PRODUCT,idx, currentPage], async () => await Get.getInterestProductList(idx, currentPage), {
    retry: 0,
    keepPreviousData: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: !!idx,                                      
  });
  
  const handleRemoveItem = useCallback(async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const { name } = e.target as HTMLButtonElement;
      if (idx) {
        try {
          const res = await Delete.deleteInterestProduct(idx, name);
          if(res.success) alert('삭제되었습니다.');
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
