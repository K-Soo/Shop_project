export type TColor = {
  hex_value: string;
  color_name: string;
}

export interface IProduct {
  best_product: boolean;
  category: string;
  consumer_price: string;
  description: string;
  name: string;
  new_product: boolean;
  product_colors: TColor[];
  product_price: string;
  product_type: string;
  seq: number;
  summary_description:  string;
  __v: number;
  _id: string;
}