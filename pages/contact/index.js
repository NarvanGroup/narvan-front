import Base from "@layouts/Baseof";
import Contact from "@layouts/Contact";
import { getRegularPage } from "@lib/contentParser";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function ContactPage({ data }) {
  const { title, meta_title, description, image, noindex, canonical, layout } =
    data.frontmatter;
  const { content } = data;

  return (
    <Base
      title={title}
      description={description ? description : content.slice(0, 120)}
      meta_title={meta_title}
      image={image}
      noindex={noindex}
      canonical={canonical}
    >
      <Contact data={data} />
    </Base>
  );
}

export default ContactPage;

export const getStaticProps = async ({ locale }) => {
  const regularPage = await getRegularPage("contact");

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      data: regularPage,
    },
  };
};
