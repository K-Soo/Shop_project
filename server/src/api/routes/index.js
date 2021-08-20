import express from 'express';
import products from './products';

const api = express.Router();
// api ->
api.use('/products', products);

export default api;
