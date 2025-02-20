import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  distDir: 'dist', // Set the output directory
  output: 'export', // Configure for static export (e.g., `next export`)
  
  images: {
    remotePatterns:[
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
        search: "",
      }
    ]
  },
  
  webpack: (config) => {
    config.resolve.alias['@assets'] = path.join(__dirname, 'public/assets');
    return config;
  },
};

export default nextConfig;
