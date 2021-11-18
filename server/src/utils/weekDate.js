export function weekDate(day) {
  const count = Array.from({ length: day }, (v, i) => i + 1);
  const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const result = count.map(d => {
    let nDay = new Date();
    nDay.setDate(nDay.getDate() - d);
    const year = nDay.getFullYear();
    const month = nDay.getMonth() + 1;
    const date = nDay.getDate().toString().length === 1 ? 0 + nDay.getDate().toString() : nDay.getDate();
    const day = days[nDay.getDay()]
    return `${year}-${month}-${date} ${day}`;
  }).sort();

  return result;
}