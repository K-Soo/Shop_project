export function CurrentTime() {
  const CurrentDate = new Date();
  const year = CurrentDate.getFullYear();
  const month = CurrentDate.getMonth() + 1;
  const date = CurrentDate.getDate();
  const hours = CurrentDate.getHours().toString();
  const getHours = hours.length === 1 ? "0" + hours : hours;
  const minutes = CurrentDate.getMinutes();
  const getTimes = `${year}.${month}.${date} ${getHours}:${minutes} 기준`

  return getTimes;
}