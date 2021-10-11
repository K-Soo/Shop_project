export type TColor = {
  hex_value: string;
  color_name: string;
}

export type TUrl = { url: string }
export interface IProduct {
  best_product: boolean;
  new_product: boolean;
  product_type: string;
  category: string;
  name: string;
  product_price: string;
  consumer_price: string;
  summary_description: string;
  description: string;
  product_colors: TColor[];
  imageUrl: TUrl[];
  seq?: number;
  __v?: number;
  _id?: string;
  sold?: number;
}
export interface IBasketItem extends IProduct {
  date?: string;
  selectColor?: { colorName: string, hexValue: string }[];
  qty?: number;
  totalProductPrice?: string;
  totalConsumerPrice?: string;
  point?: number;
}
