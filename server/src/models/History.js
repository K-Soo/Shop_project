import mongoose from 'mongoose';
import moment from 'moment-timezone';

const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;

const dateSeoul = moment.tz("Asia/Seoul");
console.log('dateSeoul: ', dateSeoul);

const HistorySchema = Schema({
  user: {
    type: ObjectId,
    ref: 'User',
  },
  data: {
    type: Array,
    default: [],
    timestamps: {
      type: Date,
      default: dateSeoul,
    }
  }
}, {
  timestamps: {
    type: Date,
    default: dateSeoul,
  }
});

export default mongoose.model('History', HistorySchema);