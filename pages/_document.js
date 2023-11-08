import config from "@config/config.json";
import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps, locale: ctx?.query?.locale || "fa" };
  }

  render() {
    const { favicon } = config.site;

    return (
      <Html
        dir={this.props.locale === "fa" ? "rtl" : "ltr"}
        lang={this.props.locale}
      >
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
        <body dir={this.props.locale === "fa" ? "rtl" : "ltr"}>
          <Main />
          {/* <TwSizeIndicator /> */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
