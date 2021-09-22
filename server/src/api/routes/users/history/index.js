import express from 'express';
import { HistoryController} from '../../../../controllers';

const history = express.Router();

history.get('/list', HistoryController.list);



export default history;
