import express from 'express';
import { AdminController,NoticeController } from '../../../controllers';

const admin = express.Router();
// api/admin

admin.get('/sales', AdminController.TodaySales); // 모든상품 가져옴
admin.get('/point', AdminController.CurrentTotalUsedPoints); // 사용된 포인트 가져옴

admin.get('/statistics', AdminController.statistics); // 통계치
admin.put('/notice', NoticeController.remove); // 공지사항 업데이트

export default admin;

