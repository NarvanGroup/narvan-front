import config from "@config/config.json";
import { Head, Html, Main, NextScript } from "next/document";
import { useState } from "react";

const Document = (props) => {
  // destructuring items from config object
  const { favicon } = config.site;

  console.log({ props });
  return (
    <Html dir={props.locale === "fa" ? "rtl" : "ltr"} lang={props.locale}>
      <Head>
        {/* favicon */}
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="32x32"
          href={favicon}
        />
        {/* theme meta */}
        <meta name="theme-name" content="next-boilerplate" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />
      </Head>
      <body>
        <Main />
        {/* <TwSizeIndicator /> */}
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

const getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);
  // locale is in ctx.locale

  return { ...initialProps, locale: ctx?.locale || "fa" };
};
