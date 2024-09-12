/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
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
