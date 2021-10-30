import mongoose from 'mongoose';
import moment from 'moment-timezone';
const { Schema } = mongoose;

const NoticeSchema = Schema({
  title: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  createdAt: {
    type: String,
    default: moment.tz("Asia/Seoul").format('YYYY-MM-DD'),
  }
}, {
  versionKey: false,
});

export default mongoose.model("Notice", NoticeSchema);