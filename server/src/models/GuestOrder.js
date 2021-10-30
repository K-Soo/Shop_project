import mongoose from 'mongoose';
import moment from 'moment-timezone';
import bcrypt from 'bcrypt';

const { Schema } = mongoose;

const selectColorSchema = Schema({
  colorName: String,
  hexValue: String,
});

const ProductsSchema = Schema({
  new_product: Boolean,
  best_product: Boolean,
  product_type: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  consumer_price: {
    type: String,
    required: true,
  },
  product_price: {
    type: String,
    required: true,
  },
  summary_description: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  product_colors: [{
    hex_value: { type: String, required: true },
    color_name: { type: String, required: true },
  }],
  imageUrl: [
    {
      url: { type: String, required: true },
    },
  ],
  point:{
    type: Number,
    required: true,
  },
  sold: {
    type: Number,
  },
  seq: {
    type: Number,
  },
  qty:{
    type: Number,
  },
  totalConsumerPrice:{
    type: String,
    required: true,
  },
  totalProductPrice:{
    type: String,
    required: true,
  },
  selectColor: [{
    type: selectColorSchema,
    required: true,
  }],
}, {
  versionKey: false
});


const GuestOrderSchema = Schema({
  orderNum:{
    type: String,
    required: true,
    unique: true,
  },
  Products: [ProductsSchema],
  addr:{
    addr1:{
      type: String,
      required: true,
    },
    addr2:{
      type: String,
      required: true,
    },
    zoneCode:{
      type: String,
      required: true,
    },
  },
  amountInfo:{
    consumerAmount: {
      type: Number,
      required: true,
    },
    deliveryAmount: {
      type: Number,
      required: true,
    },
    discountAmount: {
      type: Number,
      required: true,
    },
    paymentAmount: {
      type: Number,
      required: true,
    },
    productAmount: {
      type: Number,
      required: true,
    },
  },
  deliveryMessage:String,
  email: {
    type: String,
    required: true,
  },
  orderPassword: {
    type: String,
    required: true,
  },
  phone:{
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    index : true
  },
  createdAt: {
    type: String,
    default: moment.tz("Asia/Seoul").format('YYYY-MM-DD'),
  }
}, {
  versionKey: false, 
});

GuestOrderSchema.methods.setOrderPassword = async function (orderPassword) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(orderPassword, salt);
  this.orderPassword = hash;
};

GuestOrderSchema.methods.checkPassword = async function (orderPassword) {
  const result = await bcrypt.compare(orderPassword, this.orderPassword);
  return result;
};

export default mongoose.model('GuestOrder', GuestOrderSchema);
