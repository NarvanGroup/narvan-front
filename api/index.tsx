import axios from 'axios';
import { config } from './config';
import { errorHandler } from './errorHandler';
import { store } from '../store';

interface ApiArgsModel {
  method: 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH';
  url: string;
  headers?: object;
  params?: object;
  data?: object;
  isAuthorizationNeeded?: boolean;
  isMapApiKeyNeeded?: boolean;
}

interface GetHeaderArgs {
  isMapApiKeyNeeded?: boolean;
}

interface Header {
  'Api-Key'?: string;
}

const getHeader = ({ isMapApiKeyNeeded }: GetHeaderArgs) => {
  const header: Header = {};

  if (isMapApiKeyNeeded) {
    header['Api-Key'] = process.env.NEXT_PUBLIC_MAP_API_KEY_SERVICE;
  }

  return header;
};

export const api = async ({ method, url, isMapApiKeyNeeded = false, ...rest }: ApiArgsModel) => {
  const instance = axios.create({
    baseURL: config.baseURL
  });

  instance.interceptors.request.use(
    (conf) => {
      // you can add some information before send it.
      // conf.headers['Auth'] = 'some token'
      return conf;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (next) => {
      return Promise.resolve(next);
    },
    (error) => {
      errorHandler(error?.response, store.dispatch);

      return Promise.reject(error);
    }
  );

  try {
    const response = await instance({
      method: method,
      url: url,
      headers: getHeader({ isMapApiKeyNeeded }),
      ...rest
    });

    if (response) {
      return response.data;
    }
  } catch (error: any) {
    return error?.response?.data;
  }
};
