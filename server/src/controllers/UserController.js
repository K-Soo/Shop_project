import bcrypt from 'bcrypt';
import User from '../models/User';
import Basket from '../models/Basket';
import History from '../models/History';
import Point from '../models/Point';
import Product from '../models/Product';
import throwError from '../error/throwError';
import response from '../error/response';
import moment from 'moment-timezone';
import { createDate, orderNumber } from '../utils';
import mongoose from 'mongoose';
import ObjectId from 'bson-objectid';

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

const checkout = async (req, res, next) => {
  const { userId } = req.params;
  const result = req.body;
  const { Products } = result;
  result._id = new mongoose.Types.ObjectId();
  result.createAt = createDate();
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
          {seq: obj.seq}, 
          {$inc:{qty: -obj.qty}},
          {new:true}
          )
          )
          await Promise.all(promises)

      const updatedBasket = await Basket.findOneAndUpdate(
        { BasketOwner: target.id },
        { $pull: { items: { _id: { $in: idArray } } } },
        { new: true }
        );
      // let product = await Product.find({ seq: { $in: seqArray } });

      // const CalculatedQty = [...product, ...Products].reduce((acc, cur) => {
      //   const element = acc.find(item => item.seq === cur.seq)
      //   element ? element.qty -= cur.qty : acc.push(cur)
      //   return acc
      // }, []);


      const exist = await History.findOne({ user: target._id });
      await History.findOneAndUpdate(
        { user: target._id },
        { $push: { data: result } },
      )
      const findUserPoint = await Point.findOne({ PointOwner: target._id });

      const resultValue = findUserPoint.currentPoint - Number(result.pointInfo.totalUsed);
      console.log('resultValue: ', resultValue);
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
        // exist.data.push(result);
        // exist.save();
        res.json({ success: true, updatedBasket });
      }
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
  checkout,
  updateUserInfo
}