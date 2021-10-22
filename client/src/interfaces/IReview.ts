export type TItems = {
  comment: string;
  commenter: any;
  createdAt: string;
  product: string
  _id: string;
  rate: string;
  url?: string;
}
export interface IReview {
  items: TItems[];
  maxPages :number;
  reviewCnt :number;
  totalRate :number;
  totalPercentage :number;
  totalImageReview: number;
}