import { orderBy } from 'lodash';

export function sortList(list, sortBy) {
  const { by, order } = sortBy;
  return orderBy(list, [by], [order]);
}
