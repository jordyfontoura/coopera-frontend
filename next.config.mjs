import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join('./', 'styles'), path.join('./', 'components')],
  },
  output: 'standalone',
};

export default nextConfig;
