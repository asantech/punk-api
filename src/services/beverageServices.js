import Axios from 'axios';

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
