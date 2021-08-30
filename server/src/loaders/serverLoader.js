import express from 'express';
import config from '../config';

const app = express();

export default () => {
  app.listen(config.PORT, () => {
    console.log(`✅ server port ${config.PORT} successfully!`);
  });
}