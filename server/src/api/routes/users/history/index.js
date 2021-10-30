import express from 'express';
import { HistoryController} from '../../../../controllers';

const history = express.Router();
history.get('/guest-detail/:idx', HistoryController.guestDetail);

history.get('/:idx', HistoryController.list);
history.get('/:idx/:orderNum', HistoryController.userDetail);

export default history;
