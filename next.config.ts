import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
  crossOrigin: "use-credentials",
};

export default nextConfig;
