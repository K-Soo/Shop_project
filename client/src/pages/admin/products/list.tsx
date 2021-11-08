import React, { useCallback } from "react";
import styled from "styled-components";
import Head from "next/head";
import AdminContainer from 'containers/AdminContainer';
import ProductControllers from 'components/Admin/ProductControllers';
import List from 'components/Admin/ProductControllers/List';
import Filter from 'components/Admin/ProductControllers/List/Filter';
import CtrBox from 'components/Admin/ProductControllers/List/CtrBox';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { Get } from "api";
import { NAV_MENU } from "constants/header";
import { queryKeys } from 'constants/queryKeys';
import { useQuery } from 'react-query';
import { useAdminContext } from 'context/AdminProvider';
import Loading from 'components/Loading';
import PageTitle from 'components/Common/PageTitle';
import {IProduct} from 'interfaces/IProduct';

const Block = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  .filter{
    margin-bottom: 15px;
  }
  .list{
    flex: 1;
  }
`;

export default function ProductsListPage(props:any) {
  const { state, action } = useAdminContext();
  console.log('filter: ', state.filter);

  const selectFc = useCallback((data:IProduct[]) => {
    if (state.filter.category) {
      return data.filter(el => el.category === state.filter.category);
    } else {
      return data;
    }
  }, [state.filter]);

  const { data = [], isLoading, isSuccess, isError, isFetching } = useQuery<IProduct[]>([queryKeys.REVIEW.name, state.filter.product_type || 'necklace'],
    async () => await Get.products(state.filter.product_type || 'necklace'),
    {
      retry: 0,
      keepPreviousData: true,
      refetchOnWindowFocus: true,
      staleTime: 2000,
      select: selectFc,
    });

  return (
    <>
      <Head>
        <title>관리자 | 상품리스트</title>
      </Head>
      <AdminContainer>
        <ProductControllers>
          <Block>
            <PageTitle TitleText='상품 리스트 / 수정' />
            <Filter className='filter' />
            {isSuccess && <List items={data} className='list' />}
            {isLoading && <div>loading</div>}
            <CtrBox />
          </Block>
        </ProductControllers>

      </AdminContainer>
    </>
  );
}

