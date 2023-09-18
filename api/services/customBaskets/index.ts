import { axiosMethods } from '@/apps/customer/shared/constants/axiosMethods';
import { config } from '@customerApiConfig';
import axiosFetcher from '@customerApi';

const baseURL = `${config.back4front}/scms/custom-baskets`;

export const getCustomBasketService = async (orderId: string) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      url: `${baseURL}/${orderId}?include=Items.Product.Media&include=items.ProductVariant`
    });

    return response;
  } catch (error) {}
};
