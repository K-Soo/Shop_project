import moment from 'moment-timezone';

export function createDate(){
  return moment.tz("Asia/Seoul").format('YYYY-MM-DD HH:mm:ss');
}