/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "cdn-icons-png.flaticon.com",
      "cdn.sanity.io",
    ],
  },
};

module.exports = nextConfig;
