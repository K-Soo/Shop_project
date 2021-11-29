import bcrypt from 'bcrypt';
import User from '../models/User';
import Basket from '../models/Basket';
import History from '../models/History';
import Point from '../models/Point';
import Product from '../models/Product';
import GuestOrder from '../models/GuestOrder';
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
    const point = new Point({ PointOwner: user._id });
    const history = new History({ user: user._id });
    point.save();
    history.save();
    await user.setPassword(password);
    await user.save();
    const token = user.generateToken();
    res.cookie('access_token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 5,
    });
    res.json({ success: true });
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

const updateUserInfo = async (req, res, next) => {
  const { idx } = req.params;
  const { phone, email, zonecode, addr1, addr2 } = req.body;
  const option = { new: true }
  try {
    const user = await User.findOneAndUpdate(
      { _id: idx },
      { $set: { phone, email, zonecode, addr1, addr2 } },
      option
    )
    if (user) {
      res.json({ success: true });
    } else {
      return throwError({ msg: '유저정보를 가져올수없습니다.' })
    }
  } catch (error) {
    next(error);
  }
};

const guestCheckout = async (req, res, next) => {
  const result = req.body;
  const { orderPassword } = req.body
  result.orderNum = orderNumber();
  const guestOrder = new GuestOrder(result);
  console.log('guestOrder: ', guestOrder);
  await guestOrder.setOrderPassword(orderPassword);
  guestOrder.save();
  try {
    res.json({ success: true, guestOrder });
  } catch (error) {
    next(error);
  }
};

const checkout = async (req, res, next) => {
  const { userId } = req.params;
  const result = req.body;
  const { Products } = result;
  result._id = new mongoose.Types.ObjectId();
  result.createdAt = createDate();
  result.orderNum = orderNumber();

  const idArray = Products.map(d => mongoose.Types.ObjectId.createFromHexString(d._id));
  const seqArray = Products.map(d => (d.seq));
  const test = [1, 2, 3,]
  try {
    const target = await User.findByUserId(userId);
    console.log('test: ', test);
    if (target) {
      const promises = Products.map(async obj =>
        await Product.findOneAndUpdate(
          { seq: obj.seq },
          { $inc: { qty: -obj.qty } },
          { new: true }
        ))
      await Promise.all(promises)

      const updatedBasket = await Basket.findOneAndUpdate(
        { BasketOwner: target.id },
        { $pull: { items: { _id: { $in: idArray } } } },
        { new: true }
      );

      const exist = await History.findOne({ user: target._id });
      await History.findOneAndUpdate(
        { user: target._id },
        { $push: { data: result } },
      )
      const findUserPoint = await Point.findOne({ PointOwner: target._id });

      const resultValue = findUserPoint.currentPoint - Number(result.pointInfo.totalUsed);
      const savePoint = result.pointInfo.estimatedPoint;
      if (resultValue < 0) return throwError({ statusCode: 400, msg: 'user Point Error' });

      if (findUserPoint) {
        const resultUpdate = await Point.findOneAndUpdate(
          { PointOwner: target._id },
          {
            $set: { currentPoint: resultValue + savePoint },
            $push: {
              pointInfo: {
                usedPoint: result.pointInfo.totalUsed ? Number(result.pointInfo.totalUsed) : 0,
                savedPoint: result.pointInfo.estimatedPoint,
                orderNum: result.orderNum
              }
            }
          },
          { new: true }
        );
        await User.findOneAndUpdate(
          { _id: target._id },
          { $set: { point: resultUpdate.currentPoint } },
        );
      }

      if (exist) {
        res.json({ success: true, updatedBasket, orderNum: result.orderNum });
      }
    }
  } catch (error) {
    next(error);
  }
};

const GuestLogIn = async (req, res, next) => {
  const { userName, OrderPassword, orderNum } = req.body;
  try {
    const exist = await GuestOrder.findOne({ orderNum, userName });

    if (!exist) {
      return throwError({ statusCode: 401, msg: '아이디를 확인해주세요.' });
    } else {
      const valid = await exist.checkPassword(OrderPassword);
      if (!valid) return throwError({ statusCode: 401 })
    }

    return res.json({ success: true, message: "로그인 성공", });
  } catch (error) {
    next(error);
    console.log('error-logIn: ', error);
  }
};

const logIn = async (req, res, next) => {
  const { userId, password } = req.body;
  try {
    const exist = await User.findByUserId(userId);
    if (!exist) return throwError({ statusCode: 401 });

    const valid = await exist.checkPassword(password);
    if (!valid) return throwError({ statusCode: 401 });

    if (exist.userId === 'admin') {
      const token = exist.generateToken();
      return res.json({ success: true, token });
    } else {
      const basket = await Basket.findOne({ BasketOwner: exist.id }, { BasketOwner: 0 });
      const token = exist.generateToken();
      // res.cookie('access_token', token, {
      //   maxAge: 1000 * 60 * 2,
      //   httpOnly: false,
      //   sameSite: "none",
      //   secure: true,
      // });

      return res.json({ success: true, token, basket });
    }
  } catch (error) {
    next(error);
    console.log('error-logIn: ', error);
  }
};

const findUserId = async (req, res, next) => {
  try {
    const existUserName = await User.findOne({ userName: req.body.userName });
    if (!existUserName) {
      return throwError({ statusCode: 401 });
    } else {
      if (existUserName.email === req.body.email) {
        return res.json({ success: true, userId: existUserName.userId });
      } else {
        return throwError({ statusCode: 401 });
      }
    }
  } catch (error) {
    next(error);
    console.error('find-id: ', error);
  }
};

const findUserPassword = async (req, res, next) => {
  const { userId, userName, email } = req.body;

  try {
    const exist = await User.findByUserId(userId);
    if (exist) {
      if (exist.email === email) {
        if (exist.userName === userName) {
          // const valid = await exist.checkPassword(password);
          return res.json({ success: true });
        } else {
          return throwError({ statusCode: 401 });
        }
      } else {
        return throwError({ statusCode: 401 });
      }
    } else {
      return throwError({ statusCode: 401 });
    }
  } catch (error) {
    next(error);
    console.error('find-password: ', error);
  }
};

export {
  register,
  logIn,
  idCheck,
  userInfo,
  checkout,
  updateUserInfo,
  guestCheckout,
  GuestLogIn,
  findUserId,
  findUserPassword
}