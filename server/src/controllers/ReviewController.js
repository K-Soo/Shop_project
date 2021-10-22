import ProductReview from '../models/ProductReview';
import throwError from '../../src/error/throwError';
import mongoose from 'mongoose';
import util from 'util';

const createReview = async (req, res, next) => {
  const { idx, productId } = req.params;
  const { content, rate } = req.body;
  try {
    const comment = new ProductReview({ commenter: idx, product: productId, comment: content, rate, url: req.file ? req.file.location : null });
    comment.save();
    res.json({ success: true });
  } catch (error) {
    next(error);
    console.error('createReview-error: ', error);
  }
}

const getProductReview = async (req, res, next) => {
  const { productId } = req.params;
  const { page, limit,key,value } = req.query;

  const query = { [key]: +value}
  const skip = Number(limit) * (Number(page) - 1);

  try {
    const total = await ProductReview.find({ product: productId }).lean();

    const exist = await ProductReview.find(
      { product: productId },
      null,
      { sort: query},
      )
      .skip(skip)
      .limit(+limit)
      .populate({
        path: 'commenter',
        select: { userName: 1 }
      })
      
    const totalRate = total.reduce((acc, cur, index, array) => acc + (+cur.rate / array.length), 0)
    const totalImageReview = total.reduce((acc,cur) => acc + (cur.url ? 1 : 0),0);

    const response = {
      items: exist,
      maxPages: Math.ceil(total.length / limit),
      reviewCnt: total.length,
      totalRate,
      totalPercentage: Math.ceil(totalRate * 100 / 5),
      totalImageReview,
    }
    if (exist) {
      res.json(response);
    }
  } catch (error) {
    next(error);
    console.error('createReview-error: ', error);
  }
}

export { createReview, getProductReview }
