import mongoose from 'mongoose';
import moment from 'moment-timezone';

const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;

const dateSeoul = moment.tz("Asia/Seoul");

const HistorySchema = Schema({
  user: {
    type: ObjectId,
    ref: 'User',
  },
  data: {
    type: Array,
    default: [],
  }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
}, {
  timestamps: true,
});

HistorySchema.virtual('lastPage').get(function () {
  return this.data.length;
});

export default mongoose.model('History', HistorySchema);