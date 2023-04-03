/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['image.tmdb.org'],
  },
 
}

module.exports = nextConfig



// module.exports = {
//   images: {
//     domains: ['image.tmdb.org', 'tmdb.org'],
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'tmdb.org',
//         port: '',
//         pathname: '/image.tmdb.org/**',
//       },
//     ],
//   },
// };
