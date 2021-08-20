import express from 'express';
import { ProductController } from '../../../controllers';

const product = express.Router();

// api/products

product.post('/', ProductController.create); // 새로운 상품을만듬
product.get('/list', ProductController.list); // 호텔리스트가져옴

product.get('/:product_type', ProductController.getProductLists); // 상품타입에 따라 모든상품을 가져온다
product.get('/:product_type/:id', ProductController.getProductItem); // 단일 상품을 가져옴

export default product;