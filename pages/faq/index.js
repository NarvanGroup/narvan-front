import Base from "@layouts/Baseof";
import Faq from "@layouts/Faq";
import { getRegularPage } from "@lib/contentParser";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function FAQPage({ data }) {
  const { title, meta_title } = data.frontmatter;

  return (
    <Base title={title} meta_title={meta_title}>
      <Faq data={data} />
    </Base>
  );
}

export default FAQPage;

export const getStaticProps = async ({ locale }) => {
  const regularPage = await getRegularPage("faq");

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      data: regularPage,
    },
  };
};
