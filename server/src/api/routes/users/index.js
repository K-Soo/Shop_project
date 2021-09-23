import express from 'express';
import { UserController, BasketController,HistoryController } from '../../../controllers';
import { body } from "express-validator";
import { validateRequestSchema } from '../../middleware/validateRequestSchema';
import multer from 'multer';
import history from './history';

const users = express.Router();

const upload = multer({
  dest: 'uploads/'
});

users.get('/basket', BasketController.list);
users.put('/basket', BasketController.update);

users.post('/register', UserController.register);
users.post('/check', UserController.idCheck);
users.post('/login', UserController.logIn);

users.get('/:id', UserController.userInfo);

users.get('/history/:idx', HistoryController.list);
users.get('/history/:idx/:orderNum', HistoryController.historyDetail);

users.post('/checkout/:userId', UserController.checkout);
users.delete('/basket/:user/:id', BasketController.remove);


// users.post('/login', body("name").isLength({ min: 2 }), validateRequestSchema, UserController.logIn);


// users.post('/check', '');
// users.post('/logout', '');

export default users;

