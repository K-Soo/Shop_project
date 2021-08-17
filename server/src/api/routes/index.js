import express from 'express';
import product from './product';

const api = express.Router();

api.use('/product', product);

export default api;
