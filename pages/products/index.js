import Base from "@layouts/Baseof";
import { getProductsService } from "api/services/products";
import { Products } from "containers/Products/Products";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function ProductsPage({ products }) {
  return (
    <Base title="products">
      <Products products={products} />
    </Base>
  );
}

export default ProductsPage;

export const getServerSideProps = async ({ locale }) => {
  const products = await getProductsService();

  return {
    props: {
      products: products?.data || [],
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
