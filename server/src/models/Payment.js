
import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  user:{
    type: Array,
    default: []
  },
  data: {
    type: Array,
    default: []
  },
  product:{
    type: Array,
    default: []
  }
},
{
  versionKey: false 
}
);

export default mongoose.model('Payment', PaymentSchema);