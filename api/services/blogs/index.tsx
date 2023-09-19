import axiosFetcher from "api/axios";
import { config } from "api/config";
import { axiosMethods } from "shared/constants/axiosMethods";

export const getBlogsService = async () => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      url: `${config.apiVersion1}/blogs`,
    });
    return response;
  } catch (error) {}
};

export const getBlogByIdService = async (id: string) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      url: `${config.apiVersion1}/blogs/${id}`,
    });
    return response;
  } catch (error) {}
};
