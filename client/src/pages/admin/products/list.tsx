import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import AdminContainer from 'containers/AdminContainer';
import ProductControllers from 'components/Admin/ProductControllers';
import List from 'components/Admin/ProductControllers/List';
import Filter from 'components/Admin/ProductControllers/List/Filter';
import CtrBox from 'components/Admin/ProductControllers/List/CtrBox';
import { Get, Put } from "api";
import { NAV_MENU } from "constants/header";
import { queryKeys } from 'constants/queryKeys';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useAdminContext } from 'context/AdminProvider';
import Loading from 'components/Loading';
import PageTitle from 'components/Common/PageTitle';
import { IProduct } from 'interfaces/IProduct';
import { stubFalse } from "lodash";

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

export default function ProductsListPage(props: any) {
  const { state, action } = useAdminContext();
  const [targetItem, setTargetItem] = useState<IProduct[] | null>(null);
  const queryClient = useQueryClient();

  const idx = '123';

  const { mutate } = useMutation(async (item: IProduct[]) => await Put.updateProductQty(idx, item), {
    onSuccess: () => {
      alert('변경이 완료되었습니다');
      queryClient.invalidateQueries([queryKeys.PRODUCT, state.filter.product_type])
    }
  });

  const selectFc = useCallback((data: IProduct[]) => {
    return data.filter(el => el.category === state.filter.category);
  }, [state.filter.category]);

  const { data = [], isLoading, isSuccess, isError, isFetching } = useQuery<IProduct[]>([queryKeys.PRODUCT, state.filter.product_type],
    async () => await Get.products(state.filter.product_type),
    {
      retry: 0,
      staleTime: 2000,
      select: state.filter.category !== 'all' ? selectFc : undefined,
    });

  const handleCount = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    let find = data.filter(el => el._id === name);
    find[0].qty = +value;
    setTargetItem(find);
  }, [data]);

  const handleQty = useCallback((e) => {
    const { name } = e.target;
    if (!targetItem) {
      setTargetItem(null);
      return alert('먼저 수량을 수정해주세요');
    }
    if (targetItem[0]._id !== name) {
      setTargetItem(null);
      return alert('현재수량과 동일합니다');
    }
    mutate(targetItem);
  }, [targetItem, mutate]);

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
            {isSuccess && (
              <List
                className='list'
                items={data}
                handleCount={handleCount}
                handleQty={handleQty}
              />
            )}
            {isLoading && <div>loading</div>}
            <CtrBox />
          </Block>

        </ProductControllers>
      </AdminContainer>
    </>
  );
}

