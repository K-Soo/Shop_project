import express from 'express';
import { ProductController } from '../../../../controllers';
import { ReviewController } from '../../../../controllers';
import { upload } from '../../../middleware/upload';

const review = express.Router();

review.get('/:productId', ReviewController.getProductReview); // 상품 리뷰 가져오기

review.post('/:idx/:productId', (req, res, next) => {
  upload(req, res, (err) => {
    err ? throwError({ statusCode: 500, msg: '이미지등록 실패' }) : next();
  });
}, ReviewController.createReview); // 상품 리뷰 작성

export default review;
