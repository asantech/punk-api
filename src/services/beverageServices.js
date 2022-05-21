import Axios from 'axios';

import * as beverageServices from '../services/beverageServices';
import * as generalServices from '../services/generalServices';

Axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log('unexpected error', error);
    alert('unexpected error has occured, it is logged in the console.');
  }

  return Promise.reject(error);
});

const baseURL = 'https://api.punkapi.com/v2';

export async function getBeverages(queryStr) {
  const { data: beverages } = await Axios.get(
    baseURL + '/beers' + (queryStr ? '?' + queryStr : '')
  );
  return beverages;
}

export async function getSelectedBeverages({ query }) {
  const queryStr = generalServices.convertQueryObjToStr(query);
  const selectedBeverages = await beverageServices.getBeverages(queryStr ?? '');
  return selectedBeverages;
}

export function setCurrentBeverage(state, beverageInfo) {
  const newState = { ...state };
  newState.currentBeverage = beverageInfo;
  return newState;
}
