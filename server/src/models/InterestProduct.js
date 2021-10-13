import mongoose from "mongoose";

const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;

const itemSchema = Schema({
  _id: {
    type: ObjectId,
  },
  best_product: {
    type: Boolean,
  },
  category: {
    type: String,
  },
  consumer_price: {
    type: String,
  },
  description: {
    type: String,
  },
  imageUrl: [
    {
      url: String,
    }
  ],
  name: {
    type: String,
  },
  new_product: {
    type: Boolean,
  },
  product_colors: [{
    hex_value: String,
    color_name: String,
  }],
  product_price: {
    type: String,
  },
  product_type: {
    type: String,
  },
  summary_description: {
    type: String,
  },
  qty: {
    type: Number,
    default: 0
  },
  seq: {
    type: Number,
  },
},
  { versionKey: false, }
);

const InterestProductSchema = new Schema({
  InterestProductOwner: {
    type: ObjectId,
    ref: 'User',
  },
  item: [itemSchema],
},
  {
    versionKey: false,
  }
);

export default mongoose.model("InterestProduct", InterestProductSchema);