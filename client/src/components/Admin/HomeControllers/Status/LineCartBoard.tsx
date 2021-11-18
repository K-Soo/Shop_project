import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import styled, { css } from "styled-components";
import { Line, defaults } from 'react-chartjs-2';
import Title from 'components/style/Title';
import { Days } from 'utils'
import { IIineCartData, TFiltered } from 'interfaces/IAdmin';

interface ILineCartBoard {
  lineCartData: IIineCartData[];
  lineCartStatus?: any;
  handleFilter: React.MouseEventHandler<HTMLLIElement>;
  filtered: TFiltered;
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
  FilterChart: styled.div<{ filtered: TFiltered }>`
    border-bottom: 1px solid #bdbdbd;
    margin: 30px 15px;
    .lists{
      display: flex;
      color: #999;
      font-weight: 600;
      cursor: pointer;
      li{
        padding: 10px 20px;
        position: relative;
        &:hover{
          background-color: #f5f5f5;
        }
      }
      .cnt{
        ${({ filtered }) => filtered === 'cnt' && css`
          color: #475669;
          &::after{
            content:'';
            position: absolute;
            width: 100%;
            height: 3px;
            background: #475669;
            left: 0;
            bottom: -1px;
          }
        `}
        }
      .amount{
        ${({ filtered }) => filtered === 'amount' && css`
          color: #475669;
          &::after{
            content:'';
            position: absolute;
            width: 100%;
            height: 3px;
            background: #475669;
            left: 0;
            bottom: -1px;
          }
        `}
      }
    }
  `,
}

const options = {
  responsive: true,
  legend: {
    labels: {
      fontSize: 2,
    }
  },
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
      ticks:{
        beginAtZero: true,
        display: true,
      },
    },
    x: {
      display: true,
      ticks:{
        beginAtZero: true,
        display: true,
      },
      grid:{
        color: '#fff'
      }
    }
  }
};



enum labelText {
  cnt = "판매수",
  amount = "판매액",
}

export default function LineCartBoard({
  lineCartData,
  lineCartStatus,
  handleFilter,
  filtered
}: ILineCartBoard) {
  const [chartDate, setChartDate] = useState([]);
  const [chartValue, setChartValue] = useState([]);

  useEffect(() => {
    if (lineCartStatus === 'success') {
      setChartDate(lineCartData.map(d => d.date))
      setChartValue(lineCartData.map(d => d.value))
    }
  }, [lineCartData, lineCartStatus]);

  const data = {
    labels: chartDate,
    datasets: [
      {
        label: labelText[filtered],
        data: chartValue,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.5
      },
    ],
  };

  return (
    <S.LineCartBoard>
      <div className='header'>
        <Title level={2}>상품 통계</Title>
        <p>지난 7일</p>
      </div>
      <S.FilterChart filtered={filtered}>
        <ul className='lists'>
          <li className='cnt' onClick={handleFilter}>판매수</li>
          <li className='amount' onClick={handleFilter}>판매액</li>
        </ul>
      </S.FilterChart>
      {lineCartStatus === 'success' && (
        <Line
          data={data}
          height={100}
          options={options}
        />
      )}
    </S.LineCartBoard>
  );
}
