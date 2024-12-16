// import { getProductsService } from "@/api/services/productServices";

import { markdownify } from "@lib/utils/textConverter";
import { useTranslation } from "next-i18next";
import classes from "./product.module.scss";
import Image from "next/image";
import { HiOutlineBellAlert } from "react-icons/hi2";

export const Product = ({ product }) => {
  const { t } = useTranslation();

  return (
    <section className="section">
      <div className="container">
        <div className={classes.container}>
          <div className={classes.imageContainer}>
            {product.image && (
              <Image
                className={`w-full rounded-lg ${classes.images}`}
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${product.image}`}
                alt={product.name_fa}
                width={260}
                height={260}
              />
            )}
          </div>

          <div className={`section pb-0 ${classes.infoContainer}`}>
            {markdownify(
              t(product?.name_fa),
              "h1",
              "h1 font-normal text-[56px] col-12"
            )}
            <div className={`bg-theme-light ${classes.attBox}`}>
              {product?.attributes &&
                Object.keys(product?.attributes)?.map((att) => (
                  <div>
                    <p className={classes.attTitle}>
                      {markdownify(t(att), "strong", "text-dark")}
                    </p>
                    <p>{product?.attributes[att]}</p>
                  </div>
                ))}
            </div>
            <div className={classes.alert}>
              <HiOutlineBellAlert color="red" />
              <p>{t("contact us alert")}</p>
            </div>
          </div>

          <div className={classes.descriptionContainer}>
            <p className={classes.description}>{t("Product description")}</p>
            <div
              dangerouslySetInnerHTML={{
                __html: product.description,
              }}
            ></div>
          </div>

          <div className={classes.tagContainer}>
            <p className={classes.tagTitle}>{t("Tags")}: </p>

            {product?.tags?.map((t) => (
              <div className={classes.tagBox}>{t}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
