import nextra from "nextra";

const withNextra = nextra({});

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui", "web"],
  experimental: {
    turbo: {
      loaders: {
        ".mdx": ["@mdx-js/loader"],
      }
    }
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        '@napi-rs/simple-git': false,
      };
    }

    config.externals = config.externals || [];
    config.externals.push('@napi-rs/simple-git');

    return config;
  },
};

export default withNextra(nextConfig);
