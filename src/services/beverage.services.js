import Axios from 'axios';

import * as beverageServices from 'services/beverage.services';
import * as generalServices from 'utils/helpers/common.helpers';

Axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log('unexpected error', error);
    alert('unexpected error has occured, it is logged in the console.'); //todo: use toast error
  }

  return Promise.reject(error);
});

export async function getBeverages(queryStr) {
  const { data: beverages } = await Axios.get(
    'https://api.punkapi.com/v2' + '/beers' + (queryStr ? '?' + queryStr : '')
  );
  return beverages;
}

export async function getSelectedBeverages({ query }) {
  const queryStr = generalServices.convertQueryObjToStr(query);
  const selectedBeverages = await beverageServices.getBeverages(queryStr ?? '');
  return selectedBeverages;
}

export function setCurrentBeverage(state, beverage) {
  const newState = { ...state };
  newState.currentItem = beverage;
  return newState;
}
