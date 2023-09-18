import { axiosMethods } from '@/apps/customer/shared/constants/axiosMethods';
import { config } from '@customerApiConfig';
import axiosFetcher from '@customerApi';

const geoURL = `${config.back4front}/geo`;

export const getProvincesService = async () => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      url: `${geoURL}/provinces?take=31`
    });
    return response;
  } catch (error) {
    throw new Error();
  }
};

export const getCitiesService = async (provinceId: string) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      url: `${geoURL}/provinces/${provinceId}/cities?take=500`
    });
    return response;
  } catch (error) {
    throw new Error();
  }
};
