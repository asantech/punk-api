import { isPlainObjectAndHasProp } from '../utils/helpers/common.helpers';

const apiCfg = {
  // baseURL: process.env.REACT_APP_BASE_URL,
  baseURL: 'https://api.punkapi.com/v2',
  url: '/beers',
};

async function createReq(cfg, callbacks) {
  const { method, queryStr } = cfg;
  isPlainObjectAndHasProp(callbacks, 'beforeReq') && callbacks.beforeReq();
  try {
    const res = await fetch(apiCfg.baseURL + apiCfg.url + queryStr, {
      method,
    });

    if (res.ok && res.status === 200) {
      await res.json().then(data => {
        isPlainObjectAndHasProp(callbacks, 'afterSuccess') &&
          callbacks.afterSuccess(data);
        isPlainObjectAndHasProp(callbacks, 'afterReq') && callbacks.afterReq();
      });
    }
  } catch (error) {
    isPlainObjectAndHasProp(callbacks, 'onError') && callbacks.onError(error);
    isPlainObjectAndHasProp(callbacks, 'afterReq') && callbacks.afterReq();
  }
}

const api = {
  createReq,
};
export default api;
