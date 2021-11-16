import express from 'express';
import products from './products';
import users from './users';
import board from './board';
import admin from './admin';

const api = express.Router();

api.use('/admin', admin);
api.use('/products', products);
api.use('/users', users);
api.use('/board', board);

export default api;
