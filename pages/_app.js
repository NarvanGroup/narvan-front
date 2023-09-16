import config from "@config/config.json";
import theme from "@config/theme.json";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import TagManager from "react-gtm-module";
import { useLocale } from "shared/hooks/useLocale";
import "styles/style.scss";
import "styles/global.scss";
import { IntlProvider } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
const App = ({ Component, pageProps }) => {
  const { locale, messages } = useLocale();

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

  const dir = locale === "fa" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

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
      {/* <IntlProvider locale={locale} messages={messages}> */}
      <NextIntlClientProvider messages={messages}>
        <Component {...pageProps} />
      </NextIntlClientProvider>
      {/* </IntlProvider> */}
    </>
  );
};

export default App;
