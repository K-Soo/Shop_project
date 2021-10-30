import Notice from '../models/Notice';

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

  const exist = await Notice.find();
  console.log('exist: ', exist);
  console.log('length: ', exist.length);
  try {
    res.json(exist)
  } catch (error) {
    next(error);
  }
};

export {
  create,
  list,
}