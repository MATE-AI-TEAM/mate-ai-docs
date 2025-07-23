import nextra from "nextra";

const withNextra = nextra({});

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui", "web"],
};

export default withNextra(nextConfig);
