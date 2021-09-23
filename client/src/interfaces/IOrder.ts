import { IBasketItem } from 'interfaces/IProduct';


export interface IOrderDetail {
  Products: IBasketItem[]
  addr: {
    addr1: string,
    addr2: string,
    zoneCode: string,
  },
  amountInfo: {
    consumerAmount: number,
    deliveryAmount: number,
    discountAmount: number,
    paymentAmount: number,
    productAmount: number,
  },
  createAt: string,
  deliveryMessage: string,
  email: string,
  orderNum: string,
  phone: string,
  pointInfo: {
    estimatedPoint: number
    totalUsed: number | string
  },
  userName: string,
  _id: string,
}