import { axiosMethods } from '@/apps/customer/shared/constants/axiosMethods';
import { config } from '@customerApiConfig';
import axiosFetcher from '@customerApi';

const shopsURL = `${config.back4front}/scms/shops`;

export const getShopByIdService = async (storeId: string) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      url: `${shopsURL}/${storeId}`
    });

    return response;
  } catch (error) {}
};

export const getLabelsByShopIdService = async (storeId: string) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      url: `${shopsURL}/${storeId}/labels`
    });

    return response;
  } catch (error) {}
};
