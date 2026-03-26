import path from "node:path";
import { fileURLToPath } from "node:url";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {};
const rootDir = path.dirname(fileURLToPath(import.meta.url));

nextConfig.turbopack = {
  root: rootDir,
};

initOpenNextCloudflareForDev();

export default nextConfig;
