dotenv.config();
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import api from './api/routes';
import compression from 'compression';
import cors from 'cors';

const { PORT,MONGO_URI } = process.env;
console.log('MONGO_URI: ', MONGO_URI);
const app = express();

// const prod = process.env.NODE_ENV === 'production';
app.use(compression());
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
// app.use(cookieParser());

app.use('/api', api);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('MongoDB successfully');
  })
  .catch(e => {
    console.log('mongoDB error', e);
  });

//서버연결
app.listen(8000, () => {
  console.log(`server port ${PORT} successfully!`);
});
