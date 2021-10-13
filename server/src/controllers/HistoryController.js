
import History from '../models/History';
import throwError from '../../src/error/throwError';
import mongoose from 'mongoose';

const list = async (req, res, next) => {
  const { idx } = req.params;
  const { page } = req.query;
  const limit = 1;
  const skip = limit * (page - 1);
  try {
    if (!mongoose.Types.ObjectId.isValid(idx)) {
      throwError({statusCode: 404 });
    }
    const _id = mongoose.Types.ObjectId.createFromHexString(idx);
    console.log('_id: ', _id);
    let lastPage = await History.findOne({ user: _id }, { data: 1 });

    let exist = await History.findOne({ user: _id },
      { data: { $slice: [skip, limit] }, createdAt: 0, updatedAt: 0, __v: 0, _id: 0 }).lean();

    exist.maxPages = lastPage.lastPage;

    if (exist) {
      res.json(exist);
    } else {
      res.json(exist);
    }
  } catch (error) {
    next(error);
    console.log('error-history: ', error);
  }
};

const historyDetail = async (req, res, next) => {
  const { idx, orderNum } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(idx)) {
      throwError({statusCode: 400 });
    }
    const _id = mongoose.Types.ObjectId.createFromHexString(idx);
    const exist = await History.findOne({ user: _id});
    if(!exist){
      throwError({statusCode: 404 });
    }else{
      const result = exist.data.filter((d => d.orderNum === orderNum));
      res.json(result);
    }
  } catch (error) {
    next(error);
    console.log('error-historyDetail: ', error);
  }
};

export {
  list,
  historyDetail,
}
