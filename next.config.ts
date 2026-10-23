import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Short, shareable link: yoursite.com/cv opens your CV.
  // (yoursite.com/whatsapp is handled in app/whatsapp/route.ts)
  async redirects() {
    return [
      { source: "/cv", destination: "/cv/Mathias-Njala-CV.pdf", permanent: false },
    ];
  },
};

export default nextConfig;
