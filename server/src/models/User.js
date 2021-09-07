import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import config from '../config';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  password: {
    type: String,
  },
  // userName: {
  //   type: String,
  // },
  // phone: {
  //   type: String,
  // },
  // email: {
  //   type: String,
  //   unique: true,
  // },
  // addr1: {
  //   type: String,
  // },
  // addr2: {
  //   type: String,
  // },
  // zonecode: {
  //   type: String,
  // },
  // birth: {
  //   type: String,
  // },
  // solarCalendar: {
  //   type: boolean,
  // },
  // lunarCalendar: {
  //   type: boolean,
  // },
});

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
  console.log('data: ', data);
  return data;
};

UserSchema.methods.generateToken = function () {
  const payload = { // access token에 들어갈 payload
    id: this.id,
    userId: this.userId,
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