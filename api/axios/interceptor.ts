import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { errorHandler } from "../errorHandler";

const onRequest = (config: AxiosRequestConfig): any => {
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => response;

const onResponseError = async (error: any): Promise<AxiosError> => {
  errorHandler(error?.response);
  return Promise.reject(error);
};

export function interceptor(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
