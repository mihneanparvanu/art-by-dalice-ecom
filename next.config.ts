import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import withLinaria from "next-with-linaria";

const withNextIntl = createNextIntlPlugin("./src/i8n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jqdglmngkfmgwvpikwre.supabase.co",
        pathname: "/**",
      },
    ],
  },
  // add other Next config options here
};

export default withNextIntl(withLinaria(nextConfig));
