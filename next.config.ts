import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // AGENTS.md is maintained by hand; don't let `next dev` rewrite it.
  agentRules: false,
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
};

export default nextConfig;
