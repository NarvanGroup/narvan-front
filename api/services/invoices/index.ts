import { axiosMethods } from '@/apps/customer/shared/constants/axiosMethods';
import { config } from '@customerApiConfig';
import axiosFetcher from '@customerApi';
import { CreateInvoiceReceiptModel } from '@/apps/customer/models';

const invoiceURL = `${config.back4front}/finance2/invoices`;

export const createInvoiceReceiptService = async (
  invoice_id: string,
  data: CreateInvoiceReceiptModel
) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.post,
      url: `${invoiceURL}/${invoice_id}/receipts`,
      data
    });
    return response;
  } catch (error) {
    throw new Error();
  }
};
