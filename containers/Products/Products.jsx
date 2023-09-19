// import { getProductsService } from "@/api/services/productServices";

import Base from "@layouts/Baseof";
import Pagination from "@layouts/components/Pagination";
import { markdownify } from "@lib/utils/textConverter";
import { getProductsService } from "api/services/products";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import classes from "./index.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  getCategoriesService,
  getCategoriesWithSubCategoryService,
} from "api/services/categories";
import { ProductCard } from "components/ProductCard";

export const Products = ({ products }) => {
  const { query } = useRouter();
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const result = await getCategoriesWithSubCategoryService();
      if (result) {
        setCategories(result.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getCategories();
  }, []);

  const { t } = useTranslation();

  return (
    <section className="section">
      <div className="container">
        {markdownify(
          "محصولات",
          "h1",
          "h1 text-center font-normal text-[56px] col-12"
        )}
        <div className={classes.container}>
          <div className={`bg-theme-light ${classes.sidebarContainer}`}>
            <h3 className={classes.catTitle}>{t("Categories")}</h3>
            <div className={classes.catBox}>
              <Link className={`h5 hover:text-primary`} href={`/products`}>
                {t("All Products")}
              </Link>
              {categories?.map((cat) => {
                return (
                  <>
                    <Link
                      key={cat.slug}
                      className={`h5 hover:text-primary ${
                        query?.catId === cat?.slug ? "text-primary" : ""
                      }`}
                      href={`/products/category/${cat.slug}`}
                    >
                      {cat?.name}
                    </Link>
                    <div className={classes.subCatBox}>
                      {cat.sub_categories?.map((sub) => (
                        <Link
                          key={sub.slug}
                          className="h6 hover:text-primary"
                          href={`/products/category/${cat.slug}/subcategory/${sub?.slug}`}
                        >
                          <li
                            className={`h6 hover:text-primary ${
                              query?.subCatId === sub?.slug
                                ? "text-primary"
                                : ""
                            }`}
                          >
                            {markdownify(sub?.name, "strong")}
                          </li>
                        </Link>
                      ))}
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className={`section pb-0 ${classes.productsContainer}`}>
            {products?.map((product) => (
              <div
                key={`key-${product?.id}`}
                className={`col-12 mb-8 sm:col-6 lg:col-3 ${classes.productCard}`}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* <Pagination
            section={blog_folder}
            totalPages={totalPages}
            currentPage={currentPage}
          /> */}
      </div>
    </section>
  );
};
