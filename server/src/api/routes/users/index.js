import express from 'express';
import { UserController, BasketController,HistoryController,InterestProductController } from '../../../controllers';
import { body } from "express-validator";
import { validateRequestSchema } from '../../middleware/validateRequestSchema';
import multer from 'multer';
import history from './history';

const users = express.Router();

const upload = multer({
  dest: 'uploads/'
});
users.put('/interest-product', InterestProductController.update);
users.delete('/interest-product/:idx/:productId', InterestProductController.remove);

users.get('/basket', BasketController.list);
users.put('/basket', BasketController.update);

users.post('/register', UserController.register);
users.post('/check', UserController.idCheck);
users.post('/login', UserController.logIn);

users.get('/:id', UserController.userInfo);
users.get('/interest-product/:idx', InterestProductController.list);

users.get('/history/:idx', HistoryController.list);
users.get('/history/:idx/:orderNum', HistoryController.historyDetail);

users.post('/checkout/:userId', UserController.checkout);
users.delete('/basket/:user/:id', BasketController.remove);

users.put('/basket/:idx/:productId', BasketController.updateProductQty);

export default users;

