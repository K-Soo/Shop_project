import React, { useCallback, useState,useEffect } from "react";
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
import PageTitle from 'components/Common/PageTitle';
import { IProduct } from 'interfaces/IProduct';
import { stubFalse } from "lodash";
import { useChangeQty, useSelectCloseProducts } from 'components/Admin/hooks/useListModify';

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
  const [targetItem, setTargetItem] = useState<null | IProduct[]>(null);
  const [checkedItem, setCheckedItem] = useState<null | string[]>([]);
  const [AllCheck, setAllCheck] = useState(false);
  const changeQty = useChangeQty();
  const closeProducts = useSelectCloseProducts();

  console.log('checkedItem: ', checkedItem);

  const selectFc = useCallback((data: IProduct[]) => {
    return data.filter(el => el.category === state.filter.category);
  }, [state.filter.category]);

  const { data = [], isLoading, isSuccess, isError, isFetching } = useQuery<IProduct[]>([queryKeys.PRODUCT, state.filter.product_type],
    async () => await Get.getProductsA(state.filter.product_type),
    {
      retry: 0,
      staleTime: 2000,
      select: state.filter.category !== 'all' ? selectFc : undefined,
    });

  useEffect(() => {
    setCheckedItem([]);
    setAllCheck(false);
  },[state.filter.product_type,state.filter.category])
    
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
    changeQty(targetItem);
  }, [targetItem, changeQty]);

  const handleChecked = useCallback((e) => {
    const { checked, name } = e.target;
    if (checked) {
      setCheckedItem(prev => [...prev, name]);
    } else {
      const result = checkedItem.filter(d => d !== name);
      setCheckedItem(result);
    }
  }, [checkedItem]);

  const handleAllChecked = useCallback((e) => {
    const { checked } = e.target;
    if (checked) {
      const ids: string[] = [];
      data.map(d => ids.push(d._id));
      setCheckedItem(ids);
      setAllCheck(true);
    } else {
      setCheckedItem([]);
      setAllCheck(false);
    }
  }, [data]);

  const handleCloseProducts = () => {
    if (!checkedItem.length) {
      return alert('상품을 먼저 선택해주세요');
    }
    closeProducts(checkedItem);
  }

  const handleColor = async() => {
    if (!checkedItem.length) {
      return alert('상품을 먼저 선택해주세요');
    }
    try {
      const res = await Put.updateProductColor(checkedItem);
      if(res.success){
        alert('완료')
      }
    } catch (error) {
      console.log('error: ', error);
    }
  }

  return (
    <>
      <Head>
        <title>관리자 | 상품리스트</title>
      </Head>
      <AdminContainer>
        <ProductControllers>
          <Block>
            <PageTitle TitleText='상품 리스트 / 수정' />
            <Filter className='filter' handleAllChecked={handleAllChecked} AllCheck={AllCheck}/>
            {isSuccess && (
              <List
                className='list'
                items={data}
                handleCount={handleCount}
                handleQty={handleQty}
                handleChecked={handleChecked}
                checkedItem={checkedItem}
              />
            )}
            {isLoading && <div>loading</div>}
            <CtrBox handleCloseProducts={handleCloseProducts} handleColor={handleColor}/>
          </Block>
        </ProductControllers>
      </AdminContainer>
    </>
  );
}

