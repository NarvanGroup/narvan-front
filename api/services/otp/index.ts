import { axiosMethods } from '@/apps/customer/shared/constants/axiosMethods';
import { config } from '@customerApiConfig';
import axiosFetcher from '@customerApi';

const baseUrl = `${config.back4front}/scms/otp`;

export const sendOtpService = async (mobile: string) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.post,
      url: `${baseUrl}`,
      data: { mobile }
    });
    return response;
  } catch (error) {
    throw new Error();
  }
};
