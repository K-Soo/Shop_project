import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  password: {
    type: String,
  },
  userName: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  addr1: {
    type: String,
  },
  addr2: {
    type: String,
  },
  zonecode: {
    type: String,
  },
  birth: {
    type: String,
  },
  solarCalendar: {
    type: boolean,
  },
  lunarCalendar: {
    type: boolean,
  },
});

export default mongoose.model("User", UserSchema);