import express from 'express';
import { NoticeController } from '../../../controllers';

const board = express.Router();

board.post('/notice', NoticeController.create);
board.get('/notice', NoticeController.list);
board.get('/notice/:idx', NoticeController.detail);

export default board;