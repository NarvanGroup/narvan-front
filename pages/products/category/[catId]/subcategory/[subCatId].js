import Base from "@layouts/Baseof";
import {
  getCategoryByIdService,
  getProductsByCategoryService,
  getProductsBySubCategoryService,
} from "api/services/categories";
import { getProductsService } from "api/services/products";
import { Products } from "containers/Products/Products";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

function SubCategoryPage({ data }) {
  const { query } = useRouter();

  const subCat = data?.sub_categories?.find((s) => s.slug === query?.subCatId);

  return (
    <Base
      title={data?.title}
      meta_title={`${data?.name} | ${subCat?.name} | تجارت الکترونیک نارون`}
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