/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove: output: 'export',
  // Remove: trailingSlash: true,
  images: {
    unoptimized: true, // Keep this for Netlify
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