import express from 'express';
import {ProductController} from '../../../../controllers';
import {ReviewController} from '../../../../controllers';

const review = express.Router();

review.get('/:productId', ReviewController.getProductReview); // 상품 리뷰 가져오기
review.post('/:idx/:productId', ReviewController.createReview); // 상품 리뷰 작성

export default review;
