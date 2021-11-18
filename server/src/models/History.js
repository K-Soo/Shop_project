import mongoose from 'mongoose';

const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;

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
  versionKey: false 
});

HistorySchema.virtual('maxPages').get(function () {
  return this.data.length;
});

export default mongoose.model('History', HistorySchema);
