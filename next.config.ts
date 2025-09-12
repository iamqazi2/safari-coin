/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://staging.printsup.org/:path*",
      },
    ];
  },
  trailingSlash: false,
};

module.exports = nextConfig;
