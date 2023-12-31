import Base from "@layouts/Baseof";
import PostSingle from "@layouts/PostSingle";
import { plainify } from "@lib/utils/textConverter";
import { getBlogBySlugService } from "api/services/blogs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// post single layout
const Article = ({ data }) => {
  let keywords = "";
  data?.tags?.map((t) => (keywords = keywords + " | " + t));

  return (
    <Base
      title={data?.name}
      keywords={keywords}
      meta_title={`${data?.name_fa}  | تجارت الکترونیک نارون`}
      description={plainify(data?.description)}
      image={data?.image}
    >
      <PostSingle post={data} />
    </Base>
  );
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
