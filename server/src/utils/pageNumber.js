
export function pageNumber(maxPages) {
  var arr = new Array(); 

  for (var i = 0; i < maxPages; i++) {
    arr.push(i+ 1);
  }   
  return arr
}