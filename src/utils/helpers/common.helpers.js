import { isPlainObject, has } from 'lodash';

export function isPlainObjectAndHasProp(obj, prop) {
  return isPlainObject(obj) && has(obj, prop);
}

export function convertQueryObjToStr(query) {
  let queryStr = '';
  for (let i in query) {
    if (queryStr !== '') queryStr += '&';
    queryStr += i + '=' + query[i];
  }
  return queryStr;
}
