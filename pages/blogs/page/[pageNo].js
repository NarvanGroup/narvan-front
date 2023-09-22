import Pagination from "@components/Pagination";
import Base from "@layouts/Baseof";
import { markdownify } from "@lib/utils/textConverter";
import Posts from "@partials/Posts";
import { getBlogsService } from "api/services/blogs";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// blog pagination
const Blogs = ({ data }) => {
  const title = "blog";

  const { t } = useTranslation();

  return (
    <Base title={title}>
      <section className="section">
        <div className="container">
          {markdownify(
            t(title),
            "h1",
            "h1 text-center font-normal text-[56px]"
          )}
          <Posts posts={data?.data} />
          <Pagination
            section="blogs"
            totalPages={data?.meta?.last_page}
            currentPage={data?.meta?.current_page}
          />
        </div>
      </section>
    </Base>
  );
};

export default Blogs;

export const getServerSideProps = async ({ locale, params }) => {
  const data = await getBlogsService(params?.pageNo);

  return {
    props: {
      data: data || [],
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
