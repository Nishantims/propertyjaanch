import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site photos (public/images) cached for a week in browsers and at the edge, and optimised copies kept 30 days (owner, 2026-11-21: images load slowly). New photos get new file names, so a cached old copy is never shown in place of a new one.
  images: { minimumCacheTTL: 2592000 },
  async headers() {
    return [{ source: '/images/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' }] }]
  },
};

export default nextConfig;
