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

  const subCat = data?.sub_categories?.find((s) => s.id === +query?.subCatId);
  return (
    <Base title={data?.title}>
      <Products products={subCat?.products} />
    </Base>
  );
}

export default SubCategoryPage;

export const getServerSideProps = async ({ locale, id, catId }) => {
  const data = await getProductsBySubCategoryService(catId);

  return {
    props: {
      data: data?.data || [],
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
