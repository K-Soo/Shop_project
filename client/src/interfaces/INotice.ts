export type TItems = {
  _id: string,
  title: string,
  type:string;
  content:string;
  createdAt: string,
}

export interface NoticeProps  {
  items:TItems[]
  maxPages:number,
}

