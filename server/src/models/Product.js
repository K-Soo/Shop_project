
import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

autoIncrement.initialize(mongoose.connection);

const ProductSchema = new mongoose.Schema(
  {
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
    product_colors: [
      {
        hex_value: String,
        color_name: String,
      }
    ],
    imageUrl: [
      {
        url: String,
      }
    ],
    seq: {
      type: Number,
      default: 0
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