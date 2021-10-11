import mongoose from 'mongoose';
import moment from 'moment-timezone';

const { Schema } = mongoose;
/**
 * 작성자, 댓글내용, 생성일
 */
const { Types: ObjectId } = Schema;

const ProductReviewSchema = new Schema({
  commenter: {
    type: ObjectId,
    required: true,
    ref: 'User'
  },
  product: {
    type: ObjectId,
    required: true,
    ref: 'Product'
  },
  comment: {
    type: String,
    required: true,
  },
  rate:{
    type: String,
    required: true,
    default:0,
  },
  createdAt: {
    type: String,
    default: moment.tz("Asia/Seoul").format('YYYY-MM-DD hh:mm:ss'),
  }
}, {
  versionKey: false
})

export default mongoose.model('ProductReview', ProductReviewSchema);

