import React from "react";
import styled from "styled-components";
import Button from 'components/style/Button';
import Select from 'components/style/Select';
import Input from 'components/style/Input';
import Label from 'components/style/Label';
import Title from 'components/style/Title';
import { PRODUCT, CategoryEnum } from 'constants/product';
import {useAdminContext} from 'context/AdminProvider';
interface IProductCreate {

}

const S = {
  ProductCreate: styled.div`
    border: 1px solid red;
  `,
  Group: styled.div`
    display: flex;
    margin-bottom: 15px;
    height: 100%;
    /* flex-wrap: wrap; */
    label{
      /* width: 100px; */
      margin-right: 10px;
    }
  `,
}

// {
//   "new_product": true,
//   "best_product": true,
//   "product_type": "necklace",
//   "category": "1부 다이아몬드 목걸이",
//   "name": "다이아",
//   "consumer_price": "10000",
//   "product_price": "1000",
//   "summary_description": "예쁩니다",
//   "description": "다이아 ",
//   "product_colors": [
//       {
//           "hex_value": "#000",
//           "color_name": "orange"
//       }
//   ]
// }

export default function ProductCreate(props: IProductCreate) {
  const { state,action} = useAdminContext();
  return (
    <S.ProductCreate>
      <Title level={1} >상품추가</Title>
      <form action="">
        <S.Group>
          <Label htmlFor='' >옵션 선택</Label>
          <Select width='200'>
            <option value=''>선택</option>
            <option value='new'>NEW</option>
            <option value='best'>BEST</option>
          </Select>
        </S.Group>

        <S.Group>
          <Label htmlFor='' >상품 타입</Label>
          <Select height='40' width='200px' name='create.product_type' onChange={action.setFormData}>
            <option value="">선택</option>
            {Object.entries(PRODUCT).map((d) => (
              <option key={d[0]} value={d[0]}>
                {CategoryEnum[d[0]]}
              </option>
            ))}
          </Select>
          {/* <Input name='product_type' value='' width='200' placeholder='상품 타입' onChange={() => {}}/> */}
        </S.Group>

        <S.Group>
          <Label htmlFor='' >카테고리</Label>
          {/* <Input name='product_type' value='' width='200' placeholder='카테고리' /> */}
        </S.Group>

        <S.Group>
          <Label htmlFor=''>상품 이름</Label>
          {/* <Input name='product_type' value='' placeholder='상품 타입' /> */}
        </S.Group>

        <S.Group>
          <Label htmlFor=''>소비자 가격</Label>
          {/* <Input name='product_type' value='' placeholder='소비자 가격' /> */}
        </S.Group>

        <S.Group>
          <Label htmlFor=''>상품 가격</Label>
          {/* <Input name='product_type' value='' placeholder='상품 가격' /> */}
        </S.Group>

        <S.Group>
          <Label htmlFor=''>상품 타입</Label>
          {/* <Input name='product_type' value='' placeholder='상품 타입' /> */}
        </S.Group>

        <Button>등록</Button>
      </form>
    </S.ProductCreate>
  );
}
