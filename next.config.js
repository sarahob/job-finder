/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/jobs",
        destination:
          "https://shesharpnl.github.io/hackathon-2023.sourcestack-data/assets/sourcestack-data-global.json",
      },
    ];
  },
};

module.exports = nextConfig;
