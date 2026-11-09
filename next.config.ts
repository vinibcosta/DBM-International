import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera HTML estático em `out/` (servido pelo Nginx na VPS)
  output: "export",
};

export default nextConfig;
