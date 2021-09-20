import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import config from '../config';
import jwt from 'jsonwebtoken';

const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;

const UserSchema = Schema({
  userId: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  addr1: {
    type: String,
    required: true,
  },
  addr2: {
    type: String,
    required: true,
  },
  zonecode: {
    type: String,
    required: true,
  },
  point: {
    type: Number,
    default: 20000,
    index: true
  },
  likes: [String],
  histories: {
    type: ObjectId,
    ref: 'History',
  },
}, {
  timestamps: true
}
);

UserSchema.statics.findByUserId = function (userId) {
  return this.findOne({ userId });
};

UserSchema.methods.setPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  this.password = hash;
};

UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.password);
  return result;
};

UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.password;
  return data;
};

UserSchema.methods.generateToken = function () {
  const payload = { // access token에 들어갈 payload
    id: this.id,
    userId: this.userId,
    point: this.point,
  };

  const token = jwt.sign(
    payload,
    config.JWT_SECRET_KEY,
    {
      expiresIn: 10,
    }
  );
  return token;
};


export default mongoose.model("User", UserSchema);