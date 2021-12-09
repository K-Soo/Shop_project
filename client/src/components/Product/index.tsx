import React,{useState} from 'react';
import styled from 'styled-components';
import ProductList from 'components/Product/ProductList';
import { CategoryEnum } from 'constants/product';
import { useRouter } from 'next/router';
import ProductSortMenu from 'components/Common/ProductSortMenu';
import { useSelectCategory } from 'hooks/useSelectCategory';
import { useSort } from 'hooks/useSort';
import { IProduct } from 'interfaces/IProduct';
import Loading from 'components/Loading';
import { useAppContext } from 'context/AppProvider';
import useDidMountEffect from 'hooks/useDidMountEffect';

interface IProductProps {
  item: IProduct[];
  isLoading: boolean;
  isSuccess: boolean;
}

export type categoryType = `${CategoryEnum}`;

const S = {
  Product: styled.section`
    width: 100%;
  `,
}

export default function Product({ item, isLoading, isSuccess }: IProductProps) {
  const router = useRouter();
  const { state } = useAppContext();
  const selectedItem = useSelectCategory(item);
  const [filtered, setFiltered] = useState<IProduct[]>([]);
  const { setSort, sortingData } = useSort(selectedItem);

  // useDidMountEffect(() => {
  //   if(item){
  //     if (state.targetCategory === 'all') {
  //       setFiltered(item);
  //     } else {
  //       setFiltered(item.filter(d => d.category === state.targetCategory));
  //     }
  //   }
  // }, [state.targetCategory, item]);

  useDidMountEffect(() => {
    if(item){
      if (state.targetCategory === 'all') {
        setFiltered(item);
      } else {
        setFiltered(item.filter(d => d.category === state.targetCategory));
      }
    }
  }, [state.targetCategory, item]);


  return (
    <S.Product>
      {isLoading && (
        <Loading
          isLoading={isLoading}
          height={300}
          text=''
        />
      )}

      {isSuccess && (
        <>
          <ProductSortMenu
            itemCount={selectedItem?.length}
            setSort={setSort}
          />
          <ProductList
            items={sortingData}
          />
        </>
      )}
    </S.Product>
  )
};



