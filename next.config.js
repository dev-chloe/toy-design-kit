/** @type {import('next').NextConfig} */
const nextConfig = {
  // Linting Custom Directories and Files > https://nextjs.org/docs/pages/building-your-application/configuring/eslint#linting-custom-directories-and-files
  eslint: {
    dirs: [
      ".stories",
      "app",
      "stories",
    ],
  },
};

module.exports = nextConfig;
