const path = require("path");
/**
 * @type {import('next-i18next').UserConfig}
 */

const localeSubpaths = {
  fa: "fa",
  en: "en",
  ch: "ch",
};
module.exports = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "fa",
    locales: ["fa", "en", "ch"],
    localeDetection: false,
  },
  localeSubpaths,

  localePath:
    typeof window === "undefined"
      ? path.resolve("./public/locales")
      : "/locales",
};
