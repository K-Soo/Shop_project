import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';
import api from './api/routes';
import compression from 'compression';
import cors from 'cors';

const { PORT } = process.env;
const app = express();

// const prod = process.env.NODE_ENV === 'production';
app.use(compression());
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
// app.use(cookieParser());

app.use('/api', api);


//서버연결
app.listen(8000, () => {
  console.log(`server port ${PORT} successfully!`);
});
