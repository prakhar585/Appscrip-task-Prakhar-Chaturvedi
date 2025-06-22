/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/products',
        permanent: true, // Use false for temporary redirects
      },
    ]
  },
};

export default nextConfig;