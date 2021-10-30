import express from 'express';
import products from './products';
import users from './users';
import board from './board';

const api = express.Router();

api.use('/products', products);
api.use('/users', users);
api.use('/board', board);

export default api;
