import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import config from '../config';

const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;

const selectColorSchema = Schema({
  colorName: String,
  hexValue: String,
});

const itemSchema = Schema({
  ProductId: {
    type: ObjectId,
  },
  new_product: {
    type: Boolean,
  },
  best_product: {
    type: Boolean,
  },
  product_type: {
    type: String,
  },
  category: {
    type: String,
  },
  name: {
    type: String,
  },
  consumer_price: {
    type: String,
  },
  product_price: {
    type: String,
  },
  summary_description: {
    type: String,
  },
  description: {
    type: String,
  },
  product_colors: [{
    hex_value: String,
    color_name: String,
  }],
  imageUrl: [
    {
      url: String,
    }
  ],
  qty: {
    type: Number,
    default: 0
  },
  seq: {
    type: Number,
  },
  totalConsumerPrice: {
    type: String,
  },
  totalProductPrice: {
    type: String,
  },
  point: {
    type: Number,
  },
  selectColor: [{
    type: selectColorSchema,
    required: true,
  }],
}, {
  versionKey: false
});



const BasketSchema = new Schema(
  {
    BasketOwner: {
      type: ObjectId,
      ref: 'User',
    },
    items: [itemSchema],
  },
);


export default mongoose.model("Basket", BasketSchema);