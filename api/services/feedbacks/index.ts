import { SendFeedbackModel } from '@customerModels';
import { axiosMethods } from '@/apps/customer/shared/constants/axiosMethods';
import { config } from '@customerApiConfig';
import axiosFetcher from '@customerApi';

const baseUrl = `${config.back4front}/scms`;

export const sendFeedbackService = async (data: SendFeedbackModel) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.post,
      url: `${baseUrl}/feedbacks`,
      data
    });
    return response;
  } catch (error) {
    throw new Error();
  }
};
