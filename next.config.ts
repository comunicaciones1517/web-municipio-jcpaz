import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "www.hospitalduhau.com.ar",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "intendenciasba.com.ar",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
