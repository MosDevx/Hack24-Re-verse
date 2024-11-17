import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },

      {
        protocol: "https",
        hostname: "aceternity.com",
      },

      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },

      {
        protocol: "https",
        hostname: "img.freepik.com",
      },

      {
        protocol: "https",
        hostname: "www.youtube.com",
      },

      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "www.gravatar.com",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
      },
      {
        protocol: "https",
        hostname: "www.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "www.googletagmanager.com",
      },
      {
        protocol: "https",
        hostname: "www.google-analytics.com",
      },
      {
        protocol: "https",
        hostname: "www.googleadservices.com",
      },
      {
        protocol: "https",
        hostname: "www.googleoptimize.com",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com"
      },
      {
        protocol: "https",
        hostname: "picsum.photos"
      }
      
    ],

  }

};
  /* config options here */

export default nextConfig;
