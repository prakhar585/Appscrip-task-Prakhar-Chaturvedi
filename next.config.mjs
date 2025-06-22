/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Add this for static export
  trailingSlash: true,
  images: {
    unoptimized: true,  // Required for static export
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/products',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;