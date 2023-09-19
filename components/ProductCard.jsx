import Image from "next/image";
import Link from "next/link";
import classes from "./index.module.scss";
import { useTranslation } from "next-i18next";

export const ProductCard = ({ product }) => {
  const { t } = useTranslation();

  const handleGotoCategory = (e, id) => {
    e.preventDefault();
    router.push(`category/${id}`);
  };

  return (
    <Link href={`/product/${product.id}`}>
      {product.image && (
        <Image
          className={`rounded-lg ${classes.image}`}
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${product.image}`}
          alt={product.title}
          width={260}
          height={260}
        />
      )}
      <div className={classes.info}>
        <h6
          className="ml-8 mr-8 block hover:text-primary"
          onClick={(e) => handleGotoCategory(e, product?.category?.id)}
        >
          {product?.category?.name}
        </h6>
        <h2 className="h3 mb-2 mt-4">
          <div className="block">{t(product.name)}</div>
        </h2>
        {/* <p className="text-text">{product.description}</p> */}
        <div className="btn btn-primary mt-4">{t("Read More")}</div>
      </div>
    </Link>
  );
};
