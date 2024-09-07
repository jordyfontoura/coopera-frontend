/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "gefcapital.com",
        protocol: "https",
      }
    ]
  }
};

export default nextConfig;
