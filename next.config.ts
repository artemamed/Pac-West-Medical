// next.config.js
import type { NextConfig } from "next";
import TerserPlugin from "terser-webpack-plugin";

const nextConfig: NextConfig = {
  output: "standalone",
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: "r78z3nyl",
    NEXT_PUBLIC_SANITY_DATASET: "production",
    NEXT_PUBLIC_SANITY_API_VERSION: "2024-01-01",
    NEXT_PUBLIC_SANITY_STUDIO_URL: "http://localhost:3333",
    SANITY_API_READ_TOKEN: "<paste your token here>",
    NEXT_PUBLIC_API_URL: "https://medinven.api.artemamed.com/api/",
    NEXT_PUBLIC_API:
      "4ba26604e36749f2da838e4178c985f9bfe3bc964bc1066ac3487f8bc63903669bc97de9d78fbc66b359f46b0f9b7d561dd6d11661ce93c9ada353ed7a3c1281",
    EMAIL_USER: "sales@artemamed.com",
    EMAIL_PASS: "pfab ujpk jbct husq",
    EMAIL_HOST: "mail.artemamedical.com",
    EMAIL_PORT: "465",
    EMAIL_SECURE: "false",
    NEXT_PUBLIC_ENCRYPTION_KEY: "11223344",
    // JC_P_MERCHANT_ID: "55468456",
    // JC_P_MERCHANT_PASS: "2s8788fx7f",
    // JC_P_SV: "a3t94ez1d8",
    // JC_P_CB_URL: "https://artemamed.com/api/jc-p/cb/",
    // EXCHANGE_RATE_API_KEY: "ec0a4c61422f2f75b0730c39",
    // JC_P_PAYMENT_API:
    //   "https://payments.jazzcash.com.pk/CustomerPortal/transactionmanagement/merchantform/",
    JWT_SECRET: "secret",
    // MERCHANT_ID: "TESTARTEMA",
    // MERCHANT_PASS: "25e46eaf387cb8c8a6af46b1cf16f9f3",
    // URL: "https://test-bankalfalah",
    // CURRENCY: "PKR",
    // NEXT_PUBLIC_BASE_URL: "http://localhost:3000",
    MERCHANT_ID: "ARTEMAMEDICA",
    MERCHANT_PASS: "5d245bae704ba8a34ee40ad35beac255",
    URL: "https://bankalfalah",
    CURRENCY: "USD",
    NEXT_PUBLIC_BASE_URL: "https://artemamed.com",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "example.com",
        pathname: "/**",
      },
      {
        protocol: "https", // Added the protocol as https
        hostname: "medinven.api.artemamed.com", // Your image host
        pathname: "/**",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    if (!isServer) {
      config.resolve.fallback = {
        // fs: false,
        // net: false,
        // tls: false,
        crypto: require.resolve("crypto-browserify"),
        stream: false,
        buffer: false,
      };
    }
    config.optimization.minimizer = [
      new TerserPlugin({
        terserOptions: {
          mangle: false,
          keep_fnames: true,
          keep_classnames: true,
        },
      }),
    ];
    return config;
  },
  async redirects() {
    return [
      {
        source: "/product/skull-traction-tong-acc-to-crutchfield-small-2712",
        destination: "/product/skull-traction-tong-acc-to-crutchfield",
        permanent: true, // Indicates a 308 permanent redirect
      },
    ];
  },
};
export default nextConfig;
