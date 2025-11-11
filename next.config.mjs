/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fazmwdhhessljlyxndee.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
    // or simpler:
    // domains: ["fazmwdhhessljlyxndee.supabase.co"],
  },
};

export default nextConfig;
