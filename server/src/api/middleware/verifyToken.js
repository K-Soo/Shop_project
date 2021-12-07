import jwt from "jsonwebtoken";
import config from "../../config";
import throwError from '../../error/throwError';

export default (req, res, next) => {
  if (req.headers.authorization) {
    try {
      const token = req.headers.authorization.split('Bearer ')[1];
      const decoded = jwt.verify(token, config.JWT_SECRET_KEY);
      return next();
    } catch (error) {
      // return next(error);
      console.log('error: ', error);
      if (error.name === 'TokenExpiredError') {
        return throwError({ statusCode: 419, msg: error.name });
		  }
        return throwError({ statusCode: 401 });
    }
  }else{
    return throwError({ statusCode: 401,msg:'token does not exist, Unauthorized' });
  }
};
