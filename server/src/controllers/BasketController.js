import throwError from '../../src/error/throwError';
import User from '../models/User';
import Basket from '../models/Basket';
import mongoose from 'mongoose';

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

const updateProductQty = async (req, res, next) => {
  const { idx, productId } = req.params;
  try {
    const result = await Basket.findOneAndUpdate(
      { BasketOwner: idx },
      { $set: { "items.$[el].qty": req.body.qty } },
      {
        arrayFilters: [{ "el._id": productId }],
        new: true
      }
    )
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  const { user, id } = req.params;
  try {
    if (id === 'all') {
      const exist = await Basket.findOneAndUpdate(
        { BasketOwner: user },
        { $set: { items: [] } },
        { new: true }
      );
      exist.save();
      res.json(exist);
    } else {
      const exist = await Basket.findOne({ BasketOwner: user });
      if (exist) exist.items.pull({ _id: id });
      exist.save();
      res.json(exist);
    }

  } catch (error) {
    console.log('remove-error: ', error);
    next(error);
  }
};

export {
  update,
  remove,
  updateProductQty
}