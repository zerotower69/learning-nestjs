import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  transpilePackages: [],
  reactStrictMode: false,
  experimental: {
    // reactCompiler: true,
  },
};

export default nextConfig;
