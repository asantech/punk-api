import Axios from 'axios';

const baseURL = 'https://api.punkapi.com/v2';

export async function getBeverages(queryStr) {
  const { data: beverages } = await Axios.get(
    baseURL + '/beers' + (queryStr ? '?' + queryStr : '')
  );
  return beverages;
}
