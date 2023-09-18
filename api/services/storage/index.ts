import { axiosMethods } from '@/apps/customer/shared/constants/axiosMethods';
import { config } from '@customerApiConfig';
import axiosFetcher from '@customerApi';

const baseUrl = `${config.back4front}/storage`;

export const uploadFilesService = async () => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.post,
      url: `${baseUrl}/files`
    });
    return response;
  } catch (error) {
    throw new Error();
  }
};
