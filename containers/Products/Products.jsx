// import { getProductsService } from "@/api/services/productServices";

import Base from "@layouts/Baseof";
import Pagination from "@layouts/components/Pagination";
import { markdownify } from "@lib/utils/textConverter";
import { getProductsService } from "api/services/products";
import { useEffect, useState } from "react";

export const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const result = await getProductsService();
      if (result.success) {
        setProducts(result.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Base title={"محصولات"}>
      <section className="section">
        <div className="container">
          {markdownify(
            "محصولات",
            "h1",
            "h1 text-center font-normal text-[56px]"
          )}
          <div className="section row pb-0">
            {products.map((product, i) => (
              <div key={`key-${i}`} className="col-12 mb-8 sm:col-6 lg:col-4">
                {product.frontmatter.image && (
                  <Image
                    className="rounded-lg"
                    src={product.frontmatter.image}
                    alt={product.frontmatter.title}
                    width={i === 0 ? "925" : "445"}
                    height={i === 0 ? "475" : "230"}
                  />
                )}
                <h2 className="h3 mb-2 mt-4">
                  <Link
                    href={`/${blog_folder}/${product.slug}`}
                    className="block hover:text-primary"
                  >
                    {product.frontmatter.title}
                  </Link>
                </h2>
                <p className="text-text">{product.frontmatter.desc}</p>
                <Link
                  className="btn btn-primary mt-4"
                  href={`/${blog_folder}/${product.slug}`}
                  rel=""
                >
                  {t("Read More")}
                </Link>
              </div>
            ))}
          </div>
          {/* <Pagination
            section={blog_folder}
            totalPages={totalPages}
            currentPage={currentPage}
          /> */}
        </div>
      </section>
    </Base>
  );
};
