import moment from 'moment-timezone';

export function orderNumber() {
  const date =  moment.tz("Asia/Seoul").format('YYYYMMDD');
  const rand = Math.floor(100000 + Math.random() * 900000);

  return date + '-' + String(rand);
}