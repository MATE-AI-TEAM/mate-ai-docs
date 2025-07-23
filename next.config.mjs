import nextra from "nextra";

const withNextra = nextra({});

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui", "web"],
  webpack: (config, { dev }) => {
    if (!dev) {
      config.module.rules.push({
        test: /\.mdx?$/,
        use: [
          {
            loader: "@mdx-js/loader",
            /** @type {Options} */
            // options: {/* jsxImportSource: …, otherOptions… */}
          },
        ],
      });
    }

    return config;
  },
};

export default withNextra(nextConfig);
