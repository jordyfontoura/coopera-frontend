import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join('./', 'styles')],
  },
  output: 'standalone',
};

export default nextConfig;
