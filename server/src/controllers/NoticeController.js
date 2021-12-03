import Notice from '../models/Notice';
import throwError from '../../src/error/throwError';

const create = async (req, res, next) => {
  const result = req.body;
  const notice = new Notice(result);
  notice.save();
  try {
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
};

const list = async (req, res, next) => {
  const { page, limit } = req.query;
  const skip = Number(limit) * (Number(page) - 1);

  const total = await Notice.find().lean();
  const exist = await Notice.find({}, null, { sort: { createdAt: -1 } }).skip(skip)
    .limit(+limit)

  const response = {
    items: exist,
    maxPages: Math.ceil(total.length / limit),
  }

  try {
    res.json(response)
  } catch (error) {
    next(error);
  }
};

const detail = async (req, res, next) => {
  const { idx } = req.params;
  try {
    const exist = await Notice.findById(idx)
    if (exist) {
      res.json(exist);
    } else {
      throwError({ statusCode: 404 });
    }
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    await Notice.deleteMany({ _id: req.body });
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
};

export {
  create,
  list,
  detail,
  remove
}