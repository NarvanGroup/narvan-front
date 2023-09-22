import Base from "@layouts/Baseof";
import Pagination from "@layouts/components/Pagination";
import { getProductsByCategoryService } from "api/services/categories";
import { getProductsService } from "api/services/products";
import { Products } from "containers/Products/Products";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function ProductsPage({ data }) {
  return (
    <Base title="products">
      <Products products={data?.products} />
      {/* <Pagination
        section="products"
        totalPages={data?.meta?.last_page}
        currentPage={data?.meta?.current_page}
      /> */}
    </Base>
  );
}

export default ProductsPage;

export const getServerSideProps = async ({ locale, params }) => {
  const data = await getProductsByCategoryService(params?.pageNo);

  return {
    props: {
      data: data || [],
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
