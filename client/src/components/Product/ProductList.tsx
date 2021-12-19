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
  sort?: string;
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

export default function ProductList({ items, sort }: IProductList) {

  if (!items.length) {
    return (
      <S.ProductList>
        <S.EmptyItems >
          <i><Icon name='menu' style={{ color: '#000' }} /></i>
          <p style={{ 'marginTop': '10px' }}>검색된 상품이 없습니다.</p>
        </S.EmptyItems>
      </S.ProductList>
    )
  }

  if (sort === '') {
    return (
      <S.ProductList>
        {items.length > 0 && items.sort(x => x.qty ? -1 : 1).map((d: IProduct) => (
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
            el={d}
            isList={true}
          />
        ))}
      </S.ProductList>
    )
  }

  if (sort === 'row') {
    return (
      <S.ProductList>
        {items.length > 0 && items.sort((a, b) => +b.consumer_price - +a.consumer_price).sort(x => x.qty ? -1 : 1).map((d: IProduct) => (
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
        ))}
      </S.ProductList>
    )
  }

  if (sort === 'hight') {
    return (
      <S.ProductList>
        {items.length > 0 && items.sort((a, b) => +a.consumer_price - +b.consumer_price).sort(x => x.qty ? -1 : 1).map((d: IProduct) => (
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
        ))}
      </S.ProductList>
    )
  }
  if (sort === 'new') {
    return (
      <S.ProductList>
        {items.length > 0 && items.sort((x) => x.new_product ? 1 : -1).sort(x => x.qty ? -1 : 1).map((d: IProduct) => (
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
        ))}
      </S.ProductList>
    )
  }

  if (sort === 'best') {
    return (
      <S.ProductList>
        {items.length > 0 && items.sort((x) => x.best_product ? 1 : -1).sort(x => x.qty ? -1 : 1).map((d: IProduct) => (
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
        ))}
      </S.ProductList>
    )
  }
}