
import History from '../models/History';
import throwError from '../../src/error/throwError';
import mongoose from 'mongoose';

// .select({ 'cart': { '$slice': [skip,limit] } })

const list = async (req, res, next) => {
  const { idx } = req.params;
  const { page } = req.query;
  const limit = 1;
  const skip = limit * (page - 1);

  if (!mongoose.Types.ObjectId.isValid(idx)) {
    throwError({ msg: '잘못된 id값', statusCode: 404 });
  }
  try {
    const _id = mongoose.Types.ObjectId.createFromHexString(idx);
    let lastPage = await History.findOne({ user: _id }, { data: 1 });

    let exist = await History.findOne({ user: _id },
      { data: { $slice: [skip, limit] },user: 0 ,createdAt:0,updatedAt:0,__v:0,_id:0}).lean();

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

export {
  list,
}
