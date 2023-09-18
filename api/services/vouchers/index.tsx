import { CheckVoucherDataModel, SendVoucherOtpDataModel } from '@customerModels';
import { axiosMethods } from '@/apps/customer/shared/constants/axiosMethods';
import { config } from '@customerApiConfig';
import axiosFetcher from '@customerApi';

const vouchersURL = `${config.back4front}/scms/vouchers`;

export const checkVoucherService = async (voucher: string, data: CheckVoucherDataModel) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.post,
      url: `${vouchersURL}/${voucher}`,
      data
    });
    return response;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const sendVoucherOtpService = async (data: SendVoucherOtpDataModel) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.post,
      url: `${vouchersURL}/otp`,
      data
    });
    return response;
  } catch (error) {
    throw new Error();
  }
};
