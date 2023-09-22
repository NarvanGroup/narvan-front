import Base from "@layouts/Baseof";
import Pagination from "@layouts/components/Pagination";
import { getProductsService } from "api/services/products";
import { Products } from "containers/Products/Products";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function ProductsPage({ data }) {
  return (
    <Base
      title="محصولات | Products"
      meta_title="محصولات | ابزارآلات صنعتی | قطعات سخت افزاری | لیزر صنعتی"
    >
      <Products products={data?.data} />
      <Pagination
        section="products"
        totalPages={data?.meta?.last_page}
        currentPage={data?.meta?.current_page}
      />
    </Base>
  );
}

export default ProductsPage;

export const getServerSideProps = async ({ locale, params }) => {
  const data = await getProductsService(params?.pageNo);

  return {
    props: {
      data: data || [],
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
