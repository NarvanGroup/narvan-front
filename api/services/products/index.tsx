import axiosFetcher from "api/axios";
import { config } from "api/config";
import { axiosMethods } from "shared/constants/axiosMethods";

export const getProductsService = async () => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      url: `${config.apiVersion1}/products`,
    });
    return response;
  } catch (error) {}
};

export const getProductByIdService = async (id: string) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      url: `${config.apiVersion1}/products/${id}`,
    });
    return response;
  } catch (error) {}
};
