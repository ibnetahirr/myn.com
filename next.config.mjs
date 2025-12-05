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
  },

  async redirects() {
    return [
      {
        source: "/rambhakt",
        destination: "/rambhakt/index.html",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
