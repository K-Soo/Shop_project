import express from 'express';
import * as categoryCtrl from './category.ctrl';

const category = express.Router();

// api/public
category.get('/list', categoryCtrl.list);

export default category;
