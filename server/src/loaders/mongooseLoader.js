import mongoose from 'mongoose';
import config from '../config';

export default () => {
  const db = mongoose.connection;
  const connect = () => {
    mongoose.connect(config.MONGO_URI,
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
  }
  connect();
  const handleOpen = () => console.info("✅ mongoDB Connection Successful");
  const handleError = (error) => console.error('❌mongoDB Connection Failed', error);

  db.once("open", handleOpen);
  db.on("error", handleError);
}