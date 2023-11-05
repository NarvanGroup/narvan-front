import Base from "@layouts/Baseof";
import { plainify } from "@lib/utils/textConverter";
import {
  getCategoryByIdService,
  getProductsByCategoryService,
  getProductsBySubCategoryService,
} from "api/services/categories";
import {
  getProductBySlugService,
  getProductsService,
} from "api/services/products";
import { Product } from "containers/Product/Product";
import { Products } from "containers/Products/Products";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

function ProductPage({ data }) {
  let keywords = "";
  data?.tags?.map((t) => (keywords = keywords + " | " + t));
  return (
    <Base
      title={data?.title}
      keywords={keywords}
      meta_title={`${data?.name}  | تجارت الکترونیک نارون`}
      description={plainify(data?.description)}
      image={data?.image}
    >
      <Product product={data} />
    </Base>
  );
}

export default ProductPage;

export const getServerSideProps = async ({ locale, params }) => {
  const data = await getProductBySlugService(params?.slug);

  return {
    props: {
      data: data?.data || [],
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
