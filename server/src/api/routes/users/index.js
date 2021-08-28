import express from 'express';
import { UserController } from '../../../controllers';
import {  body } from "express-validator";
import {validateRequestSchema} from '../../middleware/validateRequestSchema';
import multer from 'multer';

const users = express.Router();

const upload = multer({
  dest : 'uploads/'
});

// api/auth
users.post('/register', UserController.register);

users.post('/login', body("name").isLength({ min: 2 }), validateRequestSchema, UserController.logIn);

// users.post('/check', '');
// users.post('/logout', '');

export default users;

