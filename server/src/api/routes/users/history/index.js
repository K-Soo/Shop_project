import express from 'express';
import { HistoryController} from '../../../../controllers';

const history = express.Router();

history.get('/:idx', HistoryController.list);
history.get('/:idx/:orderNum', HistoryController.historyDetail);

export default history;
