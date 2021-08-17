import { room } from '../mock';
import Product from '../models/Product';

export const list = async (req, res) => {
  try {
    res.json(room);
  } catch (error) {
    console.error('/list error', error);
  }
};

export const ProductType = async (req, res) => {
  const{product_type} = req.params;
  try {
    const exist = await Product.find({product_type});
    res.json(exist);
  } catch (error) {
    console.error('/ProductType', error);
  }
};


export const create = async (req, res) => {
  console.log('req: ', req);
  try {
    const product = new Product(req.body);
    await product.save();

    res.json(product)
  } catch (error) {
    console.error('/list error', error);
  }
};



