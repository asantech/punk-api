import { isPlainObject, isString, forEach } from 'lodash';

export function getQueryStr(query, prefix) {
  if (isString(query)) return query;
  if (isPlainObject(query)) {
    let queryStr = '';
    forEach(query, (val, key) => {
      if (queryStr !== '') queryStr += '&';
      queryStr += key + '=' + val;
    });
    return (prefix ? prefix : '') + queryStr;
  }
}
