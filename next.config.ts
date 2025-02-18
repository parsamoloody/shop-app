import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  
  webpack: (config) => {
    config.resolve.alias['@assets'] = path.join(__dirname, 'public/assets');
    return config;
  },
};

export default nextConfig;
