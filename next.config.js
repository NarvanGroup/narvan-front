/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ["fa", "en", "ch"],

    defaultLocale: "fa",
  },
};

module.exports = nextConfig;
