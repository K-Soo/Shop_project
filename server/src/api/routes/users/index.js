import express from 'express';
import { UserController, PointController } from '../../../controllers';
import { body } from "express-validator";
import { validateRequestSchema } from '../../middleware/validateRequestSchema';
import multer from 'multer';
import history from './history';
import interestProduct from './interestProduct';
import basket from './basket';
import verifyToken from '../../middleware/verifyToken';

const users = express.Router();

const upload = multer({
  dest: 'uploads/'
});

users.use('/interest-product', interestProduct);
users.use('/history', history);
users.use('/basket', basket);

users.post('/register', UserController.register);
users.post('/check', UserController.idCheck);
users.post('/login', UserController.logIn);
users.post('/find-id', UserController.findUserId);
users.post('/find-password', UserController.findUserPassword);
users.post('/guest-login', UserController.GuestLogIn);
users.post('/guest-checkout/', UserController.guestCheckout);
users.put('/find-password', UserController.updatePassword);

users.get('/point/:idx', verifyToken, PointController.list);
users.get('/point/:idx/info', verifyToken, PointController.userInfo);
users.get('/:id', UserController.userInfo);
users.put('/:idx', verifyToken, UserController.updateUserInfo);

users.post('/checkout/:userId', UserController.checkout);

export default users;

