import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IProduct } from 'interfaces/IProduct';
import Icon from 'components/Icon/Icon';
import ProductCard from 'components/ProductCard';

interface IProductList {
  items?: IProduct[];
  isLoading?: boolean;
  isSuccess?: boolean;
}

const S = {
  ProductList: styled.article`
    display: flex;
    flex-wrap: wrap;
  `,
  EmptyItems: styled.div`
    margin: 0 auto;
    padding: 20px 0;
    font-size: 12px;
    color: #999;
    i{
      display: block;
      margin: 0 auto;
      text-align: center;
      font-size: 0;
    }
  `,
}

export default function ProductList({ items, isLoading, isSuccess }: IProductList) {
  return (
    <S.ProductList>
      {items && items.length > 0 ? items.map((d: IProduct, i) => (
        <ProductCard
          key={d._id}
          product_type={d.product_type}
          seq={d.seq}
          name={d.name}
          description={d.description}
          summary_description={d.summary_description}
          product_price={d.product_price}
          consumer_price={d.consumer_price}
          imageUrl={d.imageUrl}
          product_colors={d.product_colors}
          best_product={d.best_product}
          new_product={d.new_product}
          qty={d.qty}
          isList={true}
        />
      )) : (
        <S.EmptyItems >
          <i><Icon name='menu' style={{ color: '#000' }} /></i>
          <p style={{ 'marginTop': '10px' }}>검색된 상품이 없습니다.</p>
        </S.EmptyItems>
      )}
    </S.ProductList>
  );
}
