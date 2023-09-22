import config from "@config/config.json";
import { plainify } from "@lib/utils/textConverter";
import Footer from "@partials/Footer";
import Header from "@partials/Header";
import Head from "next/head";
import { useRouter } from "next/router";

const Base = ({
  title,
  meta_title,
  description,
  image,
  noindex,
  canonical,
  children,
}) => {
  const { meta_image, meta_author, meta_description } = config.metadata;
  const { base_url } = config.site;
  const router = useRouter();

  return (
    <>
      <Head>
        {/* title */}
        <title>
          {plainify(
            meta_title ? meta_title : title ? title : config.site.title
          )}
        </title>

        {/* keywords */}
        <meta
          name="keywords"
          content="Import-Export Company, Computer Hardware, Industrial Equipment, Industrial Laser Parts, Global Markets, High-Quality Products, International Trade, Farsi, English, Chinese, Export Services, Import Services, شرکت واردات و صادرات, سخت‌افزار کامپیوتر, تجهیزات صنعتی, قطعات لیزر صنعتی, بازارهای جهانی, محصولات با کیفیت, تجارت بین‌المللی, فارسی, انگلیسی, چینی, خدمات صادرات, خدمات واردات, نارون"
        />

        {/* canonical url */}
        {canonical && <link rel="canonical" href={canonical} itemProp="url" />}

        {/* noindex robots */}
        {noindex && <meta name="robots" content="noindex,nofollow" />}

        {/* meta-description */}
        <meta
          name="description"
          content={plainify(description ? description : meta_description)}
        />

        {/* author from config.json */}
        <meta name="author" content={meta_author} />

        {/* og-title */}
        <meta
          property="og:title"
          content={plainify(
            meta_title ? meta_title : title ? title : config.site.title
          )}
        />

        {/* og-description */}
        <meta
          property="og:description"
          content={plainify(description ? description : meta_description)}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${base_url}/${router.asPath.replace("/", "")}`}
        />

        {/* twitter-title */}
        <meta
          name="twitter:title"
          content={plainify(
            meta_title ? meta_title : title ? title : config.site.title
          )}
        />

        {/* twitter-description */}
        <meta
          name="twitter:description"
          content={plainify(description ? description : meta_description)}
        />

        {/* og-image */}
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${
            image ? image : meta_image
          }`}
        />

        {/* twitter-image */}
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${
            image ? image : meta_image
          }`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      {/* main site */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Base;
