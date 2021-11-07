import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductList from 'components/Product/ProductList';
import Loading from 'components/Loading';

interface ISectionLayout {
  name: string;
  title: string;
  text: string;
  data: any;
  isLoading: boolean;
  isSuccess: boolean;
  isFetching: boolean;
  handlePages?: React.MouseEventHandler<HTMLButtonElement>;
}

const S = {
  SectionLayout: styled.article`
  .title-box{
    padding: 100px 0 70px 0;
    text-align: center;
    em{
      font-size: 27px;
      font-weight: 900;
      color: #2840fa;
      font-style: normal;
    }
    p{
      font-size: 13px;
      font-weight: normal;
      color: #999;
      padding: 5px 0 0 0;
    }
  }
  .nextBtn{
    margin-top: 15px;
    align-items: center;
    display: flex;
    justify-content: center;
    button{
      cursor:pointer;
      width: 100px;
      border: 1px solid #000;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      span{
        display: inline-block;

        pointer-events: none;
        font-size: 16px;
        color: #333;
        &::after{
          content: '+';
          font-size: 24px;
          padding-left: 3px;
          vertical-align: middle;
        }
      }
    }
  }
  `,
}

export default function SectionLayout({ name, title, text, data, isLoading, isSuccess, isFetching, handlePages }: ISectionLayout) {
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (data) {
      if (data?.items?.length >= data?.total) {
        setDisable(true);
      }
    }
  }, [data?.items, data?.total, data])

  return (
    <S.SectionLayout >
      <div className='title-box' >
        <em>{title}</em>
        <p>{text}</p>
      </div>
      <ProductList
        items={data?.items}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />
      {isFetching ? <Loading isLoading={true} height={100} text='' /> : (
        <>
          {disable || (
            <div className='nextBtn' >
              <button name={name} id={name} onClick={handlePages}>
                <span>더보기</span>
              </button>
            </div>
          )}
        </>
      )}
    </S.SectionLayout>
  );
}
