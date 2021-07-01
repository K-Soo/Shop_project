import express from 'express';
import category from './category';

const api = express.Router();

api.use('/category', category);

export default api;
