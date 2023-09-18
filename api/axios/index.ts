import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { config } from "../config";
import { interceptor } from "./interceptor";

interface ApiArgsModel {
  method: "POST" | "GET" | "DELETE" | "PUT" | "PATCH" | string;
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
  "Api-Key"?: string;
}

const getHeader = ({ isMapApiKeyNeeded }: GetHeaderArgs) => {
  const header: Header = {};
  if (isMapApiKeyNeeded) {
    header["Api-Key"] = process.env.NEXT_PUBLIC_MAP_API_KEY_SERVICE;
  }
  return header;
};

async function axiosFetcher({
  method,
  url,
  isMapApiKeyNeeded = false,
  ...rest
}: ApiArgsModel) {
  const Axios = axios.create({
    baseURL: config.baseURL,
  });

  const data: AxiosRequestConfig = {
    method,
    url,
    headers: getHeader({ isMapApiKeyNeeded }),
    ...rest,
  };

  return await interceptor(Axios)(data)
    .then((response: AxiosResponse) => response.data)
    .catch((error) => error.response.data);
}

export default axiosFetcher;
