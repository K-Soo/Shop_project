import Product from '../models/Product';
import throwError from '../../src/error/throwError';
import ProductReview from '../models/ProductReview';

const list = async (req, res, next) => {
  try {
    const exist = await Product.find();
    res.json(exist);
    if (!exist.length) {
      throwError({ statusCode: 404, mgs: '상품이 없습니다.' });
    }
  } catch (error) {
    console.error('/list error', error);
    next(error);
  }
};

const getProductLists = async (req, res, next) => {
  try {
    const { product_type } = req.params;
    const exist = await Product.find({ product_type });
    res.json(exist);
  } catch (error) {
    console.error('/getProductLists', error);
    next(error);
  }
};

const getProductItem = async (req, res, next) => {
  const { id, product_type } = req.params;
  try {
    const exist = await Product.findOne({ product_type, seq: id });
    if (!exist) {
      throwError({ statusCode: 404 });
    }
    res.json(exist);
  } catch (error) {
    next(error);
    console.error('/ProductType', error);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const product = new Product(req.body);
    product.save();
    res.json({ msg: '등록완료' })
  } catch (error) {
    next(error);
    console.error('/list error', error);
  }
};

const Images = async (req, res, next) => {
  console.log('file: ', req.file.location);
  try {
    const data = [{ url: req.file.location }]
    res.json(data)
  } catch (error) {
    next(error);
    console.error('Images-error', error);
  }
};


export { list, getProductLists, getProductItem, createProduct, Images }


