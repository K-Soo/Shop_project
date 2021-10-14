import mongoose from "mongoose";
import moment from 'moment-timezone';

const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;

const itemSchema = Schema({
  usedPoint: {
    type: Number,
    default: 0,
  },
  savedPoint: {
    type: Number,
    default: 0,
  },
  orderNum:{
    type:String,
  },
  createdAt: {
    type: String,
    default: moment.tz("Asia/Seoul").format('YYYY-MM-DD'),
  }
}, {
  versionKey: false
});

const PointSchema = new Schema(
  {
    PointOwner: {
      type: ObjectId,
      ref: 'User',
    },
    currentPoint: {
      type: Number,
      default: 20000,
    },
    pointInfo: [itemSchema],
  },
  {
    versionKey: false
  }
);

export default mongoose.model("Point", PointSchema);