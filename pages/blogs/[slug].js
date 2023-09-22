import config from "@config/config.json";
import PostSingle from "@layouts/PostSingle";
// import { getSinglePage } from "@lib/contentParser";
import { parseMDX } from "@lib/utils/mdxParser";
import { getBlogBySlugService } from "api/services/blogs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const { blog_folder } = config.settings;

// post single layout
const Article = ({ data }) => {
  return <PostSingle post={data} />;
};

export const getServerSideProps = async ({ locale, params }) => {
  const data = await getBlogBySlugService(params?.slug);

  return {
    props: {
      data: data?.data || {},
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default Article;
