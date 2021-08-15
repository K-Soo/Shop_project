import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'
import Title from 'components/style/Title';
import Button from 'components/style/Button';

interface IProductDetail {
  item?: any;
}

const S = {
  ProductDetail: styled.section`
    width: 100%;
    height: 100%;
  `,
  Card: styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    img{
      width: 300px;
      height: 300px;
    }
  `,
}

export default function ProductDetail({ item }: IProductDetail) {
  console.log('item: ', item);

  return (
    <S.ProductDetail>
      {item.map(d => (
        <S.Card key={d.id}>
          <div>
            <Image
              src={d.image_link}
              alt={d.name}
              width={500}
              height={500}
            />
          </div>

          <div>
            <Title level={2}>
              {d.name}
            </Title>
            <p>
              {d.description}
            </p>
            <span>
              {d.product_type}
            </span>
          </div>
        </S.Card>
      ))}
    </S.ProductDetail>
  )
};



