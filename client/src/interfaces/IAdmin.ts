export interface ISalesData {
  ProductCnt: number,
  paymentComplete: number,
  totalAmount: number
}
export interface PointData {
  ProductCnt: number,
  totalPoints: number,
  totalAmount: number
}
export interface IIineCartData {
  date: string,
  value: number,
}

export type TFiltered = 'cnt' | 'amount'