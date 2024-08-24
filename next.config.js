/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "swamp-output-6ff.notion.site",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
