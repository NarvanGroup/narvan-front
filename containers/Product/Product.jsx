// import { getProductsService } from "@/api/services/productServices";

import { markdownify, plainify } from "@lib/utils/textConverter";
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
                className={`rounded-lg ${classes.image}`}
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${product.image}`}
                alt={product.name}
                width={260}
                height={260}
              />
            )}
          </div>

          <div className={`section pb-0 ${classes.infoContainer}`}>
            {markdownify(
              t(product?.name),
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
            <p className="text-text">{plainify(product.description)}</p>
          </div>
        </div>
      </div>
    </section>
  );
};