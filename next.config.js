/**
 * @type {import('next').NextConfig}
 *
 */

const { i18n } = require("./next-i18next.config.js");

const localeSubpaths = {
  fa: "fa",
  en: "en",
  ch: "ch",
};

const nextConfig = {
  reactStrictMode: true,

  i18n,

  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["https://api.nec.co.ir", "https://flagcdn.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.nec.co.ir",
        port: "",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
