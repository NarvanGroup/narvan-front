import axiosFetcher from "api/axios";
import { config } from "api/config";
import { axiosMethods } from "shared/constants/axiosMethods";

export const getCategoriesService = async () => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      url: `${config.apiVersion1}/categories`,
    });
    return response;
  } catch (error) {}
};

export const getCategoryByIdService = async (id: string) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      url: `${config.apiVersion1}/categories/${id}`,
    });
    return response;
  } catch (error) {}
};

export const getProductsByCategoryService = async (slug) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      url: `${config.apiVersion1}/categories/${slug}?include=products`,
    });
    return response;
  } catch (error) {}
};

export const getProductsBySubCategoryService = async (slug) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      url: `${config.apiVersion1}/categories/${slug}?include=subCategories,subCategories.products`,
    });
    return response;
  } catch (error) {}
};

export const getCategoriesWithSubCategoryService = async () => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      url: `${config.apiVersion1}/categories?include=subCategories`,
    });
    return response;
  } catch (error) {}
};

export const getSubCategoryByIdService = async (id: string) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      url: `${config.apiVersion1}/sub-categories/${id}`,
    });
    return response;
  } catch (error) {}
};
