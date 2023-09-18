import { axiosMethods } from '@/apps/customer/shared/constants/axiosMethods';
import { config } from '@customerApiConfig';
import axiosFetcher from '@customerApi';

export const getProductsByCompanyIdService = async (companyId: string, params?: object) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      url: `${config.back4front}/scms/companies/${companyId}/products`,
      params
    });
    return response;
  } catch (error) {}
};

export const getProductDetailsService = async (productId: string) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      url: `${config.back4front}/scms/products/${productId}`
    });
    return response;
  } catch (error) {
    // throw new Error();
  }
};
