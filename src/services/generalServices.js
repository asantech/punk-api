export function convertQueryObjToStr(query) {
  let queryStr = '';
  for (let i in query) {
    if (queryStr !== '') queryStr += '&';
    queryStr += i + '=' + query[i];
  }
  return queryStr;
}
