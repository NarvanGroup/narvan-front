import Base from "@layouts/Baseof";
import { getProductsBySubCategoryService } from "api/services/categories";
import { Products } from "containers/Products/Products";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

function SubCategoryPage({ data }) {
  const { query } = useRouter();
  const subCat = data?.sub_categories?.find((s) => s.slug === query?.subCatId);
  return (
    <Base
      title={data?.name_fa}
      meta_title={`${subCat?.name_fa} | ${data?.name_fa} | تجارت الکترونیک نارون`}
    >
      <Products products={subCat?.products} />
    </Base>
  );
}

export default SubCategoryPage;

export const getServerSideProps = async ({ locale, params }) => {
  const data = await getProductsBySubCategoryService(params?.catId);

  return {
    props: {
      data: data?.data || [],
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
