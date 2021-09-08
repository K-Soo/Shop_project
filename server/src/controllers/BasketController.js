import throwError from '../../src/error/throwError';
import User from '../models/User';
import Basket from '../models/Basket';

const list = async (req, res, next) => {
  // console.log('req: ', req.headers);
  const { userId, password } = req.body;
  try {
    // id check
    const exist = await User.findByUserId(userId);
    if (!exist) return throwError({ statusCode: 401, msg: '아이디를 확인해주세요.' });
    // password check
    const valid = await exist.checkPassword(password);
    console.log('valid: ', valid);
    if (!valid) return throwError({ statusCode: 401 })

    const token = exist.generateToken();

    res.cookie('access_token', token, {
      maxAge: 1000 * 60 * 2,
      httpOnly: false,
      sameSite: "none",
      secure: true,
    });

    return res.json({ success: true, message: "로그인 성공", token });

  } catch (error) {
    next(error);
    console.log('error-logIn: ', error);
  }
};

const update = async (req, res, next) => {
  const { userId, items } = req.body
  try {
    const target = await User.findByUserId(userId);
    const exist = await Basket.findOne({ BasketOwner: target.id });
    if (exist) {
      exist.items.push(...items);
      exist.save();
      res.json(exist);
    } else {
      const newBasket = new Basket({ BasketOwner: target.id, items });
      newBasket.save();
      res.json(newBasket);
    };
  } catch (error) {
    next(error);
  }
};

const updateQty = async (req, res, next) => {
  const { userId, items } = req.body
  try {
    const target = await User.findByUserId(userId);
    const exist = await Basket.findOne({ BasketOwner: target.id });
    if (exist) {
      exist.items.push(...items);
      exist.save();
      res.json(exist);
    } else {
      const newBasket = new Basket({ BasketOwner: target.id, items });
      newBasket.save();
      res.json(newBasket);
    };
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  const { user, id } = req.params;
  try {
    const exist = await Basket.findOne({ BasketOwner: user });
    if(exist) exist.items.pull({_id:id});
    exist.save();
    res.json(exist);
  } catch (error) {
    console.log('remove-error: ', error);
    next(error);
  }


  try {

  } catch (error) {
    next(error);
  }
};

export {
  list,
  update,
  remove,
  updateQty
}