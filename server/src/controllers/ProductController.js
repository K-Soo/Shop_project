import { room } from '../mock';
import Product from '../models/Product';
import throwError from '../../src/error/throwError';

const list = async (req, res) => {
  try {
    res.json(room);
  } catch (error) {
    console.error('/list error', error);
  }
};

const getProductLists = async (req, res, next) => {
  try {
    const { product_type } = req.params;
    const exist = await Product.find({ product_type });
    console.log('exist: ', exist);

    if (exist.length) {
      res.json(exist);
    } 
    const result = exist.length ? exist : null;

    console.log('result: ', result);
    if(result && result.length === 0){
       throwError({statusCode: 404 }); 
    }

    //   if(result && result.length === 0){
    //     throwError({statusCode: 404 }); 
    //  }

  } catch (error) {
    console.error('/getProductLists', error);
    next(error);
  }
};

const getProductItem = async (req, res) => {
  const { id, product_type } = req.params;
  console.log('product_type: ', product_type);
  console.log('id: ', id);
  try {
    const exist = await Product.findOne({ product_type, seq: id });
    if (!exist) {
      res.status(404).json({ msg: '에러' })
    }
    res.json(exist);
  } catch (error) {
    console.error('/ProductType', error);
    res.status(500).send();
  }
};



const create = async (req, res) => {
  console.log('req: ', req.body);
  try {
    const product = new Product(req.body);
    product.save();
    res.json({ msg: '등록완료' })
  } catch (error) {
    console.error('/list error', error);
  }
};

const Images = async (req, res) => {
  console.log('file: ', req.file.location);
  try {
    const data = [{ url: req.file.location }]
    res.json(data)
  } catch (error) {
    console.error('/list error', error);
  }
};


export default { list, getProductLists, getProductItem, create, Images }


