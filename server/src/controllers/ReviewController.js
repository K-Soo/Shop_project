import ProductReview from '../models/ProductReview';
import throwError from '../../src/error/throwError';
import mongoose from 'mongoose';

const createReview = async (req, res, next) => {
  const { idx, productId } = req.params;
  const { content,rate } = req.body;

  try {
    const comment = new ProductReview({ commenter: idx, product: productId, comment: content, rate, url: req.file ? req.file.location : null});
    comment.save();
    res.json({ success: true });
  } catch (error) {
    next(error);
    console.error('createReview-error: ', error);
  }
}

const getProductReview = async (req, res, next) => {
  const { productId } = req.params;

  try {
    const exist = await ProductReview.find({ product: productId }).populate({
      path: 'commenter',
      select: { userName: 1 }
    });
    console.log('exist: ', exist);
    if (exist) {
      res.json(exist);
    }
  } catch (error) {
    next(error);
    console.error('createReview-error: ', error);
  }
}

export { createReview, getProductReview }
