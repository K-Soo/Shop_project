import express from 'express';
import { UserController, PointController } from '../../../controllers';
import { body } from "express-validator";
import { validateRequestSchema } from '../../middleware/validateRequestSchema';
import multer from 'multer';
import history from './history';
import interestProduct from './interestProduct';
import basket from './basket';

const users = express.Router();

const upload = multer({
  dest: 'uploads/'
});

users.use('/interest-product',interestProduct);
users.use('/history',history);
users.use('/basket',basket);

users.post('/register', UserController.register);
users.post('/check', UserController.idCheck);
users.post('/login', UserController.logIn);

users.get('/point/:idx',PointController.list);
users.get('/point/:idx/info',PointController.userInfo);
users.get('/:id', UserController.userInfo);
users.put('/:idx', UserController.updateUserInfo);

users.post('/checkout/:userId', UserController.checkout);

// users.get('/interest-product/:idx', InterestProductController.list);
// users.get('/basket', BasketController.list);
// users.put('/interest-product', InterestProductController.update);
// users.put('/basket', BasketController.update);
// users.put('/basket/:idx/:productId', BasketController.updateProductQty);
// users.delete('/interest-product/:idx/:productId', InterestProductController.remove);
// users.delete('/basket/:user/:id', BasketController.remove);

export default users;

