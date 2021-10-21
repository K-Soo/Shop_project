import Point from '../models/Point';
import History from '../models/History';
import mongoose from 'mongoose';

const list = async (req, res, next) => {
  const { idx } = req.params;
  const { page, limit } = req.query;
  const skip = Number(limit) * (Number(page) - 1);
  try {
    const total = await Point.findOne({ PointOwner: idx }).lean();

    const exist = await Point.findOne({ PointOwner: idx },
      { pointInfo: { $slice: [skip, Number(limit)] }, createdAt: 0, updatedAt: 0, __v: 0, _id: 0 }).lean();
      
      const response = {
      ...exist,
      maxPages : Math.ceil(total.pointInfo.length / limit),
    }
    if (exist) {
      res.json(response);
    } else {
      throwError({ statusCode: 404, mgs: '상품이 없습니다.' });
    }
  } catch (error) {
    console.error('/list error', error);
    next(error);
  }
};

const userInfo = async (req, res, next) => {
  const { idx } = req.params;
  try {
    const exist = await Point.findOne({ PointOwner: idx }).lean();
    const findUserHistory = await History.findOne({ user: idx });
    const result = findUserHistory.data.reduce((acc, cur) => acc + (cur.amountInfo.paymentAmount), 0);

    const response = {
      ...exist,
      totalAmount: result,
      totalLength: findUserHistory.data.length,
    }
    if (exist) {
      res.json(response);
    } else {
      throwError({ statusCode: 404, mgs: '상품이 없습니다.' });
    }
  } catch (error) {
    console.error('/list error', error);
    next(error);
  }
};

export { list, userInfo }