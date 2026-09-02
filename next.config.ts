import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "afterdarkcannabis.com" },
      { protocol: "https", hostname: "kennedyloudcannabis.com" },
      { protocol: "https", hostname: "stclaircannabis.com" },
      { protocol: "https", hostname: "athena-cannabis-images.vercel.app", pathname: "/products/delivery/v1/**" },
    ],
  },
  async redirects() {
    return [
      { source: "/exotic", destination: "/exotic-weed", permanent: true },
      { source: "/premium", destination: "/premium-weed", permanent: true },
      { source: "/aaa", destination: "/aaa-weed", permanent: true },
      { source: "/aa", destination: "/aa-weed", permanent: true },
      { source: "/budget", destination: "/budget-weed", permanent: true },
      { source: "/blog", destination: "/resources", permanent: true },
      { source: "/blog/:path*", destination: "/resources", permanent: true },
      { source: "/edibles", destination: "/items/edibles", permanent: true },
      { source: "/vapes", destination: "/items/vapes", permanent: true },
      { source: "/vape-disposables", destination: "/items/vape-disposables", permanent: true },
      { source: "/concentrates", destination: "/items/concentrates", permanent: true },
      { source: "/prerolls", destination: "/items/prerolls", permanent: true },
      { source: "/add-ons", destination: "/items/add-ons", permanent: true },
      { source: "/cigarettes", destination: "/items/cigarettes", permanent: true },
      { source: "/magic", destination: "/items/magic", permanent: true },
      { source: "/info/york-weed-dispensary", destination: "/info/toronto-weed-dispensary", permanent: true },
      { source: "/info/cheap-weed-york", destination: "/info/cheap-weed-toronto", permanent: true },
      { source: "/info/native-cigarettes-york", destination: "/info/native-cigarettes-toronto", permanent: true },
      { source: "/info/dispensary-near-me-york", destination: "/info/dispensary-near-me-toronto", permanent: true },
      { source: "/info/weed-store-near-brampton", destination: "/info/weed-store-near-the-annex-spadina", permanent: true },
      { source: "/info/weed-store-near-mississauga", destination: "/info/weed-store-near-the-annex-spadina", permanent: true },
    ];
  },
};

export default nextConfig;
