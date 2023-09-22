import Base from "@layouts/Baseof";
import {
  getCategoryByIdService,
  getProductsByCategoryService,
} from "api/services/categories";
import { getProductsService } from "api/services/products";
import { Products } from "containers/Products/Products";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function CategoryPage({ data }) {
  return (
    <Base
      title={data?.name}
      meta_title={`${data?.name} | تجارت الکترونیک نارون`}
    >
      <Products products={data?.products} />
    </Base>
  );
}

export default CategoryPage;

export const getServerSideProps = async ({ locale, params }) => {
  const data = await getProductsByCategoryService(params?.catId);

  return {
    props: {
      data: data?.data || [],
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
