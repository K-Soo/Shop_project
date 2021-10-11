import throwError from '../../src/error/throwError';
import InterestProduct from '../models/InterestProduct';
import User from '../models/User';
import Product from '../models/Product';
import mongoose from 'mongoose';

const list = async (req, res, next) => {
  console.log(req.body);
  const { idx } = req.params;
  const { page } = req.query;
  const limit = 1;
  const skip = limit * (page - 1);

  try {
    if (!mongoose.Types.ObjectId.isValid(idx)) {
      throwError({statusCode: 404 });
    }

    const _id = mongoose.Types.ObjectId.createFromHexString(idx);
    let lastPage = await InterestProduct.findOne({ InterestProductOwner: _id });
    console.log('lastPage: ', lastPage);

    // let exist = await InterestProduct.findOne({ user: _id },
    //   { data: { $slice: [skip, limit] }, createdAt: 0, updatedAt: 0, __v: 0, _id: 0 }).lean();

    
    if (lastPage) {
      lastPage.maxPages = lastPage.item.length
      res.json(lastPage);
    } else {
      lastPage.maxPages = lastPage.item.length
      res.json(lastPage);
    }
  } catch (error) {
    next(error);
    console.log('error-history: ', error);
  }
};


const update = async (req, res, next) => {
  const { userId, name } = req.body;
  try {
    const target = await User.findByUserId(userId);
    const exist = await InterestProduct.findOne({ InterestProductOwner: target.id });

    const findProduct = await Product.findOne({name});
    if(!findProduct) return throwError({statusCode:404,msg: '상품id를 찾을수없음'});

    if (exist) {
      const duplicated = exist.item.filter(d => d.name == name);
      if(duplicated.length){
        return res.json({ duplicate: true });
      }
      exist.item.push(findProduct);
      exist.save();
      res.json({ success: true });
    } else {
      const result = new InterestProduct({ InterestProductOwner: target.id, item:findProduct });
      result.save();
      res.json({ success: true });
    };
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  const { idx, productId } = req.params;
  try {
    const exist = await InterestProduct.findOne({ InterestProductOwner: idx });
    if(exist){
      const result = exist.item.filter((d) => String(d._id) !== String(productId));
      exist.item = result;
      exist.save();
      res.json({success:true});
    }else{
      throwError({statusCode: 404 });
    }
  } catch (error) {
    console.log('remove-error: ', error);
    next(error);
  }
};

export {
  update,
  list,
  remove
}
