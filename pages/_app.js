import config from "@config/config.json";
import theme from "@config/theme.json";
import Head from "next/head";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import "styles/style.scss";
import "styles/global.scss";
import { appWithTranslation } from "next-i18next";
import Loader from "components/Loader";
const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // default theme setup

  // import google font css
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;
  const [fontcss, setFontcss] = useState();
  // useEffect(() => {
  //   fetch(
  //     `https://fonts.googleapis.com/css2?family=${pf}${
  //       sf ? "&family=" + sf : ""
  //     }&display=swap`
  //   ).then((res) => res.text().then((css) => setFontcss(css)));
  // }, [pf, sf]);

  // google tag manager (gtm)
  const tagManagerArgs = {
    gtmId: config.params.tag_manager_id,
  };
  useEffect(() => {
    setTimeout(() => {
      process.env.NODE_ENV === "production" &&
        config.params.tag_manager_id &&
        TagManager.initialize(tagManagerArgs);
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dir = router.locale === "fa" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      setIsLoading(true);
    });

    Router.events.on("routeChangeComplete", (url) => {
      setIsLoading(false);
    });

    Router.events.on("routeChangeError", (url) => {
      setIsLoading(false);
    });
  }, [Router]);

  return (
    <>
      <Head>
        {/* google font css */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `${fontcss}`,
          }}
        />
        {/* responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </Head>
      {isLoading && <Loader />}
      {}
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(App);
