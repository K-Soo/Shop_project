
import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

autoIncrement.initialize(mongoose.connection);

const ProductSchema = new mongoose.Schema(
  {
    new_product: {
      type: Boolean,
      required: true,
    },
    best_product: {
      type: Boolean,
      required: true,
    },
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
    sold: {
      type: Number,
      default: 10
    },
    seq: {
      type: Number,
      default: 0
    },
    quantity:{
      type: Number,
      default: 10,
    },
  },
);
ProductSchema.plugin(autoIncrement.plugin,
  {
    model: 'Product',
    field: 'seq',
    startAt: 0,
    increment: 1
  });


export default mongoose.model('Product', ProductSchema);