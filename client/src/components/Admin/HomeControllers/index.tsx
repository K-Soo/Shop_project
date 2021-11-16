import React from "react";
import styled from "styled-components";
import Status from 'components/Admin/HomeControllers/Status';
import Information from 'components/Admin/HomeControllers/Information';
import { Get } from "api";
import { useQueries, useQuery } from 'react-query';
import { queryKeys } from 'constants/queryKeys';
interface IHomeControllers {
  children: React.ReactNode;
}

const S = {
  HomeControllers: styled.div`
    height: 100%;
    width: 100%;
    display: flex;
  `,
}
const obj = {

  data: [
    {
      _id: "61901e5a96594c3f8397c802",
      user: "61901e5a96594c3f8397c800",
      data: [{
        Products: [
          {
            qty: 3,
            _id: '61901f1e96594c3f8397c855',
            new_product: true,
            best_product: true,
            product_type: 'necklace',
            category: '이니셜 목걸이',
            name: '볼룸 목걸이',
            consumer_price: '200000',
            product_price: '230000',
            summary_description: '베스트상품입니다',
            description: '반짝반짝 이니셜목걸이',
            product_colors: [Array],
            imageUrl: [Array],
            seq: 33,
            selectColor: [Array],
            point: 20000,
            totalConsumerPrice: '600000',
            totalProductPrice: '690000'
          }
        ],
        pointInfo: { estimatedPoint: 40000, totalUsed: '' },
        amountInfo: {
          productAmount: 690000,
          consumerAmount: 600000,
          discountAmount: 90000,
          paymentAmount: 602500,
          deliveryAmount: 2500
        },
        userName: 'test3',
        orderPassword: '',
        orderPasswordConfirm: '',
        phone: '010-1231-3123',
        email: 'qweqwe@qweqweqwe',
        deliveryMessage: '',
        addr: {
          zoneCode: '28456',
          addr1: '충북 청주시 흥덕구 1순환로 384 (신봉동)',
          addr2: 'qweqwe'
        },
        _id: "61901f3096594c3f8397c85d",
        createdAt: '2021-11-13 05:25:20',
        orderNum: '20211114-800049'
      }, {
        Products: [
          {
            qty: 3,
            _id: '61901f1e96594c3f8397c855',
            new_product: true,
            best_product: true,
            product_type: 'necklace',
            category: '이니셜 목걸이',
            name: '볼룸 목걸이',
            consumer_price: '200000',
            product_price: '230000',
            summary_description: '베스트상품입니다',
            description: '반짝반짝 이니셜목걸이',
            product_colors: [Array],
            imageUrl: [Array],
            seq: 33,
            selectColor: [Array],
            point: 20000,
            totalConsumerPrice: '600000',
            totalProductPrice: '690000'
          }
        ],
        pointInfo: { estimatedPoint: 60000, totalUsed: '' },
        amountInfo: {
          productAmount: 690000,
          consumerAmount: 600000,
          discountAmount: 90000,
          paymentAmount: 602500,
          deliveryAmount: 2500
        },
        userName: 'test3',
        orderPassword: '',
        orderPasswordConfirm: '',
        phone: '010-1231-3123',
        email: 'qweqwe@qweqweqwe',
        deliveryMessage: '',
        addr: {
          zoneCode: '28456',
          addr1: '충북 청주시 흥덕구 1순환로 384 (신봉동)',
          addr2: 'qweqwe'
        },
        _id: "61901f3096594c3f8397c85d",
        createdAt: '2021-11-14 05:25:20',
        orderNum: '20211114-800049'
      }]
    },
    {
      _id: "61901e5a96594c3f8397c802",
      user: "61901e5a96594c3f8397c800",
      data: [{
        Products: [
          {
            qty: 3,
            _id: '61901f1e96594c3f8397c855',
            new_product: true,
            best_product: true,
            product_type: 'necklace',
            category: '이니셜 목걸이',
            name: '볼룸 목걸이',
            consumer_price: '200000',
            product_price: '230000',
            summary_description: '베스트상품입니다',
            description: '반짝반짝 이니셜목걸이',
            product_colors: [Array],
            imageUrl: [Array],
            seq: 33,
            selectColor: [Array],
            point: 20000,
            totalConsumerPrice: '600000',
            totalProductPrice: '690000'
          }
        ],
        pointInfo: { estimatedPoint: 60000, totalUsed: '' },
        amountInfo: {
          productAmount: 690000,
          consumerAmount: 600000,
          discountAmount: 90000,
          paymentAmount: 602500,
          deliveryAmount: 2500
        },
        userName: 'test3',
        orderPassword: '',
        orderPasswordConfirm: '',
        phone: '010-1231-3123',
        email: 'qweqwe@ddd',
        deliveryMessage: '',
        addr: {
          zoneCode: '28456',
          addr1: '충북 청주시 흥덕구 1순환로 384 (신봉동)',
          addr2: 'qweqwe'
        },
        _id: "61901f3096594c3f8397c85d",
        createdAt: '2021-11-14 05:25:20',
        orderNum: '20211114-800049'
      }]
    },
  ]
}

export default function HomeControllers({ children }: IHomeControllers) {
  const currentPage = 1;

  const items = useQueries([
    {
      queryKey: [queryKeys.ADMIN.sales],
      queryFn: async () => await Get.getAdminSales(),
      keepPreviousData: true,
      refetchOnWindowFocus: false
    },
    {
      queryKey: [queryKeys.ADMIN.usedPoint],
      queryFn: async () => await Get.getAdminPoint(),
      keepPreviousData: true,
      refetchOnWindowFocus: false
    },
    {
      queryKey: [queryKeys.ADMIN.notice],
      queryFn: async () => await Get.getNoticeList(currentPage, 5),
      keepPreviousData: true,
      refetchOnWindowFocus: false
    },
  ]);

  console.log('HomeControllers: ', items);


  return (
    <S.HomeControllers>
      <Status salesData={items[0].data} salesStatus={items[0].status} />
      <Information 
        pointData={items[1].data} 
        PointStatus={items[1].status}
        noticeData={items[2].data}
        noticeStatus={items[2].status}
      />
    </S.HomeControllers>
  );
}
