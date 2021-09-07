import bcrypt from 'bcrypt';
import User from '../models/User';
import Basket from '../models/Basket';
import throwError from '../error/throwError';

const register = async (req, res, next) => {
  console.log('회원가입 요청', req.body);
  const { userId, password } = req.body;
  try {
    const exist = await User.findByUserId(userId);
    if (exist) return throwError({ statusCode: 409, msg: '이미 가입된 ID입니다' })
    const user = new User({ password, userId });
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

const logIn = async (req, res, next) => {
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
  logIn
}