import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
      },
       {
        protocol: 'https',
        hostname: '9avmcc5vs8.ufs.sh',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
