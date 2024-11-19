import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Disable cache temporarily
    config.cache = false;

    // Add alias for `canvas`
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      canvas: false,
    };

    return config;
  },
  crossOrigin: "use-credentials",
};

export default nextConfig;
