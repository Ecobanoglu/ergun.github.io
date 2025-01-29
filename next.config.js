/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "/ergun.github.io/" : "",
  basePath: isProd ? "/ergun.github.io" : "",
  output: "export",
};

module.exports = nextConfig;
