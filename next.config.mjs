/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.zyrosite.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fencierriofence.s3.amazonaws.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
