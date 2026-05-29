import type { NextConfig } from "next";

// For GitHub Pages **project** sites the app is served from
// https://<user>.github.io/<repo>/, so it needs a base path of "/<repo>".
// The deploy workflow sets NEXT_PUBLIC_BASE_PATH automatically from the repo
// name. Locally it is empty, so `npm run dev` / `npm run build` work at "/".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Produce a fully static site in ./out that any static host (GitHub Pages) can serve.
  output: "export",
  // GitHub Pages has no image optimizer.
  images: { unoptimized: true },
  // Serve correctly from a sub-path on project Pages sites.
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  // Emit each route as a folder with index.html (needed for static hosting of dynamic routes).
  trailingSlash: true,
  turbopack: {},
};

export default nextConfig;
