// import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          has: [
            {
              type: "host",
              // value: "fees.growthepie.xyz",
              value: "/fees"
            },
          ],
          destination: "/fees",
        },
        {
          source: "/",
          has: [
            {
              type: "host",
              value: "dev.fees.growthepie.xyz",
            },
          ],
          destination: "/fees",
        },
        {
          source: "/restake/:path*",
          destination: "https://jnt1ylgihi.execute-api.us-east-1.amazonaws.com/prod/:path*",
        },
      ],
    };
  },
  async redirects() {
    return [
      {
        source: "/optimism-retropgf-3",
        destination: "/trackers/optimism-retropgf-3",
        permanent: true,
      },
      {
        source: "/fees",
        destination: "https://fees.growthepie.xyz",
        permanent: true,
      },
      {
        source: "/blockspace/chain-overview",
        destination: "/blockspace/chain-overview/nft",
        permanent: true,
      },
    ];
  },
  images: {
    dangerouslyAllowSVG: true,
    // domains: ["ipfs.io", "content.optimism.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ipfs.io",
      },
      {
        protocol: "https",
        hostname: "content.optimism.io",
      },
    ],
  },

};

module.exports = nextConfig;