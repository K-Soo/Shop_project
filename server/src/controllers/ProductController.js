import { room } from '../mock';
import Product from '../models/Product';

export const list = async (req, res) => {
  try {
    res.json(room);
  } catch (error) {
    console.error('/list error', error);
  }
};

export const getProductLists = async (req, res) => {
  const { product_type } = req.params;
  try {
    const exist = await Product.find({ product_type });
    res.json(exist);
  } catch (error) {
    console.error('/ProductType', error);
  }
};

export const getProductItem = async (req, res) => {
  const { id, product_type } = req.params;
  console.log('product_type: ', product_type);
  console.log('id: ', id);
  try {
    const exist = await Product.findOne({ product_type, seq: id });
    if (!exist) {
      res.status(404).send();
     }
    res.json(exist);
  } catch (error) {
    console.error('/ProductType', error);
    res.status(500).send();
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



