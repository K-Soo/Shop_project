import express from 'express';
import { HistoryController} from '../../../../controllers';
import verifyToken from '../../../middleware/verifyToken';
const history = express.Router();
history.get('/guest-detail/:idx', HistoryController.guestDetail);

history.get('/:idx', verifyToken, HistoryController.list);
history.get('/:idx/:orderNum', HistoryController.userDetail);

export default history;
