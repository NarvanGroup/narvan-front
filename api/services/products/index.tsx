import axiosFetcher from "api/axios";
import { config } from "api/config";
import { axiosMethods } from "shared/constants/axiosMethods";

export const getProductsService = async (pageNo = 1) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      url: `${config.apiVersion1}/products?page=${pageNo}`,
    });
    return response;
  } catch (error) {}
};

export const getProductBySlugService = async (slug: string) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      url: `${config.apiVersion1}/products/${slug}`,
    });
    return response;
  } catch (error) {}
};
