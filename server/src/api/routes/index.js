import express from 'express';
import products from './products';
import users from './users';

const api = express.Router();

api.use('/products', products);
api.use('/users', users);

export default api;
