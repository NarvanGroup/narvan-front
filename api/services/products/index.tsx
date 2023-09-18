import axiosFetcher from "api/axios";
import { config } from "api/config";
import { axiosMethods } from "shared/constants/axiosMethods";

export const getProductsService = async () => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      url: `${config.apiVersion1}/blogs`,
    });
    return response;
  } catch (error) {}
};

// export const getProductDetailsService = async (productId: string) => {
//   try {
//     const response = await axiosFetcher({
//       method: axiosMethods.get,
//       url: `${config.back4front}/scms/products/${productId}`,
//     });
//     return response;
//   } catch (error) {
//     // throw new Error();
//   }
// };
