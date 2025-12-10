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
       {
        source: "/resources/faqs",
        destination: "/faqs",
        permanent: true,
      },
       {
        source: "/legal",
        destination: "/privacy-policy",
        permanent: true, // 308 redirect (SEO-friendly)
      },
      {
        source: "/kids-programs",
        destination: "/after-school-program",
        permanent: true, // 308 redirect (SEO-friendly)
      },
       {
        source: "/kids-yoga-program",
        destination: "/after-school-program",
        permanent: true, // 308 redirect (SEO-friendly)
      },
       {
        source: "/kids-yoga-program",
        destination: "/after-school-program",
        permanent: true, // 308 redirect (SEO-friendly)
      },
        {
        source: "/infant-massage-program",
        destination: "/after-school-program",
        permanent: true, // 308 redirect (SEO-friendly)
      },

    ];
  },
};

export default nextConfig;
