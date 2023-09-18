import { BasketPayoffDataModel, CalculatePriceDataModel } from '@/apps/customer/models';
import { axiosMethods } from '@/apps/customer/shared/constants/axiosMethods';
import { config } from '@customerApiConfig';
import axiosFetcher from '@customerApi';

export const basketsApiURL = `${config.back4front}/scms/baskets`;

export const getBasketDetailsService = async (basketId: string) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      url: `${basketsApiURL}/${basketId}?include=Items.Product.Media`
    });
    return response;
  } catch (error) {
    throw new Error();
  }
};

export const basketCalculatePriceService = async (data: CalculatePriceDataModel) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.post,
      url: `${basketsApiURL}/calculate-price`,
      data
    });
    return response;
  } catch (error) {
    throw new Error();
  }
};

export const basketPayoffService = async (data: BasketPayoffDataModel) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.post,
      url: `${basketsApiURL}/payoff`,
      data
    });
    return response;
  } catch (error) {
    throw new Error();
  }
};

export const getPaymentStatusService = async (basketId: string) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      url: `${basketsApiURL}/${basketId}/status`
    });
    return response;
  } catch (error) {
    throw new Error();
  }
};
