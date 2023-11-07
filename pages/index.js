import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import {
  Global,
  People,
  Headphone,
  MessageQuestion,
  TruckTime,
  Diamonds,
} from "iconsax-react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { parseMDX } from "@lib/utils/mdxParser";
import Blog from "@layouts/components/Blog";
import { getProductsService } from "api/services/products";
import { getBlogsService } from "api/services/blogs";
import {
  NarvanProducts,
  banner,
  call_to_action,
  feature,
  services,
  workflow,
} from "content/_index";
import { ProductsSwiper } from "@layouts/components/ProductsSwiper";
import { useEffect, useState } from "react";

const { title } = config.site;

const Home = () => {
  const { t } = useTranslation();

  const getFeatureIcon = (name) => {
    switch (name) {
      case "Global Reach":
        return <Global size="32" color="#6aa84f" />;

      case "Expert Team":
        return <People size="32" color="#6aa84f" />;

      case "24h Service":
        return <Headphone size="32" color="#6aa84f" />;

      case "Tailored Solutions":
        return <MessageQuestion size="32" color="#6aa84f" />;

      case "Fast In Time":
        return <TruckTime size="32" color="#6aa84f" />;

      case "Quality Assurance":
        return <Diamonds size="32" color="#6aa84f" />;
      default:
        break;
    }
  };

  const [blogs, setBlogs] = useState([]);
  const [productsList, setProductsList] = useState([]);

  const getBlogs = async () => {
    try {
      const result = await getBlogsService();
      if (result) {
        setBlogs(result.data);
      }
    } catch (error) {}
  };

  const getProducts = async () => {
    try {
      const result = await getProductsService();
      if (result) {
        setProductsList(result.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getBlogs();
    getProducts();
  }, []);

  return (
    <Base title={title}>
      {/* Banner */}
      <section className="section pb-[50px]">
        <div className="container">
          <div className="row text-center">
            <div className="mx-auto lg:col-10">
              <h1 className="mb-8 font-primary font-bold">
                {t(`${banner?.title}`)}
              </h1>
              <h2 className="font-primary font-bold">
                {t(`${banner?.subTitle}`)}
              </h2>
              <p className="mt-4">{markdownify(t(`${banner?.content}`))}</p>
              {banner?.button.enable && (
                <Link
                  className="btn btn-primary mt-4"
                  href={banner?.button.link}
                  rel={banner?.button.rel}
                >
                  {banner?.button.label}
                </Link>
              )}
              <Image
                className="mx-auto mt-12"
                src={banner?.image}
                width={750}
                height={390}
                alt="banner image"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2>{markdownify(t(NarvanProducts?.title))}</h2>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-2">
            {NarvanProducts?.categories.map((item, i) => (
              <Link href="/products/page/1">
                <div
                  className="category-card rounded-xl bg-white p-5 pb-8 text-center"
                  key={`product-${i}`}
                  style={{
                    backgroundImage: `url(${item?.image})`,
                  }}
                >
                  <div className="category-title mt-4 p-16">
                    {markdownify(t(item.name), "h3", "h5")}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <ProductsSwiper products={productsList} />
      </section>

      {/* Features */}
      <section className="section bg-theme-light">
        <div className="container">
          <div className="text-center">
            <h2>{markdownify(t(feature.title))}</h2>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {feature.features.map((item, i) => (
              <div
                className="feature-card direction-column flex items-center justify-center rounded-xl bg-white p-5 pb-8 text-center"
                key={`feature-${i}`}
              >
                {
                  item.icon && getFeatureIcon(item?.name)
                  // <Image
                  //   className="mx-auto"
                  //   src={item.icon}
                  //   width={30}
                  //   height={30}
                  //   alt=""
                  // />
                }
                <div className="mt-4">
                  {markdownify(t(item.name), "h3", "h5")}
                  <p className="mt-3">{t(item.content)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* services */}
      {services.map((service, index) => {
        const isOdd = index % 2 > 0;
        return (
          <section
            key={`service-${index}`}
            className={`section ${isOdd && "bg-theme-light"}`}
          >
            <div className="container">
              <div className="items-center gap-8 md:grid md:grid-cols-2">
                {/* Carousel */}
                <div className={`service-carousel ${!isOdd && "md:order-2"}`}>
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination={
                      service.images.length > 1 ? { clickable: true } : false
                    }
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    init={service?.images > 1 ? false : true}
                  >
                    {/* Slides */}
                    {service?.images?.map((slide, index) => (
                      <SwiperSlide key={index}>
                        <Image
                          style={{ borderRadius: "10px" }}
                          src={slide}
                          alt=""
                          width={600}
                          height={500}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Content */}
                <div
                  className={`service-content mt-5 md:mt-0 ${
                    !isOdd && "md:order-1"
                  }`}
                >
                  <h2 className="font-bold leading-[40px]">
                    {t(service?.title)}
                  </h2>
                  <p className="mb-2 mt-4">{t(service?.content)}</p>
                  {service.button.enable && (
                    <Link
                      href={service?.button.link}
                      className="cta-link inline-flex items-center text-primary"
                    >
                      {t(service?.button.label)}
                      {/* <Image
                        className="ml-1"
                        src="/images/arrow-right.svg"
                        width={18}
                        height={14}
                        alt="arrow"
                      /> */}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* workflow */}
      <section className="section direction-column flex items-center justify-center pb-0">
        <div className="mb-8 text-center">
          {markdownify(
            t(workflow.title),
            "h2",
            "mx-auto max-w-[400px] font-bold leading-[44px]"
          )}
          {markdownify(workflow.description, "p", "mt-3")}
        </div>
        <Image
          style={{ borderRadius: "10px" }}
          src={workflow.image}
          alt="workflow image"
          width={900}
          height={400}
        />
      </section>

      <Blog blogs={blogs} />

      {/* Cta */}
      <Cta cta={call_to_action} />
    </Base>
  );
};

export default Home;

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
