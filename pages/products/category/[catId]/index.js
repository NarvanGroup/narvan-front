import Base from "@layouts/Baseof";
import {
  getCategoryByIdService,
  getProductsByCategoryService,
} from "api/services/categories";
import { getProductsService } from "api/services/products";
import { Products } from "containers/Products/Products";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function CategoryPage({ data }) {
  console.log("-------------------", data);
  return (
    <Base title={data?.title}>
      <Products products={data?.products} />
    </Base>
  );
}

export default CategoryPage;

export const getServerSideProps = async ({ locale, catId }) => {
  const data = await getProductsByCategoryService(catId);

  return {
    props: {
      data: data?.data || [],
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
