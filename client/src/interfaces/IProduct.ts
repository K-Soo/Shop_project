export type TColor = {
  hex_value: string;
  color_name: string;
}

export interface IProduct {
  best_product: boolean;
  new_product: boolean;
  product_type: string;
  category: string;
  name: string;
  product_price: string;
  consumer_price: string;
  summary_description:  string;
  description: string;
  product_colors: TColor[];
  seq: number;
  __v: number;
  _id: string;
}