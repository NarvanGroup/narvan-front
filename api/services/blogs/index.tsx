import axiosFetcher from "api/axios";
import { config } from "api/config";
import { axiosMethods } from "shared/constants/axiosMethods";

export const getBlogsService = async (pageNo = 1) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      url: `${config.apiVersion1}/blogs?page=${pageNo}`,
    });
    return response;
  } catch (error) {}
};

export const getBlogBySlugService = async (slug: string) => {
  try {
    const response = await axiosFetcher({
      method: axiosMethods.get,
      url: `${config.apiVersion1}/blogs/${slug}`,
    });
    return response;
  } catch (error) {}
};
