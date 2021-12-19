import express from 'express';
import path from 'path';
import api from './api/routes';
import compression from 'compression';
import cors from 'cors';
import config from './config';
import mongooseLoader from './loaders/mongooseLoader';
import serverLoader from './loaders/serverLoader';
import generalErrorHandler from './error/generalErrorHandler';
import cookieParser from 'cookie-parser';

const app = express();

const prod = process.env.NODE_ENV === 'production';

app.use(compression());
app.use(express.json());
app.use(cors({ origin: true, credentials: true,  exposedHeaders: ["set-cookie"], }));
app.use(cookieParser());

app.use('/api', api);
app.use(generalErrorHandler);

// if(prod){
//   app.use(express.static(path.join(__dirname,"../../client/public")));
//   app.use(express.static(path.join(__dirname,"../../client/.next")));
// }



mongooseLoader(); // DB 연결
//서버연결
app.listen(config.PORT, () => {
  console.log(`✅ server port ${config.PORT} successfully!`);
});
