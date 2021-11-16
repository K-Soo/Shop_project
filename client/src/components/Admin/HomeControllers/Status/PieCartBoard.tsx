import React from "react";
import styled from "styled-components";
import { Pie } from 'react-chartjs-2';
import Title from 'components/style/Title';
import { Days } from 'utils'

interface IPieCartBoard {
  
}

const S = {
  PieCartBoard: styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid red;
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
  labels: Days(6),
  datasets: [
    {
      label: '예약수',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive:false,
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
      display: false,
    },
    x:{
      display: false,
    }
  }
};

export default function PieCartBoard({}:IPieCartBoard) {
  return (
    <S.PieCartBoard>
        <div className='header'>
        <Title level={2}>상품 통계</Title>
        <p>지난 7일</p>
      </div>
      <Pie data={data} height={250} width={1000} options={options} />
    </S.PieCartBoard>
  );
}
