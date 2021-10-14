import Point from '../models/Point';
import History from '../models/History';
import mongoose from 'mongoose';

const list = async (req, res, next) => {
  const { idx } = req.params;
  try {
    const exist = await Point.findOne({ PointOwner: idx }).lean();
    const findUserHistory = await History.findOne({user:idx});
    const result = findUserHistory.data.reduce((acc,cur) => acc + (cur.amountInfo.paymentAmount),0);
    
    const response = {
      ...exist,
      totalAmount:result,
      totalLength: findUserHistory.data.length,
    }
    if(exist){
      res.json(response);
    }else{
      throwError({ statusCode: 404, mgs: '상품이 없습니다.' });
    }
  } catch (error) {
    console.error('/list error', error);
    next(error);
  }
};

export { list }