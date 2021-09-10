import React from "react";
import styled from "styled-components";
import Title from 'components/style/Title';
interface IGuide {

}

const S = {
  Guide: styled.div`
  `,
  GuideLists: styled.ul`
  ${Title}{
    font-weight: 400;
    margin-bottom: 5px;
  }
  li{
    padding-bottom: 5px;
    font-size: 12px;
    color: #999;
    :last-child{
      padding: 0;
    }
  }
  
  `,
}


const Category = [
  { label: '해외배송 상품과 국내배송 상품은 함께 결제하실 수 없으니 장바구니 별로 따로 결제해 주시기 바랍니다.' },
  { label: '선택하신 상품의 수량을 변경하시려면 수량변경 후 [변경] 버튼을 누르시면 됩니다.' },
  { label: '장바구니와 관심상품을 이용하여 원하시는 상품만 주문하거나 관심상품으로 등록하실 수 있습니다.' },
]


export default function Guide({ }: IGuide) {
  return (
    <S.Guide>
      <S.GuideLists>
        <Title size='13' color='#404040' level={6} textAlign='left'>장바구니 이용안내</Title>
        {Category.map((d,i) => (
          <li key={i}>
            <p>
             - {d.label}
            </p>
          </li>
        ))}
      </S.GuideLists>
    </S.Guide>
  );
}
