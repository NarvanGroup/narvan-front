module.exports = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "fa",
    locales: ["fa", "en", "ch"],
    localeDetection: false,
  },
};
