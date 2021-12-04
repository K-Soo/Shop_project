import History from '../models/History';
import mongoose from 'mongoose';
import GuestOrder from '../models/GuestOrder';
import Point from '../models/Point';
import throwError from '../error/throwError';
import moment from 'moment-timezone';
import {weekDate} from '../utils/weekDate';

const TodaySales = async (req, res, next) => {
  const currentDate = moment.tz("Asia/Seoul").format('YYYY-MM-DD');
  try {
    let exist = await History.find({}).lean();

    if (exist) {
      const result = exist.reduce((acc, cur) => {
        cur.data.filter(d => d.createdAt.split(" ")[0] === currentDate ? acc.push(d) : d);
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

const statistics = async (req, res, next) => {
  const { type } = req.query;

  const dateArray = weekDate(7);
  try {
    let exist = await History.find({}).lean();

    if (exist) {
      const result = [];
      if (type === 'cnt') {
        const dupProductCnt = exist.reduce((acc, cur) => {
          dateArray.map(date => {
            const filteredCnt = cur.data.filter(d => d.createdAt.split(" ")[0] === date.split(" ")[0]).length
            let sum = 0;
            if (filteredCnt) {
              sum += filteredCnt;
            }
            acc.push({ date, value: sum });
          });
          return acc
        }, []).
        forEach(function (a) {
          if (!this[a.date]) {
            this[a.date] = { date: a.date, value: 0 };
            result.push(this[a.date]);
          }
          this[a.date].value += +a.value;
        }, Object.create(null));

        res.json(result);

      } else if (type === 'amount') {
        const dupProductAmount = exist.reduce((acc, cur) => {
          dateArray.map(date => {
            const filteredCnt = cur.data.filter(d => d.createdAt.split(" ")[0] === date.split(" ")[0])
            let mount = 0;
            const totalAmount = filteredCnt.map(d => mount += d.amountInfo.paymentAmount);
            acc.push({ date, value: mount });
          });
          return acc
        }, []).
        forEach(function (a) {
          if (!this[a.date]) {
            this[a.date] = { date: a.date, value: 0 };
            result.push(this[a.date]);
          }
          this[a.date].value += +a.value;
        }, Object.create(null));
        res.json(result);
      }
    } else {
      throwError();
    }
  } catch (error) {
    next(error);
    console.log('error-statistics: ', error);
  }
};

export {
  TodaySales,
  CurrentTotalUsedPoints,
  statistics,
}

