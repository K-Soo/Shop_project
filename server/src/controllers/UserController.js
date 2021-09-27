import bcrypt from 'bcrypt';
import User from '../models/User';
import Basket from '../models/Basket';
import History from '../models/History';
import throwError from '../error/throwError';
import response from '../error/response';
import moment from 'moment-timezone';
import { createDate, orderNumber } from '../utils';
import mongoose from 'mongoose';

const register = async (req, res, next) => {
  const { userId, password } = req.body;
  try {
    const exist = await User.findByUserId(userId);
    if (exist) return throwError({ statusCode: 409, msg: '이미 가입된 ID입니다' })
    const user = new User(req.body);
    await user.setPassword(password);
    await user.save();
    const token = user.generateToken();
    res.cookie('access_token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 5,
    });
    res.json(user.serialize());

    // res.status(201).json({
    //   result: 'ok',
    //   token
    //   });

  } catch (error) {
    next(error);
  }
};

const idCheck = async (req, res, next) => {
  const { userId } = req.body;
  try {
    const exist = await User.findByUserId(userId);
    if (exist) {
      res.json({ success: false });
    } else {
      res.json({ success: true });
    }
  } catch (error) {
    next(error);
  }
};

const userInfo = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id, { password: 0 });
    if (user) {
      res.json(user.serialize());
    } else {
      return throwError({ msg: '유저정보를 가져올수없습니다.' })
    }
  } catch (error) {
    next(error);
  }
};

const checkout = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const result = req.body;
    let idArray = [];
    result.Products.map(d => idArray.push(mongoose.Types.ObjectId.createFromHexString(d._id)));
    const target = await User.findByUserId(userId);
    const exist = await History.findOne({ user: target._id });

    const replaceBasket = await Basket.findOneAndUpdate(
      { BasketOwner: target.id },
      { $pull: { items: { _id: { $in: idArray } } } },
      {
        new: true
      }
    );

    result._id = new mongoose.Types.ObjectId();
    result.createAt = createDate();
    result.orderNum = orderNumber();
    if (exist) {
      exist.data.push(result);
      exist.save();
      res.json(replaceBasket);
    } else {
      const history = new History({ user: target._id, data: result });
      history.save();
      res.json(history);
    }
  } catch (error) {
    next(error);
  }
};

const logIn = async (req, res, next) => {
  // console.log('req: ', req.headers);
  const { userId, password } = req.body;

  try {
    // id check
    const exist = await User.findByUserId(userId);
    if (!exist) return throwError({ statusCode: 401, msg: '아이디를 확인해주세요.' });
    // password check
    const valid = await exist.checkPassword(password);
    if (!valid) return throwError({ statusCode: 401 })
    // 장바구니 정보
    const basket = await Basket.findOne({ BasketOwner: exist.id }, { BasketOwner: 0 });
    console.log('basket: ', basket);

    const token = exist.generateToken();
    res.cookie('access_token', token, {
      maxAge: 1000 * 60 * 2,
      httpOnly: false,
      sameSite: "none",
      secure: true,
    });

    return res.json({ success: true, message: "로그인 성공", token, basket });

  } catch (error) {
    next(error);
    console.log('error-logIn: ', error);
  }
};

export {
  register,
  logIn,
  idCheck,
  userInfo,
  checkout
}