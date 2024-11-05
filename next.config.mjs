/** @type {import('next').NextConfig} */

import nextI18nConfig from "./next-i18next.config.js";

const nextConfig = {
  reactStrictMode: true,
  i18n: nextI18nConfig.i18n,
};

export default nextConfig;
