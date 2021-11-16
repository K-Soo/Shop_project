import React from "react";
import styled from "styled-components";
import { Line } from 'react-chartjs-2';
import Title from 'components/style/Title';
import { Days } from 'utils'

interface ILineCartBoard {

}

const S = {
  LineCartBoard: styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 15px;
    .header{
      ${Title}{
        font-size: 20px;
      }
      p{
        color: #757575;
        padding-left: 10px;
        font-size: 14px;
      }
      display: flex;
      align-items: center;
    }
  `,
}

const data = {
  labels: Days(7),
  datasets: [
    {
      label: '예약수',
      data: [12, 19, 3, 5, 2, 3, 3, 4, 5, 6, 5],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      tension: 0.5
    },
  ],
};

const options = {
  responsive:true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      intersect: false,
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      display: true,
    },
    x:{
      display: true,
    }
  }
};

export default function LineCartBoard({ }: ILineCartBoard) {
  return (
    <S.LineCartBoard>
      <div className='header'>
        <Title level={2}>상품 통계</Title>
        <p>지난 7일</p>
      </div>
      <Line data={data} height={100} options={options} />
    </S.LineCartBoard>
  );
}
