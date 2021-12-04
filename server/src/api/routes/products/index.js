import express from 'express';
import { ProductController } from '../../../controllers';
import { upload } from '../../middleware/upload';
import throwError from '../../../error/throwError';
import review from './review';

const product = express.Router();

// api/products

product.use('/review', review);

product.post('/', ProductController.createProduct); // 새로운 상품을만듬
product.get('/list', ProductController.list); // 모든상품 가져옴

product.post('/image', (req, res, next) => {
  upload(req, res, (err) => {
    err ? throwError({ statusCode: 500,msg:'이미지등록 실패' }) : next();
  });
}, ProductController.Images);

product.put('/close', ProductController.updateProductClose); //상품마감
product.put('/color', ProductController.updateProductColor); //색상 업데이트
product.put('/qty/:idx', ProductController.updateProductQty); // 단일상품 수량변경
product.get('/admin/:product_type', ProductController.getProductListsA); // 상품타입에 따라 모든상품을 가져온다

product.get('/:product_type', ProductController.getProductLists); // 상품타입에 따라 모든상품을 가져온다

// product.post('/review/:idx/:productId', ProductController.createReview); // 상품 리뷰 작성
product.get('/:product_type/:id', ProductController.getProductItem); // 단일 상품을 가져옴

export default product;

