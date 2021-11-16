import History from '../models/History';
import mongoose from 'mongoose';
import GuestOrder from '../models/GuestOrder';
import Point from '../models/Point';
import throwError from '../error/throwError';

const TodaySales = async (req, res, next) => {
  try {
    let exist = await History.find({}).lean();
    console.log('exist: ', exist);

    if (exist) {
      const result = exist.reduce((acc, cur) => {
        cur.data.filter(d => d.createdAt.split(" ")[0] === '2021-11-15' ? acc.push(d) : d);
        return acc
      }, []);

      const response = {
        paymentComplete: result.length,
        totalAmount: result.reduce((acc, cur) => acc += cur.amountInfo.paymentAmount, 0),
        ProductCnt: result.reduce((acc, cur) => acc += cur.Products.length, 0),
      }
      res.json(response);
    } else {
      throwError();
    }
  } catch (error) {
    next(error);
    console.log('error-history: ', error);
  }
};

const CurrentTotalUsedPoints = async (req, res, next) => {
  try {
    let exist = await History.find({}).lean();
    console.log('exist: ', exist);

    if (exist) {
      const result = exist.reduce((acc, cur) => {
        cur.data.map(d => acc.push(d));
        return acc
      }, []);

      const response = {
        totalAmount: result.reduce((acc, cur) => acc += cur.amountInfo.paymentAmount, 0),
        totalPoints: result.reduce((acc, cur) => acc += +cur.pointInfo.totalUsed, 0),
        ProductCnt: result.reduce((acc, cur) => acc += cur.Products.length, 0),
      }
      res.json(response);
    } else {
      throwError();
    }
  } catch (error) {
    next(error);
    console.log('error-history: ', error);
  }
};


export {
  TodaySales,
  CurrentTotalUsedPoints
}

