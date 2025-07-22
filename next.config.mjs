import nextra from "nextra";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
})(nextConfig);
