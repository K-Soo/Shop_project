import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import config from '../config';

const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;

const selectColorSchema = Schema({
  colorName: String,
  hexValue: String,
});

const CartSchema = new Schema(
  {
    user: {
      type: ObjectId,
      ref: 'User'
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
    seq: {
      type: Number,
      default: 0
    },
    seq: {
      type: Number,
    },
    totalConsumerPrice: {
      type: Number,
    },
    totalProductPrice: {
      type: Number,
    },
    selectColor: [{
      type: selectColorSchema,
      required: true,
    }],
    createAt:{
      Type: Date,
      default: Date.now,
    }
  },
);



export default mongoose.model("Cart", CartSchema);