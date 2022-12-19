import api from './fetchAPI';
import { getQueryStr } from '../utils/helpers/api.helpers';

const http = {
  get: async (query, callbacks) => {
    api.createReq(
      {
        method: 'GET',
        queryStr: getQueryStr(query),
      },
      callbacks
    );
  },
  put: async (query, callbacks) => {
    api.createReq(
      {
        method: 'PUT',
        queryStr: getQueryStr(query),
      },
      callbacks
    );
  },
  delete: async (query, callbacks) => {
    api.createReq(
      {
        method: 'DELETE',
        queryStr: getQueryStr(query),
      },
      callbacks
    );
  },
  post: async (query, callbacks) => {
    api.createReq(
      {
        method: 'POST',
        queryStr: getQueryStr(query),
      },
      callbacks
    );
  },
  patch: async (query, callbacks) => {
    api.createReq(
      {
        method: 'PATCH',
        queryStr: getQueryStr(query),
      },
      callbacks
    );
  },
};

export default http;
