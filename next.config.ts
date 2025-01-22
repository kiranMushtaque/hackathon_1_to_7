// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;



// next.config.js

// module.exports = {
//   images: {
//     domains: ['cdn.sanity.io'], // Add the domain from which you're loading images
//   },
// };









// import { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["cdn.sanity.io"], // Ensure this domain is added
//   },
// };

// export default nextConfig;











// // next.config.js
// module.exports = {
//   images: {
//     domains: [
//       'cdn.sanity.io', // Add any CDN that you're using
//       'sanity-nextjs-rouge.vercel.app' // Your domain for image hosting
//     ],
//   },
// };














module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Add the CDN hostname
      },
      {
        protocol: "https",
        hostname: "sanity-nextjs-rouge.vercel.app", // Your image hosting domain
      },
    ],
  },
};
