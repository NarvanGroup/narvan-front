import { GetAddressByCoordsData, SearchMapByTermAndCoordsData } from '@/apps/customer/models/map';
import { axiosMethods } from '@/apps/customer/shared/constants/axiosMethods';
import axiosFetcher from '@customerApi';

const mapURL = 'https://api.neshan.org';

export const searchMapByTermAndCoordsService = async ({
  searchTerm,
  lat,
  lng
}: SearchMapByTermAndCoordsData) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      isMapApiKeyNeeded: true,
      url: `${mapURL}/v1/search?term=${searchTerm}&lat=${lat}&lng=${lng}`
    });
    return response;
  } catch (error) {
    throw new Error();
  }
};

export const getAddressByCoordsService = async ({ lat, lng }: GetAddressByCoordsData) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      isMapApiKeyNeeded: true,
      url: `${mapURL}/v5/reverse?lat=${lat}&lng=${lng}`
    });
    return response;
  } catch (error) {
    throw new Error();
  }
};
