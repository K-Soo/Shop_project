
import History from '../models/History';
import mongoose from 'mongoose';
import GuestOrder from '../models/GuestOrder';
import throwError from '../error/throwError';

const list = async (req, res, next) => {
  const { idx } = req.params;
  const { page, limit } = req.query;
  const skip = Number(limit) * (Number(page) - 1);
  try {
 
    const _id = mongoose.Types.ObjectId.createFromHexString(idx);
    let total = await History.findOne({ user: _id }, { data: 1 }).lean();

    let exist = await History.findOne({ user: _id },
      { data: { $slice: [skip, Number(limit)] }, createdAt: 0, updatedAt: 0, __v: 0, _id: 0 }).lean();

    const response = {
      ...exist,
      total : total.data.length,
      maxPages : Math.ceil(total.data.length / limit),
    }

    if (exist) {
      res.json(response);
    } else {
      throwError();
    }
  } catch (error) {
    next(error);
    console.log('error-history: ', error);
  }
};

const userDetail = async (req, res, next) => {
  const { idx, orderNum } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(idx)) {
      throwError({ statusCode: 400 });
    }
    const _id = mongoose.Types.ObjectId.createFromHexString(idx);
    const exist = await History.findOne({ user: _id });
    if (!exist) {
      throwError({ statusCode: 404 });
    } else {
      const result = exist.data.filter((d => d.orderNum === orderNum));
      res.json(result);
    }
  } catch (error) {
    next(error);
    console.log('error-historyDetail: ', error);
  }
};

const guestDetail = async (req, res, next) => {
  const { idx } = req.params;
  try {
    const exist = await GuestOrder.find({_id:idx},{orderPassword: 0});
    if(exist){
      res.json(exist);
    } else{
      throwError({statusCode:404});
    }
  } catch (error) {
    next(error);
    console.error('error-guestDetail: ', error);
  }
};

export {
  list,
  userDetail,
  guestDetail
}
