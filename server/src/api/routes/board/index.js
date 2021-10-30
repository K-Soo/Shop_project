import express from 'express';
import { NoticeController } from '../../../controllers';

const board = express.Router();

board.post('/notice', NoticeController.create);
board.get('/notice', NoticeController.list);

export default board;