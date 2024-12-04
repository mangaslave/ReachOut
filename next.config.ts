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

  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "www.randstad.ca",
      "media.licdn.com",
      "truemechanical.com", 
    ],
  },
};

export default nextConfig;
