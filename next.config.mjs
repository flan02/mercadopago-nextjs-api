/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d31npzejelj8v1.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
