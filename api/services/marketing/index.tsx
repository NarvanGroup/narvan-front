import { axiosMethods } from '@/apps/customer/shared/constants/axiosMethods';
import { config } from '@customerApiConfig';
import axiosFetcher from '@customerApi';

const marketingURL = `${config.back4front}/marketing`;

export const getFaqByShopIdService = async (id: string) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      url: `${marketingURL}/faq/${id}`
    });
    return response;
  } catch (error) {
    throw new Error();
  }
};
